import "./globals.css";

export const metadata = {
  title: "Lilac Clone",
  description: "Therapy services for adults",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}