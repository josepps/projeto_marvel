import nucleoHomemDeFerro from "../public/Img/pexels-photo-9962890.jpeg"
import { AiOutlineSearch } from 'react-icons/ai';

import { BannerHome } from "./App.Style";

function App() {

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
        <img src={nucleoHomemDeFerro} alt="Núcleo do homem de ferro" />
      </BannerHome>
    </>
  )
}

export default App
