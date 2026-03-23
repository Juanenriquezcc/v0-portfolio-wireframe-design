interface Props { mobile?: boolean }

export default function WireframeHero({ mobile }: Props) {
  return (
    <section className={`border-b-2 border-black py-12 ${mobile ? "py-8" : ""}`}>
      {/* Horizontal layout - different from original vertical stack */}
      <div className={`${mobile ? "" : "flex items-stretch gap-0"}`}>
        
        {/* Large avatar placeholder - LEFT side */}
        <div className={`border-2 border-black flex items-center justify-center bg-gray-50 ${mobile ? "h-32 mb-4" : "w-48 shrink-0"}`}>
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tighter">JJ</div>
            <div className="text-xs text-gray-400 tracking-widest mt-1">[ AVATAR ]</div>
          </div>
        </div>

        {/* Content block - CENTER */}
        <div className={`flex-1 border-2 border-black border-l-0 ${mobile ? "border-l-2 border-t-0" : ""}`}>
          {/* Name bar at top */}
          <div className="border-b-2 border-black bg-black text-white px-4 py-3">
            <p className={`font-bold tracking-tight ${mobile ? "text-xl" : "text-3xl"}`}>
              Juan José Enriquez Córdoba
            </p>
          </div>
          
          {/* Info grid */}
          <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-3"}`}>
            <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Ubicación</p>
              <p className="text-sm font-bold">Pasto, Nariño</p>
              <p className="text-sm">Colombia</p>
            </div>
            <div className={`p-4 ${!mobile ? "border-r-2 border-black" : "border-b-2 border-black"}`}>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Rol</p>
              <p className="text-sm font-bold">Estudiante</p>
              <p className="text-sm">Ing. Software</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Enfoque</p>
              <p className="text-sm font-bold">Frontend</p>
              <p className="text-sm">+ Data Analysis</p>
            </div>
          </div>
        </div>

        {/* Status indicator - RIGHT side (desktop only) */}
        {!mobile && (
          <div className="w-12 border-2 border-black border-l-0 bg-gray-100 flex flex-col items-center justify-center">
            <div className="writing-mode-vertical text-xs tracking-widest uppercase font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
              Abierto a Trabajar
            </div>
          </div>
        )}
      </div>

      {/* Statement bar - FULL WIDTH below */}
      <div className="border-2 border-black border-t-0 p-4 bg-gray-50">
        <p className="text-sm text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Combino desarrollo frontend con análisis de datos y simulaciones matemáticas para crear 
          soluciones digitales que transforman ideas complejas en experiencias claras y funcionales.
        </p>
      </div>

      {/* CTA row */}
      <div className={`flex ${mobile ? "flex-col" : "flex-row"} gap-0 mt-0`}>
        <div className={`border-2 border-black border-t-0 px-6 py-3 text-xs font-bold tracking-widest uppercase bg-black text-white text-center ${mobile ? "" : "flex-1"}`}>
          [ Ver Proyectos ]
        </div>
        <div className={`border-2 border-black border-t-0 ${!mobile ? "border-l-0" : ""} px-6 py-3 text-xs font-bold tracking-widest uppercase text-center ${mobile ? "" : "flex-1"}`}>
          [ Descargar CV ]
        </div>
        <div className={`border-2 border-black border-t-0 ${!mobile ? "border-l-0" : ""} px-6 py-3 text-xs font-bold tracking-widest uppercase text-center ${mobile ? "" : "flex-1"}`}>
          [ Contactar ]
        </div>
      </div>
    </section>
  )
}
