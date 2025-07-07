import Link from "next/link";

export default function DdddddNavbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-4 shadow-lg border-b border-purple-300/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-sm">🧚‍♀️</span>
          </div>
          精灵的校园安全小课堂
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300 relative group flex items-center gap-1">
            🏠 首页
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#safety-categories" className="hover:text-yellow-300 transition-colors duration-300 relative group flex items-center gap-1">
            🛡️ 安全宝库
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
} 