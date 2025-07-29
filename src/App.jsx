import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TheHeader from "./components/TheHeader";
import Quem_Somos from "./components/Quem_Somos";
import Nossos_Servicos from "./components/Nossos_Servicos";
import Como_Funciona from "./components/como_funciona";
import ContactForm from "./components/Contact";
import TheFooter from "./components/TheFooter";
import Nosso_Portifolio from "./components/Nosso_Portifolio"; // Adicione esta linha
import { Slides_sites } from "./data/slides"; // Adicione esta linha

// Crie e importe as páginas de serviços
import ServicoSites from "./pages/ServicoSites";
import ServicoSoftware from "./pages/ServicoSoftware";
import ServicoConsultoria from "./pages/ServicoConsultoria";

function App() {
  return (
    <div className="flex flex-col flex-nowrap">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TheHeader />
              <Quem_Somos />
              <Nossos_Servicos />
              {/* Descomente as linhas abaixo para exibir o portfólio */}
              <Nosso_Portifolio TipoPortifolio="Desenvolvimento de Sites" slides={Slides_sites}/>
              <Como_Funciona />
              <ContactForm />
            </>
          }
        />
        {/* Adicione as rotas para cada serviço */}
        <Route path="/servicos/sites" element={<ServicoSites />} />
        <Route path="/servicos/software" element={<ServicoSoftware />} />
        <Route path="/servicos/consultoria" element={<ServicoConsultoria />} />
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;