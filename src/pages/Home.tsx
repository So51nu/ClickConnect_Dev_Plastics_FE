
'use client';
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Search, CheckCircle,
  Settings, Truck, Users, Clock, Award, Star,
  Shield, Factory, Thermometer, Zap,
  ChevronLeft, ChevronRight, Play, Pause,
  Quote, Gauge, HardHat,
  Menu, X
} from 'lucide-react';

// ── GLOBAL CONSTANTS ────────────────────────────────────────────────────────
const COLORS = {
  gold: "#a37f57",
  dark: "#1a1a1a",
  lightText: "#666",
  bgLight: "#f9f9f9",
  white: "#ffffff",
  accent: "#2a5c7a"
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // ✅
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } }
};

// ✅ NEW: Reusable hover + micro animations (NO DESIGN BREAK)
const hoverLift = {
  whileHover: { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" },
  transition: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

const hoverSoft = {
  whileHover: { y: -4, scale: 1.01 },
  transition: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1] as const, // ✅ valid easeOut
  },
};

const iconHover = {
  whileHover: { scale: 1.1, rotate: 6 },
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

// ── MAIN HOME COMPONENT ─────────────────────────────────────────────────────
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const heroImages = [
    "src/coimages/pharmaceuticals.jpg",
    "src/ai_images/img28.jpg",
    "/src/images/image.png",
    "/src/images/img.png",
  ];

  // ✅ CONTENT aligned with FRP / plastic fabrication (from earlier enhanced version)
  const materials = [
    {
      name: "Dosing Tanks",
      desc: "Tanks designed for precise chemical dosing and mixing.",
      features: ["Material: FRP", "Application: Water Treatment, Chemical Dosing", "Clients: GHCL Gujarat"],
      image: "src/ai_images/img37.jpg"
    },
   {
    name: "FRP Cylindrical Tanks",
    desc: "High-capacity, corrosion-resistant tanks for chemical and acid storage.",
    features: [
      "Material: FRP, PP/FRP",
      "Capacity: Up to 210 KL",
      "Clients: HIL Rasayani, Blue Circle Organics"
    ],
    image: "src/ai_images/img33.jpg"
  },

  {
    name: "FRP Horizontal Tanks",
    desc: "Horizontal storage solutions with structural support for industrial use.",
    features: [
      "Material: FRVS",
      "Application: Chemical Storage",
      "Clients: JSW Steel Ltd"
    ],
    image: "src/ai_images/img17.png"
  },

  {
    name: "FRP Rectangular Tanks",
    desc: "Structurally reinforced rectangular tanks for plating, pickling and storage.",
    features: [
      "Material: FRP",
      "Reinforcement: External Ribbing",
      "Customization: Available"
    ],
    image: "src/ai_images/img18.webp"
  },

  {
    name: "HDPE Storage Tanks",
    desc: "Durable and versatile tanks made from High-Density Polyethylene.",
    features: [
      "Material: HDPE",
      "Configuration: Vertical, Horizontal",
      "Features: High Impact Strength"
    ],
    image: "src/ai_images/img15.jpg"
  },

  {
    name: "PP Reactor Vessels",
    desc: "Specialized vessels for chemical reactions and processing.",
    features: [
      "Material: PP / FRP",
      "Application: Chemical Processing",
      "Features: Custom Nozzle Configurations"
    ],
    image: "src/ai_images/img21.webp"
  },

 

  {
    name: "PP / FRP Vacuum Tanks",
    desc: "Tanks engineered to withstand negative pressure for vacuum applications.",
    features: [
      "Material: PP / FRP",
      "Application: Vacuum Processes",
      "Features: Reinforced Structure"
    ],
    image: "src/ai_images/img40.jpg"
  },

  {
    name: "FRP Storage Tanks",
    desc: "Large-scale FRP tanks for industrial liquid storage applications.",
    features: [
      "Material: FRP",
      "Usage: Chemical & Industrial Storage",
      "Design: Vertical Cylindrical"
    ],
    image: "src/ai_images/img41.png"
  },

  {
    name: "Pipes & Fittings",
    desc: "FRP and PP piping systems for chemical and industrial fluid transfer.",
    features: [
      "Material: FRP / PP",
      "Application: Chemical Plants",
      "Features: Corrosion Resistant"
    ],
    image: "src/ai_images/img42.png"
  },

  {
    name: "FRP / PP FRP Ductings",
    desc: "Industrial ducting systems for fumes, gases and ventilation.",
    features: [
      "Material: FRP / PP FRP",
      "Application: Ventilation Systems",
      "Features: Chemical Resistant"
    ],
    image: "src/ai_images/img43.png"
  },

  {
    name: "FRP Scrubbers & Stack",
    desc: "Air pollution control equipment for gas scrubbing and exhaust.",
    features: [
      "Material: FRP",
      "Application: Air Pollution Control",
      "Compliance: Industrial Standards"
    ],
    image: "src/ai_images/img44.png"
  },

  {
    name: "Industrial Vessels",
    desc: "Heavy-duty industrial vessels designed for chemical and process industries.",
    features: [
      "Material: FRP / PP",
      "Capacity: Customizable",
      "Application: Process Industries"
    ],
    image: "src/ai_images/img45.png"
  },

  {
    name: "Centrifugal Blower",
    desc: "High-performance centrifugal blowers for industrial air handling.",
    features: [
      "Material: FRP",
      "Application: Industrial Ventilation",
      "Features: High Efficiency"
    ],
    image: "src/ai_images/img46.png"
  }
  ];

  const applications = [
    { icon: <Factory />, title: "Industrial Cladding", desc: "Factory walls, partitions, utilities" },
    { icon: <HardHat />, title: "Construction", desc: "False ceilings, wall panels" },
    { icon: <Truck />, title: "Transportation", desc: "Bus & truck interiors, coverings" },
    { icon: <Shield />, title: "Clean Rooms", desc: "Pharma / food-grade interiors" },
    { icon: <Thermometer />, title: "Cold Storage", desc: "Insulated panels & partitions" },
    { icon: <Zap />, title: "Electrical", desc: "Cable trays, enclosures, covers" }
  ];

  const certifications = [
    // "ISO 9001:2015 Certified",
    // "ISO 14001:2015",
    "Fire Safety Certified",
    "BIS Approved",
    "RoHS Compliant",
    "Green Building Material"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  // ✅ optional: small UX – pause slider when hovering hero (doesn't remove auto change, just pauses on hover)
  const handleHeroEnter = () => setIsPlaying(false);
  const handleHeroLeave = () => setIsPlaying(true);

  // ✅ NEW: Close mobile menu on resize to desktop + lock scroll while open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => {
      if (window.innerWidth > 968) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToContactAndClose = () => {
    closeMobileMenu();
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>

      {/* GLOBAL CSS RESET */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          /* ✅ NEW: responsive variables (inline styles can use these) */
          --section-pad: 80px 5%;
          --hero-h: 90vh;
          --btn-pad: 12px 28px;
          --about-col-min: 480px;
          --about-img-h: 420px;
          --quote-pad: 60px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { width: 100%; max-width: 100%; margin: 0; padding: 0; overflow-x: hidden; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
        html { scroll-behavior: smooth; }
        .hover-white:hover { color: white !important; }
        .hover-scale:hover { transform: translateY(-5px) scale(1.03); box-shadow: 0 15px 30px rgba(0,0,0,0.12); transition: all 0.4s ease; }
        .btn-hover:hover { background-color: #8e6e4a !important; transform: scale(1.05); transition: all 0.3s; }
        .text-gold { color: ${COLORS.gold}; }
        .text-accent { color: ${COLORS.accent}; }
        .carousel-slide { transition: opacity 0.8s ease-in-out; }
        .carousel-dot.active { background-color: ${COLORS.gold} !important; }

        /* ✅ NEW: section hover effect (applied to every section wrapper) */
        .section-hover { position: relative; transition: transform .35s ease, box-shadow .35s ease; }
        .section-hover:hover { transform: translateY(-2px); }
        .section-hover:after {
          content: "";
          position: absolute;
          left: 5%;
          right: 5%;
          bottom: 22px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(163,127,87,0.35), transparent);
          opacity: 0;
          transition: opacity .35s ease;
          pointer-events: none;
        }
        .section-hover:hover:after { opacity: 1; }

        /* ✅ NEW: link hover */
        .nav-link { position: relative; transition: color .25s ease; }
        .nav-link:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 0;
          background: ${COLORS.gold};
          transition: width .25s ease;
        }
        .nav-link:hover { color: ${COLORS.gold} !important; }
        .nav-link:hover:after { width: 100%; }

        /* ✅ NEW: card glow */
        .card-glow { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .card-glow:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 20px 45px rgba(0,0,0,0.12); border-color: rgba(163,127,87,0.35) !important; }

        /* ✅ NEW: icon hover */
        .icon-hover { transition: transform .25s ease; }
        .icon-hover:hover { transform: translateY(-2px) scale(1.08); }

        /* ✅ NEW: mobile menu UI */
        .nav-mobile-actions { display: none; align-items: center; gap: 10px; }
        .mobile-menu-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.08);
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
        }
        .mobile-drawer {
          width: min(92vw, 380px);
          height: 100%;
          background: #fff;
          box-shadow: -20px 0 50px rgba(0,0,0,0.18);
          padding: 18px;
          display: flex;
          flex-direction: column;
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 8px 6px 14px;
          border-bottom: 1px solid #eee;
          margin-bottom: 14px;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px 6px;
        }
        .mobile-nav a {
          text-decoration: none;
          color: #111;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 12px 12px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #fafafa;
        }
        .mobile-nav a:hover { background: #f4f4f4; }
        .mobile-nav a.active { color: ${COLORS.gold}; border-color: rgba(163,127,87,0.35); background: rgba(163,127,87,0.08); }
        .mobile-drawer-footer {
          margin-top: auto;
          padding: 14px 6px 6px;
          border-top: 1px solid #eee;
        }
        .mobile-cta-row { display: grid; grid-template-columns: 1fr; gap: 10px; }

        @media (max-width: 968px) {
          :root {
            --section-pad: 70px 18px;
            --hero-h: 78vh;
            --btn-pad: 11px 22px;
            --about-col-min: 280px;
            --about-img-h: 320px;
            --quote-pad: 26px;
          }

          .nav-links-desktop { display: none !important; }
          .nav-mobile-actions { display: inline-flex !important; }
          .hero-title { font-size: 2.5rem !important; }
          .process-line { display: none !important; }
          .process-step { width: 100% !important; margin-bottom: 2.5rem !important; }
          .grid-responsive { grid-template-columns: 1fr !important; }
          .hero-content { padding-top: 2rem; max-width: 90% !important; }
          .carousel-controls { display: none !important; }
        }

        @media (max-width: 520px) {
          :root {
            --section-pad: 64px 14px;
            --hero-h: 74vh;
            --btn-pad: 11px 18px;
            --about-img-h: 280px;
          }
          .hero-title { font-size: 2.05rem !important; }
        }
          /* 🔒 FORCE TEXT VISIBILITY (HOME PAGE ONLY) */


.section-hover {
  color: inherit;
}
/* Light sections ke cards ke liye */
.light-section .card-glow * {
  color: #222;
}

      `}} />

      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: COLORS.dark, color: "#ccc", fontSize: "12px",
          padding: "10px 5%", display: "flex", justifyContent: "space-between", alignItems: "center",
          borderBottom: "1px solid #333", width: "100%"
        }}
      >
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <span style={flexRow}><MapPin size={14} color={COLORS.gold} /> 46,appa pada,,kurar village 166/2, Ramchandra Vishwakarma Chawl Rajawali,401208,Vasai, Mumbai-400097, Maharashtra, India</span>
          <span style={flexRow}><Mail size={14} color={COLORS.gold} /> info@devplastic.com</span>
          <span style={flexRow}><Phone size={14} color={COLORS.gold} /> +91 8043887774</span>
        </div>
        <div style={flexRow}>
          <Facebook size={14} className="hover-white icon-hover" style={{ cursor: 'pointer' }} />
          <Twitter size={14} className="hover-white icon-hover" style={{ cursor: 'pointer' }} />
          <Instagram size={14} className="hover-white icon-hover" style={{ cursor: 'pointer' }} />
          <Linkedin size={14} className="hover-white icon-hover" style={{ cursor: 'pointer' }} />
        </div>
      </motion.div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{
          position: "sticky", top: 0, zIndex: 1000, backgroundColor: COLORS.white,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "15px 5%",
          display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",
          gap: "12px", flexWrap: "wrap" // ✅ NEW: better wrap on mobile
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
  <img
    src="/src/coimages/logo.jpg"
    alt="Dev Plastics Logo"
    style={{
      height: "100px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</div>


        <div className="nav-links-desktop" style={{ display: "flex", gap: "25px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", alignItems: "center" }}>
          <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>
            Home
          </Link>

          <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Services
          </Link>

          {/* <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Services
          </Link> */}

          <Link to="/about" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            About
          </Link>

          <Link to="/gallery" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Gallery
          </Link> 

          <Link to="/contact" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Contact
          </Link>

          <Link to="/login" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Login Admin
          </Link>

          <Search size={18} className="icon-hover" style={{ cursor: 'pointer' }} />
        </div>

        <motion.button
          {...hoverSoft}
          style={btnStyle}
          className="btn-hover"
          onClick={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get A Quote →
        </motion.button>

        {/* ✅ NEW: Mobile actions (Search + Hamburger) */}
        <div className="nav-mobile-actions">
          <Search size={18} className="icon-hover" style={{ cursor: "pointer" }} />
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* ✅ NEW: MOBILE MENU DRAWER (nothing removed) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ x: 60, opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div style={{ display: "flex", alignItems: "center" }}>
  <img
    src="/src/coimages/logo.jpg"
    alt="Dev Plastics Logo"
    style={{
      height: "48px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</div>


                <button
                  className="mobile-menu-btn"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mobile-nav">
                <Link to="/" className="active" onClick={closeMobileMenu}>Home</Link>
                <Link to="/products" onClick={closeMobileMenu}>Services</Link>
                {/* <Link to="/services" onClick={closeMobileMenu}>Services</Link> */}
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                {/* <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link> */}
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                <Link to="/login" onClick={closeMobileMenu}>Login Admin</Link>
              </div>

              <div className="mobile-drawer-footer">
                <div className="mobile-cta-row">
                  <motion.button
                    {...hoverSoft}
                    style={{ ...btnStyle, width: "100%", borderRadius: 12 }}
                    className="btn-hover"
                    onClick={scrollToContactAndClose}
                  >
                    Get A Quote →
                  </motion.button>

                  <motion.button
                    {...hoverSoft}
                    style={{
                      ...btnStyle,
                      width: "100%",
                      borderRadius: 12,
                      backgroundColor: "transparent",
                      border: `1px solid ${COLORS.gold}`,
                      color: COLORS.gold
                    }}
                    className="btn-hover"
                    onClick={closeMobileMenu}
                  >
                    Close Menu
                  </motion.button>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 16, paddingLeft: 6 }}>
                  <Facebook size={18} className="icon-hover" style={{ cursor: 'pointer', color: "#666" }} />
                  <Instagram size={18} className="icon-hover" style={{ cursor: 'pointer', color: "#666" }} />
                  <Linkedin size={18} className="icon-hover" style={{ cursor: 'pointer', color: "#666" }} />
                  <Twitter size={18} className="icon-hover" style={{ cursor: 'pointer', color: "#666" }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION WITH CONTROLLED CAROUSEL */}
      <header
        id="home"
        onMouseEnter={handleHeroEnter}
        onMouseLeave={handleHeroLeave}
        style={{
          position: "relative",
          height: "var(--hero-h, 90vh)", // ✅ NEW: responsive var
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        {/* Background Images */}
        <div ref={carouselRef} style={{ position: "absolute", inset: 0, display: "flex" }}>
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className="carousel-slide"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: idx === currentSlide ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                transform: idx === currentSlide ? "scale(1.02)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 1 }} />

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ position: "relative", zIndex: 2, color: "white", padding: "0 5%", maxWidth: "800px", width: "100%" }}
        >
          <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
            Precision Company • FRP • Industrial Solutions
          </p>
          <h1 className="hero-title" style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
            Advanced <span className="text-gold">Plastic & FRP Company</span> <br /> For Modern Industry
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px' }}>
            We specialize in high-quality FRP, GRP, PVC Company with precision engineering for industrial, commercial, and architectural applications.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <motion.button {...hoverSoft} style={{ ...btnStyle }} className="btn-hover">
              Explore Products
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <div className="carousel-controls" style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", alignItems: "center", gap: "20px" }}>
          <motion.button
            {...hoverSoft}
            onClick={prevSlide}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: idx === currentSlide ? COLORS.gold : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>

          <motion.button
            {...hoverSoft}
            onClick={nextSlide}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}
          >
            <ChevronRight size={20} />
          </motion.button>

          <motion.button
            {...hoverSoft}
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', marginLeft: '10px' }}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          backgroundColor: "#f4f6f8",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(var(--about-col-min, 480px), 1fr))", // ✅ NEW responsive
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="src/ai_images/img.png"
              alt="Industrial Facility"
              style={{
                width: "100%",
                height: "var(--about-img-h, 420px)", // ✅ NEW responsive
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: 1.8,
                color: "#555",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              ABOUT OUR COMPANY
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 700,
                color: "#111",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              Reliable Plastic & FRP Fabrication Solutions
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "#555",
                marginBottom: 20,
                maxWidth: 560,
              }}
            >
              Established in 2017 at Malad East, Mumbai, Maharashtra,
               We Dev Plastic Company are Sole Proprietorship (Individual) based firm, 
               involved as the Manufacturer of Storage Tank, Scrubber System, FRP Water Tank, 
               PP Ducting, Scrubbing System and much more. All our products are getting widely acclaimed 
               among the large clientele for their exclusive designs, superior quality, and reliability.
               Apart from this, our ability to maintain timelines as well as quality in the assortment, 
               providing cost effective solutions and assurance to make timely shipment of the orders placed by
               customers have assisted us positioning our name in the list of top-notch companies of the industry.
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "#555",
                marginBottom: 32,
                maxWidth: 560,
              }}
            >
              With proven experience in fabrication and installation, we support
              projects from planning to execution while meeting safety and
              performance standards.
            </p>

            <motion.button
              {...hoverSoft}
              style={{
                ...btnStyle,
                padding: "14px 40px",
              }}
              className="btn-hover"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      {/* ================= END ABOUT SECTION ================= */}

      {/* NEW: MATERIALS WE FABRICATE SECTION */}
      <motion.section id="materials" className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={{ ...sectionStyle, backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Our Services</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Industries We Serve</motion.h2>
          <motion.p variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto', color: COLORS.lightText }}>
            We work with a wide range of high-performance plastic materials for various industrial applications
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {materials.map((material, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 22px 45px rgba(0,0,0,0.14)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: "1px solid #eee" }}
              className="hover-scale card-glow"
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <motion.img
                  src={material.image}
                  alt={material.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: COLORS.dark }}>{material.name}</h3>
                <p style={{ color: '#555', marginBottom: '15px', fontSize: '14px' }}>{material.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {material.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px' }}>
                      <motion.span {...iconHover} style={{ display: "inline-flex" }}>
                        <CheckCircle size={14} color={COLORS.gold} />
                      </motion.span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      
      {/* <motion.section id="services" className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Our Services</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Services</motion.h2>
        </div>
        <div style={grid3}>
         <ServiceCard
  icon={<PenTool size={36} />}
  title="Chemical & Process Industries"
  desc="Advanced and reliable solutions for chemical processing and pharmaceutical manufacturing."
/>

         <ServiceCard
  icon={<Layers size={36} />}
  title="Metals, Mining & Infrastructure"
  desc="Providing robust infrastructure solutions across steel, mining, and construction sectors."
/>

          <ServiceCard
  icon={<Layers size={36} />}
  title="Water & Environmental Solutions"
  desc="Sustainable solutions for water treatment and environmental protection across desalination and pulp & paper industries."
/>
          <ServiceCard
  icon={<Layers size={36} />}
  title="OEM & Industrial Manufacturing"
  desc="Precision manufacturing solutions tailored for OEMs and telecom industrial applications."
/>
          <ServiceCard
  icon={<Layers size={36} />}
  title="Energy & Renewables"
  desc="Advanced clean energy and renewable technology solutions across oil & gas, agrochemical, and viscose fiber sectors."
/>

          <ServiceCard icon={<Wrench size={36} />} title="Assembly & Installation" desc="Complete assembly and on-site installation services." />
          <ServiceCard icon={<Package size={36} />} title="Prototyping" desc="Rapid prototyping for design validation and testing." />
         
        </div>
      </motion.section> */}

      {/* NEW: APPLICATIONS SECTION */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={{ ...sectionStyle, backgroundColor: COLORS.dark, color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={{ ...headingSmall, color: COLORS.gold }}>Industries</motion.span>
          <motion.h2 variants={fadeInUp} style={{ ...headingLarge, color: 'white' }}>Our Applications</motion.h2>
          <motion.p variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto', color: '#aaa' }}>
            We serve various industries with custom plastic fabrication solutions
          </motion.p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 22px 45px rgba(0,0,0,0.35)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ backgroundColor: '#222', padding: '30px', borderRadius: '8px', textAlign: 'center', border: "1px solid #2b2b2b" }}
              className="card-glow"
            >
              <motion.div
                style={{ marginBottom: '20px', color: COLORS.gold, display: 'flex', justifyContent: 'center' }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.25 }}
              >
                {React.cloneElement(app.icon as any, { size: 40 })}
              </motion.div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{app.title}</h3>
              <p style={{ color: '#aaa', fontSize: '14px' }}>{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* NEW: CERTIFICATIONS & STANDARDS */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Quality Assurance</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Certifications & Standards</motion.h2>
          <motion.p variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto', color: COLORS.lightText }}>
            We maintain the highest quality standards in all our fabrication processes
          </motion.p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: "1px solid #eee" }}
              className="card-glow"
            >
              <motion.div {...iconHover} style={{ display: "inline-flex", marginBottom: 12 }}>
                <Shield size={32} color={COLORS.gold} />
              </motion.div>
              <span
  style={{
    fontWeight: '600',
    fontSize: '14px',
    color: '#222'   // ✅ FIX
  }}
>
  {cert}
</span>

            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section id="projects" className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={sectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={headingSmall}>Our Work</span>
            <h2 style={{ ...headingLarge, marginBottom: 0 }}>Recent Works</h2>
          </div>
          {/* <motion.button
            {...hoverSoft}
            style={{ ...btnStyle, backgroundColor: 'transparent', border: `1px solid ${COLORS.gold}`, color: COLORS.gold }}
            className="btn-hover"
          >
            View All Projects
          </motion.button> */}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }} className="grid-responsive">
          <ProjectCard img="src/coimages/ectfe-and-frp.jpg" title="" cat="" />
          <ProjectCard img="src/coimages/frp-pipes-fitting.jpg" title="" cat="" />
          <ProjectCard img="src/coimages/distillation-plants.jpg" title="" cat="" />
          <ProjectCard img="src/coimages/frp-scrubbers-and-stack.jpg" title="" cat="" />
          <ProjectCard img="src/coimages/frp-ductings.jpg" title="" cat="" />
          <ProjectCard img="src/ai_images/imgs38.jpg" title="" cat="" />
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerChildren} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1920")', backgroundSize: "cover", padding: "100px 5%", position: "relative", color: "white", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "30px" }}>
          <StatBox num="500+" label="Clients" icon={<Users size={32} />} />
          <StatBox num="1200+" label="Projects" icon={<Award size={32} />} />
          <StatBox num="50+" label="Team" icon={<Users size={32} />} />
          <StatBox num="15+" label="Years" icon={<Clock size={32} />} />
        </div>
      </motion.section>

      {/* NEW: TECHNOLOGY & EQUIPMENT */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerChildren} style={{ ...sectionStyle, backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Our Technology</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Advanced Fabrication Equipment</motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          <TechCard title="CNC Routing Machines" desc="High-precision computer-controlled routing for complex shapes" icon={<Settings />} />
          <TechCard title="Thermoforming Equipment" desc="Heat-based forming for consistent plastic molding" icon={<Thermometer />} />
          <TechCard title="Laser Cutting Systems" desc="Precision laser cutting for clean edges and intricate designs" icon={<Zap />} />
          <TechCard title="Vacuum Forming Presses" desc="Large-scale vacuum forming for architectural panels" icon={<Gauge />} />
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerChildren} style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Why Choose Us</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Why Dev Plastics?</motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px", alignItems: 'center' }} className="grid-responsive">
          <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <FeatureRow title="Precision Engineering" desc="Tight tolerances and exact specifications for every project." />
            <FeatureRow title="Expert Team" desc="Skilled fabricators with decades of combined experience." />
            <FeatureRow title="Quality Materials" desc="We source only the highest-grade plastics and composites." />
            <FeatureRow title="Timely Delivery" desc="Project management ensures on-time completion." />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ height: '400px', display: 'flex', gap: '10px' }}
          >
            <motion.img
              src="src/ai_images/img1.png"
              style={{ width: '60%', height: '100%', objectFit: 'cover', borderRadius: '50px 0 0 0' }}
              alt="Work"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <motion.img
                src="src/ai_images/img6.jpg"
                style={{ height: '50%', objectFit: 'cover', borderRadius: '0 50px 0 0' }}
                alt="Work"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src="src/ai_images/img10.jpg"
                style={{ height: '50%', objectFit: 'cover', borderRadius: '0 0 50px 0' }}
                alt="Work"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WORKING PROCESS */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={{ ...sectionStyle, backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Our Process</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>How We Work</motion.h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", position: "relative" }}>
          <div className="process-line" style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', borderTop: '2px dashed #ccc', zIndex: 0 }}></div>
          <ProcessItem num="01" title="Consultation" desc="Understanding requirements" />
          <ProcessItem num="02" title="Design" desc="CAD & 3D modeling" />
          <ProcessItem num="03" title="Fabrication" desc="Precision manufacturing" />
          <ProcessItem num="04" title="Quality Check" desc="Rigorous testing" />
          <ProcessItem num="05" title="Installation" desc="On-site implementation" />
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span variants={fadeIn} style={headingSmall}>Testimonials</motion.span>
          <motion.h2 variants={fadeInUp} style={headingLarge}>Client Reviews</motion.h2>
        </div>
        <div style={grid3}>
          <ReviewCard name="Aditi Singh" role="Soft Business LLC" text="The FRP panels they fabricated for our factory have exceeded expectations in both durability and appearance." />
          <ReviewCard name="Sonam Gupta" role="Tech Solutions" text="Precision fabrication with tight deadlines met. Excellent quality control throughout the project." />
          <ReviewCard name="Om Dighe" role="Logistics Corp" text="Their custom molding service created perfect components for our specialized equipment. Highly recommended." />
        </div>
      </motion.section>

      {/* ✅ NEW: FAQ SECTION (added, nothing removed) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          backgroundColor: "#faf8f5",
          padding: "110px 20px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 2,
                color: "#b08968",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              FAQ
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 700,
                color: "#111827",
                marginBottom: 14,
              }}
            >
              Frequently Asked Questions
            </h2>

            <p
              style={{
                maxWidth: 720,
                margin: "0 auto",
                fontSize: 16,
                lineHeight: 1.8,
                color: "#6b7280",
              }}
            >
              Quick answers about FRP and plastic fabrication, material
              selection, installation process, and execution timelines.
            </p>
          </div>

          {/* FAQ list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <FAQItem
              q="Where are FRP panels commonly used?"
              a="FRP panels are used in industrial buildings, clean rooms, food processing units, pharmaceutical plants, chemical industries, laboratories, and moisture-prone environments."
            />

            <FAQItem
              q="How is the material thickness decided?"
              a="Material thickness is selected based on load conditions, application type, chemical exposure, impact requirements, and expected service life."
            />

            <FAQItem
              q="Do you provide fabrication and installation services?"
              a="Yes, we provide end-to-end services including fabrication, site installation, finishing, trims, sealing, and final handover."
            />

            <FAQItem
              q="What is the usual project timeline?"
              a="Timelines depend on project size and complexity. Most projects are planned with phased manufacturing and fast, organized execution."
            />
          </div>

        </div>
      </motion.section>

      {/* NEW: QUOTE REQUEST SECTION */}
      <motion.section id="contact" className="section-hover" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerChildren} style={sectionStyle}>
        <motion.div
          {...hoverLift}
          style={{ backgroundColor: COLORS.accent, color: 'white', padding: "var(--quote-pad, 60px)", borderRadius: '12px', textAlign: 'center' }} // ✅ responsive padding
        >
          <motion.div {...iconHover} style={{ display: "inline-flex" }}>
            <Quote size={48} color={COLORS.gold} style={{ margin: '0 auto 20px' }} />
          </motion.div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Get Your Custom Quote</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', opacity: 0.9 }}>
            Send us your project details and we'll provide a detailed quote within 24 hours
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                {...hoverSoft}
                style={{ ...btnStyle, padding: "15px 40px" }}
                className="btn-hover"
              >
                Contact Us
              </motion.button>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                {...hoverSoft}
                style={{ ...btnStyle, padding: "15px 40px" }}
                className="btn-hover"
              >
                Request Quote
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        className="section-hover"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        style={{ backgroundColor: COLORS.dark, color: "white", padding: "100px 5%", textAlign: "center", position: "relative" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.h2 variants={fadeInUp} style={{ fontSize: "3.2rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Start Your Fabrication Project
          </motion.h2>
          <motion.p variants={fadeIn} style={{ fontSize: "1.3rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            We specialize in high-performance <span className="text-gold">plastic fabrication</span> — from custom FRP panels and industrial cladding to precision components and architectural installations.
          </motion.p>
          <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} style={{ ...btnStyle, padding: "16px 40px", fontSize: "15px", marginRight: '20px' }} className="btn-hover">
            Get Started
          </motion.button>
          <motion.button variants={fadeInUp} whileHover={{ scale: 1.05 }} style={{ ...btnStyle, backgroundColor: 'transparent', border: '1px solid white', padding: "16px 40px", fontSize: "15px" }} className="btn-hover">
            Call Now
          </motion.button>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px", fontSize: "14px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
            <div>
             <div style={{ display: "flex", alignItems: "center" }}>
  <img
    src="/src/coimages/logo.jpg"
    alt="Dev Plastics Logo"
    style={{
      height: "90px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</div>

              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Precision plastic fabrication services including FRP molding, PVC fabrication, acrylic work, and custom plastic components for industrial and commercial applications.
              </p>
              <p style={{ color: COLORS.gold, fontWeight: 'bold' }}>
                Transforming ideas into precision-fabricated reality.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
                    Home
                  </Link>
                </li>

                <li style={{ marginBottom: "12px" }}>
                  <Link to="/products" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
                    Services
                  </Link>
                </li>

                <li style={{ marginBottom: "12px" }}>
                  <Link to="/gallery" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#services" className="nav-link" style={{ color: '#ccc', textDecoration: 'none' }}>FRP Fabrication</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#services" className="nav-link" style={{ color: '#ccc', textDecoration: 'none' }}>Custom Molding</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#services" className="nav-link" style={{ color: '#ccc', textDecoration: 'none' }}>CNC Machining</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#services" className="nav-link" style={{ color: '#ccc', textDecoration: 'none' }}>Prototyping</a></li>
                <li><a href="#services" className="nav-link" style={{ color: '#ccc', textDecoration: 'none' }}>Installation</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={16} color={COLORS.gold} />
                  <span>Sector 4, Industrial Area, Mumbai - 400072</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color={COLORS.gold} />
                  <span>+91 98765 43210</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color={COLORS.gold} />
                  <span>info@devplasticsfab.com</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <Facebook size={20} color="#ccc" className="icon-hover" style={{ cursor: 'pointer' }} />
                <Instagram size={20} color="#ccc" className="icon-hover" style={{ cursor: 'pointer' }} />
                <Linkedin size={20} color="#ccc" className="icon-hover" style={{ cursor: 'pointer' }} />
                <Twitter size={20} color="#ccc" className="icon-hover" style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <p>© {new Date().getFullYear()} Dev Plastic Fabrication. All rights reserved.</p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#" className="nav-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px' }}>Privacy Policy</a>
              <a href="#" className="nav-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px' }}>Terms & Conditions</a>
              <a href="#" className="nav-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px' }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

// ── REUSABLE COMPONENTS ─────────────────────────────────────────────────────
const sectionStyle = { padding: "var(--section-pad, 80px 5%)", width: "100%" }; // ✅ responsive variable
const flexRow = { display: "flex", alignItems: "center", gap: "10px" };
const btnStyle = {
  backgroundColor: COLORS.gold,
  color: "white",
  padding: "var(--btn-pad, 12px 28px)", // ✅ responsive variable
  border: "none",
  fontSize: "13px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  cursor: "pointer",
  letterSpacing: "1px",
  borderRadius: "4px"
};
const headingSmall = { color: COLORS.gold, textTransform: "uppercase" as const, letterSpacing: "2px", fontSize: "13px", fontWeight: "bold", marginBottom: "10px", display: "block" };
const headingLarge = { fontSize: "38px", fontWeight: "800", marginBottom: "20px", lineHeight: "1.2", color: "#222" };
const grid3 = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" };

// const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
//   <motion.div
//     variants={fadeInUp}
//     whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
//     transition={{ duration: 0.35, ease: "easeOut" }}
//     style={{ backgroundColor: "white", padding: "35px", borderRadius: "8px", border: "1px solid #eee" }}
//     className="hover-scale card-glow"
//   >
//     <motion.div className="text-gold" style={{ marginBottom: '20px' }} whileHover={{ scale: 1.08, rotate: -2 }} transition={{ duration: 0.25 }}>
//       {icon}
//     </motion.div>
//     <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h3>
//     <p style={{ color: COLORS.lightText, fontSize: '14px', lineHeight: '1.6' }}>{desc}</p>
//   </motion.div>
// );

const TechCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", border: "1px solid #eee" }}
    className="card-glow"
  >
    <motion.div className="text-gold" style={{ marginBottom: '20px' }} whileHover={{ scale: 1.08, rotate: -2 }} transition={{ duration: 0.25 }}>
      {React.cloneElement(icon as any, { size: 36 })}
    </motion.div>
    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: COLORS.lightText, fontSize: '14px', lineHeight: '1.6' }}>{desc}</p>
  </motion.div>
);

const ProjectCard = ({ img, title, cat }: { img: string; title: string; cat: string }) => (
  <motion.div variants={fadeInUp} whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }}>
    <div style={{ overflow: 'hidden', height: '350px', marginBottom: '20px', borderRadius: "8px" }} className="card-glow">
      <motion.img
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        src={img}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt="Project"
      />
    </div>
    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</h3>
    <p style={{ color: COLORS.lightText, fontSize: '14px' }}>{cat}</p>
  </motion.div>
);

const StatBox = ({ num, label, icon }: { num: string; label: string; icon: React.ReactNode }) => (
  <motion.div variants={fadeInUp} whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
    <motion.div className="text-gold" whileHover={{ scale: 1.08 }} transition={{ duration: 0.25 }}>
      {icon}
    </motion.div>
    <span style={{ fontSize: '32px', fontWeight: '800' }}>{num}</span>
    <span style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>{label}</span>
  </motion.div>
);

const FeatureRow = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div variants={fadeInUp} whileHover={{ x: 6 }} transition={{ duration: 0.25 }} style={{ display: 'flex', gap: '20px' }}>
    <motion.div className="text-gold" whileHover={{ scale: 1.08, rotate: -2 }} transition={{ duration: 0.25 }}>
      <CheckCircle size={28} />
    </motion.div>
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{title}</h3>
      <p style={{ color: COLORS.lightText, fontSize: '14px' }}>{desc}</p>
    </div>
  </motion.div>
);

const ProcessItem = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <motion.div className="process-step" variants={fadeInUp} whileHover={{ y: -8 }} transition={{ duration: 0.35 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
    <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px dashed #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px', backgroundColor: 'white', position: 'relative' }}>
      <span style={{ position: 'absolute', top: '-10px', backgroundColor: '#f0f0f0', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '4px', color: '#555' }}>{num}</span>
      <Settings size={24} color={COLORS.gold} />
    </div>
    <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{title}</h3>
    <p style={{ color: COLORS.lightText, fontSize: '12px' }}>{desc}</p>
  </motion.div>
);

const ReviewCard = ({ name, role, text }: { name: string; role: string; text: string }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10, boxShadow: "0 20px 45px rgba(0,0,0,0.12)" }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: "1px solid #eee" }}
    className="card-glow"
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
      <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.25 }} style={{ width: '35px', height: '35px', backgroundColor: COLORS.gold, borderRadius: '50%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
        {name[0]}
      </motion.div>
      <div>
        <h4 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{name}</h4>
        <span style={{ fontSize: '11px', color: '#888' }}>{role}</span>
      </div>
    </div>
    <p style={{ color: '#555', fontSize: '13px', lineHeight: '1.6' }}>"{text}"</p>
    <div style={{ display: 'flex', gap: '5px', marginTop: '15px', color: '#FFD700' }}>
      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
    </div>
  </motion.div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 14,
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        border: "1px solid #eee",
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "22px 26px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#1f2937",
          }}
        >
          {q}
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#b08968",
            lineHeight: 1,
          }}
        >
          {open ? "−" : "+"}
        </div>
      </div>

      {open && (
        <div
          style={{
            padding: "0 26px 22px",
            fontSize: 15,
            lineHeight: 1.7,
            color: "#6b7280",
            maxWidth: 900,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
};

export default Home;
