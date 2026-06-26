import { motion } from "framer-motion"

// A glassmorphism hexagon-ish floating badge holding a tech icon
export default function FloatingBadge({ children, className = "", float = 0, label }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4 + float,
        repeat: Infinity,
        ease: "easeInOut",
        delay: float * 0.4,
      }}
      aria-label={label}
    >
      <div className="glass-strong flex h-14 w-14 items-center justify-center rounded-2xl shadow-glass">
        {children}
      </div>
    </motion.div>
  )
}
