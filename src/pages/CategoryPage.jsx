import { useParams, Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import BusinessCard from '../components/BusinessCard';
import { businesses, categories } from '../data/businesses';

const SITE_URL = 'https://lakewoodlocal.net';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.flatMap((c) => c.children).find((ch) => ch.slug === slug);
  const list = businesses.filter((b) => b.category === slug);

  if (!category) {
    return (
      <main className="min-h-[50vh] flex flex-col items-center justify-center py-16 px-6 text-center">
        <h1 className="text-2xl font-bold text-text mb-2">Category not found</h1>
        <Link to="/" className="btn">Back to home</Link>
      </main>
    );
  }

  const title = `${category.name} | Lakewood Local`;
  const description = list.length > 0
    ? `Find local ${category.name.toLowerCase()} in Lakewood. ${list.map((b) => b.name).join(', ')}.`
    : `Local ${category.name.toLowerCase()} in Lakewood. Check back for new listings.`;

  usePageMeta({
    title,
    description,
    canonical: `${SITE_URL}/category/${slug}`,
    ogUrl: `${SITE_URL}/category/${slug}`,
    ogTitle: title,
    ogDescription: description,
  });

  return (
    <>
      <main className="py-14 sm:py-16 px-4 sm:px-6 pb-20 bg-bg-alt">
        <div className="container max-w-5xl mx-auto">
          <nav className="text-[0.875rem] mb-6 text-text-muted" aria-label="Breadcrumb">
            <Link to="/" className="text-primary hover:opacity-90 transition-opacity">Lakewood Local</Link>
            <span className="mx-1.5 text-border">/</span>
            <span className="text-text font-medium">{category.name}</span>
          </nav>
          <h1 className="mb-10 text-[1.35rem] sm:text-[1.5rem] font-semibold">
            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-12 after:rounded-full after:bg-accent/70">
              {category.name}
            </span>
          </h1>
          {list.length === 0 ? (
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface px-8 py-12 text-center">
              <p className="text-text-muted text-[1rem] m-0">No businesses in this category yet. Check back soon!</p>
              <Link to="/" className="inline-block mt-4 text-[0.9rem] font-medium text-primary hover:opacity-90">← Back to home</Link>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
              {list.map((b) => (
                <li key={b.id}>
                  <BusinessCard business={b} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
