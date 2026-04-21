import { motion } from 'framer-motion';
import { Mail, Phone, CalendarDays, Sparkles } from 'lucide-react';
import { useState } from 'react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const LeadContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-white dark:bg-gray-950 text-black dark:text-white overflow-hidden">
      <div className="absolute -top-24 right-0 w-80 h-80 bg-violet-400/20 dark:bg-violet-500/15 blur-3xl rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-black dark:text-gray-300">
            Share your goals and we will reach out with a practical lead-generation plan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-gray-50/80 dark:bg-white/5 space-y-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required className="w-full rounded-lg px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10" />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Work email" required className="w-full rounded-lg px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10" />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" required className="w-full rounded-lg px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What pipeline goal are you trying to hit?" rows={5} required className="w-full rounded-lg px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10" />
            <button type="submit" className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-400 text-white font-semibold">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-violet-300/30 dark:border-violet-500/30 p-6 bg-white/70 dark:bg-white/5">
            <h2 className="text-2xl font-semibold mb-6">Direct Contact</h2>
            <div className="space-y-4 text-black dark:text-gray-200">
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-500" />
                hello@sellingify.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-500" />
                +1 (855) 220-0505
              </p>
              <p className="pt-2 text-black dark:text-gray-300">
                Typical response time: within one business day.
              </p>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-purple-600 to-violet-400 text-white font-semibold"
              >
                <CalendarDays className="w-4 h-4" />
                Book 30-Min Meeting
              </a>
            </div>
            <div className="mt-6 rounded-xl border border-violet-300/30 dark:border-violet-500/30 bg-violet-50/60 dark:bg-violet-900/20 p-4">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-500" />
                Fast lane booking
              </p>
              <p className="text-sm text-black dark:text-gray-300">
                Pick your time slot and meet us directly. No long forms required.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl p-[1px] bg-gradient-to-r from-violet-400/50 via-fuchsia-400/40 to-violet-400/50">
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-3">
            <div className="px-3 py-2 text-left">
              <h3 className="font-semibold text-lg">Book Your Meeting Instantly</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Choose a slot below and get confirmation in your inbox.
              </p>
            </div>
          <iframe
            title="Book a meeting with Sellingify"
            src={`${CAL_BOOKING_URL}?embed=true`}
            className="w-full h-[760px] rounded-xl border-0"
            loading="lazy"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadContact;
