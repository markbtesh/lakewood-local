import { Link } from 'react-router-dom';

export default function BusinessCard({ business }) {
  const { id, name, tagline, categoryLabel } = business;
  return (
    <article className="bg-surface rounded-[var(--radius-lg)] shadow-[0_2px_8px_rgba(13,79,79,0.06)] border border-border overflow-hidden transition-all duration-[0.25s] ease-out hover:shadow-[0_4px_20px_rgba(13,79,79,0.08)] hover:-translate-y-1 hover:border-primary">
      <div className="p-8 h-full flex flex-col">
        <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-widest text-accent mb-2">
          {categoryLabel}
        </span>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-2 leading-tight">
          <Link to={`/business/${id}`} className="text-text hover:text-primary">{name}</Link>
        </h3>
        <p className="flex-1 text-text-muted text-[0.95rem] mb-6 leading-relaxed">
          {tagline}
        </p>
        <Link to={`/business/${id}`} className="font-semibold text-[0.95rem] inline-flex items-center gap-1 after:content-['→'] after:ml-0.5">
          View Profile
          <span className="sr-only"> about {name}</span>
        </Link>
      </div>
    </article>
  );
}
