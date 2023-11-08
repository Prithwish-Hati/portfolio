import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Dev Portfolio",
  description: "Prithwish Hati's Complete Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
