import CategoryPage from "@/components/categoryComponent";
import { fetchCategoryBySlug, } from "@/libs/api";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://airdropsalert.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const airdrop = await fetchCategoryBySlug(slug);

  if (!airdrop) {
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

  const shortDescription = airdrop?.description
    ? airdrop.description.length > 160
      ? airdrop.description.substring(0, 157) + "..."
      : airdrop.description
    : "Stay updated with the latest crypto airdrops and claim free tokens.";

  return {
    title: `${airdrop.name} Airdrop | Claim Free Crypto Tokens`,
    description: shortDescription,
    openGraph: {
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
      url: `${BASE_URL}/categories/${slug}`,
      siteName: "Airdrops Alert",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
    },
    alternates: { canonical: `${BASE_URL}/categories/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  return <CategoryPage slug={slug} />;
}
 