import Head from 'next/head';
import { Seo, SiteShell, SectionHeading, towns } from '../components/site';

export default function ServiceAreas() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Service Areas | Rockaway Shine in Morris County, NJ"
          description="Rockaway Shine offers mobile car detailing, lawn and garden services, and seasonal help in Rockaway, Dover, Denville, Morris Plains, Parsippany, Randolph, and nearby Morris County towns."
        />
      </Head>
      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Service areas</div>
            <h1>Good service, close to home.</h1>
            <p>
              Mobile detailing and yard services for Rockaway and nearby
              communities across Morris County, New Jersey.
            </p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Service areas</span>
            </div>
          </div>
        </section>
        <section className="section container area-page">
          <SectionHeading
            eyebrow="Around Morris County"
            title="Serving our neighbors in"
          >
            Ask about mobile detailing, lawn care, or seasonal help in these
            nearby towns.
          </SectionHeading>
          <div className="town-grid">
            {towns.map((town, index) => (
              <div className="town-card" key={town}>
                <span>0{index + 1}</span>
                <h3>{town}</h3>
                <p>Mobile detailing & yard care</p>
              </div>
            ))}
          </div>
          <div className="area-callout">
            <div>
              <h3>Just outside these towns?</h3>
              <p>
                Reach out with your location and service request. We’ll let you
                know if we can help.
              </p>
            </div>
            <a className="button" href="../contact/#quote">
              Check availability <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
