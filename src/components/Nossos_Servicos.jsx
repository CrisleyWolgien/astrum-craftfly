import Slide from "./Slide";
import servico_consultoria from "../assets/servico_consultoria.png";
import servico_design from "../assets/servico_design.png";
import servico_marketing from "../assets/servico_marketing.png";
import servico_site from "../assets/servico_site.png";
import servico_software from "../assets/servico_software.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Nossos_Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px", // antecipa o gatilho em 100px acima
    once: true,
  });

  return (
    <>
      <article className="w-full mt-5 lg:mt-20 pt-24 " id="Nossos_Servicos">
        <section className="w-full pb-5 px-6">
          <div className="mb_8">
            {/* <!-- título --> */}
            <h2 className="text-laranja_texto font-DM_serif text-3xl">
              Nossos Serviços
            </h2>
          </div>

          {/* container nossos serviços */}
          <motion.div
            ref={ref}
            id="servicos_container"
            className="mt-7 flex gap-3 flex-wrap w-full text-center justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* slide 1  */}
            <Slide
              SrcImg={servico_site}
              AltImg="IMG exemplo de servico_site"
              TitleSlide="Criação de Sites"
              TextSlide="Sites modernos, responsivos e otimizados para SEO feitos sob
              medida para sua empresa"
              TextButtonSlide="Saiba Mais"
              Add_Style_Slide="lg:w-[18%] justify-between"
            />
            {/* fim slide 1 */}
            {/* slide 2 */}
            <Slide
              SrcImg={servico_software}
              AltImg="IMG exemplo de Desenvolvimento de Sistemas e Softwares"
              TitleSlide="Desenvolvimento de Sistemas e Softwares"
              TextSlide="Soluções personalizadas para automatizar processos, escalar seu negócio e ganhar tempo."
              TextButtonSlide="Saiba Mais"
              Add_Style_Slide="lg:w-[18%] justify-between"
            />
            {/* fim slide 2 */}

          
            {/* slide 5 */}
            <Slide
              SrcImg={servico_consultoria}
              AltImg="IMG exemplo de Consultoria Digital"
              TitleSlide="Consultoria Digital"
              TextSlide="Não sabe por onde começar? Ajudamos a definir as melhores estratégias e ferramentas para o seu negócio."
              TextButtonSlide="Saiba Mais"
              Add_Style_Slide="lg:w-[18%] justify-between"
            />
            {/* fim slide 5 */}
          </motion.div>
        </section>
      </article>
    </>
  );
}

export default Nossos_Servicos;
