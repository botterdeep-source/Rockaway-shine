import Head from 'next/head';
import {
  CAR_IMAGE,
  detailPackages,
  FALL_IMAGE,
  MOWING_IMAGE,
  MULCH_IMAGE,
  Seo,
  ServiceCard,
  services,
  SiteShell,
  SectionHeading,
  ReviewsSection,
  towns,
  PHONE,
  PHONE_LINK,
} from '../components/site';

export default function Home() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Rockaway Shine | Car Detailing & Yard Care in Morris County"
          description="Mobile car detailing, lawn care, garden services, and seasonal cleanups in Rockaway and nearby Morris County towns. Call or text Rockaway Shine."
        />
      </Head>
      <main>
        <section className="hero">
          <img
            className="hero-image"
            src={FALL_IMAGE}
            alt="Backyard garden with leaves and greenery"
          />
          <div className="hero-shade" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="status-pip" /> Locally owned · Morris County,
                NJ
              </div>
              <h1>
                A cleaner car. <em>A tidier yard.</em>
              </h1>
              <p>
                Mobile detailing, lawn care, and seasonal help that make it easier to enjoy your home and your drive.
              </p>
              <div className="hero-actions">
                <a className="button" href="../contact/#quote">
                  Get a free quote <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost" href={PHONE_LINK}>
                  Call or text {PHONE}
                </a>
              </div>
              <div className="hero-details">
                <span>Mobile detailing</span>
                <span>Fall cleanup is underway</span>
                <span>Serving Morris County</span>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">✳</span>
              <div>
                <b>Fall cleanup is underway.</b>
                <span>Get a hand with leaves, beds, edges, and yard debris.</span>
              </div>
              <a href="../services/" aria-label="Explore seasonal cleanup">
                ↗
              </a>
            </div>
          </div>
        </section>

        <section className="trust-band">
          <div className="container trust-items">
            <div>
              <span className="trust-symbol">⌖</span>
              <b>Local to Morris County</b>
            </div>
            <div>
              <span className="trust-symbol">✳</span>
              <b>Seasonal & recurring care</b>
            </div>
            <div>
              <span className="trust-symbol">✓</span>
              <b>Clear written estimates</b>
            </div>
            <div>
              <span className="trust-symbol">◷</span>
              <b>Evening & weekend hours</b>
            </div>
          </div>
        </section>

        <section className="section container two-service-section">
          <SectionHeading
            eyebrow="Two ways to shine"
            title="Care for your car and the place you call home."
          >
            Rockaway Shine brings mobile detailing and practical yard care
            together, with local service across Morris County.
          </SectionHeading>
          <div className="two-service-grid">
            <article className="two-service-card">
              <img
                src={CAR_IMAGE}
                alt="A detailer washing a car by hand"
                loading="lazy"
              />
              <div className="two-service-copy">
                <span className="eyebrow">Mobile detailing</span>
                <h3>A fresh, clean ride.</h3>
                <p>
                  Choose a simple refresh, deep interior clean, or full
                  inside-and-out package. We come to your driveway.
                </p>
                <a className="text-link" href="../services/#detailing">
                  View detailing packages <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
            <article className="two-service-card">
              <img
                src={MULCH_IMAGE}
                alt="Garden bed with plants and mulch"
                loading="lazy"
              />
              <div className="two-service-copy">
                <span className="eyebrow">Lawn & garden</span>
                <h3>A yard that feels cared for.</h3>
                <p>
                  From mowing and trimming to mulch, planting, and seasonal
                  cleanups, get the help your property needs.
                </p>
                <a className="text-link" href="../services/#yard-care">
                  View yard services <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-darker">
          <div className="container">
            <SectionHeading
              eyebrow="Mobile detailing"
              title="Choose the clean that fits your vehicle."
            >
              Compare the published packages, then build an estimate for your vehicle.
            </SectionHeading>
            <div className="detail-package-grid">
              {detailPackages.map((pkg, i) => (
                <article className="detail-package" key={pkg.title}>
                  <div className="package-image">
                    <img
                      src={CAR_IMAGE}
                      alt="Car being washed by hand"
                      loading="lazy"
                    />
                    <span>0{i + 1}</span>
                  </div>
                  <div className="package-content">
                    <div className="package-top">
                      <h3>{pkg.title}</h3>
                      <strong>{pkg.price}</strong>
                    </div>
                    <p>{pkg.summary}</p>
                    <span className="package-time">{pkg.time}</span>
                    <ul>
                      {pkg.includes.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section className="section container services-preview">
          <SectionHeading
            eyebrow="What we do"
            title="A little care goes a long way."
          >
            From a fresh detail to a full seasonal reset, choose the help your car or yard needs.
          </SectionHeading>
          <div className="service-grid">
            {services.slice(0, 6).map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
          <div className="center-action">
            <a className="button button-outline" href="../services/">
              Explore all services <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="split-section">
          <div className="split-photo">
            <img
              src={MOWING_IMAGE}
              alt="Lawn-care workers mowing and trimming a residential lawn"
              loading="lazy"
            />
            <span className="photo-caption">Lawn care, done with care</span>
          </div>
          <div className="split-copy">
            <div className="eyebrow">The Rockaway Shine approach</div>
            <h2>Careful work. Clear communication. A fresher everyday.</h2>
            <p>
              From a driveway detail to a one-time yard cleanup, we make it
              straightforward to get the right help. You’ll know what’s
              included before work begins.
            </p>
            <ul className="check-list">
              <li>Mobile detailing that comes to your driveway</li>
              <li>Yard care shaped around your property and priorities</li>
              <li>Seasonal support when outdoor spaces need a reset</li>
            </ul>
            <a className="text-link" href="../about/">
              More about Rockaway Shine <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section container seasonal-section">
          <div className="seasonal-card">
            <img
              src={FALL_IMAGE}
              alt="Fallen leaves and greenery in a residential backyard"
              loading="lazy"
            />
            <div className="seasonal-overlay" />
            <div className="seasonal-copy">
              <div className="eyebrow">Current seasonal service</div>
              <h2>Fall cleanup is underway.</h2>
              <p>
                Get ahead of the leaves and yard debris with help clearing beds,
                edges, and walkways before winter settles in.
              </p>
              <a className="button" href="../contact/#quote">
                Ask about fall cleanup <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="seasonal-badge">
              <span>Now</span>
              <b>
                Fall
                <br />
                cleanup
              </b>
            </div>
          </div>
        </section>



        <section className="section container process-section">
          <SectionHeading eyebrow="Simple from day one" title="How it works">
            A few easy steps, from the first message to a clean car or cared-for yard.
          </SectionHeading>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Tell us what you need</h3>
              <p>
                Tell us about your vehicle, yard, or both, and what you’d like done.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Get a clear quote</h3>
              <p>
                We’ll confirm the service, any size adjustments, and what’s included before scheduling.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Enjoy a tidy finish</h3>
              <p>
                We come to your driveway or yard and take care of the work.
              </p>
            </article>
          </div>
        </section>

        <section className="section area-section">
          <div className="container area-layout">
            <div>
              <div className="eyebrow">Close to home</div>
              <h2>Serving Rockaway and Morris County.</h2>
              <p>
                Mobile detailing and yard services are available across Morris County and nearby communities. If you’re just outside these towns, get in touch and we’ll let you know if we can help.
              </p>
              <a className="text-link" href="../service-areas/">
                See service areas <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="town-chips">
              {towns.map(town => (
                <span key={town}>{town}, NJ</span>
              ))}
              <span>Nearby Morris County towns</span>
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section className="closing-cta">
          <div className="container closing-inner">
            <div>
              <div className="eyebrow">
                Make time for the parts of home you love
              </div>
              <h2>Your car and yard are ready for a little Rockaway Shine.</h2>
              <p>
                Tell us what you’d like done and we’ll help you get started.
              </p>
            </div>
            <div className="closing-actions">
              <a className="button" href="../contact/#quote">
                Get a free quote <span aria-hidden="true">↗</span>
              </a>
              <a className="closing-phone" href={PHONE_LINK}>
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
