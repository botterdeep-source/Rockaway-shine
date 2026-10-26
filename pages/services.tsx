import Head from 'next/head';
import {
  CAR_IMAGE,
  FALL_IMAGE,
  Seo,
  ServiceCard,
  services,
  SiteShell,
  SectionHeading,
  detailPackages,
} from '../components/site';

export default function Services() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Services & Pricing | Rockaway Shine"
          description="Explore mobile car detailing, lawn and garden services, and seasonal fall cleanup from Rockaway Shine in Morris County, NJ."
        />
      </Head>

      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Services & pricing</div>
            <h1>Care for your car and your outdoor space.</h1>
            <p>
              Mobile detailing and practical yard services, with clear estimates
              before work begins.
            </p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Services</span>
            </div>
          </div>
        </section>

        <section className="section section-darker" id="detailing">
          <div className="container">
            <SectionHeading
              eyebrow="Mobile car detailing"
              title="Choose a detail that fits your vehicle."
            >
              Packages come to your driveway. Choose your vehicle size and any
              optional extras in the instant quote calculator.
            </SectionHeading>

            <div className="detail-package-grid">
              {detailPackages.map((pkg, index) => (
                <article className="detail-package" key={pkg.title}>
                  <div className="package-image">
                    <img
                      src={CAR_IMAGE}
                      alt="A car being washed by hand"
                      loading="lazy"
                    />
                    <span>0{index + 1}</span>
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
                    <a className="text-link" href="../contact/#quote">
                      Get an instant quote <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="yard-care">
          <SectionHeading
            eyebrow="Lawn & garden services"
            title="Practical help, with a neat finish."
          >
            One-time yard projects and seasonal help across Morris County.
          </SectionHeading>

          <div className="service-grid service-grid-large">
            {services.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="seasonal-inline seasonal-highlight">
            <div>
              <div className="eyebrow">Current seasonal service</div>
              <h2>Fall cleanup is underway.</h2>
              <p>
                Get help clearing leaves and debris from beds, edges, and
                walkways before winter settles in.
              </p>
              <a className="button" href="../contact/#quote">
                Ask about fall cleanup <span aria-hidden="true">↗</span>
              </a>
            </div>
            <img
              src={FALL_IMAGE}
              alt="Residential backyard with fallen leaves and garden foliage"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
