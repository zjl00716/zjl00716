import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          {/* 游戏化彩色遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-500/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-yellow-500/20"></div>
          
          {/* 彩色装饰角落 */}
          <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xs font-bold animate-bounce">✨</div>
          <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xs font-bold animate-bounce" style={{animationDelay: '0.2s'}}>🌟</div>
          <div className="absolute bottom-3 left-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xs font-bold animate-bounce" style={{animationDelay: '0.4s'}}>⭐</div>
          <div className="absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xs font-bold animate-bounce" style={{animationDelay: '0.6s'}}>💫</div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow relative">
        {/* 彩色装饰线 */}
        <div className="absolute top-6 left-6 w-12 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"></div>
        
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-3 pt-3 tracking-wide">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-block text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-all hover:scale-105 ${
                  index % 6 === 0 ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200 hover:shadow-md' :
                  index % 6 === 1 ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200 hover:shadow-md' :
                  index % 6 === 2 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border border-yellow-200 hover:shadow-md' :
                  index % 6 === 3 ? 'bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border border-green-200 hover:shadow-md' :
                  index % 6 === 4 ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 hover:shadow-md' :
                  'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border border-gray-200 hover:shadow-md'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto relative">
          {/* 彩色底部装饰线 */}
          <div className="absolute -top-3 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          
          <div className="font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-300 flex items-center">
            <span className="mr-2">🎮 开始挑战</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">→</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      {/* 外层彩色光晕效果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
      
      {/* 主卡片 */}
      <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-purple-500/20 border border-purple-200/50">
        
        {/* 顶部彩色装饰边框 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* 游戏化装饰元素 */}
        <div className="absolute top-4 right-4 w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-lg animate-pulse">
            🎯
          </div>
        </div>
        
        {/* 浮动装饰星星 */}
        <div className="absolute top-2 left-2 text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">⭐</div>
        <div className="absolute top-6 left-6 text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{animationDelay: '0.3s'}}>✨</div>
        
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
} 