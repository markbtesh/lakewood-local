import { useState, useMemo } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import BusinessCard from '../components/BusinessCard';
import { businesses } from '../data/businesses';

const PER_PAGE = 9;
const SITE_URL = 'https://lakewoodlocal.net';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const total = businesses.length;
  const totalPages = Math.ceil(total / PER_PAGE) || 1;
  const start = (page - 1) * PER_PAGE;
  const list = businesses.slice(start, start + PER_PAGE);

  const websiteJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lakewood Local',
    url: SITE_URL,
    description: 'Find trusted local businesses in Lakewood. Restaurants, services, and shops that stand behind their work. Support local.',
  }), []);

  usePageMeta({
    title: 'Lakewood Local – Discover the Best Local Businesses in Lakewood',
    description: 'Find trusted local businesses in Lakewood. Restaurants, services, and shops that stand behind their work. Support local.',
    canonical: SITE_URL,
    jsonLd: websiteJsonLd,
  });

  return (
    <>
      <Hero />
      <HowItWorks />
      <section className="py-14 sm:py-16 px-6 bg-surface">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-0">
            <div className="shrink-0 flex items-center sm:mr-[-8px]">
              <img
                src="/why-lakewood-local.png"
                alt=""
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-2 ring-border shadow-lg"
              />
            </div>
            <div className="relative flex-1 min-w-0 sm:pl-4 z-10">
              <div className="relative rounded-2xl  border-2 border-border bg-surface px-6 sm:px-8 py-6 sm:py-8 shadow-[0_6px_28px_rgba(13,115,119,0.12)]">
                <h2 className="mb-2 text-[1.35rem] sm:text-[1.5rem] font-semibold">Why Lakewood Local?</h2>
                <p className="text-[0.9375rem] leading-relaxed text-text-muted m-0">
                  We believe the best businesses show up for their community. Every listing here is invited because they stand behind their work. When you support local, you&apos;re investing in people who take pride in what they do.
                </p>
              </div>
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-px w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[20px] border-r-border z-20" aria-hidden="true" />
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[18px] border-r-surface z-20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section id="recent-businesses" className="py-16 sm:py-20 px-4 bg-bg-alt">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-center mb-2 text-[1.35rem] sm:text-[1.5rem] font-semibold">
            <span className="relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:h-0.5 after:w-12 after:rounded-full after:bg-accent/70">Recently Added</span>
          </h2>
          <p className="text-center text-text-muted mb-10 text-[0.9rem]">
            Fresh picks from Lakewood and Howell—hand-chosen so you don&apos;t have to scroll through noise.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
            {list.map((b) => (
              <li key={b.id}>
                <BusinessCard business={b} />
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <nav className="flex flex-wrap items-center justify-center gap-5 mt-10 pt-10 border-t border-border" aria-label="Business list pagination">
              <button
                type="button"
                className="btn min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                aria-label="Previous page"
              >
                Previous
              </button>
              <span className="text-[0.95rem] text-text-muted" aria-live="polite">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="btn min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                aria-label="Next page"
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
