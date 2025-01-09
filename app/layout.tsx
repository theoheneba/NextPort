import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MouseTracker } from "@/components/mouse-tracker";
import { Analytics } from "@/components/analytics";
import { CustomCursor } from "@/components/custom-cursor";
import { ParticleBackground } from "@/components/particle-background";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Gen Portfolio | Creative Developer",
  description: "An innovative portfolio showcasing creative development work",
  openGraph: {
    title: "Next Devt-Gen Portfolio | Creativeloper",
    description: "An innovative portfolio showcasing creative development work",
    type: "website",
    url: "https://nextportlive.netlify.app/",
    images: ["/og-image.jpg"],
  },
    twitter: {
        card: "summary_large_image",
        title: "Next-Gen Portfolio | Creative Developer",
        description: "An innovative portfolio showcasing creative development work",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseTracker />
          <CustomCursor />
          <ParticleBackground />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}