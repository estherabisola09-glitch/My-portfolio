"use client";

const services = [
  {
    icon: "⬡",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs built with React and Next.js. Fast, accessible, and visually stunning interfaces that users love.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    icon: "⬡",
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js and Express. RESTful APIs, authentication systems, and database architecture.",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    icon: "⬡",
    title: "Fullstack Applications",
    description:
      "End-to-end web applications from database to deployment. I handle the full stack so your product ships faster.",
    tags: ["Next.js", "Node.js", "MongoDB", "Vercel"],
  },
  {
    icon: "⬡",
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs and services into your existing or new applications.",
    tags: ["REST", "GraphQL", "Webhooks", "Auth"],
  },
  {
    icon: "⬡",
    title: "Performance Optimization",
    description:
      "Auditing and improving web app performance — faster load times, better SEO scores, and smoother user experiences.",
    tags: ["Lighthouse", "Core Web Vitals", "SSR", "Caching"],
  },
  {
    icon: "⬡",
    title: "Tech Consultation",
    description:
      "Helping startups and individuals choose the right tech stack, architecture, and development strategy for their goals.",
    tags: ["Strategy", "Architecture", "Stack Choice"],
  },
];

export default function Services() {
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
        position: "fixed", top: "20%", left: "-100px",
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
          — What I Do
        </p>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900, lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Services I<br />
          <span style={{ color: "var(--accent)", textShadow: "0 0 30px rgba(0,245,160,0.3)" }}>
            Offer
          </span>
        </h1>
        <p style={{
          fontSize: "1.05rem", color: "var(--text-muted)",
          maxWidth: "520px", lineHeight: 1.9, fontWeight: 300,
        }}>
          From idea to deployment — I bring the technical expertise to make your vision a reality.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {services.map(({ icon, title, description, tags }) => (
          <div
            key={title}
            style={{
              background: "var(--bg-3)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "2rem",
              transition: "all 0.3s",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,245,160,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1.8rem",
              color: "var(--accent)",
              marginBottom: "1rem",
              textShadow: "0 0 20px rgba(0,245,160,0.4)",
            }}>
              {icon}
            </div>
            <h3 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1rem", fontWeight: 700,
              marginBottom: "0.8rem", lineHeight: 1.3,
            }}>
              {title}
            </h3>
            <p style={{
              fontSize: "0.9rem", color: "var(--text-muted)",
              lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300,
            }}>
              {description}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: "0.7rem", letterSpacing: "0.05em",
                  color: "var(--accent)", border: "1px solid var(--border-accent)",
                  padding: "3px 10px", borderRadius: "3px",
                  background: "var(--accent-glow)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}