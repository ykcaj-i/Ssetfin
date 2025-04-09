
import styles from './Dashboard.module.css';

import OutputPanel from './OutputPanel/OutputPanel.jsx';
import InputForm from './InputForm/InputForm.jsx';


export default function Dashboard(){
    return(
        <section class = {styles.dashboard}>
            <div class = {styles.component}>
                <InputForm/>
            </div>
            <div class = {styles.component}>
                <OutputPanel/>
            </div>
        </section>
    );
}