
import styles from './dashboard.module.css';

import OutputPanel from './OutputPanel/OutputPanel.jsx';
import InputForm from './InputForm/InputForm.jsx';


export default function Dashboard(){
    return(
        <section class = {styles.dashboard}>
            <div class = {styles.component}><OutputPanel/></div>
            <div class = {styles.component}><InputForm/></div>
        </section>
    );
}