import { motion } from "framer-motion"
import { Box, Star, Code2 } from "lucide-react"
import GlassCard from "../components/GlassCard.jsx"
import { GithubIcon } from "../components/TechIcons.jsx"

const stats = [
  { icon: Box, value: "8+", label: "Projects Completed", from: "from-brand-purple", to: "to-brand-violet" },
  { icon: Star, value: "1+", label: "Years of Experience", from: "from-brand-cyan", to: "to-brand-blue" },
  { icon: Code2, value: "6+", label: "Technologies Mastered", from: "from-brand-blue", to: "to-brand-purple" },
  { icon: GithubIcon, value: "100+", label: "Commits on GitHub", from: "from-brand-green", to: "to-brand-cyan" },
]

export default function Stats() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = s.icon
        return (
          <GlassCard
            key={s.label}
            delay={i * 0.08}
            className="p-5"
          >
            <motion.div whileHover={{ y: -4 }} className="flex items-start gap-3">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.from} ${s.to} text-white shadow-glow`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold leading-none">{s.value}</p>
                <p className="mt-1 text-xs font-medium leading-tight text-muted">{s.label}</p>
              </div>
            </motion.div>
          </GlassCard>
        )
      })}
    </section>
  )
}
