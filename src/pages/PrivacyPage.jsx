export default function PrivacyPage() {
  return (
    <main className="py-16 px-6">
      <div className="container max-w-[720px] mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-text mb-12">
          Privacy Policy
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text mb-3">Who we are</h2>
          <p className="text-text leading-relaxed">
            <strong>Lakewood Local</strong> is a website for local businesses in Lakewood.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text mb-3">
            Embedded content from other websites
          </h2>
          <p className="text-text leading-relaxed">
            Content on this site may include embedded content (e.g., videos, images, articles) from other websites. Embedded content from other websites behaves in the same way as if you had visited that other site. Those sites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text mb-3">How We Share Data</h2>
          <p className="text-text leading-relaxed">
            <strong>Email List:</strong> Email addresses for our mailing list are never shared. You may request removal from the list at any time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text mb-3">
            How Long We Retain Your Data
          </h2>
          <p className="text-text leading-relaxed">
            We retain your email address for as long as you are subscribed to our mailing list. You may request removal at any time, and we will delete your information promptly.
          </p>
        </section>
      </div>
    </main>
  );
}
