import { supabase } from "@/libs/supabase";
import { Airdrop } from "@/contracts/airdrop.type";
import { Category } from "@/contracts/category.type";
import { Platform } from "@/contracts/platform.type";
import { AirdropType } from "@/contracts/airdropType.type";

// Fetch all airdrops
export async function fetchAirdrops(): Promise<Airdrop[]> {
  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Fetched airdrops:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as Airdrop[]) || [];
}

export const fetchAirdropsByCategories = async (
  slug: string
): Promise<Airdrop[]> => {
  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("category_slug", slug)
    .order("created_at", { ascending: false });

  console.log("Fetched airdrops by category:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as Airdrop[]) || [];
};

// Fetch single airdrop by ID
export async function fetchAirdropById(id: string): Promise<Airdrop | null> {
  if (!id) return null;

  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase fetch error:", error);
    return null;
  }

  return data as Airdrop | null;
}
export async function fetchAirdropsByPlatform(platform: string): Promise<Airdrop[]> {
  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("platform_slug", platform)
    .order("created_at", { ascending: false });
  console.log("Fetched airdrops by platform:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as Airdrop[]) || [];
}


export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("Fetched categories:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as Category[]) || [];
}
export async function fetchPlatforms(): Promise<Platform[]> {
  const { data, error } = await supabase
    .from("platforms")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("Fetched platforms:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as Platform[]) || [];
}
export async function fetchAirdrop_Type(): Promise<AirdropType[]> {
  const { data, error } = await supabase
    .from("airdrop_type")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("Fetched airdrop types:", data);
  if (error) throw new Error(`Supabase fetch error: ${error.message}`);
  return (data as AirdropType[]) || [];
}
