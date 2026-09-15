import { Loading3QuartersOutlined, } from "@ant-design/icons";
import {
    Check,
    ChevronDown,
    ImagePlus,
    Upload,
    X,
  } from "lucide-react";
  import type { RefObject } from "react";
  
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
  
  type Props = {
    form: ProductForm;
  
    updateForm: <K extends keyof ProductForm>(
      key: K,
      value: ProductForm[K]
    ) => void;
  
    images: string[];
  
    setImages: React.Dispatch<React.SetStateAction<string[]>>;
  
    handleImageUpload: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
  
    handleReplaceImage: () => void;
  
    handleAddImage: () => void;
  
    fileInputRef: RefObject<HTMLInputElement | null>;
  
    categories: string[];
  
    tags: string[];
  
    colors: string[];
  
    openCategory: boolean;
  
    setOpenCategory: React.Dispatch<React.SetStateAction<boolean>>;
  
    openTag: boolean;
  
    setOpenTag: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  const ProductImage = ({
    form,
    updateForm,
    images,
    setImages,
    handleImageUpload,
    handleReplaceImage,
    handleAddImage,
    fileInputRef,
    categories,
    tags,
    colors,
    openCategory,
    setOpenCategory,
    openTag,
    setOpenTag,
  }: Props) => {
    const removeImage = (index: number) => {
      setImages((prev) =>
        prev.filter((_, imageIndex) => imageIndex !== index)
      );
  
      if (index === 0) {
        updateForm("image", "");
      }
    };
  
    return (
      <div className="content-mood rounded-lg border border-[#e2e5e7] bg-white p-3">
        <h2 className="mb-3 text-[22px] font-semibold">
          Upload Product Image
        </h2>
  
        {/* IMAGE UPLOAD */}
        <div className=" rounded-md border border-[#e2e5e7] p-3">
          <label className="mb-2 block text-[15px] font-medium">
            Product Image
          </label>
  
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden "
          />
  
          {/* Main image */}
          <div className="content-input relative flex h-[120px] items-center justify-center rounded-md border border-[#e5e7eb] bg-[#fafafa]">
            {form.image ? (
              <img
                src={form.image}
                alt="Product"
                className="h-[105px] w-[105px] object-contain"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <Upload size={24} />
                <span className="mt-1 text-[9px]">
                  Upload product image
                </span>
              </div>
            )}
  
            {form.image && (
              <button
                onClick={handleReplaceImage}
                className="content-search absolute bottom-2 right-2 flex items-center gap-1 rounded border border-[#e2e5e7] bg-white px-2 py-1 text-[12px] hover:bg-gray-50"
              >
                <Loading3QuartersOutlined size={12} />
                Replace
              </button>
            )}
  
            {!form.image && (
              <button
                onClick={handleAddImage}
                className="content-search absolute flex items-center gap-1 bottom-2 left-2 rounded border border-[#e2e5e7] bg-white px-2 py-1 text-[12px] hover:bg-gray-50"
              >
                <Upload size={12}/>
                Browse
              </button>
            )}
          </div>
  
          {/* Thumbnails */}
          <div className="mt-3 flex gap-2">
            {images.slice(0, 3).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative flex h-[52px] w-[52px] items-center justify-center rounded border border-[#e2e5e7] bg-white"
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="h-full w-full rounded object-contain p-1"
                />
  
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500"
                >
                  <X size={10} />
                </button>
              </div>
            ))}
  
            {/* Add image */}
            {images.length < 3 && (
              <button
                onClick={handleAddImage}
                className="flex h-[52px] w-[90px] flex-col items-center justify-center rounded border border-dashed border-[#bfc6ca] text-[#55ad74] hover:bg-green-50"
              >
                <ImagePlus size={16} />
  
                <span className="mt-1 text-[10px]">
                  Add Image
                </span>
              </button>
            )}
          </div>
        </div>
  
        {/* CATEGORIES */}
        <div className="mt-4">
          <h3 className="mb-3 text-[22px] font-semibold">
            Categories
          </h3>
  
          <label className="mb-1 block text-[15px] font-medium">
            Product Categories
          </label>
  
          <div className="relative">
            <button
              onClick={() =>
                setOpenCategory((prev) => !prev)
              }
              className="content-input flex h-9 w-full items-center justify-between rounded-md border border-[#e2e5e7] px-3 text-left text-[14px]"
            >
              <span
                className={
                  form.category
                    ? "text-gray-500"
                    : "text-gray-400"
                }
              >
                {form.category || "Select your product"}
              </span>
  
              <ChevronDown size={14} />
            </button>
  
            {openCategory && (
              <div className="content-input absolute left-0 top-10 z-30 w-full rounded-md border border-[#e2e5e7] bg-white p-1 shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      updateForm("category", category);
                      setOpenCategory(false);
                    }}
                    className=" flex w-full items-center justify-between rounded px-2 py-2 text-left text-[12px] hover:bg-blue-400"
                  >
                    {category}
  
                    {form.category === category && (
                      <Check size={12} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
  
        {/* TAG */}
        <div className="mt-4">
          <label className="mb-1 block text-[15px] font-medium">
            Product Tag
          </label>
  
          <div className="relative">
            <button
              onClick={() => setOpenTag((prev) => !prev)}
              className="content-input flex h-9 w-full items-center justify-between rounded-md border border-[#e2e5e7] bg-[#fafbfb] px-3 text-left text-[14px]"
            >
              <span
                className={
                  form.tag
                    ? "text-gray-700"
                    : "text-gray-400"
                }
              >
                {form.tag || "Select your product"}
              </span>
  
              <ChevronDown size={14} />
            </button>
  
            {openTag && (
              <div className="content-input absolute left-0 top-10 z-30 w-full rounded-md border border-[#e2e5e7] bg-white p-1 shadow-lg">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      updateForm("tag", tag);
                      setOpenTag(false);
                    }}
                    className="flex w-full items-center justify-between rounded px-2 py-2 text-left text-[12px] hover:bg-blue-400"
                  >
                    {tag}
  
                    {form.tag === tag && (
                      <Check size={12} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
  
        {/* COLORS */}
        <div className="mt-4">
          <label className="mb-2 block text-[15px] font-medium">
            Select your color
          </label>
  
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => updateForm("color", color)}
                className={`relative h-7 w-7 rounded-md border border-gray-200 transition ${
                  form.color === color
                    ? "ring-2 ring-[#55ad74] ring-offset-1"
                    : ""
                }`}
                style={{
                  backgroundColor: color,
                }}
              >
                {form.color === color && (
                  <Check
                    size={12}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductImage;