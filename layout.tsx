import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sahayak Web App",
  description: "Safety and monitoring dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="\2.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen bg-green-50">
        <Navbar />
        <main className="flex-grow" >{children}</main>
        <Footer />
      </body>
    </html>
  );
}