import { motion } from "framer-motion"
import { Download } from "lucide-react"

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between gap-4 px-2 py-3 lg:px-6"
    >
      <a href="#home" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
        <span className="text-brand-purple">T</span>
        <span className="text-brand-pink">M</span>
        <span className="text-brand-blue">T</span>
      </a>

      <ul className="hidden items-center gap-7 lg:flex">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`relative text-sm font-medium transition-colors ${
                i === 0 ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link}
              {i === 0 && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
              )}
            </a>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(124,92,255,0.45)" }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Download Resume</span>
        <span className="sm:hidden">Resume</span>
      </motion.button>
    </motion.nav>
  )
}
