import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Hero from "./sections/Hero.jsx"
import Stats from "./sections/Stats.jsx"
import Projects from "./sections/Projects.jsx"
import SkillsGalaxy from "./sections/SkillsGalaxy.jsx"
import Experience from "./sections/Experience.jsx"
import TechStack from "./sections/TechStack.jsx"
import Connect from "./sections/Connect.jsx"

export default function App() {
  return (
    <div className="min-h-screen w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1800px]">
        <Navbar />

        <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_minmax(360px,420px)]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* hero block with floating sidebar */}
            <div className="glass relative rounded-3xl p-5 shadow-glass sm:p-8">
              <div className="flex gap-16">
                <div className="hidden shrink-0 sm:block">
                  <Sidebar />
                </div>
                <div className="flex-1">
                  <Hero />
                </div>
              </div>
              <div className="mt-8">
                <Stats />
              </div>
            </div>

            <Projects />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            <SkillsGalaxy />
            <Experience />
            <TechStack />
            <Connect />
          </div>
        </div>

        <footer className="py-6 text-center text-xs text-muted">
          Designed &amp; built by Tejas Mohan Tarse — Full Stack MERN Developer
        </footer>
      </div>
    </div>
  )
}
