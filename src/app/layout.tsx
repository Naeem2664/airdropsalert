import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import Navbar from "@/constants/Navigation/navbar/Navbar";
import Footer from "@/constants/Navigation/footer/Footer";
import { Roboto_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AirdropX",
  description:
    "Discover and track the latest cryptocurrency airdrops and giveaways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>
        <div className="pt-[100px]">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>

        {/* Toast container for global notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </body>
    </html>
  );
}
