import { Metadata } from "next";
import Script from "next/script";
import PrivacyPolicyPage from "@/components/privacy/index";

// SEO Metadata for Google and AI Chatbots
export const metadata: Metadata = {
  title: "AirdropsAlert Privacy Policy | Data Protection & Your Rights",
  description: "Read AirdropsAlert's comprehensive Privacy Policy to understand how we collect, use, protect, and handle your personal information when you use our platform. Learn about your data rights and our commitment to privacy.",
  keywords: "privacy policy, AirdropsAlert, crypto privacy, data protection, personal information, cryptocurrency platform, user data, GDPR, CCPA",
  openGraph: {
    title: "AirdropsAlert Privacy Policy | Data Protection & Your Rights",
    description: "Read AirdropsAlert's comprehensive Privacy Policy to understand how we collect, use, protect, and handle your personal information when you use our platform. Learn about your data rights and our commitment to privacy.",
    url: "https://www.airdropsalert.com/privacy-policy",
    siteName: "AirdropsAlert",
    images: [
      {
        url: "https://www.airdropsalert.com/assets/images/airdrop.jpg", // Adjust if a specific image for privacy policy exists
        width: 1200,
        height: 630,
        alt: "AirdropsAlert Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirdropsAlert Privacy Policy | Data Protection & Your Rights",
    description: "Read AirdropsAlert's comprehensive Privacy Policy to understand how we collect, use, protect, and handle your personal information when you use our platform. Learn about your data rights and our commitment to privacy.",
    images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"], // Adjust if a specific image for privacy policy exists
  },
  alternates: {
    canonical: "https://www.airdropsalert.com/privacy-policy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AirdropsAlert Privacy Policy",
  "url": "https://www.airdropsalert.com/privacy-policy",
  "description": "Comprehensive privacy policy for AirdropsAlert, detailing data collection, usage, and user rights.",
  "publisher": {
    "@type": "Organization",
    "name": "AirdropsAlert",
    "url": "https://www.airdropsalert.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.airdropsalert.com/privacy-policy"
  }
};

export default function Privacy() {
    return (
        <>
            <Script
                id="privacy-policy-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PrivacyPolicyPage />
        </>
    );
}
