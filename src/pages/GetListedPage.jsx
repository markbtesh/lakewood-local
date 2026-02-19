import { Link } from 'react-router-dom';

export default function GetListedPage() {
  return (
    <main className="py-24 px-6 max-w-[640px] mx-auto">
      <div className="container">
        <h1>Get Listed on Lakewood Local</h1>
        <p className="text-[1.1rem] text-text-muted mb-8">
          Our listings are <strong>free and invitation-only</strong>. We spotlight businesses that are proud of what they do and stand behind their work.
        </p>
        <p>
          Interested in being featured? We'd love to hear from you. Send us a note and tell us about your business.
        </p>
        <p>
          <a href="mailto:hello@lakewoodlocal.com" className="btn btn-accent">
            Contact Us to Get Listed
          </a>
        </p>
        <p className="mt-12">
          <Link to="/" className="font-semibold">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
