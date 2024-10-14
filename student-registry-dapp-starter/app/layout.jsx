import "./globals.css";
import { Providers } from "./components/providers";

export const metadata = {
  title: "Gida Cairo Bootcamp",
  description: "Frontend Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
