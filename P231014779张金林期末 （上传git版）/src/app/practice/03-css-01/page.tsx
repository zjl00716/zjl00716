import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-8 px-2">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-8 text-center tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-3xl">🚫</span>
          毒品防范·健康卫士
          <span className="text-3xl">🧚‍♀️</span>
        </h1>
        <div className="bg-gradient-to-br from-white/90 to-green-50/90 rounded-3xl shadow-2xl p-8 border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2 border-b-2 border-green-300 pb-3">
            <span className="text-xl">🛡️</span>
            毒品危害的三个层面
          </h2>
          <ul className="list-none text-lg text-gray-700 space-y-4 pl-2">
            <li className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
              <span className="text-2xl">🧠</span>
              <div>
                <strong className="text-red-700">身体危害</strong> - 严重损害神经系统、心血管系统和免疫系统
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
              <span className="text-2xl">💔</span>
              <div>
                <strong className="text-orange-700">心理危害</strong> - 导致精神依赖、人格扭曲和心理疾病
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
              <span className="text-2xl">👥</span>
              <div>
                <strong className="text-blue-700">社会危害</strong> - 破坏家庭和睦，影响社会安全稳定
              </div>
            </li>
          </ul>
          <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl border-2 border-green-300">
            <div className="flex items-center gap-4">
              <div className="text-5xl animate-bounce">🧚‍♀️</div>
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-2">守护精灵小绿绿提醒你：</h3>
                <p className="text-green-600 leading-relaxed">
                  🚫 毒品是人类健康的天敌！我们要坚决说&ldquo;不&rdquo;，选择健康美好的生活方式。
                  记住：好奇害死猫，远离毒品保平安！✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 