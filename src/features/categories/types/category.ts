export interface CategoryForm {
    name: string;
    slug: string;
    description: string;
    image: string;
    parentId: string;
    isActive: boolean;
    sortOrder: number;
  }

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    parentId: string | null;
    isActive: boolean;
    sortOrder: number;
    createdAt?: string;
  }

export interface UpdateCategoryData {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    parentId: string | null;
    isActive: boolean;
    sortOrder: number;
  }