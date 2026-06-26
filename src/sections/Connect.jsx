import { motion } from "framer-motion"
import { Send, Mail } from "lucide-react"
import GlassCard from "../components/GlassCard.jsx"
import { GithubIcon, LinkedinIcon } from "../components/TechIcons.jsx"

export default function Connect() {
  return (
    <GlassCard id="contact" className="relative overflow-hidden p-6">
      <h3 className="text-xl font-bold">Let&apos;s Connect</h3>
      <p className="mt-2 max-w-[55%] text-sm leading-relaxed text-muted">
        I&apos;m always open to discussing new opportunities and interesting projects.
      </p>

      <motion.button
        whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(124,92,255,0.4)" }}
        whileTap={{ scale: 0.97 }}
        className="mt-5 flex items-center gap-2 rounded-full border border-brand-purple/30 bg-white/70 px-5 py-2.5 text-sm font-semibold text-brand-purple"
      >
        Send Message
        <Send className="h-4 w-4" />
      </motion.button>

      {/* floating globe with orbiting social icons */}
      <div className="pointer-events-none absolute -right-2 -top-0 h-48 w-48">
        <motion.img
          src="/globe.png"
          alt="Floating globe"
          className="absolute left-[15%] top-[25%] h-32 w-32 -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-lg bg-brand-pink p-1.5 text-white shadow-glow">
            <Mail className="h-4 w-4" />
          </span>
          <span className="absolute bottom-2 left-2 rounded-lg bg-ink p-1.5 text-white shadow-glow">
            <GithubIcon className="h-4 w-4" />
          </span>
          <span className="absolute bottom-2 right-2 rounded-lg bg-brand-blue p-1.5 text-white shadow-glow">
            <LinkedinIcon className="h-4 w-4" />
          </span>
        </motion.div>
      </div>
    </GlassCard>
  )
}
