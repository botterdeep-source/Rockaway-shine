import Head from 'next/head';
import {
  addOns,
  detailAddOns,
  detailPackages,
  gardenRates,
  HOURS,
  Seo,
  SiteShell,
  vehicleAdjustments,
  yardAdjustments,
} from '../components/site';

export default function FAQ() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Frequently Asked Questions | Rockaway Shine"
          description="Answers about Rockaway Shine mobile detailing, yard service estimates, fall cleanup, hours, and Morris County coverage."
        />
      </Head>
      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">FAQ</div>
            <h1>Helpful answers, before you get started.</h1>
            <p>Details about services, estimate pricing, and scheduling.</p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>FAQ</span>
            </div>
          </div>
        </section>
        <section className="section container faq-layout">
          <div className="faq-intro">
            <div className="eyebrow">Good to know</div>
            <h2>Need something else?</h2>
            <p>
              We’re happy to answer questions about your vehicle, yard, or
              service area.
            </p>
            <a className="button" href="../contact/#quote">
              Contact Rockaway Shine <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            <details open>
              <summary>What services do you offer?<span>+</span></summary>
              <p>
                Mobile car detailing, lawn mowing, string trimming, bush
                trimming, weed removal, mulch installation, pavement cleanup,
                planting, and seasonal yard cleanup.
              </p>
            </details>
            <details>
              <summary>What are the detailing package prices?<span>+</span></summary>
              <p>
                Basic Package is $60, Deep Clean Interior is $60, and Premium
                Package is $120 before vehicle-size adjustments or optional
                add-ons.
              </p>
              <p>
                Vehicle adjustments are{' '}
                {vehicleAdjustments.map((item, index) => (
                  <span key={item.name}>
                    {index ? ', ' : ''}{item.name} {item.price}
                  </span>
                ))}
                . Detailing add-ons range from $5 to $40.
              </p>
              <p>{detailPackages.map(item => item.title).join(', ')}.</p>
            </details>
            <details>
              <summary>Are yard service prices final?<span>+</span></summary>
              <p>
                No. The current yard calculator marks its base rates as
                placeholders until a final quote. The listed estimates are{' '}
                {gardenRates.map((item, index) => (
                  <span key={item.name}>
                    {index ? ', ' : ''}{item.name} {item.price}
                  </span>
                ))}
                . Yard-size adjustments are{' '}
                {yardAdjustments.map((item, index) => (
                  <span key={item.name}>
                    {index ? ', ' : ''}{item.name} {item.price}
                  </span>
                ))}
                . Final scope and price are confirmed before scheduling.
              </p>
            </details>
            <details>
              <summary>What add-ons can I request?<span>+</span></summary>
              <p>
                Detailing extras include pet hair removal $5, stain treatment
                $10, engine bay detail $40, wax protection $10, and clay bar
                $10. Yard extras include{' '}
                {addOns.map((item, index) => (
                  <span key={item.name}>
                    {index ? ', ' : ''}{item.name} {item.price}
                  </span>
                ))}
                .
              </p>
              <p>{detailAddOns.map(item => item.name).join(', ')}.</p>
            </details>
            <details>
              <summary>Do you offer seasonal help?<span>+</span></summary>
              <p>
                Yes. Seasonal support is available, and fall cleanup is
                underway now. Ask about leaves, garden beds, edges, and yard
                debris.
              </p>
            </details>
            <details>
              <summary>Where do you work?<span>+</span></summary>
              <p>
                Rockaway, Dover, Denville, Morris Plains, Parsippany, Randolph,
                and nearby Morris County communities. Contact us with your town
                if you’re not sure.
              </p>
            </details>
            <details>
              <summary>What are your business hours?<span>+</span></summary>
              <p>{HOURS}</p>
            </details>
            <details>
              <summary>How do I get a quote?<span>+</span></summary>
              <p>
                Call or text, or use the quote request form. Share your town,
                the service you need, and a few project details.
              </p>
            </details>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
