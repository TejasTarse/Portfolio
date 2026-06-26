import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import GlassCard from "../components/GlassCard.jsx"

const timeline = [
  {
    period: "Feb 2026 - Present",
    title: "React Developer Intern",
    org: "Credentek",
    desc: "Building responsive dashboards and web applications using React.js and modern tools.",
    color: "bg-brand-purple",
  },
  {
    period: "2025",
    title: "Full Stack Development Projects",
    org: "Multiple Projects",
    desc: "Developed multiple full stack applications using MERN stack.",
    color: "bg-brand-blue",
  },
  {
    period: "2021 - 2025",
    title: "B.Tech in Computer Science",
    org: "Bharati Vidyapeeth College",
    desc: "CGPA: 8.06",
    color: "bg-brand-pink",
  },
]

export default function Experience() {
  return (
    <GlassCard id="experience" className="p-6">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
        <h3 className="text-lg font-bold">Experience Timeline</h3>
      </div>

      <div className="relative mt-5 pl-28">
        {/* vertical line */}
        <div className="absolute left-[104px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-pink" />

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* period label on the left */}
              <span className="absolute -left-28 top-6 w-24 text-right text-xs font-semibold text-brand-purple">
                {item.period}
              </span>
              {/* node */}
              <span
                className={`absolute -left-[34px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-white ${item.color}`}
              />
              <h4 className="text-sm font-bold leading-tight">{item.title}</h4>
              <p className="text-xs font-semibold text-ink/70">{item.org}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-full border border-brand-purple/30 bg-white/70 px-5 py-2 text-sm font-semibold text-brand-purple"
        >
          View Full Timeline
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </GlassCard>
  )
}
