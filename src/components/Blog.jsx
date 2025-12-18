import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, BookOpen, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Reset flip state when closing modal
  useEffect(() => {
    if (!selectedPost) {
      setFlipped(false);
    }
  }, [selectedPost]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
    hover: { 
      scale: 1.03, 
      rotateY: 5, 
      boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)',
      transition: { duration: 0.3 }
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Why Businesses Are Leaving Traditional Ads Behind for Reflo Hub',
      excerpt: 'Let\'s be honest — traditional advertising is broken. Businesses are spending thousands of dollars every month on Google, Facebook, and directories, yet conversions remain unpredictable. That\'s why thousands of smart business owners are switching to Reflo Hub.',
      date: 'January 20, 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Let's be honest — traditional advertising is broken. Businesses are spending thousands of dollars every month on Google, Facebook, and directories, yet conversions remain unpredictable. That's why thousands of smart business owners are switching to Reflo Hub, the performance-based client acquisition platform that's changing how modern businesses grow.</p>
        
        <h3>The Problem with Traditional Ads</h3>
        <ul>
          <li><strong>You pay for clicks, not customers.</strong> Traditional ad platforms charge you for every click, regardless of whether it converts into a sale.</li>
          <li><strong>Your competitors bid against you, raising costs every month.</strong> As more businesses compete for the same keywords, ad costs spiral out of control.</li>
          <li><strong>Leads are often fake or unqualified.</strong> You waste time and money chasing leads that were never serious buyers.</li>
          <li><strong>ROI tracking is confusing, time-consuming, and discouraging.</strong> Understanding which ads actually work requires complex analytics and constant optimization.</li>
        </ul>
        
        <h3>How Reflo Hub Solves It</h3>
        <p>Reflo Hub replaces ad uncertainty with verified, ready-to-buy leads referred by freelancers in your city.</p>
        
        <ol>
          <li><strong>You only pay commission when the deal closes.</strong> No wasted spend on clicks that don't convert. You pay for results, not impressions.</li>
          <li><strong>You decide the commission percentage — total flexibility.</strong> Set your own referral fees based on your profit margins and conversion rates.</li>
          <li><strong>Zero middlemen — freelancers are paid directly by you.</strong> Build direct relationships with your lead generators and maintain full control.</li>
          <li><strong>Monopoly Advantage: Only 2 businesses per category per city.</strong> Limited competition means more quality leads for you.</li>
          <li><strong>Premium Plan: Citywide exclusivity → zero competition.</strong> Become the exclusive provider in your category and capture all available leads.</li>
        </ol>
        
        <h3>Real ROI, No Guesswork</h3>
        <p>Businesses that join Reflo Hub see immediate clarity: no wasted impressions, no click inflation, no bidding wars. Just real clients and predictable growth.</p>
        
        <p><strong>Stop wasting your budget on ads. Secure your city slot today — only 2 available per category!</strong></p>
      `
    },
    {
      id: 2,
      title: 'How Freelancers Are Earning Without Projects — The Reflo Hub Revolution',
      excerpt: 'Freelancing has always meant one thing: doing the work yourself. But Reflo Hub is changing the game. With Reflo Hub, you don\'t need to deliver projects, manage clients, or handle deadlines — you simply connect people with businesses and get paid.',
      date: 'January 15, 2025',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Freelancing has always meant one thing: doing the work yourself. But Reflo Hub is changing the game. With Reflo Hub, you don't need to deliver projects, manage clients, or handle deadlines — you simply connect people with businesses and get paid.</p>
        
        <h3>How It Works</h3>
        <ol>
          <li><strong>Sign up on Reflo Hub.</strong></li>
          <li><strong>Choose your niche from over 100+ high-commission categories.</strong></li>
          <li><strong>Submit verified leads from your personal or social network.</strong></li>
          <li><strong>When the business closes the deal, you get paid directly.</strong></li>
        </ol>
        
        <h3>Why Freelancers Love It</h3>
        
        <ol>
          <li><strong>100% Commission — No Cuts</strong><br />
          Whatever you earn is all yours. Reflo Hub takes no platform fee.</li>
          
          <li><strong>100+ High-Commission Niches</strong><br />
          From real estate and marketing to healthcare and travel — pick what fits your network.</li>
          
          <li><strong>Recurring Income Opportunities</strong><br />
          Refer clients to Virtual Tech Masters or Tech Diamonds and earn monthly recurring commissions.</li>
          
          <li><strong>Work Anywhere, Anytime</strong><br />
          No boss, no fixed hours — just simple, scalable earning potential.</li>
        </ol>
        
        <p><strong>Reflo Hub gives you financial freedom without extra workload. If you have a network, you have an income stream.</strong></p>
        
        <p><strong>Join Reflo Hub today — start earning from your connections.</strong></p>
      `
    },
    {
      id: 3,
      title: 'Reflo Hub: Building a Global Lead-Sharing Economy',
      excerpt: 'In an age where ads are noisy and competition is fierce, Reflo Hub is creating a new economy — one built on trust, performance, and shared growth. It\'s not just another platform; it\'s a bridge between freelancers and businesses, reshaping how the world generates leads and income.',
      date: 'January 10, 2025',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: `
        <p>In an age where ads are noisy and competition is fierce, Reflo Hub is creating a new economy — one built on trust, performance, and shared growth. It's not just another platform; it's a bridge between freelancers and businesses, reshaping how the world generates leads and income.</p>
        
        <h3>The Vision Behind Reflo Hub</h3>
        <p>Reflo Hub believes that opportunities shouldn't be locked behind marketing budgets. Whether you're a freelancer with a network or a business owner seeking real customers, this platform empowers both sides to grow — without middlemen, risk, or wasted money.</p>
        
        <h3>For Businesses:</h3>
        <ul>
          <li><strong>Receive warm, verified leads.</strong> Get quality leads from freelancers who know their networks, not random clicks from search engines.</li>
          <li><strong>Pay only when deals close.</strong> Performance-based pricing means you only pay for actual conversions, not empty promises.</li>
          <li><strong>Build citywide monopoly through exclusive membership.</strong> Secure your position as the only business in your category and capture all available leads.</li>
        </ul>
        
        <h3>For Freelancers:</h3>
        <ul>
          <li><strong>Earn unlimited commissions from referrals.</strong> There's no cap on how much you can earn. Your income potential grows with your network.</li>
          <li><strong>Access 100+ categories to match your network.</strong> Find the perfect niches that align with the people you know and the industries you understand.</li>
          <li><strong>Keep 100% of your income.</strong> No platform fees, no hidden charges. Every commission you earn goes directly to you.</li>
        </ul>
        
        <h3>The Bigger Picture:</h3>
        <p>Reflo Hub isn't just solving a lead generation problem — it's creating a global performance-based ecosystem where trust and technology meet results. With real verification, AI-driven tracking, and live-photo validation, every lead is real, every payout fair, and every connection meaningful.</p>
        
        <p>This isn't just about connecting businesses with freelancers. It's about creating a sustainable economy where:</p>
        <ul>
          <li>Businesses grow without wasting money on ineffective advertising</li>
          <li>Freelancers earn without delivering projects or managing clients</li>
          <li>Trust is built through verified connections and transparent transactions</li>
          <li>Performance is rewarded, not promises</li>
        </ul>
        
        <p><strong>Be part of the revolution. Whether you're a business or freelancer, Reflo Hub is your gateway to the future of earning.</strong></p>
      `
    },
  ];

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedPost(null);
      setIsClosing(false);
      setFlipped(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300/30 dark:bg-orange-300/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: Math.random() * 50 - 25,
              y: Math.random() * 50 - 25,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: true,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 mb-6 shadow-[0_0_20px_rgba(255,165,0,0.2)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Reflo Hub Insights</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">
            Cosmic Chronicles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive into the stories, strategies, and successes powering Reflo Hub’s global ecosystem of freelancers and businesses.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-50/20 dark:to-white/2 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,165,0,0.1)] min-h-[380px] flex flex-col cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
                transition={{ delay: index * 0.2 }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 relative z-10 flex flex-col flex-grow">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-black dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                  <div className="group inline-flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Book Page Popup Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[80vh] mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flip Container */}
              <motion.div 
                className="relative w-full h-full"
                style={{ perspective: '1200px' }}
              >
                {/* Book Cover (Front) */}
                <motion.div
                  className={`absolute inset-0 w-full h-full bg-cover bg-center rounded-xl shadow-2xl cursor-pointer ${!flipped ? 'z-20' : 'z-10'}`}
                  style={{ 
                    backgroundImage: `url(${selectedPost.image})`,
                    backfaceVisibility: 'hidden'
                  }}
                  animate={flipped ? "back" : "front"}
                  variants={flipVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => setFlipped(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="text-orange-400" />
                      <span className="text-orange-400 font-medium">Click to open</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white text-center">{selectedPost.title}</h2>
                    <p className="text-gray-300 text-center mt-2">{selectedPost.date}</p>
                  </div>
                </motion.div>

                {/* Book Content (Back) */}
                <motion.div
                  className={`absolute inset-0 w-full h-full bg-gradient-to-b from-gray-100 dark:from-gray-950 to-gray-50 dark:to-gray-950 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden p-8 shadow-2xl ${flipped ? 'z-20' : 'z-10'}`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                  animate={flipped ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors"
                      onClick={() => setFlipped(false)}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 transition-colors"
                      onClick={closeModal}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
                    <div className="max-w-2xl mx-auto">
                      <div className="flex items-center gap-2 text-orange-400 dark:text-orange-300 mb-4">
                        <BookOpen className="w-5 h-5" />
                        <span className="font-medium">Blog Post</span>
                      </div>
                      <h2 className="text-3xl font-bold text-black dark:text-white mb-2">{selectedPost.title}</h2>
                      <p className="text-black dark:text-gray-300 mb-8">{selectedPost.date}</p>
                      
                      <div 
                        className="prose prose-invert prose-lg"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                      />
                      
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between">
                        <button
                          className="flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                          onClick={() => setFlipped(false)}
                        >
                          <ChevronLeft className="w-5 h-5 mr-2" />
                          Back to Cover
                        </button>
                        <button
                          className="flex items-center text-orange-400 dark:text-orange-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                          onClick={closeModal}
                        >
                          Close Article
                          <X className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="relative z-10 py-12 text-center border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Reflo Hub</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Connecting businesses with the world's top freelance talent through transparent, commission-free lead generation.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm">
            © 2025 Reflo Hub. All rights reserved. Cosmic Chronicles Blog.
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        .prose-invert h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #000000;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-invert p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #000000;
        }
        .prose-invert ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #000000;
        }
        .prose-invert li {
          margin-bottom: 0.5rem;
        }
        
        /* Dark mode text fixes */
        .dark .prose-invert h3 {
          color: #ffffff !important;
        }
        .dark .prose-invert p {
          color: #e5e7eb !important;
        }
        .dark .prose-invert ul {
          color: #e5e7eb !important;
        }
        .dark .prose-invert li {
          color: #e5e7eb !important;
        }
        .dark .prose-invert strong {
          color: #ffffff !important;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 165, 0, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 165, 0, 0.8);
        }
      `}</style>
    </section>
  );
};

export default Blog;