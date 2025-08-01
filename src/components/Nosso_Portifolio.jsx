import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";

function Nosso_Portifolio({ TipoPortifolio, slides }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        
        const newWidth = scrollWidth - offsetWidth;
        setWidth(newWidth > 0 ? newWidth : 0);
      }
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    if (carousel.current) {
      resizeObserver.observe(carousel.current);
    }

    updateWidth();

    return () => {
      if (carousel.current) {
        resizeObserver.unobserve(carousel.current);
      }
    };
  }, [slides]);

  return (
    <article className="w-full my-5 mt-10" id="Nosso_Portifolio">
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
          className="mt-7 sm:max-w-[85%] lg:max-w-[95%] rounded-2xl mx-auto overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={carousel}
            className="flex items-stretch gap-4 py-2"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {slides.map((slide, idx) => (
              <Slide
                key={idx}
                SrcImg={slide.SrcImg}
                AltImg={slide.AltImg}
                TitleSlide={slide.TitleSlide}
                TextSlide={slide.TextSlide}
                TextButtonSlide={slide.TextButtonSlide}
                LinkButton={slide.LinkButton}
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