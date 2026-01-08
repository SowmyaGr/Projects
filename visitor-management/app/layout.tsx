export const metadata = {
  title: "Visitor Management",
  description: "Visitor Form Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
