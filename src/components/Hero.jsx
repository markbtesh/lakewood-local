import NewsletterSignup from './NewsletterSignup';

export default function Hero() {
  return (
    <section className="relative py-24 px-6 pb-16 text-center bg-gradient-to-br from-primary-dark from-0% via-primary via-50% to-[#2a7a7a] to-100% text-white">
      <div className="container max-w-[720px] mx-auto">
        <h1 className="text-white text-[clamp(2rem,5vw,3.25rem)] font-bold mb-4 tracking-tight leading-tight">
          Discover the Best Local Businesses in Lakewood
        </h1>
        <p className="text-xl opacity-95 mb-8 leading-relaxed">
          For those of us who appreciate our local, hardworking friends and families.
        </p>
        <NewsletterSignup className="mt-8" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden text-bg leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 min-w-full" preserveAspectRatio="xMinYMin slice">
          <path d="M0 48h1440V24c-120 24-240 24-360 12-120-12-240-36-360-36S480 36 600 24c120-12 240-12 360 0s240 24 360 24 240-24 360-24 240 24 360 24v24H0z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
