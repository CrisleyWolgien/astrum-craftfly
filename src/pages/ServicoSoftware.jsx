import servico_software from "../assets/servico_software.png";
import { Link } from "react-router-dom";

function ServicoSoftware() {
  return (
    <div className="bg-background_dark text-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Principal */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-DM_serif italic text-laranja_texto">
            Desenvolvimento de Software Sob Medida
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Criamos sistemas personalizados para automatizar processos, integrar setores e acelerar os resultados da sua empresa.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Ideal para <span className="text-white font-semibold">empresas que precisam sair do Excel, eliminar retrabalho ou integrar ferramentas desconectadas.</span>
          </p>
        </div>

       
        {/* Imagem e Benefícios */}
        <div className="my-12 flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <img
              src={servico_software}
              alt="Desenvolvimento de Software"
              className="rounded-lg shadow-lg shadow-Secoes_alternadas/50"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-laranja_hover">
              Tecnologia que Impulsiona o seu Crescimento
            </h2>
            <p className="text-gray-300">
              Softwares prontos nem sempre atendem às necessidades do seu negócio. Nós criamos soluções sob medida que eliminam gargalos, reduzem custos e aumentam a produtividade.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Automação de Tarefas:
                </span>{" "}
                Reduza custos e ganhe tempo eliminando atividades manuais e repetitivas.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Sistemas Escaláveis:
                </span>{" "}
                Desenvolvemos soluções preparadas para crescer junto com a sua operação.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Integração Inteligente:
                </span>{" "}
                Centralize dados e conecte diferentes ferramentas em uma única plataforma.
              </li>
            </ul>
            <p className="mt-4 text-gray-400 italic">
              Projetos a partir de R$ 990 — com acompanhamento técnico do início à entrega.
            </p>
          </div>
        </div>

         {/* Nova seção: Tipos de Serviço + Orçamento + Processo */}
        <div className="bg-Secoes_alternadas/35 rounded-lg p-8 my-12 max-w-4xl mx-auto text-gray-300">
          <h2 className="text-3xl font-bold text-laranja_texto mb-6 text-center">
            Como Funciona e O Que Oferecemos
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white">🛠 Tipos de Serviço</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Sistemas personalizados para automação de processos</li>
              <li>Integração de ferramentas e APIs</li>
              <li>Dashboards e relatórios sob medida</li>
              <li>Ferramentas para eliminar retrabalho manual</li>
              <li>Manutenção e suporte técnico contínuo</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white">💰 Orçamento</h3>
            <p>
              O orçamento é <span className="font-semibold">gratuito e sem compromisso</span>. Após entender sua necessidade, enviamos a proposta personalizada em até 24 horas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">📆 Processo de Trabalho</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Briefing detalhado para mapear suas necessidades.</li>
              <li>Prototipação e validação das funcionalidades.</li>
              <li>Desenvolvimento ágil com entregas parciais.</li>
              <li>Testes e ajustes conforme seu feedback.</li>
              <li>Entrega final e suporte pós-implantação.</li>
            </ol>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center bg-Secoes_alternadas/35 p-10 rounded-lg shadow-lg shadow-Secoes_alternadas/50">
          <h2 className="text-3xl font-bold text-white">
            Tem uma ideia ou processo que precisa ser automatizado?
          </h2>
          <p className="mt-2 text-gray-300">
            Fale com a gente e receba uma análise gratuita e uma proposta sob medida em até 24h.
          </p>
          <Link to="/#contactform">
            <button className="mt-6 bg-laranja_button hover:bg-laranja_hover text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Solicitar Proposta Personalizada
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicoSoftware;
