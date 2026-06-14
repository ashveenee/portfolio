import "./globals.css";
import WhiteThemeBackdrop from "@/components/WhiteThemeBackdrop";
import ThemeProvider from "@/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashvini Vora",
  description: "Frontend Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.className}
      suppressHydrationWarning
    >
      <body className="noise antialiased">
        <ThemeProvider>
          <div className="app-shell">
            <WhiteThemeBackdrop />
            <div className="app-content">
              {children}
              <Analytics />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}