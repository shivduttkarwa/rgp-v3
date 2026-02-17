import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnSecondary from "../components/BtnSecondary";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */
export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const accentLRef = useRef<HTMLDivElement>(null);
  const accentRRef = useRef<HTMLDivElement>(null);
  const revealL1Ref = useRef<HTMLDivElement>(null);
  const revealL2Ref = useRef<HTMLDivElement>(null);
  const revealSubRef = useRef<HTMLDivElement>(null);
  const revealCtaRef = useRef<HTMLDivElement>(null);
  const heroWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const vignette = vignetteRef.current;
    const accentL = accentLRef.current;
    const accentR = accentRRef.current;
    const revealL1 = revealL1Ref.current;
    const revealL2 = revealL2Ref.current;
    const revealSub = revealSubRef.current;
    const revealCta = revealCtaRef.current;
    const heroWrap = heroWrapRef.current;

    if (
      !bg ||
      !vignette ||
      !accentL ||
      !accentR ||
      !revealL1 ||
      !revealL2 ||
      !revealSub ||
      !revealCta ||
      !heroWrap
    )
      return;

    /* ── initial states ── */
    gsap.set([revealL1, revealL2, revealSub, revealCta], {
      x: -100,
      opacity: 0,
    });
    gsap.set(revealCta, { scale: 0.85 });
    gsap.set(bg, { opacity: 1, scale: 1.05 });
    gsap.set(vignette, { opacity: 0 });
    gsap.set(accentL, { height: 0, opacity: 0 });
    gsap.set(accentR, { height: 0, opacity: 0 });

    /* ── scroll timeline (animates when hero comes into view) ── */
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: heroWrap,
        start: "top center",
        end: "center center",
        toggleActions: "play none none none", // Only play once, don't reverse
      },
    });

    /* A — vignette */
    scrollTL.to(
      vignette,
      {
        opacity: 0.5,
        duration: 0.6,
        ease: "power2.out",
      },
      0,
    );

    /* B — BG */
    scrollTL.to(
      bg,
      {
        scale: 1.02,
        duration: 0.8,
        ease: "power2.out",
      },
      0,
    );

    /* C — accents */
    scrollTL.to(
      accentL,
      {
        height: "55vh",
        opacity: 0.5,
        duration: 0.8,
        ease: "power3.out",
      },
      0.2,
    );
    scrollTL.to(
      accentR,
      {
        height: "45vh",
        opacity: 0.4,
        duration: 0.8,
        ease: "power3.out",
      },
      0.3,
    );

    /* D — reveal (all slide from left to right, staggered) */
    scrollTL.to(
      revealL1,
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      0.4,
    );

    scrollTL.to(
      revealL2,
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      0.5,
    );

    scrollTL.to(
      revealSub,
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      0.6,
    );

    scrollTL.to(
      revealCta,
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power4.out",
      },
      0.7,
    );

    /* ── cleanup ── */
    return () => {
      scrollTL.scrollTrigger?.kill();
      scrollTL.kill();
    };
  }, []);

  /* ═══════════════════════════════════════════════════
     JSX
     ═══════════════════════════════════════════════════ */
  return (
    <div className="rg-hero-wrap" ref={heroWrapRef}>
      <section className="rg-hero">
        <div
          className="rg-hero__bg"
          ref={bgRef}
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(0deg, rgba(7, 20, 37, 0.2), rgba(7, 20, 37, 0.15)), url("public/images/journal_3.jpg")',
          }}
        ></div>
        <div
          className="rg-hero__vignette"
          ref={vignetteRef}
          aria-hidden="true"
        ></div>
        <div
          className="rg-hero__accent rg-hero__accent--left"
          ref={accentLRef}
          aria-hidden="true"
        ></div>
        <div
          className="rg-hero__accent rg-hero__accent--right"
          ref={accentRRef}
          aria-hidden="true"
        ></div>

        {/* ── REVEAL (animates on scroll) ── */}
        <div className="rg-hero__reveal">
          <div className="rg-reveal__line">
            <div className="rg-reveal__text" ref={revealL1Ref}>
              Luxury <span className="rg-gold">Redefined</span>
            </div>
          </div>
          <div className="rg-reveal__line">
            <div className="rg-reveal__text" ref={revealL2Ref}>
              Living <span className="rg-amber">Elevated</span>
            </div>
          </div>
          <div className="rg-reveal__sub" ref={revealSubRef}>
            350+ premium properties delivered — luxury villas, penthouses &amp;
            exclusive estates crafted for those who demand the extraordinary.
          </div>
          <div className="rg-reveal__cta" ref={revealCtaRef}>
            <BtnSecondary label="Explore Properties" />
          </div>
        </div>
      </section>
    </div>
  );
}
