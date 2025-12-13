import { MetadataRoute } from 'next';
import { fetchAirdrops, fetchCategories } from '@/libs/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://airdropsalert.vercel.app'; // Make sure this is your actual base URL


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [airdrops, categories] = await Promise.all([
    fetchAirdrops(),
    fetchCategories(),
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },

    ...airdrops.map((airdrop) => ({
      url: `${BASE_URL}/airdrop/${airdrop.id}`,
      lastModified: new Date(airdrop.updated_at || new Date()),
      priority: 0.7,
    })),

    ...categories.map((category) => ({
      url: `${BASE_URL}/categories/${category.slug}`,
      lastModified: new Date(category.updated_at || new Date()),
      priority: 0.8,
    })),
  ];
}
