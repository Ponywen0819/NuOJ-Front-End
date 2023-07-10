import { AuthProvider } from "@/contexts/auth";
import LogoWhite from '@/public/logo-white.svg';
import Icon from '@/public/logo_min.png';
import "./global.css";
import { MockProvider } from '@/mocks/provider';

export const metadata = {
  title: {
    template: "Nuoj - %s",
    default: "Nuoj",
  },
  openGraph: {
    title: "NuOJ - Index",
    url: "https://nuoj.ntut-xuan.net/",
    image: LogoWhite.src,
  },
  icons: {
    icon: Icon.src,
  },
  description: "一款來自 國立臺北科技大學 的線上程式評測系統s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-gray-100 bg-opacity-80 min-h-screen">
        <MockProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </MockProvider>
      </body>
    </html>
  );
}
