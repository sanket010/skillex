
import './App.css';
import Categories from './components/categories'
import Findpassion from './components/find-passion'
import Navbar from "./components/navbar"
import Skill from "./components/skill"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar title="nav"></Navbar>
      </header>
      <body className='App-body'>
      <Findpassion title="content"></Findpassion>
      <Categories title="content2"></Categories>
      <Skill title="content3"></Skill>
      </body>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
