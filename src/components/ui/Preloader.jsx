import { motion } from 'framer-motion';

const Preloader = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center ${
        isLoading ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="text-center px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-transparent border-t-violet-500 border-r-fuchsia-500 border-b-purple-700 border-l-violet-400"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-2 flex justify-center"
        >
          <img
            src="/logo.png"
            alt="Sellingify"
            className="h-16 sm:h-20 w-auto max-w-[min(100%,280px)] object-contain"
            width={280}
            height={80}
            decoding="async"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-black text-sm"
        >
          Lead generation, loading…
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-violet-500"
              animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.12,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
