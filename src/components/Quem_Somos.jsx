import { motion } from "framer-motion";

function Quem_Somos() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        id="Quem_Somos"
        className="pt-18"
      >
        <div className=" lg:h-96 flex flex-col lg:grid lg:grid-cols-2 text-center items-center py-10 my-5 bg-Secoes_alternadas/35 shadow-lg shadow-Secoes_alternadas/50 ">
          <div>
            <h1 className="text-laranja_texto italic font-DM_serif text-7xl">
              Quem <br /> Somos?
            </h1>
          </div>
          <div className="text-white m-5 lg:mr-10 text-center lg:text-[22px] text-[18px]">
            <p>
              Somos uma empresa jovem e apaixonada por tecnologia, especializada
              em marketing digital e desenvolvimento de software. Ajudamos
              negócios a se destacarem no mundo digital com soluções
              inteligentes, escaláveis e personalizadas.
              <br />
              <br />
              Na{" "}
              <span className="text-[#4131e9] font-semibold">
                Astrum Craftfly
              </span>
              , unir criatividade com código é mais que trabalho — é missão.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Quem_Somos;
