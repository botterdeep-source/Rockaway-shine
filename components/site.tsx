import { useEffect, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';

export const PHONE = '(973) 306-4637';
export const PHONE_LINK = 'tel:+19733064637';
export const EMAIL = 'rockawayshine@yahoo.com';
export const HOURS = 'Mon–Fri 4 PM–9 PM · Sat–Sun 7 AM–9 PM';
export const FALL_IMAGE =
  'https://images.unsplash.com/photo-1781617812473-4f9b3d270420?auto=format&fit=crop&w=2000&q=85';
export const CAR_IMAGE =
  'https://images.unsplash.com/photo-1694678505383-676d78ea3b96?auto=format&fit=crop&w=1400&q=82';
export const MOWING_IMAGE =
  'https://images.unsplash.com/photo-1779636489740-6077a4198be6?auto=format&fit=crop&w=1400&q=82';
export const MULCH_IMAGE =
  'https://images.unsplash.com/photo-1740823434562-e81d21a4f5c2?auto=format&fit=crop&w=1400&q=82';

export const detailPackages = [
  {
    title: 'Basic Package',
    price: '$60',
    time: 'About 45 minutes',
    summary: 'A quick refresh for a vehicle that needs a simple clean.',
    includes: [
      'Exterior hand wash',
      'Wheels and windows cleaned',
      'Interior wipe-down',
      'Light vacuum',
    ],
  },
  {
    title: 'Deep Clean Interior Package',
    price: '$60',
    time: 'About 1 hour',
    summary: 'A detailed clean for interior surfaces and carpets.',
    includes: [
      'Deep vacuum',
      'Plastic and trim shine',
      'Steam-cleaned carpets and seats',
      'Door jambs',
    ],
  },
  {
    title: 'Premium Package',
    price: '$120',
    time: 'About 1 hour',
    summary: 'A full inside-and-out detail with added protection.',
    includes: [
      'Full interior detail',
      'Exterior wash and wheel cleaning',
      'Small stain removal',
      'Wax protection',
    ],
  },
];

export const vehicleAdjustments = [
  { name: 'Sedan', price: '+$0' },
  { name: 'SUV', price: '+$15' },
  { name: 'Minivan', price: '+$20' },
  { name: 'Pickup Truck', price: '+$25' },
  { name: 'Van', price: '+$25' },
  { name: 'Full-Size Truck', price: '+$40' },
];

export const detailAddOns = [
  {
    name: 'Pet hair removal',
    price: '$5',
    detail: 'Extra removal from seats and carpets.',
  },
  {
    name: 'Stain treatment',
    price: '$10',
    detail: 'Helps clean tougher stains.',
  },
  {
    name: 'Engine bay detail',
    price: '$40',
    detail: 'Adds a fresh finish under the hood.',
  },
  {
    name: 'Wax protection',
    price: '$10',
    detail: 'Adds shine and protection.',
  },
  {
    name: 'Clay bar',
    price: '$10',
    detail: 'Lifts extra stuck-on dirt from the paint.',
  },
];

export const gardenRates = [
  { name: 'Lawn mowing', price: '$40' },
  { name: 'String trimming', price: '$25' },
  { name: 'Bush trimming', price: '$45' },
  { name: 'Weed removal', price: '$35' },
  { name: 'Mulch installation', price: '$75' },
  { name: 'Pavement cleanup', price: '$30' },
  { name: 'Plant planting', price: '$50' },
];

export const yardAdjustments = [
  { name: 'Small yard', price: '+$0' },
  { name: 'Medium yard', price: '+$25' },
  { name: 'Large yard', price: '+$50' },
  { name: 'Extra Large yard', price: '+$75' },
];

export const services = [
  {
    title: 'Lawn mowing',
    text: 'Routine mowing to keep your lawn neat and even.',
    image: MOWING_IMAGE,
    alt: 'Lawn-care workers mowing a residential lawn',
  },
  {
    title: 'String trimming',
    text: 'Tidy edges around fences, walkways, beds, and hard-to-reach spots.',
    image: MOWING_IMAGE,
    alt: 'Lawn-care workers trimming a residential yard',
  },
  {
    title: 'Bush trimming',
    text: 'Shape bushes and shrubs for a cleaner, more cared-for look.',
    image: MULCH_IMAGE,
    alt: 'Tidy garden bed with shrubs and mulch',
  },
  {
    title: 'Weed removal',
    text: 'Clear weeds from garden beds, borders, and outdoor areas.',
    image: FALL_IMAGE,
    alt: 'Garden with foliage and leaves on the ground',
  },
  {
    title: 'Mulch installation',
    text: 'Refresh flower beds with an even layer of mulch and a clean finish.',
    image: MULCH_IMAGE,
    alt: 'Garden bed with plants and fresh mulch',
  },
  {
    title: 'Pavement cleanup',
    text: 'Clear grass, weeds, and debris along pavement and walkways.',
    image: FALL_IMAGE,
    alt: 'Residential garden path and greenery',
  },
  {
    title: 'Planting',
    text: 'Plant flowers, small plants, or seasonal garden items.',
    image: MULCH_IMAGE,
    alt: 'Plants arranged in a garden bed',
  },
  {
    title: 'Seasonal cleanup',
    text: 'Spring, summer, and fall help for leaves, sticks, and yard debris.',
    image: FALL_IMAGE,
    alt: 'Backyard garden with fallen leaves and greenery',
  },
];

export const addOns = [
  {
    name: 'Extra weed removal',
    price: '$25',
    detail: 'For heavier weed growth.',
  },
  {
    name: 'Extra bagging',
    price: '$15',
    detail: 'Bag grass, weeds, or yard debris.',
  },
  {
    name: 'Plant pickup',
    price: '$20',
    detail: 'Pickup of plants or supplies.',
  },
];

export const towns = [
  'Rockaway',
  'Dover',
  'Denville',
  'Morris Plains',
  'Parsippany',
  'Randolph',
];

export function Seo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0d1210" />
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '../services/', label: 'Services' },
    { href: '../service-areas/', label: 'Service areas' },
    { href: '../gallery/', label: 'Gallery' },
    { href: '../about/', label: 'About' },
    { href: '../faq/', label: 'FAQ' },
    { href: '../contact/', label: 'Contact' },
  ];
  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" /> Morris County, NJ{' '}
        <span className="announcement-sep">·</span> Mobile detailing & yard care{' '}
        <span className="announcement-sep">·</span> Fall cleanup is underway
      </div>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="../" aria-label="Rockaway Shine home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 36 36">
                <path d="M28.7 5.7c-9.3.4-16.4 3.5-19.1 9.2-2.2 4.7-.2 9.3 4 10.7 2.4.8 5.2.1 7.1-1.8 3.8-3.7 5.6-10.5 8-18.1Z" />
                <path d="M7.8 30.3c4.9-8 9.8-12.9 17.2-17.5" />
              </svg>
            </span>
            <span className="brand-name">
              Rockaway <b>Shine</b>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={open ? 'main-nav is-open' : 'main-nav'}
            aria-label="Main navigation"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className="nav-call" href={PHONE_LINK}>
              Call / Text <span>{PHONE}</span>
            </a>
            <a
              className="button button-small nav-quote"
              href="../contact/#quote"
              onClick={() => setOpen(false)}
            >
              Get a quote <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand brand-footer" href="../">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 36 36">
                <path d="M28.7 5.7c-9.3.4-16.4 3.5-19.1 9.2-2.2 4.7-.2 9.3 4 10.7 2.4.8 5.2.1 7.1-1.8 3.8-3.7 5.6-10.5 8-18.1Z" />
                <path d="M7.8 30.3c4.9-8 9.8-12.9 17.2-17.5" />
              </svg>
            </span>
            <span className="brand-name">
              Rockaway <b>Shine</b>
            </span>
          </a>
          <p>
            Mobile car detailing, local lawn care, and seasonal yard help across
            Morris County, New Jersey.
          </p>
          <div className="footer-contact">
            <a href={PHONE_LINK}>
              <span>Call or text</span>
              <strong>{PHONE}</strong>
            </a>
            <a href={'mailto:' + EMAIL}>
              <span>Email</span>
              <strong>{EMAIL}</strong>
            </a>
            <span className="footer-location">Serving Rockaway and Morris County, NJ</span>
          </div>
        </div>

        <nav className="footer-col" aria-label="Company">
          <h3>Company</h3>
          <a href="../about/">About Rockaway Shine</a>
          <a href="../services/">Services & pricing</a>
          <a href="../service-areas/">Service areas</a>
          <a href="../gallery/">Gallery</a>
          <a href="../contact/">Contact</a>
        </nav>

        <nav className="footer-col" aria-label="Services and resources">
          <h3>Services</h3>
          <a href="../services/#detailing">Mobile detailing</a>
          <a href="../services/#yard-care">Lawn & garden care</a>
          <a href="../services/#yard-estimates">Seasonal cleanup</a>
          <a href="../faq/">FAQ</a>
        </nav>

        <div className="footer-col footer-hours">
          <h3>Hours</h3>
          <p className="footer-hours-value">{HOURS}</p>
          <p className="footer-note">
            Fall cleanup is underway. Call or text to request a quote.
          </p>
          <a className="button button-small" href="../contact/#quote">
            Get a quote <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Rockaway Shine · Morris County, NJ</span>
        <nav className="legal-links" aria-label="Legal">
          <a href="../privacy-policy/">Privacy Policy</a>
          <a href="../terms-of-service/">Terms of Service</a>
        </nav>
      </div>
      <div className="photo-note">
        Illustrative stock photography via Unsplash
      </div>
    </footer>
  );
}

export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;

    const revealSelectors = [
      'main .section-heading',
      'main article',
      'main .split-section > *',
      'main .seasonal-card',
      'main .seasonal-inline > *',
      'main .story-layout > *',
      'main .area-layout > *',
      'main .town-chips',
      'main .reviews-intro',
      'main .review-submit-card',
      'main .quote-form-card',
      'main .contact-info',
      'main .contact-form',
      'main .gallery-results > *',
      'main .gallery-note',
      'main .faq-list > details',
      'main .pricing-foot-grid > *',
      'main .closing-inner > *',
    ];
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(','))
    );
    const staggerGroups = document.querySelectorAll<HTMLElement>(
      '.two-service-grid, .detail-package-grid, .service-grid, .rate-grid, ' +
        '.process-grid, .owners-grid, .values-grid, .gallery-results, ' +
        '.pricing-foot-grid'
    );

    staggerGroups.forEach(group => {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.setProperty(
            '--reveal-delay',
            Math.min(index * 70, 210) + 'ms'
          );
        }
      });
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    targets.forEach(target => {
      target.classList.add('scroll-reveal');
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      {children}
      <SiteFooter />
      <div className="mobile-actions">
        <a href={PHONE_LINK}>Call / Text</a>
        <a href="../contact/#quote">Free quote</a>
      </div>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={
        center ? 'section-heading section-heading-center' : 'section-heading'
      }
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function ServiceCard({
  item,
  index = 0,
}: {
  item: (typeof services)[number];
  index?: number;
}) {
  return (
    <article className="service-card">
      <a
        className="service-card-image"
        href="../services/"
        aria-label={'Explore ' + item.title}
      >
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span className="image-index">0{index + 1}</span>
      </a>
      <div className="service-card-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a className="text-link" href="../contact/#quote">
          Get a quote <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function QuoteStrip() {
  return (
    <section className="quote-strip">
      <div>
        <span className="eyebrow">A clear plan for your yard</span>
        <h2>Not sure what it needs? We’ll help you figure it out.</h2>
        <p>
          Tell us about your property and the work you have in mind. We’ll
          confirm the scope and provide a clear quote.
        </p>
      </div>
      <a className="button" href="../contact/#quote">
        Request a free quote <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export const transformations = [
  {
    category: 'Auto detailing',
    title: 'Mobile detailing refresh',
    before: 'https://rockawayshine.com/assets/images/detailing-before-1.jpg',
    after: 'https://rockawayshine.com/assets/images/detailing-after-1.jpg',
  },
  {
    category: 'Mulching',
    title: 'Garden bed cleanup',
    before: 'https://rockawayshine.com/assets/images/gardening-before-1.jpg',
    after: 'https://rockawayshine.com/assets/images/gardening-after-1.jpg',
  },
];

export const customerReviews = [
  {
    name: 'Chris S.',
    quote:
      'The crew did a great job pulling weeds and cleaning everything up. They arrived on time and were easy to deal with. I will be using them for futures projects. Highly recommend.',
  },
  {
    name: 'Giselle K.',
    quote:
      'I highly recommend these guys! They did an amazing job. Prompt, efficient, and reasonable pricing.',
  },
  {
    name: 'Frank',
    quote:
      'A truly hard-working and highly professional team which is not easy to find these days.',
  },
];

export function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="before-after-card">
      <div
        className="before-after-frame"
        style={{ '--split': position + '%' } as CSSProperties}
      >
        <div className="ba-after">
          <img src={after} alt={title + ' after'} loading="lazy" />
        </div>
        <div className="ba-before">
          <img src={before} alt={title + ' before'} loading="lazy" />
        </div>
        <span className="ba-label ba-label-before">Before</span>
        <span className="ba-label ba-label-after">After</span>
        <span className="ba-divider" style={{ left: position + '%' }} aria-hidden="true">
          <span />
        </span>
        <input
          className="ba-range"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={'Adjust before and after comparison: ' + title}
          onChange={event => setPosition(Number(event.target.value))}
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('');
  const [reviewSending, setReviewSending] = useState(false);
  const review = customerReviews[activeReview];

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formValues = new FormData(form);
    const payload = new FormData();
    payload.append('name', String(formValues.get('name') || '').trim());
    payload.append('rating', String(formValues.get('rating') || ''));
    payload.append('review', String(formValues.get('review') || '').trim());
    setReviewSending(true);
    setReviewMessage('');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzV_--eM3NaQjH77sCGpV7GgvdlYgbWpHHM9e8q3mODgQhOnza7E0KZQix2Vhv0Is1exA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: payload,
        }
      );
      setReviewMessage('Review submitted. Thank you!');
      form.reset();
    } catch {
      setReviewMessage(
        'We could not send your review just now. Please try again later.'
      );
    } finally {
      setReviewSending(false);
    }
  }

  function moveReview(direction: number) {
    setActiveReview(
      current =>
        (current + direction + customerReviews.length) % customerReviews.length
    );
  }

  return (
    <section className="section section-darker reviews-section">
      <div className="container reviews-layout">
        <div className="reviews-intro">
          <div className="eyebrow">Customer reviews</div>
          <h2>Kind words from Rockaway Shine customers.</h2>
          <p>Tap a dot or use the arrows to read another review.</p>
          <div className="review-controls">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => moveReview(-1)}
            >
              ←
            </button>
            <div className="review-dots" aria-label="Choose a review">
              {customerReviews.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={'Show review by ' + item.name}
                  aria-pressed={activeReview === index}
                  onClick={() => setActiveReview(index)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => moveReview(1)}
            >
              →
            </button>
          </div>
        </div>
        <article className="review-card" aria-live="polite">
          <div className="review-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote>“{review.quote}”</blockquote>
          <div className="review-author">
            {review.name}
            <span>Rockaway Shine customer</span>
          </div>
        </article>
      </div>
      <div className="container review-submit-wrap">
        <div className="review-submit-card">
          <div>
            <div className="eyebrow">Share your experience</div>
            <h3>Leave a review</h3>
            <p>
              Your review goes to our team for review before it is added to the
              website.
            </p>
          </div>
          <form className="review-submit-form" onSubmit={submitReview}>
            <label>
              Your name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Rating
              <select name="rating" defaultValue="" required>
                <option value="" disabled>Select a rating</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </label>
            <label className="review-submit-wide">
              Your review
              <textarea name="review" rows={4} required />
            </label>
            <div className="review-submit-actions review-submit-wide">
              <button className="button" type="submit" disabled={reviewSending}>
                {reviewSending ? 'Sending…' : 'Submit review'}
              </button>
              {reviewMessage && (
                <p className="form-message" role="status">{reviewMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
