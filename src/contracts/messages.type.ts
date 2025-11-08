export interface Messages {
    id: string;
    name: string;
    phone: string | null;
    email: string | null;
    message: string;
    created_at?: string;
    updated_at?: string;
}