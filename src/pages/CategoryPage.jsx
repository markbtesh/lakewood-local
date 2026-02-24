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
      <main className="container py-12">
        <h1>Category Not Found</h1>
        <Link to="/" className="btn">Back to Home</Link>
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
      <main className="py-12 px-6 pb-24">
      <div className="container">
        <header className="text-[0.9rem] mb-4 text-text-muted">
          <Link to="/" className="text-primary">Lakewood Local</Link>
          <span className="text-border"> / </span>
          <span className="text-text font-medium">{category.name}</span>
        </header>
        <h1 className="mb-12">{category.name}</h1>
        {list.length === 0 ? (
          <p className="text-text-muted text-[1.1rem]">No businesses in this category yet. Check back soon!</p>
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 list-none m-0 p-0">
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
