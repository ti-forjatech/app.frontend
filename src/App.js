import {useState} from 'react';
import Inicio from './components/inicio/Inicio';
import Sobre from './components/sobre/Sobre';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [page, setPage] = useState('landpage')
  return (
    <div className="App">
      <Inicio />
      <Sobre />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
