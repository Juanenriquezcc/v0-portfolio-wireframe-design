interface Props { mobile?: boolean }

export default function WireframeNav({ mobile }: Props) {
  return (
    <nav className={`border-b-2 border-black py-4 ${mobile ? "py-3" : ""}`}>
      <div className={`flex items-center ${mobile ? "justify-between" : "gap-0"}`}>
        {/* Logo - boxed style */}
        <div className="border-2 border-black flex">
          <div className="bg-black text-white px-3 py-2">
            <span className="text-xs font-bold tracking-widest">JJ</span>
          </div>
          <div className="px-3 py-2 border-l-2 border-black">
            <span className="text-xs font-bold tracking-widest">EC</span>
          </div>
        </div>

        {mobile ? (
          <div className="border-2 border-black px-3 py-2">
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-black" />
              <div className="w-4 h-0.5 bg-black" />
              <div className="w-4 h-0.5 bg-black" />
            </div>
          </div>
        ) : (
          <>
            {/* Nav items - connected boxes style */}
            <div className="flex-1 flex justify-center">
              <div className="flex border-2 border-black border-l-0">
                {["Inicio", "Sobre Mí", "Proyectos", "Skills", "Contacto"].map((item, index) => (
                  <div 
                    key={item} 
                    className={`px-4 py-2 text-xs tracking-widest uppercase cursor-pointer hover:bg-gray-100 ${
                      index > 0 ? "border-l-2 border-black" : ""
                    } ${index === 0 ? "bg-gray-100 font-bold" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="border-2 border-black px-3 py-2 bg-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-black bg-gray-400" />
                <span className="text-xs tracking-widest uppercase">Disponible</span>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
