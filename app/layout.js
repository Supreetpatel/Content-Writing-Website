import "./globals.css";

export const metadata = {
  title: "PixelProse",
  description: "Created by supreet patel for subhadip trivedy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
