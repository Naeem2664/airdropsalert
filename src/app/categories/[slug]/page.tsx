import CategoryPage from "@/components/categoryComponent";
import { fetchCategoryBySlug,fetchCategories } from "@/libs/api";
import { Metadata } from "next";




export async function generateMetadata({ params}: {params: Promise<{ slug: string }>;}): Promise<Metadata> {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Airdrop Not Found | Crypto Airdrops",
      description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      openGraph: {
        title: "Airdrop Not Found",
        description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      },
      twitter: {
        card: "summary_large_image",
        title: "Airdrop Not Found",
        description: "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      },
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
      siteName: "AirdropsAlert",
      type: "website",
      images: [
        {
          url: "https://www.airdropsalert.com/assets/images/airdrop.jpg",
          width: 1200,
          height: 630,
          alt: `${category.name} Category Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Airdrop`,
      description: shortDescription,
      images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"],
    },
    alternates: {
      canonical: `https://www.airdropsalert.com/categories/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    params: { slug: category.slug },
  }));
}
export default async function Page({ params }: { params:Promise<{ slug: string }> }) {
  const { slug } =await params; 
  return <CategoryPage slug={slug} />;
}
 