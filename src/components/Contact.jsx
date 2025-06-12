import React, { useEffect } from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgbjjbw");

  useEffect(() => {
    if (state.succeeded) {
      alert("Mensagem enviada com sucesso!");
    }
  }, [state.succeeded]);

  const renderField = ({ id, label, type, required }) => (
    <div key={id} className="flex flex-col">
      <label htmlFor={id} className="text-white mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        required={required}
        className="px-4 py-2 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f26a1e]"
      />
    </div>
  );

  return (
    <div className="bg-Secoes_alternadas flex flex-col items-center py-12 px-4" id="contactform">
      <h2 className="text-laranja_texto font-DM_serif text-4xl mb-8 text-center">
        Contato
      </h2>

      <div className="w-full max-w-3xl">
        <div className="bg-background_dark/20 text-white p-8 rounded-xl shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#0f0f0f] p-8 rounded-xl"
          >
            <h2 className="text-2xl text-white font-semibold">
              Fale com a gente
            </h2>

            {[
              { id: "name", label: "Nome", type: "text", required: true },
              { id: "email", label: "Email", type: "email", required: true },
              { id: "phone", label: "Telefone", type: "tel" },
              { id: "company", label: "Empresa", type: "text" },
              { id: "subject", label: "Assunto", type: "text" },
            ].map(renderField)}

            <div className="flex flex-col">
              <label htmlFor="message" className="text-white mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="px-4 py-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f26a1e]"
              />
            </div>

            {state.errors?.length > 0 && (
              <div className="text-red-500 text-sm">
                <p>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#f26a1e] hover:bg-[#d5571c] transition-colors text-white py-3 rounded font-semibold"
            >
              {state.submitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-3 bg-laranja_button hover:bg-laranja_hover text-white px-6 py-3 rounded-full font-medium transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6"
              >
                <path
                  fill="#25d366"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
              <a
                href="https://wa.me/5555999467131?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
