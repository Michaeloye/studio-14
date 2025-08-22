import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import HomeNav from "@/components/layout/navigation/HomeNav";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Studio 14",
  description: "Assessment website for Studio 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Provider>
          <HomeNav>{children}</HomeNav>


          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
