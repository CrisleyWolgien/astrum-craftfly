import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slide from "./Slide";

function Nosso_Portifolio({ TipoPortifolio, slides }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Função para atualizar a largura máxima de arrasto
    const updateWidth = () => {
      if (carousel.current) {
        // O cálculo correto é a largura total do conteúdo rolável
        // menos a largura visível do contêiner.
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        
        const newWidth = scrollWidth - offsetWidth;
        setWidth(newWidth > 0 ? newWidth : 0);
      }
    };

    // Um pequeno delay para garantir que as imagens carregaram e o scrollWidth é preciso.
    // O ideal seria usar um evento de `onLoad` nas imagens, mas um timeout resolve na maioria dos casos.
    const timer = setTimeout(updateWidth, 100);

    // Adiciona o listener para redimensionar a janela
    window.addEventListener("resize", updateWidth);

    // Função de limpeza para remover o listener e o timeout
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidth);
    };
  }, [slides]); // A dependência `slides` garante que o cálculo seja refeito se os slides mudarem

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
          ref={carousel}
          className="mt-7 sm:max-w-[85%] lg:max-w-[95%] rounded-2xl mx-auto overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={`flex items-stretch gap-4 py-2 ${
              width <= 0 ? "justify-center" : "justify-start"
            }`}
            // A restrição de "arraste" para a esquerda é o valor negativo da largura calculada
            dragConstraints={{ right: 0, left: -width }}
            drag={width > 0 ? "x" : false} // Só permite o arrasto se houver conteúdo transbordando
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