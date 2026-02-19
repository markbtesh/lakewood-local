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
      className={className}
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
    >
      <div className="flex flex-wrap gap-2 items-center justify-center [&_input]:flex-1 [&_input]:min-w-[200px]">
        <label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="Email Address"
          required
          aria-invalid={status === 'error'}
          aria-describedby={status !== 'idle' ? 'newsletter-message' : undefined}
          className="w-full max-w-[360px] py-3.5 px-5 bg-white/95 border border-white/50 rounded-[var(--radius-sm)] focus:border-white focus:outline-none focus:ring-[3px] focus:ring-white/30 shrink-0"
        />
        <button type="submit" className="btn btn-accent shrink-0">
          Get News
        </button>
      </div>
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
