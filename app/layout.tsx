import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Careers - FinanceLab X", description: "Join our team to bring financial opportunities to everyone. Explore our benefits, culture, and open positions." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
