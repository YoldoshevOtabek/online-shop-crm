import { useEffect, useState } from "react";
import { Button, Input, Modal, Switch } from "antd";
import { X } from "lucide-react";
import useCreateCategory from "../hooks/useCreateCategory";
import type { Category, CategoryForm } from "../types/category";
import useUpdateCategory from "../hooks/useUpdateCategory";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  category?: Category | null;
}



const initialForm: CategoryForm = {
  name: "",
  slug: "",
  description: "",
  image: "",
  parentId: "",
  isActive: true,
  sortOrder: 0,
};

const CategoryModal = ({ open, onClose,category }: CategoryModalProps) => {
    const { mutate: createCategory, isPending: isCreating } =
    useCreateCategory()

  const { mutate: updateCategory, isPending: isUpdating } =
  useUpdateCategory();

  const isEdit = Boolean(category);
  const isPending = isCreating || isUpdating;

  const [form, setForm] = useState<CategoryForm>(initialForm);

  useEffect(() => {
    if (category) {
      setForm({
        name: category.name || "",
        slug: category.slug || "",
        description: category.description || "",
        image: category.image || "",
        parentId: category.parentId || "",
        isActive: category.isActive,
        sortOrder: category.sortOrder || 0,
      });
    } else {
      setForm(initialForm);
    }
  }, [category, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  const handleSubmit = () => {
    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      description: form.description.trim(),
      image: form.image.trim(),
      parentId: form.parentId.trim() || null,
      isActive: form.isActive,
      sortOrder: Number(form.sortOrder),
    };
  
    if (isEdit && category) {
      updateCategory(
        {
          id: category.id,
          ...payload,
        },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
  
      return;
    }
  
    createCategory(payload, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      centered
      width={600}
      closable={false}
      maskClosable={!isPending}
      styles={{
        content: {
          background: "transparent",
          padding: 0,
          boxShadow: "none",
          border: "none",
        },
        body: {
          padding: 0,
        },
      }}
      className="[&_.ant-modal-content]:bg-transparent! [&_.ant-modal-content]:p-0! [&_.ant-modal-content]:shadow-none!"
    >
      <div className="content-mood overflow-hidden rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
        <span className="text-[17px] font-semibold">
        {isEdit ? "Edit Category" : "Category"}
        </span>

          <button
            type="button"
            onClick={handleClose}
            disabled={isPending}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-gray-400 transition hover:bg-white/10 hover:text-red-500"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            
            {/* Category Name */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Category Name
              </label>

              <Input
                size="small"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Smartphones"
                className="content-input"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Slug
              </label>

              <Input
                size="small"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="smartphones"
                className="content-input"
              />
            </div>

            {/* Image */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Image URL
              </label>

              <Input
                size="small"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="content-input"
              />
            </div>

            {/* Parent ID */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Parent ID
              </label>

              <Input
                size="small"
                name="parentId"
                value={form.parentId}
                onChange={handleChange}
                placeholder="Parent category UUID"
                className="content-input"
              />

              <p className="mt-1 text-[10px] text-gray-400">
                Root category bo'lsa bo'sh qoldiring
              </p>
            </div>

            {/* Sort Order */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Sort Order
              </label>

              <Input
                size="small"
                type="number"
                name="sortOrder"
                value={form.sortOrder}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    sortOrder: Number(e.target.value),
                  }))
                }
                placeholder="0"
                className="content-input"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-1.5 block text-xs font-medium">
                Status
              </label>

              <div className="content-input flex h-7 items-center justify-between rounded-md border px-3">
                <span className="text-xs">
                  {form.isActive ? "Active" : "Inactive"}
                </span>

                <Switch
                  size="small"
                  checked={form.isActive}
                  onChange={(checked) =>
                    setForm((prev) => ({
                      ...prev,
                      isActive: checked,
                    }))
                  }
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs font-medium">
                Description
              </label>

              <Input.TextArea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Category description"
                rows={3}
                className="content-input"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex justify-end gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">
            <Button
              size="small"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button
              size="small"
              type="primary"
              loading={isPending}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;