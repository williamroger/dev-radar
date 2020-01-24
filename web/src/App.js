import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latidude">Latitude</label>
              <input name="latidude" id="latidude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longetude">Longetude</label>
              <input name="longetude" id="longetude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&v=4" alt="William Roger"/>
              <div className="user-info">
                <strong>William Roger</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Desenvolvimento da aplicação devRadar acompanhando a Semana OmniStack 10.0 da Rocketseat.
            </p>
            <a href="https://github.com/williamroger">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&v=4" alt="William Roger" />
              <div className="user-info">
                <strong>William Roger</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Desenvolvimento da aplicação devRadar acompanhando a Semana OmniStack 10.0 da Rocketseat.
            </p>
            <a href="https://github.com/williamroger">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&v=4" alt="William Roger" />
              <div className="user-info">
                <strong>William Roger</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Desenvolvimento da aplicação devRadar acompanhando a Semana OmniStack 10.0 da Rocketseat.
            </p>
            <a href="https://github.com/williamroger">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&v=4" alt="William Roger" />
              <div className="user-info">
                <strong>William Roger</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Desenvolvimento da aplicação devRadar acompanhando a Semana OmniStack 10.0 da Rocketseat.
            </p>
            <a href="https://github.com/williamroger">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
