import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-System",
  description: "E-System is a web application for managing your business.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={poppins.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
