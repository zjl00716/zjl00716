'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  // 游戏状态管理
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ level: 0, text: '请输入密码', color: 'gray' });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [matchingGame, setMatchingGame] = useState({
    threats: ['网络钓鱼', '恶意软件', '密码泄露', '隐私窃取'],
    solutions: ['验证网址真实性', '安装杀毒软件', '使用强密码', '谨慎授权信息'],
    matches: {} as Record<string, string>,
    completed: false
  });

  // 网络安全知识问答题库
  const quizQuestions = [
    {
      question: "🎣 遇到可疑的钓鱼邮件，你应该怎么做？",
      options: ["立即点击链接查看", "直接删除邮件", "先验证邮件来源真实性", "转发给朋友询问"],
      correct: 2,
      explanation: "收到可疑邮件时，应该先验证来源的真实性，不要轻易点击链接或下载附件！"
    },
    {
      question: "🔑 以下哪个密码最安全？",
      options: ["123456", "password", "MyP@ssw0rd2024!", "qwerty"],
      correct: 2,
      explanation: "强密码应该包含大小写字母、数字和特殊符号，长度至少8位以上！"
    },
    {
      question: "🛡️ 在公共WiFi下，你不应该做什么？",
      options: ["浏览新闻网站", "登录网银账户", "查看天气预报", "听音乐"],
      correct: 1,
      explanation: "在公共WiFi下不要进行涉及密码和敏感信息的操作，容易被窃取！"
    },
    {
      question: "🦠 发现电脑运行异常缓慢，可能的原因是？",
      options: ["天气太热", "感染了病毒", "颜色太亮", "声音太大"],
      correct: 1,
      explanation: "电脑异常缓慢可能是感染了病毒或恶意软件，应该及时杀毒检查！"
    }
  ];

  // 密码强度检测
  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    let text = '';
    let color = '';

    if (password.length === 0) {
      return { level: 0, text: '请输入密码', color: 'gray' };
    }

    // 长度检查
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

    // 复杂度检查
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    if (strength <= 2) {
      text = '弱密码 - 太危险了！';
      color = 'red';
    } else if (strength <= 4) {
      text = '中等密码 - 还能更强！';
      color = 'yellow';
    } else {
      text = '强密码 - 很安全！';
      color = 'green';
    }

    return { level: strength, text, color };
  };

  // 处理密码输入
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordInput(password);
    setPasswordStrength(checkPasswordStrength(password));
  };

  // 处理问答
  const handleQuizAnswer = (selectedAnswer: number) => {
    const question = quizQuestions[currentQuestion];
    if (selectedAnswer === question.correct) {
      setScore(score + 10);
      alert(`🎉 答对了！+10分\n\n${question.explanation}`);
    } else {
      alert(`❌ 答错了！\n\n正确答案：${question.options[question.correct]}\n\n${question.explanation}`);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowQuiz(false);
      alert(`🏆 恭喜完成网络安全知识问答！\n总分：${score + (selectedAnswer === question.correct ? 10 : 0)}分\n\n你已经是合格的网络安全小卫士了！`);
    }
  };

  // 拖拽匹配游戏
  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, solution: string) => {
    e.preventDefault();
    if (draggedItem) {
      const correctMatches = {
        '网络钓鱼': '验证网址真实性',
        '恶意软件': '安装杀毒软件',
        '密码泄露': '使用强密码',
        '隐私窃取': '谨慎授权信息'
      };

      if (correctMatches[draggedItem as keyof typeof correctMatches] === solution) {
        setMatchingGame(prev => ({
          ...prev,
          matches: { ...prev.matches, [draggedItem]: solution }
        }));
        setScore(score + 5);
        
        // 检查是否完成所有匹配
        const newMatches = { ...matchingGame.matches, [draggedItem]: solution };
        if (Object.keys(newMatches).length === 4) {
          setMatchingGame(prev => ({ ...prev, completed: true }));
          alert('🎊 恭喜完成威胁与防护匹配游戏！+20分奖励！');
          setScore(prev => prev + 20);
        } else {
          alert('✅ 匹配正确！+5分');
        }
      } else {
        alert('❌ 匹配错误，再试试吧！');
      }
      setDraggedItem(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>

        {/* 游戏积分显示 */}
        <div className="mb-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 border-2 border-yellow-300 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-bold text-orange-700">网络安全小卫士积分</h3>
                <p className="text-orange-600 text-sm">通过游戏学习，赢取安全积分！</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-600">{score}</div>
              <div className="text-sm text-orange-500">安全积分</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mb-6 text-center tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-3xl">🌐</span>
          网络安全·数字小卫士
          <span className="text-3xl">🧚‍♀️</span>
        </h1>

        {/* 游戏控制面板 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-cyan-50/90 rounded-2xl shadow-xl p-6 border-2 border-cyan-300">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
            <span className="text-xl">🎮</span>
            网络安全游戏中心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => {
                setShowQuiz(true);
                setCurrentQuestion(0);
                setQuizCompleted(false);
              }}
              disabled={quizCompleted}
              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                quizCompleted 
                  ? 'bg-green-100 border-green-300 text-green-700' 
                  : 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200'
              }`}
            >
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold">安全知识问答</h3>
              <p className="text-sm">{quizCompleted ? '已完成 ✅' : '点击开始游戏'}</p>
            </button>

            <div className="p-4 rounded-xl border-2 border-purple-300 bg-purple-100 text-purple-700">
              <div className="text-2xl mb-2">🔑</div>
              <h3 className="font-bold">密码强度测试</h3>
              <p className="text-sm">实时检测密码安全性</p>
            </div>

            <div className="p-4 rounded-xl border-2 border-green-300 bg-green-100 text-green-700">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold">威胁防护匹配</h3>
              <p className="text-sm">拖拽匹配安全防护</p>
            </div>
          </div>
        </section>

        {/* 知识问答游戏 */}
        {showQuiz && !quizCompleted && (
          <section className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border-2 border-blue-300">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">🧠 网络安全知识问答</h2>
              <div className="text-sm text-blue-600">
                第 {currentQuestion + 1} 题 / 共 {quizQuestions.length} 题 | 当前得分：{score}
              </div>
            </div>
            
            <div className="bg-white/90 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {quizQuestions[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    className="p-3 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl text-left transition-all hover:scale-102"
                  >
                    <span className="font-semibold text-blue-600">
                      {String.fromCharCode(65 + index)}. 
                    </span>
                    <span className="ml-2 text-gray-700">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowQuiz(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl transition"
              >
                暂停游戏
              </button>
            </div>
          </section>
        )}

        {/* 密码强度测试游戏 */}
        <section className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">🔑</span>
            密码强度实时测试器
          </h2>
          
          <div className="bg-white/90 rounded-xl p-6">
            <div className="mb-4">
              <label className="block text-sm font-bold text-purple-700 mb-2">
                输入密码测试强度：
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={handlePasswordChange}
                placeholder="请输入密码..."
                className="w-full p-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-gray-700">密码强度：</span>
                <span className={`font-bold ${
                  passwordStrength.color === 'red' ? 'text-red-600' :
                  passwordStrength.color === 'yellow' ? 'text-yellow-600' :
                  passwordStrength.color === 'green' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {passwordStrength.text}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${
                    passwordStrength.color === 'red' ? 'bg-red-500' :
                    passwordStrength.color === 'yellow' ? 'bg-yellow-500' :
                    passwordStrength.color === 'green' ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                  style={{ width: `${(passwordStrength.level / 6) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-blue-700 mb-2">💡 密码安全小贴士：</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• 长度至少8位，推荐12位以上</li>
                <li>• 包含大小写字母、数字和特殊符号</li>
                <li>• 避免使用个人信息和常见词汇</li>
                <li>• 定期更换密码，不重复使用</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 威胁与防护匹配游戏 */}
        <section className="mb-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-xl border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">🎯</span>
            威胁与防护匹配游戏
          </h2>
          
          <div className="bg-white/90 rounded-xl p-6">
            <p className="text-center text-green-600 mb-6">
              🎮 拖拽左侧的网络威胁到对应的防护措施上！每次正确匹配+5分
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 威胁列表 */}
              <div>
                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span>⚠️</span> 网络威胁
                </h3>
                <div className="space-y-3">
                  {matchingGame.threats.map((threat, index) => (
                    <div
                      key={threat}
                      draggable={!matchingGame.matches[threat]}
                      onDragStart={(e) => handleDragStart(e, threat)}
                      className={`p-3 rounded-xl border-2 cursor-move transition-all ${
                        matchingGame.matches[threat]
                          ? 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                          : 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200 hover:scale-105'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{['🎣', '🦠', '🔓', '👁️'][index]}</span>
                        <span>{threat}</span>
                        {matchingGame.matches[threat] && <span className="ml-auto">✅</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 防护措施列表 */}
              <div>
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span>🛡️</span> 防护措施
                </h3>
                <div className="space-y-3">
                  {matchingGame.solutions.map((solution, index) => (
                    <div
                      key={solution}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, solution)}
                      className={`p-3 rounded-xl border-2 border-dashed transition-all ${
                        Object.values(matchingGame.matches).includes(solution)
                          ? 'bg-green-100 border-green-400 text-green-700'
                          : 'bg-green-50 border-green-300 text-green-600 hover:bg-green-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{['🔍', '🛡️', '🔐', '👁️‍🗨️'][index]}</span>
                        <span>{solution}</span>
                        {Object.values(matchingGame.matches).includes(solution) && 
                          <span className="ml-auto">✅</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {matchingGame.completed && (
              <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-xl text-center">
                <div className="text-2xl mb-2">🎊</div>
                <h4 className="font-bold text-yellow-700">恭喜完成匹配游戏！</h4>
                <p className="text-yellow-600">你已经掌握了基本的网络安全防护知识！</p>
              </div>
            )}
          </div>
        </section>

        {/* 原有的其他内容保持不变 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-cyan-50/90 rounded-2xl shadow-xl p-6 border-2 border-cyan-300">
          <h2 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            网络安全防护体系
          </h2>
          <ul className="list-none text-gray-700 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 text-lg">•</span>
              <span>网络安全是数字时代每个人都必须掌握的重要技能。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>学会识别网络风险，保护个人信息和财产安全。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg">•</span>
              <span>培养良好的网络使用习惯，做合格的数字公民。</span>
            </li>
          </ul>
        </section>

        {/* 网络精灵总结 */}
        <div className="mt-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300">
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-bounce">🧚‍♀️</div>
            <div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2">网络精灵小卫士总结：</h3>
              <p className="text-cyan-600 leading-relaxed">
                🌐 通过游戏化学习，我们掌握了网络安全的核心知识！记住，网络世界精彩无限，
                但也要时刻保持警惕。让我们做合格的数字公民，安全上网，文明用网！✨
              </p>
              <div className="mt-3 text-sm text-cyan-500">
                💡 继续游戏，提高积分，成为网络安全专家！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 