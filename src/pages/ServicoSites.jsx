import servico_site from "../assets/servico_site.png";
import { Link } from "react-router-dom";

function ServicoSites() {
  const processo = [
    {
      titulo: "1. Briefing e Planejamento",
      descricao:
        "Entendemos seus objetivos, público-alvo e requisitos para traçar a melhor estratégia para o seu site.",
    },
    {
      titulo: "2. Design e Layout (UX/UI)",
      descricao:
        "Criamos um design moderno e intuitivo, focado na experiência do usuário, para encantar seus visitantes.",
    },
    {
      titulo: "3. Desenvolvimento e Codificação",
      descricao:
        "Usando as tecnologias mais modernas, transformamos o design em um site rápido, seguro e responsivo.",
    },
    {
      titulo: "4. Lançamento e Suporte",
      descricao:
        "Colocamos o site no ar e oferecemos suporte para garantir que tudo funcione perfeitamente.",
    },
  ];

  return (
    <div className="bg-background_dark text-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Principal */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-DM_serif italic text-laranja_texto">
            Criação de Sites Profissionais
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Desenvolvemos sites modernos, rápidos e otimizados, pensados para transformar visitantes em clientes e fazer seu negócio se destacar online.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Ideal para <span className="text-white font-semibold">pequenos negócios, profissionais autônomos e empresas locais</span> que desejam conquistar mais clientes pela internet.
          </p>
        </div>

       
        {/* Imagem e Benefícios */}
        <div className="my-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img
              src={servico_site}
              alt="Criação de Sites"
              className="rounded-lg shadow-lg shadow-Secoes_alternadas/50"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-laranja_hover">
              Um Site é a Vitrine do Seu Negócio no Mundo Digital
            </h2>
            <p className="text-gray-300">
              Seja para fortalecer sua marca, alcançar mais clientes ou vender
              seus produtos, um site profissional é a ferramenta essencial para
              o sucesso.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Design Responsivo:
                </span>{" "}
                Perfeito em qualquer dispositivo, do celular ao computador.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Otimizado para SEO:
                </span>{" "}
                Ajudamos seu site a ser encontrado no Google.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Carregamento Rápido:
                </span>{" "}
                Ninguém gosta de esperar. Sites rápidos melhoram a experiência
                e o ranking.
              </li>
            </ul>
            <p className="mt-4 text-gray-400 italic">
              Desenvolvemos soluções a partir de R$ 490, com entrega rápida e suporte garantido.
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
              <li>Site Institucional</li>
              <li>Landing Pages para campanhas</li>
              <li>Sites responsivos para celulares e desktops</li>
              <li>Manutenção e atualização de sites</li>
              <li>Otimização para SEO</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-white">💰 Orçamento</h3>
            <p>
              O orçamento é <span className="font-semibold">gratuito e sem compromisso</span>. Você nos conta o que precisa, analisamos e enviamos a proposta personalizada em até 24 horas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">📆 Processo de Trabalho</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Briefing e Planejamento – Entendimento do seu negócio e objetivos.</li>
              <li>Protótipo e Design – Criamos o visual e a experiência do site.</li>
              <li>Desenvolvimento – Codificamos o site com foco em performance.</li>
              <li>Revisão e Entrega – Validamos com você e lançamos o site ao vivo.</li>
              <li>Suporte pós-lançamento – Acompanhamos para garantir o perfeito funcionamento.</li>
            </ol>
          </div>
        </div>


      
        {/* Call to Action */}
        <div className="text-center bg-Secoes_alternadas/35 p-10 rounded-lg shadow-lg shadow-Secoes_alternadas/50">
          <h2 className="text-3xl font-bold text-white">
            Quer um site profissional que realmente gere resultados?
          </h2>
          <p className="mt-2 text-gray-300">
            Fale agora mesmo com a gente e receba uma proposta sob medida em até 24h.
          </p>
          <Link to="/#contactform">
            <button className="mt-6 bg-laranja_button hover:bg-laranja_hover text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Quero Receber uma Proposta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicoSites;
