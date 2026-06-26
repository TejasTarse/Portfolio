import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import GlassCard from "../components/GlassCard.jsx"
import { ReactIcon, NodeIcon, JSIcon, TSIcon, MongoIcon, ReduxIcon, ExpressIcon } from "../components/TechIcons.jsx"

const skills = [
  { icon: ReactIcon, label: "React", className: "left-[24%] top-[8%]" },
  { icon: JSIcon, label: "JavaScript", className: "right-[14%] top-[6%]" },
  { icon: TSIcon, label: "TypeScript", className: "right-[-2%] top-[34%]" },
  { icon: MongoIcon, label: "MongoDB", className: "right-[2%] bottom-[22%]" },
  { icon: ExpressIcon, label: "Express.js", className: "right-[26%] bottom-[8%]" },
  { icon: ReduxIcon, label: "Redux", className: "left-[14%] bottom-[14%]" },
  { icon: NodeIcon, label: "Node.js", className: "left-[6%] top-[34%]" },
]

export default function SkillsGalaxy() {
  return (
    <GlassCard id="skills" className="p-6">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
        <h3 className="text-lg font-bold">Skills Galaxy</h3>
      </div>

      <div className="relative mx-auto mt-4 h-64 w-full max-w-md">
        {/* orbit rings */}
        <div className="absolute left-1/2 top-1/2 h-48 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-brand-purple/20" />
        <div className="absolute left-1/2 top-1/2 h-32 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-brand-blue/20" />

        {/* rotating dotted orbit */}
        {/* <motion.div
          className="absolute left-1/2 top-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-brand-pink/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        /> */}

        {/* center sphere */}
        <motion.div
          className="absolute left-[35%] top-[30%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #c4b5fd, #7c5cff 55%, #5b21b6 100%)",
            boxShadow: "0 0 40px rgba(124,92,255,0.55)",
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* skill badges */}
        {skills.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.label}
              className={`absolute flex items-center gap-1.5 ${s.className} `}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass-strong flex h-9 w-9 items-center justify-center rounded-xl shadow-glass">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-semibold text-ink/80">{s.label}</span>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full border border-brand-purple/30 bg-white/70 px-5 py-2 text-sm font-semibold text-brand-purple"
        >
          Explore All Skills
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </GlassCard>
  )
}
