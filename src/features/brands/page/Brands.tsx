import { useState } from "react";
import {
  Button,
  Empty,
  Input,
  Modal,
  Popconfirm,
  Spin,
  Switch,
  Table,
  message,
} from "antd";

import {
  Edit3,
  Plus,
  Trash2,
} from "lucide-react";

import useBrands from "../hooks/useBrands";
import useCreateBrands from "../hooks/useCreateBrands";
import useUpdateBrands from "../hooks/useUpdateBrands";
import useDeleteBrands from "../hooks/useDeleteBrands";
import { BrandModal } from "../components/BrandModal";

const Brands = () => {
  const {
    brandData,
    isLoading,
    isError,
  } = useBrands();

const createBrand = useCreateBrands()
const updateBrand = useUpdateBrands()
const deleteBrand = useDeleteBrands()


  const [open, setOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    logo: "",
    isActive: true,
  });

  const handleOpenCreate = () => {
    setEditingBrand(null);

    setFormData({
      name: "",
      slug: "",
      description: "",
      logo: "",
      isActive: true,
    });

    setOpen(true);
  };

  const handleOpenEdit = (brand: any) => {
    setEditingBrand(brand);

    setFormData({
      name: brand.name || "",
      slug: brand.slug || "",
      description: brand.description || "",
      logo: brand.logo || "",
      isActive: brand.isActive ?? true,
    });

    setOpen(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      message.warning("Brand name kiriting");
      return;
    }

    try {
      if (editingBrand) {
        await updateBrand.mutateAsync({
          id: editingBrand.id,
          data: formData,
        });
        

        message.success("Brand yangilandi");
      } else {
        await createBrand.mutateAsync(formData);

        message.success("Brand yaratildi");
      }

      setOpen(false);
    } catch (error: any) {
      message.error(
        error?.response?.data?.message || "Xatolik yuz berdi"
      );
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBrand.mutateAsync(id);

    } catch (error: any) {
      message.error(
        error?.response?.data?.message || "Brandni o'chirishda xatolik"
      );
    }
  };

  const brands = Array.isArray(brandData)
    ? brandData
    : brandData?.data || [];

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      width: 100,
      render: (logo: string) => (
        <div className="flex h-12 w-16 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-[#25282a] dark:bg-[#111414]">
          {logo ? (
            <img
              src={logo}
              alt="brand"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-xs text-gray-400">No logo</span>
          )}
        </div>
      ),
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <span className="font-medium">{name}</span>
      ),
    },

    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      render: (slug: string) => (
        <span className="text-gray-500">{slug}</span>
      ),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) => (
        <span className="line-clamp-1">
          {description || "-"}
        </span>
      ),
    },

    {
      title: "Products",
      key: "products",
      render: (_: any, record: any) => (
        <span>{record._count?.products ?? 0}</span>
      ),
    },

    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive: boolean) => (
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isActive
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_: any, record: any) => (
        <div className="flex items-center gap-2">
          <Button
            type="text"
            icon={<Edit3 size={17} />}
            onClick={() => handleOpenEdit(record)}
          />

          <Popconfirm
            title="Brandni o'chirmoqchimisiz?"
            description="Bu amalni qaytarib bo'lmaydi."
            okText="Ha"
            cancelText="Yo'q"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button
              type="text"
              danger
              icon={<Trash2 size={17} />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Empty description="Brandlarni yuklashda xatolik" />
      </div>
    );
  }

  return (
    <div className="content-mood min-h-full rounded-xl border border-gray-200 bg-white p-6 dark:border-[#25282a] dark:bg-[#111414]">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            Brands
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Store brandlarini boshqaring
          </p>
        </div>

        <Button
          type="primary"
          icon={<Plus size={17} />}
          onClick={handleOpenCreate}
        >
          Add Brand
        </Button>
      </div>

      {/* Table */}
      <Table
        rowKey="id"
        columns={columns}
        dataSource={brands}
        pagination={{
          pageSize: 10,
        }}
        scroll={{ x: 900 }}
      />

      {/* Modal */}
     <BrandModal 
     open={open}
     setOpen={setOpen} 
     editingBrand={editingBrand}
     handleSubmit={handleSubmit}
     handleChange={handleChange}
     formData={formData}
     setFormData={setFormData}
     createBrand={createBrand}
     updateBrand={updateBrand}
     />
    </div>
  );
};

export default Brands;