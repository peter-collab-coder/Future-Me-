import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Target, Trophy, Calendar, Star, Coins, CheckCircle2, Plus, ArrowRight, Flame, Award, TrendingUp, Sparkles, Book, Dumbbell, Code } from 'lucide-react';

const FutureMe = () => {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeAnimating, setWelcomeAnimating] = useState(false);
  const [showCapsule, setShowCapsule] = useState(false);
  const [showGoalEntry, setShowGoalEntry] = useState(false);
  const [goals, setGoals] = useState('');
  const [capsuleLaunching, setCapsuleLaunching] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const [userGoals, setUserGoals] = useState([]);
  const [userProgress, setUserProgress] = useState({
    coins: 250,
    streak: 7,
    level: 2,
    completedTasks: 12,
    totalTasks: 20
  });
  const [activeTab, setActiveTab] = useState('dashboard');

  const textareaRef = useRef(null);

  // Sample AI-generated roadmaps
  const generateRoadmap = (goalText) => {
    const roadmaps = {
      'exam': [
        'Create a comprehensive study schedule with daily time blocks',
        'Gather all study materials, textbooks, and online resources',
        'Take weekly practice tests to assess your progress',
        'Form study groups with classmates for difficult topics',
        'Create summary notes and flashcards for quick revision',
        'Schedule regular breaks and maintain a healthy study-life balance'
      ],
      'coding': [
        'Choose a programming language that aligns with your career goals',
        'Complete structured online tutorials and coding bootcamps',
        'Build 3-5 progressively complex projects to showcase your skills',
        'Join coding communities, forums, and local meetups',
        'Contribute to open source projects on GitHub',
        'Practice coding challenges on platforms like LeetCode or HackerRank'
      ],
      'fitness': [
        'Set specific, measurable fitness goals (weight, strength, endurance)',
        'Create a balanced workout routine you genuinely enjoy',
        'Plan nutritious meals and track your daily caloric intake',
        'Find a workout buddy or join fitness classes for accountability',
        'Track progress with photos, measurements, and performance metrics',
        'Schedule rest days and focus on proper recovery techniques'
      ],
      'learn': [
        'Define clear learning objectives and milestones',
        'Find quality learning resources (books, courses, tutorials)',
        'Create a consistent daily learning schedule',
        'Practice actively through exercises and real-world applications',
        'Join communities or find mentors in your field of interest',
        'Document your learning journey and teach others what you learn'
      ],
      'default': [
        'Break down your goal into smaller, manageable milestones',
        'Create a realistic timeline with specific deadlines',
        'Identify all necessary resources, tools, and support systems',
        'Set up accountability measures and progress tracking methods',
        'Plan for potential obstacles and create contingency strategies',
        'Celebrate small wins and maintain motivation throughout the journey'
      ]
    };

    const goalLower = goalText.toLowerCase();
    for (let key in roadmaps) {
      if (goalLower.includes(key)) {
        return roadmaps[key];
      }
    }
    return roadmaps.default;
  };

  const handleAuth = (name, email) => {
    if (!name.trim() || !email.trim()) return;
    
    setUser({ name: name.trim(), email: email.trim() });
    setCurrentScreen('landing');
    setShowWelcome(true);
    
    setTimeout(() => {
      setWelcomeAnimating(true);
    }, 2000);
    
    setTimeout(() => {
      setShowCapsule(true);
    }, 3000);
  };

  const handleCapsuleClick = () => {
    setShowGoalEntry(true);
  };

  // Use useCallback to prevent re-creation on every render
  const handleGoalsChange = useCallback((e) => {
    setGoals(e.target.value);
  }, []);

  const handleGoalSubmit = () => {
    if (goals.trim()) {
      const goalLines = goals.split('\n').filter(g => g.trim());
      const newGoals = goalLines.map(goal => ({
        id: Date.now() + Math.random(),
        text: goal.trim(),
        roadmap: generateRoadmap(goal),
        completed: false,
        progress: 0
      }));
      
      setUserGoals(newGoals);
      setShowGoalEntry(false);
      setCapsuleLaunching(true);
      setShowSmoke(true);
      
      setTimeout(() => {
        setCurrentScreen('dashboard');
      }, 3000);
    }
  };

  const closeModal = useCallback(() => {
    setShowGoalEntry(false);
  }, []);

  // Focus management
  useEffect(() => {
    if (showGoalEntry && textareaRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          // Set cursor to end of text
          const length = textareaRef.current.value.length;
          textareaRef.current.setSelectionRange(length, length);
        }
      });
    }
  }, [showGoalEntry]);

  const TimeCapsule = ({ launching, onClick }) => (
    <div 
      className={`cursor-pointer transition-all duration-3000 transform ${
        launching ? '-translate-y-screen scale-50 opacity-0' : 'hover:scale-105 hover:-translate-y-1'
      }`}
      onClick={onClick}
    >
      <div className="relative group">
        <div className="w-24 h-32 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300 rounded-t-full rounded-b-lg shadow-2xl border-2 border-gray-400 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-2 border-red-600"></div>
          
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-200 to-blue-400 rounded-full border border-blue-600 mb-2 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="text-gray-700 text-xs font-bold">🚀</div>
          
          <div className="absolute -left-2 top-4 w-4 h-8 bg-red-500 rounded-l-full border border-red-600"></div>
          <div className="absolute -right-2 top-4 w-4 h-8 bg-red-500 rounded-r-full border border-red-600"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/30 rounded-t-full rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {launching && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-16 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400 rounded-b-full animate-pulse shadow-lg"></div>
            <div className="w-6 h-12 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-b-full animate-pulse absolute top-2 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
          </div>
        )}
        
        {!launching && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-b-full animate-pulse opacity-75"></div>
            <div className="w-2 h-4 bg-gradient-to-t from-yellow-400 to-white rounded-b-full animate-pulse absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
        )}
      </div>
    </div>
  );

  const AuthScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Future Me</h1>
            <p className="text-gray-300">Your personal goal-setting time capsule</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <button
              onClick={() => handleAuth(name, email)}
              disabled={!name.trim() || !email.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Begin Your Journey ✨
            </button>
          </div>
        </div>
      </div>
    );
  };

  const LandingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <header className="p-6 relative">
        <div className={`text-center transition-all duration-1000 ${
          welcomeAnimating && showWelcome
            ? 'opacity-100' 
            : 'opacity-0'
        }`}>
          <h2 className="text-xl font-semibold text-white">
            Welcome, {user?.name}! ✨
          </h2>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[80vh] relative">
        {showWelcome && !welcomeAnimating && (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome, {user?.name}! ✨
            </h2>
          </div>
        )}

        {showCapsule && (
          <div className="flex flex-col items-center animate-fade-in">
            <TimeCapsule launching={capsuleLaunching} onClick={handleCapsuleClick} />
            
            {!showGoalEntry && !capsuleLaunching && (
              <div className="text-center text-white mt-8">
                <p className="text-xl mb-2">Click the Time Capsule to set your goals! 🎯</p>
                <div className="animate-bounce">
                  <ArrowRight className="w-6 h-6 mx-auto transform rotate-90" />
                </div>
              </div>
            )}
          </div>
        )}

        {showSmoke && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gray-400 rounded-full opacity-50 animate-ping"
                style={{
                  left: `${-20 + Math.random() * 40}px`,
                  top: `${i * 30 + Math.random() * 20}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {showGoalEntry && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div 
            className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] flex flex-col"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">🎯 Set Your Goals for the Future</h3>
            <p className="text-gray-600 text-center mb-4">Write your goals, dreams, and aspirations (up to 1500 words)</p>

            <div className="flex-1 min-h-0">
              <textarea
                ref={textareaRef}
                value={goals}
                onChange={handleGoalsChange}
                placeholder={`Share your goals and dreams with your future self...

Examples:
• Pass my entrance exam with flying colors
• Learn Python programming and build amazing projects  
• Get fit and healthy - lose 15kg in 6 months
• Start my own business
• Learn a new language fluently
• Read 50 books this year
• Master digital marketing
• Complete a marathon

Write as much detail as you want - your future self will thank you!`}
                maxLength={1500}
                className="w-full h-full min-h-[300px] p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                {goals.length}/1500 characters
              </span>
              <div className="space-x-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGoalSubmit}
                  disabled={!goals.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Lock Goals & Launch! ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const DashboardScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900">
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Target className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">Future Me</h1>
          </div>
          <div className="flex items-center space-x-6 text-white">
            <div className="flex items-center space-x-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{userProgress.coins}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="font-semibold">{userProgress.streak} day streak</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex space-x-1 bg-white/10 p-1 rounded-xl backdrop-blur-lg mb-6">
          {['dashboard', 'goals', 'progress', 'rewards'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all capitalize ${
                activeTab === tab 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2">Welcome back, {user?.name}! 🌟</h2>
              <p className="text-gray-300">Your future self is counting on the progress you make today. Keep pushing forward!</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Tasks Completed</span>
                  <span>{userProgress.completedTasks}/{userProgress.totalTasks}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(userProgress.completedTasks / userProgress.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {Math.round((userProgress.completedTasks / userProgress.totalTasks) * 100)}% complete
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Today's Focus</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Book className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Study Session</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">Code Practice</span>
                  </div>
                  <div className="w-5 h-5 border-2 border-gray-500 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Dumbbell className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-300">Exercise</span>
                  </div>
                  <div className="w-5 h-5 border-2 border-gray-500 rounded"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">💪 Daily Motivation</h3>
              <p className="text-gray-300 italic">"The future belongs to those who believe in the beauty of their dreams."</p>
              <p className="text-purple-400 text-sm mt-2">- Eleanor Roosevelt</p>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="space-y-6">
            {userGoals.length > 0 ? (
              userGoals.map((goal) => (
                <div key={goal.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{goal.text}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Target className="w-4 h-4" />
                        <span>AI-Generated Roadmap</span>
                      </div>
                    </div>
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    {goal.roadmap.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No Goals Set Yet</h3>
                <p className="text-gray-500">Click the time capsule to set your first goals!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Weekly Progress</h3>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-gray-300 w-20 text-sm">{day}</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (index + 1) * 15 + Math.random() * 20)}%` }}
                        ></div>
                      </div>
                    </div>
                    <CheckCircle2 className={`w-4 h-4 ${index < 4 ? 'text-green-400' : 'text-gray-500'}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Mood Tracker</h3>
              <div className="text-center">
                <div className="text-4xl mb-4">😊</div>
                <p className="text-gray-300 mb-4">How are you feeling today?</p>
                <div className="flex justify-center space-x-3">
                  {['😢', '😐', '😊', '😄', '🤩'].map((emoji, index) => (
                    <button 
                      key={index} 
                      className="text-2xl hover:scale-125 transition-transform p-2 rounded-full hover:bg-white/10"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Goal Crusher</h3>
              <p className="text-gray-300 text-sm mb-4">Complete 5 goals to unlock</p>
              <div className="bg-white/10 rounded-full h-2 mb-2">
                <div className="bg-yellow-400 rounded-full h-2 transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-400">3/5 goals completed</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Flame className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fire Streak</h3>
              <p className="text-gray-300 text-sm mb-4">7 day streak achieved!</p>
              <div className="text-green-400 font-semibold bg-green-400/20 rounded-lg py-2">✓ EARNED</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rising Star</h3>
              <p className="text-gray-300 text-sm mb-4">Complete daily tasks for 30 days</p>
              <div className="bg-white/10 rounded-full h-2 mb-2">
                <div className="bg-blue-400 rounded-full h-2 transition-all duration-500" style={{ width: '23%' }}></div>
              </div>
              <p className="text-xs text-gray-400">7/30 days completed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
      {currentScreen === 'auth' && <AuthScreen />}
      {currentScreen === 'landing' && <LandingScreen />}
      {currentScreen === 'dashboard' && <DashboardScreen />}
    </div>
  );
};

export default FutureMe;