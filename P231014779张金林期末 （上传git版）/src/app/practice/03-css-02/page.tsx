'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  // 游戏状态管理
  const [score, setScore] = useState(0);
  const [reactionGame, setReactionGame] = useState({
    isPlaying: false,
    currentLight: 'red',
    startTime: 0,
    bestTime: null as number | null,
    round: 0,
    totalRounds: 5
  });
  const [signGame, setSignGame] = useState({
    currentQuestion: 0,
    score: 0,
    completed: false
  });
  const [crossingGame, setCrossingGame] = useState({
    playerPosition: 0,
    light: 'red',
    isMoving: false,
    gameOver: false,
    success: false
  });

  // 交通标志识别题库
  const trafficSigns = [
    {
      image: '🚦',
      question: '这个交通信号灯表示什么？',
      options: ['可以通行', '准备停车', '禁止通行', '可以加速'],
      correct: 0,
      explanation: '绿灯表示可以安全通行，但仍需注意观察路况。'
    },
    {
      image: '🛑',
      question: '看到这个标志应该怎么做？',
      options: ['减速慢行', '立即停车', '加速通过', '任意行驶'],
      correct: 1,
      explanation: '停车标志要求车辆必须完全停止，确认安全后再通行。'
    },
    {
      image: '⚠️',
      question: '这个警告标志提醒我们什么？',
      options: ['前方有危险', '禁止通行', '必须停车', '可以超车'],
      correct: 0,
      explanation: '警告标志提醒前方有潜在危险，需要格外小心。'
    },
    {
      image: '🚸',
      question: '看到这个标志说明什么？',
      options: ['禁止行人', '学校区域', '行人横道', '车辆优先'],
      correct: 2,
      explanation: '行人横道标志表示此处是行人过马路的专用通道。'
    }
  ];

  // 红绿灯反应游戏
  const startReactionGame = () => {
    setReactionGame(prev => ({
      ...prev,
      isPlaying: true,
      round: 0,
      currentLight: 'red'
    }));
    
    // 随机延迟后变绿灯
    const delay = Math.random() * 3000 + 2000; // 2-5秒随机延迟
    setTimeout(() => {
      setReactionGame(prev => ({
        ...prev,
        currentLight: 'green',
        startTime: Date.now()
      }));
    }, delay);
  };

  const handleReaction = () => {
    if (reactionGame.currentLight === 'green' && reactionGame.isPlaying) {
      const reactionTime = Date.now() - reactionGame.startTime;
      const newBestTime = reactionGame.bestTime === null || reactionTime < reactionGame.bestTime 
        ? reactionTime : reactionGame.bestTime;
      
      setScore(score + Math.max(10, 50 - Math.floor(reactionTime / 100)));
      
      if (reactionGame.round < reactionGame.totalRounds - 1) {
        setReactionGame(prev => ({
          ...prev,
          round: prev.round + 1,
          currentLight: 'red',
          bestTime: newBestTime
        }));
        
        // 下一轮
        const delay = Math.random() * 3000 + 2000;
        setTimeout(() => {
          setReactionGame(prev => ({
            ...prev,
            currentLight: 'green',
            startTime: Date.now()
          }));
        }, delay);
      } else {
        // 游戏结束
        setReactionGame(prev => ({
          ...prev,
          isPlaying: false,
          bestTime: newBestTime
        }));
        alert(`🎉 反应游戏完成！\n反应时间：${reactionTime}ms\n最佳记录：${newBestTime}ms`);
      }
    } else if (reactionGame.currentLight === 'red') {
      alert('❌ 红灯时不能行动！请等待绿灯！');
    }
  };

  // 交通标志识别
  const handleSignAnswer = (selectedAnswer: number) => {
    const question = trafficSigns[signGame.currentQuestion];
    if (selectedAnswer === question.correct) {
      setSignGame(prev => ({ ...prev, score: prev.score + 10 }));
      setScore(score + 10);
      alert(`🎉 答对了！+10分\n\n${question.explanation}`);
    } else {
      alert(`❌ 答错了！\n\n正确答案：${question.options[question.correct]}\n\n${question.explanation}`);
    }

    if (signGame.currentQuestion < trafficSigns.length - 1) {
      setSignGame(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else {
      setSignGame(prev => ({ ...prev, completed: true }));
      alert(`🏆 交通标志识别完成！\n总分：${signGame.score + (selectedAnswer === question.correct ? 10 : 0)}分`);
    }
  };

  // 过马路模拟游戏
  const startCrossing = () => {
    setCrossingGame({
      playerPosition: 0,
      light: 'red',
      isMoving: false,
      gameOver: false,
      success: false
    });
    
    // 模拟红绿灯变化
    setTimeout(() => {
      setCrossingGame(prev => ({ ...prev, light: 'green' }));
      
      setTimeout(() => {
        setCrossingGame(prev => ({ ...prev, light: 'yellow' }));
        
        setTimeout(() => {
          setCrossingGame(prev => ({ 
            ...prev, 
            light: 'red',
            gameOver: prev.playerPosition < 100 && prev.isMoving
          }));
        }, 2000);
      }, 5000);
    }, 3000);
  };

  const moveCrossing = () => {
    if (crossingGame.light === 'green' && !crossingGame.gameOver) {
      setCrossingGame(prev => {
        const newPosition = Math.min(prev.playerPosition + 20, 100);
        return {
          ...prev,
          playerPosition: newPosition,
          isMoving: true,
          success: newPosition >= 100
        };
      });
      
      if (crossingGame.playerPosition >= 80) {
        setScore(score + 20);
        alert('🎉 安全过马路成功！+20分');
      }
    } else if (crossingGame.light === 'red') {
      alert('❌ 红灯不能过马路！');
    } else if (crossingGame.light === 'yellow') {
      alert('⚠️ 黄灯时应该停下等待！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>

        {/* 游戏积分显示 */}
        <div className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 border-2 border-blue-300 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚗</span>
              <div>
                <h3 className="font-bold text-blue-700">马路小侦探积分</h3>
                <p className="text-blue-600 text-sm">学习交通规则，保障出行安全！</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{score}</div>
              <div className="text-sm text-blue-500">交通积分</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 text-center tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-3xl">🚗</span>
          交通安全·马路小侦探
          <span className="text-3xl">🧚‍♀️</span>
        </h1>

        {/* 游戏控制面板 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-2xl shadow-xl p-6 border-2 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="text-xl">🎮</span>
            交通安全游戏中心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={startReactionGame}
              disabled={reactionGame.isPlaying}
              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                reactionGame.isPlaying
                  ? 'bg-yellow-100 border-yellow-300 text-yellow-700'
                  : 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200'
              }`}
            >
              <div className="text-2xl mb-2">🚦</div>
              <h3 className="font-bold">红绿灯反应</h3>
              <p className="text-sm">
                {reactionGame.isPlaying ? '游戏进行中...' : '测试反应速度'}
              </p>
            </button>

            <div className="p-4 rounded-xl border-2 border-indigo-300 bg-indigo-100 text-indigo-700">
              <div className="text-2xl mb-2">🛑</div>
              <h3 className="font-bold">交通标志识别</h3>
              <p className="text-sm">认识交通标志</p>
            </div>

            <button
              onClick={startCrossing}
              className="p-4 rounded-xl border-2 border-purple-300 bg-purple-100 text-purple-700 hover:bg-purple-200 transition-all hover:scale-105"
            >
              <div className="text-2xl mb-2">🚸</div>
              <h3 className="font-bold">安全过马路</h3>
              <p className="text-sm">模拟过马路</p>
            </button>
          </div>
        </section>

        {/* 红绿灯反应游戏 */}
        <section className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border-2 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">🚦</span>
            红绿灯反应速度游戏
          </h2>
          
          <div className="bg-white/90 rounded-xl p-6">
            <p className="text-center text-blue-600 mb-6">
              🎮 等待绿灯亮起时立即点击按钮！测试你的交通反应速度
            </p>
            
            <div className="flex flex-col items-center gap-6">
              {/* 红绿灯显示 */}
              <div className="flex gap-4">
                <div className={`w-16 h-16 rounded-full border-4 ${
                  reactionGame.currentLight === 'red' 
                    ? 'bg-red-500 border-red-600 shadow-lg' 
                    : 'bg-gray-200 border-gray-300'
                }`}></div>
                <div className={`w-16 h-16 rounded-full border-4 ${
                  reactionGame.currentLight === 'yellow' 
                    ? 'bg-yellow-500 border-yellow-600 shadow-lg' 
                    : 'bg-gray-200 border-gray-300'
                }`}></div>
                <div className={`w-16 h-16 rounded-full border-4 ${
                  reactionGame.currentLight === 'green' 
                    ? 'bg-green-500 border-green-600 shadow-lg animate-pulse' 
                    : 'bg-gray-200 border-gray-300'
                }`}></div>
              </div>

              {/* 游戏按钮 */}
              <button
                onClick={handleReaction}
                disabled={!reactionGame.isPlaying}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  reactionGame.currentLight === 'green' && reactionGame.isPlaying
                    ? 'bg-green-500 hover:bg-green-600 text-white scale-105'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                {reactionGame.currentLight === 'green' && reactionGame.isPlaying
                  ? '快点击！' : '等待绿灯...'}
              </button>

              {/* 游戏状态 */}
              {reactionGame.isPlaying && (
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">
                    第 {reactionGame.round + 1} / {reactionGame.totalRounds} 轮
                  </div>
                  {reactionGame.bestTime && (
                    <div className="text-sm text-green-600">
                      最佳记录: {reactionGame.bestTime}ms
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 交通标志识别游戏 */}
        {!signGame.completed && (
          <section className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl border-2 border-indigo-300">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-xl">🛑</span>
              交通标志识别游戏
            </h2>
            
            <div className="bg-white/90 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {trafficSigns[signGame.currentQuestion].image}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {trafficSigns[signGame.currentQuestion].question}
                </h3>
                <div className="text-sm text-gray-600">
                  第 {signGame.currentQuestion + 1} 题 / 共 {trafficSigns.length} 题
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trafficSigns[signGame.currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSignAnswer(index)}
                    className="p-3 bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-200 hover:border-indigo-400 rounded-xl text-left transition-all hover:scale-102"
                  >
                    <span className="font-semibold text-indigo-600">
                      {String.fromCharCode(65 + index)}. 
                    </span>
                    <span className="ml-2 text-gray-700">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 过马路模拟游戏 */}
        <section className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">🚸</span>
            安全过马路模拟
          </h2>
          
          <div className="bg-white/90 rounded-xl p-6">
            <p className="text-center text-purple-600 mb-6">
              🎮 等待绿灯时点击前进按钮安全过马路！
            </p>
            
            <div className="mb-6">
              {/* 红绿灯状态 */}
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-full border-2 ${
                  crossingGame.light === 'red' ? 'bg-red-500' :
                  crossingGame.light === 'yellow' ? 'bg-yellow-500' :
                  'bg-green-500'
                } shadow-lg`}></div>
              </div>
              
              {/* 马路模拟 */}
              <div className="relative bg-gray-800 h-20 rounded-xl overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2"></div>
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 text-2xl transition-all duration-300"
                  style={{ left: `${crossingGame.playerPosition}%` }}
                >
                  🚶‍♂️
                </div>
              </div>
              
              {/* 进度条 */}
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${crossingGame.playerPosition}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={moveCrossing}
                disabled={crossingGame.gameOver || crossingGame.success}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  crossingGame.success ? 'bg-green-500 text-white' :
                  crossingGame.gameOver ? 'bg-red-500 text-white' :
                  crossingGame.light === 'green' ? 'bg-purple-500 hover:bg-purple-600 text-white' :
                  'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                {crossingGame.success ? '安全到达！' :
                 crossingGame.gameOver ? '游戏结束' :
                 crossingGame.light === 'green' ? '前进 →' : '等待绿灯...'}
              </button>
              
              <div className="mt-2 text-sm text-purple-600">
                当前灯光: {
                  crossingGame.light === 'red' ? '🔴 红灯 - 停止' :
                  crossingGame.light === 'yellow' ? '🟡 黄灯 - 等待' :
                  '🟢 绿灯 - 通行'
                }
              </div>
            </div>
          </div>
        </section>

        {/* 原有内容保持 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-2xl shadow-xl p-6 border-2 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="text-xl">📋</span>
            交通安全知识说明
          </h2>
          <ul className="list-none text-gray-700 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>交通安全是每个人都必须掌握的基本技能，关系到我们的生命安全。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg">•</span>
              <span>请观察下方不同交通场景的安全规则和注意事项。</span>
            </li>
          </ul>
        </section>

        {/* 交通精灵总结 */}
        <div className="mt-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border-2 border-orange-300">
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-bounce">🧚‍♀️</div>
            <div>
              <h3 className="text-lg font-bold text-orange-700 mb-2">交通精灵小侦探总结：</h3>
              <p className="text-orange-600 leading-relaxed">
                🚦 通过游戏化学习，我们掌握了交通安全的核心技能！记住&ldquo;红灯停，绿灯行，黄灯等一等&rdquo;，
                遵守交通规则，保护自己和他人安全。做一个合格的马路小侦探！✨
              </p>
              <div className="mt-3 text-sm text-orange-500">
                💡 继续游戏提高积分，成为交通安全专家！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 