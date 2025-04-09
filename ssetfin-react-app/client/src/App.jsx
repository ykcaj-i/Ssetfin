//global-styles
import './styles-global/index.css'
import './styles-global/fonts.css';
import './styles-global/colors.css';

//misc
import { useState } from 'react'

//components
import Header from './components/Header/Header.jsx'; 
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header/>
        <br/>
        <br/>
        <Main/>
        <br/>
        <br/>
        <Footer/>
    </>
  )
}

export default App;
