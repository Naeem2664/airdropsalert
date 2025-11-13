import CategoryPage from "@/components/categoryComponent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // <-- unwrap the promise safely
  return <CategoryPage slug={slug} />;
}
