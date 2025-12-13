import { Metadata } from "next";
import Script from "next/script";
import TermsAndConditionsPage from "@/components/terms";

// SEO Metadata for Google and AI Chatbots
export const metadata: Metadata = {
  title: "AirdropsAlert Terms & Conditions | Legal Agreement for Users",
  description: "Read the full Terms and Conditions for AirdropsAlert. This legal agreement outlines user obligations, acceptable use, intellectual property rights, disclaimers, and limitations of liability when using our platform.",
  keywords: "terms and conditions, terms of service, legal agreement, user agreement, AirdropsAlert, crypto platform terms, acceptable use policy, cryptocurrency risks, legal disclaimer",
  openGraph: {
    title: "AirdropsAlert Terms & Conditions | Legal Agreement for Users",
    description: "Read the full Terms and Conditions for AirdropsAlert. This legal agreement outlines user obligations, acceptable use, intellectual property rights, disclaimers, and limitations of liability when using our platform.",
    url: "https://www.airdropsalert.com/terms-conditions",
    siteName: "AirdropsAlert",
    images: [
      {
        url: "https://www.airdropsalert.com/assets/images/airdrop.jpg", // Adjust if a specific image for terms and conditions exists
        width: 1200,
        height: 630,
        alt: "AirdropsAlert Terms and Conditions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirdropsAlert Terms & Conditions | Legal Agreement for Users",
    description: "Read the full Terms and Conditions for AirdropsAlert. This legal agreement outlines user obligations, acceptable use, intellectual property rights, disclaimers, and limitations of liability when using our platform.",
    images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"], // Adjust if a specific image for terms and conditions exists
  },
  alternates: {
    canonical: "https://www.airdropsalert.com/terms-conditions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AirdropsAlert Terms and Conditions",
  "url": "https://www.airdropsalert.com/terms-conditions",
  "description": "Legal terms and conditions governing the use of the AirdropsAlert platform.",
  "publisher": {
    "@type": "Organization",
    "name": "AirdropsAlert",
    "url": "https://www.airdropsalert.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.airdropsalert.com/terms-conditions"
  }
};

export default function Terms() {
    return (
        <>
            <Script
                id="terms-conditions-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TermsAndConditionsPage />
        </>
    );
}
