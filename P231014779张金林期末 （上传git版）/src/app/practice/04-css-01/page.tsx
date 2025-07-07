import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-4 text-center tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-3xl">🏫</span>
          校园安全·友爱守护者
          <span className="text-3xl">🧚‍♀️</span>
        </h1>
        <h3 className="text-xl font-bold text-purple-600 mb-6 text-center leading-relaxed">校园安全文化建设历程</h3>
        <table className="mx-auto w-4/5 border-separate border-spacing-y-3 mb-8">
          <tbody>
            <tr><td className="text-purple-600 py-3 px-4 border-b-2 border-purple-300 bg-purple-50 rounded-lg">🏫 1.1 建立安全管理制度，完善校园安全体系</td></tr>
            <tr><td className="text-pink-600 py-3 px-4 border-b-2 border-pink-300 bg-pink-50 rounded-lg">🛡️ 1.2 加强安全教育宣传，提高师生安全意识</td></tr>
            <tr><td className="text-indigo-600 py-3 px-4 border-b-2 border-indigo-300 bg-indigo-50 rounded-lg">👥 1.3 营造友爱互助氛围，防范校园欺凌事件</td></tr>
            <tr><td className="text-purple-600 py-3 px-4 border-b-2 border-purple-300 bg-purple-50 rounded-lg">✨ 1.4 构建安全校园文化，创建和谐育人环境</td></tr>
          </tbody>
        </table>
        <div className="mb-8">
          <h4 className="text-center text-lg font-semibold mb-4 text-purple-700 flex items-center justify-center gap-2">
            <span>🔍</span>
            校园安全知识资源
          </h4>
          <form action="https://search.sina.com.cn/" target="_blank" className="flex justify-center gap-3">
            <input type="text" name="q" defaultValue="校园安全防护知识" placeholder="搜索校园安全知识" className="px-4 py-3 border-2 border-purple-300 rounded-xl w-72 focus:outline-none focus:border-purple-500 transition" />
            <input type="submit" value="搜索资料" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold cursor-pointer hover:from-purple-700 hover:to-pink-700 transition shadow-lg" />
          </form>
        </div>
        <div className="mb-8">
          <p className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-300 text-lg p-6 rounded-2xl mb-6 shadow-xl">校园安全是每个同学健康成长的基础保障，我们要共同努力，营造一个安全、和谐、友爱的学习环境 🏫✨</p>
          <ol className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-2 border-pink-300 text-lg p-6 rounded-2xl mb-6 list-decimal list-inside shadow-xl">
            <li>防欺凌教育 - 学会友爱互助，拒绝校园暴力</li>
            <li>心理健康 - 保持阳光心态，及时寻求帮助</li>
            <li>应急演练 - 掌握逃生技能，提高自救能力</li>
          </ol>
          <ul className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-2 border-indigo-300 text-lg p-6 rounded-2xl mb-6 list-disc list-inside shadow-xl">
            <li>友善沟通 - 用温和的语言解决矛盾冲突</li>
            <li>团结协作 - 互相帮助，共同进步成长</li>
            <li>包容理解 - 尊重差异，建立和谐关系</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-4 flex items-center justify-center gap-2">
            <span>🛡️</span>
            校园安全守护
          </h2>
          <p className="text-center text-lg mb-4">安全教育 <a href="https://www.moe.gov.cn/" className="text-purple-700 underline hover:text-pink-600 transition">教育部安全教育平台</a></p>
        </div>
        <div className="mb-8 flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
          </div>
          <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100/80 to-pink-100/80 p-8 border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-2xl">🧚‍♀️</span>
              校园安全守护要点
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-200 shadow-md">
                <h4 className="font-semibold text-pink-600 flex items-center gap-2">
                  <span>💖</span>
                  友爱互助
                </h4>
                <p className="text-purple-700 text-sm mt-2">同学之间要相互关爱，遇到困难及时伸出援手，共同营造温暖的校园环境</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200 shadow-md">
                <h4 className="font-semibold text-purple-600 flex items-center gap-2">
                  <span>🚨</span>
                  及时求助
                </h4>
                <p className="text-indigo-700 text-sm mt-2">遇到危险或不公平对待时，要勇敢向老师、家长或相关部门求助，保护自己和他人</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200 shadow-md">
                <h4 className="font-semibold text-indigo-600 flex items-center gap-2">
                  <span>🌟</span>
                  正面影响
                </h4>
                <p className="text-purple-700 text-sm mt-2">用自己的正能量影响身边的同学，传播善意，做校园文明的传播者和守护者</p>
              </div>
            </div>
            
            {/* 校园精灵提示区 */}
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-300">
              <div className="flex items-center gap-3">
                <div className="text-3xl animate-bounce">🧚‍♀️</div>
                <div>
                  <h4 className="font-bold text-orange-700">友爱精灵温馨提醒：</h4>
                  <p className="text-orange-600 text-sm mt-1">
                    🏫 校园是我们共同的家，让我们用友爱和包容创造最美好的学习环境！✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 