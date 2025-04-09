import styles from './Header.module.css';

import SideMenuBar from './SideMenuBar/SideMenuBar.jsx';
import Navbar from './Navbar/Navbar.jsx';


//import styles from './global-styles/typography.css';

export default function Header() {
  return (
    <header class = {styles.header}>
      <nav>
        <SideMenuBar/> 
        <h1 class = {styles.title}>Ssetfin</h1>
        <br/>
        <Navbar/>
      </nav>
        
    </header>
  );
}