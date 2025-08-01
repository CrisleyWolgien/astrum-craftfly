import Gerenciador_de_gastos from "../assets/dashboard.png";
import advogado from "../assets/advogado.png";
import clinica from "../assets/clinica.png";
import mecanica from "../assets/mecanica.png";
import concessionaria from "../assets/concessionaria.png";

// Estilos padrão para os slides, evitando repetição de código
const slideStyle = "min-w-[250px] max-w-[250px] sm:min-w-[300px] sm:max-w-[300px] md:min-w-[350px] md:max-w-[350px] mx-2 p-2";
const imgStyle = "p-3 rounded-2xl no-drag";
const textSlideStyle = "break-words whitespace-pre-line";

export const Slides_sites = [
  {
    SrcImg: Gerenciador_de_gastos,
    AltImg: "Gerenciador de Gastos",
    TitleSlide: "Gerenciador de Gastos",
    TextSlide:
      "Aplicação web para controle financeiro pessoal. Permite ao usuário adicionar, visualizar e excluir receitas e despesas, com gráficos intuitivos para acompanhar o saldo e categorias. Ideal para quem quer organizar suas finanças de forma simples e eficiente.\n\n🔐 Acesso de demonstração:\nUsuário: user@example.com\nSenha: string",
    TextButtonSlide: "Ver Projeto",
    LinkButton: "https://gerenciador-de-gastos-ten.vercel.app/dashboard",
    Add_Style_Img: imgStyle,
    Add_Style_Slide: slideStyle,
    Add_Style_TextSlide: textSlideStyle,
  },
  {
    SrcImg: advogado,
    AltImg: "Landing Page Advogado",
    TitleSlide: "Landing Page - Advogado",
    TextSlide:
      "Página criada para destacar os serviços de um advogado especialista. Design elegante e direto, com foco em conversão de contatos via formulário e WhatsApp.\nIdeal para profissionais autônomos que querem aumentar sua presença digital.",
    TextButtonSlide: "Ver Projeto",
    LinkButton: "https://landpage-advogado.vercel.app/",
    Add_Style_Img: imgStyle,
    Add_Style_Slide: slideStyle,
    Add_Style_TextSlide: textSlideStyle,
  },
  {
    SrcImg: clinica,
    AltImg: "Landing Page Clínica",
    TitleSlide: "Landing Page - Clínica",
    TextSlide:
      "Site desenvolvido para clínicas e consultórios que desejam divulgar seus serviços de forma moderna e funcional. Com agendamento simples, informações sobre a equipe e estrutura da clínica.",
    TextButtonSlide: "Ver Projeto",
    LinkButton: "https://porta-curar-online.vercel.app/",
    Add_Style_Img: imgStyle,
    Add_Style_Slide: slideStyle,
    Add_Style_TextSlide: textSlideStyle,
  },
  {
    SrcImg: mecanica,
    AltImg: "Landing Page Mecânica",
    TitleSlide: "Landing Page - Mecânica",
    TextSlide:
      "Página pensada para oficinas mecânicas que querem profissionalizar sua presença online. Traz informações de serviços, horário de funcionamento, localização e botão de contato direto com WhatsApp.",
    TextButtonSlide: "Ver Projeto",
    LinkButton: "https://landpage-mecanica.vercel.app/",
    Add_Style_Img: imgStyle,
    Add_Style_Slide: slideStyle,
    Add_Style_TextSlide: textSlideStyle,
  },
  {
    SrcImg: concessionaria,
    AltImg: "Landing Page Concessionária", 
    TitleSlide: "Landing Page - Concessionária", 
    TextSlide:
      "Design criado para concessionárias de veículos. Layout moderno, com foco em usabilidade e acesso rápido ao catálogo de carros e informações de contato.", // Corrigido
    TextButtonSlide: "Ver Projeto",
    LinkButton: "https://carro-perfeito-landpage.vercel.app/",
    Add_Style_Img: imgStyle,
    Add_Style_Slide: slideStyle,
    Add_Style_TextSlide: textSlideStyle,
  },
];