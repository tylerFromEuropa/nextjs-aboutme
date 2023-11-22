import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Who is Tyler?",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="{inter.className} flex flex-col min-h-screen font-mono min-w-screen text-neon-green max-w-3xl mx-auto">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
