import {useState, useRef } from 'react';
import Inicio from './components/inicio/Inicio';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import BtnTopo from './components/btnTopo/BtnTopo';
import Projetos from './components/projetos_/Projetos_';
import {useInView} from 'framer-motion'
import { createClient } from 'contentful';
import './App.css';

function App() {
  const client = createClient({
    space: process.env.forjaTechCONTENTFUL_SPACE_ID,
    accessToken: process.env.forjaTechIS_PREVIEW === "true" ?
      process.env.forjaTechCONTENTFUL_PREVIEW_TOKEN :
      process.env.forjaTechCONTENTFUL_DELIVERY_TOKEN
  })
  
  // Alternatively you can use the CDN API as follows...
  const baseUrl = process.env.forjaTechIS_PREVIEW === "true" ? "preview.contentful.com" : "cdn.contentful.com"
  const container = useRef(null)
  const refSobre = useRef(null)
  const isInView = useInView(
    refSobre,
    {
      margin: "0px 0px -100px 0px",
      once:1
    }
  )

  const [page, setPage] = useState('landpage')

  return (
    <div className="App" ref={container}>
      {page === 'landpage' ? 
      <>
        <Inicio />
        <Sobre setPage={setPage} refSobre={refSobre} isInView={isInView}/>
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
