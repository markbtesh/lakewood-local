import { useState } from 'react';

export default function NewsletterSignup({ className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      return;
    }
    // Simulate submit; replace with real API later
    setStatus('success');
    setEmail('');
  }

  return (
    <form
      className={`inline-flex flex-row items-center gap-2 ${className}`.trim()}
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
        placeholder="Your email"
        required
        aria-invalid={status === 'error'}
        aria-describedby={status !== 'idle' ? 'newsletter-message' : undefined}
        className="w-[200px] py-2 px-3 bg-white border border-white/50 rounded-[var(--radius-md)] text-[0.9rem] text-black placeholder:text-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 box-border"
      />
      <button type="submit" className="btn btn-accent py-2 px-4 text-[0.9rem] shrink-0">
        Subscribe
      </button>
      {status === 'success' && (
        <p id="newsletter-message" className="mt-4 text-[0.95rem] text-white/95" role="status">
          Thanks for subscribing! Please check your email for further instructions.
        </p>
      )}
      {status === 'error' && (
        <p id="newsletter-message" className="mt-4 text-[0.95rem] text-[#ffc9c9]" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
