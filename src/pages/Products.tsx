// 'use client';
// import { Link } from "react-router-dom";

// import React, { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Filter,
//   ChevronRight,
//   X,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Star,
//   Shield,
//   Truck,
//   Clock,
//   BadgeCheck,
//   Layers,
//   PenTool,
//   Package,
// } from "lucide-react";

// // ── THEME ───────────────────────────────────────────────────────────────────
// const COLORS = {
//   gold: "#a37f57",
//   dark: "#1a1a1a",
//   lightText: "#666",
//   bgLight: "#f9f9f9",
//   white: "#ffffff",
//   accent: "#2a5c7a",
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



// const hoverCard = {
//   whileHover: {
//     y: -8,
//     boxShadow: "0 22px 45px rgba(0,0,0,0.12)",
//   },
//   transition: {
//     duration: 0.35,
//     ease: [0.22, 1, 0.36, 1] as const, // ✅
//   },
// };


// // ── DATA ────────────────────────────────────────────────────────────────────
// type Product = {
//   id: string;
//   title: string;
//   category: string;
//   short: string;
//   description: string;
//   features: string[];
//   specs: { label: string; value: string }[];
//   useCases: string[];
//   badges: string[];
//   image: string;
//   gallery: string[];
// };

// const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
//   "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
//   "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
//   "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
// ];

// const CATEGORIES = [
//   "All",
//   "FRP / GRP",
//   "PVC / Clean Room",
//   "Polycarbonate",
//   "Acrylic",
//   "Custom Fabrication",
// ];

// const PRODUCTS: Product[] = [
//   {
//     id: "frp-panels",
//     title: "FRP Sheets & Panels",
//     category: "FRP / GRP",
//     short: "Corrosion resistant panels for industrial cladding, partitions & interiors.",
//     description:
//       "High-performance Fiber Reinforced Plastic (FRP) sheets and panels engineered for durability, chemical resistance and long life. Ideal for industrial cladding, clean areas, and high-humidity environments.",
//     features: [
//       "Excellent corrosion & chemical resistance",
//       "Lightweight yet strong",
//       "Easy installation & low maintenance",
//       "Hygienic surface options available",
//     ],
//     specs: [
//       { label: "Thickness", value: "2mm – 12mm (custom)" },
//       { label: "Finish", value: "Matte / Gloss / Textured" },
//       { label: "Color", value: "Custom RAL/solid colors" },
//       { label: "Fire Retardant", value: "Optional (as per requirement)" },
//     ],
//     useCases: ["Factory wall cladding", "Chemical areas", "Partitions", "Wash areas"],
//     badges: ["ISO Process", "Corrosion Resistant", "Custom Colors"],
//     image: "src/images/img.png",
//     gallery: [
//       "https://m.media-amazon.com/images/I/81NNHTUMlsL.jpg",
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
//   {
//     id: "grp-architectural",
//     title: "GRP / FRP Architectural Panels",
//     category: "FRP / GRP",
//     short: "Facade, cladding and architectural finishes with premium textures & colors.",
//     description:
//       "Architectural grade GRP/FRP panels designed for modern facades, decorative cladding and interior feature applications. Available in custom colors, textures and profiles.",
//     features: [
//       "Premium finish options",
//       "Custom textures & patterns",
//       "Weather & UV tolerant options",
//       "Easy to install modular design",
//     ],
//     specs: [
//       { label: "Texture", value: "Stone / Wood / Custom" },
//       { label: "Module Size", value: "Custom (project-based)" },
//       { label: "UV Protection", value: "Optional coating" },
//       { label: "FR Options", value: "Available" },
//     ],
//     useCases: ["Facade cladding", "Reception walls", "Architectural features", "Canopies"],
//     badges: ["Architectural Grade", "UV Options", "Custom Texture"],
//     image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
//     gallery: [
//       "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
//   {
//     id: "pvc-boards",
//     title: "PVC Boards / Clean Room Sheets",
//     category: "PVC / Clean Room",
//     short: "Rigid PVC boards for pharma, food units, clean rooms & utilities.",
//     description:
//       "Rigid PVC boards/sheets for hygienic and chemical-resistant interiors. Ideal for clean rooms, pharma, food processing units and utility areas where easy cleaning is critical.",
//     features: [
//       "Easy to clean, hygienic surfaces",
//       "Chemical resistant",
//       "Stable finish & consistency",
//       "Fast installation with trims",
//     ],
//     specs: [
//       { label: "Thickness", value: "3mm – 18mm (custom)" },
//       { label: "Finish", value: "Smooth / Matte" },
//       { label: "Installation", value: "Bonding / Fasteners + trims" },
//       { label: "Cleaning", value: "Low-maintenance" },
//     ],
//     useCases: ["Pharma clean rooms", "Food units", "Lab interiors", "Utility partitions"],
//     badges: ["Hygienic", "Chemical Resistant", "Fast Install"],
//     image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200",
//     gallery: [
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1581092162387-80497e3c1c8e?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
//   {
//     id: "polycarbonate",
//     title: "Polycarbonate Roofing Sheets",
//     category: "Polycarbonate",
//     short: "Impact resistant roofing, skylights and partitions with UV options.",
//     description:
//       "High impact polycarbonate sheets for roofing, skylights, partitions and protective covers. Ideal where strength, light transmission and safety are required.",
//     features: [
//       "High impact strength",
//       "UV protected options",
//       "Light transmission control",
//       "Weather resistant",
//     ],
//     specs: [
//       { label: "Thickness", value: "1mm – 12mm" },
//       { label: "Type", value: "Solid / Multiwall" },
//       { label: "UV Layer", value: "Optional" },
//       { label: "Colors", value: "Clear / Bronze / Opal" },
//     ],
//     useCases: ["Skylights", "Roofing", "Partitions", "Protective covers"],
//     badges: ["Impact Resistant", "UV Options", "Weather Proof"],
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
//     gallery: [
      
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
//   {
//     id: "acrylic",
//     title: "Acrylic Sheets & Fabrication",
//     category: "Acrylic",
//     short: "Display, signage, partitions and custom acrylic fabrication with clean finish.",
//     description:
//       "Premium acrylic sheets and custom acrylic fabrication for signage, displays, partitions and interior applications. Clean edges, polishing and custom forming available.",
//     features: [
//       "Crystal clear finish options",
//       "Precision cutting & polishing",
//       "Custom bending & forming",
//       "Great for displays & branding",
//     ],
//     specs: [
//       { label: "Thickness", value: "2mm – 20mm" },
//       { label: "Finish", value: "Clear / Frosted / Color" },
//       { label: "Edge", value: "Polished / Matte" },
//       { label: "Work", value: "Cutting / Bending / Bonding" },
//     ],
//     useCases: ["Signage", "Retail displays", "Partitions", "Custom covers"],
//     badges: ["Premium Finish", "Custom Forming", "Polished Edges"],
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
//     gallery: [
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
//   {
//     id: "custom-fab",
//     title: "Custom Plastic Fabrication",
//     category: "Custom Fabrication",
//     short: "CNC routing, thermoforming, prototyping and turnkey fabrication projects.",
//     description:
//       "End-to-end custom fabrication: design support, CNC routing, thermoforming, prototyping, assembly and installation. Build exactly to your project requirements.",
//     features: [
//       "CNC routing & precision cutting",
//       "Thermoforming & vacuum forming",
//       "Prototype to production",
//       "On-site installation available",
//     ],
//     specs: [
//       { label: "Capability", value: "Prototype → Batch → Large Projects" },
//       { label: "Support", value: "Design + Manufacturing" },
//       { label: "Delivery", value: "Pan-India" },
//       { label: "Installation", value: "Optional" },
//     ],
//     useCases: ["Industrial components", "Architectural installs", "Machine covers", "Turnkey projects"],
//     badges: ["Turnkey", "Precision", "Fast Turnaround"],
//     image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
//     gallery: [
      
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
//     ],
//   },
// ];

// // ── PAGE ────────────────────────────────────────────────────────────────────
// export default function Products() {
//   const [heroIndex, setHeroIndex] = useState(0);
//   const [query, setQuery] = useState("");
//   const [category, setCategory] = useState<string>("All");
//   const [active, setActive] = useState<Product | null>(null);
//   const [activeImg, setActiveImg] = useState<string>("");

//   // smooth & slow hero background change (every 8s)
//   useEffect(() => {
//     const t = setInterval(() => {
//       setHeroIndex((p) => (p + 1) % HERO_IMAGES.length);
//     }, 8000);
//     return () => clearInterval(t);
//   }, []);

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     return PRODUCTS.filter((p) => {
//       const matchCategory = category === "All" ? true : p.category === category;
//       const matchQuery =
//         !q ||
//         p.title.toLowerCase().includes(q) ||
//         p.short.toLowerCase().includes(q) ||
//         p.category.toLowerCase().includes(q) ||
//         p.features.join(" ").toLowerCase().includes(q);
//       return matchCategory && matchQuery;
//     });
//   }, [query, category]);

//   const openProduct = (p: Product) => {
//     setActive(p);
//     setActiveImg(p.gallery?.[0] || p.image);
//     document.body.style.overflow = "hidden";
//   };

//   const closeProduct = () => {
//     setActive(null);
//     setActiveImg("");
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden", background: COLORS.white }}>
//       {/* GLOBAL CSS */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; overflow-x: hidden !important; }
//           * { box-sizing: border-box; }
//           .text-gold { color: ${COLORS.gold}; }
//           .btn-hover:hover { background-color: #8e6e4a !important; transform: scale(1.03); transition: all 0.25s ease; }
//           .chip { transition: all .2s ease; }
//           .chip:hover { transform: translateY(-1px); }
//           .card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
//           .card:hover { transform: translateY(-8px); box-shadow: 0 22px 45px rgba(0,0,0,0.12); border-color: rgba(163,127,87,0.35); }
//           .modal-backdrop { backdrop-filter: blur(10px); }
//           @media (max-width: 960px) {
//             .nav-links-desktop { display: none !important; }
//             .hero-title { font-size: 2.4rem !important; }
//             .hero-wrap { padding: 0 6% !important; }
//             .grid-3 { grid-template-columns: 1fr !important; }
//             .grid-2 { grid-template-columns: 1fr !important; }
//           }
//         `,
//         }}
//       />

//       {/* TOP BAR */}
//       <div
//         style={{
//           backgroundColor: COLORS.dark,
//           color: "#ccc",
//           fontSize: "12px",
//           padding: "10px 5%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderBottom: "1px solid #333",
//           width: "100%",
//         }}
//       >
//         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//           <span style={row}><MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai</span>
//           <span style={row}><Mail size={14} color={COLORS.gold} /> info@devplactics.com</span>
//           <span style={row}><Phone size={14} color={COLORS.gold} /> +91 98765 43210</span>
//         </div>
//         <div style={{ display: "flex", gap: "12px" }}>
//           <Facebook size={14} style={{ cursor: "pointer" }} />
//           <Twitter size={14} style={{ cursor: "pointer" }} />
//           <Instagram size={14} style={{ cursor: "pointer" }} />
//           <Linkedin size={14} style={{ cursor: "pointer" }} />
//         </div>
//       </div>

//       {/* NAVBAR */}
//       <nav
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 1000,
//           backgroundColor: COLORS.white,
//           boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
//           padding: "15px 5%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <span style={{ fontSize: "28px", fontWeight: "800", lineHeight: 1 }}>
//             DEV<span className="text-gold">PLASTICS</span>
//           </span>
//           <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#888" }}>
//             Plastic Fabrication
//           </span>
//         </div>

//         <div
//           className="nav-links-desktop"
//           style={{
//             display: "flex",
//             gap: "25px",
//             fontSize: "13px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             alignItems: "center",
//           }}
//         >
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

//           <Search size={18} style={{ cursor: "pointer" }} />
//         </div>

//         <button style={btn} className="btn-hover">Get A Quote →</button>
//       </nav>

//       {/* HERO */}
//       <header
//         style={{
//           position: "relative",
//           height: "70vh",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         {HERO_IMAGES.map((img, idx) => (
//           <div
//             key={idx}
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url("${img}")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               opacity: idx === heroIndex ? 1 : 0,
//               transition: "opacity 1.6s ease-in-out",
//               transform: idx === heroIndex ? "scale(1.02)" : "scale(1)",
//             }}
//           />
//         ))}
//         <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.68)" }} />

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           className="hero-wrap"
//           style={{ position: "relative", zIndex: 2, color: "white", padding: "0 5%", maxWidth: 900 }}
//         >
//           <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: 14, letterSpacing: 3, textTransform: "uppercase", fontSize: 13, marginBottom: 18 }}>
//             Products • Materials • Custom Fabrication
//           </p>
//           <h1 className="hero-title" style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, marginBottom: 18 }}>
//             Explore Our <span className="text-gold">Products</span>
//           </h1>
//           <p style={{ fontSize: 18, opacity: 0.92, maxWidth: 680, marginBottom: 28 }}>
//             FRP / GRP panels, PVC clean-room sheets, polycarbonate roofing, acrylic fabrication and turnkey custom projects — all built with precision.
//           </p>

//           <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 14px", borderRadius: 10, minWidth: 320 }}>
//               <Search size={18} />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search products… (FRP, PVC, Polycarbonate)"
//                 style={{
//                   width: "100%",
//                   border: "none",
//                   outline: "none",
//                   background: "transparent",
//                   color: "white",
//                   fontSize: 14,
//                 }}
//               />
//             </div>

//             <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 14px", borderRadius: 10 }}>
//               <Filter size={18} />
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 style={{
//                   border: "none",
//                   outline: "none",
//                   background: "transparent",
//                   color: "white",
//                   fontSize: 14,
//                   cursor: "pointer",
//                 }}
//               >
//                 {CATEGORIES.map((c) => (
//                   <option key={c} value={c} style={{ color: "#111" }}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button
//               style={{ ...btn, backgroundColor: "transparent", border: `1px solid ${COLORS.gold}`, color: "white" }}
//               className="btn-hover"
//               onClick={() => { setQuery(""); setCategory("All"); }}
//             >
//               Reset
//             </button>
//           </div>

//           <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 22, opacity: 0.95 }}>
//             <Badge icon={<Shield size={16} />} text="Quality controlled" />
//             <Badge icon={<Truck size={16} />} text="Pan-India delivery" />
//             <Badge icon={<Clock size={16} />} text="Fast turnaround" />
//             <Badge icon={<BadgeCheck size={16} />} text="Trusted materials" />
//           </div>
//         </motion.div>
//       </header>

//       {/* PRODUCT GRID */}
//       <section style={{ padding: "90px 5%", background: COLORS.white }}>
//         <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
//           <div>
//             <span style={smallHeading}>Catalog</span>
//             <h2 style={bigHeading}>Our Product Range</h2>
//             <p style={{ color: COLORS.lightText, maxWidth: 720, fontSize: 16 }}>
//               Click any product to view details, specs, use-cases and image gallery.
//             </p>
//           </div>
//           <div style={{ color: COLORS.lightText, fontSize: 14 }}>
//             Showing <b style={{ color: COLORS.dark }}>{filtered.length}</b> items
//           </div>
//         </div>

//         <div
//           className="grid-3"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: 26,
//           }}
//         >
//           {filtered.map((p) => (
//             <motion.div
//               key={p.id}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={fadeInUp}
//               className="card"
//               style={{
//                 border: "1px solid #eee",
//                 borderRadius: 14,
//                 overflow: "hidden",
//                 background: "white",
//               }}
//               onClick={() => openProduct(p)}
//               role="button"
//               tabIndex={0}
//             >
//               <div style={{ height: 210, overflow: "hidden" }}>
//                 <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               </div>
//               <div style={{ padding: 18 }}>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
//                   <div style={{ fontWeight: 900, fontSize: 18, color: COLORS.dark }}>{p.title}</div>
//                   <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 800 }}>{p.category}</div>
//                 </div>
//                 <p style={{ color: COLORS.lightText, fontSize: 14, lineHeight: 1.6, marginTop: 10, minHeight: 44 }}>
//                   {p.short}
//                 </p>

//                 <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
//                   {p.badges.slice(0, 3).map((b) => (
//                     <span key={b} className="chip" style={chip}>{b}</span>
//                   ))}
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
//                   <div style={{ display: "flex", gap: 4, color: "#FFD700" }}>
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={14} fill="currentColor" />
//                     ))}
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.gold, fontWeight: 900, fontSize: 13 }}>
//                     View Details <ChevronRight size={16} />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div style={{ marginTop: 24, padding: 18, border: "1px dashed #ddd", borderRadius: 12, color: COLORS.lightText }}>
//             No products found. Try clearing filters.
//           </div>
//         )}
//       </section>

//       {/* WHY US */}
//       <section style={{ padding: "90px 5%", background: COLORS.bgLight }}>
//         <div style={{ textAlign: "center", marginBottom: 36 }}>
//           <span style={smallHeading}>Why DEV PLASTICS</span>
//           <h2 style={bigHeading}>Built For Industry. Finished For Quality.</h2>
//         </div>

//         <div
//           className="grid-3"
//           style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}
//         >
//           <FeatureCard icon={<Layers size={34} />} title="Material Expertise" desc="FRP/GRP, PVC, Polycarbonate, Acrylic — best-fit suggestions by use-case." />
//           <FeatureCard icon={<PenTool size={34} />} title="Precision Fabrication" desc="CNC routing, bending, forming, finishing — consistent output & clean edges." />
//           <FeatureCard icon={<Package size={34} />} title="Turnkey Delivery" desc="Design support, fabrication, dispatch and installation — under one roof." />
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
//             <div>
//               <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
//                 <span style={{ fontSize: "32px", fontWeight: "800", color: "white" }}>
//                   DEV<span className="text-gold">PLASTICS</span>
//                 </span>
//                 <span style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#888" }}>
//                    Fabrication
//                 </span>
//               </div>
//               <p style={{ lineHeight: 1.7, marginBottom: "20px" }}>
//                 Precision plastic fabrication solutions for industrial, commercial, and architectural applications since 2008.
//               </p>
//               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//                 <Facebook size={20} style={{ cursor: "pointer" }} />
//                 <Twitter size={20} style={{ cursor: "pointer" }} />
//                 <Instagram size={20} style={{ cursor: "pointer" }} />
//                 <Linkedin size={20} style={{ cursor: "pointer" }} />
//               </div>
//             </div>

//             <div>
//               <h4 style={{ color: "white", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Quick Links</h4>
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
//               <h4 style={{ color: "white", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Contact Info</h4>
//               <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//                 <div style={row}><MapPin size={16} color={COLORS.gold} /><span>Sector 4, Industrial Area, Mumbai - 400072</span></div>
//                 <div style={row}><Phone size={16} color={COLORS.gold} /><span>+91 98765 43210</span></div>
//                 <div style={row}><Mail size={16} color={COLORS.gold} /><span>info@devplastics.com</span></div>
//               </div>
//             </div>
//           </div>

//           <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
//             <div>© {new Date().getFullYear()} Dev Plastic Fabrication. All Rights Reserved.</div>
//             <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
//               <a href="#" style={footerLink}>Privacy Policy</a>
//               <a href="#" style={footerLink}>Terms & Conditions</a>
//               <a href="#" style={footerLink}>Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* MODAL */}
//       <AnimatePresence>
//         {active && (
//           <motion.div
//             className="modal-backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             style={{
//               position: "fixed",
//               inset: 0,
//               background: "rgba(0,0,0,0.65)",
//               zIndex: 5000,
//               padding: "24px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             onClick={closeProduct}
//           >
//             <motion.div
//               initial={{ y: 20, opacity: 0, scale: 0.98 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 10, opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.25 }}
//               style={{
//                 width: "min(1100px, 96vw)",
//                 maxHeight: "88vh",
//                 overflow: "auto",
//                 background: "white",
//                 borderRadius: 16,
//                 border: "1px solid rgba(255,255,255,0.2)",
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header */}
//               <div style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
//                 <div>
//                   <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 900 }}>{active.category}</div>
//                   <div style={{ fontSize: 22, fontWeight: 900, color: COLORS.dark }}>{active.title}</div>
//                 </div>
//                 <button
//                   onClick={closeProduct}
//                   style={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: 10,
//                     border: "1px solid #eee",
//                     background: "white",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Modal Body */}
//               <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, padding: 18 }}>
//                 {/* Left */}
//                 <div>
//                   <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #eee" }}>
//                     <img src={activeImg || active.image} alt={active.title} style={{ width: "100%", height: 420, objectFit: "cover" }} />
//                   </div>

//                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
//                     {active.gallery.map((g) => (
//                       <button
//                         key={g}
//                         onClick={() => setActiveImg(g)}
//                         style={{
//                           width: 90,
//                           height: 60,
//                           borderRadius: 12,
//                           overflow: "hidden",
//                           border: activeImg === g ? `2px solid ${COLORS.gold}` : "1px solid #eee",
//                           padding: 0,
//                           cursor: "pointer",
//                           background: "white",
//                         }}
//                       >
//                         <img src={g} alt="thumb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                       </button>
//                     ))}
//                   </div>

//                   <div style={{ marginTop: 14, color: COLORS.lightText, lineHeight: 1.75, fontSize: 14 }}>
//                     {active.description}
//                   </div>
//                 </div>

//                 {/* Right */}
//                 <div>
//                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                     {active.badges.map((b) => (
//                       <span key={b} style={chip}>{b}</span>
//                     ))}
//                   </div>

//                   <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14, background: COLORS.bgLight }}>
//                     <div style={{ fontWeight: 900, marginBottom: 10 }}>Key Features</div>
//                     <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                       {active.features.map((f) => (
//                         <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
//                           <CheckCircle size={16} color={COLORS.gold} style={{ marginTop: 2 }} />
//                           <div style={{ fontSize: 14, color: "#333" }}>{f}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14 }}>
//                     <div style={{ fontWeight: 900, marginBottom: 10 }}>Specs</div>
//                     <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                       {active.specs.map((s) => (
//                         <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 14 }}>
//                           <span style={{ color: COLORS.lightText }}>{s.label}</span>
//                           <span style={{ fontWeight: 800, color: COLORS.dark }}>{s.value}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14 }}>
//                     <div style={{ fontWeight: 900, marginBottom: 10 }}>Use Cases</div>
//                     <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                       {active.useCases.map((u) => (
//                         <span key={u} style={{ ...chip, background: "#fff" }}>{u}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div style={{ marginTop: 18, padding: 16, borderRadius: 14, background: COLORS.accent, color: "white" }}>
//                     <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 8 }}>Need a quick quote?</div>
//                     <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 12 }}>
//                       Share size, quantity, finish & location — we’ll respond fast.
//                     </div>
//                     <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//                       <a href="/contact" style={{ ...ctaBtn, background: COLORS.gold, border: `1px solid ${COLORS.gold}` }}>
//                         Contact Now
//                       </a>
//                       <a href="tel:+919876543210" style={{ ...ctaBtn, background: "transparent", border: "1px solid rgba(255,255,255,0.35)" }}>
//                         Call
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Modal Footer */}
//               <div style={{ padding: 16, borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
//                 <div style={{ display: "flex", gap: 10, alignItems: "center", color: COLORS.lightText, fontSize: 13 }}>
//                   <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Shield size={16} color={COLORS.gold} /> Quality assured</span>
//                   <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Truck size={16} color={COLORS.gold} /> Pan-India</span>
//                 </div>
//                 <button onClick={closeProduct} style={{ ...btn, padding: "12px 18px" }} className="btn-hover">
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ── SMALL UI ────────────────────────────────────────────────────────────────
// function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "10px 12px", borderRadius: 999 }}>
//       <span style={{ display: "inline-flex", color: COLORS.gold }}>{icon}</span>
//       <span style={{ fontSize: 13 }}>{text}</span>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
//   return (
//     <motion.div
//       {...hoverCard}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//       style={{ background: "white", borderRadius: 16, border: "1px solid #eee", padding: 22 }}
//     >
//       <div style={{ width: 54, height: 54, borderRadius: 14, background: COLORS.bgLight, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gold, marginBottom: 14 }}>
//         {icon}
//       </div>
//       <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 8, color: COLORS.dark }}>{title}</div>
//       <div style={{ color: COLORS.lightText, lineHeight: 1.7, fontSize: 14 }}>{desc}</div>
//     </motion.div>
//   );
// }

// const row: React.CSSProperties = { display: "flex", alignItems: "center", gap: "10px" };

// const btn: React.CSSProperties = {
//   backgroundColor: COLORS.gold,
//   color: "white",
//   padding: "12px 28px",
//   border: "none",
//   fontSize: "13px",
//   fontWeight: "700",
//   textTransform: "uppercase",
//   cursor: "pointer",
//   letterSpacing: "1px",
//   borderRadius: "4px",
// };

// const footerLink: React.CSSProperties = { color: "#ccc", textDecoration: "none" };

// const chip: React.CSSProperties = {
//   background: "rgba(163,127,87,0.12)",
//   color: COLORS.dark,
//   border: "1px solid rgba(163,127,87,0.28)",
//   padding: "7px 10px",
//   borderRadius: 999,
//   fontSize: 12,
//   fontWeight: 800,
// };

// const smallHeading: React.CSSProperties = {
//   color: COLORS.gold,
//   fontSize: 13,
//   letterSpacing: 2.5,
//   textTransform: "uppercase",
//   fontWeight: 800,
//   display: "inline-block",
//   marginBottom: 10,
// };

// const bigHeading: React.CSSProperties = {
//   fontSize: 38,
//   fontWeight: 900,
//   lineHeight: 1.15,
//   marginBottom: 12,
//   color: COLORS.dark,
// };

// const ctaBtn: React.CSSProperties = {
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "12px 16px",
//   borderRadius: 10,
//   color: "white",
//   textDecoration: "none",
//   fontWeight: 900,
//   fontSize: 13,
//   letterSpacing: 0.6,
// };

'use client';
import { Link } from "react-router-dom";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ChevronRight,
  X,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Shield,
  Truck,
  Clock,
  BadgeCheck,
  Layers,
  PenTool,
  Package,
  Menu
} from "lucide-react";

// ── THEME ───────────────────────────────────────────────────────────────────
const COLORS = {
  gold: "#a37f57",
  dark: "#1a1a1a",
  lightText: "#666",
  bgLight: "#f9f9f9",
  white: "#ffffff",
  accent: "#2a5c7a",
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

const hoverCard = {
  whileHover: {
    y: -8,
    boxShadow: "0 22px 45px rgba(0,0,0,0.12)",
  },
  transition: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1] as const, // ✅
  },
};

// ── DATA ────────────────────────────────────────────────────────────────────
type Product = {
  id: string;
  title: string;
  category: string;
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  useCases: string[];
  badges: string[];
  image: string;
  gallery: string[];
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1920",
];

const CATEGORIES = [
  "All",
  "FRP / GRP",
  "PVC / Clean Room",
  "Polycarbonate",
  "Acrylic",
  "Custom Fabrication",
];

const PRODUCTS: Product[] = [
  {
    id: "frp-panels",
    title: "FRP Sheets & Panels",
    category: "FRP / GRP",
    short: "Corrosion resistant panels for industrial cladding, partitions & interiors.",
    description:
      "High-performance Fiber Reinforced Plastic (FRP) sheets and panels engineered for durability, chemical resistance and long life. Ideal for industrial cladding, clean areas, and high-humidity environments.",
    features: [
      "Excellent corrosion & chemical resistance",
      "Lightweight yet strong",
      "Easy installation & low maintenance",
      "Hygienic surface options available",
    ],
    specs: [
      { label: "Thickness", value: "2mm – 12mm (custom)" },
      { label: "Finish", value: "Matte / Gloss / Textured" },
      { label: "Color", value: "Custom RAL/solid colors" },
      { label: "Fire Retardant", value: "Optional (as per requirement)" },
    ],
    useCases: ["Factory wall cladding", "Chemical areas", "Partitions", "Wash areas"],
    badges: ["ISO Process", "Corrosion Resistant", "Custom Colors"],
    image: "src/images/img.png",
    gallery: [
      "https://m.media-amazon.com/images/I/81NNHTUMlsL.jpg",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "grp-architectural",
    title: "GRP / FRP Architectural Panels",
    category: "FRP / GRP",
    short: "Facade, cladding and architectural finishes with premium textures & colors.",
    description:
      "Architectural grade GRP/FRP panels designed for modern facades, decorative cladding and interior feature applications. Available in custom colors, textures and profiles.",
    features: [
      "Premium finish options",
      "Custom textures & patterns",
      "Weather & UV tolerant options",
      "Easy to install modular design",
    ],
    specs: [
      { label: "Texture", value: "Stone / Wood / Custom" },
      { label: "Module Size", value: "Custom (project-based)" },
      { label: "UV Protection", value: "Optional coating" },
      { label: "FR Options", value: "Available" },
    ],
    useCases: ["Facade cladding", "Reception walls", "Architectural features", "Canopies"],
    badges: ["Architectural Grade", "UV Options", "Custom Texture"],
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "pvc-boards",
    title: "PVC Boards / Clean Room Sheets",
    category: "PVC / Clean Room",
    short: "Rigid PVC boards for pharma, food units, clean rooms & utilities.",
    description:
      "Rigid PVC boards/sheets for hygienic and chemical-resistant interiors. Ideal for clean rooms, pharma, food processing units and utility areas where easy cleaning is critical.",
    features: [
      "Easy to clean, hygienic surfaces",
      "Chemical resistant",
      "Stable finish & consistency",
      "Fast installation with trims",
    ],
    specs: [
      { label: "Thickness", value: "3mm – 18mm (custom)" },
      { label: "Finish", value: "Smooth / Matte" },
      { label: "Installation", value: "Bonding / Fasteners + trims" },
      { label: "Cleaning", value: "Low-maintenance" },
    ],
    useCases: ["Pharma clean rooms", "Food units", "Lab interiors", "Utility partitions"],
    badges: ["Hygienic", "Chemical Resistant", "Fast Install"],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
      
    ],
  },
  {
    id: "polycarbonate",
    title: "Polycarbonate Roofing Sheets",
    category: "Polycarbonate",
    short: "Impact resistant roofing, skylights and partitions with UV options.",
    description:
      "High impact polycarbonate sheets for roofing, skylights, partitions and protective covers. Ideal where strength, light transmission and safety are required.",
    features: [
      "High impact strength",
      "UV protected options",
      "Light transmission control",
      "Weather resistant",
    ],
    specs: [
      { label: "Thickness", value: "1mm – 12mm" },
      { label: "Type", value: "Solid / Multiwall" },
      { label: "UV Layer", value: "Optional" },
      { label: "Colors", value: "Clear / Bronze / Opal" },
    ],
    useCases: ["Skylights", "Roofing", "Partitions", "Protective covers"],
    badges: ["Impact Resistant", "UV Options", "Weather Proof"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "acrylic",
    title: "Acrylic Sheets & Fabrication",
    category: "Acrylic",
    short: "Display, signage, partitions and custom acrylic fabrication with clean finish.",
    description:
      "Premium acrylic sheets and custom acrylic fabrication for signage, displays, partitions and interior applications. Clean edges, polishing and custom forming available.",
    features: [
      "Crystal clear finish options",
      "Precision cutting & polishing",
      "Custom bending & forming",
      "Great for displays & branding",
    ],
    specs: [
      { label: "Thickness", value: "2mm – 20mm" },
      { label: "Finish", value: "Clear / Frosted / Color" },
      { label: "Edge", value: "Polished / Matte" },
      { label: "Work", value: "Cutting / Bending / Bonding" },
    ],
    useCases: ["Signage", "Retail displays", "Partitions", "Custom covers"],
    badges: ["Premium Finish", "Custom Forming", "Polished Edges"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "custom-fab",
    title: "Custom Plastic Fabrication",
    category: "Custom Fabrication",
    short: "CNC routing, thermoforming, prototyping and turnkey fabrication projects.",
    description:
      "End-to-end custom fabrication: design support, CNC routing, thermoforming, prototyping, assembly and installation. Build exactly to your project requirements.",
    features: [
      "CNC routing & precision cutting",
      "Thermoforming & vacuum forming",
      "Prototype to production",
      "On-site installation available",
    ],
    specs: [
      { label: "Capability", value: "Prototype → Batch → Large Projects" },
      { label: "Support", value: "Design + Manufacturing" },
      { label: "Delivery", value: "Pan-India" },
      { label: "Installation", value: "Optional" },
    ],
    useCases: ["Industrial components", "Architectural installs", "Machine covers", "Turnkey projects"],
    badges: ["Turnkey", "Precision", "Fast Turnaround"],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1600",
    ],
  },
];

// ── PAGE ────────────────────────────────────────────────────────────────────
export default function Products() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<Product | null>(null);
  const [activeImg, setActiveImg] = useState<string>("");

  // ✅ NEW: Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // smooth & slow hero background change (every 8s)
  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((p) => (p + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCategory = category === "All" ? true : p.category === category;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.features.join(" ").toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const openProduct = (p: Product) => {
    setActive(p);
    setActiveImg(p.gallery?.[0] || p.image);
    document.body.style.overflow = "hidden";
  };

  const closeProduct = () => {
    setActive(null);
    setActiveImg("");
    document.body.style.overflow = "auto";
  };

  // ✅ NEW: close menu on desktop resize + body lock when menu open (safe with modal)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (window.innerWidth > 960) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // if modal is open we already lock body; so only change overflow when no modal
    if (active) return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      if (!active) document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, active]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden", background: COLORS.white }}>
      {/* GLOBAL CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --section-pad: 90px 5%;
            --hero-h: 70vh;
            --btn-pad: 12px 28px;
            --hero-pad: 0 5%;
          }

          html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; overflow-x: hidden !important; }
          * { box-sizing: border-box; }
          .text-gold { color: ${COLORS.gold}; }
          .btn-hover:hover { background-color: #8e6e4a !important; transform: scale(1.03); transition: all 0.25s ease; }
          .chip { transition: all .2s ease; }
          .chip:hover { transform: translateY(-1px); }
          .card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
          .card:hover { transform: translateY(-8px); box-shadow: 0 22px 45px rgba(0,0,0,0.12); border-color: rgba(163,127,87,0.35); }
          .modal-backdrop { backdrop-filter: blur(10px); }

          /* ✅ NEW: mobile menu styles */
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

          @media (max-width: 960px) {
            :root {
              --section-pad: 72px 16px;
              --hero-h: 64vh;
              --btn-pad: 11px 20px;
              --hero-pad: 0 16px;
            }
            .nav-links-desktop { display: none !important; }
            .nav-mobile-actions { display: inline-flex !important; }
            .hero-title { font-size: 2.4rem !important; }
            .hero-wrap { padding: var(--hero-pad) !important; }
            .grid-3 { grid-template-columns: 1fr !important; }
            .grid-2 { grid-template-columns: 1fr !important; }
          }

          @media (max-width: 520px) {
            :root {
              --section-pad: 64px 14px;
              --hero-h: 60vh;
              --btn-pad: 11px 18px;
              --hero-pad: 0 14px;
            }
          }
        `,
        }}
      />

      {/* TOP BAR */}
      <div
        style={{
          backgroundColor: COLORS.dark,
          color: "#ccc",
          fontSize: "12px",
          padding: "10px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #333",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <span style={row}><MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai</span>
          <span style={row}><Mail size={14} color={COLORS.gold} /> info@devplactics.com</span>
          <span style={row}><Phone size={14} color={COLORS.gold} /> +91 98765 43210</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Facebook size={14} style={{ cursor: "pointer" }} />
          <Twitter size={14} style={{ cursor: "pointer" }} />
          <Instagram size={14} style={{ cursor: "pointer" }} />
          <Linkedin size={14} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        style={{
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
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "28px", fontWeight: "800", lineHeight: 1 }}>
            DEV<span className="text-gold">PLASTICS</span>
          </span>
          <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#888" }}>
            Plastic Fabrication
          </span>
        </div>

        <div
          className="nav-links-desktop"
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            alignItems: "center",
          }}
        >
          <Link to="/" className="text-gold nav-link" style={{ textDecoration: "none" }}>
            Home
          </Link>

          <Link to="/products" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Products
          </Link>

          <Link to="/services" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Services
          </Link>

          <Link to="/about" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            About
          </Link>

          <Link to="/gallery" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Gallery
          </Link>

          <Link to="/contact" className="nav-link" style={{ color: "#333", textDecoration: "none" }}>
            Contact
          </Link>

          <Search size={18} style={{ cursor: "pointer" }} />
        </div>

        <button style={btn} className="btn-hover">Get A Quote →</button>

        {/* ✅ NEW: Mobile actions (Search + Hamburger) */}
        <div className="nav-mobile-actions">
          <Search size={18} style={{ cursor: "pointer" }} />
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={18} />
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
              initial={{ x: 60, opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "20px", fontWeight: 900, lineHeight: 1 }}>
                    DEV<span style={{ color: COLORS.gold }}>PLASTICS</span>
                  </span>
                  <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#888" }}>
                    Plastic Fabrication
                  </span>
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
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/products" className="active" onClick={closeMobileMenu}>Products</Link>
                <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </div>

              <div className="mobile-drawer-footer">
                <div className="mobile-cta-row">
                  <button
                    style={{ ...btn, width: "100%", borderRadius: 12 }}
                    className="btn-hover"
                    onClick={closeMobileMenu}
                  >
                    Get A Quote →
                  </button>

                  <button
                    style={{
                      ...btn,
                      width: "100%",
                      borderRadius: 12,
                      backgroundColor: "transparent",
                      border: `1px solid ${COLORS.gold}`,
                      color: COLORS.gold
                    }}
                    className="btn-hover"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 16, paddingLeft: 6 }}>
                  <Facebook size={18} style={{ cursor: "pointer", color: "#666" }} />
                  <Instagram size={18} style={{ cursor: "pointer", color: "#666" }} />
                  <Linkedin size={18} style={{ cursor: "pointer", color: "#666" }} />
                  <Twitter size={18} style={{ cursor: "pointer", color: "#666" }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <header
        style={{
          position: "relative",
          height: "var(--hero-h, 70vh)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("${img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: idx === heroIndex ? 1 : 0,
              transition: "opacity 1.6s ease-in-out",
              transform: idx === heroIndex ? "scale(1.02)" : "scale(1)",
            }}
          />
        ))}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.68)" }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hero-wrap"
          style={{ position: "relative", zIndex: 2, color: "white", padding: "var(--hero-pad)", maxWidth: 900 }}
        >
          <p style={{ borderLeft: `4px solid ${COLORS.gold}`, paddingLeft: 14, letterSpacing: 3, textTransform: "uppercase", fontSize: 13, marginBottom: 18 }}>
            Products • Materials • Custom Fabrication
          </p>
          <h1 className="hero-title" style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, marginBottom: 18 }}>
            Explore Our <span className="text-gold">Products</span>
          </h1>
          <p style={{ fontSize: 18, opacity: 0.92, maxWidth: 680, marginBottom: 28 }}>
            FRP / GRP panels, PVC clean-room sheets, polycarbonate roofing, acrylic fabrication and turnkey custom projects — all built with precision.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 14px", borderRadius: 10, minWidth: 320 }}>
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products… (FRP, PVC, Polycarbonate)"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                  fontSize: 14,
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 14px", borderRadius: 10 }}>
              <Filter size={18} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} style={{ color: "#111" }}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <button
              style={{ ...btn, backgroundColor: "transparent", border: `1px solid ${COLORS.gold}`, color: "white" }}
              className="btn-hover"
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 22, opacity: 0.95 }}>
            <Badge icon={<Shield size={16} />} text="Quality controlled" />
            <Badge icon={<Truck size={16} />} text="Pan-India delivery" />
            <Badge icon={<Clock size={16} />} text="Fast turnaround" />
            <Badge icon={<BadgeCheck size={16} />} text="Trusted materials" />
          </div>
        </motion.div>
      </header>

      {/* PRODUCT GRID */}
      <section style={{ padding: "var(--section-pad, 90px 5%)", background: COLORS.white }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
          <div>
            <span style={smallHeading}>Catalog</span>
            <h2 style={bigHeading}>Our Product Range</h2>
            <p style={{ color: COLORS.lightText, maxWidth: 720, fontSize: 16 }}>
              Click any product to view details, specs, use-cases and image gallery.
            </p>
          </div>
          <div style={{ color: COLORS.lightText, fontSize: 14 }}>
            Showing <b style={{ color: COLORS.dark }}>{filtered.length}</b> items
          </div>
        </div>

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 26,
          }}
        >
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="card"
              style={{
                border: "1px solid #eee",
                borderRadius: 14,
                overflow: "hidden",
                background: "white",
              }}
              onClick={() => openProduct(p)}
              role="button"
              tabIndex={0}
            >
              <div style={{ height: 210, overflow: "hidden" }}>
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ fontWeight: 900, fontSize: 18, color: COLORS.dark }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 800 }}>{p.category}</div>
                </div>
                <p style={{ color: COLORS.lightText, fontSize: 14, lineHeight: 1.6, marginTop: 10, minHeight: 44 }}>
                  {p.short}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                  {p.badges.slice(0, 3).map((b) => (
                    <span key={b} className="chip" style={chip}>{b}</span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                  <div style={{ display: "flex", gap: 4, color: "#FFD700" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.gold, fontWeight: 900, fontSize: 13 }}>
                    View Details <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ marginTop: 24, padding: 18, border: "1px dashed #ddd", borderRadius: 12, color: COLORS.lightText }}>
            No products found. Try clearing filters.
          </div>
        )}
      </section>

      {/* WHY US */}
      <section style={{ padding: "var(--section-pad, 90px 5%)", background: COLORS.bgLight }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span style={smallHeading}>Why DEV PLASTICS</span>
          <h2 style={bigHeading}>Built For Industry. Finished For Quality.</h2>
        </div>

        <div
          className="grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}
        >
          <FeatureCard icon={<Layers size={34} />} title="Material Expertise" desc="FRP/GRP, PVC, Polycarbonate, Acrylic — best-fit suggestions by use-case." />
          <FeatureCard icon={<PenTool size={34} />} title="Precision Fabrication" desc="CNC routing, bending, forming, finishing — consistent output & clean edges." />
          <FeatureCard icon={<Package size={34} />} title="Turnkey Delivery" desc="Design support, fabrication, dispatch and installation — under one roof." />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.dark, color: "#ccc", padding: "80px 5% 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "50px", marginBottom: "60px" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <span style={{ fontSize: "32px", fontWeight: "800", color: "white" }}>
                  DEV<span className="text-gold">PLASTICS</span>
                </span>
                <span style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#888" }}>
                  Fabrication
                </span>
              </div>
              <p style={{ lineHeight: 1.7, marginBottom: "20px" }}>
                Precision plastic fabrication solutions for industrial, commercial, and architectural applications since 2008.
              </p>
              <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                <Facebook size={20} style={{ cursor: "pointer" }} />
                <Twitter size={20} style={{ cursor: "pointer" }} />
                <Instagram size={20} style={{ cursor: "pointer" }} />
                <Linkedin size={20} style={{ cursor: "pointer" }} />
              </div>
            </div>

            <div>
              <h4 style={{ color: "white", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Quick Links</h4>
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
              <h4 style={{ color: "white", fontSize: "16px", marginBottom: "20px", fontWeight: "700" }}>Contact Info</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div style={row}><MapPin size={16} color={COLORS.gold} /><span>Sector 4, Industrial Area, Mumbai - 400072</span></div>
                <div style={row}><Phone size={16} color={COLORS.gold} /><span>+91 98765 43210</span></div>
                <div style={row}><Mail size={16} color={COLORS.gold} /><span>info@devplastics.com</span></div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <div>© {new Date().getFullYear()} Dev Plastic Fabrication. All Rights Reserved.</div>
            <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
              <a href="#" style={footerLink}>Privacy Policy</a>
              <a href="#" style={footerLink}>Terms & Conditions</a>
              <a href="#" style={footerLink}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.65)",
              zIndex: 5000,
              padding: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={closeProduct}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              style={{
                width: "min(1100px, 96vw)",
                maxHeight: "88vh",
                overflow: "auto",
                background: "white",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div style={{ padding: 16, borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 900 }}>{active.category}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: COLORS.dark }}>{active.title}</div>
                </div>
                <button
                  onClick={closeProduct}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: "1px solid #eee",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, padding: 18 }}>
                {/* Left */}
                <div>
                  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #eee" }}>
                    <img src={activeImg || active.image} alt={active.title} style={{ width: "100%", height: 420, objectFit: "cover" }} />
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                    {active.gallery.map((g) => (
                      <button
                        key={g}
                        onClick={() => setActiveImg(g)}
                        style={{
                          width: 90,
                          height: 60,
                          borderRadius: 12,
                          overflow: "hidden",
                          border: activeImg === g ? `2px solid ${COLORS.gold}` : "1px solid #eee",
                          padding: 0,
                          cursor: "pointer",
                          background: "white",
                        }}
                      >
                        <img src={g} alt="thumb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </button>
                    ))}
                  </div>

                  <div style={{ marginTop: 14, color: COLORS.lightText, lineHeight: 1.75, fontSize: 14 }}>
                    {active.description}
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {active.badges.map((b) => (
                      <span key={b} style={chip}>{b}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14, background: COLORS.bgLight }}>
                    <div style={{ fontWeight: 900, marginBottom: 10 }}>Key Features</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {active.features.map((f) => (
                        <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <CheckCircle size={16} color={COLORS.gold} style={{ marginTop: 2 }} />
                          <div style={{ fontSize: 14, color: "#333" }}>{f}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14 }}>
                    <div style={{ fontWeight: 900, marginBottom: 10 }}>Specs</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {active.specs.map((s) => (
                        <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 14 }}>
                          <span style={{ color: COLORS.lightText }}>{s.label}</span>
                          <span style={{ fontWeight: 800, color: COLORS.dark }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 16, padding: 16, border: "1px solid #eee", borderRadius: 14 }}>
                    <div style={{ fontWeight: 900, marginBottom: 10 }}>Use Cases</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {active.useCases.map((u) => (
                        <span key={u} style={{ ...chip, background: "#fff" }}>{u}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 18, padding: 16, borderRadius: 14, background: COLORS.accent, color: "white" }}>
                    <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 8 }}>Need a quick quote?</div>
                    <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 12 }}>
                      Share size, quantity, finish & location — we’ll respond fast.
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <a href="/contact" style={{ ...ctaBtn, background: COLORS.gold, border: `1px solid ${COLORS.gold}` }}>
                        Contact Now
                      </a>
                      <a href="tel:+919876543210" style={{ ...ctaBtn, background: "transparent", border: "1px solid rgba(255,255,255,0.35)" }}>
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div style={{ padding: 16, borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", color: COLORS.lightText, fontSize: 13 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Shield size={16} color={COLORS.gold} /> Quality assured</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Truck size={16} color={COLORS.gold} /> Pan-India</span>
                </div>
                <button onClick={closeProduct} style={{ ...btn, padding: "12px 18px" }} className="btn-hover">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── SMALL UI ────────────────────────────────────────────────────────────────
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", padding: "10px 12px", borderRadius: 999 }}>
      <span style={{ display: "inline-flex", color: COLORS.gold }}>{icon}</span>
      <span style={{ fontSize: 13 }}>{text}</span>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      {...hoverCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      style={{ background: "white", borderRadius: 16, border: "1px solid #eee", padding: 22 }}
    >
      <div style={{ width: 54, height: 54, borderRadius: 14, background: COLORS.bgLight, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gold, marginBottom: 14 }}>
        {icon}
      </div>
      <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 8, color: COLORS.dark }}>{title}</div>
      <div style={{ color: COLORS.lightText, lineHeight: 1.7, fontSize: 14 }}>{desc}</div>
    </motion.div>
  );
}

const row: React.CSSProperties = { display: "flex", alignItems: "center", gap: "10px" };

const btn: React.CSSProperties = {
  backgroundColor: COLORS.gold,
  color: "white",
  padding: "var(--btn-pad, 12px 28px)",
  border: "none",
  fontSize: "13px",
  fontWeight: "700",
  textTransform: "uppercase",
  cursor: "pointer",
  letterSpacing: "1px",
  borderRadius: "4px",
};

const footerLink: React.CSSProperties = { color: "#ccc", textDecoration: "none" };

const chip: React.CSSProperties = {
  background: "rgba(163,127,87,0.12)",
  color: COLORS.dark,
  border: "1px solid rgba(163,127,87,0.28)",
  padding: "7px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 800,
};

const smallHeading: React.CSSProperties = {
  color: COLORS.gold,
  fontSize: 13,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  fontWeight: 800,
  display: "inline-block",
  marginBottom: 10,
};

const bigHeading: React.CSSProperties = {
  fontSize: 38,
  fontWeight: 900,
  lineHeight: 1.15,
  marginBottom: 12,
  color: COLORS.dark,
};

const ctaBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px",
  borderRadius: 10,
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
  fontSize: 13,
  letterSpacing: 0.6,
};
