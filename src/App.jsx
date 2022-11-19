
import blurUp from './assets/blur-2.png';
import blurDown from './assets/blur-1.png';

import './global.scss';
import './App.scss'
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {

  return (
    <div className="container">
      {/* ------------efetito Blur---------------*/}
      <div className="blurContainer">
              <div id="blurUp">
                  <img  src={blurUp} alt="" />
              </div>
              <div id='blurDown'>
                  <img  src={blurDown} alt="" />
              </div>
      </div>

      <Header />
      <Main />


    </div>
  )
}

export default App
