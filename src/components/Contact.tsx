import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '../data/personal';

const Contact: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwts31Es1d5HHzchXzBbpNmuSbW74D7627_5S6eZexKVzCMiNpPoaZVmnocnasQBLo/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Guard: if URL is not configured, show error immediately
    if (!GOOGLE_SHEETS_URL) {
      console.error('VITE_GOOGLE_SHEETS_URL is not set in .env');
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
      return;
    }

    const payload = new URLSearchParams();
    payload.append('timestamp', new Date().toISOString());
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.number);
    payload.append('subject', formData.subject);
    payload.append('message', formData.message);

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      // no-cors always resolves (opaque response) — treat reaching here as success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', number: '', subject: '', message: '' });
    } catch (err) {
      console.error('Google Sheets error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'number') {
      setFormData({ ...formData, [name]: value.replace(/[^0-9]/g, '') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputClass =
    'w-full bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all';

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white dark:bg-gray-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div variants={containerVariants} initial="hidden" animate={controls}>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-1">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              I Want To Hear From You
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Whether it's about a tech project, a freelance opportunity, or an internship role — fill out the form and I'll get back to you as soon as I can.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: MapPin,
                  color: 'bg-orange-100 text-orange-500',
                  label: 'Address',
                  value: personal.currentCity,
                },
                {
                  icon: Mail,
                  color: 'bg-green-100 text-green-500',
                  label: 'Email',
                  value: personal.email,
                },
                {
                  icon: Phone,
                  color: 'bg-purple-100 text-purple-500',
                  label: 'Phone',
                  value: personal.phone,
                },
              ].map(({ icon: Icon, color, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{label}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleChange} required
                    className={inputClass} placeholder="Your Name"
                  />
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} required
                    className={inputClass} placeholder="Your Email"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel" name="number" value={formData.number}
                    onChange={handleChange} maxLength={10}
                    className={inputClass} placeholder="Phone Number"
                  />
                  <input
                    type="text" name="subject" value={formData.subject}
                    onChange={handleChange} required
                    className={inputClass} placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Write your message here..."
                />

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-700 dark:text-green-400"
                    >
                      <CheckCircle size={16} />
                      <span>Message sent! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400"
                    >
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or email me directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit" disabled={isSubmitting}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-2.5 px-8 rounded-lg transition-all text-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
