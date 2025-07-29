import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";

function Nosso_Portifolio({ TipoPortifolio, slides, extraSpace = 50 }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (!carousel.current) return;

      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;

      const diff = scrollWidth - offsetWidth + extraSpace;
      setWidth(diff > 0 ? diff : 0);
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [extraSpace]);

  return (
    <article className="w-full my-5 mt-10 " id="Nosso_Portifolio">
      <section className="w-full pb-5 px-6">
        <div className="mb_8">
          <h3 className="text-laranja_hover font-DM_serif italic opacity-80 text-xl mb-2 ml-2">
            {TipoPortifolio}
          </h3>
          <h2 className="text-laranja_texto font-DM_serif text-3xl font-normal">
            Nosso Portfólio
          </h2>
        </div>

        <motion.div
          ref={carousel}
          className="mt-7 sm:max-w-[85%] lg:max-w-[95%] rounded-2xl mx-auto pb-3 overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={`flex gap-4 py-2 ${
              width === 0 ? "justify-center" : "justify-start"
            }`}
            dragConstraints={{ right: 0, left: width ? -width : 0 }}
            drag={width > 0 ? "x" : false}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {slides.map((slide, idx) => (
              <Slide
                key={idx}
                SrcImg={slide.SrcImg}
                AltImg={slide.AltImg}
                TitleSlide={slide.TitleSlide}
                TextSlide={slide.TextSlide}
                TextButtonSlide={slide.TextButtonSlide} // Adicione isso
                LinkButton={slide.LinkButton} // E isso
                Add_Style_Img={slide.Add_Style_Img}
                Add_Style_Slide={slide.Add_Style_Slide}
                Add_Style_TextSlide={slide.Add_Style_TextSlide}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </article>
  );
}

export default Nosso_Portifolio;
