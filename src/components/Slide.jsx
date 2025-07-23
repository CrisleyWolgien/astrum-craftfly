import { Link } from 'react-router-dom';

function Slide({
  SrcImg,
  AltImg,
  TitleSlide,
  TextSlide,
  TextButtonSlide,
  LinkButton, // Nova prop
  Add_Style_Img,
  Add_Style_Slide,
  Add_Style_TextSlide,
}) {
  return (
    <div
      className={`transition-transform hover:scale-105 shadow-md flex flex-col text-center items-center bg-Secoes_alternadas rounded-2xl ${Add_Style_Slide}`}
    >
      <img
        src={SrcImg}
        alt={AltImg}
        draggable="false"
        className={`no-drag w-full ${Add_Style_Img}`}
      />
      <h2 className="text-white text-xl font-semibold m-0.5 mb-2">
        {TitleSlide}
      </h2>
      <p className={`text-white/80 text-sm m-0.5 mb-5 break-words ${Add_Style_TextSlide}`}>
        {TextSlide}
      </p>

      {TextButtonSlide && LinkButton && (
        <Link to={LinkButton}>
          <button className="bg-laranja_button hover:bg-laranja_hover p-2 px-5 mb-4 rounded-xl">
            {TextButtonSlide}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Slide;