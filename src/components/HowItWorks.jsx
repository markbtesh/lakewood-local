import NewsletterSignup from './NewsletterSignup';

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-bg-alt">
      <div className="container">
        <h2 className="text-center mb-8">How It Works</h2>
        <p className="text-[1.15rem] max-w-[680px] mx-auto mb-6 text-center text-text">
          Great local spots don't always show up at the top of a search. <strong>Lakewood Local</strong> is where we highlight the businesses our community actually relies on, and the people behind them.
        </p>
        <p className="max-w-[640px] mx-auto mb-4 text-text-muted">
          Every business here is <strong>invited, not advertised</strong>. We don't sell placement. So when you browse, you're seeing folks who were chosen because they do good work and stand by it, not because they spent the most on ads.
        </p>
        <p className="max-w-[640px] mx-auto mb-4 text-text-muted">
          We think it matters who you're buying from. When it's a neighbor who cares about their reputation and yours, you get better service and a real connection.
        </p>
    
        <div className="mt-12 pt-12 border-t border-border text-center">
          <NewsletterSignup />
        </div>
      </div>
      <div className="w-full overflow-hidden mt-12">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 min-w-full text-bg" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
          <path d="M0 0h1440v24c-120-24-240-24-360-12-120 12-240 36-360 36S480 12 600 24c120 12 240 12 360 0s240-24 360-24 240 24 360 24 240-24 360-24 240 24 360 24V0H0z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
