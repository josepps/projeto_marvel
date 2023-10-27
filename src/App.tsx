import image1 from "../public/Img/img1.jpg"
import image2 from "../public/Img/img2.jpg"
import image3 from "../public/Img/img3.jpg"
import image4 from "../public/Img/img4.jpg"
import image5 from "../public/Img/img5.jpg"
import { AiOutlineSearch } from 'react-icons/ai';

import { BannerHome, SectionCriadoresQuadrinhos, SectionPersonagensPorQuadrinhos } from "./App.Style";
import { useEffect, useState } from 'react';

function App() {
const [selectedSlide, setSelectedSlide] = useState("slide1");


useEffect(() => {
  const interval = setInterval(() => {
    switch (selectedSlide) {
      case "slide1":
        setSelectedSlide("slide2");
        break;
      case "slide2":
        setSelectedSlide("slide3");
        break;
      case "slide3":
        setSelectedSlide("slide4");
        break;
      case "slide4":
        setSelectedSlide("slide5");
        break;
      case "slide5":
        setSelectedSlide("slide1");
        break;
      default:
        break;
    }
  }, 2000);

  return () => clearInterval(interval);
}, [selectedSlide]);

const handleSlideChange = (event: { target: { id: React.SetStateAction<string>; }; }) => {
  setSelectedSlide(event.target.id);
};

  return (
    <>
      <BannerHome>
        <header>
          <a className="logo" href="#">marvel</a>
          <nav>
            <ul>
              <li><a href="">Store</a></li>
              <li><a href="">Comunidade</a></li>
              <li><a href="">Sobre</a></li>
              <li><a href="">Categorias</a></li>
            </ul>
          </nav>
          <div className="inputPesquisa">
            <input type="text" placeholder="Pesquisa" required/>
            <button><AiOutlineSearch /></button>
          </div>
        </header>
        <main>
          <div className="containerDescricaoMain">
            <h1>Nome Personagem</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptates dignissimos illum, reprehenderit ullam nesciunt in. Cumque accusantium, quam ullam nam dolores beatae debitis qui, eveniet iste impedit, eaque fugit atque corporis aliquam fuga explicabo exercitationem blanditiis? Dicta, incidunt quos sit modi aspernatur ab itaque tenetur dolorum, rerum ducimus porro!</p>
            <a href="#">Mais Info</a>
          </div>

          <div className="slides">
                <input 
                    type="radio" 
                    name="slide" 
                    id="slide1" 
                    checked={selectedSlide === "slide1"}
                    onChange={handleSlideChange}
                />
                <input 
                    type="radio" 
                    name="slide" 
                    id="slide2" 
                    checked={selectedSlide === "slide2"}
                    onChange={handleSlideChange}
                />
                <input 
                    type="radio" 
                    name="slide" 
                    id="slide3" 
                    checked={selectedSlide === "slide3"}
                    onChange={handleSlideChange}
                />
                <input 
                    type="radio" 
                    name="slide" 
                    id="slide4" 
                    checked={selectedSlide === "slide4"}
                    onChange={handleSlideChange}
                />
                <input 
                    type="radio" 
                    name="slide" 
                    id="slide5" 
                    checked={selectedSlide === "slide5"}
                    onChange={handleSlideChange}
                />
                
                <div className="slide s1">
                    <img src={image1} alt="slider1" />
                </div>
                <div className="slide">
                    <img src={image2} alt="slider2" />
                </div>
                <div className="slide">
                    <img src={image3} alt="slider3" />
                </div>
                <div className="slide">
                    <img src={image4} alt="slider4" />
                </div>
                <div className="slide">
                    <img src={image5} alt="slider5" />
                </div>

                <div className="containerMarcadoresNavigation">
                  <div className="marcadorNavigation1">
                    <img src={image1} alt="slider1" />
                  </div>
                  <div className="marcadorNavigation2">
                    <img src={image2} alt="slider2" />
                  </div>
                  <div className="marcadorNavigation3">
                    <img src={image3} alt="slider3" />
                  </div>
                  <div className="marcadorNavigation4">
                    <img src={image4} alt="slider4" />
                  </div>
                  <div className="marcadorNavigation5">
                    <img src={image5} alt="slider5" />
                  </div>
                </div>
            </div>

            <div className="navigation">
                <label className="bar" htmlFor="slide1"></label>
                <label className="bar" htmlFor="slide2"></label>
                <label className="bar" htmlFor="slide3"></label>
                <label className="bar" htmlFor="slide4"></label>
                <label className="bar" htmlFor="slide5"></label>
            </div>

        </main>
      </BannerHome>
      <SectionPersonagensPorQuadrinhos>
        <h2>Personagens por Quadrinhos</h2>
        <div className="containerImagensQuadrinho">
          <div className="imagemQuadrinho">
            <img src={image1} alt="image1" />
            <h3>Nome Quadinhro</h3>
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image2} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image3} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image4} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image5} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image1} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image2} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image3} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image4} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image5} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image1} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image2} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image3} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image4} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image5} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image1} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image2} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
          <div className="imagemQuadrinho">
            <img src={image3} alt="image1" />
            <h3>Nome Quadinhro</h3>
          </div>
        </div>
      </SectionPersonagensPorQuadrinhos>
      <SectionCriadoresQuadrinhos>
        <h2>Escritores</h2>
        <div className="containeterContainerEscritores">
          <div className="containerEscritores">
            <img className="imgEscritores" src={image1} alt="" />
            <div className="containerInfoEscritores">
              <div className="infoescritores">
                <h3>Nome</h3>
                <p>Número de Quadrinhos: <span>00</span></p>
                <p>Número de Séries: <span>00</span></p>
                <p>Número de histórias: <span>00</span></p>
              </div>
              <div className="imgsObrasEscritores">
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="containeterContainerEscritores">
          <div className="containerEscritores">
            <img className="imgEscritores" src={image1} alt="" />
            <div className="containerInfoEscritores">
              <div className="infoescritores">
                <h3>Nome</h3>
                <p>Número de Quadrinhos: <span>00</span></p>
                <p>Número de Séries: <span>00</span></p>
                <p>Número de histórias: <span>00</span></p>
              </div>
              <div className="imgsObrasEscritores">
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="containeterContainerEscritores">
          <div className="containerEscritores">
            <img className="imgEscritores" src={image1} alt="" />
            <div className="containerInfoEscritores">
              <div className="infoescritores">
                <h3>Nome</h3>
                <p>Número de Quadrinhos: <span>00</span></p>
                <p>Número de Séries: <span>00</span></p>
                <p>Número de histórias: <span>00</span></p>
              </div>
              <div className="imgsObrasEscritores">
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SectionCriadoresQuadrinhos>
    </>
  )
}

export default App
