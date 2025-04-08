import styles from './header.module.css';

import SideMenuBar from './SideMenuBar/SideMenuBar.jsx';
import Navbar from './Navbar/Navbar.jsx';


//import styles from './global-styles/typography.css';

export default function Header() {
  return (
    <header class = {styles.header}>
      <SideMenuBar/> 
      <nav>
        <h1 class = {styles.title}>ssetfin</h1>
        <br></br>
        <Navbar/>
      </nav>
        
    </header>
  );
}