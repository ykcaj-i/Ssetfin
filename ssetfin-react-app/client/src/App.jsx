import { useState } from 'react'
import Header from './components/Header/Header.jsx'; 
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

//global-styles
import './assets/styles/index.css'
import './assets/styles/fonts.css';
import './assets/styles/colors.css';

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
