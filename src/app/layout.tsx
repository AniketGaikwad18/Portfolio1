import ClientExperience from "@/components/canvas/ClientExperience";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aniket | Machine Learning Engineer",
  description: "The Road to Intelligent Systems - 3D Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-50 font-sans antialiased selection:bg-emerald-500/30 text-gray-900`}>
        {/* The 3D Canvas Background */}
        <div className="fixed inset-0 z-0">
          <ClientExperience />
        </div>

        {/* Next.js page content (empty for now as all UI is in Drei Scroll) */}
        <main className="relative z-10 pointer-events-none">
          {children}
        </main>
      </body>
    </html>
  );
}
