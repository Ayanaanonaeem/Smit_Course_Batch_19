import "./globals.css";

export default function RootLayout({ children,teams }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
        {teams}
        </body>
    </html>
  );
}
