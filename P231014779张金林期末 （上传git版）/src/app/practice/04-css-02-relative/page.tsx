'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 mb-4 tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
            <span className="text-3xl">⚡</span>
            用电安全·电力小专家
            <span className="text-3xl">🧚‍♀️</span>
          </h1>
          <p className="text-lg text-orange-600/90 max-w-3xl mx-auto">
            用电安全就像精心布置的电路系统，每个环节都要安全到位，确保电力安全运行，保护我们的生命财产安全。
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Section: 错误用电 */}
          <section className="bg-gradient-to-br from-white/90 to-red-50/90 rounded-2xl shadow-2xl border-2 border-red-300 p-8">
            <h2 className="text-2xl font-bold text-red-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-xl">⚠️</span>
              危险用电行为
            </h2>
            <div className="space-y-4 text-red-800 text-center">
              <div className="p-4 bg-red-200/80 rounded-xl border-2 border-red-400 relative">
                <span className="text-2xl">🔌</span>
                <p className="text-sm mt-1">插座超载使用</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-xl border-2 border-red-400 relative">
                <span className="text-2xl">💧</span>
                <p className="text-sm mt-1">湿手触碰电器</p>
              </div>
              <div className="p-4 bg-red-500/80 border-2 border-red-600 rounded-xl relative text-white">
                <span className="text-2xl animate-pulse">⚡</span>
                <p className="text-sm mt-1 font-bold">私拉乱接电线 (极度危险!)</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-xl border-2 border-red-400 relative">
                <span className="text-2xl">🔥</span>
                <p className="text-sm mt-1">电器长时间使用</p>
              </div>
            </div>
          </section>
          
          {/* Section: 正确用电 */}
          <section className="bg-gradient-to-br from-white/90 to-green-50/90 rounded-2xl shadow-2xl border-2 border-green-300 p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-xl">✅</span>
              安全用电规范
            </h2>
            <div className="space-y-4 text-green-800 text-center relative">
              <div className="p-4 bg-green-200/80 rounded-xl border-2 border-green-400 relative">
                <span className="text-2xl">🔌</span>
                <p className="text-sm mt-1">规范使用插座</p>
              </div>
              <div className="p-4 bg-green-200/80 rounded-xl border-2 border-green-400 relative">
                <span className="text-2xl">🙌</span>
                <p className="text-sm mt-1">干手操作电器</p>
              </div>
              {/* 安全提示位置 */}
              <div className="p-4 bg-green-100/60 border-2 border-dashed border-green-400 rounded-xl text-green-400 relative">
                <span className="text-2xl opacity-50">👻</span>
                <p className="text-sm mt-1">专业电工安装位置</p>
              </div>
              {/* 突出显示的安全行为 */}
              <div className="p-4 bg-green-600/90 rounded-xl absolute w-full transform translate-x-4 shadow-xl hover:scale-105 transition-transform cursor-pointer animate-pulse" 
                   style={{ top: 'calc(8rem + 2rem + 8px)' }}
                   onClick={() => alert('用电安全小贴士：\n\n✅ 电路安装一定要请专业电工！\n✅ 不私拉乱接电线\n✅ 定期检查电路安全\n✅ 使用合格的电器产品')}>
                <span className="text-2xl text-white animate-bounce">👨‍🔧</span>
                <p className="text-sm mt-1 text-white font-bold">专业电工规范安装</p>
              </div>
              <div className="p-4 bg-green-200/80 rounded-xl border-2 border-green-400 relative">
                <span className="text-2xl">🔄</span>
                <p className="text-sm mt-1">定期检查维护</p>
              </div>
              <p className="text-sm text-blue-600 pt-16 text-center bg-blue-50 rounded-xl p-4 mt-8 border border-blue-200">
                💡 用电智慧：即使我们强调专业安装的重要性，其他安全用电习惯的培养同样重要，
                因为每个环节都是用电安全的重要组成部分！
              </p>
            </div>
          </section>
        </div>

        {/* 用电安全知识展示 */}
        <div className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-yellow-300">
          <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">⚡</span>
            用电安全三大要点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-gradient-to-br from-white/90 to-yellow-50/90 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer border border-yellow-200"
                 onClick={() => alert('安全用电习惯：\n• 湿手不碰电器\n• 拔插头不拉电线\n• 电器用完要断电\n• 发现问题立即停用')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🔌</span>
              </div>
              <h3 className="font-bold text-yellow-700 mb-2">安全习惯</h3>
              <p className="text-yellow-600 text-sm">规范操作，安全第一</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-white/90 to-orange-50/90 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer border border-orange-200"
                 onClick={() => alert('设备选择：\n• 购买正规厂家产品\n• 检查3C认证标识\n• 选择适合功率的电器\n• 定期更换老化设备')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🏷️</span>
              </div>
              <h3 className="font-bold text-orange-700 mb-2">设备选择</h3>
              <p className="text-orange-600 text-sm">正规产品，质量保证</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-white/90 to-red-50/90 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer border border-red-200"
                 onClick={() => alert('应急处理：\n• 发生触电立即断电\n• 不能直接用手救人\n• 使用绝缘工具施救\n• 立即拨打急救电话120')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🚨</span>
              </div>
              <h3 className="font-bold text-red-700 mb-2">应急处理</h3>
              <p className="text-red-600 text-sm">科学施救，保护生命</p>
            </div>
          </div>
        </div>

        {/* 用电安全口诀 */}
        <div className="mt-8 bg-gradient-to-br from-white/90 to-purple-50/90 rounded-2xl p-6 border-2 border-purple-300 shadow-xl">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center flex items-center justify-center gap-2">
            <span className="text-xl">📖</span>
            用电安全口诀
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-purple-600 flex items-center gap-2">
                <span>🔐</span> 安全要点
              </h4>
              <ul className="text-sm text-purple-700 space-y-2 bg-purple-50 rounded-xl p-4">
                <li>• 湿手湿脚不碰电，安全用电记心间</li>
                <li>• 插座莫要超负荷，电线整齐不乱搭</li>
                <li>• 电器用完要断电，节能安全两不误</li>
                <li>• 发现异常立即停，专业维修才安心</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-indigo-600 flex items-center gap-2">
                <span>⚡</span> 应急常识
              </h4>
              <ul className="text-sm text-indigo-700 space-y-2 bg-indigo-50 rounded-xl p-4">
                <li>• 触电事故先断电，木棒挑开莫用手</li>
                <li>• 心肺复苏要及时，拨打120求救援</li>
                <li>• 电器起火先断电，泡沫灭火效果好</li>
                <li>• 预防胜过救治法，安全意识要提高</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-br from-white/90 to-cyan-50/90 rounded-2xl p-6 border-2 border-cyan-300 shadow-xl">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
            <span className="text-xl">💻</span>
            电力安全技术原理
          </h3>
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-sm text-green-100 font-mono p-6 rounded-xl overflow-x-auto">
            <div className="space-y-2">
              <div className="text-yellow-300 font-bold">{/* 用电安全系统架构 */}</div>
              <div><span className="text-green-300">.electrical-safety</span> {`{`}</div>
              <div className="ml-4"><span className="text-blue-300">grounding</span>: <span className="text-yellow-200">required</span>; <span className="text-gray-400">{/* 必须接地保护 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">circuit-breaker</span>: <span className="text-yellow-200">installed</span>; <span className="text-gray-400">{/* 安装断路器 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">insulation</span>: <span className="text-yellow-200">good-condition</span>; <span className="text-gray-400">{/* 绝缘良好 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">professional-install</span>: <span className="text-yellow-200">true</span>; <span className="text-gray-400">{/* 专业安装 */}</span></div>
              <div>{`}`}</div>
              <div className="mt-4 text-amber-200">
                {/* 用电安全的核心：规范安装 + 正确使用 + 及时维护 */}
                <br />{/* 三位一体，确保用电安全无忧 */}
              </div>
            </div>
          </div>
        </div>

        {/* 电力精灵提示区 */}
        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-300">
          <div className="flex items-center gap-4">
            <div className="text-5xl animate-bounce">🧚‍♀️</div>
            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">电力精灵小专家提醒你：</h3>
              <p className="text-orange-600 leading-relaxed">
                ⚡ 用电安全关系到每个人的生命安全！记住&ldquo;安全第一，预防为主&rdquo;，
                养成良好的用电习惯，让电力成为我们生活的好伙伴而不是安全隐患。
                遇到电器故障要及时请专业人员处理，不要自己动手维修！✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 