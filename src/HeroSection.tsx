import heroImg from '../../assets/hero-taller-dels-sentits.jpg'

const HeroSection = () => {
  return (
    <>
      {/* Banner azul */}
      <section className="bg-[#7B8BC7] py-4 pt-20">
        <div className="text-center">
          <h2 className="text-white text-lg font-light tracking-wide">
            Centre d'artteràpia i expressió plàstica
          </h2>
        </div>
      </section>

      {/* Hero principal */}
      <section className="bg-[#F8F6F3] py-20 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Imagen circular a la izquierda */}
          <div className="flex-shrink-0">
            <img
              className="w-80 h-80 object-cover rounded-full shadow-lg"
              src={heroImg}
              alt="Taller dels Sentits - Artteràpia" 
            />
          </div>

          {/* Contenido de texto a la derecha */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#7B8BC7] text-sm font-medium mb-2 tracking-wide">
              Viatja al teu interior
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
              CREATIVITAT I EXPRESSIÓ
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              L'art ens posa en moviment.<br />
              Al Taller dels Sentits volem donar-te les eines necessàries per ajudar-te a sentir la teva experiència a través de l'art.
            </p>
          </div>
        </div>
      </section>
    </>
  )
};

export default HeroSection;