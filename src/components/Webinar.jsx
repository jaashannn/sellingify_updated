import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase } from 'lucide-react';

const webinarTracks = [
  {
    title: 'Freelancer Webinars',
    description:
      'Freelancing 2.0 — The New Way to Earn Without Skills, Projects Or Bosses. Forget bidding wars and client hunting.',
    highlights: [
      'No selling. No cold calls.',
      'Keep 100% of your earnings.',
      'Join Reflo Hub as a freelancer to earn passive income by referring leads in 150+ categories like real estate, finance, and travel. No selling required.',
    ],
    path: '/webinar/freelancer',
    icon: Users,
  },
  {
    title: 'Business Webinars',
    description:
      'Tired of wasting marketing budgets on leads that don’t convert? With Reflo Hub, connect directly with qualified leads from verified freelancers actively seeking clients for your services.',
    highlights: [
      'No platform commission. Predictable monthly fees. Maximum ROI.',
      'Reflo Hub limits listings to 2 businesses per category per city to ensure top lead quality.',
      'No Portal Commission | Global Leads | High ROI',
    ],
    path: '/webinar/business',
    icon: Briefcase,
  },
];

const Webinar = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gray-50 dark:bg-gray-950 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Webinar Track</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Pick the path that matches you. Each page has curated webinar sessions and quick guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webinarTracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-orange-300 text-white flex items-center justify-center mb-5">
                <track.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{track.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{track.description}</p>
              <ul className="space-y-2 mb-6">
                {track.highlights.map((point) => (
                  <li key={point} className="text-sm text-gray-700 dark:text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>

              <Link to={track.path}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-orange-300 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Explore Webinars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Webinar;
