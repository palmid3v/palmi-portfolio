import Section from "@/src/components/Section";
import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/projects";
import Navbar from "@/src/components/Navbar";
import FadeIn from "@/src/components/FadeIn";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">

  {/* Glow */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_60%)]" />

  <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
    Palmi Dev
  </h1>

  <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl">
    Frontend Developer & Technical Support Specialist
  </p>

  <p className="mt-3 text-sm text-gray-500 max-w-md">
    I build useful tools, automate workflows, and solve real-world problems.
  </p>

  <p className="mt-4 text-xs text-gray-600">
    Based in Colombia • Open to remote roles
  </p>
  <p className="mt-2 text-xs text-gray-600">
  Building real-world tools used in practical scenarios
</p>

  <div className="mt-8 flex gap-4">
    <a
      href="#projects"
      className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 hover:shadow-xl transition"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-900 hover:scale-105 transition"
    >
      Contact
    </a>
  </div>

</section>
<FadeIn>
  <section className="py-20 px-6 max-w-4xl mx-auto text-center">
    
    <h2 className="text-3xl font-bold mb-6">
      I don’t just build apps — I solve real problems.
    </h2>

    <p className="text-gray-400 leading-relaxed">
      With a background in customer support and tech, I understand both
      the user and the system. I build tools that are not only functional,
      but actually useful in real-world scenarios — from dynamic pricing systems
      to workflow automation.
    </p>

    <p className="mt-4 text-gray-500">
      My focus is simple: build fast, solve real problems, and make things that people actually use.
    </p>

  </section>
</FadeIn>

      {/* PROJECTS */}
      <FadeIn>
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((p) => (
      <ProjectCard key={p.title} {...p} />
    ))}
  </div>
</section>
</FadeIn>
<FadeIn>
  <section className="py-20 px-6 max-w-5xl mx-auto">
    
    <h2 className="text-3xl font-bold mb-6">
      Currently Building
    </h2>

    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      
      <h3 className="font-semibold text-lg">
        Sandwich App Ecosystem
      </h3>

      <p className="text-gray-400 mt-2">
        Expanding the sandwich builder into a full system with inventory tracking,
        dashboards, and business analytics.
      </p>

      <div className="mt-4 text-sm text-gray-500">
        → Inventory system  
        → Admin dashboard  
        → Cost optimization tools  
      </div>

    </div>

  </section>
</FadeIn>

      {/* SKILLS */}
      <FadeIn>
      <section className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-8">Skills</h2>

  <div className="flex flex-wrap gap-3">
    {[
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Customer Support",
    ].map((skill) => (
      <span
        key={skill}
        className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm hover:border-gray-600 transition"
      >
        {skill}
      </span>
    ))}
  </div>
</section>
</FadeIn>

      {/* EXPERIENCE */}
      <Section title="Experience">
        <div className="space-y-4 text-gray-400">
          <p>
            Airbnb — Account Management  
            <br />
            Assisted clients with reservations and support workflows.
          </p>

          <p>
            Customer Support Specialist  
            <br />
            Managed 300+ cases monthly with high satisfaction rates.
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <FadeIn>
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Contact</h2>

  <div className="text-gray-400 space-y-2">
    <p>Email: your@email.com</p>
    <p>GitHub: github.com/youruser</p>
    <p>LinkedIn: linkedin.com/in/yourprofile</p>
  </div>
</section>
</FadeIn>

    </main>
  );
}