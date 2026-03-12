import NewsletterSignup from './NewsletterSignup';

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-bg-alt">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-center mb-4">How It Works</h2>
        <p className="text-[1.08rem] max-w-[720px] mx-auto mb-10 text-center text-text-muted">
          Great local spots don&apos;t always show up at the top of a search. <strong>Lakewood Local</strong> is where we highlight the businesses our community actually relies on, and the people behind them.
        </p>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          <div className="bg-surface rounded-[var(--radius-lg)] border border-border p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(13,115,119,0.1)] hover:-translate-y-0.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary text-sm font-bold mb-3 ring-1 ring-primary/10">
              1
            </span>
            <h3 className="text-base font-semibold mb-1.5">We scout local standouts</h3>
            <p className="text-[0.9rem] text-text-muted leading-relaxed">
              Every business here is <strong>invited, not advertised</strong>. We look for owners who show up, communicate, and stand behind their work.
            </p>
          </div>

          <div className="bg-surface rounded-[var(--radius-lg)] border border-border p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(13,115,119,0.1)] hover:-translate-y-0.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary text-sm font-bold mb-3 ring-1 ring-primary/10">
              2
            </span>
            <h3 className="text-base font-semibold mb-1.5">You browse vetted options</h3>
            <p className="text-[0.9rem] text-text-muted leading-relaxed">
              No pay-to-play. A small, curated set of local pros in each category so you can choose with confidence.
            </p>
          </div>

          <div className="bg-surface rounded-[var(--radius-lg)] border border-border p-5 sm:p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(13,115,119,0.1)] hover:-translate-y-0.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary text-sm font-bold mb-3 ring-1 ring-primary/10">
              3
            </span>
            <h3 className="text-base font-semibold mb-1.5">Neighbors help neighbors</h3>
            <p className="text-[0.9rem] text-text-muted leading-relaxed">
              Hiring from Lakewood Local supports small businesses that pour back into Lakewood and Howell.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <NewsletterSignup stackOnMobile className="w-full max-w-sm mx-auto" />
        </div>
      </div>
      <div className="w-full overflow-hidden mt-12">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 min-w-full" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
          <path d="M0 0h1440v24c-120-24-240-24-360-12-120 12-240 36-360 36S480 12 600 24c120 12 240 12 360 0s240-24 360-24 240 24 360 24 240-24 360-24 240 24 360 24V0H0z" fill="#F2F4F5"/>
        </svg>
      </div>
    </section>
  );
}
