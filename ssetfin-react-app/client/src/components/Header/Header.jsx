import SideMenuBar from './SideMenuBar/SideMenuBar.jsx';
import styles from './header.module.css';

//import styles from './global-styles/typography.css';

export default function Header() {
  return (
    <header>
      <SideMenuBar/> 
      <nav>
        <h1 class = {styles.title}>ssetfin</h1>
      </nav>
        
    </header>
  );
}