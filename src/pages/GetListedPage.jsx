import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_qog23pw';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_cqz2d4e';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'V4f87Pi01It_cqmYq';

const inputClass =
  'w-full px-4 py-1 font-[inherit] text-base border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-[var(--color-surface)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20';
const labelClass = 'block text-sm font-medium text-[var(--color-text)] mb-1.5';

const INCLUDED_ITEMS = [
  'Custom profile so your business is easy to find.',
  'Regular social media shoutouts',
  'Mobile app to request Google Reviews',
];

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25 text-accent-soft" aria-hidden>
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function GetListedPage() {
  const [form, setForm] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    servingNewKent: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('Email is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMessage('');

    const name = [form.firstName, form.lastName].filter(Boolean).join(' ') || form.businessName || 'Applicant';
    const time = new Date().toLocaleString();

    const templateParams = {
      name,
      time,
      businessName: form.businessName || '—',
      firstName: form.firstName || '—',
      lastName: form.lastName || '—',
      email: form.email || '—',
      phone: form.phone || '—',
      website: form.website || '—',
      servingNewKent: form.servingNewKent || '—',
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({
        businessName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        servingNewKent: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.text || err.message || 'Something went wrong.');
    }
  };

  return (
    <main className="min-h-screen bg-bg-alt py-12 px-4 sm:py-16 sm:px-6">
      <div className="container max-w-5xl">
        <div className="overflow-hidden rounded-2xl bg-surface shadow-lg sm:flex">
          {/* Left: Apply To Be Featured */}
          <div className="bg-primary px-8 py-10 text-white sm:w-[min(100%,380px)] sm:shrink-0 lg:px-10 lg:py-12">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
              Apply To Be Featured
            </h1>
            <p className="mt-3 text-white/95 text-[1rem] leading-relaxed">
              Get more customers by being recognized as a trusted business in our community.
            </p>
            <p className="mt-5 font-semibold text-white">
              Getting Featured Is Free, But Invitation Only
            </p>
            <p className="mt-6 font-semibold">What&apos;s Included:</p>
            <ul className="mt-3 space-y-3">
              {INCLUDED_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-white/95 text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="flex flex-1 flex-col bg-surface px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-[family-name:var(--font-heading)] mb-2 text-2xl font-bold text-text sm:text-3xl">
              Tell Us About Your Business
            </h2>
            <p className="text-text-muted text-[0.95rem]">
              Submitting an application does not guarantee acceptance. We will review and respond within three business days.
            </p>

            {status === 'success' && (
              <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
                Thanks! We&apos;ve received your application and will get back to you within three business days.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="businessName" className={labelClass}>Business Name</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  value={form.businessName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Mobile Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Mobile Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="website" className={labelClass}>Website URL</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Website URL"
                  value={form.website}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="servingNewKent" className={labelClass}>Serving Monmouth County residents?</label>
                <select
                  id="servingNewKent"
                  name="servingNewKent"
                  value={form.servingNewKent}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">— Please choose an option —</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn w-full py-3 font-semibold"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Apply Now'}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link to="/" className="font-semibold text-primary hover:underline">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
