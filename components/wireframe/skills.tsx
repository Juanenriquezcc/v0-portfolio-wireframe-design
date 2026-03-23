interface Props { mobile?: boolean }

const skills = [
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 80, category: "Frontend" },
  { name: "Python", level: 70, category: "Data" },
  { name: "Pandas", level: 65, category: "Data" },
  { name: "NumPy", level: 60, category: "Data" },
  { name: "Matplotlib / Seaborn", level: 65, category: "Data" },
  { name: "Git / GitHub", level: 70, category: "Tools" },
  { name: "Modelado Matemático", level: 60, category: "Concepts" },
]

const tools = ["VS Code", "Jupyter Notebook", "Figma", "Postman", "Git"]

export default function WireframeSkills({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header - asymmetric */}
      <div className={`flex ${mobile ? "flex-col gap-4" : "items-start justify-between"} mb-8`}>
        <div className="border-2 border-black p-4 bg-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Sección 03</p>
          <p className={`font-bold ${mobile ? "text-xl" : "text-2xl"}`}>Habilidades</p>
        </div>
        <div className={`text-xs text-gray-500 ${mobile ? "" : "text-right max-w-xs"}`}>
          Competencias técnicas desarrolladas a través de proyectos académicos y personales
        </div>
      </div>

      {/* Skills with progress bars - horizontal layout */}
      <div className="border-2 border-black mb-6">
        <div className="border-b-2 border-black px-4 py-2 bg-black text-white">
          <span className="text-xs font-bold tracking-widest uppercase">Competencias Técnicas</span>
        </div>
        
        <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2"}`}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`p-4 ${
                !mobile && index % 2 === 0 ? "border-r-2 border-black" : ""
              } ${
                index < skills.length - (mobile ? 1 : 2) ? "border-b-2 border-black" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">{skill.name}</span>
                <span className="text-xs border border-gray-300 px-2 py-0.5">{skill.category}</span>
              </div>
              {/* Progress bar wireframe */}
              <div className="h-3 border-2 border-black relative">
                <div 
                  className="absolute inset-y-0 left-0 bg-gray-300 border-r-2 border-black"
                  style={{ width: `${skill.level}%` }}
                />
                <div className="absolute inset-0 flex">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 border-r border-gray-200 last:border-r-0" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 text-right mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools row - horizontal scroll style */}
      <div className="border-2 border-black">
        <div className="border-b-2 border-black px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest uppercase">Herramientas</span>
          <span className="text-xs text-gray-400">{tools.length} tools</span>
        </div>
        <div className={`flex ${mobile ? "flex-wrap" : ""} gap-0`}>
          {tools.map((tool, index) => (
            <div 
              key={tool} 
              className={`flex-1 min-w-0 p-4 text-center ${
                index < tools.length - 1 ? "border-r-2 border-black" : ""
              } ${mobile ? "basis-1/2 border-b-2 border-black last:border-b-0" : ""}`}
            >
              <div className="border-2 border-dashed border-gray-300 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs text-gray-300">ico</span>
              </div>
              <p className="text-xs font-bold truncate">{tool}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning note */}
      <div className="mt-6 border-2 border-dashed border-gray-400 p-4 text-center">
        <p className="text-xs text-gray-500">
          Actualmente aprendiendo: <span className="font-bold text-black">React</span>, 
          <span className="font-bold text-black"> TypeScript</span>, 
          <span className="font-bold text-black"> Node.js</span>
        </p>
      </div>
    </section>
  )
}
