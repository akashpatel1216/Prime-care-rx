import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeCare Pharmacy - Spring Hill, FL | HealthMart Pharmacy",
  description: "Serving Spring Hill, FL with home delivery service available for disabled and elderly patients. HealthMart pharmacy accepting all major insurance. Contactless delivery, curbside pickup, and expert pharmaceutical care. Call (352) 600-8083",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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

