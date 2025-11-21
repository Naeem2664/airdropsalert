import CategoryPage from "@/components/categoryComponent";
import { fetchCategoryBySlug, } from "@/libs/api";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://airdropsalert.vercel.app";


interface Params {
  slug: string;
}
export async function generateMetadata({ params}: {params: Params;}): Promise<Metadata> {
  const { slug } = params;
  const category = await fetchCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Airdrop Not Found | Crypto Airdrops",
      description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      openGraph: {
        title: "Airdrop Not Found",
        description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
        images: [`${BASE_URL}/default-og-image.jpg`],
      },
      twitter: {
        card: "summary_large_image",
        title: "Airdrop Not Found",
        description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
        images: [`${BASE_URL}/default-og-image.jpg`],
      },
      alternates: { canonical: `${BASE_URL}/` },
    };
  }

  const shortDescription = category?.description
    ? category.description.length > 160
      ? category.description.substring(0, 157) + "..."
      : category.description
    : "Stay updated with the latest crypto airdrops and claim free tokens.";

  return {
    title: `${category.name} Airdrop | Claim Free Crypto Tokens`,
    description: shortDescription,
    openGraph: {
      title: `${category.name} Airdrop`,
      description: shortDescription,
      url: `${BASE_URL}/categories/${slug}`,
      siteName: "Airdrops Alert",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Airdrop`,
      description: shortDescription,
    },
    alternates: { canonical: `${BASE_URL}/categories/${slug}` },
  };
}

export default async function Page({ params }: { params:Params }) {
  const { slug } = params; 
  return <CategoryPage slug={slug} />;
}
 