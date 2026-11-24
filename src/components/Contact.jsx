import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/personalInfo';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa6';
import {
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/dev.khaled.abdullah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Message from Portfolio Website',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Graceful fallback: opens the visitor's mail client directly with the message pre-filled
      window.location.href = `mailto:dev.khaled.abdullah@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative z-10 bg-[#0A1637]/30 border-t border-[#22396F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Channels"
          title="Get in Touch"
          subtitle="Whether you have an engineering role, a freelance architecture project, or a technical inquiry"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Cards & Socials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Let's Build Something Resilient.
              </h3>
              <p className="text-sm text-[#94A3B8] font-sans leading-relaxed mb-6">
                I am actively seeking backend engineering and full-stack positions.
                Feel free to reach out via WhatsApp, email, or LinkedIn.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* WhatsApp Link Card */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366] hover:scale-110 transition-all cursor-pointer shadow-sm"
                      title="Open WhatsApp Chat"
                      aria-label="Open WhatsApp Chat"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <div>
                      <span className="text-xs font-mono text-[#94A3B8] block">WhatsApp Direct</span>
                      <a
                        href={personalInfo.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#FCF1D0] transition-colors flex items-center gap-1.5"
                      >
                        <span>{personalInfo.socials.whatsappDisplay}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#FCF1D0]" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.socials.whatsappDisplay, 'phone')}
                    className="p-2 rounded-lg bg-[#010736] border border-[#22396F] text-[#94A3B8] hover:text-[#FCF1D0] hover:border-[#FCF1D0] transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Gmail Link Card */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.socials.emailMailto}
                      className="w-12 h-12 rounded-xl bg-[#EA4335]/10 border border-[#EA4335]/30 flex items-center justify-center text-[#EA4335] hover:bg-[#EA4335]/20 hover:border-[#EA4335] hover:scale-110 transition-all cursor-pointer shadow-sm"
                      title="Send Direct Email"
                      aria-label="Send Direct Email"
                    >
                      <SiGmail className="w-6 h-6" />
                    </a>
                    <div>
                      <span className="text-xs font-mono text-[#94A3B8] block">Direct Email</span>
                      <a
                        href={personalInfo.socials.emailMailto}
                        className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#FCF1D0] transition-colors flex items-center gap-1.5"
                      >
                        <span>{personalInfo.socials.email}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#FCF1D0]" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.socials.email, 'email')}
                    className="p-2 rounded-lg bg-[#010736] border border-[#22396F] text-[#94A3B8] hover:text-[#FCF1D0] hover:border-[#FCF1D0] transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Social Network Pills */}
            <div className="pt-4 border-t border-[#22396F]/40">
              <span className="text-xs font-mono text-[#94A3B8] block mb-3 uppercase tracking-wider">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D1C42] border border-[#22396F] text-sm font-medium text-white hover:border-[#FCF1D0] hover:text-[#FCF1D0] hover:shadow-[0_0_15px_rgba(252,241,208,0.2)] transition-all"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D1C42] border border-[#22396F] text-sm font-medium text-white hover:border-[#FCF1D0] hover:text-[#FCF1D0] hover:shadow-[0_0_15px_rgba(252,241,208,0.2)] transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#22396F]/50 flex items-center justify-center text-[#FCF1D0]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Send a Direct Message
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#94A3B8]">Response &lt; 24h</span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center text-[#10B981] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Message Received!
                  </h4>
                  <p className="mt-2 text-sm text-[#94A3B8] max-w-sm">
                    Thank you, Khaled will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#010736] border border-[#22396F] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FCF1D0] focus:ring-1 focus:ring-[#FCF1D0] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#010736] border border-[#22396F] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FCF1D0] focus:ring-1 focus:ring-[#FCF1D0] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Backend Engineering Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#010736] border border-[#22396F] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FCF1D0] focus:ring-1 focus:ring-[#FCF1D0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Khaled, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#010736] border border-[#22396F] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FCF1D0] focus:ring-1 focus:ring-[#FCF1D0] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-display font-bold bg-[#FCF1D0] text-[#010736] hover:bg-white hover:shadow-[0_0_20px_rgba(252,241,208,0.4)] transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
