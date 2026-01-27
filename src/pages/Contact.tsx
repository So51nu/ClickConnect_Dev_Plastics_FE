
// 'use client';
// import { Link } from "react-router-dom";

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
//   Search, Clock, CheckCircle, Quote, ChevronRight,
//   Send, Building2, MessageSquare, User, FileText
// } from 'lucide-react';

// // ── COLORS & ANIMATIONS (same as your About) ────────────────────────────────
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


// // const fadeIn = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { duration: 1.1 } }
// // };

// // const staggerChildren = {
// //   visible: { transition: { staggerChildren: 0.15 } }
// // };

// // ── ROTATING BACKGROUND SECTION (same hero style like your About) ───────────
// function RotatingBgSection({
//   images,
//   intervalMs = 8000,
//   overlay = "rgba(0,0,0,0.70)",
//   style = {},
//   children,
// }: {
//   images: string[];
//   intervalMs?: number;
//   overlay?: string;
//   style?: React.CSSProperties;
//   children: React.ReactNode;
// }) {
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIdx((p) => (p + 1) % images.length), intervalMs);
//     return () => clearInterval(t);
//   }, [images.length, intervalMs]);

//   return (
//     <section style={{ position: "relative", overflow: "hidden", ...style }}>
//       {images.map((img, i) => (
//         <div
//           key={img + i}
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage: `url("${img}")`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             opacity: i === idx ? 1 : 0,
//             transition: "opacity 1.5s ease-in-out",
//             zIndex: 0
//           }}
//         />
//       ))}
//       <div style={{ position: "absolute", inset: 0, backgroundColor: overlay, zIndex: 1 }} />
//       <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
//     </section>
//   );
// }

// // ── CONTACT US PAGE (UI matched to your About) ──────────────────────────────
// export default function ContactUs() {
//   const heroImages = [
//     "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920"
//   ];

//   const facilityBg = [
//     "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=1920"
//   ];

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onChange = (key: keyof typeof form, value: string) => {
//     setForm((p) => ({ ...p, [key]: value }));
//   };

// const API_BASE = "http://127.0.0.1:8000";

// const onSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);
//   setIsSubmitted(false);

//   try {
//     const res = await fetch(`${API_BASE}/api/contact/`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

//     setIsSubmitted(true);
//     setForm({ name: "", email: "", phone: "", subject: "", message: "" });
//   } catch (err) {
//     alert("Submit failed. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   const quickPoints = [
//     "Material: FRP / GRP / PVC / Polycarbonate",
//     "Thickness & dimensions (mm)",
//     "Quantity + delivery location",
//     "Supply only or Installation required",
//     "Timeline / urgency"
//   ];

//   return (
//     <div style={{
//       width: '100vw',
//       minHeight: '100vh',
//       margin: 0,
//       padding: 0,
//       overflowX: 'hidden',
//       backgroundColor: COLORS.white
//     }}>
//       {/* GLOBAL CSS (same pattern as your About) */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         html, body {
//           margin: 0 !important;
//           padding: 0 !important;
//           width: 100vw !important;
//           min-height: 100vh !important;
//           overflow-x: hidden !important;
//         }
//         * { box-sizing: border-box; }

//         .hover-scale:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
//           transition: all 0.4s ease;
//         }

//         .btn-hover:hover {
//           background-color: #8e6e4a !important;
//           transform: scale(1.05);
//           transition: all 0.3s;
//         }

//         .text-gold { color: ${COLORS.gold}; }
//         .text-accent { color: ${COLORS.accent}; }

//         .input {
//           width: 100%;
//           padding: 14px 14px;
//           border: 1px solid #e8e8e8;
//           border-radius: 4px;
//           outline: none;
//           font-size: 14px;
//           transition: all .2s ease;
//           background: white;
//         }
//         .input:focus {
//           border-color: ${COLORS.gold};
//           box-shadow: 0 0 0 4px rgba(163,127,87,0.14);
//         }

//         .pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 14px;
//           border-radius: 999px;
//           background: ${COLORS.bgLight};
//           border: 1px solid #eee;
//           font-size: 12px;
//           font-weight: 800;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           color: #333;
//         }

//         @media (max-width: 968px) {
//           .nav-links-desktop { display: none !important; }
//           h1 { font-size: 2.5rem !important; }
//           h2 { font-size: 2.2rem !important; }
//           .grid-responsive { grid-template-columns: 1fr !important; }
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
//           <Facebook size={14} style={{ cursor: 'pointer' }} color="#ccc" />
//           <Twitter size={14} style={{ cursor: 'pointer' }} color="#ccc" />
//           <Instagram size={14} style={{ cursor: 'pointer' }} color="#ccc" />
//           <Linkedin size={14} style={{ cursor: 'pointer' }} color="#ccc" />
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
//           DEV<span className="text-gold">PLASTICS</span>
//           </span>
//           <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
//             COMPANY
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

//           <Search size={18} style={{ cursor: 'pointer' }} />
//         </div>

//         <button
//           style={{
//             backgroundColor: COLORS.gold,
//             color: "white",
//             padding: "12px 28px",
//             border: "none",
//             fontSize: "13px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             cursor: "pointer",
//             letterSpacing: "1px",
//             borderRadius: "4px"
//           }}
//           className="btn-hover"
//           onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
//         >
//           Send Message →
//         </button>
//       </nav>

//       {/* HERO (same as your About hero: rotating bg + overlay + big text) */}
//       <RotatingBgSection
//         images={heroImages}
//         intervalMs={8000}
//         overlay="rgba(0,0,0,0.70)"
//         style={{ height: "70vh", width: "100%", display: "flex", alignItems: "center", padding: "0 5%" }}
//       >
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeInUp}
//           style={{ color: "white", maxWidth: "900px", paddingTop: "40px" }}
//         >
//           <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
//             Contact Dev Plastics
//           </p>
//           <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
//             Get a <span className="text-gold">Quick Quote</span> <br /> Within 24 Hours
//           </h1>
//           <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '650px' }}>
//             Share your requirement — material, size, quantity, and location — we’ll reply with a detailed plan and pricing.
//           </p>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <button style={btnPrimary} className="btn-hover" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
//               Get In Touch
//             </button>
//             <button style={btnOutline} className="btn-hover" onClick={() => (window.location.href = "tel:+919876543210")}>
//               Call Now
//             </button>
//           </div>
//         </motion.div>
//       </RotatingBgSection>

//       {/* COMPANY CONTACT OVERVIEW (WHITE, like your overview section) */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.white }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "60px", alignItems: "center" }} className="grid-responsive">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <span style={sectionKicker}>Reach Us</span>
//             <h2 style={sectionTitle}>Let’s Talk About Your Fabrication Requirement</h2>
//             <p style={sectionText}>
//               From FRP panels and industrial cladding to custom fabrication and installation — share your requirement and we’ll guide you with the right material and execution plan.
//             </p>

//             <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: 24 }}>
//               <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Fast Response</span>
//               <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Clean Finish</span>
//               <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> On-site Installation</span>
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginTop: 34 }}>
//               <MiniInfo icon={<Phone size={16} color={COLORS.gold} />} title="Call" value="+91 98765 43210" />
//               <MiniInfo icon={<Mail size={16} color={COLORS.gold} />} title="Email" value="info@devplastics.com" />
//               <MiniInfo icon={<Clock size={16} color={COLORS.gold} />} title="Hours" value="Mon–Sat: 9 AM – 7 PM" />
//               <MiniInfo icon={<MapPin size={16} color={COLORS.gold} />} title="Location" value="Mumbai - 400072" />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             style={{ position: "relative" }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900"
//               alt="Facility"
//               style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//             />
//             <div style={{
//               position: "absolute",
//               bottom: "26px",
//               left: "-26px",
//               backgroundColor: COLORS.dark,
//               color: "white",
//               padding: "28px",
//               borderRadius: "8px",
//               maxWidth: "320px",
//               boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
//             }}>
//               <div style={{ fontSize: "1.4rem", fontWeight: 800, color: COLORS.gold, marginBottom: 10 }}>Quick Note</div>
//               <div style={{ fontSize: "1rem", lineHeight: 1.6, opacity: 0.92 }}>
//                 Send drawings/specs on email — we’ll suggest thickness, finish and installation plan.
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CONTACT CARDS (BG LIGHT, like your Mission/Vision section bg) */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.bgLight }}>
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <span style={sectionKicker}>Contact Details</span>
//           <h2 style={sectionTitle}>We’re Here To Help</h2>
//           <p style={{ ...sectionText, maxWidth: 760, margin: "0 auto" }}>
//             Choose the fastest way to reach us for quotations, site visits, or urgent requirements.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: 1200, margin: "0 auto" }}>
//           <CardBox icon={<Building2 size={22} color={COLORS.gold} />} title="Address" text="Sector 4, Industrial Area, Mumbai - 400072" />
//           <CardBox icon={<Phone size={22} color={COLORS.gold} />} title="Phone" text="+91 98765 43210 / +91 98765 43211" />
//           <CardBox icon={<Mail size={22} color={COLORS.gold} />} title="Email" text="info@devpplastics.com / sales@devplastics.com" />
//           <CardBox icon={<Clock size={22} color={COLORS.gold} />} title="Working Hours" text="Mon - Sat: 9:00 AM - 7:00 PM (Sun Closed)" />
//         </div>
//       </section>

//       {/* FORM SECTION (WHITE like your Team section) */}
//       <section id="contact-form" style={{ padding: "100px 5%", backgroundColor: COLORS.white }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: "60px" }}>
//             <span style={sectionKicker}>Send a Message</span>
//             <h2 style={sectionTitle}>Request a Quote</h2>
//             <p style={{ ...sectionText, maxWidth: 760, margin: "0 auto" }}>
//               Share project details and we’ll respond quickly with pricing and timelines.
//             </p>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "30px", alignItems: "start" }} className="grid-responsive">
//             {/* FORM */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               style={{
//                 backgroundColor: COLORS.bgLight,
//                 padding: "42px 34px",
//                 borderRadius: "12px",
//                 border: "1px solid #eee"
//               }}
//               className="hover-scale"
//             >
//               {isSubmitted && (
//                 <div style={{
//                   background: `${COLORS.gold}15`,
//                   border: `1px solid ${COLORS.gold}35`,
//                   padding: "14px 14px",
//                   borderRadius: 10,
//                   display: "flex",
//                   gap: 10,
//                   alignItems: "center",
//                   marginBottom: 18
//                 }}>
//                   <CheckCircle size={18} color={COLORS.gold} />
//                   <div style={{ fontWeight: 800, color: "#333", fontSize: 14 }}>
//                     Message sent successfully. We’ll contact you soon.
//                   </div>
//                 </div>
//               )}

//               <form onSubmit={onSubmit}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                   <div>
//                     <div style={labelStyle}><User size={14} /> Full Name</div>
//                     <input className="input" value={form.name} onChange={(e) => onChange("name", e.target.value)} placeholder="Your name" required />
//                   </div>
//                   <div>
//                     <div style={labelStyle}><Mail size={14} /> Email</div>
//                     <input className="input" value={form.email} onChange={(e) => onChange("email", e.target.value)} placeholder="you@email.com" type="email" required />
//                   </div>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
//                   <div>
//                     <div style={labelStyle}><Phone size={14} /> Phone</div>
//                     <input className="input" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" required />
//                   </div>
//                   <div>
//                     <div style={labelStyle}><FileText size={14} /> Subject</div>
//                     <input className="input" value={form.subject} onChange={(e) => onChange("subject", e.target.value)} placeholder="FRP Panels / Cladding / Installation" />
//                   </div>
//                 </div>

//                 <div style={{ marginTop: 14 }}>
//                   <div style={labelStyle}><MessageSquare size={14} /> Message</div>
//                   <textarea
//                     className="input"
//                     value={form.message}
//                     onChange={(e) => onChange("message", e.target.value)}
//                     placeholder="Tell us size, thickness, quantity, location, and timeline…"
//                     rows={6}
//                     required
//                     style={{ resize: "vertical" }}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn-hover"
//                   disabled={isSubmitting}
//                   style={{
//                     marginTop: 18,
//                     width: "100%",
//                     backgroundColor: COLORS.gold,
//                     color: "white",
//                     padding: "14px 18px",
//                     border: "none",
//                     borderRadius: 6,
//                     cursor: isSubmitting ? "not-allowed" : "pointer",
//                     fontWeight: 900,
//                     textTransform: "uppercase",
//                     letterSpacing: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: 10,
//                     opacity: isSubmitting ? 0.85 : 1
//                   }}
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                   <Send size={16} />
//                 </button>
//               </form>
//             </motion.div>

//             {/* RIGHT SIDE: WHAT TO SHARE + MINI FAQ CARD */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               style={{ display: "flex", flexDirection: "column", gap: 18 }}
//             >
//               <div className="hover-scale" style={{ backgroundColor: COLORS.bgLight, borderRadius: 12, padding: 26, border: "1px solid #eee" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
//                   <Quote size={22} color={COLORS.gold} />
//                   <div style={{ fontWeight: 900, color: "#222" }}>What to include</div>
//                 </div>
//                 <ul style={{ margin: 0, paddingLeft: 18, color: COLORS.lightText, lineHeight: 1.9, fontSize: 14 }}>
//                   {quickPoints.map((p) => <li key={p}>{p}</li>)}
//                 </ul>

//                 <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
//                   <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> ISO Process</span>
//                   <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Fast Turnaround</span>
//                   <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Site Support</span>
//                 </div>
//               </div>

//               <div className="hover-scale" style={{ backgroundColor: COLORS.dark, color: "white", borderRadius: 12, padding: 26 }}>
//                 <div style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
//                   Quick Help
//                 </div>
//                 <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
//                   Need urgent support?
//                 </div>
//                 <div style={{ color: "#ccc", lineHeight: 1.7, fontSize: 14 }}>
//                   Call us directly for urgent fabrication requirements and faster scheduling.
//                 </div>
//                 <a
//                   href="tel:+919876543210"
//                   style={{
//                     marginTop: 14,
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: 8,
//                     color: COLORS.gold,
//                     fontWeight: 900,
//                     textDecoration: "none",
//                     textTransform: "uppercase",
//                     letterSpacing: 1,
//                     fontSize: 13
//                   }}
//                 >
//                   Call Now <ChevronRight size={14} />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FACILITY / MAP SECTION (DARK like your Timeline section + rotating backgrounds) */}
//       <RotatingBgSection
//         images={facilityBg}
//         intervalMs={9000}
//         overlay="rgba(0,0,0,0.80)"
//         style={{ padding: "100px 5%", color: "white" }}
//       >
//         <div style={{ textAlign: "center", marginBottom: 60 }}>
//           <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
//             Visit Us
//           </span>
//           <h2 style={{ fontSize: "3rem", fontWeight: 800, marginTop: 15 }}>
//             Schedule a Facility Visit
//           </h2>
//           <p style={{ color: "#aaa", maxWidth: 760, margin: "20px auto 0", fontSize: 18 }}>
//             See our fabrication setup, sample finishes, and discuss execution timelines on-site.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28, maxWidth: 1200, margin: "0 auto" }} className="grid-responsive">
//           <div className="hover-scale" style={{ backgroundColor: "white", borderRadius: 12, overflow: "hidden" }}>
//             <iframe
//               title="Dev Plastics Company"
//               src="https://www.google.com/maps?q=Mumbai%20400072&output=embed"
//               style={{ border: 0, width: "100%", height: 360 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//             <div style={{ padding: 20, color: "#222" }}>
//               <div style={{ fontWeight: 900, marginBottom: 6 }}>Dev Plastics Facility</div>
//               <div style={{ color: COLORS.lightText, fontSize: 14, lineHeight: 1.7 }}>
//                 Sector 4, Industrial Area, Mumbai - 400072
//               </div>
//             </div>
//           </div>

//           <div className="hover-scale" style={{ backgroundColor: "#222", borderRadius: 12, padding: 26, border: "1px solid rgba(255,255,255,0.12)" }}>
//             <div style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
//               Booking
//             </div>
//             <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 10, color: "white" }}>
//               Plan your visit
//             </div>
//             <div style={{ color: "#ccc", lineHeight: 1.8, fontSize: 14 }}>
//               • Confirm date & time <br />
//               • Share project drawings/specs <br />
//               • Discuss site conditions <br />
//               • Finalize execution plan
//             </div>

//             <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
//               <button style={btnPrimary} className="btn-hover" onClick={() => (window.location.href = "mailto:info@devplastics.com")}>
//                 Email Us
//               </button>
//               <button style={{ ...btnPrimary, backgroundColor: "transparent", border: `1px solid ${COLORS.gold}` }} className="btn-hover" onClick={() => (window.location.href = "tel:+919876543210")}>
//                 Call Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </RotatingBgSection>

//       {/* CTA (same as your About CTA: solid accent) */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.accent, color: "white", textAlign: "center" }}>
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
//             Start Your Fabrication Project With Dev Plastics
//           </h2>
//           <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px", opacity: 0.9 }}>
//             Join hundreds of satisfied clients who trust Dev Plastics for quality fabrication and on-time delivery.
//           </p>
//           <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//             <button style={{ ...btnPrimary, padding: "16px 40px" }} className="btn-hover" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
//               Send Requirement
//             </button>
//             <button style={{ ...btnOutline, padding: "16px 40px" }} className="btn-hover" onClick={() => (window.location.href = "/services")}>
//               View Services
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* FOOTER (same as your About) */}
//       <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
//             <div>
//               <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
//                 <span style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>
//                   DEV<span className="text-gold">PLASTICS</span>
//                 </span>
//                 <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}>
//                   COMPANY
//                 </span>
//               </div>
//               <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
//                 Precision plastic fabrication solutions for industrial, commercial, and architectural applications.
//               </p>
//               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//                 <Facebook size={20} style={{ cursor: 'pointer' }} />
//                 <Twitter size={20} style={{ cursor: 'pointer' }} />
//                 <Instagram size={20} style={{ cursor: 'pointer' }} />
//                 <Linkedin size={20} style={{ cursor: 'pointer' }} />
//               </div>
//             </div>

//             <div>
//               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
//               <ul style={{ listStyle: "none", padding: 0 }}>
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
//                   <Clock size={16} color={COLORS.gold} />
//                   <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
//             <div>© {new Date().getFullYear()} Dev Plastic Company. All Rights Reserved.</div>
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

// // ── STYLES (same vibe as your About) ────────────────────────────────────────
// const sectionKicker: React.CSSProperties = {
//   color: COLORS.gold,
//   fontSize: "14px",
//   letterSpacing: "3px",
//   textTransform: "uppercase",
//   fontWeight: 600
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: "3rem",
//   fontWeight: 800,
//   margin: "20px 0",
//   color: "#222"
// };

// const sectionText: React.CSSProperties = {
//   color: COLORS.lightText,
//   lineHeight: "1.7",
//   marginBottom: 10,
//   fontSize: "18px"
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: 12,
//   fontWeight: 800,
//   letterSpacing: 1,
//   textTransform: "uppercase",
//   color: "#444",
//   marginBottom: 8,
//   display: "flex",
//   alignItems: "center",
//   gap: 8
// };

// const btnPrimary: React.CSSProperties = {
//   backgroundColor: COLORS.gold,
//   border: `1px solid ${COLORS.gold}`,
//   color: "white",
//   padding: "12px 28px",
//   fontSize: "13px",
//   fontWeight: 700,
//   textTransform: "uppercase",
//   cursor: "pointer",
//   letterSpacing: "1px",
//   borderRadius: "4px"
// };

// const btnOutline: React.CSSProperties = {
//   backgroundColor: "transparent",
//   border: `2px solid white`,
//   color: "white",
//   padding: "12px 28px",
//   fontSize: "13px",
//   fontWeight: 700,
//   textTransform: "uppercase",
//   cursor: "pointer",
//   letterSpacing: "1px",
//   borderRadius: "4px"
// };

// function MiniInfo({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
//   return (
//     <div style={{
//       backgroundColor: COLORS.bgLight,
//       borderRadius: 10,
//       padding: "14px 14px",
//       border: "1px solid #eee",
//       display: "flex",
//       gap: 10,
//       alignItems: "flex-start"
//     }} className="hover-scale">
//       <div style={{ marginTop: 2 }}>{icon}</div>
//       <div>
//         <div style={{ fontWeight: 900, color: "#222", fontSize: 13, marginBottom: 3, letterSpacing: 0.3 }}>{title}</div>
//         <div style={{ color: COLORS.lightText, fontSize: 13, lineHeight: 1.6 }}>{value}</div>
//       </div>
//     </div>
//   );
// }

// function CardBox({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeInUp}
//       className="hover-scale"
//       style={{
//         backgroundColor: COLORS.white,
//         borderRadius: 12,
//         padding: "28px 22px",
//         border: "1px solid #eee"
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
//         <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: COLORS.bgLight, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #eee" }}>
//           {icon}
//         </div>
//         <div style={{ fontWeight: 900, color: "#222", fontSize: 16 }}>{title}</div>
//       </div>
//       <div style={{ color: COLORS.lightText, lineHeight: 1.7, fontSize: 14 }}>
//         {text}
//       </div>
//     </motion.div>
//   );
// }

'use client';
import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Search, Clock, CheckCircle, Quote, ChevronRight,
  Send, Building2, MessageSquare, User, FileText, X
} from 'lucide-react';

// ── COLORS & ANIMATIONS (same as your About) ────────────────────────────────
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

// ── ROTATING BACKGROUND SECTION (same hero style like your About) ───────────
function RotatingBgSection({
  images,
  intervalMs = 8000,
  overlay = "rgba(0,0,0,0.70)",
  style = {},
  children,
}: {
  images: string[];
  intervalMs?: number;
  overlay?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  return (
    <section style={{ position: "relative", overflow: "hidden", ...style }}>
      {images.map((img, i) => (
        <div
          key={img + i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === idx ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0
          }}
        />
      ))}
      <div style={{ position: "absolute", inset: 0, backgroundColor: overlay, zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </section>
  );
}

// ── CONTACT US PAGE (UI matched to your About) ──────────────────────────────
export default function ContactUs() {
  const heroImages = [
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920"
  ];

  const facilityBg = [
    "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=1920"
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  // ✅ IMPORTANT: Use env for API base (works on dev + prod)
  // If you want fixed local only, keep "http://127.0.0.1:8000"
  const API_BASE = (import.meta as any)?.env?.VITE_API_BASE || "https://backend.devplastic.in";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const res = await fetch(`${API_BASE}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.ok === false)) throw new Error((data as any)?.error || "Failed");

      setIsSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      alert("Submit failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickPoints = [
    "Material: FRP / GRP / PVC / Polycarbonate",
    "Thickness & dimensions (mm)",
    "Quantity + delivery location",
    "Supply only or Installation required",
    "Timeline / urgency"
  ];

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

        .input {
          width: 100%;
          padding: 14px 14px;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
          outline: none;
          font-size: 14px;
          transition: all .2s ease;
          background: white;
        }
        .input:focus {
          border-color: ${COLORS.gold};
          box-shadow: 0 0 0 4px rgba(163,127,87,0.14);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: ${COLORS.bgLight};
          border: 1px solid #eee;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #333;
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
            --hero-h: 62vh;
            --hero-pad: 0 16px;
            --section-pad: 80px 16px;
          }
          .nav-links-desktop { display: none !important; }
          .nav-mobile-actions { display: inline-flex !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2.2rem !important; }
          .grid-responsive { grid-template-columns: 1fr !important; }
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '28px', fontWeight: '800', lineHeight: 1 }}>
            DEV<span className="text-gold">PLASTICS</span>
          </span>
          <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
            COMPANY
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

        <button
          style={{
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
          }}
          className="btn-hover"
          onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
        >
          Send Message →
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
                    COMPANY
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
                <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
                <Link to="/contact" className="active" onClick={closeMobileMenu}>Contact</Link>
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
                    onClick={() => { closeMobileMenu(); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }); }}
                  >
                    Send Message →
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

      {/* HERO */}
      <RotatingBgSection
        images={heroImages}
        intervalMs={8000}
        overlay="rgba(0,0,0,0.70)"
        style={{ height: "var(--hero-h, 70vh)", width: "100%", display: "flex", alignItems: "center", padding: "var(--hero-pad, 0 5%)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          style={{ color: "white", maxWidth: "900px", paddingTop: "40px" }}
        >
          <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
            Contact Dev Plastics
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
            Get a <span className="text-gold">Quick Quote</span> <br /> Within 24 Hours
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '650px' }}>
            Share your requirement — material, size, quantity, and location — we’ll reply with a detailed plan and pricing.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button style={btnPrimary} className="btn-hover" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
              Get In Touch
            </button>
            <button style={btnOutline} className="btn-hover" onClick={() => (window.location.href = "tel:+919876543210")}>
              Call Now
            </button>
          </div>
        </motion.div>
      </RotatingBgSection>

      {/* COMPANY CONTACT OVERVIEW */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "60px", alignItems: "center" }} className="grid-responsive">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span style={sectionKicker}>Reach Us</span>
            <h2 style={sectionTitle}>Let’s Talk About Your Fabrication Requirement</h2>
            <p style={sectionText}>
              From FRP panels and industrial cladding to custom fabrication and installation — share your requirement and we’ll guide you with the right material and execution plan.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: 24 }}>
              <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Fast Response</span>
              <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Clean Finish</span>
              <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> On-site Installation</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginTop: 34 }}>
              <MiniInfo icon={<Phone size={16} color={COLORS.gold} />} title="Call" value="+91 98765 43210" />
              <MiniInfo icon={<Mail size={16} color={COLORS.gold} />} title="Email" value="info@devplastics.com" />
              <MiniInfo icon={<Clock size={16} color={COLORS.gold} />} title="Hours" value="Mon–Sat: 9 AM – 7 PM" />
              <MiniInfo icon={<MapPin size={16} color={COLORS.gold} />} title="Location" value="Mumbai - 400072" />
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900"
              alt="Facility"
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            />
            <div style={{
              position: "absolute",
              bottom: "26px",
              left: "-26px",
              backgroundColor: COLORS.dark,
              color: "white",
              padding: "28px",
              borderRadius: "8px",
              maxWidth: "320px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
            }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: COLORS.gold, marginBottom: 10 }}>Quick Note</div>
              <div style={{ fontSize: "1rem", lineHeight: 1.6, opacity: 0.92 }}>
                Send drawings/specs on email — we’ll suggest thickness, finish and installation plan.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={sectionKicker}>Contact Details</span>
          <h2 style={sectionTitle}>We’re Here To Help</h2>
          <p style={{ ...sectionText, maxWidth: 760, margin: "0 auto" }}>
            Choose the fastest way to reach us for quotations, site visits, or urgent requirements.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: 1200, margin: "0 auto" }}>
          <CardBox icon={<Building2 size={22} color={COLORS.gold} />} title="Address" text="Sector 4, Industrial Area, Mumbai - 400072" />
          <CardBox icon={<Phone size={22} color={COLORS.gold} />} title="Phone" text="+91 98765 43210 / +91 98765 43211" />
          <CardBox icon={<Mail size={22} color={COLORS.gold} />} title="Email" text="info@devplastics.com / sales@devplastics.com" />
          <CardBox icon={<Clock size={22} color={COLORS.gold} />} title="Working Hours" text="Mon - Sat: 9:00 AM - 7:00 PM (Sun Closed)" />
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="contact-form" style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={sectionKicker}>Send a Message</span>
            <h2 style={sectionTitle}>Request a Quote</h2>
            <p style={{ ...sectionText, maxWidth: 760, margin: "0 auto" }}>
              Share project details and we’ll respond quickly with pricing and timelines.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "30px", alignItems: "start" }} className="grid-responsive">
            {/* FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{
                backgroundColor: COLORS.bgLight,
                padding: "42px 34px",
                borderRadius: "12px",
                border: "1px solid #eee"
              }}
              className="hover-scale"
            >
              {isSubmitted && (
                <div style={{
                  background: `${COLORS.gold}15`,
                  border: `1px solid ${COLORS.gold}35`,
                  padding: "14px 14px",
                  borderRadius: 10,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  marginBottom: 18
                }}>
                  <CheckCircle size={18} color={COLORS.gold} />
                  <div style={{ fontWeight: 800, color: "#333", fontSize: 14 }}>
                    Message sent successfully. We’ll contact you soon.
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <div style={labelStyle}><User size={14} /> Full Name</div>
                    <input className="input" value={form.name} onChange={(e) => onChange("name", e.target.value)} placeholder="Your name" required />
                  </div>
                  <div>
                    <div style={labelStyle}><Mail size={14} /> Email</div>
                    <input className="input" value={form.email} onChange={(e) => onChange("email", e.target.value)} placeholder="you@email.com" type="email" required />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                  <div>
                    <div style={labelStyle}><Phone size={14} /> Phone</div>
                    <input className="input" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div>
                    <div style={labelStyle}><FileText size={14} /> Subject</div>
                    <input className="input" value={form.subject} onChange={(e) => onChange("subject", e.target.value)} placeholder="FRP Panels / Cladding / Installation" />
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <div style={labelStyle}><MessageSquare size={14} /> Message</div>
                  <textarea
                    className="input"
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Tell us size, thickness, quantity, location, and timeline…"
                    rows={6}
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-hover"
                  disabled={isSubmitting}
                  style={{
                    marginTop: 18,
                    width: "100%",
                    backgroundColor: COLORS.gold,
                    color: "white",
                    padding: "14px 18px",
                    border: "none",
                    borderRadius: 6,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    opacity: isSubmitting ? 0.85 : 1
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div className="hover-scale" style={{ backgroundColor: COLORS.bgLight, borderRadius: 12, padding: 26, border: "1px solid #eee" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <Quote size={22} color={COLORS.gold} />
                  <div style={{ fontWeight: 900, color: "#222" }}>What to include</div>
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: COLORS.lightText, lineHeight: 1.9, fontSize: 14 }}>
                  {quickPoints.map((p) => <li key={p}>{p}</li>)}
                </ul>

                <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> ISO Process</span>
                  <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Fast Turnaround</span>
                  <span className="pill"><CheckCircle size={14} color={COLORS.gold} /> Site Support</span>
                </div>
              </div>

              <div className="hover-scale" style={{ backgroundColor: COLORS.dark, color: "white", borderRadius: 12, padding: 26 }}>
                <div style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
                  Quick Help
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
                  Need urgent support?
                </div>
                <div style={{ color: "#ccc", lineHeight: 1.7, fontSize: 14 }}>
                  Call us directly for urgent fabrication requirements and faster scheduling.
                </div>
                <a
                  href="tel:+919876543210"
                  style={{
                    marginTop: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: COLORS.gold,
                    fontWeight: 900,
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontSize: 13
                  }}
                >
                  Call Now <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FACILITY / MAP SECTION */}
      <RotatingBgSection
        images={facilityBg}
        intervalMs={9000}
        overlay="rgba(0,0,0,0.80)"
        style={{ padding: "var(--section-pad, 100px 5%)", color: "white" }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
            Visit Us
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginTop: 15 }}>
            Schedule a Facility Visit
          </h2>
          <p style={{ color: "#aaa", maxWidth: 760, margin: "20px auto 0", fontSize: 18 }}>
            See our fabrication setup, sample finishes, and discuss execution timelines on-site.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28, maxWidth: 1200, margin: "0 auto" }} className="grid-responsive">
          <div className="hover-scale" style={{ backgroundColor: "white", borderRadius: 12, overflow: "hidden" }}>
            <iframe
              title="Dev Plastics Company"
              src="https://www.google.com/maps?q=Mumbai%20400072&output=embed"
              style={{ border: 0, width: "100%", height: 360 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ padding: 20, color: "#222" }}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Dev Plastics Facility</div>
              <div style={{ color: COLORS.lightText, fontSize: 14, lineHeight: 1.7 }}>
                Sector 4, Industrial Area, Mumbai - 400072
              </div>
            </div>
          </div>

          <div className="hover-scale" style={{ backgroundColor: "#222", borderRadius: 12, padding: 26, border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
              Booking
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 10, color: "white" }}>
              Plan your visit
            </div>
            <div style={{ color: "#ccc", lineHeight: 1.8, fontSize: 14 }}>
              • Confirm date & time <br />
              • Share project drawings/specs <br />
              • Discuss site conditions <br />
              • Finalize execution plan
            </div>

            <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={btnPrimary} className="btn-hover" onClick={() => (window.location.href = "mailto:info@devplastics.com")}>
                Email Us
              </button>
              <button style={{ ...btnPrimary, backgroundColor: "transparent", border: `1px solid ${COLORS.gold}` }} className="btn-hover" onClick={() => (window.location.href = "tel:+919876543210")}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </RotatingBgSection>

      {/* CTA */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.accent, color: "white", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
            Start Your Fabrication Project With Dev Plastics
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px", opacity: 0.9 }}>
            Join hundreds of satisfied clients who trust Dev Plastics for quality fabrication and on-time delivery.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ ...btnPrimary, padding: "16px 40px" }} className="btn-hover" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
              Send Requirement
            </button>
            <button style={{ ...btnOutline, padding: "16px 40px" }} className="btn-hover" onClick={() => (window.location.href = "/services")}>
              View Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <span style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>
                  DEV<span className="text-gold">PLASTICS</span>
                </span>
                <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}>
                  COMPANY
                </span>
              </div>
              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Precision plastic fabrication solutions for industrial, commercial, and architectural applications.
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
                <li style={{ marginBottom: "12px" }}><Link to="/" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/products" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Products</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/services" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Services</Link></li>
                <li><Link to="/contact" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color={COLORS.gold} /><span>Sector 4, Industrial Area, Mumbai - 400072</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} color={COLORS.gold} /><span>+91 98765 43210</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color={COLORS.gold} /><span>info@devplastics.com</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={16} color={COLORS.gold} /><span>Mon-Sat: 9:00 AM - 7:00 PM</span></div>
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

// ── STYLES ────────────────────────────────────────────────────────────────
const sectionKicker: React.CSSProperties = {
  color: COLORS.gold,
  fontSize: "14px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontWeight: 600
};

const sectionTitle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 800,
  margin: "20px 0",
  color: "#222"
};

const sectionText: React.CSSProperties = {
  color: COLORS.lightText,
  lineHeight: "1.7",
  marginBottom: 10,
  fontSize: "18px"
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "#444",
  marginBottom: 8,
  display: "flex",
  alignItems: "center",
  gap: 8
};

const btnPrimary: React.CSSProperties = {
  backgroundColor: COLORS.gold,
  border: `1px solid ${COLORS.gold}`,
  color: "white",
  padding: "12px 28px",
  fontSize: "13px",
  fontWeight: 700,
  textTransform: "uppercase",
  cursor: "pointer",
  letterSpacing: "1px",
  borderRadius: "4px"
};

const btnOutline: React.CSSProperties = {
  backgroundColor: "transparent",
  border: `2px solid white`,
  color: "white",
  padding: "12px 28px",
  fontSize: "13px",
  fontWeight: 700,
  textTransform: "uppercase",
  cursor: "pointer",
  letterSpacing: "1px",
  borderRadius: "4px"
};

function MiniInfo({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div style={{
      backgroundColor: COLORS.bgLight,
      borderRadius: 10,
      padding: "14px 14px",
      border: "1px solid #eee",
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }} className="hover-scale">
      <div style={{ marginTop: 2 }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 900, color: "#222", fontSize: 13, marginBottom: 3, letterSpacing: 0.3 }}>{title}</div>
        <div style={{ color: COLORS.lightText, fontSize: 13, lineHeight: 1.6 }}>{value}</div>
      </div>
    </div>
  );
}

function CardBox({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="hover-scale"
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: "28px 22px",
        border: "1px solid #eee"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: COLORS.bgLight, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #eee" }}>
          {icon}
        </div>
        <div style={{ fontWeight: 900, color: "#222", fontSize: 16 }}>{title}</div>
      </div>
      <div style={{ color: COLORS.lightText, lineHeight: 1.7, fontSize: 14 }}>
        {text}
      </div>
    </motion.div>
  );
}
