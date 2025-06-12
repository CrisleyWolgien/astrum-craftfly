import { useEffect, useRef, useState } from "react";
import logo from "../assets/astrum_craftfly_sem_fundo.png";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [menuAberto, setmenuAberto] = useState(false);
  const menuRef = useRef(null);

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
  return (
    <>
      <nav className="fixed top-0 z-50 w-full  bg-background_nav_dark/80 backdrop-blur-md shadow-lg shadow-Secoes_alternadas/50">
        <div className=" mx-auto flex items-center justify-between  h-20 px-5">
         <a href="#"> <img src={logo} alt="logo astrum" className="w-[152px] h-[68px]" /></a>
          <div className="hidden md:flex gap-6 text-white">
            <a
              className=" hover:text-laranja_hover transition duration-100 "
              href="#Quem_Somos"
            >
              Quem Somos
            </a>
            <a className=" hover:text-laranja_hover" href="#Nossos_Servicos">
              Nossos Servicos
            </a>
            <a className=" hover:text-laranja_hover" href="#Nosso_Portifolio">
              Nosso Portifolio
            </a>
            <a className=" hover:text-laranja_hover" href="#Como_Funciona">
              Como Funciona
            </a>
            <a className=" hover:text-laranja_hover" href="#contactform">
              Contato
            </a>
          </div>
          <div ref={menuRef} className=" md:hidden">
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
                className="size-8 text-laranja_button group-hover:text-laranja_hover"
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
                className="size-8 text-laranja_button group-hover:text-laranja_hover"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          {/* menu mobile */}
          <AnimatePresence>
            {menuAberto && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 left-0 w-full bg-background_nav_dark/90 flex flex-col items-center gap-4 py-4 text-white md:hidden"
              >
                <a
                  className=" hover:text-laranja_hover transition duration-100 "
                  href="#Quem_Somos"
                >
                  Quem Somos
                </a>
                <a
                  className=" hover:text-laranja_hover"
                  href="#Nossos_Servicos"
                >
                  Nossos Servicos 
                </a>
                <a
                  className=" hover:text-laranja_hover"
                  href="#Nosso_Portifolio"
                >
                  Nosso Portifolio
                </a>
                <a className=" hover:text-laranja_hover" href="#Como_Funciona">
                  Como Funciona
                </a>
                <a className=" hover:text-laranja_hover" href="#contactform">
                  Contato
                </a>
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
