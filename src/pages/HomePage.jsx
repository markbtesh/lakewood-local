import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import BusinessCard from '../components/BusinessCard';
import { businesses } from '../data/businesses';

const PER_PAGE = 9;
const SITE_URL = 'https://lakewoodlocal.net';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lakewood Local',
  url: SITE_URL,
  description: 'Find trusted local businesses in Lakewood. Restaurants, services, and shops that stand behind their work. Support local.',
};

export default function HomePage() {
  const [page, setPage] = useState(1);
  const total = businesses.length;
  const totalPages = Math.ceil(total / PER_PAGE) || 1;
  const start = (page - 1) * PER_PAGE;
  const list = businesses.slice(start, start + PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Lakewood Local – Discover the Best Local Businesses in Lakewood</title>
        <meta name="description" content="Find trusted local businesses in Lakewood. Restaurants, services, and shops that stand behind their work. Support local." />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <Hero />
      <HowItWorks />
      <section className="py-16 px-6 bg-surface">
        <div className="container max-w-[640px] mx-auto text-center">
          <h2 className="text-center mb-2">Why Lakewood Local?</h2>
          <p className="text-[1.1rem] leading-relaxed text-text-muted m-0">
            We believe the best businesses are the ones that show up for their community. Every listing here has been invited because they stand behind their work and care about their neighbors. When you support local, you're not just getting a service. You're connecting with people who take pride in what they do.
          </p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="container">
          <h2 className="text-center mb-2">Recently Added Local Businesses</h2>
          <p className="text-center text-text-muted mb-12 text-[1.05rem]">
            Check out these hometown favorites!
          </p>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 list-none m-0 p-0">
            {list.map((b) => (
              <li key={b.id}>
                <BusinessCard business={b} />
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <nav className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-border" aria-label="Business list pagination">
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
