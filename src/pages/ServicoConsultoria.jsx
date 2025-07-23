import servico_consultoria from "../assets/servico_consultoria.png";
import { Link } from "react-router-dom";

function ServicoConsultoria() {
  return (
    <div className="bg-background_dark text-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-DM_serif italic text-laranja_texto">
            Estratégia Digital que Gera Resultados Reais
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Dê o primeiro passo com quem entende de estratégia digital. Nós mapeamos o caminho do seu sucesso — com clareza, foco e ação.
          </p>
        </div>

        {/* Imagem + Conteúdo */}
        <div className="my-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img
              src={servico_consultoria}
              alt="Consultoria Digital"
              className="rounded-lg shadow-lg shadow-Secoes_alternadas/50"
            />
          </div>

          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-laranja_hover">
              Tenha Clareza, Direção e um Plano que Funciona
            </h2>
            <p className="text-gray-300">
              Cansado de tentar estratégias aleatórias? Nossa consultoria entrega um plano sob medida para o seu negócio prosperar no digital.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">📌 Diagnóstico Completo</h3>
                <p className="text-gray-300">
                  Avaliamos sua presença digital e identificamos exatamente onde estão as falhas e oportunidades de crescimento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">🎯 Planejamento Estratégico</h3>
                <p className="text-gray-300">
                  Criamos um roadmap com metas claras, priorizando ações que realmente movem o ponteiro do seu negócio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">🛠️ Ferramentas e Tecnologia</h3>
                <p className="text-gray-300">
                  Indicamos as ferramentas ideais para otimizar processos, economizar tempo e escalar resultados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-Secoes_alternadas/35 p-10 rounded-lg shadow-lg shadow-Secoes_alternadas/50">
          <h2 className="text-3xl font-bold text-white">
            Pronto para virar o jogo?
          </h2>
          <p className="mt-2 text-gray-300">
            Agende uma conversa gratuita com nosso time e veja como podemos transformar seu negócio com estratégia e tecnologia.
          </p>
          <Link to="/#contactform">
            <button className="mt-6 bg-laranja_button hover:bg-laranja_hover text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Quero Crescer no Digital
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicoConsultoria;
