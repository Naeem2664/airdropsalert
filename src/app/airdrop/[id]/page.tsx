// app/airdrops/[id]/page.tsx
import AirdropDetailsPage from "@/components/detailsPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } =await params;
  return <AirdropDetailsPage id={id} />;
}