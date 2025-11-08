// types/airdrops.type.ts
export interface Airdrop {
    id: string;
    name: string;
    image_urls: string[];
    actions: string | null;
    trust_score: number | null;
    sponsored: boolean;
    category: string | null;
    type: string | null;
    airdrop_status: string | null;
    total_distribution: string | null;
    platform: string | null;
    join_link: string | null;
    estimated_value: string | null;
    tokens_per_claim: string | null;
    total_participants: string | null;
    social_links: Record<string, string>[];
    listing_date: string | null;
    details: Record<string, unknown>[];
    obj_id: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }
  