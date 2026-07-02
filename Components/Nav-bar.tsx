"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.2rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border)",
        background: "rgba(3,7,18,0.85)",
        backdropFilter: "blur(20px)",
      }}
    >
      <span
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: "1.1rem",
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textShadow: "0 0 20px rgba(0,245,160,0.5)",
        }}
      >
        KSM.DEV
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: pathname === href ? "var(--accent)" : "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              borderBottom: pathname === href ? "1px solid var(--accent)" : "none",
              paddingBottom: "2px",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}