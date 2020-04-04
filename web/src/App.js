import React from 'react'
import './App.css';
import './global.css';
import './Main.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input type="text" name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias </label>
            <input type="text" name="techs" id="techs" required/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6463299?s=460&u=4461e9ccc7bb327fc8183a09c3da015c832924d6&v=4" alt="KZTN" />
              <div className="user-info">
                <strong>KZTN</strong>
                <span>ReactJS, React Native, CSS</span>
              </div>
            </header>
            <p>Full-Stack and Mobile Developer. I love creating new things. My favourite languages are Python, Kotlin, Javascript, Typescript, C++ and Haskell.</p>
            <a href="https://github.com/KZTN">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6463299?s=460&u=4461e9ccc7bb327fc8183a09c3da015c832924d6&v=4" alt="KZTN" />
              <div className="user-info">
                <strong>KZTN</strong>
                <span>ReactJS, React Native, CSS</span>
              </div>
            </header>
            <p>Full-Stack and Mobile Developer. I love creating new things. My favourite languages are Python, Kotlin, Javascript, Typescript, C++ and Haskell.</p>
            <a href="https://github.com/KZTN">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6463299?s=460&u=4461e9ccc7bb327fc8183a09c3da015c832924d6&v=4" alt="KZTN" />
              <div className="user-info">
                <strong>KZTN</strong>
                <span>ReactJS, React Native, CSS</span>
              </div>
            </header>
            <p>Full-Stack and Mobile Developer. I love creating new things. My favourite languages are Python, Kotlin, Javascript, Typescript, C++ and Haskell.</p>
            <a href="https://github.com/KZTN">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6463299?s=460&u=4461e9ccc7bb327fc8183a09c3da015c832924d6&v=4" alt="KZTN" />
              <div className="user-info">
                <strong>KZTN</strong>
                <span>ReactJS, React Native, CSS</span>
              </div>
            </header>
            <p>Full-Stack and Mobile Developer. I love creating new things. My favourite languages are Python, Kotlin, Javascript, Typescript, C++ and Haskell.</p>
            <a href="https://github.com/KZTN">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;