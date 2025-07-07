import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🧚‍♀️ 精灵的校园安全小课堂 - 游戏化安全教育平台",
  description: "跟着可爱精灵学习校园安全知识！涵盖消防安全、防溺水、毒品防范等多个领域，让安全教育变得生动有趣，守护每一个同学的平安成长。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen relative`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, rgba(234, 179, 8, 0.03) 100%)
          `
        }}
      >
        {/* 游戏化装饰背景 */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          {/* 星星装饰 */}
          <div className="absolute top-1/3 left-1/3 text-4xl text-yellow-400 animate-bounce" style={{animationDelay: '3s'}}>⭐</div>
          <div className="absolute bottom-1/3 right-1/3 text-3xl text-pink-400 animate-bounce" style={{animationDelay: '1.5s'}}>✨</div>
          <div className="absolute top-1/5 right-1/5 text-2xl text-purple-400 animate-bounce" style={{animationDelay: '2.5s'}}>🌟</div>
          <div className="absolute bottom-1/5 left-1/5 text-3xl text-blue-400 animate-bounce" style={{animationDelay: '4s'}}>💫</div>
          {/* 精灵装饰 */}
          <div className="absolute top-2/3 left-1/6 text-5xl animate-bounce" style={{animationDelay: '5s'}}>🧚‍♀️</div>
          <div className="absolute top-1/6 right-1/3 text-4xl animate-bounce" style={{animationDelay: '6s'}}>🧚‍♂️</div>
        </div>
        {children}
      </body>
    </html>
  );
}
