import type { Metadata } from "next";
import  "bootstrap/dist/css/bootstrap.min.css"
import './ui/globals.css';


export const metadata: Metadata = {
  title: "User Management",
  description: "User management app build with Next.js, Auth.js, Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-vh-100 d-flex justify-content-center align-items-start">
          {children}
      </body>
    </html>
  );
}
