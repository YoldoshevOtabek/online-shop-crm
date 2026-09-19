import type { Dispatch, SetStateAction } from "react";

type FormData = {
  name: string;
  slug: string;
  description: string;
  logo: string;
  isActive: boolean;
};

type Brand = {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    products: number;
  };
};

export type BrandModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  editingBrand: Brand | null;

  handleSubmit: () => Promise<void>;

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  formData: FormData;

  setFormData: Dispatch<SetStateAction<FormData>>;

  createBrand: {
    isPending: boolean;
  };

  updateBrand: {
    isPending: boolean;
  };
};

export type ProductImage = {
    url: string;
    alt?: string;
    isMain?: boolean;
    sortOrder?: number;
  };