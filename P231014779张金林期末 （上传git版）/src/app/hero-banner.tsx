'use client';

import { useState, useEffect } from 'react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/img/safety-hero1.jpg',
      title: '🔥 消防安全小英雄',
      subtitle: '学会正确逃生，做校园消防安全守护者'
    },
    {
      image: '/img/safety-hero2.jpg', 
      title: '🏊‍♂️ 防溺水安全卫士',
      subtitle: '掌握水中安全知识，享受快乐安全的夏日时光'
    },
    {
      image: '/img/safety-hero3.jpg',
      title: '🚫 健康生活守护神',
      subtitle: '远离有害物质，拥抱健康快乐的校园生活'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 每4秒切换一次

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 shadow-2xl rounded-b-3xl">
      {/* 轮播图片 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30"></div>
            {/* 游戏化装饰元素 */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 right-32 w-14 h-14 bg-green-400/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        ))}
      </div>

      {/* 文字内容 */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-6 max-w-4xl">
          <div className="mb-4">
            {/* 装饰线 */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full shadow-lg animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full m-1"></div>
              </div>
              <div className="w-24 h-px bg-gradient-to-r from-yellow-400 to-pink-500"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                <div className="w-2 h-2 bg-white rounded-full m-1"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
            </div>
          </div>
          
          <h1 
            key={`title-${currentSlide}`}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-2xl animate-fade-in tracking-wider"
          >
            {slides[currentSlide].title}
          </h1>
          
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-lg md:text-2xl text-yellow-100 mb-8 drop-shadow-lg animate-fade-in tracking-wide"
          >
            {slides[currentSlide].subtitle}
          </p>
          
          {/* CTA按钮 */}
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border border-pink-400 flex items-center gap-2">
              <span>🎮</span>
              开始探索
            </button>
            <button className="border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-purple-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>📖</span>
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* 左右切换按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/90 hover:to-pink-600/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500/80 to-blue-500/80 hover:from-pink-600/90 hover:to-blue-600/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 底部指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-yellow-400 to-pink-500 shadow-lg shadow-pink-500/50 scale-125' 
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* 游戏化装饰元素 */}
      <div className="absolute top-8 left-8 text-yellow-300 text-2xl animate-bounce">⭐</div>
      <div className="absolute top-12 right-12 text-pink-300 text-xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
      <div className="absolute bottom-8 right-8 text-purple-300 text-2xl animate-bounce" style={{animationDelay: '1s'}}>🌟</div>
      <div className="absolute bottom-12 left-12 text-blue-300 text-xl animate-bounce" style={{animationDelay: '1.5s'}}>💫</div>
      
      {/* 浮动精灵 */}
      <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce" style={{animationDelay: '2s'}}>🧚‍♀️</div>
      <div className="absolute top-1/3 right-1/4 text-3xl animate-bounce" style={{animationDelay: '2.5s'}}>🧚‍♂️</div>
    </div>
  );
} 