import { motion } from "framer-motion"

export default function GlassCard({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-3xl shadow-glass ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
