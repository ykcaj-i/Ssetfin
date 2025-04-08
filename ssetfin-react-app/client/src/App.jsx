//global-styles
import './global-styles/index.css'
import './global-styles/fonts.css';
import './global-styles/colors.css';

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
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App;
