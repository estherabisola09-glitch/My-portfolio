"use client";
import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "estherabisola09@gmail.com", icon: "✉" },
  { label: "Location", value: "Ekiti, Nigeria", icon: "◎" },
  { label: "Availability", value: "Open to work", icon: "◈" },
];

const socialLinks = [
  { label: "GitHub", url: "https://github.com/estherabisola09-glitch" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/kusimo-esther-233a21246/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("idle");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-3)",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    padding: "14px 16px",
    color: "var(--text)",
    fontSize: "0.9rem",
    fontFamily: "'Syne', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 2.5rem 5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "fixed", top: "30%", left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,160,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "0.75rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--accent)",
          marginBottom: "1rem",
        }}>
          — Get In Touch
        </p>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900, lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Let&apos;s Build<br />
          <span style={{ color: "var(--accent)", textShadow: "0 0 30px rgba(0,245,160,0.3)" }}>
            Something Great
          </span>
        </h1>
        <p style={{
          fontSize: "1.05rem", color: "var(--text-muted)",
          maxWidth: "520px", lineHeight: 1.9, fontWeight: 300,
        }}>
          Have a project in mind or want to work together? I&apos;d love to hear from you. Drop a message and I&apos;ll get back to you shortly.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Left — Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {contactInfo.map(({ label, value, icon }) => (
            <div
              key={label}
              style={{
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                borderRadius: "8px", padding: "1.5rem",
                display: "flex", alignItems: "center", gap: "1rem",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <span style={{
                fontSize: "1.3rem", color: "var(--accent)",
                textShadow: "0 0 10px rgba(0,245,160,0.4)",
                minWidth: "2rem", textAlign: "center",
              }}>
                {icon}
              </span>
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                  {label}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{value}</div>
              </div>
            </div>
          ))}

          {/* Social links */}
          <div style={{
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
            borderRadius: "8px", padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Socials
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {socialLinks.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "0.7rem", letterSpacing: "0.08em",
                    color: "var(--accent)", textDecoration: "none",
                    textTransform: "uppercase",
                    border: "1px solid var(--border-accent)",
                    padding: "6px 14px", borderRadius: "3px",
                    background: "var(--accent-glow)",
                    transition: "all 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div style={{
          background: "var(--bg-3)",
          border: "1px solid var(--border)",
          borderRadius: "8px", padding: "2.5rem",
        }}>
          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "2rem", color: "var(--accent)",
                textShadow: "0 0 30px rgba(0,245,160,0.4)",
                marginBottom: "1rem",
              }}>
                ✓
              </div>
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "1.1rem", marginBottom: "0.5rem",
              }}>
                Message Sent!
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  marginTop: "2rem",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.75rem", letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "transparent", color: "var(--accent)",
                  border: "1px solid var(--border-accent)",
                  padding: "10px 24px", borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              {errorMsg && (
                <p style={{ color: "#ff5555", fontSize: "0.85rem" }}>{errorMsg}</p>
              )}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.8rem", letterSpacing: "0.12em",
                  textTransform: "uppercase", fontWeight: 700,
                  background: status === "sending" ? "transparent" : "var(--accent)",
                  color: status === "sending" ? "var(--accent)" : "var(--bg)",
                  border: "1px solid var(--border-accent)",
                  padding: "15px 32px", borderRadius: "4px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  boxShadow: status === "sending" ? "none" : "0 0 30px rgba(0,245,160,0.2)",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}