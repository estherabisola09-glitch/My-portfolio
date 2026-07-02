"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB", level: 78 },
  { name: "REST APIs", level: 88 },
  { name: "Git & GitHub", level: 85 },
];

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  const barRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const level = el.getAttribute("data-level");
            el.style.width = `${level}%`;
          }
        });
      },
      { threshold: 0.2 }
    );
    barRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
        position: "fixed", top: "30%", right: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,217,245,0.06) 0%, transparent 70%)",
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
          — About Me
        </p>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900, lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          The Developer<br />
          <span style={{ color: "var(--accent)", textShadow: "0 0 30px rgba(0,245,160,0.3)" }}>
            Behind the Code
          </span>
        </h1>
        <p style={{
          fontSize: "1.05rem", color: "var(--text-muted)",
          maxWidth: "580px", lineHeight: 1.9, fontWeight: 300,
        }}>
          I&apos;m Kusimo, a passionate fullstack developer based in Nigeria. 
          I love turning complex problems into simple, beautiful, and intuitive solutions. 
          Every line of code I write is driven by a desire to create experiences that matter.
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "1.5rem", marginBottom: "5rem",
      }}>
        {stats.map(({ value, label }) => (
          <div key={label} style={{
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
            borderRadius: "8px", padding: "1.5rem",
            textAlign: "center",
            transition: "border-color 0.3s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "2rem", fontWeight: 900,
              color: "var(--accent)",
              textShadow: "0 0 20px rgba(0,245,160,0.4)",
            }}>
              {value}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.3rem", letterSpacing: "0.05em" }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "0.75rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--accent)",
          marginBottom: "2rem",
        }}>
          — Tech Skills
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {skills.map(({ name, level }, i) => (
            <div key={name}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.04em" }}>{name}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontFamily: "'Orbitron', sans-serif" }}>
                  {level}%
                </span>
              </div>
              <div style={{
                height: "4px", background: "var(--bg-3)",
                borderRadius: "2px", overflow: "hidden",
                border: "1px solid var(--border)",
              }}>
                <div
                  ref={(el) => { if (el) barRefs.current[i] = el; }}
                  data-level={level}
                  style={{
                    height: "100%", width: "0%",
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                    borderRadius: "2px",
                    transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: "0 0 10px rgba(0,245,160,0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}