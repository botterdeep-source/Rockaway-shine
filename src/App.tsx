import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Leaf, Menu, Snowflake, Sprout, CarFront, Trees, X, Calculator, Plus, Minus, Star, Images, MessageSquareQuote } from 'lucide-react';

const services = [
  { number:'01', title:'Fall Cleanup', description:'Clear leaves, branches, and seasonal debris to get your property looking neat and ready for winter.', icon:Leaf, detail:'Leaf removal · Yard cleanup · Bed cleanup' },
  { number:'02', title:'Lawn Care', description:'Consistent lawn maintenance that keeps your outdoor space clean, sharp, and well cared for.', icon:Sprout, detail:'Mowing · Edging · Trimming' },
  { number:'03', title:'Car Detailing', description:'Interior and exterior care that brings back the clean look and feel your vehicle deserves.', icon:CarFront, detail:'Interior cleaning · Exterior detailing' },
  { number:'04', title:'Snow Removal', description:'Keep driveways and walkways clear when winter weather hits, with dependable local service.', icon:Snowflake, detail:'Driveways · Walkways · Snow clearing' },
  { number:'05', title:'Winter Prep', description:'Take care of the outdoor details before the cold sets in and help your property head into winter.', icon:Trees, detail:'Seasonal cleanup · Outdoor preparation' },
];
const serviceAreas = ['Rockaway','Dover','Denville','Randolph','Parsippany','Morris Plains'];

const workExamples = [
  {
    title: 'Fall Cleanup',
    category: 'PROPERTY CARE',
    before: '/images/work/fall-cleanup-before.jpg',
    after: '/images/work/fall-cleanup-after.jpg',
    description: 'Leaf and debris removal with a clean finish.'
  },
  {
    title: 'Lawn Care',
    category: 'LAWN MAINTENANCE',
    before: '/images/work/lawn-care-before.jpg',
    after: '/images/work/lawn-care-after.jpg',
    description: 'A sharper, tidier lawn after routine care.'
  },
  {
    title: 'Car Detailing',
    category: 'VEHICLE DETAILING',
    before: '/images/work/car-detail-before.jpg',
    after: '/images/work/car-detail-after.jpg',
    description: 'Interior or exterior transformations from our detailing work.'
  }
];

function BeforeAfterCard({ example }) {
  const [position, setPosition] = useState(50);
  const [beforeLoaded, setBeforeLoaded] = useState(true);
  const [afterLoaded, setAfterLoaded] = useState(true);

  return (
    <article className="work-card">
      <div className="work-card-heading">
        <div><span className="work-category">{example.category}</span><h3>{example.title}</h3></div>
        <Images size={19} aria-hidden="true"/>
      </div>
      <div className="comparison-frame">
        <div className="comparison-placeholder comparison-placeholder-after"><span>ADD AFTER PHOTO</span></div>
        {afterLoaded && <img className="comparison-image comparison-after" src={example.after} alt={example.title + ' after'} onError={() => setAfterLoaded(false)}/>}
        <div className="comparison-before-layer" style={{ clipPath: 'inset(0 ' + (100 - position) + '% 0 0)' }}>
          <div className="comparison-placeholder comparison-placeholder-before"><span>ADD BEFORE PHOTO</span></div>
          {beforeLoaded && <img className="comparison-image" src={example.before} alt={example.title + ' before'} onError={() => setBeforeLoaded(false)}/>}
        </div>
        <span className="comparison-label comparison-label-before">BEFORE</span>
        <span className="comparison-label comparison-label-after">AFTER</span>
        <div className="comparison-divider" style={{ left: position + '%' }}><span>↔</span></div>
        <input className="comparison-range" type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label={'Compare before and after for ' + example.title}/>
      </div>
      <p className="work-description">{example.description}</p>
    </article>
  );
}

const quoteOptions = {
  'Fall Cleanup': {
    items: [
      { name:'Leaf removal', price:125 }, { name:'Full yard cleanup', price:175 },
      { name:'Garden bed cleanup', price:85 }, { name:'Branch and debris removal', price:65 }
    ],
    addons: [{name:'Bag and haul debris',price:35},{name:'Gutter debris cleanup',price:50},{name:'Extra-large property',price:75}]
  },
  'Lawn Care': {
    items: [
      {name:'Small lawn mowing',price:45},{name:'Medium lawn mowing',price:60},
      {name:'Large lawn mowing',price:85},{name:'Lawn edging and trimming',price:25}
    ],
    addons: [{name:'Leaf blowing',price:15},{name:'Weed trimming',price:20},{name:'Garden bed touch-up',price:35}]
  },
  'Car Detailing': {
    items: [
      {name:'Basic detail',price:60},{name:'Standard detail',price:75},{name:'Full detail',price:90}
    ],
    addons: [{name:'SUV',price:20},{name:'Minivan',price:30},{name:'Pickup truck',price:25},{name:'Van',price:35},{name:'Full-size truck',price:35}]
  },
  'Snow Removal': {
    items: [
      {name:'Driveway clearing',price:50},{name:'Walkway clearing',price:25},
      {name:'Driveway and walkways',price:65},{name:'Larger property clearing',price:95}
    ],
    addons: [{name:'Ice melt application',price:20},{name:'Additional walkway',price:15},{name:'Corner lot / extra area',price:25}]
  },
  'Winter Prep': {
    items: [
      {name:'Outdoor furniture preparation',price:65},{name:'General winter preparation',price:100},
      {name:'Final yard cleanup',price:125},{name:'Garden and plant preparation',price:75}
    ],
    addons: [{name:'Leaf and debris removal',price:35},{name:'Outdoor item storage',price:30},{name:'Extra-large property',price:75}]
  }
};

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [category,setCategory] = useState('Fall Cleanup');
  const [subservice,setSubservice] = useState(quoteOptions['Fall Cleanup'].items[0].name);
  const [addons,setAddons] = useState([]);
  const [quantity,setQuantity] = useState(1);
  const [customer,setCustomer] = useState({name:'',email:'',phone:'',address:'',notes:''});
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [submissionMessage,setSubmissionMessage] = useState('');
  const [submissionError,setSubmissionError] = useState('');
  const closeMenu = () => setMenuOpen(false);
  const selectedOptions = quoteOptions[category];
  const selectedItem = selectedOptions.items.find(x=>x.name===subservice) || selectedOptions.items[0];
  const total = useMemo(()=> (selectedItem.price + selectedOptions.addons.filter(x=>addons.includes(x.name)).reduce((sum,x)=>sum+x.price,0))*quantity,[selectedItem,selectedOptions,addons,quantity]);
  const toggleAddon = (name) => setAddons(current=>current.includes(name)?current.filter(x=>x!==name):[...current,name]);
  const changeCategory = (value) => {setCategory(value);setSubservice(quoteOptions[value].items[0].name);setAddons([]);setQuantity(1);};
  const requestQuote = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmissionMessage('');
    setSubmissionError('');

    const selectedAddons = selectedOptions.addons.filter(x=>addons.includes(x.name));
    const formData = new FormData();
    formData.append('name', customer.name.trim());
    formData.append('email', customer.email.trim());
    formData.append('_replyto', customer.email.trim());
    formData.append('_subject', 'New Quote Request - ' + category);
    formData.append('phone', customer.phone || 'Not provided');
    formData.append('service_address_or_town', customer.address || 'Not provided');
    formData.append('service_category', category);
    formData.append('service_option', subservice);
    formData.append('quantity', String(quantity));
    formData.append('add_ons', selectedAddons.map(x=>x.name).join(', ') || 'None');
    formData.append('estimated_total', '$' + total.toFixed(2));
    formData.append('project_details', customer.notes || 'Not provided');
    formData.append('estimate_disclaimer', 'This is a preliminary estimate. Final pricing must be confirmed by Rockaway Seasonal Care.');

    try {
      const response = await fetch('https://formspree.io/f/xbggbpjv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        const details = Array.isArray(result.errors) ? result.errors.map(error => error.message).join(' ') : '';
        throw new Error(details || 'We could not submit your request. Please try again.');
      }
      setSubmissionMessage('Your quote request was sent successfully. We’ll be in touch soon.');
      setCustomer({name:'',email:'',phone:'',address:'',notes:''});
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="site-shell">
    <div className="announcement"><span className="status-dot"/> LOCAL PROPERTY & VEHICLE CARE <span className="announcement-divider">/</span> MORRIS COUNTY, NJ</div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rockaway Seasonal Care home" onClick={closeMenu}>
        <img className="brand-logo" src="/resources/rockaway-logo.png" alt="Rockaway Seasonal Care logo"/>
        <span className="brand-copy"><strong>ROCKAWAY</strong><small>SEASONAL CARE</small></span>
      </a>
      <button className="mobile-menu-button" type="button" aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
      <nav className={menuOpen?'main-nav is-open':'main-nav'} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Our Work</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a href="#about" onClick={closeMenu}>About</a><a href="#service-area" onClick={closeMenu}>Service Area</a>
        <a className="nav-cta" href="#quote-calculator" onClick={closeMenu}>Get a quote <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="top">
        <div className="hero-grid"/>
        <div className="hero-content">
          <p className="eyebrow"><span/> YOUR PROPERTY. YOUR VEHICLE. OUR CARE.</p>
          <h1>CARE THAT<br/>CHANGES WITH<br/><em>THE SEASONS.</em></h1>
          <p className="hero-description">From a clean-cut lawn to a freshly detailed car, we help keep your property and vehicle looking their best all year long.</p>
          <div className="hero-actions"><a className="button button-green" href="#quote-calculator">Get an instant estimate <ArrowUpRight size={17}/></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div>
          <div className="hero-proof"><div className="proof-icon"><CheckCircle2 size={18}/></div><p><strong>Local service. Reliable results.</strong><span>Proudly serving Morris County, New Jersey.</span></p></div>
        </div>
        <div className="hero-art" aria-label="Seasonal landscape illustration" role="img"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="art-hill hill-back"/><div className="art-hill hill-front"/><div className="art-tree tree-one"><i/><b/></div><div className="art-tree tree-two"><i/><b/></div><div className="art-ground-line"/><div className="art-caption"><span>01 / 04</span><strong>READY FOR EVERY SEASON</strong></div></div>
        <div className="hero-side-label">MORRIS COUNTY · NEW JERSEY</div>
      </section>

      <section className="ticker" aria-label="Our services"><div>PROPERTY CARE <span>✳</span> VEHICLE DETAILING <span>✳</span> SEASONAL CLEANUPS <span>✳</span> YEAR-ROUND SERVICE <span>✳</span> PROPERTY CARE <span>✳</span> VEHICLE DETAILING <span>✳</span></div></section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE CAN DO FOR YOU</p><h2>ONE TEAM.<br/><em>MORE WAYS TO CARE.</em></h2></div><p className="section-intro">A well-kept property takes attention throughout the year. Choose the service you need and let’s get your project moving.</p></div>
        <div className="services-list">{services.map(service=>{const Icon=service.icon;return <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div className="service-icon"><Icon size={24} strokeWidth={1.6}/></div><div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p><small>{service.detail}</small></div><a className="service-arrow" href="#quote-calculator" aria-label={'Get a quote for '+service.title}><ArrowUpRight size={21}/></a></article>;})}</div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">REAL PROJECTS. REAL RESULTS.</p><h2>SEE THE <em>DIFFERENCE.</em></h2></div>
          <p className="section-intro">Slide to compare before and after. We’ll add photos of our own completed jobs here as the gallery grows.</p>
        </div>
        <div className="work-grid">{workExamples.map(example => <BeforeAfterCard key={example.title} example={example}/>)}</div>
      </section>

      <section className="quote-section section-pad" id="quote-calculator">
        <div className="quote-heading"><div><p className="eyebrow"><Calculator size={14}/> BUILD YOUR ESTIMATE</p><h2>GET A <em>QUOTE.</em></h2><p className="section-intro">Choose a service, customize the details, and see your estimate update instantly.</p></div><span className="quote-kicker">FAST · SIMPLE · LOCAL</span></div>
        <form className="quote-layout" onSubmit={requestQuote}>
          <div className="quote-fields">
            <div className="field-group"><label htmlFor="quote-service">1. Choose a service</label><select id="quote-service" value={category} onChange={e=>changeCategory(e.target.value)}>{Object.keys(quoteOptions).map(name=><option key={name}>{name}</option>)}</select></div>
            <div className="field-group"><label htmlFor="quote-option">2. Select the service option</label><select id="quote-option" value={subservice} onChange={e=>setSubservice(e.target.value)}>{selectedOptions.items.map(item=><option key={item.name} value={item.name}>{item.name} · from ${item.price}</option>)}</select></div>
            <div className="field-group"><label>3. Add extras</label><div className="addon-list">{selectedOptions.addons.map(addon=><label className="addon-option" key={addon.name}><input type="checkbox" checked={addons.includes(addon.name)} onChange={()=>toggleAddon(addon.name)}/><span>{addon.name}</span><strong>+${addon.price}</strong></label>)}</div></div>
            <div className="field-group quantity-field"><label htmlFor="quote-quantity">Number of visits / vehicles</label><div className="quantity-control"><button type="button" aria-label="Decrease quantity" onClick={()=>setQuantity(q=>Math.max(1,q-1))}><Minus size={15}/></button><output>{quantity}</output><button type="button" aria-label="Increase quantity" onClick={()=>setQuantity(q=>Math.min(10,q+1))}><Plus size={15}/></button></div></div>
            <p className="quote-disclaimer">Estimates are starting estimates for planning purposes. Final pricing may change based on property size, condition, access, and project scope. We’ll confirm your quote before work begins.</p>
          </div>
          <aside className="quote-summary">
            <p className="eyebrow">YOUR ESTIMATE</p><span className="summary-service">{category}</span><p className="summary-option">{subservice}</p>
            <div className="summary-lines"><div><span>Base service × {quantity}</span><strong>${(selectedItem.price*quantity).toFixed(2)}</strong></div>{selectedOptions.addons.filter(x=>addons.includes(x.name)).map(x=><div key={x.name}><span>{x.name}</span><strong>${(x.price*quantity).toFixed(2)}</strong></div>)}</div>
            <div className="summary-total"><span>Estimated total</span><strong>${total.toFixed(2)}</strong></div>
            <p className="summary-note">No payment required to request a quote.</p>
            <a className="summary-contact" href="mailto:Rockawayshine@yahoo.com">Questions? Email us <ArrowUpRight size={14}/></a>
          </aside>
          <div className="quote-customer">
            <div className="customer-heading"><p className="eyebrow">4. WHERE SHOULD WE SEND YOUR QUOTE?</p><p>Enter your details and submit your request. We’ll receive your selections and estimated total directly.</p></div>
            <div className="customer-grid">
              <div className="field-group"><label htmlFor="customer-name">Your name *</label><input id="customer-name" required maxLength={80} autoComplete="name" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} placeholder="Full name"/></div>
              <div className="field-group"><label htmlFor="customer-email">Email *</label><input id="customer-email" required type="email" maxLength={120} autoComplete="email" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})} placeholder="you@example.com"/></div>
              <div className="field-group"><label htmlFor="customer-phone">Phone</label><input id="customer-phone" type="tel" maxLength={30} autoComplete="tel" value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})} placeholder="(555) 555-5555"/></div>
              <div className="field-group"><label htmlFor="customer-address">Town / service address</label><input id="customer-address" maxLength={160} autoComplete="street-address" value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})} placeholder="Town or address"/></div>
              <div className="field-group customer-notes"><label htmlFor="customer-notes">Anything else we should know?</label><textarea id="customer-notes" rows={3} maxLength={1000} value={customer.notes} onChange={e=>setCustomer({...customer,notes:e.target.value})} placeholder="Property size, vehicle type, timing, project details..."/></div>
            </div>
            <div className="quote-submit-feedback" aria-live="polite" role="status">
              {submissionMessage && <p className="quote-success"><CheckCircle2 size={17}/>{submissionMessage}</p>}
              {submissionError && <p className="quote-error">{submissionError}</p>}
            </div>
            <button className="button button-green submit-quote" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending request...' : 'Submit quote request'} <ArrowUpRight size={17}/>
            </button>
          </div>
        </form>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-visual"><div className="about-visual-inner"><span className="about-big-type">LOCAL<br/><em>BY NATURE.</em></span><div className="about-stamp"><Sprout size={24}/><span>CARE<br/>THAT<br/>SHOWS</span></div></div></div>
        <div className="about-copy"><p className="eyebrow">A HANDS-ON LOCAL TEAM</p><h2>THE DETAILS<br/>MAKE THE <em>DIFFERENCE.</em></h2><p>We’re a local team focused on making property and vehicle care straightforward. Whether it’s keeping up with the lawn, clearing seasonal debris, or giving your car a refresh, we take pride in doing the job right.</p><ul><li><CheckCircle2 size={17}/> Friendly, direct communication</li><li><CheckCircle2 size={17}/> Flexible seasonal services</li><li><CheckCircle2 size={17}/> Serving our local communities</li></ul><a className="text-link green-link" href="#quote-calculator">Talk about your project <ArrowUpRight size={16}/></a></div>
      </section>


<section className="reviews-section section-pad" id="reviews">
  <div className="review-card">
    <div className="review-top">
      <div className="review-stars">
        <Star /><Star /><Star /><Star /><Star />
      </div>

    <blockquote className="review-quote">
      “Very nice work !! And I really liked your lawn mowing
      technique especially with those stripes! Keep on!”
    </blockquote>

    <div className="review-divider" />

    <div className="review-author">
      <div className="review-avatar">S</div>
      <div>
        <h4>Sebastiano</h4>
        <p>Customer review preview</p>
      </div>
    </div>
  </div>

  <div className="review-invite">
    <MessageSquareQuote size={28} className="review-quote-icon" />
    <h3>HAVE WE WORKED WITH YOU?</h3>
    <p>
      Your honest feedback helps our local business grow.
      Send us a note and let us know about your experience.
    </p>
    <a
      className="button button-green"
      href="mailto:Rockawayshine@yahoo.com?subject=Rockaway%20Seasonal%20Care%20Review"
    >
      SHARE YOUR FEEDBACK <ArrowUpRight size={16} />
    </a>
  </div>
</section>

      <section className="area-section section-pad" id="service-area"><div className="area-top"><div><p className="eyebrow">ROOTED IN THE COMMUNITY</p><h2>PROUD TO SERVE<br/><em>OUR NEIGHBORS.</em></h2></div><p>Based in the Rockaway area and serving nearby Morris County communities. Not sure if we cover your address? Just ask.</p></div><div className="area-tags">{serviceAreas.map(area=><span key={area}>{area}<ArrowUpRight size={13}/></span>)}</div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-panel"><div className="contact-copy"><p className="eyebrow">LET’S GET IT TAKEN CARE OF</p><h2>READY WHEN<br/><em>YOU ARE.</em></h2><p>Tell us what you need help with. Reach out for service details and a quote.</p></div><div className="contact-actions"><a className="button button-green button-large" href="#quote-calculator">Build your estimate <ArrowUpRight size={18}/></a><a className="contact-email" href="mailto:Rockawayshine@yahoo.com">Rockawayshine@yahoo.com</a><a className="contact-social" href="https://www.instagram.com/rockawayshine/" target="_blank" rel="noreferrer">Follow our work on Instagram <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#top"><img className="brand-logo footer-logo" src="/resources/rockaway-logo.png" alt=""/><span className="brand-copy"><strong>ROCKAWAY</strong><small>SEASONAL CARE</small></span></a><p>Local care for every season.</p><span className="footer-copy">© {new Date().getFullYear()} Rockaway Seasonal Care. All rights reserved.</span><a className="back-top" href="#top">BACK TO TOP ↑</a></footer>
  </div>;
}
export default App;
