import "./globals.css";

export const metadata = {
  title: "Kesh X",
  description: "A social media app for the Sadanandan family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-900 min-h-screen flex">{children}</div>
      </body>
    </html>
  );
}
