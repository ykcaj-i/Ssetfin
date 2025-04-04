import { useState } from 'react'
import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import styles from './styles/fonts.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class = {styles.main}>
      <Header/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
