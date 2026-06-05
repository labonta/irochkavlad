import "./globals.css";
import Header from "@/components/layout/header/Header";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html className="h-full">
      <body className="h-full flex flex-col bg-red-50">
        <Header />
        <main className="flex-1 pl-10 pr-10">
          {children}
        </main>
      </body>
    </html>
  );
}
