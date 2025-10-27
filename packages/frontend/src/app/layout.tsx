import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextran App",
  description: "Next.js + Express.js monorepo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
