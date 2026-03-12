import NewsletterSignup from './NewsletterSignup';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 px-6 pb-16 text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary via-40% to-[#0e6265] to-100%" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="container relative max-w-[720px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/95 mb-6 border border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.08)] animate-fade-up">
          Lakewood & Surrounding Areas
        </div>
        <h1 className="text-white text-[clamp(2rem,4.5vw,3rem)] font-bold mb-3 tracking-tight leading-[1.15] drop-shadow-sm animate-fade-up animate-fade-up-delay-1">
          Local businesses neighbors actually trust
        </h1>
        <p className="text-base sm:text-lg text-white/85 mb-8 max-w-[540px] mx-auto leading-relaxed animate-fade-up animate-fade-up-delay-2">
          Hand-picked pros that show up, do great work, and stand behind every job.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 animate-fade-up animate-fade-up-delay-3">
          <a
            href="#recent-businesses"
            className="btn btn-accent px-6 py-2.5 text-[0.9rem] font-medium shadow-[0_4px_14px_rgba(196,160,53,0.35)] shrink-0"
          >
            Browse businesses
          </a>
          <span className="text-[0.8125rem] text-white/80 shrink-0">or</span>
          <NewsletterSignup className="shrink-0" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-8 min-w-full"
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <linearGradient
              id="heroWaveGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#E1E4E7" />
              <stop offset="1" stopColor="#F2F4F5" />
            </linearGradient>
          </defs>
          <path
            className="wave-path-1"
            d="M0 32V8c120 12 240 12 360 4 120-8 240-20 360-4s240 16 360 12 240-12 360-4 240 12 360 16v4H0z"
            fill="url(#heroWaveGradient)"
          />
          <path
            className="wave-path-2"
            d="M0 32V8c120 12 240 12 360 4 120-8 240-20 360-4s240 16 360 12 240-12 360-4 240 12 360 16v4H0z"
            fill="#F2F4F5"
          />
        </svg>
      </div>
    </section>
  );
}
