interface Props { mobile?: boolean }

export default function WireframeAbout({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header - centered style */}
      <div className="text-center mb-8">
        <div className="inline-block border-2 border-black px-6 py-2 bg-gray-100">
          <span className="text-xs tracking-widest uppercase font-bold">01 — Quién Soy</span>
        </div>
      </div>

      {/* Main intro text - large centered */}
      <div className="border-2 border-black p-6 mb-6 bg-gray-50">
        <p className={`text-center leading-relaxed ${mobile ? "text-sm" : "text-lg"}`}>
          Soy <span className="font-bold">Juan José</span>, estudiante de Ingeniería de Software 
          de <span className="border-b-2 border-black">Pasto, Nariño, Colombia</span>. 
          Me apasiona crear interfaces intuitivas y analizar datos para resolver problemas reales.
        </p>
      </div>

      {/* Three pillars - horizontal cards */}
      <div className={`grid gap-0 ${mobile ? "grid-cols-1" : "grid-cols-3"}`}>
        {/* Pillar 1 */}
        <div className={`border-2 border-black ${!mobile ? "" : "border-b-0"} ${!mobile ? "" : ""}`}>
          <div className="border-b-2 border-black px-4 py-2 bg-black text-white">
            <span className="text-xs font-bold tracking-widest uppercase">01 / Frontend</span>
          </div>
          <div className="p-4">
            <div className="border-2 border-dashed border-gray-300 h-16 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-gray-300">{'</>'}</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Desarrollo interfaces con JavaScript, HTML y CSS. Me enfoco en crear experiencias 
              de usuario claras y accesibles.
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className={`border-2 border-black ${!mobile ? "border-l-0" : "border-b-0"}`}>
          <div className="border-b-2 border-black px-4 py-2 bg-black text-white">
            <span className="text-xs font-bold tracking-widest uppercase">02 / Data</span>
          </div>
          <div className="p-4">
            <div className="border-2 border-dashed border-gray-300 h-16 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-gray-300">[...]</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Análisis exploratorio con Python, Pandas y visualización. Transformo datos 
              complejos en insights comprensibles.
            </p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className={`border-2 border-black ${!mobile ? "border-l-0" : ""}`}>
          <div className="border-b-2 border-black px-4 py-2 bg-black text-white">
            <span className="text-xs font-bold tracking-widest uppercase">03 / Sistemas</span>
          </div>
          <div className="p-4">
            <div className="border-2 border-dashed border-gray-300 h-16 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-gray-300">{'{}'}</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Desarrollo sistemas web completos con operaciones CRUD y arquitectura 
              organizada para proyectos escalables.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className={`grid ${mobile ? "grid-cols-2" : "grid-cols-4"} border-2 border-black border-t-0`}>
        <div className={`p-3 text-center ${!mobile ? "border-r-2 border-black" : "border-r-2 border-b-2 border-black"}`}>
          <p className="text-2xl font-bold">3+</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Proyectos</p>
        </div>
        <div className={`p-3 text-center ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
          <p className="text-2xl font-bold">5+</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Tecnologías</p>
        </div>
        <div className={`p-3 text-center ${!mobile ? "border-r-2 border-black" : "border-r-2 border-black"}`}>
          <p className="text-2xl font-bold">2+</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Años Estudiando</p>
        </div>
        <div className="p-3 text-center">
          <p className="text-2xl font-bold">100%</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Compromiso</p>
        </div>
      </div>
    </section>
  )
}
