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

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

// Fetch airdrops by category
export async function fetchAirdropsByCategories(slug: string): Promise<Airdrop[]> {
  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("category_slug", slug)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

// Fetch airdrop by ID
export async function fetchAirdropById(id: string): Promise<Airdrop | null> {
  if (!id) return null;

  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase fetch error:", error.message);
    return null;
  }

  return data ?? null;
}

// Fetch by platform
export async function fetchAirdropsByPlatform(platform: string): Promise<Airdrop[]> {
  const { data, error } = await supabase
    .from("airdrops")
    .select("*")
    .eq("platform_slug", platform)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

// Fetch categories
export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

export async function fetchCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? null;
}

// Fetch platforms
export async function fetchPlatforms(): Promise<Platform[]> {
  const { data, error } = await supabase
    .from("platforms")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

// Fetch airdrop types
export async function fetchAirdrop_Type(): Promise<AirdropType[]> {
  const { data, error } = await supabase
    .from("airdrop_type")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase fetch error: ${error.message}`);

  return data ?? [];
}

// Save contact form
export async function postUserMessages(
  name: string,
  email: string,
  phone: string,
  message: string
): Promise<void> {
  const { error } = await supabase.from("contact_user").insert([
    { name, email, phone, message },
  ]);

  if (error) throw new Error(`Supabase insert error: ${error.message}`);
}
