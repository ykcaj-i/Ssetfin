import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer class = {styles.footer}>
            <p class = {styles.copyright}><span class = {styles.copy}>&copy;</span>&nbsp;2025 Ssetfin.<br></br>all rights reserved.</p>
        </footer>
    );
  }
