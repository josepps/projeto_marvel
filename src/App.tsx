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
        <main>
          <img src={nucleoHomemDeFerro} alt="Núcleo do homem de ferro" />
          <div className="containerDescricaoMain">
            <h1>Nome Personagem</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptates dignissimos illum, reprehenderit ullam nesciunt in. Cumque accusantium, quam ullam nam dolores beatae debitis qui, eveniet iste impedit, eaque fugit atque corporis aliquam fuga explicabo exercitationem blanditiis? Dicta, incidunt quos sit modi aspernatur ab itaque tenetur dolorum, rerum ducimus porro!</p>
            <a href="#">Mais Info</a>
          </div>
        </main>
      </BannerHome>
    </>
  )
}

export default App
