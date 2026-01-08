export const metadata = {
  title: "Visitor Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
