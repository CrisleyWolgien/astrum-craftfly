import { useEffect, useRef, useState } from "react";
import logo from "../assets/astrum_craftfly_sem_fundo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Importe o Link e o useLocation

function Navbar() {
  const [menuAberto, setmenuAberto] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Hook para saber a página atual

  useEffect(() => {
    // Fecha o menu ao clicar em um link
    if (menuAberto) {
      setmenuAberto(false);
    }
  }, [location]); // O efeito roda toda vez que a URL muda

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setmenuAberto(false);
      }
    }

    if (menuAberto) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAberto]);

  // Função para lidar com o clique nos links de navegação
  const handleNavClick = (hash) => {
    // Se já estamos na página inicial, apenas role
    if (location.pathname === "/") {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Se estivermos em outra página, o Link cuidará da navegação
    setmenuAberto(false);
  };

  const navLinks = [
    { to: "/#Quem_Somos", text: "Quem Somos" },
    { to: "/#Nossos_Servicos", text: "Nossos Serviços" },
    { to: "/#Nosso_Portifolio", text: "Nosso Portfólio" },
    { to: "/#Como_Funciona", text: "Como Funciona" },
    { to: "/#contactform", text: "Contato" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-background_nav_dark/80 backdrop-blur-md shadow-lg shadow-Secoes_alternadas/50">
        <div className="mx-auto flex items-center justify-between h-20 px-5">
          {/* O logo agora é um Link para a raiz do site */}
          <Link to="/">
            <img src={logo} alt="logo astrum" className="w-[152px] h-[68px]" />
          </Link>

          {/* Links do Desktop */}
          <div className="hidden md:flex gap-6 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-laranja_hover transition duration-100"
                onClick={() => handleNavClick(link.to.split("/")[1])}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Menu Mobile */}
          <div ref={menuRef} className="md:hidden">
            <button
              className="md:hidden"
              onClick={() => setmenuAberto(!menuAberto)}
            >
              {menuAberto ? (
                // Ícone de X
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 text-laranja_button"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícone de hambúrguer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 text-laranja_button"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            <AnimatePresence>
              {menuAberto && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-20 left-0 w-full bg-background_nav_dark/90 flex flex-col items-center gap-4 py-4 text-white md:hidden"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="hover:text-laranja_hover transition duration-100"
                      onClick={() => handleNavClick(link.to.split("/")[1])}
                    >
                      {link.text}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;