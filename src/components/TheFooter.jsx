import logo from "../assets/astrum_craftfly_sem_fundo.png";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa"; // opcional

function TheFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-3 gap-10">

        {/* LOGO + SLOGAN */}
        <div>
          <img className="w-32 mb-4" src={logo} alt="Astrum Craftfly logo" />
          <h3 className="text-laranja_texto text-[16px] font-DM_serif italic">
            Criatividade que entrega. Tecnologia que transforma.
          </h3>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Navegação</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-laranja_texto cursor-pointer"><a href="#">Home</a></li>
            <li className="hover:text-laranja_texto cursor-pointer">Nossos Serviços</li>
            <li className="hover:text-laranja_texto cursor-pointer">Portfólio</li>
            <li className="hover:text-laranja_texto cursor-pointer">Contato</li>
          </ul>
        </div>

        {/* CONTATO + REDES */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contato</h4>
          <div className="flex flex-col gap-2 text-sm">
            <button className="flex items-center gap-2 hover:text-laranja_texto">
              <FaWhatsapp /> WhatsApp
            </button>
            <button className="flex items-center gap-2 hover:text-laranja_texto">
              <FaEnvelope /> Email
            </button>
            <a className="flex items-center gap-2 hover:text-laranja_texto">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-zinc-800 pt-4 text-sm text-center text-zinc-500">
        © 2025 Astrum Craftfly. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default TheFooter;
