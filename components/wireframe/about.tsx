interface Props { mobile?: boolean }

export default function WireframeAbout({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">02 — Sobre Mí</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_2fr]"}`}>

        {/* Left: Placeholder block (profile/diagram) */}
        <div className="flex flex-col gap-3">
          <div className={`border-2 border-dashed border-gray-400 flex items-center justify-center ${mobile ? "h-28" : "h-48"}`}>
            <span className="text-xs text-gray-400 tracking-widest">[ FOTO / DIAGRAMA ]</span>
          </div>
          {/* Quick stats */}
          <div className="border border-black p-3 text-xs">
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Carrera</span><span className="font-bold">Ing. Software</span></div>
            <div className="border-b border-gray-300 pb-1 mb-1 flex justify-between"><span>Enfoque</span><span className="font-bold">Frontend + Análisis de Datos</span></div>
            <div className="flex justify-between"><span>Mentalidad</span><span className="font-bold">Resolución de Problemas</span></div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col gap-4">
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Quién Soy</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Soy Juan José Enriquez Córdoba, estudiante de Ingeniería de Software de Pasto, Nariño, Colombia. 
              Me apasiona el desarrollo frontend y la creación de interfaces que conecten con los usuarios de forma intuitiva y efectiva.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Análisis y Visualización</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tengo experiencia en análisis exploratorio de datos utilizando Python, Pandas y bibliotecas de visualización. 
              Me interesa transformar datos complejos en insights comprensibles a través de gráficos y representaciones visuales claras.
            </p>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black pb-1">Desarrollo Web y Sistemas</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Desarrollo sistemas web funcionales con JavaScript, HTML y CSS, implementando operaciones CRUD y 
              diseños enfocados en la usabilidad. Busco crear soluciones que optimicen procesos y mejoren la experiencia del usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
