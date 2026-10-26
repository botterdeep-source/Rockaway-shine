import Head from 'next/head';
import {
  CAR_IMAGE,
  MOWING_IMAGE,
  MULCH_IMAGE,
  Seo,
  SiteShell,
  SectionHeading,
} from '../components/site';

export default function About() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="About Rockaway Shine | Morris County"
          description="Meet the owners behind Rockaway Shine, serving Morris County with mobile car detailing, lawn and garden services, and seasonal help."
        />
      </Head>
      <main>
        <section className="about-hero">
          <img src={MULCH_IMAGE} alt="Garden bed with plants and fresh mulch" />
          <div className="about-hero-shade" />
          <div className="container about-hero-content">
            <div className="eyebrow">About Rockaway Shine</div>
            <h1>Local care for your car and your home.</h1>
            <p>
              Mobile detailing and practical yard care, from a local team serving
              Rockaway and Morris County, NJ.
            </p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>About</span>
            </div>
          </div>
        </section>

        <section className="section container story-layout">
          <div className="story-label">
            <span className="eyebrow">Our story</span>
            <span className="story-line" />
          </div>
          <div className="story-copy">
            <h2>A local team built around care and clear communication.</h2>
            <p>
              Rockaway Shine serves Rockaway and nearby Morris County
              communities with mobile car detailing and lawn and garden services.
              From a fresh interior to fall yard cleanup, we help make everyday
              care easier.
            </p>
            <p>
              We keep the process straightforward: tell us what you need, get a
              clear estimate, and confirm the scope before work begins.
            </p>
          </div>
        </section>

        <section className="section section-darker owners-section">
          <div className="container">
            <SectionHeading
              eyebrow="Meet the owners"
              title="The two behind every job."
            >
              Two hands-on owners, working together to bring thoughtful service
              to local customers.
            </SectionHeading>
            <div className="owners-grid">
              <article className="owner-card">
                <div className="owner-photo">
                  <img src={CAR_IMAGE} alt="" loading="lazy" />
                  <span aria-hidden="true">L</span>
                </div>
                <div className="owner-copy">
                  <h3>Louis</h3>
                  <p>Co-Founder & Owner</p>
                </div>
              </article>
              <article className="owner-card">
                <div className="owner-photo">
                  <img src={MOWING_IMAGE} alt="" loading="lazy" />
                  <span aria-hidden="true">D</span>
                </div>
                <div className="owner-copy">
                  <h3>Dominick</h3>
                  <p>Co-Founder & Owner</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-darker">
          <div className="container">
            <SectionHeading
              eyebrow="What you can expect"
              title="The details that make a difference."
            >
              A straightforward experience and a tidy finish are part of every
              visit.
            </SectionHeading>
            <div className="values-grid">
              <article>
                <span>01</span>
                <h3>Do the work with care</h3>
                <p>Thoughtful detailing and a clean, finished look.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Communicate clearly</h3>
                <p>Know what is included and what it will cost before work begins.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Keep it dependable</h3>
                <p>Plan recurring yard care or request a one-time service.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Show up for the seasons</h3>
                <p>Seasonal help is available, including fall cleanup underway now.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section container about-bottom">
          <div className="about-bottom-image">
            <img
              src={CAR_IMAGE}
              alt="A car being hand-washed"
              loading="lazy"
            />
          </div>
          <div>
            <div className="eyebrow">Rooted nearby</div>
            <h2>Here for Rockaway and surrounding towns.</h2>
            <p>
              From a clean ride to a tidier yard, Rockaway Shine helps Morris
              County customers keep everyday spaces feeling cared for.
            </p>
            <a className="button" href="../contact/#quote">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
