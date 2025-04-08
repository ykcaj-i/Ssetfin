
import styles from './navbar.module.css';

export default function Navbar(){
    return(
        <navbar class = {styles.navbar}>
                <button class = {styles.button}>graph</button> 
                <button class = {styles.button}>asset-type</button>  
                <button class = {styles.button}>quick-reset</button>  
                <button class = {styles.button}>docs</button>
        </navbar>
    );
}