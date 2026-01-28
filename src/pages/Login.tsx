// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API_BASE = "http://127.0.0.1:8000";

// export default function Login() {
//   const nav = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState<string | null>(null);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErr(null);
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_BASE}/api/admin/login/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.ok) throw new Error(data.error || "Login failed");

//       localStorage.setItem("admin_token", data.token);
//       nav("/admin-dashboard");
//     } catch (e: any) {
//       setErr(e.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={wrap}>
//       <div style={card}>
//         <div style={title}>Admin Login</div>
//         <div style={subtitle}>Login to manage Contact Inquiries</div>

//         {err && <div style={errBox}>{err}</div>}

//         <form onSubmit={submit} style={form}>
//           <input
//             style={input}
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             autoComplete="username"
//           />
//           <input
//             style={input}
//             placeholder="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             autoComplete="current-password"
//           />

//           <button
//             disabled={loading}
//             style={{
//               ...btn,
//               opacity: loading ? 0.6 : 1,
//               cursor: loading ? "not-allowed" : "pointer",
//             }}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div style={hint}>
//           Use your Django <strong>staff / superuser</strong> credentials.
//         </div>
//       </div>
//     </div>
//   );
// }

// // ──────────────────────────────────────────────
// // Styles ─ mobile-first + responsive
// // ──────────────────────────────────────────────

// const wrap: React.CSSProperties = {
//   minHeight: "100vh",
//   width: "100vw",
//   margin: 0,
//   padding: "20px 16px",
//   background: "#f8f9fa",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   boxSizing: "border-box",
// };

// const card: React.CSSProperties = {
//   width: "100%",
//   maxWidth: "440px",           // slightly wider than before — looks better on tablets
//   minWidth: "320px",           // won't get too narrow on very small phones
//   background: "#ffffff",
//   borderRadius: "16px",
//   padding: "32px 24px",
//   boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
//   border: "1px solid #e9ecef",
// };

// const title: React.CSSProperties = {
//   fontSize: "clamp(20px, 5.5vw, 28px)",
//   fontWeight: 800,
//   marginBottom: 8,
//   color: "#1a1a1a",
//   textAlign: "center",
// };

// const subtitle: React.CSSProperties = {
//   fontSize: "clamp(13px, 4vw, 15px)",
//   color: "#6c757d",
//   marginBottom: "28px",
//   textAlign: "center",
// };

// const form: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "14px 16px",
//   fontSize: "15px",
//   border: "1px solid #ced4da",
//   borderRadius: "10px",
//   outline: "none",
//   transition: "border-color 0.2s",
//   boxSizing: "border-box",
//   background: "#fff",
// };

// const btn: React.CSSProperties = {
//   width: "100%",
//   padding: "14px",
//   fontSize: "15px",
//   fontWeight: 700,
//   color: "white",
//   background: "#a37f57",
//   border: "none",
//   borderRadius: "10px",
//   textTransform: "uppercase",
//   letterSpacing: "0.8px",
//   transition: "background 0.2s",
// };

// const errBox: React.CSSProperties = {
//   background: "#fff5f5",
//   border: "1px solid #ffcccc",
//   color: "#c92a2a",
//   padding: "12px 16px",
//   borderRadius: "10px",
//   fontSize: "13.5px",
//   marginBottom: "16px",
//   textAlign: "center",
// };

// const hint: React.CSSProperties = {
//   marginTop: "20px",
//   fontSize: "12.5px",
//   color: "#6c757d",
//   textAlign: "center",
// };

'use client';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  Clock, // ✅ FIX: Clock import missing
} from "lucide-react";
import API_BASE from "./Api";
//const API_BASE = "http://127.0.0.1:8000";

export default function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/admin/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && (data as any).ok === false)) throw new Error((data as any).error || "Login failed");

      localStorage.setItem("admin_token", (data as any).token);
      nav("/admin-dashboard");
    } catch (e: any) {
      setErr(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden", background: "#f8f9fa" }}>
      {/* ✅ ONLY ADD: Header + Footer */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html, body { margin:0 !important; padding:0 !important; width:100vw !important; min-height:100vh !important; overflow-x:hidden !important; }
          * { box-sizing: border-box; }
          .text-gold { color: #a37f57; }
          .btn-hover:hover { background-color:#8e6e4a !important; transform: scale(1.03); transition: all .25s ease; }
          @media (max-width: 968px) { .nav-links-desktop { display:none !important; } }
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
          <span style={flexRow}><MapPin size={14} color={COLORS.gold} /> Sector 4, Mumbai</span>
          <span style={flexRow}><Mail size={14} color={COLORS.gold} /> info@devplastics.com</span>
          <span style={flexRow}><Phone size={14} color={COLORS.gold} /> +91 98765 43210</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Facebook size={14} style={{ cursor: "pointer", color: "#ccc" }} />
          <Twitter size={14} style={{ cursor: "pointer", color: "#ccc" }} />
          <Instagram size={14} style={{ cursor: "pointer", color: "#ccc" }} />
          <Linkedin size={14} style={{ cursor: "pointer", color: "#ccc" }} />
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
          <Link to="/" style={navLink}>Home</Link>
          <Link to="/products" style={navLink}>Services</Link>
          
          <Link to="/about" style={navLink}>About</Link>
          <Link to="/gallery" style={navLink}>Gallery</Link>
          <Link to="/contact" style={navLink}>Contact</Link>
          <Search size={18} style={{ cursor: "pointer" }} />
        </div>

        <button
          style={{ ...btnTop, backgroundColor: COLORS.gold }}
          className="btn-hover"
          onClick={() => nav("/")}
        >
          Back to Site →
        </button>
      </nav>

      {/* ORIGINAL LOGIN CARD (UNCHANGED) */}
      <div style={wrap}>
        <div style={card}>
          <div style={title}>Admin Login</div>
          <div style={subtitle}>Login to manage Contact Inquiries</div>

          {err && <div style={errBox}>{err}</div>}

          <form onSubmit={submit} style={form}>
            <input
              style={input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
            <input
              style={input}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <button
              disabled={loading}
              style={{
                ...btn,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
              className="btn-hover"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          
        </div>
      </div>

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
      height: "100px",
      width: "auto",
      objectFit: "contain",
    }}
  />
</div>

              <p style={{ lineHeight: 1.7, marginBottom: '20px' }}>
                Admin login page for managing contact inquiries.
              </p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <Facebook size={20} style={{ cursor: 'pointer' }} />
                <Twitter size={20} style={{ cursor: 'pointer' }} />
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Linkedin size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "12px" }}><Link to="/" style={footerLink}>Home</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/contact" style={footerLink}>Contact</Link></li>
                <li style={{ marginBottom: "12px" }}><Link to="/gallery" style={footerLink}>Gallery</Link></li>
                <li><Link to="/products" style={footerLink}>Products</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '16px', marginBottom: '20px', fontWeight: '700' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={flexRow}><MapPin size={16} color={COLORS.gold} /><span>Sector 4, Industrial Area, Mumbai - 400072</span></div>
                <div style={flexRow}><Phone size={16} color={COLORS.gold} /><span>+91 98765 43210</span></div>
                <div style={flexRow}><Mail size={16} color={COLORS.gold} /><span>info@devplastics.com</span></div>
                <div style={flexRow}><Clock size={16} color={COLORS.gold} /><span>Mon-Sat: 9:00 AM - 7:00 PM</span></div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <p>© {new Date().getFullYear()} Dev Plastic Fabrication. All rights reserved.</p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#" style={{ ...footerLink, fontSize: 13 }}>Privacy Policy</a>
              <a href="#" style={{ ...footerLink, fontSize: 13 }}>Terms & Conditions</a>
              <a href="#" style={{ ...footerLink, fontSize: 13 }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ──────────────────────────────────────────────
// Theme constants for header/footer
// ──────────────────────────────────────────────
const COLORS = {
  gold: "#a37f57",
  dark: "#1a1a1a",
  lightText: "#666",
  bgLight: "#f9f9f9",
  white: "#ffffff",
  accent: "#2a5c7a",
};

const flexRow: React.CSSProperties = { display: "flex", alignItems: "center", gap: "10px" };

const navLink: React.CSSProperties = { color: "#333", textDecoration: "none" };

const btnTop: React.CSSProperties = {
  color: "white",
  padding: "12px 28px",
  border: "none",
  fontSize: "13px",
  fontWeight: "700",
  textTransform: "uppercase",
  cursor: "pointer",
  letterSpacing: "1px",
  borderRadius: "4px",
};

const footerLink: React.CSSProperties = { color: "#ccc", textDecoration: "none" };

// ──────────────────────────────────────────────
// Your original login styles (UNCHANGED)
// ──────────────────────────────────────────────
const wrap: React.CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: "20px 16px",
  background: "#f8f9fa",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: "440px",
  minWidth: "320px",
  background: "#ffffff",
  borderRadius: "16px",
  padding: "32px 24px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  border: "1px solid #e9ecef",
};

const title: React.CSSProperties = {
  fontSize: "clamp(20px, 5.5vw, 28px)",
  fontWeight: 800,
  marginBottom: 8,
  color: "#1a1a1a",
  textAlign: "center",
};

const subtitle: React.CSSProperties = {
  fontSize: "clamp(13px, 4vw, 15px)",
  color: "#6c757d",
  marginBottom: "28px",
  textAlign: "center",
};

const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontSize: "15px",
  border: "1px solid #ced4da",
  borderRadius: "10px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
  background: "#fff",
  color: "#111",
  caretColor: "#111",

};

const btn: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  fontSize: "15px",
  fontWeight: 700,
  color: "white",
  background: "#a37f57",
  border: "none",
  borderRadius: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  transition: "background 0.2s",
};

const errBox: React.CSSProperties = {
  background: "#fff5f5",
  border: "1px solid #ffcccc",
  color: "#c92a2a",
  padding: "12px 16px",
  borderRadius: "10px",
  fontSize: "13.5px",
  marginBottom: "16px",
  textAlign: "center",
};

