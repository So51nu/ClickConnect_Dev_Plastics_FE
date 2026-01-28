'use client';
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "./Api";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "in_progress" | "done";
  admin_notes: string;
  created_at: string;
};

function authHeaders() {
  const token = localStorage.getItem("admin_token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token || ""}`,
  };
}

export default function AdminDashboard() {
  const nav = useNavigate();

  const [me, setMe] = useState<{ username: string } | null>(null);

  const [items, setItems] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Record<number, boolean>>({});

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"" | "new" | "in_progress" | "done">("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const selectedIds = useMemo(
    () => Object.keys(selected).filter((k) => selected[Number(k)]).map(Number),
    [selected]
  );

  // ✅ LOGOUT -> HOME PAGE (as you asked)
  const logout = () => {
    localStorage.removeItem("admin_token");
    nav("/");
  };

  const loadMe = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/me/`, { headers: authHeaders() });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && (data as any).ok === false)) {
        logout();
        return;
      }
      setMe((data as any).user || null);
    } catch {
      logout();
    }
  };

  const loadList = async (pageArg: number = page, statusArg: typeof status = status, qArg: string = q) => {
    setLoading(true);
    setErr(null);

    try {
      const params = new URLSearchParams();
      const qq = qArg.trim();
      if (qq) params.set("q", qq);
      if (statusArg) params.set("status", statusArg);
      params.set("page", String(pageArg));
      params.set("page_size", String(pageSize));

      const res = await fetch(`${API_BASE}/api/admin/inquiries/?${params.toString()}`, {
        headers: authHeaders(),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && (data as any).ok === false)) throw new Error((data as any).error || "Failed to load");

      setItems((data as any).items || []);
      setTotalPages((data as any).total_pages || 1);
      setSelected({});
    } catch (e: any) {
      setErr(e?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadList(page, status, q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, status]);

  const applySearch = () => {
    setPage(1);
    loadList(1, status, q);
  };

  const toggleAll = (checked: boolean) => {
    const next: Record<number, boolean> = {};
    if (checked) items.forEach((i) => (next[i.id] = true));
    setSelected(next);
  };

  const toggleOne = (id: number, checked: boolean) => {
    setSelected((p) => ({ ...p, [id]: checked }));
  };

  const updateInquiry = async (id: number, patch: Partial<Pick<Inquiry, "status" | "admin_notes">>) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/inquiries/${id}/`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify(patch),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && (data as any).ok === false)) throw new Error((data as any).error || "Update failed");

      setItems((prev) => prev.map((x) => (x.id === id ? ({ ...x, ...patch } as Inquiry) : x)));
    } catch (e: any) {
      alert(e?.message || "Update failed");
    }
  };

  const download = (type: "excel" | "pdf", selectedOnly: boolean) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (status) params.set("status", status);
    if (selectedOnly && selectedIds.length) params.set("ids", selectedIds.join(","));

    const url = `${API_BASE}/api/admin/inquiries/export/${type}/?${params.toString()}`;

    fetch(url, { headers: authHeaders() })
      .then(async (res) => {
        if (!res.ok) throw new Error("Download failed");
        const blob = await res.blob();
        const a = document.createElement("a");
        const fileExt = type === "excel" ? "xlsx" : "pdf";
        a.href = URL.createObjectURL(blob);
        a.download = `contact_inquiries.${fileExt}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(() => alert("Download failed"));
  };

  return (
    <div style={pageWrap}>
      {/* ✅ Full screen + Responsive (NO header/footer added) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body { margin:0 !important; padding:0 !important; width:100vw !important; min-height:100vh !important; overflow-x:hidden !important; }
            * { box-sizing:border-box; }

            .admin-container { width: 100%; max-width: 1400px; margin: 0 auto; padding: 16px; }
            .admin-filters { display: grid; grid-template-columns: 1fr; gap: 10px; margin-bottom: 12px; }
            .admin-actions { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px; }
            .admin-table-wrap { overflow-x:auto; width:100%; }

            @media (min-width: 900px) {
              .admin-filters { grid-template-columns: 1.4fr 0.6fr 0.3fr; }
            }
          `,
        }}
      />

      <div className="admin-container">
        <div style={topbar}>
          <div style={{ fontWeight: 900, fontSize: 18 }}>Admin Dashboard</div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {me && (
              <div style={{ fontSize: 13, color: "#555" }}>
                Hi, <b>{me.username}</b>
              </div>
            )}
            <button onClick={logout} style={btnSmall}>Logout</button>
          </div>
        </div>

        <div style={card}>
          <div className="admin-filters">
            <input
              style={input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name/email/subject/message..."
            />

            <select
              style={input}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as any);
                setPage(1);
              }}
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <button onClick={applySearch} style={btn}>Search</button>
          </div>

          <div className="admin-actions">
            <button style={btnOutline} onClick={() => download("excel", false)}>Download Excel (All/Filtered)</button>
            <button style={btnOutline} onClick={() => download("pdf", false)}>Download PDF (All/Filtered)</button>
            <button style={btnOutline} disabled={!selectedIds.length} onClick={() => download("excel", true)}>
              Download Excel (Selected)
            </button>
            <button style={btnOutline} disabled={!selectedIds.length} onClick={() => download("pdf", true)}>
              Download PDF (Selected)
            </button>
          </div>

          {err && <div style={errBox}>{err}</div>}

          <div className="admin-table-wrap">
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>
                    <input
                      type="checkbox"
                      checked={items.length > 0 && selectedIds.length === items.length}
                      onChange={(e) => toggleAll(e.target.checked)}
                    />
                  </th>
                  <th style={th}>Name</th>
                  <th style={th}>Email</th>
                  <th style={th}>Phone</th>
                  <th style={th}>Subject</th>
                  <th style={th}>Status</th>
                  <th style={th}>Notes</th>
                  <th style={th}>Created</th>
                  <th style={th}>Message</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr><td style={td} colSpan={9}>Loading...</td></tr>
                ) : items.length === 0 ? (
                  <tr><td style={td} colSpan={9}>No data</td></tr>
                ) : (
                  items.map((it) => (
                    <tr key={it.id}>
                      <td style={td}>
                        <input
                          type="checkbox"
                          checked={!!selected[it.id]}
                          onChange={(e) => toggleOne(it.id, e.target.checked)}
                        />
                      </td>
                      <td style={td}><b>{it.name}</b></td>
                      <td style={td}>{it.email}</td>
                      <td style={td}>{it.phone}</td>
                      <td style={td}>{it.subject}</td>

                      <td style={td}>
                        <select
                          value={it.status}
                          onChange={(e) => updateInquiry(it.id, { status: e.target.value as any })}
                          style={inputSmall}
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="done">Done</option>
                        </select>
                      </td>

                      <td style={td}>
                        <textarea
                          defaultValue={it.admin_notes || ""}
                          placeholder="Admin notes..."
                          style={textarea}
                          onBlur={(e) => updateInquiry(it.id, { admin_notes: e.target.value })}
                        />
                      </td>

                      <td style={td}>{new Date(it.created_at).toLocaleString()}</td>

                      <td style={td}>
                        <details>
                          <summary style={{ cursor: "pointer" }}>View</summary>
                          <div style={{ whiteSpace: "pre-wrap", marginTop: 8, color: "#333" }}>{it.message}</div>
                        </details>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div style={pager}>
            <button style={btnSmall} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
            <div style={{ fontSize: 13, color: "#555" }}>Page {page} / {totalPages}</div>
            <button style={btnSmall} disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ Full screen + width fixed */
const pageWrap: React.CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
  background: "#f6f6f6",
};

const topbar: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: "12px 14px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
  gap: 12,
  flexWrap: "wrap",
};

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #eee",
  borderRadius: 12,
  padding: 14,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  width: "100%",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  outline: "none",
  fontSize: 14,
  minWidth: 0,
  background: "#fff",
  color: "#111",          // ✅ FIX
  caretColor: "#111",
};

const inputSmall: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  border: "1px solid #e8e8e8",
  borderRadius: 8,
  outline: "none",
  fontSize: 13,
  minWidth: 140,
  background: "#fff",
  color: "#111",          // ✅ FIX
  caretColor: "#111",
};

const textarea: React.CSSProperties = {
  width: "100%",
  padding: 10,
  border: "1px solid #e8e8e8",
  borderRadius: 8,
  outline: "none",
  fontSize: 13,
  minWidth: 220,
  minHeight: 44,
  resize: "vertical",
  background: "#fff",
  color: "#111",          // ✅ FIX
  caretColor: "#111",
};

const btn: React.CSSProperties = {
  padding: "10px 12px",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 900,
  background: "#a37f57",
  color: "white",
  width: "100%",
};

const btnOutline: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 900,
  background: "white",
};

const btnSmall: React.CSSProperties = {
  padding: "8px 10px",
  border: "1px solid #e8e8e8",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 800,
  background: "white",
};

const errBox: React.CSSProperties = {
  background: "#ffecec",
  border: "1px solid #ffb7b7",
  color: "#a40000",
  padding: 10,
  borderRadius: 10,
  fontSize: 13,
  marginBottom: 12,
};

const table: React.CSSProperties = { width: "100%", borderCollapse: "collapse" };

const th: React.CSSProperties = {
  textAlign: "left",
  padding: 10,
  borderBottom: "1px solid #eee",
  fontSize: 13,
  color: "#333",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: 10,
  borderBottom: "1px solid #f2f2f2",
  verticalAlign: "top",
  fontSize: 13,
  color: "#333",
};

const pager: React.CSSProperties = {
  marginTop: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
};



