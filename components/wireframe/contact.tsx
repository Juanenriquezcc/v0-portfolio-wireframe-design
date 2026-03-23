interface Props { mobile?: boolean }

export default function WireframeContact({ mobile }: Props) {
  return (
    <section className={`py-12 ${mobile ? "py-8" : ""}`}>
      {/* Section header - big and bold */}
      <div className="border-2 border-black mb-8">
        <div className={`bg-black text-white p-6 ${mobile ? "p-4" : ""}`}>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Sección 05</p>
          <p className={`font-bold ${mobile ? "text-2xl" : "text-4xl"}`}>Hablemos</p>
        </div>
        <div className="p-4 bg-gray-50">
          <p className="text-sm text-gray-600">
            Estoy abierto a oportunidades de trabajo, colaboraciones en proyectos 
            o simplemente para conectar y compartir ideas.
          </p>
        </div>
      </div>

      {/* Contact layout - stacked differently */}
      <div className={`${mobile ? "space-y-4" : "flex gap-0"}`}>
        
        {/* Left - Contact cards */}
        <div className={`${mobile ? "" : "flex-1"}`}>
          <div className="border-2 border-black">
            <div className="border-b-2 border-black px-4 py-2 bg-gray-100">
              <span className="text-xs font-bold tracking-widest uppercase">Canales de Contacto</span>
            </div>
            
            {/* Contact items as rows */}
            <div className="divide-y-2 divide-black">
              <div className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">@</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold truncate">juan.enriquez@email.com</p>
                </div>
                <div className="border border-black px-2 py-1 text-xs tracking-widest shrink-0">COPIAR</div>
              </div>
              
              <div className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">in</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-sm font-bold truncate">linkedin.com/in/juanenriquez</p>
                </div>
                <div className="border border-black px-2 py-1 text-xs tracking-widest shrink-0">IR</div>
              </div>
              
              <div className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">GH</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest">GitHub</p>
                  <p className="text-sm font-bold truncate">github.com/JuanEnriquez</p>
                </div>
                <div className="border border-black px-2 py-1 text-xs tracking-widest shrink-0">IR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className={`${mobile ? "" : "flex-1 border-l-0"}`}>
          <div className={`border-2 border-black ${!mobile ? "border-l-0" : ""}`}>
            <div className="border-b-2 border-black px-4 py-2 bg-gray-100">
              <span className="text-xs font-bold tracking-widest uppercase">Mensaje Directo</span>
            </div>
            
            <div className="p-4 space-y-3">
              {/* Form row */}
              <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Nombre</p>
                  <div className="border-2 border-black h-10 bg-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <div className="border-2 border-black h-10 bg-white" />
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Asunto</p>
                <div className="border-2 border-black h-10 bg-white" />
              </div>
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Mensaje</p>
                <div className="border-2 border-black h-24 bg-white" />
              </div>
              
              <div className="border-2 border-black bg-black text-white text-center py-3 text-xs font-bold tracking-widest uppercase">
                [ Enviar Mensaje ]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location bar */}
      <div className="mt-6 border-2 border-black flex items-stretch">
        <div className="border-r-2 border-black p-4 bg-gray-100 shrink-0">
          <span className="text-xs font-bold tracking-widest uppercase">Ubicación</span>
        </div>
        <div className="flex-1 p-4 flex items-center justify-between">
          <span className="text-sm">Pasto, Nariño, Colombia</span>
          <span className="text-xs text-gray-400">GMT-5</span>
        </div>
        <div className={`border-l-2 border-black flex items-center justify-center bg-gray-50 ${mobile ? "px-4" : "px-8"}`}>
          <div className="border-2 border-dashed border-gray-300 w-16 h-8 flex items-center justify-center">
            <span className="text-xs text-gray-300">[ MAP ]</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t-2 border-black">
        <div className={`flex ${mobile ? "flex-col gap-4" : "items-center justify-between"}`}>
          <div>
            <p className="font-bold">Juan José Enriquez Córdoba</p>
            <p className="text-xs text-gray-500">Estudiante de Ingeniería de Software</p>
          </div>
          <div className="flex gap-4">
            <div className="border border-black w-8 h-8 flex items-center justify-center text-xs">in</div>
            <div className="border border-black w-8 h-8 flex items-center justify-center text-xs">GH</div>
            <div className="border border-black w-8 h-8 flex items-center justify-center text-xs">@</div>
          </div>
          <p className="text-xs text-gray-400">© 2026 — Portafolio</p>
        </div>
      </div>
    </section>
  )
}
