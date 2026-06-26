import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import GlassCard from "../components/GlassCard.jsx"

const projects = [
  {
    img: "/project-ai.png",
    title: "AI Agents Platform",
    desc: "Intelligent AI agents for automation and productivity",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    img: "/project-ecommerce.png",
    title: "Ecommerce Platform",
    desc: "Full featured ecommerce solution with modern UI/UX",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    img: "/project-finance.png",
    title: "L&T Finance Dashboard",
    desc: "Finance dashboard with analytics and reporting",
    tags: ["React", "Chart.js", "Tailwind"],
  },
  {
    img: "/project-flow.png",
    title: "React Flow Builder",
    desc: "Visualize & build workflows using React Flow",
    tags: ["React", "React Flow", "Node.js"],
  },
]

export default function Projects() {
  return (
    <GlassCard id="projects" className="p-6">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
        <h3 className="text-xl font-bold">Featured Projects</h3>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-card backdrop-blur"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} preview`}
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white/80 text-brand-purple shadow">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold">{p.title}</h4>
              <p className="mt-1 text-xs leading-snug text-muted">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-brand-purple/10 px-2 py-0.5 text-[10px] font-semibold text-brand-purple"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full border border-brand-purple/30 bg-white/70 px-6 py-2.5 text-sm font-semibold text-brand-purple"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </GlassCard>
  )
}
