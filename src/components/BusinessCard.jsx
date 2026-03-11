import { Link } from 'react-router-dom';

export default function BusinessCard({ business }) {
  const { id, name, tagline, categoryLabel, image } = business;
  return (
    <article className="group bg-surface rounded-[var(--radius-lg)] border border-border overflow-hidden transition-all duration-300 ease-out hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(13,115,119,0.14)] hover:-translate-y-1 flex flex-col h-full focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-2 focus-within:border-primary/40">
      {image ? (
        <Link to={`/business/${id}`} className="relative block aspect-[16/10] overflow-hidden bg-bg-alt">
          <img src={image} alt="" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
        </Link>
      ) : (
        <Link to={`/business/${id}`} className="flex aspect-[16/10] bg-bg-alt items-center justify-center text-text-muted text-[0.875rem]">
          Photo coming soon
        </Link>
      )}
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent mb-1.5">
          {categoryLabel}
        </span>
        <h3 className="text-xl font-semibold mb-1.5 leading-tight">
          <Link to={`/business/${id}`} className="text-text hover:text-primary transition-colors">{name}</Link>
        </h3>
        <p className="flex-1 text-text-muted text-[0.9rem] mb-4 leading-relaxed">
          {tagline}
        </p>
        <Link to={`/business/${id}`} className="text-[0.875rem] font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-[gap,opacity] duration-200 after:content-['→'] after:opacity-70 group-hover:after:opacity-100">
          View profile
          <span className="sr-only"> about {name}</span>
        </Link>
      </div>
    </article>
  );
}
