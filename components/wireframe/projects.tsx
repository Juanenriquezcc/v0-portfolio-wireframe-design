interface Props { mobile?: boolean }

const projects = [
  {
    title: "Simulación de Intercepción de Misiles",
    type: "Simulación",
    description: "Aplicación que simula la trayectoria e intercepción de misiles utilizando modelos matemáticos y físicos para representar movimiento en el espacio.",
    problem: "Permite visualizar y analizar escenarios de intercepción sin necesidad de entornos reales, facilitando la comprensión de conceptos de física y cálculo aplicados al movimiento.",
    approach: "Implementé modelos matemáticos para trayectorias, desarrollé la lógica de simulación y creé representaciones gráficas de resultados para validar el comportamiento del sistema.",
    technologies: ["Python", "Modelado Matemático", "Simulación Numérica", "Matplotlib"],
    keyDecision: "Uso de simulación discreta para modelar movimiento en el tiempo. Representación visual para facilitar interpretación de resultados.",
  },
  {
    title: "Análisis Exploratorio de Datos de Arroz",
    type: "Data Analysis",
    description: "Proyecto de análisis de datos enfocado en explorar, limpiar y visualizar un dataset relacionado con producción o características del arroz.",
    problem: "Permite identificar patrones, tendencias y posibles anomalías en los datos, facilitando la toma de decisiones basada en información.",
    approach: "Realicé limpieza y preprocesamiento de datos, análisis exploratorio (EDA), generación de visualizaciones e interpretación de resultados.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    keyDecision: "Uso de EDA para entender estructura y calidad de los datos antes de modelar. Visualización como herramienta principal para detectar patrones.",
  },
  {
    title: "Colegio Mentes Creativas",
    type: "Full-Stack",
    description: "Sistema web para la gestión de información académica, incluyendo estudiantes, cursos y procesos administrativos básicos.",
    problem: "Optimiza la organización de datos educativos y reduce la dependencia de procesos manuales en entornos escolares.",
    approach: "Desarrollé funcionalidades principales del sistema, implementé operaciones CRUD, diseñé interfaces de usuario y organicé la estructura del proyecto.",
    technologies: ["JavaScript", "HTML", "CSS", "CRUD Estructurado"],
    keyDecision: "Implementación de lógica CRUD para gestión eficiente de datos. Diseño simple enfocado en facilidad de uso para usuarios no técnicos.",
  },
]

export default function WireframeProjects({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">03 — Proyectos</span>
        <div className="flex-1 border-t border-black" />
        <span className="text-xs text-gray-500">3 casos de estudio</span>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div key={project.title} className="border-2 border-black">
            {/* Project header bar */}
            <div className="border-b-2 border-black px-4 py-2 flex items-center justify-between bg-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 font-bold">{String(i + 1).padStart(2, "0")}</span>
                <span className={`font-bold tracking-tight ${mobile ? "text-base" : "text-lg"}`}>{project.title}</span>
              </div>
              <span className="border border-black text-xs px-2 py-0.5 font-bold tracking-widest">{project.type.toUpperCase()}</span>
            </div>

            <div className={`grid gap-0 ${mobile ? "grid-cols-1" : "grid-cols-[2fr_1fr_1fr]"}`}>
              {/* Description + Problem */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Descripción</p>
                <p className="text-sm text-gray-800 leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Problema Resuelto</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
              </div>

              {/* Technical approach */}
              <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Enfoque Técnico</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{project.approach}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-500">Decisión Clave</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.keyDecision}</p>
              </div>

              {/* Technologies */}
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Tecnologías</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-black text-xs px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-300 pt-3">
                  <div className="border-2 border-dashed border-gray-400 text-center py-2 text-xs text-gray-400 tracking-widest">
                    [ VER ESTUDIO DE CASO ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
