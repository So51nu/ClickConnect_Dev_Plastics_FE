// 'use client';
// import { Link } from "react-router-dom";

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
//   Search, Layers, Settings, PenTool, Shield, Factory,
//   Thermometer, Wrench, HardHat, CheckCircle, Truck, Clock, Battery,
//   ChevronRight, Quote, 
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


// // const fadeIn = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { duration: 1.1 } }
// // };

// const staggerChildren = {
//   visible: { transition: { staggerChildren: 0.15 } }
// };

// // ── SERVICES PAGE ───────────────────────────────────────────────────────────
// export default function Services() {
//   const heroImages = [
//     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920",
//     "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920"
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Services data
//   const services = [
//     {
//       icon: <Settings size={48} />,
//       title: "Custom Plastic Fabrication",
//       description: "Precision fabrication of custom plastic components, panels, and structures using CNC machining, thermoforming, and vacuum forming techniques.",
//       features: ["CNC Machining", "Thermoforming", "Custom Molds", "Prototyping"],
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       icon: <Factory size={48} />,
//       title: "Industrial FRP Solutions",
//       description: "High-strength Fiber Reinforced Plastic (FRP) panels, cladding, and structural elements for industrial and commercial applications.",
//       features: ["FRP Panels", "Chemical Resistant", "Fire Retardant", "Custom Sizes"],
//       image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       icon: <Layers size={48} />,
//       title: "Sheet Fabrication",
//       description: "Cutting, bending, and forming of plastic sheets including acrylic, polycarbonate, PVC, and HDPE for various applications.",
//       features: ["Acrylic Fabrication", "Polycarbonate", "PVC Sheets", "Custom Cutting"],
//       image: "src/images/FRP-Wall-Panels.jpg"
//     },
//     {
//       icon: <PenTool size={48} />,
//       title: "Design & Prototyping",
//       description: "Complete design services including 3D modeling, CAD drawings, and rapid prototyping for plastic components.",
//       features: ["3D Modeling", "CAD Design", "Prototype Development", "Material Selection"],
//       image: "https://www.seaskymedical.com/wp-content/uploads/2023/04/a-prototype-graphic-design.jpg"
//     },
//     {
//       icon: <Wrench size={48} />,
//       title: "Assembly & Installation",
//       description: "Complete assembly services and professional installation of fabricated plastic components at your site.",
//       features: ["On-site Installation", "Assembly Services", "Quality Checks", "Turnkey Solutions"],
//       image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       icon: <Shield size={48} />,
//       title: "Maintenance & Repair",
//       description: "Comprehensive maintenance, repair, and replacement services for existing plastic installations and components.",
//       features: ["Routine Maintenance", "Damage Repair", "Component Replacement", "Surface Restoration"],
//       image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   const industryApplications = [
//     { icon: <Factory />, title: "Industrial Manufacturing", description: "Machine guards, safety enclosures, control panels" },
//     { icon: <HardHat />, title: "Construction", description: "Wall panels, false ceilings, architectural elements" },
//     { icon: <Thermometer />, title: "Chemical Industry", description: "Chemical resistant tanks, ducts, fume hoods" },
//     { icon: <Truck />, title: "Transportation", desc: "Vehicle interiors, custom panels, protective covers" },
//     { icon: <Shield />, title: "Clean Rooms", description: "Hygienic panels, modular clean rooms" },
//     { icon: <Battery />, title: "Electrical & Electronics", description: "Electrical enclosures, cable trays, insulating parts" }
//   ];

//   const fabricationProcess = [
//     { step: "01", title: "Consultation & Design", description: "Understanding requirements and creating design concepts" },
//     { step: "02", title: "Material Selection", description: "Choosing the right plastic material for the application" },
//     { step: "03", title: "Precision Fabrication", description: "Using advanced machinery for accurate fabrication" },
//     { step: "04", title: "Quality Inspection", description: "Rigorous quality checks at every stage" },
//     { step: "05", title: "Finishing & Assembly", description: "Surface finishing and component assembly" },
//     { step: "06", title: "Installation & Support", description: "Professional installation and after-sales support" }
//   ];

//   // Auto change image every 7 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [heroImages.length]);

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

//         .service-card {
//           background: white;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//           transition: all 0.4s ease;
//         }

//         .process-step:hover {
//           background-color: ${COLORS.gold}15;
//           transform: translateY(-5px);
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
//           <Facebook size={14} style={{cursor:'pointer'}} color="#ccc" />
//           <Twitter size={14} style={{cursor:'pointer'}} color="#ccc" />
//           <Instagram size={14} style={{cursor:'pointer'}} color="#ccc" />
//           <Linkedin size={14} style={{cursor:'pointer'}} color="#ccc" />
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
//         DEV<span className="text-gold">PLASTICS</span>
//           </span>
//           <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888' }}>
//             Plastic Fabrication
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
//         height: "70vh",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         padding: "0 5%",
//         overflow: "hidden"
//       }}>
//         {/* Background images with fade transition */}
//         {heroImages.map((img, idx) => (
//           <div
//             key={idx}
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url("${img}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               opacity: idx === currentImageIndex ? 1 : 0,
//               transition: "opacity 1.5s ease-in-out",
//               zIndex: 0
//             }}
//           />
//         ))}

//         <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }} />

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeInUp}
//           style={{ position: "relative", zIndex: 2, color: "white", maxWidth: "800px", paddingTop: "40px" }}
//         >
//           <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '20px' }}>
//             Our Fabrication Services
//           </p>
//           <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
//             Precision Plastic <br /> <span className="text-gold">Fabrication Services</span>
//           </h1>
//           <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px' }}>
//             Custom plastic fabrication solutions for industrial, commercial, and architectural applications. From design to installation, we handle it all.
//           </p>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
//               View All Services
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
//               Contact Expert
//             </button>
//           </div>
//         </motion.div>
//       </header>

//       {/* OUR SERVICES SECTION */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.white }}>
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
//             ── Our Services ──
//           </span>
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
//             Complete Plastic Fabrication Solutions
//           </h2>
//           <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.6" }}>
//             We provide end-to-end plastic fabrication services using state-of-the-art technology and skilled craftsmanship
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", maxWidth: "1400px", margin: "0 auto" }} className="grid-responsive">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className="service-card hover-scale"
//             >
//               <div style={{ height: "200px", overflow: "hidden" }}>
//                 <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               </div>
//               <div style={{ padding: "40px 30px" }}>
//                 <div style={{ marginBottom: "20px", color: COLORS.gold }}>
//                   {service.icon}
//                 </div>
//                 <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "15px", color: "#222" }}>
//                   {service.title}
//                 </h3>
//                 <p style={{ color: COLORS.lightText, lineHeight: 1.7, marginBottom: "20px" }}>
//                   {service.description}
//                 </p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
//                   {service.features.map((feature, idx) => (
//                     <span key={idx} style={{
//                       backgroundColor: COLORS.bgLight,
//                       padding: "6px 12px",
//                       borderRadius: "4px",
//                       fontSize: "12px",
//                       fontWeight: "600"
//                     }}>
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//                 <a href="#" style={{
//                   color: COLORS.gold,
//                   fontWeight: "600",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   textDecoration: "none"
//                 }}>
//                   Learn More <ChevronRight size={16} />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* INDUSTRY APPLICATIONS */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerChildren}
//         style={{ backgroundColor: COLORS.dark, color: "white", padding: "100px 5%" }}
//       >
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
//             Industries We Serve
//           </span>
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px" }}>
//             Application Areas
//           </h2>
//           <p style={{ color: "#aaa", maxWidth: "700px", margin: "20px auto 0", fontSize: "18px" }}>
//             Our plastic fabrication solutions cater to a wide range of industries
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
//           {industryApplications.map((app, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeInUp}
//               style={{
//                 backgroundColor: "#222",
//                 padding: "40px 30px",
//                 borderRadius: "8px",
//                 textAlign: "center",
//                 border: "1px solid #333"
//               }}
//               whileHover={{ y: -10, borderColor: COLORS.gold }}
//             >
//               <div style={{ marginBottom: "25px", color: COLORS.gold, display: "flex", justifyContent: "center" }}>
//                 {React.cloneElement(app.icon, { size: 48 })}
//               </div>
//               <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", fontWeight: "700" }}>{app.title}</h3>
//               <p style={{ color: "#aaa", lineHeight: "1.6" }}>{app.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* FABRICATION PROCESS */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.bgLight }}>
//         <div style={{ textAlign: "center", marginBottom: "60px" }}>
//           <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
//             Our Methodology
//           </span>
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
//             Fabrication Process
//           </h2>
//           <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
//             Our systematic approach ensures quality at every stage of fabrication
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
//           {fabricationProcess.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className="process-step"
//               style={{
//                 backgroundColor: "white",
//                 padding: "40px 30px",
//                 borderRadius: "8px",
//                 boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
//                 transition: "all 0.3s ease"
//               }}
//             >
//               <div style={{
//                 width: "60px",
//                 height: "60px",
//                 backgroundColor: COLORS.gold,
//                 color: "white",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 marginBottom: "20px"
//               }}>
//                 {step.step}
//               </div>
//               <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "15px", color: "#222" }}>
//                 {step.title}
//               </h3>
//               <p style={{ color: COLORS.lightText, lineHeight: "1.6" }}>
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE OUR SERVICES */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.white }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "60px", alignItems: "center" }} className="grid-responsive">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
//               Why Choose Us
//             </span>
//             <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
//               Excellence in Every Fabrication
//             </h2>
//             <p style={{ color: COLORS.lightText, lineHeight: "1.7", marginBottom: "30px", fontSize: "18px" }}>
//               We combine advanced technology with skilled craftsmanship to deliver precision plastic fabrication solutions that exceed expectations.
//             </p>
            
//             <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
//               <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
//                 <CheckCircle size={24} color={COLORS.gold} />
//                 <div>
//                   <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Advanced Technology</h4>
//                   <p style={{ color: COLORS.lightText }}>State-of-the-art CNC machines, laser cutters, and thermoforming equipment</p>
//                 </div>
//               </div>
//               <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
//                 <CheckCircle size={24} color={COLORS.gold} />
//                 <div>
//                   <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Quality Materials</h4>
//                   <p style={{ color: COLORS.lightText }}>We source only premium-grade plastics and composites for lasting durability</p>
//                 </div>
//               </div>
//               <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
//                 <CheckCircle size={24} color={COLORS.gold} />
//                 <div>
//                   <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Expert Team</h4>
//                   <p style={{ color: COLORS.lightText }}>Skilled fabricators and engineers with years of industry experience</p>
//                 </div>
//               </div>
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
//               src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
//               alt="Fabrication Process" 
//               style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//             />
//             <div style={{
//               position: "absolute",
//               bottom: "-30px",
//               right: "-30px",
//               backgroundColor: COLORS.gold,
//               color: "white",
//               padding: "40px",
//               borderRadius: "8px",
//               maxWidth: "300px",
//               boxShadow: "0 15px 30px rgba(163, 127, 87, 0.3)"
//             }}>
//               <div style={{ fontSize: "3rem", fontWeight: "800", lineHeight: 1 }}>15+</div>
//               <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Years of Fabrication Experience</div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* GET STARTED CTA */}
//       <section style={{ padding: "100px 5%", backgroundColor: COLORS.accent, color: "white", textAlign: "center" }}>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <Quote size={48} color={COLORS.gold} style={{ marginBottom: "30px" }} />
//           <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
//             Ready to Start Your Project?
//           </h2>
//           <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}>
//             Contact us today to discuss your plastic fabrication requirements. Our experts will guide you through the entire process.
//           </p>
//           <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
//             <button style={{
//               backgroundColor: COLORS.gold,
//               color: "white",
//               padding: "16px 40px",
//               border: "none",
//               fontSize: "14px",
//               fontWeight: "700",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               letterSpacing: "1px",
//               borderRadius: "4px"
//             }} className="btn-hover">
//               <Phone size={18} style={{ marginRight: "10px" }} /> Call Now
//             </button>
//             <button style={{
//               backgroundColor: "transparent",
//               border: `2px solid white`,
//               color: "white",
//               padding: "16px 40px",
//               fontSize: "14px",
//               fontWeight: "700",
//               textTransform: "uppercase",
//               cursor: "pointer",
//               letterSpacing: "1px",
//               borderRadius: "4px"
//             }} className="btn-hover">
//               <Mail size={18} style={{ marginRight: "10px" }} /> Email Inquiry
//             </button>
//           </div>
//         </motion.div>
//       </section>

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
//                 Specializing in custom plastic fabrication, FRP solutions, and industrial plastic components with precision and quality.
//               </p>
//               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//                 <Facebook size={20} style={{cursor:'pointer'}} />
//                 <Twitter size={20} style={{cursor:'pointer'}} />
//                 <Instagram size={20} style={{cursor:'pointer'}} />
//                 <Linkedin size={20} style={{cursor:'pointer'}} />
//               </div>
//             </div>

//             <div>
//               <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Services</h4>
//               <ul style={{ listStyle: 'none', padding: 0 }}>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Custom Fabrication</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> FRP Solutions</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Sheet Fabrication</a></li>
//                 <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Design & Prototyping</a></li>
//                 <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Installation Services</a></li>
//               </ul>
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
//             <div>
//               © {new Date().getFullYear()} DEV Plastic Company. All Rights Reserved.
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Search, Layers, Settings, PenTool, Shield, Factory,
  Thermometer, Wrench, HardHat, CheckCircle, Truck, Clock, Battery,
  ChevronRight, Quote, X
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

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } }
};

// ── SERVICES PAGE ───────────────────────────────────────────────────────────
export default function Services() {
  const heroImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Services data
  const services = [
    {
      icon: <Settings size={48} />,
      title: "Custom Plastic Fabrication",
      description: "Precision fabrication of custom plastic components, panels, and structures using CNC machining, thermoforming, and vacuum forming techniques.",
      features: ["CNC Machining", "Thermoforming", "Custom Molds", "Prototyping"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Factory size={48} />,
      title: "Industrial FRP Solutions",
      description: "High-strength Fiber Reinforced Plastic (FRP) panels, cladding, and structural elements for industrial and commercial applications.",
      features: ["FRP Panels", "Chemical Resistant", "Fire Retardant", "Custom Sizes"],
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Layers size={48} />,
      title: "Sheet Fabrication",
      description: "Cutting, bending, and forming of plastic sheets including acrylic, polycarbonate, PVC, and HDPE for various applications.",
      features: ["Acrylic Fabrication", "Polycarbonate", "PVC Sheets", "Custom Cutting"],
      image: "src/images/FRP-Wall-Panels.jpg"
    },
    {
      icon: <PenTool size={48} />,
      title: "Design & Prototyping",
      description: "Complete design services including 3D modeling, CAD drawings, and rapid prototyping for plastic components.",
      features: ["3D Modeling", "CAD Design", "Prototype Development", "Material Selection"],
      image: "https://www.seaskymedical.com/wp-content/uploads/2023/04/a-prototype-graphic-design.jpg"
    },
    {
      icon: <Wrench size={48} />,
      title: "Assembly & Installation",
      description: "Complete assembly services and professional installation of fabricated plastic components at your site.",
      features: ["On-site Installation", "Assembly Services", "Quality Checks", "Turnkey Solutions"],
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Shield size={48} />,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance, repair, and replacement services for existing plastic installations and components.",
      features: ["Routine Maintenance", "Damage Repair", "Component Replacement", "Surface Restoration"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // ✅ FIX: one item had `desc` instead of `description` so it was showing blank
  const industryApplications = [
    { icon: <Factory />, title: "Industrial Manufacturing", description: "Machine guards, safety enclosures, control panels" },
    { icon: <HardHat />, title: "Construction", description: "Wall panels, false ceilings, architectural elements" },
    { icon: <Thermometer />, title: "Chemical Industry", description: "Chemical resistant tanks, ducts, fume hoods" },
    { icon: <Truck />, title: "Transportation", description: "Vehicle interiors, custom panels, protective covers" },
    { icon: <Shield />, title: "Clean Rooms", description: "Hygienic panels, modular clean rooms" },
    { icon: <Battery />, title: "Electrical & Electronics", description: "Electrical enclosures, cable trays, insulating parts" }
  ];

  const fabricationProcess = [
    { step: "01", title: "Consultation & Design", description: "Understanding requirements and creating design concepts" },
    { step: "02", title: "Material Selection", description: "Choosing the right plastic material for the application" },
    { step: "03", title: "Precision Fabrication", description: "Using advanced machinery for accurate fabrication" },
    { step: "04", title: "Quality Inspection", description: "Rigorous quality checks at every stage" },
    { step: "05", title: "Finishing & Assembly", description: "Surface finishing and component assembly" },
    { step: "06", title: "Installation & Support", description: "Professional installation and after-sales support" }
  ];

  // Auto change image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

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

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
        }

        .process-step:hover {
          background-color: ${COLORS.gold}15;
          transform: translateY(-5px);
        }

        /* ✅ NEW: Mobile menu styles (same as home/products, but hamburger icon like your image) */
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
            Plastic Fabrication
          </span>
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", gap: "25px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", alignItems: "center" }}>
          <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>Home</Link>
          <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Services</Link>
          <Link to="/about" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>About</Link>
          {/* <Link to="/gallery" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>Gallery</Link> */}
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

        {/* ✅ NEW: Mobile actions (Search + Hamburger like your icon image) */}
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
                <Link to="/services" className="active" onClick={closeMobileMenu}>Services</Link>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
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
        {/* Background images with fade transition */}
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
            Our Fabrication Services
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '25px' }}>
            Precision Plastic <br /> <span className="text-gold">Fabrication Services</span>
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, maxWidth: '600px' }}>
            Custom plastic fabrication solutions for industrial, commercial, and architectural applications. From design to installation, we handle it all.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
            }} className="btn-hover">
              View All Services
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
              Contact Expert
            </button>
          </div>
        </motion.div>
      </header>

      {/* OUR SERVICES SECTION */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            ── Our Services ──
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Complete Plastic Fabrication Solutions
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.6" }}>
            We provide end-to-end plastic fabrication services using state-of-the-art technology and skilled craftsmanship
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", maxWidth: "1400px", margin: "0 auto" }} className="grid-responsive">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="service-card hover-scale"
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px 30px" }}>
                <div style={{ marginBottom: "20px", color: COLORS.gold }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "15px", color: "#222" }}>
                  {service.title}
                </h3>
                <p style={{ color: COLORS.lightText, lineHeight: 1.7, marginBottom: "20px" }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{
                      backgroundColor: COLORS.bgLight,
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
                {/* <a href="#" style={{
                  color: COLORS.gold,
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none"
                }}>
                  Learn More <ChevronRight size={16} />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        style={{ backgroundColor: COLORS.dark, color: "white", padding: "var(--section-pad, 100px 5%)" }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#888", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase" }}>
            Industries We Serve
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "15px" }}>
            Application Areas
          </h2>
          <p style={{ color: "#aaa", maxWidth: "700px", margin: "20px auto 0", fontSize: "18px" }}>
            Our plastic fabrication solutions cater to a wide range of industries
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
          {industryApplications.map((app, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              style={{
                backgroundColor: "#222",
                padding: "40px 30px",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid #333"
              }}
              whileHover={{ y: -10, borderColor: COLORS.gold }}
            >
              <div style={{ marginBottom: "25px", color: COLORS.gold, display: "flex", justifyContent: "center" }}>
                {React.cloneElement(app.icon as any, { size: 48 })}
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", fontWeight: "700" }}>{app.title}</h3>
              <p style={{ color: "#aaa", lineHeight: "1.6" }}>{app.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FABRICATION PROCESS */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
            Our Methodology
          </span>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
            Fabrication Process
          </h2>
          <p style={{ color: COLORS.lightText, maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Our systematic approach ensures quality at every stage of fabrication
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
          {fabricationProcess.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="process-step"
              style={{
                backgroundColor: "white",
                padding: "40px 30px",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{
                width: "60px",
                height: "60px",
                backgroundColor: COLORS.gold,
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px"
              }}>
                {step.step}
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "15px", color: "#222" }}>
                {step.title}
              </h3>
              <p style={{ color: COLORS.lightText, lineHeight: "1.6" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.white }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "60px", alignItems: "center" }} className="grid-responsive">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span style={{ color: COLORS.gold, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>
              Why Choose Us
            </span>
            <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "20px 0", color: "#222" }}>
              Excellence in Every Fabrication
            </h2>
            <p style={{ color: COLORS.lightText, lineHeight: "1.7", marginBottom: "30px", fontSize: "18px" }}>
              We combine advanced technology with skilled craftsmanship to deliver precision plastic fabrication solutions that exceed expectations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "25px", marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <CheckCircle size={24} color={COLORS.gold} />
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Advanced Technology</h4>
                  <p style={{ color: COLORS.lightText }}>State-of-the-art CNC machines, laser cutters, and thermoforming equipment</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <CheckCircle size={24} color={COLORS.gold} />
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Quality Materials</h4>
                  <p style={{ color: COLORS.lightText }}>We source only premium-grade plastics and composites for lasting durability</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <CheckCircle size={24} color={COLORS.gold} />
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "8px", color: "#222" }}>Expert Team</h4>
                  <p style={{ color: COLORS.lightText }}>Skilled fabricators and engineers with years of industry experience</p>
                </div>
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
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
              alt="Fabrication Process"
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            />
            <div style={{
              position: "absolute",
              bottom: "-30px",
              right: "-30px",
              backgroundColor: COLORS.gold,
              color: "white",
              padding: "40px",
              borderRadius: "8px",
              maxWidth: "300px",
              boxShadow: "0 15px 30px rgba(163, 127, 87, 0.3)"
            }}>
              <div style={{ fontSize: "3rem", fontWeight: "800", lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Years of Fabrication Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GET STARTED CTA */}
      <section style={{ padding: "var(--section-pad, 100px 5%)", backgroundColor: COLORS.accent, color: "white", textAlign: "center" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Quote size={48} color={COLORS.gold} style={{ marginBottom: "30px" }} />
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}>
            Contact us today to discuss your plastic fabrication requirements. Our experts will guide you through the entire process.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
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
              <Phone size={18} style={{ marginRight: "10px" }} /> Call Now
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
              <Mail size={18} style={{ marginRight: "10px" }} /> Email Inquiry
            </button>
          </div>
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
      height: "48px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</div>

              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Specializing in custom plastic fabrication, FRP solutions, and industrial plastic components with precision and quality.
              </p>
              <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                <Facebook size={20} style={{ cursor: 'pointer' }} />
                <Twitter size={20} style={{ cursor: 'pointer' }} />
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Linkedin size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Custom Fabrication</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> FRP Solutions</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Sheet Fabrication</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Design & Prototyping</a></li>
                <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={12} /> Installation Services</a></li>
              </ul>
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
                    Products
                  </Link>
                </li>

                <li style={{ marginBottom: "12px" }}>
                  <Link to="/services" className="nav-link" style={{ color: "#ccc", textDecoration: "none" }}>
                    Services
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
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} color={COLORS.gold} />
                  <span>Sector 4, Industrial Area, Mumbai - 400072</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color={COLORS.gold} />
                  <span>+91 98765 43210</span>
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
            <div>
              © {new Date().getFullYear()} DEV Plastic Company. All Rights Reserved.
            </div>
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
