import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import emailjs from '@emailjs/browser';

const SITE_URL = 'https://lakewoodlocal.net';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_qog23pw';
const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ?? import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_cqz2d4e';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'V4f87Pi01It_cqmYq';

const inputClass =
  'w-full px-4 py-2.5 font-[inherit] text-[0.9375rem] border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-surface)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[var(--color-primary)]/15 transition-shadow';
const labelClass = 'block text-[0.8125rem] font-medium text-[var(--color-text)] mb-1.5';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_CONTACT_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('Email is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID (or VITE_EMAILJS_TEMPLATE_ID), and VITE_EMAILJS_PUBLIC_KEY in .env.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMessage('');

    const templateParams = {
      from_name: form.name || '—',
      from_email: form.email || '—',
      subject: form.subject || 'Contact form submission',
      message: form.message || '—',
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.text || err.message || 'Something went wrong.');
    }
  };

  usePageMeta({
    title: 'Contact | Lakewood Local',
    description: 'Get in touch with Lakewood Local. Send us a message and we\'ll get back to you.',
    canonical: `${SITE_URL}/contact`,
    ogUrl: `${SITE_URL}/contact`,
    ogTitle: 'Contact | Lakewood Local',
    ogDescription: 'Get in touch with Lakewood Local.',
  });

  return (
    <>
      <main className="min-h-screen bg-bg-alt py-12 px-4 sm:py-16 sm:px-6">
        <div className="container max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Contact
          </h1>
          <p className="mt-1.5 text-text-muted text-[0.9rem]">
            Send us a message and we&apos;ll get back to you.
          </p>

          {status === 'success' && (
            <div className="mt-6 rounded-[var(--radius-md)] border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-800 text-[0.9rem]">
              Thanks! Your message has been sent. We&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 rounded-[var(--radius-md)] border border-red-200 bg-red-50/80 p-4 text-red-800 text-[0.9rem]">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                className={inputClass + ' resize-y min-h-[120px]'}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-full py-2.5 text-[0.9rem] font-semibold"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <p className="mt-8 text-center">
            <Link to="/" className="text-[0.875rem] font-medium text-primary hover:opacity-90 transition-opacity">← Back to home</Link>
          </p>
        </div>
      </main>
    </>
  );
}
