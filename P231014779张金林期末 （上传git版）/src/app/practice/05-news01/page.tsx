'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  // 游戏状态管理
  const [score, setScore] = useState(0);
  const [categoryGame, setCategoryGame] = useState({
    foods: [
      { name: '苹果', category: 'healthy', icon: '🍎' },
      { name: '薯片', category: 'junk', icon: '🍟' },
      { name: '胡萝卜', category: 'healthy', icon: '🥕' },
      { name: '汉堡', category: 'junk', icon: '🍔' },
      { name: '牛奶', category: 'healthy', icon: '🥛' },
      { name: '可乐', category: 'junk', icon: '🥤' },
      { name: '西兰花', category: 'healthy', icon: '🥦' },
      { name: '糖果', category: 'junk', icon: '🍬' }
    ],
    healthyBasket: [] as string[],
    junkBasket: [] as string[],
    completed: false
  });
  
  const [nutritionGame, setNutritionGame] = useState({
    currentMeal: 0,
    selectedFoods: [] as string[],
    score: 0,
    completed: false
  });

  const [expiryGame, setExpiryGame] = useState({
    currentFood: 0,
    score: 0,
    completed: false
  });

  // 营养搭配游戏数据
  const mealChallenges = [
    {
      meal: '早餐',
      icon: '🌅',
      requiredNutrients: ['蛋白质', '碳水化合物', '维生素'],
      foods: [
        { name: '鸡蛋', nutrients: ['蛋白质'], icon: '🥚' },
        { name: '面包', nutrients: ['碳水化合物'], icon: '🍞' },
        { name: '牛奶', nutrients: ['蛋白质'], icon: '🥛' },
        { name: '橙子', nutrients: ['维生素'], icon: '🍊' },
        { name: '薯片', nutrients: [], icon: '🍟' },
        { name: '巧克力', nutrients: [], icon: '🍫' }
      ]
    },
    {
      meal: '午餐',
      icon: '☀️',
      requiredNutrients: ['蛋白质', '维生素', '纤维'],
      foods: [
        { name: '鸡肉', nutrients: ['蛋白质'], icon: '🍗' },
        { name: '西兰花', nutrients: ['维生素', '纤维'], icon: '🥦' },
        { name: '米饭', nutrients: ['碳水化合物'], icon: '🍚' },
        { name: '胡萝卜', nutrients: ['维生素'], icon: '🥕' },
        { name: '冰淇淋', nutrients: [], icon: '🍦' },
        { name: '汉堡', nutrients: [], icon: '🍔' }
      ]
    }
  ];

  // 食品过期判断数据
  const expiryFoods = [
    {
      name: '牛奶',
      icon: '🥛',
      description: '生产日期：2024-01-01，保质期：7天，今天：2024-01-05',
      isExpired: false,
      explanation: '牛奶还在保质期内，可以安全饮用。'
    },
    {
      name: '面包',
      icon: '🍞',
      description: '生产日期：2023-12-20，保质期：3天，今天：2024-01-05',
      isExpired: true,
      explanation: '面包已经过期超过10天，不能食用，可能变质。'
    },
    {
      name: '酸奶',
      icon: '🥛',
      description: '生产日期：2024-01-03，保质期：5天，今天：2024-01-05',
      isExpired: false,
      explanation: '酸奶还在保质期内，但要注意储存条件。'
    },
    {
      name: '苹果',
      icon: '🍎',
      description: '外观：表面有明显黑斑和软烂部位',
      isExpired: true,
      explanation: '苹果已经腐烂变质，不能食用。'
    }
  ];

  // 食品分类游戏
  const handleFoodDrop = (food: { name: string; category: string; icon: string }, basket: 'healthy' | 'junk') => {
    if (food.category === basket) {
      const newBasket = basket === 'healthy' ? 
        [...categoryGame.healthyBasket, food.name] : 
        [...categoryGame.junkBasket, food.name];
      
      setCategoryGame(prev => ({
        ...prev,
        [basket === 'healthy' ? 'healthyBasket' : 'junkBasket']: newBasket
      }));
      
      setScore(score + 10);
      alert(`✅ 分类正确！${food.icon} ${food.name} +10分`);
      
      // 检查是否完成
      if (categoryGame.healthyBasket.length + categoryGame.junkBasket.length === 7) {
        setCategoryGame(prev => ({ ...prev, completed: true }));
        alert('🎊 食品分类游戏完成！+30分奖励！');
        setScore(prev => prev + 30);
      }
    } else {
      alert(`❌ 分类错误！${food.icon} ${food.name} 不属于这个分类`);
    }
  };

  // 营养搭配挑战
  const handleFoodSelect = (food: string) => {
    if (nutritionGame.selectedFoods.includes(food)) {
      setNutritionGame(prev => ({
        ...prev,
        selectedFoods: prev.selectedFoods.filter(f => f !== food)
      }));
    } else {
      setNutritionGame(prev => ({
        ...prev,
        selectedFoods: [...prev.selectedFoods, food]
      }));
    }
  };

  const checkNutrition = () => {
    const currentMeal = mealChallenges[nutritionGame.currentMeal];
    const selectedFoodItems = currentMeal.foods.filter(f => nutritionGame.selectedFoods.includes(f.name));
    const nutrients = selectedFoodItems.flatMap(f => f.nutrients);
    const uniqueNutrients = [...new Set(nutrients)];
    
    const hasAllRequired = currentMeal.requiredNutrients.every(nutrient => 
      uniqueNutrients.includes(nutrient)
    );
    
    if (hasAllRequired) {
      const points = 20;
      setScore(score + points);
      setNutritionGame(prev => ({ ...prev, score: prev.score + points }));
      alert(`🎉 营养搭配完美！+${points}分`);
      
      if (nutritionGame.currentMeal < mealChallenges.length - 1) {
        setNutritionGame(prev => ({
          ...prev,
          currentMeal: prev.currentMeal + 1,
          selectedFoods: []
        }));
      } else {
        setNutritionGame(prev => ({ ...prev, completed: true }));
        alert('🏆 营养搭配挑战完成！');
      }
    } else {
      const missing = currentMeal.requiredNutrients.filter(nutrient => 
        !uniqueNutrients.includes(nutrient)
      );
      alert(`❌ 营养不够均衡！还需要：${missing.join('、')}`);
    }
  };

  // 过期食品识别
  const handleExpiryAnswer = (isExpired: boolean) => {
    const currentFood = expiryFoods[expiryGame.currentFood];
    if (isExpired === currentFood.isExpired) {
      setScore(score + 15);
      setExpiryGame(prev => ({ ...prev, score: prev.score + 15 }));
      alert(`🎉 判断正确！+15分\n\n${currentFood.explanation}`);
    } else {
      alert(`❌ 判断错误！\n\n${currentFood.explanation}`);
    }

    if (expiryGame.currentFood < expiryFoods.length - 1) {
      setExpiryGame(prev => ({ ...prev, currentFood: prev.currentFood + 1 }));
    } else {
      setExpiryGame(prev => ({ ...prev, completed: true }));
      alert('🏆 过期食品识别完成！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-pink-600 font-bold text-lg transition flex items-center gap-2">
            <span>🧚‍♀️</span> ← 返回精灵安全小课堂
          </Link>
        </div>

        {/* 游戏积分显示 */}
        <div className="mb-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-4 border-2 border-green-300 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍎</span>
              <div>
                <h3 className="font-bold text-green-700">营养小达人积分</h3>
                <p className="text-green-600 text-sm">学习食品安全，享受健康生活！</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-green-500">营养积分</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-600 to-orange-600 mb-6 text-center tracking-wide drop-shadow-lg flex items-center justify-center gap-3">
          <span className="text-3xl">🍎</span>
          食品安全·营养小达人
          <span className="text-3xl">🧚‍♀️</span>
        </h1>

        {/* 游戏控制面板 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-green-50/90 rounded-2xl shadow-xl p-6 border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <span className="text-xl">🎮</span>
            食品安全游戏中心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border-2 border-green-300 bg-green-100 text-green-700">
              <div className="text-2xl mb-2">🗂️</div>
              <h3 className="font-bold">食品分类</h3>
              <p className="text-sm">健康食品 vs 垃圾食品</p>
            </div>

            <div className="p-4 rounded-xl border-2 border-yellow-300 bg-yellow-100 text-yellow-700">
              <div className="text-2xl mb-2">🥗</div>
              <h3 className="font-bold">营养搭配</h3>
              <p className="text-sm">均衡饮食挑战</p>
            </div>

            <div className="p-4 rounded-xl border-2 border-orange-300 bg-orange-100 text-orange-700">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-bold">过期识别</h3>
              <p className="text-sm">判断食品是否过期</p>
            </div>
          </div>
        </section>

        {/* 食品分类游戏 */}
        <section className="mb-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8 shadow-xl border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-xl">🗂️</span>
            食品分类游戏
          </h2>
          
          <div className="bg-white/90 rounded-xl p-6">
            <p className="text-center text-green-600 mb-6">
              🎮 将食品拖拽到正确的分类篮子里！健康食品 vs 垃圾食品
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 待分类食品 */}
              <div>
                <h3 className="font-bold text-gray-700 mb-4">🍽️ 待分类食品</h3>
                <div className="space-y-3">
                  {categoryGame.foods.filter(food => 
                    !categoryGame.healthyBasket.includes(food.name) && 
                    !categoryGame.junkBasket.includes(food.name)
                  ).map((food) => (
                    <div
                      key={food.name}
                      className="p-3 bg-gray-100 border-2 border-gray-300 rounded-xl cursor-move hover:bg-gray-200 transition-all hover:scale-105"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify(food))}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{food.icon}</span>
                        <span className="font-semibold">{food.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 健康食品篮子 */}
              <div>
                <h3 className="font-bold text-green-700 mb-4">✅ 健康食品</h3>
                <div 
                  className="min-h-[300px] p-4 border-2 border-dashed border-green-400 rounded-xl bg-green-50"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const food = JSON.parse(e.dataTransfer.getData('text/plain'));
                    handleFoodDrop(food, 'healthy');
                  }}
                >
                  <div className="text-center text-green-600 mb-4">
                    <span className="text-4xl">🥗</span>
                    <p className="text-sm">健康食品篮子</p>
                  </div>
                  <div className="space-y-2">
                    {categoryGame.healthyBasket.map((foodName) => {
                      const food = categoryGame.foods.find(f => f.name === foodName);
                      return (
                        <div key={foodName} className="flex items-center gap-2 bg-green-100 p-2 rounded-lg">
                          <span className="text-xl">{food?.icon}</span>
                          <span className="text-green-700 font-semibold">{foodName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 垃圾食品篮子 */}
              <div>
                <h3 className="font-bold text-red-700 mb-4">❌ 垃圾食品</h3>
                <div 
                  className="min-h-[300px] p-4 border-2 border-dashed border-red-400 rounded-xl bg-red-50"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const food = JSON.parse(e.dataTransfer.getData('text/plain'));
                    handleFoodDrop(food, 'junk');
                  }}
                >
                  <div className="text-center text-red-600 mb-4">
                    <span className="text-4xl">🗑️</span>
                    <p className="text-sm">垃圾食品篮子</p>
                  </div>
                  <div className="space-y-2">
                    {categoryGame.junkBasket.map((foodName) => {
                      const food = categoryGame.foods.find(f => f.name === foodName);
                      return (
                        <div key={foodName} className="flex items-center gap-2 bg-red-100 p-2 rounded-lg">
                          <span className="text-xl">{food?.icon}</span>
                          <span className="text-red-700 font-semibold">{foodName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {categoryGame.completed && (
              <div className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-xl text-center">
                <div className="text-2xl mb-2">🎊</div>
                <h4 className="font-bold text-green-700">食品分类完成！</h4>
                <p className="text-green-600">你已经学会了区分健康食品和垃圾食品！</p>
              </div>
            )}
          </div>
        </section>

        {/* 营养搭配挑战游戏 */}
        {!nutritionGame.completed && (
          <section className="mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-yellow-300">
            <h2 className="text-2xl font-bold text-yellow-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-xl">🥗</span>
              营养搭配挑战
            </h2>
            
            <div className="bg-white/90 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">
                  {mealChallenges[nutritionGame.currentMeal].icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-700 mb-2">
                  {mealChallenges[nutritionGame.currentMeal].meal}营养搭配
                </h3>
                <p className="text-yellow-600 mb-4">
                  请选择食物，确保包含所需营养素：
                  {mealChallenges[nutritionGame.currentMeal].requiredNutrients.join('、')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {mealChallenges[nutritionGame.currentMeal].foods.map((food) => (
                  <div
                    key={food.name}
                    onClick={() => handleFoodSelect(food.name)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:scale-105 ${
                      nutritionGame.selectedFoods.includes(food.name)
                        ? 'bg-yellow-100 border-yellow-400 scale-105'
                        : 'bg-white border-gray-300 hover:border-yellow-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{food.icon}</div>
                      <div className="font-semibold text-gray-700">{food.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {food.nutrients.length > 0 ? food.nutrients.join('、') : '无营养价值'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={checkNutrition}
                  disabled={nutritionGame.selectedFoods.length === 0}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    nutritionGame.selectedFoods.length > 0
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  检查营养搭配
                </button>
                
                <div className="mt-4 text-sm text-yellow-600">
                  已选择食物：{nutritionGame.selectedFoods.join('、') || '无'}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 过期食品识别游戏 */}
        {!expiryGame.completed && (
          <section className="mb-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center flex items-center justify-center gap-2">
              <span className="text-xl">📅</span>
              过期食品识别游戏
            </h2>
            
            <div className="bg-white/90 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {expiryFoods[expiryGame.currentFood].icon}
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  {expiryFoods[expiryGame.currentFood].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {expiryFoods[expiryGame.currentFood].description}
                </p>
                <div className="text-lg font-semibold text-gray-800">
                  这个食品能否安全食用？
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  第 {expiryGame.currentFood + 1} 个 / 共 {expiryFoods.length} 个
                </div>
              </div>
              
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => handleExpiryAnswer(false)}
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-105"
                >
                  ✅ 可以食用
                </button>
                <button
                  onClick={() => handleExpiryAnswer(true)}
                  className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all hover:scale-105"
                >
                  ❌ 不能食用
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 食品安全知识要点 */}
        <section className="mb-8 bg-gradient-to-br from-white/90 to-green-50/90 rounded-2xl shadow-xl p-6 border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <span className="text-xl">📚</span>
            食品安全知识要点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <span>🥗</span> 健康饮食原则
              </h3>
              <ul className="text-sm text-green-600 space-y-2">
                <li>• 多吃蔬菜水果，补充维生素</li>
                <li>• 适量摄入蛋白质，促进生长</li>
                <li>• 合理搭配谷物，提供能量</li>
                <li>• 少吃零食，控制糖分摄入</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <h3 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
                <span>⚠️</span> 食品安全提醒
              </h3>
              <ul className="text-sm text-yellow-600 space-y-2">
                <li>• 检查食品保质期</li>
                <li>• 注意食品储存条件</li>
                <li>• 生熟食品要分开</li>
                <li>• 饭前便后要洗手</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 营养精灵总结 */}
        <div className="mt-8 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-6 border-2 border-green-300">
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-bounce">🧚‍♀️</div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">营养精灵小达人总结：</h3>
              <p className="text-green-600 leading-relaxed">
                🍎 通过游戏化学习，我们掌握了食品安全和营养搭配的知识！记住，健康的身体从合理饮食开始。
                多吃蔬菜水果，少吃垃圾食品，注意食品安全，做一个营养小达人！✨
              </p>
              <div className="mt-3 text-sm text-green-500">
                💡 继续游戏提高积分，成为食品安全专家！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 