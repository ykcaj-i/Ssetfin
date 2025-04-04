import SideMenuBar from './SideMenuBar/SideMenuBar.jsx';
import styles from './styles/header.module.css';

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