interface Props { mobile?: boolean }

const projects = [
  {
    id: "01",
    title: "Simulación de Intercepción de Misiles",
    category: "SIMULACIÓN",
    year: "2024",
    description: "Aplicación que simula trayectorias e intercepción de misiles usando modelos matemáticos y físicos.",
    highlights: ["Modelado Matemático", "Simulación Numérica", "Visualización"],
    technologies: ["Python", "Matplotlib"],
  },
  {
    id: "02",
    title: "Análisis de Datos de Arroz",
    category: "DATA ANALYSIS",
    year: "2024",
    description: "Proyecto de análisis exploratorio para identificar patrones y tendencias en datos de producción de arroz.",
    highlights: ["EDA", "Limpieza de Datos", "Insights"],
    technologies: ["Python", "Pandas", "NumPy", "Seaborn"],
  },
  {
    id: "03",
    title: "Colegio Mentes Creativas",
    category: "FULL-STACK",
    year: "2024",
    description: "Sistema web para gestión académica incluyendo estudiantes, cursos y procesos administrativos.",
    highlights: ["CRUD", "UI/UX", "Gestión de Datos"],
    technologies: ["JavaScript", "HTML", "CSS"],
  },
]

export default function WireframeProjects({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header - left aligned with counter */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Sección</p>
          <div className="flex items-baseline gap-3">
            <span className={`font-bold ${mobile ? "text-2xl" : "text-4xl"}`}>02</span>
            <span className="text-xs tracking-widest uppercase font-bold border-b-2 border-black pb-1">Proyectos</span>
          </div>
        </div>
        <div className="border border-black px-3 py-1 text-xs tracking-widest">
          {projects.length} TRABAJOS
        </div>
      </div>

      {/* Projects as timeline/list style - different from cards */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <div key={project.id} className="border-2 border-black border-b-0 last:border-b-2">
            {/* Project row header */}
            <div className={`flex ${mobile ? "flex-col" : "flex-row items-stretch"}`}>
              {/* Number column */}
              <div className={`bg-black text-white flex items-center justify-center ${mobile ? "py-3" : "w-20"}`}>
                <span className={`font-bold ${mobile ? "text-xl" : "text-2xl"}`}>{project.id}</span>
              </div>
              
              {/* Main content */}
              <div className={`flex-1 ${!mobile ? "border-l-2 border-black" : "border-t-2 border-black"}`}>
                {/* Title bar */}
                <div className={`border-b-2 border-black p-4 flex ${mobile ? "flex-col gap-2" : "items-center justify-between"}`}>
                  <div>
                    <p className={`font-bold ${mobile ? "text-base" : "text-lg"}`}>{project.title}</p>
                    <p className="text-xs text-gray-500">{project.description}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <span className="border border-black text-xs px-2 py-0.5 bg-gray-100">{project.category}</span>
                    <span className="border border-gray-400 text-xs px-2 py-0.5 text-gray-500">{project.year}</span>
                  </div>
                </div>
                
                {/* Details row */}
                <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-[1fr_1fr_auto]"}`}>
                  {/* Highlights */}
                  <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Aspectos Clave</p>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((h) => (
                        <span key={h} className="text-xs border border-gray-300 px-2 py-0.5">{h}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs border-2 border-black px-2 py-0.5 font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action */}
                  <div className="p-4 flex items-center justify-center">
                    <div className="border-2 border-dashed border-gray-400 px-4 py-2 text-xs tracking-widest text-gray-400">
                      [ VER ]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 flex justify-center">
        <div className="border-2 border-black px-8 py-3 text-xs font-bold tracking-widest uppercase">
          [ Ver Todos los Proyectos en GitHub ]
        </div>
      </div>
    </section>
  )
}
