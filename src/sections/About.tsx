import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-100px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about ${isVisible ? "about--visible" : ""}`}
      id="about"
    >
      <div className="about__container">
        {/* Left - Content */}
        <div className="about__content">
          <span className="about__label">About Us</span>

          <h2 className="about__title">
            Building Dreams,
            <span className="about__title-accent"> Crafting Legacies</span>
          </h2>

          <div className="about__divider">
            <span className="about__divider-line"></span>
            <span className="about__divider-diamond"></span>
            <span className="about__divider-line"></span>
          </div>

          <p className="about__text">
            At Real Gold Properties, we believe every home tells a story. For
            over two decades, we've been curating extraordinary properties that
            transcend mere architecture—they become the backdrop for life's most
            cherished moments.
          </p>

          <p className="about__text">
            Our commitment to excellence, paired with an intimate understanding
            of our clients' aspirations, has established us as the premier
            choice for discerning buyers seeking properties of distinction.
          </p>

          {/* Stats */}
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">25+</span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">3K+</span>
              <span className="about__stat-label">Properties Sold</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">98%</span>
              <span className="about__stat-label">Client Satisfaction</span>
            </div>
          </div>

          {/* CTA */}
          <a href="#contact" className="about__cta">
            <span>Discover Our Story</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right - Image */}
        <div className="about__visual">
          <div className="about__image-wrapper">
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Property"
                loading="lazy"
              />
            </div>

            {/* Decorative frame */}
            <div className="about__image-frame"></div>
          </div>

          {/* Floating accent card */}
          <div className="about__accent-card">
            <span className="about__accent-number">25</span>
            <span className="about__accent-text">
              Years of
              <br />
              Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
