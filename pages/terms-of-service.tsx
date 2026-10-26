import Head from 'next/head';
import { EMAIL, HOURS, PHONE, Seo, SiteShell } from '../components/site';

export default function TermsOfService() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Terms of Service | Rockaway Shine"
          description="Terms for using the Rockaway Shine website and requesting mobile detailing, lawn, and seasonal yard services."
        />
      </Head>
      <main>
        <section className="page-hero legal-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Legal</div>
            <h1>Terms of Service</h1>
            <p>Last updated: October 25, 2026</p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </section>
        <article className="container legal-copy">
          <p>
            These Terms of Service apply to your use of the Rockaway Shine
            website and services. By using the site or requesting work, you
            agree to these terms.
          </p>
          <h2>Services and estimates</h2>
          <p>
            Rockaway Shine offers mobile car detailing, lawn and garden
            maintenance, planting, pavement cleanup, and seasonal yard services
            in Morris County, New Jersey, and nearby communities. The exact
            work, schedule, and price are confirmed in a quote. Yard calculator
            rates on this site are placeholders until the final quote.
          </p>
          <p>
            A website or email inquiry is a request for information, not a
            confirmed booking. A quote becomes an agreement when both sides
            confirm the scope, price, and schedule. Quotes are based on the
            details available at the time. If the vehicle, property, or
            requested work differs from what was described, we will discuss any
            change before proceeding.
          </p>
          <h2>Scheduling and weather</h2>
          <p>
            Work is scheduled by agreement. Weather, seasonal conditions, or
            other circumstances may affect timing. We will communicate any
            changes as soon as practical. Please contact us if you need to
            change a scheduled service.
          </p>
          <h2>Payment</h2>
          <p>
            Payment arrangements are confirmed with the service quote. No
            payment is collected through this website.
          </p>
          <h2>Website use</h2>
          <p>
            Website information is provided for general purposes and may change.
            You agree not to interfere with the site or use it unlawfully. We
            may update these terms from time to time; the latest version will be
            posted here.
          </p>
          <h2>Liability</h2>
          <p>
            To the extent allowed by law, the website is provided without a
            guarantee that it will always be available or error-free. Work on a
            vehicle or property is limited to the scope agreed in the quote.
            Please tell us about existing conditions that may affect service
            before work begins.
          </p>
          <h2>Contact us</h2>
          <p>
            Questions about these terms? Contact Rockaway Shine at{' '}
            <a href={'mailto:' + EMAIL}>{EMAIL}</a> or{' '}
            <a href="tel:+19733064637">{PHONE}</a>. Business hours: {HOURS}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
