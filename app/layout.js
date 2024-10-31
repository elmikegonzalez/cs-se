import { Inter } from "next/font/google";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contentstack SE Starter",
  // description: "Generated by create next app",
  icons: [{rel: 'icon', url: '/favicon.ico'}]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <main className="dark:bg-evil">
      {children}
    </main>
    </body>
    </html>
);
}
