
'use client';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Search, Users, Clock, Target, Shield,
  TrendingUp, Globe, Heart, Zap, ChevronRight,
  Quote, Award as AwardIcon, X
} from 'lucide-react';

// ── COLORS & ANIMATIONS ─────────────────────────────────────────────────────
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ── ABOUT US PAGE ───────────────────────────────────────────────────────────
export default function AboutUs() {
  const heroImages = [
    "src/ai_images/img42.png",
     "src/ai_images/img24.jpg",
      "src/ai_images/im31.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const milestones = [
  //   { year: "2017", title: "Company Founded", description: "Started as a small plastic fabrication workshop" },
  //   { year: "2019", title: "First Major Contract", description: "Secured contract with industrial manufacturer" },
  //   { year: "2020", title: "Technology Upgrade", description: "Invested in CNC and automated fabrication" },
  //   { year: "2021", title: "Expansion", description: "Moved to larger facility with increased capacity" },
  //   { year: "2022", title: "Quality Certification", description: "Achieved ISO 9001:2015 certification" },
  //   { year: "2026", title: "National Presence", description: "Expanded services to multiple states" }
  // ];

  // const teamMembers = [
  //   { name: "Rajesh Sharma", position: "Founder & CEO", experience: "20+ years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  //   { name: "Priya Patel", position: "Technical Director", experience: "15+ years", image: "https://img.freepik.com/free-photo/young-woman-blue-sweater-autumn-park_1303-11368.jpg?semt=ais_hybrid&w=740&q=80" },
  //   // ✅ FIX: w-400 -> w=400 (image wasn't loading in many cases)
  //   { name: "Amit Verma", position: "Production Head", experience: "12+ years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  //   { name: "Neha Singh", position: "Quality Manager", experience: "10+ years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }
  // ];

  const values = [
    { icon: <Shield />, title: "Quality Excellence", description: "Uncompromising quality standards in every fabrication" },
    { icon: <Target />, title: "Precision", description: "Attention to detail in every cut, bend, and assembly" },
    { icon: <Heart />, title: "Customer Focus", description: "Building lasting relationships through exceptional service" },
    { icon: <Zap />, title: "Innovation", description: "Embracing new technologies and fabrication methods" },
    { icon: <Users />, title: "Teamwork", description: "Collaborative approach to problem-solving" },
    { icon: <Globe />, title: "Sustainability", description: "Environmentally responsible fabrication practices" }
  ];

  const certifications = [
    // { name: "ISO 9001:2015", description: "Quality Management System" },
    // { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "Fire Safety Certified", description: "Fire retardant materials" },
    { name: "BIS Approved", description: "Bureau of Indian Standards" },
    { name: "RoHS Compliant", description: "Restriction of Hazardous Substances" },
    { name: "Green Building Material", description: "Eco-friendly certification" }
  ];

  // Auto change image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ✅ NEW: close menu on resize + lock body scroll while menu open
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
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      backgroundColor: COLORS.white
    }}>

      {/* GLOBAL CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root{
          --hero-h: 70vh;
          --hero-pad: 0 5%;
          --section-pad: 100px 5%;
        }

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          min-height: 100vh !important;
          overflow-x: hidden !important;
        }

        * { box-sizing: border-box; }

        .hover-scale:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
        }

        .btn-hover:hover {
          background-color: #8e6e4a !important;
          transform: scale(1.05);
          transition: all 0.3s;
        }

        .text-gold { color: ${COLORS.gold}; }
        .text-accent { color: ${COLORS.accent}; }

        .timeline-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 40px;
        }

        .timeline-item:before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          background: ${COLORS.gold};
          border-radius: 50%;
        }

        .timeline-item:after {
          content: '';
          position: absolute;
          left: 5px;
          top: 20px;
          width: 2px;
          height: calc(100% + 20px);
          background: ${COLORS.gold}20;
        }

        .timeline-item:last-child:after {
          display: none;
        }

        .value-card:hover {
          transform: translateY(-10px);
          border-color: ${COLORS.gold};
        }

        /* ✅ NEW: Mobile menu styles (same hamburger style like your image: black square + white circle + 2 lines) */
        .nav-mobile-actions { display: none; align-items: center; gap: 10px; }
        .mobile-menu-btn {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.10);
          background: #111;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
        }
        .menu-icon-badge{
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: #fff;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .menu-lines{
          width: 18px;
          height: 12px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }
        .menu-lines span{
          height: 3px;
          border-radius: 999px;
          background: #111;
          display:block;
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 3000;
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
        .mobile-close-btn{
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

        @media (max-width: 968px) {
          :root{
            --hero-h: 62vh;
            --hero-pad: 0 16px;
            --section-pad: 80px 16px;
          }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-actions { display: inline-flex !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2.2rem !important; }
          .grid-responsive { grid-template-columns: 1fr !important; }
          .timeline-item { padding-left: 20px; }
        }

        @media (max-width: 520px) {
          :root{
            --hero-h: 58vh;
            --hero-pad: 0 14px;
            --section-pad: 72px 14px;
          }
        }
      `}} />

      {/* TOP BAR */}
      <div style={{
        backgroundColor: COLORS.dark,
        color: "#ccc",
        fontSize: "12px",
        padding: "10px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #333",
        width: "100%"
      }}>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <MapPin size={14} color={COLORS.gold} /> 46,appa pada,,kurar village 166/2, Ramchandra Vishwakarma Chawl Rajawali,401208,Vasai, Mumbai-400097, Maharashtra, India
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail size={14} color={COLORS.gold} /> info@devplastics.com
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Phone size={14} color={COLORS.gold} /> +91 8043887774
          </span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Facebook size={14} style={{ cursor: 'pointer' }} color="#ccc" />
          <Twitter size={14} style={{ cursor: 'pointer' }} color="#ccc" />
          <Instagram size={14} style={{ cursor: 'pointer' }} color="#ccc" />
          <Linkedin size={14} style={{ cursor: 'pointer' }} color="#ccc" />
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: COLORS.white,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        padding: "15px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 12,
        flexWrap: "wrap"
      }}>
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
          <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>Home</Link>
          <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Services</Link>
          {/* <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Services</Link> */}
          <Link to="/about" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>About</Link>
           <Link to="/gallery" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Gallery</Link> 
          <Link to="/contact" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Contact</Link>
          <Search size={18} style={{ cursor: 'pointer' }} />
        </div>

        <button style={{
          backgroundColor: COLORS.gold,
          color: "white",
          padding: "12px 28px",
          border: "none",
          fontSize: "13px",
          fontWeight: "700",
          textTransform: "uppercase",
          cursor: "pointer",
          letterSpacing: "1px",
          borderRadius: "4px"
        }} className="btn-hover">
          Get A Quote →
        </button>

        {/* ✅ NEW: Mobile actions (Search + Hamburger icon like your image) */}
        <div className="nav-mobile-actions">
          <Search size={18} style={{ cursor: 'pointer' }} />
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <div className="menu-icon-badge">
              <div className="menu-lines" aria-hidden="true">
                <span />
                <span />
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* ✅ NEW: MOBILE MENU DRAWER */}
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
              initial={{ x: 60, opacity: 0.92 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '20px', fontWeight: '900', lineHeight: 1 }}>
                    FIBER<span style={{ color: COLORS.gold }}>TECH</span>
                  </span>
                  <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
                    Plastic Fabrication
                  </span>
                </div>

                <button className="mobile-close-btn" aria-label="Close menu" onClick={closeMobileMenu}>
                  <X size={18} />
                </button>
              </div>

              <div className="mobile-nav">
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/products" onClick={closeMobileMenu}>Products</Link>
                <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                <Link to="/about" className="active" onClick={closeMobileMenu}>About</Link>
                {/* <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link> */}
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </div>

              <div className="mobile-drawer-footer">
                <div className="mobile-cta-row">
                  <button
                    style={{
                      backgroundColor: COLORS.gold,
                      color: "white",
                      padding: "12px 18px",
                      border: "none",
                      fontSize: "13px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      letterSpacing: "1px",
                      borderRadius: "12px",
                      width: "100%"
                    }}
                    className="btn-hover"
                    onClick={closeMobileMenu}
                  >
                    Get A Quote →
                  </button>

                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: COLORS.gold,
                      padding: "12px 18px",
                      border: `1px solid ${COLORS.gold}`,
                      fontSize: "13px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      letterSpacing: "1px",
                      borderRadius: "12px",
                      width: "100%"
                    }}
                    className="btn-hover"
                    onClick={closeMobileMenu}
                  >
                    Close Menu
                  </button>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 16, paddingLeft: 6 }}>
                  <Facebook size={18} style={{ cursor: 'pointer', color: "#666" }} />
                  <Instagram size={18} style={{ cursor: 'pointer', color: "#666" }} />
                  <Linkedin size={18} style={{ cursor: 'pointer', color: "#666" }} />
                  <Twitter size={18} style={{ cursor: 'pointer', color: "#666" }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header style={{
        position: "relative",
        height: "var(--hero-h, 70vh)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "var(--hero-pad, 0 5%)",
        overflow: "hidden"
      }}>
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("${img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: idx === currentImageIndex ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 0
            }}
          />
        ))}

        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          style={{ position: "relative", zIndex: 2, color: "white", maxWidth: "800px", paddingTop: "40px" }}
        >
          <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
            About Dev Plastics
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
            Dev Plastic <span className="text-gold">Company</span> <br /> Since 2017
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px' }}>
            We are a leading plastic  company with over 8 years of experience in delivering high-quality custom plastic solutions for industries across India.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {/* <button style={{
              backgroundColor: COLORS.gold,
              border: `1px solid ${COLORS.gold}`,
              color: "white",
              padding: "12px 28px",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              cursor: "pointer",
              letterSpacing: "1px",
              borderRadius: "4px"
            }} className="btn-hover">
              Our Story
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: `1px solid white`,
              color: "white",
              padding: "12px 28px",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              cursor: "pointer",
              letterSpacing: "1px",
              borderRadius: "4px"
            }} className="btn-hover">
              Meet Our Team
            </button> */}
          </div>
        </motion.div>
      </header>

      {/* COMPANY OVERVIEW */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "60px", alignItems: "center" }} className="grid-responsive">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
              Who We Are
            </span>
            <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
              Leading Plastic  Experts
            </h2>
            <p style={{ color: COLORS.lightText, lineHeight: "1.7", marginBottom: "30px", fontSize: "18px" }}>
            Established in 2017 at Malad East, Mumbai, Maharashtra, We Dev Plastic Company are Sole Proprietorship (Individual) based firm, involved as the Manufacturer of Storage Tank, Scrubber System, FRP Water Tank, PP Ducting, Scrubbing System and much more. All our products are getting widely acclaimed among the
            large clientele for their exclusive designs, superior quality, and reliability. Apart from this, our ability to maintain timelines as well as quality in the assortment, providing 
            cost effective solutions and assurance to make timely shipment of the orders placed by customers have assisted 
            us positioning our name in the list of top-notch companies of the industry.
            </p>
            <p style={{ color: COLORS.lightText, lineHeight: "1.7", marginBottom: "40px", fontSize: "18px" }}>
              Today, we serve clients across manufacturing, construction, chemical, pharmaceutical, and transportation sectors with custom plastic fabrication, FRP solutions, and complete installation services.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "40px" }}>
              <div style={{ textAlign: "center", flex: "1", minWidth: "150px" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: COLORS.gold, lineHeight: 1 }}>8+</div>
                <div style={{ fontSize: "1rem", fontWeight: "600", color: COLORS.dark }}>Years Experience</div>
              </div>
              <div style={{ textAlign: "center", flex: "1", minWidth: "150px" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: COLORS.gold, lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: "1rem", fontWeight: "600", color: COLORS.dark }}>Projects Completed</div>
              </div>
              <div style={{ textAlign: "center", flex: "1", minWidth: "150px" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: COLORS.gold, lineHeight: 1 }}>50+</div>
                <div style={{ fontSize: "1rem", fontWeight: "600", color: COLORS.dark }}>Team Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: "relative" }}
          >
            <img
              src="src/ai_images/img.png"
              alt="Dev Plastics Facility"
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            />
            <div style={{
              position: "absolute",
              bottom: "30px",
              left: "-30px",
              backgroundColor: COLORS.dark,
              color: "white",
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "300px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
            }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: COLORS.gold, marginBottom: "10px" }}>Our Facility</div>
              <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>15,000 sq.ft. manufacturing unit with advanced fabrication equipment</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Our Purpose
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Mission & Vision
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }} className="grid-responsive">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{
              backgroundColor: COLORS.accent,
              color: "white",
              padding: "50px 40px",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: "20px", right: "20px", opacity: 0.1 }}>
              <Target size={100} />
            </div>
            <div style={{ fontSize: "48px", color: COLORS.gold, marginBottom: "20px" }}>
              <Target />
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "20px" }}>Our Mission</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.9 }}>
              To deliver precision plastic fabrication solutions that exceed client expectations through advanced technology, skilled craftsmanship, and unwavering commitment to quality. We aim to be the preferred partner for industries requiring custom plastic components and structures.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{
              backgroundColor: COLORS.dark,
              color: "white",
              padding: "50px 40px",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: "20px", right: "20px", opacity: 0.1 }}>
              <TrendingUp size={100} />
            </div>
            <div style={{ fontSize: "48px", color: COLORS.gold, marginBottom: "20px" }}>
              <TrendingUp />
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "20px" }}>Our Vision</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.9 }}>
              To be India's leading plastic fabrication company, recognized for innovation, quality, and customer satisfaction. We envision expanding our technological capabilities while maintaining our commitment to sustainable fabrication practices and employee development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Core Values
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            What We Stand For
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Our values guide every decision we make and every project we undertake
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="value-card"
              style={{
                backgroundColor: COLORS.bgLight,
                padding: "40px 30px",
                borderRadius: "12px",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ fontSize: "48px", color: COLORS.gold, marginBottom: "20px" }}>
                {value.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px", color: "#222" }}>
                {value.title}
              </h3>
              <p style={{ color: COLORS.lightText, lineHeight: "1.6" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      {/* <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.dark, color: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Journey
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px" }}>
            Company Timeline
          </h2>
          <p style={{ color: "#aaa", maxWidth: "700px", margin: "20px auto 0", fontSize: "18px" }}>
            From humble beginnings to industry leadership
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="timeline-item"
            >
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>
                {milestone.year}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
                {milestone.title}
              </h3>
              <p style={{ color: "#aaa", lineHeight: "1.6" }}>
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* MEET OUR TEAM */}
      {/* <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Our Experts
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Meet Our Leadership Team
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Experienced professionals dedicated to delivering excellence in plastic fabrication
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="hover-scale"
              style={{
                backgroundColor: COLORS.bgLight,
                borderRadius: "12px",
                overflow: "hidden",
                textAlign: "center"
              }}
            >
              <div style={{ height: "250px", overflow: "hidden" }}>
                <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px 20px" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "5px", color: "#222" }}>
                  {member.name}
                </h3>
                <div style={{ color: COLORS.gold, fontWeight: "600", marginBottom: "10px" }}>
                  {member.position}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", color: COLORS.lightText, fontSize: "14px" }}>
                  <Briefcase size={14} /> {member.experience} experience
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                  <Linkedin size={18} style={{ cursor: "pointer", color: COLORS.accent }} />
                  <Mail size={18} style={{ cursor: "pointer", color: COLORS.accent }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CERTIFICATIONS & ACCREDITATIONS */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Quality Assurance
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Certifications & Accreditations
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Our commitment to quality is validated by industry-recognized certifications
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{
                backgroundColor: "white",
                padding: "30px 20px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}
              whileHover={{ y: -10 }}
            >
              <AwardIcon size={32} color={COLORS.gold} style={{ marginBottom: "15px", margin: "0 auto" }} />
              <div style={{ fontWeight: "700", fontSize: "16px", marginBottom: "5px", color: "#222" }}>
                {cert.name}
              </div>
              <div style={{ fontSize: "12px", color: COLORS.lightText }}>
                {cert.description}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Client Feedback
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            What Our Clients Say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }} className="grid-responsive">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{
              backgroundColor: COLORS.bgLight,
              padding: "40px 30px",
              borderRadius: "12px",
              position: "relative"
            }}
          >
            <Quote size={40} color={COLORS.gold} style={{ marginBottom: "20px" }} />
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: COLORS.dark, fontStyle: "italic", marginBottom: "30px" }}>
              "Dev Plastics delivered exceptional FRP panels for our chemical plant. The quality and precision exceeded our expectations, and the installation was completed ahead of schedule."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "50px", height: "50px", backgroundColor: COLORS.gold, borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>
                RS
              </div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>AKASH ANAND GADGE</div>
                <div style={{ color: COLORS.lightText, fontSize: "14px" }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{
              backgroundColor: COLORS.bgLight,
              padding: "40px 30px",
              borderRadius: "12px",
              position: "relative"
            }}
          >
            <Quote size={40} color={COLORS.gold} style={{ marginBottom: "20px" }} />
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: COLORS.dark, fontStyle: "italic", marginBottom: "30px" }}>
              "Their custom fabrication service created perfect components for our specialized equipment. The attention to detail and quality control throughout the process was impressive."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "50px", height: "50px", backgroundColor: COLORS.gold, borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>
                PP
              </div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>Naeem</div>
                <div style={{ color: COLORS.lightText, fontSize: "14px" }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.accent, color: "white", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
            Partner With India's Leading Plastic Fabrication Company
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}>
            Join hundreds of satisfied clients who trust Dev Plastics Company for their plastic fabrication needs.
          </p>
          {/* <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              backgroundColor: COLORS.gold,
              color: "white",
              padding: "16px 40px",
              border: "none",
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
              cursor: "pointer",
              letterSpacing: "1px",
              borderRadius: "4px"
            }} className="btn-hover">
              Start a Project
            </button>
            <button style={{
              backgroundColor: "transparent",
              border: `2px solid white`,
              color: "white",
              padding: "16px 40px",
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
              cursor: "pointer",
              letterSpacing: "1px",
              borderRadius: "4px"
            }} className="btn-hover">
              Visit Our Facility
            </button>
          </div> */}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
            <div>
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

              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Precision plastic fabrication solutions for industrial, commercial, and architectural applications since 2017.
              </p>
              <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                <Facebook size={20} style={{ cursor: 'pointer' }} />
                <Twitter size={20} style={{ cursor: 'pointer' }} />
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Linkedin size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/products" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Services</Link>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <Link to="/gallery" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Our Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Custom Fabrication</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> FRP Solutions</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Prototyping</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Installation</a></li>
                <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} color={COLORS.gold} />
                  <span>46,appa pada,,kurar village 166/2, Ramchandra Vishwakarma Chawl Rajawali,401208,Vasai, Mumbai-400097, Maharashtra, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color={COLORS.gold} />
                  <span>+91 8043887774</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color={COLORS.gold} />
                  <span>info@devplastics.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={16} color={COLORS.gold} />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <div>© {new Date().getFullYear()} Dev Plastic Company. All Rights Reserved.</div>
            <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms & Conditions</a>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
