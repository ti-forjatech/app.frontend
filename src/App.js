import {useState} from 'react';
import Inicio from './components/inicio/Inicio';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import BtnTopo from './components/btnTopo/BtnTopo';
import Projetos from './components/projetos_/Projetos_';
import './App.css';

function App() {
  const [page, setPage] = useState('landpage')
  return (
    <div className="App">
      {page === 'landpage' ? 
      <>
        <Inicio />
        <Sobre setPage={setPage}/>
        <Skills />
        <Contato />
        <Footer />
        <BtnTopo />
      </>
       : 
       <Projetos setPage={setPage}/>}
    </div>
  );
}

export default App;
