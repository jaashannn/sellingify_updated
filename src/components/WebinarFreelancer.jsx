import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const webinarGroups = [
  {
    name: 'English',
    links: [
      { label: 'Freelancer English Webinar', url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw' },
    ],
  },
  {
    name: 'Hindi',
    links: [
      { label: 'Freelancer Hindi Webinar', url: 'https://www.youtube.com/watch?v=VYOjWnS4cMY' },
    ],
  },
];

const WebinarFreelancer = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gray-50 dark:bg-gray-950 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <Link
            to="/webinar"
            className="inline-flex items-center text-sm text-sky-600 dark:text-sky-300 hover:text-orange-400 dark:hover:text-orange-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Webinar Tracks
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Freelancer <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Webinars</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
            Forget bidding wars and client hunting. Learn how to connect ready-to-buy people from your network to verified businesses and keep 100% of your earnings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webinarGroups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{group.name}</h2>
              <div className="space-y-3">
                {group.links.map((webinar) => (
                  <a
                    key={webinar.label}
                    href={webinar.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-white/10 px-4 py-3 text-sm text-sky-600 dark:text-sky-300 hover:text-orange-400 dark:hover:text-orange-300 hover:bg-white/70 dark:hover:bg-white/5 transition-colors"
                  >
                    <span>{webinar.label}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarFreelancer;
