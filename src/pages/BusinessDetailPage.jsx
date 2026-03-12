import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { getBusinessBySlug } from '../data/businesses';

const SITE_URL = 'https://lakewoodlocal.net';

function StarRating({ rating = 5, yellow }) {
  const stars = Math.min(5, Math.max(0, Math.round(rating)));
  const starClass = yellow ? (i) => (i <= stars ? 'text-[#fbbc04]' : 'text-gray-300') : (i) => (i <= stars ? 'text-accent' : 'text-border');
  return (
    <span className="flex gap-0.5 mb-3" aria-label={`${stars} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-lg leading-none ${starClass(i)}`} aria-hidden>★</span>
      ))}
    </span>
  );
}

export default function BusinessDetailPage() {
  const { slug } = useParams();
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <main className="min-h-[50vh] flex flex-col items-center justify-center py-16 px-6 text-center">
        <h1 className="text-2xl font-bold text-text mb-2">Business not found</h1>
        <p className="text-text-muted mb-6">We couldn&apos;t find that listing.</p>
        <Link to="/" className="btn">Back to home</Link>
      </main>
    );
  }

  const {
    name,
    categoryLabel,
    description,
    sections,
    phone,
    website,
    facebook,
    email,
    address,
    reviews,
    image,
    verified,
    googleReviewsUrl,
  } = business;

  const firstReview = reviews && reviews.length > 0 ? reviews[0] : null;
  const reviewRating = firstReview?.rating ?? 5;

  const pageTitle = `${name} | Lakewood Local`;
  const metaDescription = description.slice(0, 160).trim() + (description.length > 160 ? '…' : '');
  const businessUrl = `${SITE_URL}/business/${slug}`;

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description: metaDescription,
    ...(website && { url: website }),
    mainEntityOfPage: { '@type': 'WebPage', '@id': businessUrl },
    ...(address && { address }),
    ...(phone && { telephone: phone }),
    ...(website && { sameAs: [website].concat(facebook ? [facebook] : []) }),
    ...(image && { image: image.startsWith('http') ? image : `${SITE_URL}${image}` }),
    ...(reviews?.length > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewRating,
        reviewCount: reviews.length,
        bestRating: 5,
      },
    }),
  }), [name, metaDescription, businessUrl, address, phone, website, facebook, image, reviews?.length, reviewRating]);

  usePageMeta({
    title: pageTitle,
    description: metaDescription,
    canonical: businessUrl,
    ogUrl: businessUrl,
    ogTitle: pageTitle,
    ogDescription: metaDescription,
    ogImage: image || undefined,
    jsonLd,
  });

  return (
    <>
      <main className="py-10 sm:py-14 px-4 sm:px-6 pb-20 bg-bg-alt">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
          <div className="min-w-0 order-1">
            <header className="mb-6">
              <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
                {categoryLabel}
              </span>
              <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-text m-0 leading-tight">
                {name}
              </h1>
            </header>

            <div className="mb-10 rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-[0_8px_24px_rgba(13,115,119,0.08)]">
              {image ? (
                <img src={image} alt="" className="w-full aspect-[16/10] object-cover block" />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-bg-alt text-text-muted text-[0.9rem]" aria-hidden>
                  Photo coming soon
                </div>
              )}
            </div>

            <div className="text-text">
              <h2 className="text-xl font-semibold text-text m-0 mb-3">
                Welcome to {name}
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-text m-0 mb-8">{description}</p>

              {sections.map((section, i) => (
                <section key={i} className="mb-8">
                  <h3 className="text-lg font-semibold text-text m-0 mb-2">{section.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text m-0">{section.body}</p>
                </section>
              ))}
            </div>

            <p className="mt-10 pt-6 border-t border-border">
              <Link to="/" className="text-[0.9rem] font-medium text-primary hover:opacity-90 transition-opacity">
                ← Back to all businesses
              </Link>
            </p>
          </div>

          <aside className="order-2 lg:order-2 flex flex-col gap-6 lg:sticky lg:top-[calc(64px+1.5rem)]">
            <div className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-[0_4px_16px_rgba(13,115,119,0.06)]">
              <h2 className="text-lg font-semibold text-text m-0 mb-4">Contact</h2>
              {phone && (
                <p className="m-0 mb-3 text-[0.9375rem]">
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-primary font-medium hover:underline">
                    {phone}
                  </a>
                </p>
              )}
              {address && (
                <p className="m-0 mb-4 text-[0.9rem] text-text-muted">{address}</p>
              )}
              {website && (
                <p className="m-0 mb-3 text-[0.8125rem] text-text-muted">
                  Website: <a href={website} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{new URL(website).hostname.replace(/^www\./, '')}</a>
                </p>
              )}
              <div className="flex flex-col gap-2">
                {website && (
                  <a href={website} target="_blank" rel="noopener noreferrer" className="btn w-full justify-center gap-2 text-[0.9rem] py-2.5">
                    <span>Visit website</span>
                    <span aria-hidden>→</span>
                  </a>
                )}
                {facebook && (
                  <a href={facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-[0.9rem] font-semibold text-white bg-[#1877f2] rounded-[var(--radius-md)] no-underline transition-colors hover:opacity-90">
                    <span className="font-bold">f</span>
                    <span>Facebook</span>
                  </a>
                )}
                {email && !website && (
                  <a href={`mailto:${email}`} className="btn w-full justify-center gap-2 text-[0.9rem] py-2.5">
                    <span>Email</span>
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
              {verified && (
                <p className="flex items-center gap-2 mt-4 pt-4 border-t border-border text-[0.8125rem] text-text-muted">
                  <span className="w-2 h-2 rounded-full shrink-0 bg-emerald-500" aria-hidden />
                  Verified listing
                </p>
              )}
            </div>

            {(reviews?.length > 0 || googleReviewsUrl) && (
              <div className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-[0_4px_16px_rgba(13,115,119,0.06)]">
                <h2 className="text-lg font-semibold text-text m-0 mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-sm font-bold text-white bg-gradient-to-br from-[#4285f4] via-[#34a853] to-[#ea4335] rounded-[var(--radius-sm)]" aria-hidden>G</span>
                  Reviews
                </h2>
                {firstReview && (
                  <>
                    <StarRating rating={reviewRating} yellow />
                    <p className="font-semibold text-[0.9rem] text-text m-0 mb-1">{firstReview.author}</p>
                    <p className="text-[0.9rem] leading-relaxed text-text-muted m-0 mb-4">&ldquo;{firstReview.text}&rdquo;</p>
                  </>
                )}
                {googleReviewsUrl && (
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-[0.9rem] font-semibold text-white bg-[#1a73e8] rounded-[var(--radius-md)] no-underline transition-colors hover:bg-[#1557b0]"
                  >
                    <span>Google Reviews</span>
                    <span aria-hidden>»</span>
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
