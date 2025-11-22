import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeCare Pharmacy - Spring Hill, FL | Free Home Delivery",
  description: "Serving Spring Hill, FL with complimentary free home delivery for disabled and elderly patients. Contactless delivery, curbside pickup, and expert pharmaceutical care. Call (352) 600-8083",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

