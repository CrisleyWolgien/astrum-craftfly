import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const passos = [
  {
    id: 1,
    titulo: "Contato Inicial",
    descricao: "Você entra em contato para entender suas necessidades.",
    icone: "📞",
  },
  {
    id: 2,
    titulo: "Proposta Personalizada",
    descricao: "Montamos uma proposta feita sob medida para seu negócio.",
    icone: "📄",
  },
  {
    id: 3,
    titulo: "Desenvolvimento",
    descricao:
      "Começamos o desenvolvimento com acompanhamento e transparência.",
    icone: "💻",
  },
  {
    id: 4,
    titulo: "Entrega e Suporte",
    descricao: "Entregamos o projeto e oferecemos suporte contínuo.",
    icone: "🚀",
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile pela largura da janela
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // roda na montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Atualiza o width de drag constraints após montagem e mudanças
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      // subtrai um pouco para compensar margens e arredondamentos
      setWidth(scrollWidth - offsetWidth - 12);
    }
  }, [isMobile, passos.length]); // roda quando muda mobile ou número de cards

  return (
    <section ref={ref} className="max-w-6xl mx-auto p-6 my-12 " id="Como_Funciona">
      <h2 className="text-3xl font-DM_serif text-laranja_texto mb-10 text-center">
        Como Funciona
      </h2>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        drag={false} // tira o drag pois não vai precisar mais
        className="flex flex-col space-y-6 overflow-visible scrollbar-thin scrollbar-thumb-laranja_texto scrollbar-track-gray-100 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-y-0 md:gap-6"
        style={{ cursor: "default" }}
      >
        {passos.map((passo) => (
          <div
            key={passo.id}
            className="bg-Secoes_alternadas rounded-lg shadow-md p-6 w-full cursor-default select-none"
          >
            <div className="text-5xl mb-4">{passo.icone}</div>
            <h3 className="text-xl text-white font-semibold mb-2">{passo.titulo}</h3>
            <p className="text-white text-sm">{passo.descricao}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
