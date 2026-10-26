import Head from 'next/head';
import { useState, type FormEvent } from 'react';
import {
  addOns,
  detailAddOns,
  detailPackages,
  EMAIL,
  gardenRates,
  HOURS,
  PHONE,
  PHONE_LINK,
  Seo,
  SiteShell,
  vehicleAdjustments,
  yardAdjustments,
} from '../components/site';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgzbdlp';

type QuoteCategory = '' | 'Auto Detailing' | 'Lawn & Yard Care';

function amount(price?: string) {
  return Number((price || '').replace(/[^0-9.]/g, '')) || 0;
}

function dollars(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function InstantQuote() {
  const [category, setCategory] = useState<QuoteCategory>('');
  const [vehicle, setVehicle] = useState('');
  const [detailPackage, setDetailPackage] = useState('');
  const [yardSize, setYardSize] = useState('');
  const [yardService, setYardService] = useState('');
  const [detailSelected, setDetailSelected] = useState<string[]>([]);
  const [yardSelected, setYardSelected] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const selectedPackage = detailPackages.find(item => item.title === detailPackage);
  const selectedVehicle = vehicleAdjustments.find(item => item.name === vehicle);
  const selectedYardSize = yardAdjustments.find(item => item.name === yardSize);
  const selectedYardService = gardenRates.find(item => item.name === yardService);
  const isFallCleanup = yardService === 'Fall cleanup';
  const selectedAddOns =
    category === 'Auto Detailing'
      ? detailAddOns.filter(item => detailSelected.includes(item.name))
      : addOns.filter(item => yardSelected.includes(item.name));
  const addOnTotal = selectedAddOns.reduce(
    (sum, item) => sum + amount(item.price),
    0
  );
  const total =
    category === 'Auto Detailing'
      ? amount(selectedPackage?.price) +
        amount(selectedVehicle?.price) +
        addOnTotal
      : amount(selectedYardService?.price) +
        amount(selectedYardSize?.price) +
        addOnTotal;
  const selectionLabel =
    category === 'Auto Detailing'
      ? [detailPackage, vehicle && vehicle + (selectedVehicle ? ' ' + selectedVehicle.price : '')]
          .filter(Boolean)
          .join(' · ')
      : [yardService, yardSize && yardSize + (selectedYardSize ? ' ' + selectedYardSize.price : '')]
          .filter(Boolean)
          .join(' · ');
  const canRequest =
    category === 'Auto Detailing'
      ? Boolean(detailPackage && vehicle)
      : category === 'Lawn & Yard Care'
        ? Boolean(yardService && yardSize)
        : false;
  const totalLabel = canRequest
    ? isFallCleanup
      ? 'Custom quote'
      : dollars(total)
    : '$0';

  function toggleSelection(
    current: string[],
    update: (value: string[]) => void,
    name: string
  ) {
    update(
      current.includes(name)
        ? current.filter(item => item !== name)
        : [...current, name]
    );
  }

  function changeCategory(value: QuoteCategory) {
    setCategory(value);
    setVehicle('');
    setDetailPackage('');
    setYardSize('');
    setYardService('');
    setDetailSelected([]);
    setYardSelected([]);
    setMessage('');
    setError('');
  }

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setMessage('');
    setError('');

    const formData = new FormData(form);
    formData.set('Estimated Total', totalLabel);
    formData.set('_subject', 'New Rockaway Shine instant quote request');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || (result as { errors?: unknown[] }).errors?.length) {
        throw new Error('Formspree did not accept the request.');
      }

      setMessage(
        'Thanks. Your estimate request was sent to Rockaway Shine. We’ll follow up to confirm the details and final price.'
      );
      form.reset();
      setCategory('');
      setVehicle('');
      setDetailPackage('');
      setYardSize('');
      setYardService('');
      setDetailSelected([]);
      setYardSelected([]);
    } catch {
      setError(
        'We could not send your request right now. Please try again or call/text ' +
          PHONE +
          '.'
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="quote" className="section section-darker instant-quote-section">
      <div className="container">
        <div className="instant-quote-heading">
          <div className="eyebrow">Instant quote</div>
          <h2>
            Get your <span className="accent-text">estimate</span>
          </h2>
          <p>
            Choose a service to see a starting estimate, then send the details to
            our team.
          </p>
        </div>

        <div className="instant-quote-grid">
          <aside className="quote-summary-card" aria-live="polite">
            <h3>Quote summary</h3>
            <p>Select your service, package, and add-ons to see an estimate.</p>
            <div className="quote-summary-rows">
              <div>
                <span>Service category</span>
                <strong>{category || 'Not selected'}</strong>
              </div>
              <div>
                <span>Selection</span>
                <strong>{selectionLabel || 'Not selected'}</strong>
              </div>
              <div>
                <span>Add-ons</span>
                <strong>{dollars(addOnTotal)}</strong>
              </div>
              <div className="quote-summary-total">
                <span>Total estimate</span>
                <strong>{totalLabel}</strong>
              </div>
            </div>
            <p className="quote-disclaimer">
              Yard prices are starting estimates. Final pricing is confirmed
              after Rockaway Shine reviews the property and requested work.
              Sending this form is a request, not a booking or payment.
            </p>
          </aside>

          <div className="quote-form-card">
            <form className="instant-quote-form" onSubmit={submitQuote}>
              <label className="quote-field">
                What do you need help with?
                <select
                  name="Service Category"
                  value={category}
                  onChange={event =>
                    changeCategory(event.target.value as QuoteCategory)
                  }
                  required
                >
                  <option value="">Select a service category</option>
                  <option value="Auto Detailing">Auto detailing</option>
                  <option value="Lawn & Yard Care">Lawn & yard care</option>
                </select>
              </label>

              {category === 'Auto Detailing' && (
                <div className="quote-service-fields">
                  <label className="quote-field">
                    Vehicle type
                    <select
                      name="Vehicle Type"
                      value={vehicle}
                      onChange={event => setVehicle(event.target.value)}
                      required
                    >
                      <option value="">Select vehicle</option>
                      {vehicleAdjustments.map(item => (
                        <option key={item.name} value={item.name}>
                          {item.name} ({item.price})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="quote-field">
                    Service package
                    <select
                      name="Service Package"
                      value={detailPackage}
                      onChange={event => setDetailPackage(event.target.value)}
                      required
                    >
                      <option value="">Select package</option>
                      {detailPackages.map(item => (
                        <option key={item.title} value={item.title}>
                          {item.title} — {item.price}
                        </option>
                      ))}
                    </select>
                  </label>
                  <fieldset className="quote-addons">
                    <legend>Detailing add-ons</legend>
                    {detailAddOns.map(item => (
                      <label className="quote-addon" key={item.name}>
                        <input
                          type="checkbox"
                          name="Detailing Add Ons"
                          value={item.name}
                          checked={detailSelected.includes(item.name)}
                          onChange={() =>
                            toggleSelection(
                              detailSelected,
                              setDetailSelected,
                              item.name
                            )
                          }
                        />
                        <span>
                          <strong>{item.name} · {item.price}</strong>
                          <small>{item.detail}</small>
                        </span>
                      </label>
                    ))}
                  </fieldset>
                </div>
              )}

              {category === 'Lawn & Yard Care' && (
                <div className="quote-service-fields">
                  <label className="quote-field">
                    Yard size
                    <select
                      name="Yard Size"
                      value={yardSize}
                      onChange={event => setYardSize(event.target.value)}
                      required
                    >
                      <option value="">Select yard size</option>
                      {yardAdjustments.map(item => (
                        <option key={item.name} value={item.name}>
                          {item.name} ({item.price})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="quote-field">
                    Yard service
                    <select
                      name="Yard Service"
                      value={yardService}
                      onChange={event => setYardService(event.target.value)}
                      required
                    >
                      <option value="">Select service</option>
                      {gardenRates.map(item => (
                        <option key={item.name} value={item.name}>
                          {item.name} — {item.price}
                        </option>
                      ))}
                      <option value="Fall cleanup">Fall cleanup — custom estimate</option>
                    </select>
                  </label>
                  <fieldset className="quote-addons">
                    <legend>Yard service add-ons</legend>
                    {addOns.map(item => (
                      <label className="quote-addon" key={item.name}>
                        <input
                          type="checkbox"
                          name="Yard Service Add Ons"
                          value={item.name}
                          checked={yardSelected.includes(item.name)}
                          onChange={() =>
                            toggleSelection(yardSelected, setYardSelected, item.name)
                          }
                        />
                        <span>
                          <strong>{item.name} · {item.price}</strong>
                          <small>{item.detail}</small>
                        </span>
                      </label>
                    ))}
                  </fieldset>
                </div>
              )}

              {canRequest && (
                <div className="quote-contact-fields">
                  <div className="quote-contact-heading">
                    <h3>Where should we send your follow-up?</h3>
                    <p>Share your details and preferred appointment time.</p>
                  </div>
                  <div className="quote-fields-grid">
                    <label className="quote-field">
                      Preferred date
                      <input type="date" name="Preferred Date" required />
                    </label>
                    <label className="quote-field">
                      Preferred time
                      <input type="time" name="Preferred Time" required />
                    </label>
                    <label className="quote-field">
                      First name
                      <input
                        type="text"
                        name="First Name"
                        autoComplete="given-name"
                        required
                      />
                    </label>
                    <label className="quote-field">
                      Last name
                      <input
                        type="text"
                        name="Last Name"
                        autoComplete="family-name"
                        required
                      />
                    </label>
                    <label className="quote-field">
                      Phone
                      <input
                        type="tel"
                        name="Phone"
                        autoComplete="tel"
                        required
                      />
                    </label>
                    <label className="quote-field">
                      Email
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </label>
                    <label className="quote-field quote-field-wide">
                      Service address
                      <input
                        type="text"
                        name="Service Address"
                        autoComplete="street-address"
                        required
                      />
                    </label>
                    <label className="quote-field quote-field-wide">
                      Preferred payment method
                      <select name="Payment Method" defaultValue="" required>
                        <option value="">Select payment method</option>
                        <option>PayPal</option>
                        <option>Venmo</option>
                        <option>Cash App</option>
                        <option>Credit or debit card</option>
                        <option>Cash</option>
                      </select>
                    </label>
                    <label className="quote-field quote-field-wide">
                      Extra notes
                      <textarea
                        name="Extra Notes"
                        rows={3}
                        placeholder="Tell us anything else about the service."
                      />
                    </label>
                  </div>
                  <input type="hidden" name="Estimated Total" value={totalLabel} />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Rockaway Shine instant quote request"
                  />
                  {error && (
                    <p className="form-message form-error" role="alert">{error}</p>
                  )}
                  <button className="button form-submit" type="submit" disabled={sending}>
                    {sending ? 'Sending request…' : 'Send estimate request'}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              )}
            </form>
            {message && <p className="form-message form-success" role="status">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !email.includes('@') || !service || !message) {
      setError(
        'Please complete your name, a valid email, service, and project details.'
      );
      setSent(false);
      return;
    }

    data.set('_subject', 'Rockaway Shine service request');
    setError('');
    setSending(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || (result as { errors?: unknown[] }).errors?.length) {
        throw new Error('Formspree did not accept the request.');
      }
      setSent(true);
      form.reset();
    } catch {
      setError(
        'We could not send your request right now. Please call or text ' +
          PHONE +
          '.'
      );
      setSent(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <Head>
        <Seo
          title="Contact Rockaway Shine | Request a Quote"
          description="Contact Rockaway Shine about mobile detailing, lawn and yard services, or fall cleanup in Morris County, NJ."
        />
      </Head>
      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Contact</div>
            <h1>Tell us what you need.</h1>
            <p>
              Call, text, or send a few details about your vehicle or property.
              We’ll help you find the right next step.
            </p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </section>

        <InstantQuote />

        <section className="section container contact-layout" id="contact-details">
          <div className="contact-info">
            <div className="eyebrow">We’re nearby</div>
            <h2>Ready for a clean ride or a fresh yard?</h2>
            <p>
              Tell us what you’d like help with and where you’re located. We
              serve Rockaway and nearby Morris County communities.
            </p>
            <div className="contact-card">
              <span>Call or text</span>
              <a href={PHONE_LINK}>{PHONE}</a>
            </div>
            <div className="contact-card">
              <span>Email</span>
              <a href={'mailto:' + EMAIL}>{EMAIL}</a>
            </div>
            <div className="contact-card">
              <span>Business hours</span>
              <b>{HOURS}</b>
            </div>
            <div className="contact-card">
              <span>Service area</span>
              <b>Morris County, NJ and nearby towns</b>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={submitRequest}
            noValidate
          >
            <div className="form-heading">
              <span className="eyebrow">Request an estimate</span>
              <h2>Send a service request</h2>
              <p>
                Your request is sent securely through Formspree. We’ll follow up
                by email or phone.
              </p>
            </div>
            <div className="form-grid">
              <label>
                Your name
                <input name="name" autoComplete="name" />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                Your phone (optional)
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                Town or address (optional)
                <input name="address" autoComplete="street-address" />
              </label>
              <label className="form-wide">
                What service do you need?
                <select name="service" defaultValue="">
                  <option value="">Choose a service</option>
                  <optgroup label="Mobile detailing">
                    {detailPackages.map(pkg => (
                      <option key={pkg.title}>{pkg.title}</option>
                    ))}
                    <option>Custom detailing quote</option>
                  </optgroup>
                  <optgroup label="Lawn & yard care">
                    {gardenRates.map(item => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                    <option>Fall cleanup</option>
                    <option>Custom yard service quote</option>
                  </optgroup>
                </select>
              </label>
              <label className="form-wide">
                Tell us about the project
                <textarea name="message" rows={4} />
              </label>
            </div>
            {error && (
              <p className="form-message form-error" role="alert">
                {error}
              </p>
            )}
            {sent && (
              <p className="form-message form-success" role="status">
                Your request was sent. Rockaway Shine will follow up soon.
              </p>
            )}
            <button
              className="button form-submit"
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Send service request'}
              <span aria-hidden="true">↗</span>
            </button>
            <p className="form-privacy">
              We use your details to respond to your request. See our{' '}
              <a href="../privacy-policy/">Privacy Policy</a>.
            </p>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}
