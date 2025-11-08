export interface Category {
    id?: string|number;
    name: string;
    slug: string;
    description: string | null;
    created_at?: string;
    updated_at?: string;
  }