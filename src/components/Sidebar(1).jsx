import { motion } from "framer-motion"
import { Home, User, Briefcase, Code2, GraduationCap, Mail } from "lucide-react"

const items = [
  { icon: Home, label: "Home", active: true },
  { icon: User, label: "About" },
  { icon: Briefcase, label: "Projects" },
  { icon: Code2, label: "Skills" },
  { icon: GraduationCap, label: "Experience" },
  { icon: Mail, label: "Contact" },
]

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-strong flex flex-col items-center gap-3 rounded-3xl p-3 shadow-glass"
    >
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            aria-label={item.label}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
              item.active
                ? "bg-gradient-to-br from-brand-purple to-brand-violet text-white shadow-glow"
                : "text-muted hover:bg-white/70 hover:text-brand-purple"
            }`}
          >
            <Icon className="h-5 w-5" />
          </motion.button>
        )
      })}
    </motion.aside>
  )
}
