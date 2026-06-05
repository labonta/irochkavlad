import "./globals.css";
import Header from "@/components/layout/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
