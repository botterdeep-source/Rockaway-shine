import Head from 'next/head';
import { EMAIL, HOURS, PHONE, Seo, SiteShell } from '../components/site';

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <Head>
        <Seo
          title="Privacy Policy | Rockaway Shine"
          description="How Rockaway Shine handles information shared through its website and quote requests."
        />
      </Head>
      <main>
        <section className="page-hero legal-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Legal</div>
            <h1>Privacy Policy</h1>
            <p>Last updated: October 25, 2026</p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </section>
        <article className="container legal-copy">
          <p>
            This Privacy Policy explains how Rockaway Shine (“we,” “us,” or
            “our”) handles information you choose to share when you visit this
            website or contact us about mobile detailing or yard services.
          </p>
          <h2>Information you provide</h2>
          <p>
            If you submit a service request, we receive the details you enter,
            such as your name, email, optional phone number, town or address,
            requested service, and project notes. If you submit a review, we
            receive your name, rating, and written review. Please do not include
            sensitive personal information in a review or service request.
          </p>
          <h2>How we use information</h2>
          <p>
            We use service requests to respond to questions, prepare estimates,
            schedule work, and communicate about your service. Review
            submissions are sent to our review spreadsheet for moderation; they
            are not published on this site automatically. We do not sell
            personal information.
          </p>
          <h2>Service providers</h2>
          <p>
            Online service requests are handled through Formspree, and review
            submissions are sent through Google Apps Script to Google Sheets.
            Those providers may process and store the information you submit
            under their own privacy terms. We use them to receive and manage
            submissions, and may share information as required by law. If you
            choose to email, call, or text us, your email or phone provider may
            also process those communications.
          </p>
          <h2>Website and technical information</h2>
          <p>
            The site does not use account sign-in or online payment. Our hosting
            provider may process basic technical information, such as browser
            and device details, to deliver and protect the website.
          </p>
          <h2>Cookies and choices</h2>
          <p>
            This site does not use advertising cookies. You can manage cookies
            and other browser storage through your browser settings. You may ask
            us to correct or delete information you previously sent by
            contacting us.
          </p>
          <h2>Children</h2>
          <p>
            This website is intended for adults seeking residential services
            and is not designed to collect information from children.
          </p>
          <h2>Contact us</h2>
          <p>
            For privacy questions or requests, contact Rockaway Shine at{' '}
            <a href={'mailto:' + EMAIL}>{EMAIL}</a> or{' '}
            <a href="tel:+19733064637">{PHONE}</a>. Business hours: {HOURS}.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
