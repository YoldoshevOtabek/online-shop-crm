import { useRef, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Edit3,
  ImagePlus,
  Plus,
  Save,
  Search,
  Sparkles,
  Wand2,
} from "lucide-react";

import ProductImage from "./ProductImage";

type ProductForm = {
  name: string;
  description: string;
  price: string;
  discount: string;
  taxIncluded: boolean;
  expirationStart: string;
  expirationEnd: string;
  stock: string;
  unlimited: boolean;
  stockStatus: string;
  featured: boolean;
  category: string;
  tag: string;
  color: string;
  image: string;
};

const initialForm: ProductForm = {
  name: "iPhone 15",
  description:
    "The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum.",
  price: "999.89",
  discount: "999",
  taxIncluded: true,
  expirationStart: "",
  expirationEnd: "",
  stock: "",
  unlimited: true,
  stockStatus: "In Stock",
  featured: true,
  category: "",
  tag: "",
  color: "#DDEBD6",
  image: "",
};

const AddProduct = () => {
  const [form, setForm] = useState<ProductForm>(initialForm);

  const [images, setImages] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [openTag, setOpenTag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "Electronics",
    "Smartphones",
    "Laptops",
    "Accessories",
    "Clothing",
  ];

  const tags = [
    "New Product",
    "Best Seller",
    "Featured",
    "Sale",
    "Popular",
  ];

  const colors = [
    "#DDEBD6",
    "#E8D1D1",
    "#D8DDE2",
    "#EDE8D1",
    "#4A4E50",
  ];

  const updateForm = <K extends keyof ProductForm>(
    key: K,
    value: ProductForm[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Image upload
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    updateForm("image", imageUrl);

    setImages((prev) => {
      if (prev.length >= 3) {
        return [imageUrl, ...prev.slice(0, 2)];
      }

      return [...prev, imageUrl];
    });
  };

  // Remove old image and replace
  const handleReplaceImage = () => {
    fileInputRef.current?.click();
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const calculatePrice = () => {
    const price = Number(form.price);
    const discount = Number(form.discount);

    if (!price || !discount) {
      return price || 0;
    }

    return price - (price * discount) / 100;
  };

  // Save draft
  const handleSaveDraft = () => {
    localStorage.setItem(
      "productDraft",
      JSON.stringify({
        ...form,
        images,
      })
    );

    alert("Product draft saved successfully!");
  };

  // Publish
  const handlePublish = () => {
    if (!form.name.trim()) {
      alert("Please enter product name.");
      return;
    }

    if (!form.price || Number(form.price) <= 0) {
      alert("Please enter a valid product price.");
      return;
    }

    if (!form.category) {
      alert("Please select a category.");
      return;
    }

    const product = {
      id: Date.now(),
      ...form,
      images,
      finalPrice: calculatePrice(),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "publishedProduct",
      JSON.stringify(product)
    );

    alert("Product published successfully!");

    console.log("Published product:", product);
  };

  return (
    <div className="w-full min-h-screen   ">
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[22px] font-semibold ">
          Add New Product
        </h1>

        <div className=" flex items-center gap-2">
          <div className="content-search hidden h-9 w-[300px] items-center rounded-md border border-[#e5e7eb] bg-white px-3 md:flex">
            <input
              type="text"
              placeholder="Search product to add"
              className="w-full text-[14px] outline-none placeholder:text-gray-400"
            />

             <Search className="text-gray-400 text-[14px]"/>
          </div>

          <button
            onClick={handlePublish}
            className="flex h-9 items-center gap-1 rounded-md bg-[#48a868] px-4 text-[14px] font-medium text-white transition hover:bg-[#399657]"
          >
            <Sparkles size={14} />
            Publish Product
          </button>

          <button
            onClick={handleSaveDraft}
            className="content-search flex h-9 items-center gap-1 rounded-md border border-[#dfe3e6] bg-white px-3 text-[14px] font-medium text-[#374151] hover:bg-gray-50"
          >
            <Save size={14} />
            Save to draft
          </button>

          <button
            onClick={() => {
              setForm(initialForm);
              setImages([]);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dfe3e6] bg-white text-gray-500 hover:bg-gray-50"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.25fr_1fr]">
        {/* LEFT SIDE */}
        <div className="content-mood rounded-lg border border-[#e2e5e7] bg-white p-3">
          <h2 className="mb-4 text-[22px] font-semibold">
            Basic Details
          </h2>

          {/* Product name */}
          <div className="mb-3">
            <label className="mb-1 block text-[15px] font-medium">
              Product Name
            </label>

            <input
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
              className="content-input h-9 w-full rounded-md border border-[#e2e5e7] text-gray-400 bg-[#fafbfb] px-3 text-[15px] outline-none focus:border-[#48a868]"
            />
          </div>
        

          {/* PRICING */}
          <h2 className="mb-3 text-[22px] font-semibold">
            Pricing
          </h2>

          <div className="mb-3">
            <label className="mb-1 block text-[15px] font-medium">
              Product Price
            </label>

            <div className="content-input flex h-9 items-center rounded-md border border-[#e2e5e7] bg-[#fafbfb]">
              <span className="px-3 text-[15px] text-gray-400 font-semibold">
                $
              </span>

              <input
                type="number"
                value={form.price}
                onChange={(e) =>
                  updateForm("price", e.target.value)
                }
                className="w-full bg-transparent text-[15px] font-medium outline-none"
              />

              
              <select name="" id="" className="outline-0 mr-2 border-l border-[#e2e5e7] px-2 text-[15px]">
                <option value="us">US</option>
                <option value="rub">RUB</option>
                <option value="uz">SUM</option>
              </select>

              
            </div>
          </div>

          {/* Discount + Tax */}
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[15px] font-medium">
                Discounted Price{" "}
                <span className="font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <div className="content-input flex h-9 items-center rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-2">
                <span className="text-[15px]">$</span>

                <input
                  type="number"
                  value={form.discount}
                  onChange={(e) =>
                    updateForm("discount", e.target.value)
                  }
                  className="w-full bg-transparent px-1 text-[15px] outline-none"
                />

                <span className="text-[12px] text-gray-400 flex">
                  <span>Sale=$ </span>
                  <span>{calculatePrice().toFixed(2)}</span>
                </span>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-medium">
                Tax Included
              </label>

              <div className="flex h-9 items-center gap-5">
                <label className="flex items-center gap-1 text-[15px]">
                  <input
                    type="radio"
                    checked={form.taxIncluded}
                    onChange={() =>
                      updateForm("taxIncluded", true)
                    }
                  />
                  Yes
                </label>

                <label className="flex items-center gap-1 text-[15px]">
                  <input
                    type="radio"
                    checked={!form.taxIncluded}
                    onChange={() =>
                      updateForm("taxIncluded", false)
                    }
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Expiration */}
          <div className="mb-4">
            <label className="mb-1 block text-[15px] font-medium">
              Expiration
            </label>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input
                  type="date"
                  value={form.expirationStart}
                  onChange={(e) =>
                    updateForm(
                      "expirationStart",
                      e.target.value
                    )
                  }
                  className="content-input h-9 w-full rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-3 text-[14px] outline-none"
                />

                <CalendarDays
                  size={13}
                  className="pointer-events-none absolute right-2 top-3 text-gray-400"
                />
              </div>

              <div className="relative">
                <input
                  type="date"
                  value={form.expirationEnd}
                  onChange={(e) =>
                    updateForm("expirationEnd", e.target.value)
                  }
                  className="content-input h-9 w-full rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-3 text-[14px] outline-none"
                />

                <CalendarDays
                  size={13}
                  className="pointer-events-none absolute right-2 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* INVENTORY */}
          <h2 className="mb-3 text-[22px] font-semibold">
            Inventory
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[15px] font-medium">
                Stock Quantity
              </label>

              <input
                type="number"
                disabled={form.unlimited}
                value={form.stock}
                onChange={(e) =>
                  updateForm("stock", e.target.value)
                }
                placeholder="Unlimited"
                className="content-input h-9 w-full rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-3 text-[14px] outline-none disabled:text-gray-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-medium">
                Stock Status
              </label>

              <select
                value={form.stockStatus}
                onChange={(e) =>
                  updateForm("stockStatus", e.target.value)
                }
                className="content-input h-9 w-full rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-3 text-[14px] outline-none"
              >
                <option>In Stock</option>
                <option>Out of Stock</option>
                <option>Low Stock</option>
              </select>
            </div>
          </div>

          {/* Unlimited */}
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                updateForm("unlimited", !form.unlimited)
              }
              className={`relative h-6 w-12 rounded-full transition ${
                form.unlimited
                  ? "bg-[#55b477]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-[2px] h-5 w-5 rounded-full bg-white transition ${
                  form.unlimited ? "left-[26px]" : "left-[2px]"
                }`}
              />
            </button>

            <span className="text-[14px]">Unlimited</span>
          </div>

          {/* Featured */}
          <label className="mt-2 flex cursor-pointer items-center gap-2 text-[14px] text-gray-500">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                updateForm("featured", e.target.checked)
              }
              className="accent-[#55b477]"
            />

            Highlight this product in a featured section.
          </label>

          {/* Bottom buttons */}
          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={handleSaveDraft}
              className="content-input flex items-center gap-1 rounded-md border border-[#e2e5e7] bg-white px-3 py-2 text-[15px] font-medium hover:bg-gray-50"
            >
              <Save size={15} />
              Save to draft
            </button>

            <button
              onClick={handlePublish}
              className="rounded-md bg-[#48a868] px-4 py-2 text-[15px] font-medium text-white hover:bg-[#399657]"
            >
              Publish Product
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <ProductImage
          form={form}
          updateForm={updateForm}
          images={images}
          setImages={setImages}
          handleImageUpload={handleImageUpload}
          handleReplaceImage={handleReplaceImage}
          handleAddImage={handleAddImage}
          fileInputRef={fileInputRef}
          categories={categories}
          tags={tags}
          colors={colors}
          openCategory={openCategory}
          setOpenCategory={setOpenCategory}
          openTag={openTag}
          setOpenTag={setOpenTag}
        />
      </div>
    </div>
  );
};

export default AddProduct;