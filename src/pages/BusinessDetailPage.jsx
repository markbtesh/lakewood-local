import { useParams, Link } from 'react-router-dom';
import { getBusinessBySlug } from '../data/businesses';

function StarRating({ rating = 5 }) {
  const stars = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <span className="flex gap-0.5 mb-2" aria-label={`${stars} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-xl leading-none ${i <= stars ? 'text-[#f9ab00]' : 'text-border'}`} aria-hidden>★</span>
      ))}
    </span>
  );
}

export default function BusinessDetailPage() {
  const { slug } = useParams();
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <main className="container py-12">
        <h1>Business Not Found</h1>
        <p>We couldn't find that business listing.</p>
        <Link to="/" className="btn">Back to Home</Link>
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

  return (
    <main className="py-12 px-6 pb-24 bg-bg">
      <div className="container grid grid-cols-1 min-[900px]:grid-cols-[1fr_320px] gap-12 min-[900px]:gap-16 items-start max-w-[1200px] mx-auto">
        <div className="min-w-0 order-2 min-[900px]:order-1">
          <header className="mb-6">
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-text m-0">
              {name}
            </h1>
          </header>

          <div className="mb-12 rounded-[var(--radius-md)] overflow-hidden shadow-[0_4px_20px_rgba(13,79,79,0.08)]">
            {image ? (
              <img src={image} alt="" className="w-full h-auto block align-middle" />
            ) : (
              <div className="w-full aspect-video flex items-center justify-center bg-bg-alt text-text-muted text-[0.9rem]" aria-hidden>
                <span>Photo coming soon</span>
              </div>
            )}
          </div>

          <div className="text-text">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text m-0 mb-4">
              Welcome to {name} in Lakewood
            </h2>
            <p className="text-base leading-relaxed text-text m-0 mb-8">{description}</p>

            {sections.map((section, i) => (
              <section key={i} className="mb-8 [&_h3]:font-[family-name:var(--font-heading)] [&_h3]:text-[1.35rem] [&_h3]:font-bold [&_h3]:text-text [&_h3]:m-0 [&_h3]:mb-2 [&_p]:text-text [&_p]:m-0 [&_p]:text-base [&_p]:leading-relaxed">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="font-semibold">← Back to all businesses</Link>
          </p>
        </div>

        <aside className="order-first min-[900px]:order-2 grid grid-cols-2 max-[600px]:grid-cols-1 gap-6 min-[900px]:flex min-[900px]:flex-col min-[900px]:gap-8 min-[900px]:sticky min-[900px]:top-[calc(72px+1rem)]">
          <div className="bg-surface border border-border rounded-[var(--radius-md)] p-8 shadow-[0_2px_8px_rgba(13,79,79,0.06)]">
            <h2 className="text-xl font-bold text-text m-0 mb-4">Contact Info</h2>
            {phone && (
              <p className="m-0 mb-2 text-[0.95rem] [&_a]:text-[#1a73e8] [&_a]:font-medium [&_a:hover]:underline">
                Phone: <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
              </p>
            )}
            {address && (
              <p className="m-0 mb-4 text-[0.9rem] text-text-muted">{address}</p>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 mb-2 text-[0.95rem] font-semibold text-white bg-[#1a73e8] border-0 rounded-lg no-underline transition-colors hover:bg-[#1557b0]">
                <span>Website</span>
                <span className="opacity-90" aria-hidden>→</span>
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 mb-2 text-[0.95rem] font-semibold text-white bg-[#1877f2] border-0 rounded-lg no-underline transition-colors hover:bg-[#166fe5] [&_.fb-icon]:font-bold">
                <span className="font-bold">f</span>
                <span>Facebook</span>
              </a>
            )}
            {email && !website && (
              <a href={`mailto:${email}`} className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 mb-2 text-[0.95rem] font-semibold text-white bg-[#1a73e8] border-0 rounded-lg no-underline transition-colors hover:bg-[#1557b0]">
                <span>Email</span>
                <span className="opacity-90" aria-hidden>→</span>
              </a>
            )}
            <p className="flex items-center gap-1.5 mt-4 text-[0.85rem] text-text-muted">
              <span className="w-2 h-2 rounded-full bg-text-muted shrink-0" aria-hidden />
              {verified ? 'Verified' : 'Unverified'}
            </p>
          </div>

          {(reviews?.length > 0 || googleReviewsUrl) && (
            <div className="bg-surface border border-border rounded-[var(--radius-md)] p-8 shadow-[0_2px_8px_rgba(13,79,79,0.06)]">
              <h2 className="text-xl font-bold text-text m-0 mb-4 flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 text-base font-bold text-white bg-gradient-to-br from-[#4285f4] via-[#34a853] via-50% to-[#ea4335] rounded font-[family-name:var(--font-body)]" aria-hidden>G</span>
                Reviews
              </h2>
              {firstReview && (
                <>
                  <StarRating rating={reviewRating} />
                  <p className="font-bold text-[0.95rem] text-text m-0 mb-1">{firstReview.author}</p>
                  <p className="text-[0.9rem] leading-relaxed text-text m-0 mb-4">"{firstReview.text}"</p>
                </>
              )}
              {googleReviewsUrl && (
                <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 mt-2 text-[0.95rem] font-semibold text-white bg-[#1a73e8] border-0 rounded-lg no-underline transition-colors hover:bg-[#1557b0]">
                  <span>Google Reviews</span>
                  <span className="opacity-90" aria-hidden>»</span>
                </a>
              )}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
