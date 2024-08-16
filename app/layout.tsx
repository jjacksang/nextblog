import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jacksang의 Next연구 일지",
    description: "Jacksang's Next.js Server action testing and develop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="max-w-2xl m-auto">
                <main className="p-6">
                    <Header />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
