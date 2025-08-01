import { Link } from 'react-router-dom';

function Slide({
  SrcImg,
  AltImg,
  TitleSlide,
  TextSlide,
  TextButtonSlide,
  LinkButton,
  Add_Style_Img,
  Add_Style_Slide,
  Add_Style_TextSlide,
}) {
  return (
    <div
      // A classe principal já é um flex container vertical
      className={`transition-transform hover:scale-105 shadow-md flex flex-col text-center bg-Secoes_alternadas rounded-2xl ${Add_Style_Slide}`}
    >
      {/* Imagem no topo */}
      <img
        src={SrcImg}
        alt={AltImg}
        draggable="false"
        className={`no-drag w-full ${Add_Style_Img}`}
      />
      
      {/* Esta div agrupa o título e o texto, e irá crescer */}
      <div className="flex-grow flex flex-col justify-start p-4">
        <h2 className="text-white text-xl font-semibold mb-2">
          {TitleSlide}
        </h2>
        <p className={`text-white/80 text-sm break-words ${Add_Style_TextSlide}`}>
          {TextSlide}
        </p>
      </div>

      {/* Este container para o botão usa 'mt-auto' para ser empurrado para o final */}
      <div className="p-4 pt-0">
        {TextButtonSlide && LinkButton && (
          <Link to={LinkButton} className="mt-auto">
            <button className="bg-laranja_button hover:bg-laranja_hover p-2 px-5 rounded-xl">
              {TextButtonSlide}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Slide;