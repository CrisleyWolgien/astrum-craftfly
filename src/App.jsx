import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import TheHeader from "./components/TheHeader";
import Nossos_Servicos from "./components/Nossos_Servicos";
import Nosso_Portifolio from "./components/Nosso_Portifolio";
import {Slides_sites} from "./data/slides"
import TheFooter from "./components/TheFooter";
import Quem_Somos from "./components/Quem_Somos";
import ContactForm from "./components/Contact";
import Como_Funciona from "./components/como_funciona";

import { motion } from "framer-motion";

function App() {
  
  return (
    <>
      <div className="flex flex-col flex-nowrap">
        <Navbar />
        <TheHeader />
        <Quem_Somos/>
        <Nossos_Servicos />
        <Nosso_Portifolio TipoPortifolio="Desenvolvimento de Sites" slides={Slides_sites}/>
        <Nosso_Portifolio TipoPortifolio="Desenvolvimento de Software" slides={Slides_sites}/>
        {/* <Nosso_Portifolio TipoPortifolio="Desenvolvimento de Marketing" slides={Slides_sites}/> */}
        <Como_Funciona/>
        <ContactForm/>

        <TheFooter/>
      </div>
    </>
  );
}

export default App;
