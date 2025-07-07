import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-blue-600/90 backdrop-blur-md text-white p-4 shadow-lg w-full z-50 border-b border-rainbow-500/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors duration-300 tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-sm font-black text-white">🧚‍♀️</span>
          </div>
          精灵的校园安全小课堂
        </Link>
        <div className="hidden md:flex space-x-6 text-base">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            首页
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#safety-categories" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            安全分类
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#safety-teachers" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            安全导师
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#safety-activities" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            安全活动
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#learning-resources" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            学习资源
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="/practice/embed-demo" className="hover:text-yellow-300 transition-colors duration-300 relative group">
            安全问答
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center overflow-hidden relative">
      {/* 游戏化装饰背景 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none">
        {/* 彩色装饰图形 */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse">
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-lg">🔥</div>
        </div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg rotate-45">
          <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg"></div>
        </div>
        {/* 星星装饰 */}
        <div className="absolute bottom-32 left-1/4 w-8 h-8 text-yellow-400 animate-bounce">⭐</div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 text-pink-400 animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute top-1/4 left-1/3 w-7 h-7 text-purple-400 animate-bounce" style={{animationDelay: '1s'}}>🌟</div>
      </div>

      {/* 主体彩色渐变背景 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-20 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-600 to-blue-600 rounded-full blur-3xl"></div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 w-full z-10 relative mt-20">
        <header className="text-center mb-20 relative">
          {/* 标题装饰 */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mb-6 drop-shadow-lg tracking-wide animate-bounce">
            🧚‍♀️ 精灵的校园安全小课堂 ✨
          </h1>
          
          {/* 副标题装饰线 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-pink-500 to-blue-500"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto tracking-wide leading-relaxed">
            🌈 跟着可爱的精灵一起学习校园安全知识，让安全教育变得生动有趣，守护每一个同学的平安成长！
          </p>
          
          {/* 底部装饰 */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </header>

        {/* 分类标签区域 */}
        <div className="mb-12 flex justify-center" id="safety-categories">
          <div className="bg-gradient-to-br from-white/80 via-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/60">
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              🛡️ 校园安全分类 🛡️
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { name: "消防安全", color: "text-red-600", bgColor: "bg-red-100", icon: "🔥" },
                { name: "防溺水", color: "text-blue-600", bgColor: "bg-blue-100", icon: "🏊‍♂️" },
                { name: "毒品防范", color: "text-green-600", bgColor: "bg-green-100", icon: "🚫" },
                { name: "交通安全", color: "text-yellow-600", bgColor: "bg-yellow-100", icon: "🚗" },
                { name: "网络安全", color: "text-purple-600", bgColor: "bg-purple-100", icon: "🌐" }
              ].map((category, index) => (
                <div key={index} className={`flex flex-col items-center p-4 ${category.bgColor} rounded-2xl hover:shadow-lg transition-all cursor-pointer hover:scale-105 group`}>
                  <span className="text-3xl mb-3 group-hover:animate-bounce">{category.icon}</span>
                  <span className={`font-bold ${category.color} text-sm`}>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>

        {/* 安全导师区域 */}
        <section id="safety-teachers" className="py-20 bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-blue-100/80 backdrop-blur-sm rounded-3xl mt-20 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              🧚‍♀️ 安全精灵导师团 🧚‍♀️
            </h2>
            <p className="text-gray-600 text-lg">守护校园安全的可爱精灵们</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "消防精灵 小火苗", craft: "消防安全专家", desc: "教大家正确使用灭火器，掌握火场逃生技巧", emoji: "🔥", color: "from-red-400 to-orange-500" },
              { name: "水滴精灵 小蓝蓝", craft: "防溺水安全专家", desc: "分享游泳安全知识，远离溺水危险", emoji: "💧", color: "from-blue-400 to-cyan-500" },
              { name: "守护精灵 小绿绿", craft: "毒品防范专家", desc: "教导同学们识别毒品，拒绝不良诱惑", emoji: "🛡️", color: "from-green-400 to-emerald-500" }
            ].map((teacher, index) => (
              <div key={index} className="bg-white/70 rounded-3xl p-6 text-center hover:shadow-2xl transition-all hover:scale-105 group">
                <div className={`w-24 h-24 bg-gradient-to-br ${teacher.color} rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:animate-bounce shadow-lg`}>
                  {teacher.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{teacher.craft}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{teacher.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 安全活动区域 */}
        <section id="safety-activities" className="py-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              🎮 精彩安全活动 🎮
            </h2>
            <p className="text-gray-600 text-lg">有趣的校园安全体验活动</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "校园安全嘉年华", 
                date: "2024年12月", 
                location: "学校大操场",
                desc: "消防演练、急救体验、安全知识竞赛等精彩活动",
                emoji: "🎪",
                color: "from-pink-400 to-purple-500"
              },
              { 
                title: "小小安全员训练营", 
                date: "2024年11月", 
                location: "安全体验馆",
                desc: "培养学生安全意识，掌握基本安全技能",
                emoji: "👮‍♀️",
                color: "from-blue-400 to-cyan-500"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-white/90 to-purple-50/90 rounded-3xl p-8 hover:shadow-2xl transition-all hover:scale-105 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:animate-bounce shadow-lg`}>
                  {activity.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    📅 {activity.date}
                  </span>
                  <span className="flex items-center gap-1">
                    📍 {activity.location}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 学习资源区域 */}
        <section id="learning-resources" className="py-20 bg-gradient-to-br from-yellow-100/80 via-pink-100/80 to-purple-100/80 backdrop-blur-sm rounded-3xl mt-20 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 mb-4">
              📚 学习资源宝库 📚
            </h2>
            <p className="text-gray-600 text-lg">丰富多彩的安全学习材料</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "安全动画", icon: "🎬", color: "from-red-400 to-pink-500" },
              { title: "互动游戏", icon: "🎮", color: "from-blue-400 to-purple-500" },
              { title: "安全手册", icon: "📖", color: "from-green-400 to-teal-500" },
              { title: "知识测试", icon: "📝", color: "from-yellow-400 to-orange-500" }
            ].map((resource, index) => (
              <div key={index} className="bg-white/80 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:animate-bounce shadow-lg`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{resource.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* WakaTime统计组件 */}
        <div className="mt-20">
          <WakaTimeStats />
        </div>

      </main>
    </div>
  );
}
