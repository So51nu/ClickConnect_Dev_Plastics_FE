// // 'use client';

// // import React, { useEffect, useMemo, useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //   Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
// //   Search, CheckCircle, Quote, Clock, Award, Users,
// //   ChevronRight, ChevronLeft, X, ZoomIn
// // } from 'lucide-react';

// // // ── COLORS & ANIMATIONS ─────────────────────────────────────────────────────
// // const COLORS = {
// //   gold: "#a37f57",
// //   dark: "#1a1a1a",
// //   lightText: "#666",
// //   bgLight: "#f9f9f9",
// //   white: "#ffffff",
// //   accent: "#2a5c7a"
// // };

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// // };

// // const fadeIn = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { duration: 1.1 } }
// // };

// // const staggerChildren = {
// //   visible: { transition: { staggerChildren: 0.15 } }
// // };

// // // ── REUSABLE: ROTATING BACKGROUND WRAPPER ───────────────────────────────────
// // function RotatingBgSection({
// //   images,
// //   intervalMs = 8000,
// //   overlay = "rgba(0,0,0,0.75)",
// //   style = {},
// //   children,
// // }: {
// //   images: string[];
// //   intervalMs?: number;
// //   overlay?: string;
// //   style?: React.CSSProperties;
// //   children: React.ReactNode;
// // }) {
// //   const [idx, setIdx] = useState(0);

// //   useEffect(() => {
// //     const t = setInterval(() => setIdx((p) => (p + 1) % images.length), intervalMs);
// //     return () => clearInterval(t);
// //   }, [images.length, intervalMs]);

// //   return (
// //     <section style={{ position: "relative", overflow: "hidden", ...style }}>
// //       {images.map((img, i) => (
// //         <div
// //           key={img + i}
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             backgroundImage: `url("${img}")`,
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             opacity: i === idx ? 1 : 0,
// //             transition: "opacity 1.5s ease-in-out",
// //             zIndex: 0
// //           }}
// //         />
// //       ))}
// //       <div style={{ position: "absolute", inset: 0, backgroundColor: overlay, zIndex: 1 }} />
// //       <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
// //     </section>
// //   );
// // }

// // // ── GALLERY PAGE ───────────────────────────────────────────────────────────
// // export default function GalleryPage() {
// //   // ✅ Page-level rotating backgrounds (same style as your About page)
// //   const heroImages = [
// //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
// //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
// //   ];

// //   const showcaseBg = [
// //     "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920",
// //     "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
// //     "https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=1920",
// //   ];

// //   const ctaBg = [
// //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
// //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
// //   ];

// //   // ✅ Filters (same pattern)
// //   const FILTERS = useMemo(
// //     () => [
// //       { key: "all", label: "All" },
// //       { key: "frp-panels", label: "FRP Panels" },
// //       { key: "cladding", label: "Cladding" },
// //       { key: "industrial", label: "Industrial" },
// //       { key: "roofing", label: "Roofing" },
// //       { key: "installation", label: "Installation" },
// //     ],
// //     []
// //   );

// //   // ✅ Gallery images
// //   const IMAGES = useMemo(
// //     () => [
// //       { src: "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1400", title: "FRP Fabrication Setup", category: "industrial" },
// //       { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400", title: "Factory Work Area", category: "industrial" },
// //       { src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1400", title: "Precision Work", category: "frp-panels" },
// //       { src: "https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=1400", title: "Sheet Handling", category: "roofing" },
// //       { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1400", title: "Interior Panel Project", category: "cladding" },
// //       { src: "https://images.unsplash.com/photo-1565514020125-63876e5d590d?q=80&w=1400&auto=format&fit=crop", title: "Control Room Cladding", category: "cladding" },
// //       { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop", title: "Office Partition Panels", category: "frp-panels" },
// //       { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&auto=format&fit=crop&q=80", title: "On-site Installation", category: "installation" },
// //       { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&auto=format&fit=crop&q=80", title: "Fabrication & Finish", category: "installation" },
// //     ],
// //     []
// //   );

// //   const [activeFilter, setActiveFilter] = useState("all");

// //   const filteredImages = useMemo(() => {
// //     if (activeFilter === "all") return IMAGES;
// //     return IMAGES.filter((x) => x.category === activeFilter);
// //   }, [activeFilter, IMAGES]);

// //   // ✅ Modal state
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const openModal = (index: number) => {
// //     setActiveIndex(index);
// //     setIsOpen(true);
// //   };
// //   const closeModal = () => setIsOpen(false);

// //   const next = () => setActiveIndex((p) => (p + 1) % filteredImages.length);
// //   const prev = () => setActiveIndex((p) => (p - 1 + filteredImages.length) % filteredImages.length);

// //   // Keyboard
// //   useEffect(() => {
// //     if (!isOpen) return;
// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") closeModal();
// //       if (e.key === "ArrowRight") next();
// //       if (e.key === "ArrowLeft") prev();
// //     };
// //     window.addEventListener("keydown", onKey);
// //     return () => window.removeEventListener("keydown", onKey);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [isOpen, filteredImages.length]);

// //   // keep index safe if filter changes
// //   useEffect(() => {
// //     if (!isOpen) return;
// //     if (activeIndex >= filteredImages.length) setActiveIndex(0);
// //   }, [activeFilter, filteredImages.length, isOpen, activeIndex]);

// //   // ✅ Auto-scroll strip (slow) – based on current filter
// //   const stripBase = filteredImages.length ? filteredImages : IMAGES;
// //   const strip = useMemo(() => [...stripBase, ...stripBase], [stripBase]);

// //   return (
// //     <div style={{ width: "100vw", minHeight: "100vh", margin: 0, padding: 0, overflowX: "hidden", backgroundColor: COLORS.white }}>
// //       {/* GLOBAL CSS (match your About style) */}
// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //           html, body { margin:0 !important; padding:0 !important; width:100vw !important; min-height:100vh !important; overflow-x:hidden !important; }
// //           * { box-sizing: border-box; }

// //           .hover-scale:hover {
// //             transform: translateY(-10px) scale(1.02);
// //             box-shadow: 0 20px 40px rgba(0,0,0,0.1);
// //             transition: all 0.4s ease;
// //           }

// //           .btn-hover:hover {
// //             background-color: #8e6e4a !important;
// //             transform: scale(1.05);
// //             transition: all 0.3s;
// //           }

// //           .text-gold { color: ${COLORS.gold}; }
// //           .text-accent { color: ${COLORS.accent}; }

// //           .filter-pill {
// //             border: 1px solid #e9e9e9;
// //             padding: 12px 18px;
// //             border-radius: 999px;
// //             font-size: 12px;
// //             font-weight: 800;
// //             letter-spacing: 1px;
// //             text-transform: uppercase;
// //             cursor: pointer;
// //             background: #fff;
// //             transition: all .25s ease;
// //           }
// //           .filter-pill:hover { transform: translateY(-2px); border-color: ${COLORS.gold}; }
// //           .filter-pill.active { background: ${COLORS.gold}; border-color: ${COLORS.gold}; color: #fff; }

// //           /* ✅ slow marquee auto-scroll */
// //           .marquee-wrap { overflow: hidden; border-radius: 14px; }
// //           .marquee-track {
// //             display: flex;
// //             gap: 16px;
// //             width: max-content;
// //             animation: marquee 90s linear infinite; /* slow */
// //             padding: 18px 0;
// //           }
// //           .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
// //           @keyframes marquee {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }

// //           @media (max-width: 968px) {
// //             .nav-links-desktop { display: none !important; }
// //             h1 { font-size: 2.5rem !important; }
// //             h2 { font-size: 2.2rem !important; }
// //             .grid-responsive { grid-template-columns: 1fr !important; }
// //           }
// //         `,
// //         }}
// //       />

// //       {/* TOP BAR (same as your About) */}
// //       <div style={{
// //         backgroundColor: COLORS.dark,
// //         color: "#ccc",
// //         fontSize: "12px",
// //         padding: "10px 5%",
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         borderBottom: "1px solid #333",
// //         width: "100%"
// //       }}>
// //         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
// //           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //             <MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai
// //           </span>
// //           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //             <Mail size={14} color={COLORS.gold} /> info@fibertechfab.com
// //           </span>
// //           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //             <Phone size={14} color={COLORS.gold} /> +91 98765 43210
// //           </span>
// //         </div>
// //         <div style={{ display: "flex", gap: "12px" }}>
// //           <Facebook size={14} style={{ cursor: 'pointer' }} color="#ccc" />
// //           <Twitter size={14} style={{ cursor: 'pointer' }} color="#ccc" />
// //           <Instagram size={14} style={{ cursor: 'pointer' }} color="#ccc" />
// //           <Linkedin size={14} style={{ cursor: 'pointer' }} color="#ccc" />
// //         </div>
// //       </div>

// //       {/* NAVBAR (same as your About) */}
// //       <nav style={{
// //         position: "sticky",
// //         top: 0,
// //         zIndex: 1000,
// //         backgroundColor: COLORS.white,
// //         boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
// //         padding: "15px 5%",
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         width: "100%"
// //       }}>
// //         <div style={{ display: 'flex', flexDirection: 'column' }}>
// //           <span style={{ fontSize: '28px', fontWeight: '800', lineHeight: 1 }}>
// //             FIBER<span className="text-gold">TECH</span>
// //           </span>
// //           <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
// //             Plastic Fabrication
// //           </span>
// //         </div>

// //         <div className="nav-links-desktop" style={{ display: "flex", gap: "25px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase" }}>
// //           <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
// //           <a href="/products" style={{ color: '#333', textDecoration: 'none' }}>Products</a>
// //           <a href="/services" style={{ color: '#333', textDecoration: 'none' }}>Services</a>
// //           <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
// //           <a href="/gallery" className="text-gold" style={{ textDecoration: 'none' }}>Gallery</a>
// //           <a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact</a>
// //           <Search size={18} style={{ cursor: 'pointer' }} />
// //         </div>

// //         <button
// //           style={{
// //             backgroundColor: COLORS.gold,
// //             color: "white",
// //             padding: "12px 28px",
// //             border: "none",
// //             fontSize: "13px",
// //             fontWeight: "700",
// //             textTransform: "uppercase",
// //             cursor: "pointer",
// //             letterSpacing: "1px",
// //             borderRadius: "4px"
// //           }}
// //           className="btn-hover"
// //           onClick={() => (window.location.href = "/contact")}
// //         >
// //           Get A Quote →
// //         </button>
// //       </nav>

// //       {/* HERO (background auto change like About) */}
// //       <RotatingBgSection
// //         images={heroImages}
// //         intervalMs={8000}
// //         overlay="rgba(0,0,0,0.70)"
// //         style={{ height: "70vh", display: "flex", alignItems: "center", padding: "0 5%" }}
// //       >
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.4 }}
// //           variants={fadeInUp}
// //           style={{ color: "white", maxWidth: "900px", paddingTop: "40px" }}
// //         >
// //           <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
// //             Our Gallery
// //           </p>
// //           <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
// //             Projects & <span className="text-gold">Fabrication</span> <br /> Showcase
// //           </h1>
// //           <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '650px' }}>
// //             Explore our FRP panels, cladding, industrial work, and on-site installations across India.
// //           </p>
// //           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
// //             <button style={btnPrimary} className="btn-hover" onClick={() => document.getElementById("gallery-grid")?.scrollIntoView({ behavior: "smooth" })}>
// //               View Gallery
// //             </button>
// //             <button style={btnOutline} className="btn-hover" onClick={() => (window.location.href = "/contact")}>
// //               Start a Project
// //             </button>
// //           </div>
// //         </motion.div>
// //       </RotatingBgSection>

// //       {/* QUICK STATS (same style as your About overview) */}
// //       <section style={{ padding: "80px 5%", backgroundColor: COLORS.white }}>
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", maxWidth: 1200, margin: "0 auto" }}>
// //           <StatCard icon={<Clock size={22} color={COLORS.gold} />} big="15+" label="Years Experience" />
// //           <StatCard icon={<Award size={22} color={COLORS.gold} />} big="1200+" label="Projects Delivered" />
// //           <StatCard icon={<Users size={22} color={COLORS.gold} />} big="500+" label="Happy Clients" />
// //           <StatCard icon={<CheckCircle size={22} color={COLORS.gold} />} big="Quality" label="Clean Finish" />
// //         </div>
// //       </section>

// //       {/* SHOWCASE STRIP (auto-scroll slow) + BACKGROUND AUTO CHANGE */}
// //       <RotatingBgSection
// //         images={showcaseBg}
// //         intervalMs={9000}
// //         overlay="rgba(0,0,0,0.78)"
// //         style={{ padding: "90px 5%" }}
// //       >
// //         <div style={{ textAlign: "center", marginBottom: "40px" }}>
// //           <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
// //             Live Showcase
// //           </span>
// //           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px", color: "white" }}>
// //             Auto Scrolling Highlights
// //           </h2>
// //           <p style={{ color: "#aaa", maxWidth: "760px", margin: "20px auto 0", fontSize: "18px" }}>
// //             Slow moving strip — hover to pause. Click any image to open.
// //           </p>
// //         </div>

// //         <div className="marquee-wrap">
// //           <div className="marquee-track">
// //             {strip.map((img, i) => {
// //               const originalIndex = i % stripBase.length;
// //               return (
// //                 <button
// //                   key={`${img.src}-${i}`}
// //                   onClick={() => openModal(originalIndex)}
// //                   style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0 }}
// //                   aria-label={`Open ${stripBase[originalIndex].title}`}
// //                 >
// //                   <div
// //                     className="hover-scale"
// //                     style={{
// //                       width: 280,
// //                       height: 170,
// //                       borderRadius: 12,
// //                       overflow: "hidden",
// //                       position: "relative",
// //                       background: "#111",
// //                       border: "1px solid rgba(255,255,255,0.12)"
// //                     }}
// //                   >
// //                     <img
// //                       src={stripBase[originalIndex].src}
// //                       alt={stripBase[originalIndex].title}
// //                       style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //                     />
// //                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55))" }} />
// //                     <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, color: "white", fontWeight: 800, fontSize: 13 }}>
// //                       {stripBase[originalIndex].title}
// //                     </div>
// //                     <div style={{ position: "absolute", top: 12, right: 12, color: "white", opacity: 0.9 }}>
// //                       <ZoomIn size={18} />
// //                     </div>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </RotatingBgSection>

// //       {/* FILTERS + GRID (your about-like layout) */}
// //       <section id="gallery-grid" style={{ padding: "100px 5%", backgroundColor: COLORS.bgLight }}>
// //         <div style={{ textAlign: "center", marginBottom: "60px" }}>
// //           <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
// //             Gallery
// //           </span>
// //           <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
// //             Browse Our Work
// //           </h2>
// //           <p style={{ color: COLORS.lightText, maxWidth: "780px", margin: "0 auto", fontSize: "18px" }}>
// //             Filter by category and click images to open full preview.
// //           </p>
// //         </div>

// //         <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
// //           {FILTERS.map((f) => (
// //             <button
// //               key={f.key}
// //               className={`filter-pill ${activeFilter === f.key ? "active" : ""}`}
// //               onClick={() => setActiveFilter(f.key)}
// //             >
// //               {f.label}
// //             </button>
// //           ))}
// //         </div>

// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
// //             gap: "30px",
// //             maxWidth: "1200px",
// //             margin: "0 auto"
// //           }}
// //         >
// //           {filteredImages.map((img, idx) => (
// //             <motion.button
// //               key={img.src}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //               className="hover-scale"
// //               onClick={() => openModal(idx)}
// //               style={{
// //                 border: "none",
// //                 background: "white",
// //                 borderRadius: 12,
// //                 overflow: "hidden",
// //                 textAlign: "left",
// //                 cursor: "pointer",
// //                 padding: 0
// //               }}
// //               aria-label={`Open ${img.title}`}
// //             >
// //               <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
// //                 <img src={img.src} alt={img.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
// //                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55))" }} />
// //                 <div style={{ position: "absolute", left: 16, right: 16, bottom: 14, color: "white" }}>
// //                   <div style={{ fontWeight: 800, fontSize: 14 }}>{img.title}</div>
// //                   <div style={{ fontSize: 12, opacity: 0.9, letterSpacing: 1, textTransform: "uppercase" }}>
// //                     {img.category.replace("-", " ")}
// //                   </div>
// //                 </div>
// //               </div>

// //               <div style={{ padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
// //                 <div style={{ color: COLORS.lightText, fontSize: 13 }}>
// //                   Click to open preview
// //                 </div>
// //                 <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.gold, fontWeight: 800, fontSize: 13 }}>
// //                   View <ChevronRight size={14} />
// //                 </div>
// //               </div>
// //             </motion.button>
// //           ))}
// //         </div>
// //       </section>

// //       {/* CTA SECTION (BACKGROUND AUTO CHANGE LIKE YOU ASKED) */}
// //       <RotatingBgSection
// //         images={ctaBg}
// //         intervalMs={8500}
// //         overlay="rgba(0,0,0,0.72)"
// //         style={{ padding: "100px 5%", textAlign: "center" }}
// //       >
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ maxWidth: 1000, margin: "0 auto", color: "white" }}>
// //           <Quote size={46} color={COLORS.gold} style={{ margin: "0 auto 18px", display: "block" }} />
// //           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "18px" }}>
// //             Want Your Project Featured Here?
// //           </h2>
// //           <p style={{ fontSize: "1.2rem", maxWidth: 780, margin: "0 auto 34px", opacity: 0.9 }}>
// //             Share your requirement — we’ll recommend material, thickness and provide quick quotation with timeline.
// //           </p>

// //           <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
// //             <button style={btnPrimary} className="btn-hover" onClick={() => (window.location.href = "/contact")}>
// //               Get A Quote →
// //             </button>
// //             <button style={btnOutline} className="btn-hover" onClick={() => (window.location.href = "/services")}>
// //               View Services
// //             </button>
// //           </div>

// //           <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 26, opacity: 0.95 }}>
// //             <MiniBullet text="Fast Response" />
// //             <MiniBullet text="Clean Finish" />
// //             <MiniBullet text="On-site Installation" />
// //           </div>
// //         </motion.div>
// //       </RotatingBgSection>

// //       {/* MODAL (click image opens) */}
// //       <AnimatePresence>
// //         {isOpen && filteredImages[activeIndex] && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             style={{
// //               position: "fixed",
// //               inset: 0,
// //               zIndex: 3000,
// //               background: "rgba(0,0,0,0.82)",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               padding: 16
// //             }}
// //             onClick={closeModal}
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.96, y: 10 }}
// //               animate={{ opacity: 1, scale: 1, y: 0 }}
// //               exit={{ opacity: 0, scale: 0.97, y: 10 }}
// //               transition={{ duration: 0.25 }}
// //               style={{
// //                 width: "min(1100px, 96vw)",
// //                 height: "min(680px, 85vh)",
// //                 borderRadius: 14,
// //                 overflow: "hidden",
// //                 position: "relative",
// //                 background: "#111"
// //               }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <img
// //                 src={filteredImages[activeIndex].src}
// //                 alt={filteredImages[activeIndex].title}
// //                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //               />
// //               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.08), rgba(0,0,0,0.55))" }} />

// //               <button onClick={closeModal} style={modalCloseBtn} aria-label="Close">
// //                 <X size={18} />
// //               </button>

// //               <button onClick={prev} style={{ ...modalNavBtn, left: 14 }} aria-label="Previous">
// //                 <ChevronLeft size={18} />
// //               </button>
// //               <button onClick={next} style={{ ...modalNavBtn, right: 14 }} aria-label="Next">
// //                 <ChevronRight size={18} />
// //               </button>

// //               <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
// //                 <div style={{ color: "white", fontWeight: 800, fontSize: 13 }}>
// //                   {filteredImages[activeIndex].title}
// //                   <span style={{ marginLeft: 10, opacity: 0.8, fontWeight: 700, fontSize: 12 }}>
// //                     ({activeIndex + 1}/{filteredImages.length})
// //                   </span>
// //                 </div>

// //                 <div style={{ display: "flex", gap: 8 }}>
// //                   {filteredImages.map((_, i) => (
// //                     <button
// //                       key={i}
// //                       onClick={() => setActiveIndex(i)}
// //                       style={{
// //                         width: i === activeIndex ? 26 : 10,
// //                         height: 10,
// //                         borderRadius: 999,
// //                         border: "none",
// //                         cursor: "pointer",
// //                         background: i === activeIndex ? COLORS.gold : "rgba(255,255,255,0.35)",
// //                         transition: "all 0.25s ease"
// //                       }}
// //                       aria-label={`Go to image ${i + 1}`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* FOOTER (same as your About style) */}
// //       <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
// //         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
// //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
// //             <div>
// //               <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
// //                 <span style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>
// //                   FIBER<span className="text-gold">TECH</span>
// //                 </span>
// //                 <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}>
// //                   Plastic Fabrication
// //                 </span>
// //               </div>
// //               <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
// //                 Precision plastic fabrication solutions for industrial, commercial, and architectural applications.
// //               </p>
// //               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
// //                 <Facebook size={20} style={{ cursor: 'pointer' }} />
// //                 <Twitter size={20} style={{ cursor: 'pointer' }} />
// //                 <Instagram size={20} style={{ cursor: 'pointer' }} />
// //                 <Linkedin size={20} style={{ cursor: 'pointer' }} />
// //               </div>
// //             </div>

// //             <div>
// //               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
// //               <ul style={{ listStyle: 'none', padding: 0 }}>
// //                 <li style={{ marginBottom: '12px' }}><a href="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a></li>
// //                 <li style={{ marginBottom: '12px' }}><a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</a></li>
// //                 <li style={{ marginBottom: '12px' }}><a href="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</a></li>
// //                 <li style={{ marginBottom: '12px' }}><a href="/gallery" style={{ color: '#ccc', textDecoration: 'none' }}>Gallery</a></li>
// //                 <li><a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a></li>
// //               </ul>
// //             </div>

// //             <div>
// //               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
// //               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //                   <MapPin size={16} color={COLORS.gold} />
// //                   <span>Sector 4, Industrial Area, Mumbai - 400072</span>
// //                 </div>
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //                   <Phone size={16} color={COLORS.gold} />
// //                   <span>+91 98765 43210</span>
// //                 </div>
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //                   <Mail size={16} color={COLORS.gold} />
// //                   <span>info@fibertechfab.com</span>
// //                 </div>
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
// //                   <Clock size={16} color={COLORS.gold} />
// //                   <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
// //             <div>© {new Date().getFullYear()} FiberTech Plastic Fabrication. All Rights Reserved.</div>
// //             <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
// //               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a>
// //               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms & Conditions</a>
// //               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Sitemap</a>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // // ── SMALL REUSABLES (same vibe) ─────────────────────────────────────────────
// // const btnPrimary: React.CSSProperties = {
// //   backgroundColor: COLORS.gold,
// //   border: `1px solid ${COLORS.gold}`,
// //   color: "white",
// //   padding: "12px 28px",
// //   fontSize: "13px",
// //   fontWeight: "700",
// //   textTransform: "uppercase",
// //   cursor: "pointer",
// //   letterSpacing: "1px",
// //   borderRadius: "4px"
// // };

// // const btnOutline: React.CSSProperties = {
// //   backgroundColor: "transparent",
// //   border: "1px solid white",
// //   color: "white",
// //   padding: "12px 28px",
// //   fontSize: "13px",
// //   fontWeight: "700",
// //   textTransform: "uppercase",
// //   cursor: "pointer",
// //   letterSpacing: "1px",
// //   borderRadius: "4px"
// // };

// // const StatCard = ({ icon, big, label }: { icon: React.ReactNode; big: string; label: string }) => (
// //   <div style={{
// //     backgroundColor: COLORS.bgLight,
// //     borderRadius: 12,
// //     padding: "28px 22px",
// //     textAlign: "center"
// //   }} className="hover-scale">
// //     <div style={{ marginBottom: 10 }}>{icon}</div>
// //     <div style={{ fontSize: "2.2rem", fontWeight: 900, color: COLORS.gold, lineHeight: 1 }}>{big}</div>
// //     <div style={{ fontSize: "1rem", fontWeight: 700, color: COLORS.dark, marginTop: 6 }}>{label}</div>
// //   </div>
// // );

// // const MiniBullet = ({ text }: { text: string }) => (
// //   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// //     <CheckCircle size={16} color={COLORS.gold} />
// //     <span style={{ fontWeight: 800, fontSize: 13 }}>{text}</span>
// //   </div>
// // );

// // const modalNavBtn: React.CSSProperties = {
// //   position: "absolute",
// //   top: "50%",
// //   transform: "translateY(-50%)",
// //   width: 44,
// //   height: 44,
// //   borderRadius: 10,
// //   border: "1px solid rgba(255,255,255,0.22)",
// //   background: "rgba(0,0,0,0.35)",
// //   color: "#fff",
// //   cursor: "pointer",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// // };

// // const modalCloseBtn: React.CSSProperties = {
// //   position: "absolute",
// //   top: 14,
// //   right: 14,
// //   width: 42,
// //   height: 42,
// //   borderRadius: 10,
// //   border: "1px solid rgba(255,255,255,0.22)",
// //   background: "rgba(0,0,0,0.35)",
// //   color: "#fff",
// //   cursor: "pointer",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// // };

// 'use client';
// import { Link } from "react-router-dom";

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
//   Search, X, ChevronLeft, ChevronRight, Maximize2, Filter,
//   Factory, Shield, Layers, Wrench, Settings, Building,
//   Download, Share2, Heart
// } from 'lucide-react';

// // ── COLORS & ANIMATIONS ─────────────────────────────────────────────────────
// const COLORS = {
//   gold: "#a37f57",
//   dark: "#1a1a1a",
//   lightText: "#666",
//   bgLight: "#f9f9f9",
//   white: "#ffffff",
//   accent: "#2a5c7a"
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1] as const, // ✅
//     },
//   },
// };


// type GalleryImage = {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   tags: string[];
// };

// // Gallery images data
// const galleryImages: GalleryImage[] =  [
//   {
//     id: 1,
//     title: 'FRP Industrial Cladding',
//     category: 'FRP',
//     description: 'High-strength FRP panels installed at chemical plant',
//     image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
//     tags: ['FRP', 'Cladding', 'Industrial']
//   },
//   {
//     id: 2,
//     title: 'Custom Plastic Components',
//     category: 'Custom',
//     description: 'Precision-machined plastic parts for machinery',
//     image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
//     tags: ['Custom', 'Machining', 'Precision']
//   },
//   {
//     id: 3,
//     title: 'Factory Installation',
//     category: 'Installation',
//     description: 'Complete FRP wall panel installation at manufacturing unit',
//     image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
//     tags: ['Installation', 'Factory', 'FRP']
//   },
//   // {
//   //   id: 4,
//   //   title: 'Commercial Office Panels',
//   //   category: 'Commercial',
//   //   description: 'Decorative plastic panels for corporate office',
//   //   image: 'https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=800',
//   //   tags: ['Commercial', 'Office', 'Panels']
//   // },
//   // {
//   //   id: 5,
//   //   title: 'Quality Inspection',
//   //   category: 'Quality',
//   //   description: 'Quality control check on fabricated components',
//   //   image: 'https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=800',
//   //   tags: ['Quality', 'Inspection', 'Testing']
//   // },
//   {
//     id: 6,
//     title: 'Industrial Tank Covers',
//     category: 'Industrial',
//     description: 'Custom FRP covers for industrial storage tanks',
//     image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
//     tags: ['Industrial', 'Tanks', 'Covers']
//   },
//   {
//     id: 7,
//     title: 'Architectural FRP Elements',
//     category: 'FRP',
//     description: 'Architectural FRP elements for building facade',
//     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
//     tags: ['Architectural', 'FRP', 'Facade']
//   },
//   {
//     id: 8,
//     title: 'CNC Machining Process',
//     category: 'Custom',
//     description: 'CNC machining of plastic components in our facility',
//     image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
//     tags: ['CNC', 'Machining', 'Process']
//   },
//   {
//     id: 9,
//     title: 'Clean Room Installation',
//     category: 'Installation',
//     description: 'Hygienic plastic panels for pharmaceutical clean room',
//     image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
//     tags: ['Clean Room', 'Pharma', 'Hygienic']
//   },
//   {
//     id: 10,
//     title: 'Retail Store Displays',
//     category: 'Commercial',
//     description: 'Custom plastic displays for retail store',
//     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
//     tags: ['Retail', 'Displays', 'Commercial']
//   },
//   {
//     id: 11,
//     title: 'FRP Roofing Sheets',
//     category: 'FRP',
//     description: 'Installation of corrosion-resistant FRP roofing',
//     image: 'src/images/image1.jpg',
//     tags: ['Roofing', 'FRP', 'Corrosion-resistant']
//   },
//   {
//     id: 12,
//     title: 'Warehouse Partitioning',
//     category: 'Industrial',
//     description: 'Industrial-grade plastic partitions for warehouse',
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
//     tags: ['Warehouse', 'Partitions', 'Industrial']
//   }
// ];

// // Gallery categories
// const categories = [
//   { id: 'All', name: 'All Projects', count: 12, icon: <Maximize2 size={18} /> },
//   { id: 'FRP', name: 'FRP Fabrication', count: 3, icon: <Layers size={18} /> },
//   { id: 'Industrial', name: 'Industrial', count: 2, icon: <Factory size={18} /> },
//   { id: 'Commercial', name: 'Commercial', count: 2, icon: <Building size={18} /> },
//   { id: 'Custom', name: 'Custom Parts', count: 2, icon: <Settings size={18} /> },
//   { id: 'Installation', name: 'Installation', count: 2, icon: <Wrench size={18} /> },
//   { id: 'Quality', name: 'Quality Control', count: 1, icon: <Shield size={18} /> }
// ];

// // ── GALLERY PAGE ────────────────────────────────────────────────────────────
// export default function Gallery() {
//   //const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
//   //const [lightboxIndex, setLightboxIndex] = useState(0);
//   //const [isLightboxOpen, setIsLightboxOpen] = useState(false);


//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [lightboxIndex, setLightboxIndex] = useState<number>(0);
//   const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

//   const filteredImages: GalleryImage[] =
//   selectedCategory === "All"
//     ? galleryImages
//     : galleryImages.filter(img => img.category === selectedCategory);

// const openLightbox = (image: GalleryImage, index: number) => {
//   setSelectedImage(image);
//   setLightboxIndex(index);
//   setIsLightboxOpen(true);
//   document.body.style.overflow = "hidden";
// };

//   const closeLightbox = () => {
//     setIsLightboxOpen(false);
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };
// const navigateLightbox = (direction: "next" | "prev") => {
//   let newIndex;

//   if (direction === "next") {
//     newIndex = (lightboxIndex + 1) % filteredImages.length;
//   } else {
//     newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
//   }

//   setSelectedImage(filteredImages[newIndex]);
//   setLightboxIndex(newIndex);
// };

// useEffect(() => {
//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (!isLightboxOpen) return;

//     if (e.key === "Escape") {
//       closeLightbox();
//     } else if (e.key === "ArrowRight") {
//       navigateLightbox("next");
//     } else if (e.key === "ArrowLeft") {
//       navigateLightbox("prev");
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, [isLightboxOpen, lightboxIndex]);

//   return (
//     <div style={{
//       width: '100vw',
//       minHeight: '100vh',
//       margin: 0,
//       padding: 0,
//       overflowX: 'hidden',
//       backgroundColor: COLORS.white
//     }}>

//       {/* GLOBAL CSS */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         * { 
//           margin: 0; 
//           padding: 0; 
//           box-sizing: border-box; 
//         }
        
//         html, body, #__next {
//           width: 100%;
//           min-height: 100vh;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//         }

//         body {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           line-height: 1.6;
//         }

//         .hover-scale:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//           transition: all 0.4s ease;
//         }

//         .btn-hover:hover {
//           background-color: #8e6e4a !important;
//           transform: scale(1.05);
//           transition: all 0.3s;
//         }

//         .text-gold { color: ${COLORS.gold}; }
//         .text-accent { color: ${COLORS.accent}; }

//         .category-btn.active {
//           background-color: ${COLORS.gold} !important;
//           color: white !important;
//         }

//         .gallery-item {
//           position: relative;
//           overflow: hidden;
//           border-radius: 12px;
//           cursor: pointer;
//           background: white;
//           height: 100%;
//         }

//         .gallery-item:hover .gallery-overlay {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .gallery-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: linear-gradient(transparent, rgba(0,0,0,0.9));
//           color: white;
//           padding: 20px;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.3s ease;
//           pointer-events: none;
//         }

//         .lightbox-backdrop {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0,0,0,0.95);
//           z-index: 2000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//         }

//         .lightbox-container {
//           max-width: 90vw;
//           max-height: 90vh;
//           position: relative;
//           width: auto;
//           height: auto;
//         }

//         .lightbox-image {
//           max-width: 100%;
//           max-height: 80vh;
//           object-fit: contain;
//           display: block;
//           margin: 0 auto;
//         }

//         @media (max-width: 968px) {
//           .nav-links-desktop { display: none !important; }
//           h1 { font-size: 2.5rem !important; }
//           h2 { font-size: 2.2rem !important; }
//           .grid-responsive { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important; }
//           .category-filters { 
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .category-filters button {
//             font-size: 12px;
//             padding: 10px 16px;
//           }
//         }

//         @media (max-width: 480px) {
//           .grid-responsive { grid-template-columns: 1fr !important; }
//           h1 { font-size: 2rem !important; }
//           h2 { font-size: 1.8rem !important; }
//         }
//       `}} />

//       {/* TOP BAR */}
//       <div style={{
//         backgroundColor: COLORS.dark,
//         color: "#ccc",
//         fontSize: "12px",
//         padding: "10px 5%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottom: "1px solid #333",
//         width: "100%"
//       }}>
//         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai
//           </span>
//           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <Mail size={14} color={COLORS.gold} /> info@devplastics.com
//           </span>
//           <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <Phone size={14} color={COLORS.gold} /> +91 98765 43210
//           </span>
//         </div>
//         <div style={{ display: "flex", gap: "12px" }}>
//           <Facebook size={14} style={{cursor:'pointer', color: '#ccc'}} />
//           <Twitter size={14} style={{cursor:'pointer', color: '#ccc'}} />
//           <Instagram size={14} style={{cursor:'pointer', color: '#ccc'}} />
//           <Linkedin size={14} style={{cursor:'pointer', color: '#ccc'}} />
//         </div>
//       </div>

//       {/* NAVBAR */}
//       <nav style={{
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//         backgroundColor: COLORS.white,
//         boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
//         padding: "15px 5%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         width: "100%"
//       }}>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <span style={{ fontSize: '28px', fontWeight: '800', lineHeight: 1 }}>
//             DEV<span className="text-gold">PLASTICS</span>
//           </span>
//           <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
//             Company
//           </span>
//         </div>

//         <div className="nav-links-desktop" style={{ display: "flex", gap: "25px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase" }}>
//           <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>
//   Home
// </Link>

// <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
//   Products
// </Link>

// <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
//   Services
// </Link>

// <Link to="/about" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
//   About
// </Link>

// <Link to="/gallery" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
//   Gallery
// </Link>

// <Link to="/contact" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
//   Contact
// </Link>

//           <Search size={18} style={{cursor: 'pointer'}} />
//         </div>

//         <button style={{
//           backgroundColor: COLORS.gold,
//           color: "white",
//           padding: "12px 28px",
//           border: "none",
//           fontSize: "13px",
//           fontWeight: "700",
//           textTransform: "uppercase",
//           cursor: "pointer",
//           letterSpacing: "1px",
//           borderRadius: "4px"
//         }} className="btn-hover">
//           Get A Quote →
//         </button>
//       </nav>

//       {/* HERO SECTION */}
//       <header style={{
//         position: "relative",
//         height: "60vh",
//         minHeight: "400px",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         padding: "0 5%",
//         overflow: "hidden",
//         backgroundColor: COLORS.dark
//       }}>
//         <div style={{ position: "absolute", inset: 0 }}>
//           <img 
//             src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920" 
//             alt="Gallery Background" 
//             style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
//           />
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeInUp}
//           style={{ position: "relative", zIndex: 2, color: "white", maxWidth: "800px", paddingTop: "40px", textAlign: "center", margin: "0 auto" }}
//         >
//           <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
//             Our Work Gallery
//           </p>
//           <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
//             Project <span className="text-gold">Gallery</span>
//           </h1>
//           <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
//             Explore our plastic fabrication projects across industries. Click on any image to view details.
//           </p>
//           <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
//             <button style={{
//               backgroundColor: COLORS.gold,
//               border: `1px solid ${COLORS.gold}`,
//               color: "white",
//               padding: "12px 28px",
//               fontSize: "13px",
//               fontWeight: "700",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               letterSpacing: "1px",
//               borderRadius: "4px"
//             }} className="btn-hover">
//               View All Projects
//             </button>
//             <button style={{
//               backgroundColor: 'transparent',
//               border: `1px solid white`,
//               color: "white",
//               padding: "12px 28px",
//               fontSize: "13px",
//               fontWeight: "700",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               letterSpacing: "1px",
//               borderRadius: "4px"
//             }} className="btn-hover">
//               Download Brochure
//             </button>
//           </div>
//         </motion.div>
//       </header>

//       {/* FILTER CATEGORIES */}
//       <section style={{ padding: "60px 5%", backgroundColor: COLORS.bgLight }}>
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
//             Categories
//           </span>
//           <h2 style={{ fontSize: "2.5rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
//             Browse By Category
//           </h2>
//           <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
//             Filter our gallery by project type
//           </p>
//         </div>

//         <div className="category-filters" style={{ 
//           display: "flex", 
//           justifyContent: "center", 
//           flexWrap: "wrap", 
//           gap: "15px", 
//           maxWidth: "1200px", 
//           margin: "0 auto" 
//         }}>
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
//               style={{
//                 backgroundColor: selectedCategory === category.id ? COLORS.gold : 'white',
//                 color: selectedCategory === category.id ? 'white' : COLORS.dark,
//                 padding: "12px 24px",
//                 border: `1px solid ${selectedCategory === category.id ? COLORS.gold : '#ddd'}`,
//                 borderRadius: "50px",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 fontWeight: "600",
//                 fontSize: "14px",
//                 transition: "all 0.3s ease",
//                 boxShadow: selectedCategory === category.id ? `0 5px 15px ${COLORS.gold}30` : '0 2px 10px rgba(0,0,0,0.05)'
//               }}
//             >
//               {category.icon}
//               {category.name}
//               <span style={{ 
//                 backgroundColor: selectedCategory === category.id ? 'rgba(255,255,255,0.2)' : COLORS.bgLight,
//                 padding: "2px 8px",
//                 borderRadius: "10px",
//                 fontSize: "12px"
//               }}>
//                 {category.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* GALLERY GRID */}
//       <section style={{ padding: "40px 5%", backgroundColor: COLORS.white }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <div style={{ 
//             display: "grid", 
//             gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
//             gap: "30px" 
//           }} className="grid-responsive">
//             {filteredImages.map((image, index) => (
//               <motion.div
//                 key={image.id}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className="gallery-item hover-scale"
//                 onClick={() => openLightbox(image, index)}
//                 style={{
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//                   cursor: "pointer"
//                 }}
//               >
//                 <div style={{ height: "300px", overflow: "hidden" }}>
//                   <img 
//                     src={image.image} 
//                     alt={image.title} 
//                     style={{ 
//                       width: "100%", 
//                       height: "100%", 
//                       objectFit: "cover",
//                       transition: "transform 0.5s ease"
//                     }}
//                     onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
//                     onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
//                   />
//                 </div>
                
//                 <div className="gallery-overlay">
//                   <div style={{ 
//                     backgroundColor: COLORS.gold, 
//                     color: "white", 
//                     padding: "4px 12px", 
//                     borderRadius: "4px", 
//                     fontSize: "12px", 
//                     fontWeight: "600",
//                     display: "inline-block",
//                     marginBottom: "10px"
//                   }}>
//                     {image.category}
//                   </div>
//                   <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "5px" }}>
//                     {image.title}
//                   </h3>
//                   <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "15px" }}>
//                     {image.description}
//                   </p>
//                 </div>

//                 <div style={{ padding: "25px" }}>
//                   <div style={{ 
//                     display: "flex", 
//                     justifyContent: "space-between", 
//                     alignItems: "center",
//                     marginBottom: "15px"
//                   }}>
//                     <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: COLORS.dark }}>
//                       {image.title}
//                     </h3>
//                     <span style={{ 
//                       backgroundColor: COLORS.bgLight, 
//                       color: COLORS.gold, 
//                       padding: "4px 12px", 
//                       borderRadius: "4px", 
//                       fontSize: "12px", 
//                       fontWeight: "600" 
//                     }}>
//                       {image.category}
//                     </span>
//                   </div>
//                   <p style={{ color: COLORS.lightText, fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
//                     {image.description}
//                   </p>
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ fontSize: "12px", color: COLORS.lightText }}>
//                       Click to view details
//                     </span>
//                     <Maximize2 size={18} color={COLORS.gold} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {filteredImages.length === 0 && (
//             <div style={{ textAlign: "center", padding: "80px 20px" }}>
//               <Filter size={48} color={COLORS.lightText} style={{ marginBottom: "20px" }} />
//               <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "10px", color: COLORS.dark }}>
//                 No Projects Found
//               </h3>
//               <p style={{ color: COLORS.lightText, fontSize: "16px" }}>
//                 No projects match the selected category. Try another category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* PROJECT STATS */}
//       <section style={{ padding: "80px 5%", backgroundColor: COLORS.dark, color: "white" }}>
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
//             Our Achievements
//           </span>
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px" }}>
//             Project Statistics
//           </h2>
//         </div>

//         <div style={{ 
//           display: "grid", 
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
//           gap: "40px", 
//           maxWidth: "1000px", 
//           margin: "0 auto", 
//           textAlign: "center" 
//         }}>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>12</div>
//             <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Completed Projects</div>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>28</div>
//             <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Industrial Clients</div>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>15+</div>
//             <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Industries Served</div>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>100%</div>
//             <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Client Satisfaction</div>
//           </motion.div>
//         </div>
//       </section>

//       {/* LIGHTBOX MODAL */}
//       <AnimatePresence>
//         {isLightboxOpen && selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lightbox-backdrop"
//             onClick={closeLightbox}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lightbox-container"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeLightbox}
//                 style={{
//                   position: "absolute",
//                   top: "-40px",
//                   right: "0",
//                   background: "none",
//                   border: "none",
//                   color: "white",
//                   cursor: "pointer",
//                   padding: "10px",
//                   zIndex: 2001
//                 }}
//               >
//                 <X size={24} />
//               </button>

//               {/* Navigation Buttons */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateLightbox('prev');
//                 }}
//                 style={{
//                   position: "absolute",
//                   left: "20px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   background: "rgba(255,255,255,0.1)",
//                   border: "none",
//                   color: "white",
//                   cursor: "pointer",
//                   padding: "15px",
//                   borderRadius: "50%",
//                   zIndex: 2001
//                 }}
//               >
//                 <ChevronLeft size={24} />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateLightbox('next');
//                 }}
//                 style={{
//                   position: "absolute",
//                   right: "20px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   background: "rgba(255,255,255,0.1)",
//                   border: "none",
//                   color: "white",
//                   cursor: "pointer",
//                   padding: "15px",
//                   borderRadius: "50%",
//                   zIndex: 2001
//                 }}
//               >
//                 <ChevronRight size={24} />
//               </button>

//               {/* Image */}
//               <img 
//                 src={selectedImage.image} 
//                 alt={selectedImage.title} 
//                 className="lightbox-image"
//                 style={{ 
//                   borderRadius: "8px",
//                   boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
//                 }}
//               />

//               {/* Image Info */}
//               <div style={{ 
//                 position: "absolute", 
//                 bottom: "0", 
//                 left: "0", 
//                 right: "0", 
//                 background: "linear-gradient(transparent, rgba(0,0,0,0.9))", 
//                 color: "white", 
//                 padding: "30px",
//                 borderBottomLeftRadius: "8px",
//                 borderBottomRightRadius: "8px"
//               }}>
//                 <div style={{ 
//                   display: "flex", 
//                   justifyContent: "space-between", 
//                   alignItems: "flex-start",
//                   marginBottom: "15px",
//                   flexWrap: "wrap",
//                   gap: "15px"
//                 }}>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ 
//                       backgroundColor: COLORS.gold, 
//                       color: "white", 
//                       padding: "4px 12px", 
//                       borderRadius: "4px", 
//                       fontSize: "12px", 
//                       fontWeight: "600",
//                       display: "inline-block",
//                       marginBottom: "10px"
//                     }}>
//                       {selectedImage.category}
//                     </div>
//                     <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "10px" }}>
//                       {selectedImage.title}
//                     </h3>
//                     <p style={{ fontSize: "16px", opacity: 0.9 }}>
//                       {selectedImage.description}
//                     </p>
//                   </div>
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <button style={{ 
//                       background: "rgba(255,255,255,0.1)", 
//                       border: "none", 
//                       color: "white", 
//                       cursor: "pointer", 
//                       padding: "10px",
//                       borderRadius: "4px"
//                     }}>
//                       <Heart size={18} />
//                     </button>
//                     <button style={{ 
//                       background: "rgba(255,255,255,0.1)", 
//                       border: "none", 
//                       color: "white", 
//                       cursor: "pointer", 
//                       padding: "10px",
//                       borderRadius: "4px"
//                     }}>
//                       <Share2 size={18} />
//                     </button>
//                     <button style={{ 
//                       background: "rgba(255,255,255,0.1)", 
//                       border: "none", 
//                       color: "white", 
//                       cursor: "pointer", 
//                       padding: "10px",
//                       borderRadius: "4px"
//                     }}>
//                       <Download size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
//                   {selectedImage.tags.map((tag: string, idx: number) => (
//                     <span key={idx} style={{ 
//                       backgroundColor: "rgba(255,255,255,0.2)", 
//                       padding: "6px 12px", 
//                       borderRadius: "4px", 
//                       fontSize: "12px" 
//                     }}>
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div style={{ 
//                   marginTop: "20px", 
//                   fontSize: "14px", 
//                   opacity: 0.7,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   flexWrap: "wrap",
//                   gap: "10px"
//                 }}>
//                   <span>Image {lightboxIndex + 1} of {filteredImages.length}</span>
//                   <div style={{ display: "flex", gap: "10px" }}>
//                     <span>Use ← → keys to navigate</span>
//                     <span>Esc to close</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* FOOTER */}
//       <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
//             <div>
//               <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                 <span style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>DEV<span className="text-gold">PLASTICS</span></span>
//                 <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}> Company</span>
//               </div>
//               <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
//                 Explore our gallery of plastic fabrication projects across various industries and applications.
//               </p>
//               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//                 <Facebook size={20} style={{cursor:'pointer', color: '#ccc'}} />
//                 <Twitter size={20} style={{cursor:'pointer', color: '#ccc'}} />
//                 <Instagram size={20} style={{cursor:'pointer', color: '#ccc'}} />
//                 <Linkedin size={20} style={{cursor:'pointer', color: '#ccc'}} />
//               </div>
//             </div>

//             <div>
//               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
//              <ul style={{ listStyle: "none", padding: 0 }}>
//   <li style={{ marginBottom: "12px" }}>
//     <Link to="/" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
//       Home
//     </Link>
//   </li>

//   <li style={{ marginBottom: "12px" }}>
//     <Link to="/products" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
//       Products
//     </Link>
//   </li>

//   <li style={{ marginBottom: "12px" }}>
//     <Link to="/services" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
//       Services
//     </Link>
//   </li>

//   <li>
//     <Link to="/contact" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
//       Contact
//     </Link>
//   </li>
// </ul>

//             </div>

//             <div>
//               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Gallery Categories</h4>
//               <ul style={{ listStyle: 'none', padding: 0 }}>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> FRP Fabrication</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Industrial Projects</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Custom Parts</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Installation</a></li>
//                 <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Quality Control</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <MapPin size={16} color={COLORS.gold} />
//                   <span>Sector 4, Industrial Area, Mumbai - 400072</span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <Phone size={16} color={COLORS.gold} />
//                   <span>+91 98765 43210</span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <Mail size={16} color={COLORS.gold} />
//                   <span>info@devplastics.com</span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                   <Maximize2 size={16} color={COLORS.gold} />
//                   <span>Gallery Updated Monthly</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
//             <div>
//               © {new Date().getFullYear()} Dev Plastic Company. All Rights Reserved.
//             </div>
//             <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
//               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a>
//               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms & Conditions</a>
//               <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Search, X, ChevronLeft, ChevronRight, Maximize2, Filter,
  Factory, Shield, Layers, Wrench, Settings, Building,
  Download, Share2, Heart
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

type GalleryImage = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

// Gallery images data
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'FRP Industrial Cladding',
    category: 'FRP',
    description: 'High-strength FRP panels installed at chemical plant',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    tags: ['FRP', 'Cladding', 'Industrial']
  },
  {
    id: 2,
    title: 'Custom Plastic Components',
    category: 'Custom',
    description: 'Precision-machined plastic parts for machinery',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
    tags: ['Custom', 'Machining', 'Precision']
  },
  {
    id: 3,
    title: 'Factory Installation',
    category: 'Installation',
    description: 'Complete FRP wall panel installation at manufacturing unit',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
    tags: ['Installation', 'Factory', 'FRP']
  },
  {
    id: 6,
    title: 'Industrial Tank Covers',
    category: 'Industrial',
    description: 'Custom FRP covers for industrial storage tanks',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tags: ['Industrial', 'Tanks', 'Covers']
  },
  {
    id: 7,
    title: 'Architectural FRP Elements',
    category: 'FRP',
    description: 'Architectural FRP elements for building facade',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    tags: ['Architectural', 'FRP', 'Facade']
  },
  {
    id: 8,
    title: 'CNC Machining Process',
    category: 'Custom',
    description: 'CNC machining of plastic components in our facility',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    tags: ['CNC', 'Machining', 'Process']
  },
  {
    id: 9,
    title: 'Clean Room Installation',
    category: 'Installation',
    description: 'Hygienic plastic panels for pharmaceutical clean room',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
    tags: ['Clean Room', 'Pharma', 'Hygienic']
  },
  {
    id: 10,
    title: 'Retail Store Displays',
    category: 'Commercial',
    description: 'Custom plastic displays for retail store',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    tags: ['Retail', 'Displays', 'Commercial']
  },
  {
    id: 11,
    title: 'FRP Roofing Sheets',
    category: 'FRP',
    description: 'Installation of corrosion-resistant FRP roofing',
    image: 'src/images/image1.jpg',
    tags: ['Roofing', 'FRP', 'Corrosion-resistant']
  },
  {
    id: 12,
    title: 'Warehouse Partitioning',
    category: 'Industrial',
    description: 'Industrial-grade plastic partitions for warehouse',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    tags: ['Warehouse', 'Partitions', 'Industrial']
  }
];

// Gallery categories (counts are shown as UI only; filter uses selectedCategory)
const categories = [
  { id: 'All', name: 'All Projects', count: 12, icon: <Maximize2 size={18} /> },
  { id: 'FRP', name: 'FRP Fabrication', count: 3, icon: <Layers size={18} /> },
  { id: 'Industrial', name: 'Industrial', count: 2, icon: <Factory size={18} /> },
  { id: 'Commercial', name: 'Commercial', count: 2, icon: <Building size={18} /> },
  { id: 'Custom', name: 'Custom Parts', count: 2, icon: <Settings size={18} /> },
  { id: 'Installation', name: 'Installation', count: 2, icon: <Wrench size={18} /> },
  { id: 'Quality', name: 'Quality Control', count: 1, icon: <Shield size={18} /> }
];

// ── GALLERY PAGE ────────────────────────────────────────────────────────────
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredImages: GalleryImage[] =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!filteredImages.length) return;

    let newIndex: number;
    if (direction === "next") {
      newIndex = (lightboxIndex + 1) % filteredImages.length;
    } else {
      newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
    setLightboxIndex(newIndex);
  };

  // ✅ keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxIndex, selectedCategory]); // ✅ include selectedCategory to refresh filteredImages changes

  // ✅ FIX: When category changes while lightbox open, keep index safe + update selected image
  useEffect(() => {
    if (!isLightboxOpen) return;
    if (!filteredImages.length) {
      closeLightbox();
      return;
    }
    const safeIndex = Math.min(lightboxIndex, filteredImages.length - 1);
    setLightboxIndex(safeIndex);
    setSelectedImage(filteredImages[safeIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // ✅ NEW: close menu on resize + lock body scroll (doesn't fight lightbox)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (window.innerWidth > 968) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // if lightbox is open, it already locks scroll
    if (isLightboxOpen) return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      if (!isLightboxOpen) document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, isLightboxOpen]);

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
          --hero-h: 60vh;
          --hero-pad: 0 5%;
          --section-pad: 80px 5%;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body, #__next {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
        }

        .hover-scale:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transition: all 0.4s ease;
        }

        .btn-hover:hover {
          background-color: #8e6e4a !important;
          transform: scale(1.05);
          transition: all 0.3s;
        }

        .text-gold { color: ${COLORS.gold}; }
        .text-accent { color: ${COLORS.accent}; }

        .category-btn.active {
          background-color: ${COLORS.gold} !important;
          color: white !important;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          background: white;
          height: 100%;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          padding: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 5000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-container {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          width: auto;
          height: auto;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }

        /* ✅ NEW: Mobile menu styles (hamburger like your image: black square + white circle + 2 lines) */
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
            --hero-h: 56vh;
            --hero-pad: 0 16px;
            --section-pad: 70px 16px;
          }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-actions { display: inline-flex !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2.2rem !important; }
          .grid-responsive { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important; }
          .category-filters {
            flex-wrap: wrap;
            justify-content: center;
          }
          .category-filters button {
            font-size: 12px;
            padding: 10px 16px;
          }
        }

        @media (max-width: 480px) {
          :root{
            --hero-h: 52vh;
            --hero-pad: 0 14px;
            --section-pad: 64px 14px;
          }
          .grid-responsive { grid-template-columns: 1fr !important; }
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.8rem !important; }
        }
      `
      }} />

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
            <MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail size={14} color={COLORS.gold} /> info@devplastics.com
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Phone size={14} color={COLORS.gold} /> +91 98765 43210
          </span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Facebook size={14} style={{ cursor: 'pointer', color: '#ccc' }} />
          <Twitter size={14} style={{ cursor: 'pointer', color: '#ccc' }} />
          <Instagram size={14} style={{ cursor: 'pointer', color: '#ccc' }} />
          <Linkedin size={14} style={{ cursor: 'pointer', color: '#ccc' }} />
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '28px', fontWeight: '800', lineHeight: 1 }}>
            DEV<span className="text-gold">PLASTICS</span>
          </span>
          <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
            Company
          </span>
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", gap: "25px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", alignItems: "center" }}>
          <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>Home</Link>
          <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Services</Link>
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

        {/* ✅ NEW: Mobile actions */}
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
                    DEV<span style={{ color: COLORS.gold }}>PLASTICS</span>
                  </span>
                  <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
                    Company
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
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                <Link to="/gallery" className="active" onClick={closeMobileMenu}>Gallery</Link>
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
                    onClick={() => { setSelectedCategory("All"); closeMobileMenu(); }}
                  >
                    View All Projects
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
        height: "var(--hero-h, 60vh)",
        minHeight: "400px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "var(--hero-pad, 0 5%)",
        overflow: "hidden",
        backgroundColor: COLORS.dark
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920"
            alt="Gallery Background"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          style={{ position: "relative", zIndex: 2, color: "white", maxWidth: "800px", paddingTop: "40px", textAlign: "center", margin: "0 auto" }}
        >
          <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
            Our Work Gallery
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
            Project <span className="text-gold">Gallery</span>
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Explore our plastic fabrication projects across industries. Click on any image to view details.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
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
            }} className="btn-hover" onClick={() => setSelectedCategory("All")}>
              View All Projects
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
              Download Brochure
            </button>
          </div>
        </motion.div>
      </header>

      {/* FILTER CATEGORIES */}
      <section style={{ padding: "60px 5%", backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Categories
          </span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Browse By Category
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Filter our gallery by project type
          </p>
        </div>

        <div className="category-filters" style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              style={{
                backgroundColor: selectedCategory === category.id ? COLORS.gold : 'white',
                color: selectedCategory === category.id ? 'white' : COLORS.dark,
                padding: "12px 24px",
                border: `1px solid ${selectedCategory === category.id ? COLORS.gold : '#ddd'}`,
                borderRadius: "50px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "600",
                fontSize: "14px",
                transition: "all 0.3s ease",
                boxShadow: selectedCategory === category.id ? `0 5px 15px ${COLORS.gold}30` : '0 2px 10px rgba(0,0,0,0.05)'
              }}
            >
              {category.icon}
              {category.name}
              <span style={{
                backgroundColor: selectedCategory === category.id ? 'rgba(255,255,255,0.2)' : COLORS.bgLight,
                padding: "2px 8px",
                borderRadius: "10px",
                fontSize: "12px"
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding: "40px 5%", backgroundColor: COLORS.white }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px"
          }} className="grid-responsive">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="gallery-item hover-scale"
                onClick={() => openLightbox(image, index)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  cursor: "pointer"
                }}
              >
                <div style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src={image.image}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>

                <div className="gallery-overlay">
                  <div style={{
                    backgroundColor: COLORS.gold,
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "600",
                    display: "inline-block",
                    marginBottom: "10px"
                  }}>
                    {image.category}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "5px" }}>
                    {image.title}
                  </h3>
                  <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "15px" }}>
                    {image.description}
                  </p>
                </div>

                <div style={{ padding: "25px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px"
                  }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: COLORS.dark }}>
                      {image.title}
                    </h3>
                    <span style={{
                      backgroundColor: COLORS.bgLight,
                      color: COLORS.gold,
                      padding: "4px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}>
                      {image.category}
                    </span>
                  </div>
                  <p style={{ color: COLORS.lightText, fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                    {image.description}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: COLORS.lightText }}>
                      Click to view details
                    </span>
                    <Maximize2 size={18} color={COLORS.gold} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <Filter size={48} color={COLORS.lightText} style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "10px", color: COLORS.dark }}>
                No Projects Found
              </h3>
              <p style={{ color: COLORS.lightText, fontSize: "16px" }}>
                No projects match the selected category. Try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT STATS */}
      <section style={{ padding: "80px 5%", backgroundColor: COLORS.dark, color: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
            Our Achievements
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px" }}>
            Project Statistics
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>12</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Completed Projects</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>28</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Industrial Clients</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
           <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>15+</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Industries Served</div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div style={{ fontSize: "3.5rem", fontWeight: "800", color: COLORS.gold, marginBottom: "10px" }}>100%</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>Client Satisfaction</div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-backdrop"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "10px",
                  zIndex: 5001
                }}
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "15px",
                  borderRadius: "50%",
                  zIndex: 5001
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "15px",
                  borderRadius: "50%",
                  zIndex: 5001
                }}
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="lightbox-image"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                }}
              />

              {/* Image Info */}
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                color: "white",
                padding: "30px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "15px",
                  flexWrap: "wrap",
                  gap: "15px"
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      backgroundColor: COLORS.gold,
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "inline-block",
                      marginBottom: "10px"
                    }}>
                      {selectedImage.category}
                    </div>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "10px" }}>
                      {selectedImage.title}
                    </h3>
                    <p style={{ fontSize: "16px", opacity: 0.9 }}>
                      {selectedImage.description}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "4px"
                    }}>
                      <Heart size={18} />
                    </button>
                    <button style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "4px"
                    }}>
                      <Share2 size={18} />
                    </button>
                    <button style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "4px"
                    }}>
                      <Download size={18} />
                    </button>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                  {selectedImage.tags.map((tag: string, idx: number) => (
                    <span key={idx} style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "12px"
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  opacity: 0.7,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px"
                }}>
                  <span>Image {lightboxIndex + 1} of {filteredImages.length}</span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>Use ← → keys to navigate</span>
                    <span>Esc to close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <span style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>DEV<span className="text-gold">PLASTICS</span></span>
                <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}> Company</span>
              </div>
              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Explore our gallery of plastic fabrication projects across various industries and applications.
              </p>
              <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                <Facebook size={20} style={{ cursor: 'pointer', color: '#ccc' }} />
                <Twitter size={20} style={{ cursor: 'pointer', color: '#ccc' }} />
                <Instagram size={20} style={{ cursor: 'pointer', color: '#ccc' }} />
                <Linkedin size={20} style={{ cursor: 'pointer', color: '#ccc' }} />
              </div>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "12px" }}><Link to="/" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/products" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Products</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/services" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Services</Link></li>
                <li><Link to="/contact" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Gallery Categories</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> FRP Fabrication</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Industrial Projects</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Custom Parts</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Installation</a></li>
                <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Quality Control</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color={COLORS.gold} /><span>Sector 4, Industrial Area, Mumbai - 400072</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} color={COLORS.gold} /><span>+91 98765 43210</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color={COLORS.gold} /><span>info@devplastics.com</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Maximize2 size={16} color={COLORS.gold} /><span>Gallery Updated Monthly</span></div>
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
