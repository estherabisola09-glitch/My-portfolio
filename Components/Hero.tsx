"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Fullstack Developer", "React Engineer", "Backend Architect", "UI/UX Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2.5rem",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,245,160,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,245,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid var(--border-accent)",
            padding: "6px 16px",
            borderRadius: "100px",
            marginBottom: "2rem",
            background: "var(--accent-glow)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          Available for work
        </div>

        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              color: "var(--accent)",
              textShadow: "0 0 40px rgba(0,245,160,0.4)",
            }}
          >
            Kusimo
          </span>
        </h1>

        <h2
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "var(--text-muted)",
            marginBottom: "2rem",
            minHeight: "2.5rem",
          }}
        >
          <span style={{ color: "var(--accent-2)" }}>{displayed}</span>
          <span
            style={{
              borderRight: "2px solid var(--accent)",
              marginLeft: "2px",
              animation: "blink 1s infinite",
            }}
          />
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            maxWidth: "520px",
            lineHeight: 1.8,
            marginBottom: "3rem",
            fontWeight: 300,
          }}
        >
          I build fast, scalable, and beautiful web applications — from pixel-perfect frontends to robust backend systems.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <Link
            href="/projects"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              textTransform: "uppercase",
              boxShadow: "0 0 30px rgba(0,245,160,0.3)",
              transition: "all 0.2s",
            }}
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            style={{
              background: "transparent",
              color: "var(--accent)",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid var(--border-accent)",
              transition: "all 0.2s",
            }}
          >
            Contact Me
          </Link>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                padding: "5px 14px",
                borderRadius: "3px",
                background: "var(--bg-3)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}