import { Theme, ThemePanel } from "@radix-ui/themes";
import "./globals.css";
// import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./themes-config.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden ${inter.variable} font-sans `}>
        <Theme>
          <Navigation></Navigation>
          {children}
        </Theme>
      </body>
    </html>
  );
}
