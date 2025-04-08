import styles from './footer.module.css';


export default function Footer() {
    return (
        <footer class = {styles.footer}>
            <p class = {styles.copyright}>
                <font class = {styles.copy}>&copy;</font>&nbsp;2025 Ssetfin<br></br>all rights reserved
            </p>
        </footer>
    );
  }
