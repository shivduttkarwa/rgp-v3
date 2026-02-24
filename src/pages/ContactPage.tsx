import { useState } from "react";
import HeroSection from "../sections/HeroSection";
import "./ContactPage.css";

/* ─────────────────────────────────────────────────────────────────────────────
   1. MARQUEE STRIP
───────────────────────────────────────────────────────────────────────────── */
const CONTACT_MARQUEE = [
  { text: "24hr Response Time" },
  { text: "Expert Consultation" },
  { text: "Luxury Properties" },
  { text: "Direct Agent Access" },
  { text: "Private Viewings" },
  { text: "Global Network" },
];

const ContactMarquee: React.FC = () => {
  const tripled = [...CONTACT_MARQUEE, ...CONTACT_MARQUEE, ...CONTACT_MARQUEE];
  return (
    <div className="cp-marquee" aria-hidden="true">
      <div className="cp-marquee__track">
        {tripled.map((item, i) => (
          <span key={i} className="cp-marquee__item">
            <span className="cp-marquee__dot">✦</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   2. MAIN CONTACT SECTION — split grid
───────────────────────────────────────────────────────────────────────────── */
const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Visit Us",
    value: "123 Prestige Avenue",
    sub: "Brisbane, QLD 4000",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+61 7 3000 0000",
    sub: "Mon–Fri, 9AM–6PM AEST",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "hello@realgoldprop.com",
    sub: "We reply within 24 hours",
  },
];

const ContactMain: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="cp-main">
      {/* Decorative ambient orbs */}
      <div className="cp-main__orbs" aria-hidden="true">
        <div className="cp-main__orb cp-main__orb--a" />
        <div className="cp-main__orb cp-main__orb--b" />
      </div>

      <div className="cp-main__inner">
        {/* ── LEFT — dark navy, info + decoration ── */}
        <div className="cp-main__left">
          <div className="cp-main__deco-bg" aria-hidden="true">
            CONTACT
          </div>

          {/* Animated concentric rings */}
          <div className="cp-main__rings" aria-hidden="true">
            <div className="cp-main__ring cp-main__ring--1" />
            <div className="cp-main__ring cp-main__ring--2" />
            <div className="cp-main__ring cp-main__ring--3" />
          </div>

          <div className="cp-main__left-content">
            <span className="cp-main__kicker">Get In Touch</span>
            <h2 className="cp-main__title">
              Let's Start <em>Your Journey</em>
            </h2>
            <p className="cp-main__desc">
              Whether you're searching for your dream home, seeking investment
              opportunities, or simply want to learn more — we're here, and
              we'd love to hear from you.
            </p>

            <div className="cp-main__details">
              {CONTACT_DETAILS.map((d, i) => (
                <div key={i} className="cp-main__detail">
                  <div className="cp-main__detail-icon">{d.icon}</div>
                  <div className="cp-main__detail-body">
                    <span className="cp-main__detail-label">{d.label}</span>
                    <strong className="cp-main__detail-value">{d.value}</strong>
                    <span className="cp-main__detail-sub">{d.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold accent line */}
            <div className="cp-main__accent-line" aria-hidden="true" />
          </div>
        </div>

        {/* ── RIGHT — form ── */}
        <div className="cp-main__right">
          {submitted ? (
            <div className="cp-form__success">
              <div className="cp-form__success-icon">✓</div>
              <h3>Message Received</h3>
              <p>
                Thank you for reaching out. One of our experts will be in touch
                within 24 hours.
              </p>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              <div className="cp-form__heading">
                <span className="cp-form__kicker">Send a Message</span>
                <p className="cp-form__sub">
                  Fill in the form and we'll be in touch shortly.
                </p>
              </div>

              <div className="cp-form__row cp-form__row--2">
                <div className="cp-form__field">
                  <label htmlFor="cp-name">Full Name</label>
                  <input
                    id="cp-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="cp-form__field">
                  <label htmlFor="cp-email">Email Address</label>
                  <input
                    id="cp-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="cp-form__row cp-form__row--2">
                <div className="cp-form__field">
                  <label htmlFor="cp-phone">Phone Number</label>
                  <input
                    id="cp-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-form__field">
                  <label htmlFor="cp-subject">I'm Interested In</label>
                  <select
                    id="cp-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="buy">Buying a Property</option>
                    <option value="sell">Selling a Property</option>
                    <option value="invest">Investment Opportunities</option>
                    <option value="viewing">Private Viewing</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="cp-form__field">
                <label htmlFor="cp-message">Your Message</label>
                <textarea
                  id="cp-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="cp-form__submit">
                <span>Send Message</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   3. FAQ ACCORDION
───────────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "How quickly can I schedule a property viewing?",
    a: "We typically arrange private viewings within 24–48 hours of your request. For exclusive or off-market properties, timelines may vary slightly depending on availability.",
  },
  {
    q: "Do you work with international buyers?",
    a: "Absolutely. We have an extensive global network and experience assisting buyers from over 30 countries navigate the Australian property market with ease.",
  },
  {
    q: "What types of properties do you specialise in?",
    a: "We focus on premium residential properties — luxury villas, penthouses, waterfront estates, and exclusive off-market listings that aren't available to the general public.",
  },
  {
    q: "Is there a fee for your initial consultation?",
    a: "Initial consultations are completely complimentary. We believe in building relationships first, ensuring we're the perfect fit before any commitments are made.",
  },
  {
    q: "Can you assist with property management?",
    a: "Yes. Our full-service offering includes property management, rental yield optimisation, and ongoing advisory for investment portfolios of all sizes.",
  },
];

const FAQAccordion: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="cp-faq">
      <div className="cp-faq__header">
        <span className="cp-faq__kicker">Common Questions</span>
        <h2 className="cp-faq__title">
          Frequently Asked <em>Questions</em>
        </h2>
      </div>

      <div className="cp-faq__list">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`cp-faq__item${open === i ? " cp-faq__item--open" : ""}`}
          >
            <button
              className="cp-faq__q"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="cp-faq__q-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="cp-faq__q-text">{item.q}</span>
              <span className="cp-faq__chevron">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div className="cp-faq__a" aria-hidden={open !== i}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   4. CONNECT STRIP
───────────────────────────────────────────────────────────────────────────── */
const SOCIALS = [
  { name: "Instagram", handle: "@realgoldprop", href: "#" },
  { name: "LinkedIn", handle: "Real Gold Properties", href: "#" },
  { name: "Facebook", handle: "Real Gold Properties", href: "#" },
];

const ConnectStrip: React.FC = () => (
  <section className="cp-connect">
    <div className="cp-connect__inner">
      <div className="cp-connect__text">
        <span className="cp-connect__kicker">Stay Connected</span>
        <h2 className="cp-connect__title">
          Follow Our <em>Journey</em>
        </h2>
        <p className="cp-connect__body">
          Stay up to date with exclusive listings, market insights, and behind
          the scenes from our world of luxury real estate.
        </p>
      </div>

      <div className="cp-connect__socials">
        {SOCIALS.map((s) => (
          <a key={s.name} href={s.href} className="cp-connect__social">
            <span className="cp-connect__social-name">{s.name}</span>
            <span className="cp-connect__social-handle">{s.handle}</span>
            <span className="cp-connect__social-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function ContactPage({ ready = false }: { ready?: boolean }) {
  return (
    <main className="contact-page">
      <HeroSection
        ready={ready}
        showVideo={false}
        showCta={false}
        bgImage="images/hero1.jpg"
        titleLine1={
          <>
            Get In <span className="rg-gold">Touch</span>
          </>
        }
        titleLine2={
          <>
            <span className="rg-amber">We're</span> Here
          </>
        }
        subtitle="Our team of luxury property experts is ready to guide you — from first enquiry to final key."
      />
      <ContactMarquee />
      <ContactMain />
      <FAQAccordion />
      <ConnectStrip />
    </main>
  );
}
