import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCost Estimator – Know Your Out-of-Pocket Before You Book",
  description: "Predict out-of-pocket costs for medical appointments based on your insurance plan and provider data. Built for patients with high-deductible health plans."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4c489a29-05b7-49ad-ae28-b35e3e518542"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
