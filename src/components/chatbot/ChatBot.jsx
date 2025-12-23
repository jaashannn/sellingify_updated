import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { questionsAndAnswers, welcomeMessage, quickQuestions } from './questionsAndAnswers';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [userHasClosed, setUserHasClosed] = useState(false);
  const [showWaveAnimation, setShowWaveAnimation] = useState(false);

  // Show wave animation on page load/refresh
  useEffect(() => {
    const chatClosed = localStorage.getItem('chatbot-closed');
    if (chatClosed === 'true') {
      setUserHasClosed(true);
      return;
    }

    // Show wave animation on every page load/refresh (unless user has closed chat)
    if (!userHasClosed) {
      // Show wave animation after preloader
      const waveTimer = setTimeout(() => {
        setShowWaveAnimation(true);
      }, 2000);
      
      // Hide wave animation and open chat after a delay
      const openTimer = setTimeout(() => {
        setShowWaveAnimation(false);
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 4500); // Show wave for 2.5 seconds, then open chat
      
      return () => {
        clearTimeout(waveTimer);
        clearTimeout(openTimer);
      };
    }
  }, [userHasClosed]);

  // Show welcome message on first load
  useEffect(() => {
    if (!hasShownWelcome && isOpen) {
      setTimeout(() => {
        setMessages([{ type: 'bot', text: welcomeMessage, timestamp: new Date() }]);
        setHasShownWelcome(true);
      }, 500);
    }
  }, [isOpen, hasShownWelcome]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    }
  }, [isOpen]);

  // Enhanced matching algorithm with better scoring
  const findBestAnswer = (userQuestion) => {
    const question = userQuestion.toLowerCase().trim();
    
    // Remove common stop words for better matching
    const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can'];
    const questionWords = question.split(/\s+/).filter(word => !stopWords.includes(word) && word.length > 2);
    
    // Exact match first
    const exactMatch = questionsAndAnswers.find(
      qa => qa.question.toLowerCase().trim() === question
    );
    if (exactMatch) return exactMatch.answer;

    // Fuzzy matching - check for similar questions
    const fuzzyMatch = questionsAndAnswers.find(qa => {
      const qaQuestion = qa.question.toLowerCase();
      // Check if user question is very similar to stored question
      const similarity = calculateSimilarity(question, qaQuestion);
      return similarity > 0.85; // 85% similarity threshold
    });
    if (fuzzyMatch) return fuzzyMatch.answer;

    // Enhanced keyword matching with weighted scoring
    let bestMatch = null;
    let bestScore = 0;

    questionsAndAnswers.forEach(qa => {
      let score = 0;
      const keywords = qa.keywords.map(k => k.toLowerCase());
      const qaQuestion = qa.question.toLowerCase();
      
      // Weighted keyword matching
      keywords.forEach(keyword => {
        if (question.includes(keyword)) {
          // Longer keywords get higher weight
          const weight = keyword.length > 4 ? 2 : 1;
          score += weight;
          
          // Bonus if keyword appears multiple times
          const occurrences = (question.match(new RegExp(keyword, 'g')) || []).length;
          if (occurrences > 1) score += 0.5;
        }
      });

      // Question word matching with context
      const questionWordsMap = {
        'what': ['what', 'which', 'tell me about'],
        'how': ['how', 'way', 'method', 'process'],
        'when': ['when', 'time', 'schedule'],
        'where': ['where', 'location', 'place', 'available'],
        'why': ['why', 'reason', 'because'],
        'who': ['who', 'person'],
        'can': ['can', 'able', 'possible'],
        'do': ['do', 'does', 'did'],
        'is': ['is', 'are', 'am']
      };

      Object.keys(questionWordsMap).forEach(qWord => {
        if (questionWordsMap[qWord].some(w => question.includes(w)) && 
            qaQuestion.includes(qWord)) {
          score += 3; // Higher weight for question word matches
        }
      });

      // Phrase matching - check for multi-word phrases
      const phrases = [
        'how much', 'how many', 'how do', 'how does', 'how can',
        'what is', 'what are', 'what does', 'what do',
        'why should', 'why do', 'why is',
        'can i', 'can you', 'can we',
        'do i', 'do you', 'does it',
        'is there', 'are there', 'is it'
      ];
      
      phrases.forEach(phrase => {
        if (question.includes(phrase) && qaQuestion.includes(phrase)) {
          score += 4; // High weight for phrase matches
        }
      });

      // Special handling for email-related queries
      if (question.includes('email') && qa.keywords.some(k => k.includes('email'))) {
        score += 6; // Very high weight for email-specific questions
      }
      
      // Special handling for response time queries
      if ((question.includes('response time') || question.includes('how long') || question.includes('wait')) && 
          qa.keywords.some(k => k.includes('response') || k.includes('time'))) {
        score += 5; // High weight for response time questions
      }

      // Word order bonus - check if important words appear in similar order
      const importantWords = questionWords.filter(w => w.length > 3);
      const qaWords = qaQuestion.split(/\s+/).filter(w => w.length > 3);
      let orderScore = 0;
      importantWords.forEach((word, index) => {
        const qaIndex = qaWords.indexOf(word);
        if (qaIndex !== -1 && Math.abs(qaIndex - index) < 3) {
          orderScore += 0.5;
        }
      });
      score += orderScore;

      // Exact phrase match in question text
      if (qaQuestion.includes(question) || question.includes(qaQuestion.substring(0, 30))) {
        score += 5;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = qa;
      }
    });

    // Return answer if score is good enough (lowered threshold for better matching)
    if (bestScore >= 1.5 && bestMatch) {
      return bestMatch.answer;
    }

    // Default response with helpful suggestions
    return "I'm not sure I understand that question. Could you try rephrasing it? Here are some topics I can help with:\n\n• Pricing and costs\n• Registration process\n• How the platform works\n• Features and benefits\n• Payment methods\n• Categories and industries\n• Support and help\n\nOr try one of the quick questions below!";
  };

  // Calculate similarity between two strings (simple Levenshtein-based)
  const calculateSimilarity = (str1, str2) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    if (longer.length === 0) return 1.0;
    
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  };

  // Levenshtein distance calculation
  const levenshteinDistance = (str1, str2) => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newUserMessage = {
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking time (for better UX)
    setTimeout(() => {
      const answer = findBestAnswer(userMessage);
      setIsTyping(false);
      
      // Add bot response
      setMessages(prev => [...prev, {
        type: 'bot',
        text: answer,
        timestamp: new Date()
      }]);
    }, 800 + Math.random() * 400); // Random delay between 800-1200ms
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Trigger send after a brief delay
    setTimeout(() => {
      const e = { preventDefault: () => {} };
      setInputValue(question);
      handleSendMessage(e);
    }, 100);
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Remember if user manually closed the chat
    if (!newState) {
      localStorage.setItem('chatbot-closed', 'true');
      setUserHasClosed(true);
    }
  };

  return (
    <>
      {/* Wave Animation - Bot appears with realistic face and wave */}
      <AnimatePresence>
        {showWaveAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <div className="relative">
              {/* Bot Avatar with Realistic Face */}
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-sky-400 via-sky-500 to-orange-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Face Features */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Eyes */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1
                      }}
                    />
                  </div>
                  
                  {/* Smile */}
                  <motion.svg
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M2 8 C6 4, 18 4, 22 8"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={{
                        d: ["M2 8 C6 4, 18 4, 22 8", "M2 9 C6 5, 18 5, 22 9", "M2 8 C6 4, 18 4, 22 8"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
              
              {/* Waving Hand Animation */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  rotate: [0, 20, -20, 20, -20, 0],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-3xl border-2 border-orange-300"
                  whileHover={{ scale: 1.15 }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.div>
              </motion.div>
              
              {/* Speech Bubble with Better Message */}
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="absolute bottom-full right-0 mb-3 bg-white dark:bg-gray-800 rounded-2xl px-5 py-3 shadow-2xl border-2 border-sky-200 dark:border-sky-700 max-w-xs"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                  👋 <span className="font-semibold text-sky-600 dark:text-sky-400">Hi there!</span> I'm your <span className="font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">RefloHub Assistant</span>! Ask me anything about our platform, pricing, or how it works! 😊
                </p>
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-800 border-r-2 border-b-2 border-sky-200 dark:border-sky-700"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-sky-500 to-orange-400 hover:from-sky-600 hover:to-orange-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification badge (optional - can be removed) */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-96 h-[500px] max-h-[calc(100vh-176px)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header with Realistic Bot Avatar */}
            <div className="bg-gradient-to-r from-sky-500 to-orange-400 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 relative overflow-hidden"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Bot Face in Header */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Eyes */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.6, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.6, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.1
                        }}
                      />
                    </div>
                    {/* Smile */}
                    <svg
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                      fill="none"
                    >
                      <path
                        d="M2 6 C4 4, 12 4, 14 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <span>RefloHub Assistant</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="text-xl"
                    >
                      👋
                    </motion.span>
                  </h3>
                  <p className="text-white/90 text-xs font-medium">I'm here to help! Ask me anything 😊</p>
                </div>
              </div>
              <button
                onClick={handleToggle}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Minimize2 className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
              {messages.length === 0 && !isTyping && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-sky-500 mx-auto mb-3 opacity-50" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Ask me anything about Reflo Hub!
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-sky-500 to-orange-400'
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-sky-500 to-orange-400 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 border border-gray-200 dark:border-gray-700">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length > 0 && messages.length % 2 === 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 mt-4"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 px-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.slice(0, 2).map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(q)}
                        className="px-3 py-1.5 text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-sky-50 dark:hover:bg-gray-700 hover:border-sky-300 dark:hover:border-sky-600 transition-colors text-gray-700 dark:text-gray-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-11 h-11 bg-gradient-to-r from-sky-500 to-orange-400 hover:from-sky-600 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              {messages.length === 0 && (
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuickQuestion(q)}
                        className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-sky-50 dark:hover:bg-gray-700 hover:border-sky-300 dark:hover:border-sky-600 transition-colors text-gray-700 dark:text-gray-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

