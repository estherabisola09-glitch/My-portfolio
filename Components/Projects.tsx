"use client";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Veritrace",
    description:
      "A supply chain traceability platform enabling manufacturers to track products from origin to delivery using QR codes, with a consumer-facing portal to verify authenticity and view a product's full journey. Collaborative project — built the landing page, site branding, and dashboard feature pages (Activity Log, Fraud Alerts, Scan Analytics).",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "React Query"],
    category: "Frontend",
    live: "https://veritrace-rho.vercel.app/",
    github: "https://github.com/DanielAgbeni/Veritrace",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A futuristic personal portfolio built with Next.js and TypeScript. Features smooth animations, dynamic routing, and a dark tech aesthetic.",
    tags: ["Next.js", "TypeScript"],
    category: "Frontend",
    live: "https://kusimo-esther.vercel.app/",
    github: "https://github.com/estherabisola09-glitch/My-portfolio",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A fullstack e-commerce app with product listings, cart management, user authentication, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Fullstack",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "REST API Service",
    description:
      "A scalable RESTful API built with Express and MongoDB. Includes JWT authentication, rate limiting, and full CRUD operations.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop task boards, user collaboration, and real-time updates.",
    tags: ["React", "TypeScript", "Node.js"],
    category: "Fullstack",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard consuming OpenWeather API with location search, forecasts, and beautiful data visualizations.",
    tags: ["React", "API", "Chart.js"],
    category: "Frontend",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Auth System",
    description:
      "A complete authentication system with email verification, OAuth, password reset, and role-based access control.",
    tags: ["Node.js", "JWT", "OAuth", "MongoDB"],
    category: "Backend",
    live: "#",
    github: "#",
    featured: false,
  },
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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
        position: "fixed", bottom: "20%", right: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,160,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "0.75rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--accent)",
          marginBottom: "1rem",
        }}>
          — My Work
        </p>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900, lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Featured<br />
          <span style={{ color: "var(--accent)", textShadow: "0 0 30px rgba(0,245,160,0.3)" }}>
            Projects
          </span>
        </h1>
        <p style={{
          fontSize: "1.05rem", color: "var(--text-muted)",
          maxWidth: "520px", lineHeight: 1.9, fontWeight: 300,
        }}>
          A selection of things I&apos;ve built — from fullstack apps to APIs and everything in between.
        </p>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.7rem", letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 20px", borderRadius: "3px",
              border: active === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: active === cat ? "var(--accent-glow)" : "transparent",
              color: active === cat ? "var(--accent)" : "var(--text-muted)",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
      }}>
        {filtered.map(({ title, description, tags, live, github, featured }) => (
          <div
            key={title}
            style={{
              background: "var(--bg-3)",
              border: `1px solid ${featured ? "var(--border-accent)" : "var(--border)"}`,
              borderRadius: "8px", padding: "2rem",
              transition: "all 0.3s", position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,245,160,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {featured && (
              <span style={{
                position: "absolute", top: "1rem", right: "1rem",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.6rem", letterSpacing: "0.1em",
                color: "var(--accent)", border: "1px solid var(--border-accent)",
                padding: "3px 8px", borderRadius: "2px",
                background: "var(--accent-glow)",
              }}>
                FEATURED
              </span>
            )}
            <h3 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1rem", fontWeight: 700,
              marginBottom: "0.8rem", lineHeight: 1.3,
              paddingRight: featured ? "5rem" : "0",
            }}>
              {title}
            </h3>
            <p style={{
              fontSize: "0.88rem", color: "var(--text-muted)",
              lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300,
            }}>
              {description}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: "0.7rem", color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "3px 10px", borderRadius: "3px",
                  background: "var(--bg-2)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href={live} style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.7rem", letterSpacing: "0.08em",
                color: "var(--accent)", textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--border-accent)",
                paddingBottom: "1px",
              }}>
                Live →
              </Link>
              <Link href={github} style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.7rem", letterSpacing: "0.08em",
                color: "var(--text-muted)", textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "1px",
              }}>
                GitHub →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}