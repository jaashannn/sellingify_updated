import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What kind of companies do you work with?',
    a: 'We work with B2B service companies, SaaS teams, and agencies that need predictable qualified pipeline.',
  },
  {
    q: 'Do you only do cold outreach?',
    a: 'No. We combine outbound, inbound, and follow-up systems based on your goals and market.',
  },
  {
    q: 'How quickly can we launch?',
    a: 'Most teams can launch in 1-2 weeks after positioning, ICP, and offer alignment are complete.',
  },
  {
    q: 'How do you define a qualified lead?',
    a: 'A qualified lead matches your ICP, has a relevant business need, and is open to a sales conversation.',
  },
  {
    q: 'How do we track performance?',
    a: 'You receive weekly reporting on outreach volume, positive replies, meetings, and pipeline outcomes.',
  },
];

const LeadFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-black dark:text-gray-300">
            Common questions about how our lead-generation programs work.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={item.q} className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-white/5"
              >
                <span className="font-semibold">{item.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && <p className="px-5 py-4 text-black dark:text-gray-300">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadFAQ;
