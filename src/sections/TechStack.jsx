import { motion } from "framer-motion"
import GlassCard from "../components/GlassCard.jsx"
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  JSIcon,
  TSIcon,
  TailwindIcon,
} from "../components/TechIcons.jsx"

const stack = [ReactIcon, NodeIcon, MongoIcon, ExpressIcon, JSIcon, TSIcon, TailwindIcon]

export default function TechStack() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
        <h3 className="text-lg font-bold">Tech Stack</h3>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {stack.map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.08 }}
            className="glass-strong flex h-14 w-14 items-center justify-center rounded-2xl shadow-glass"
          >
            <Icon className="h-7 w-7" />
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
