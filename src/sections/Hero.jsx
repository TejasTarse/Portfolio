import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import FloatingBadge from "../components/FloatingBadge.jsx"
import { ReactIcon, NodeIcon, JSIcon, TSIcon, MongoIcon, ReduxIcon } from "../components/TechIcons.jsx"

export default function Hero() {
  return (
    <section id="home" className="grid items-center gap-8 lg:grid-cols-2">
      {/* Left: intro text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-2xl font-medium text-ink/70 sm:text-3xl">Hi, I&apos;m</p>
        <h1 className="mt-1 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
          Tejas <span className="text-gradient">Mohan</span> Tarse
        </h1>
        <h2 className="mt-3 text-xl font-bold sm:text-2xl">
          Full Stack <span className="text-gradient">MERN</span> Developer
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          I build scalable, responsive and modern web applications with clean code and exceptional
          user experiences.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(124,92,255,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet px-6 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-brand-purple/30 bg-white/60 px-6 py-3 text-sm font-semibold text-brand-purple backdrop-blur transition-colors hover:bg-white"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right: illustration + floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative mx-auto h-[320px] w-full max-w-lg sm:h-[400px]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img
            src="/workstation.png"
            alt="Modern developer workstation with laptop"
            className="h-full w-full object-cover"
          />
        </div>

        <FloatingBadge className="left-2 top-6" float={0} label="React">
          <ReactIcon className="h-7 w-7" />
        </FloatingBadge>
        <FloatingBadge className="left-1/4 -top-4" float={1} label="Node.js">
          <NodeIcon className="h-7 w-7" />
        </FloatingBadge>
        <FloatingBadge className="right-1/3 top-2" float={2} label="JavaScript">
          <JSIcon className="h-7 w-7" />
        </FloatingBadge>
        <FloatingBadge className="-right-2 top-1/4" float={1.5} label="TypeScript">
          <TSIcon className="h-7 w-7" />
        </FloatingBadge>
        <FloatingBadge className="-right-3 bottom-10" float={0.6} label="MongoDB">
          <MongoIcon className="h-7 w-7" />
        </FloatingBadge>
        <FloatingBadge className="left-0 bottom-6" float={2.4} label="Redux">
          <ReduxIcon className="h-7 w-7" />
        </FloatingBadge>
      </motion.div>
    </section>
  )
}
