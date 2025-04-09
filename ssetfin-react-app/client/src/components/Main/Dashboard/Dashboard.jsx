
import styles from './Dashboard.module.css';

import OutputPanel from './OutputPanel/OutputPanel.jsx';
import InputPanel from './InputPanel/InputPanel.jsx';


export default function Dashboard(){
    return(
        <section class = {styles.dashboard}>
            <div class = {styles.component}>
                <InputPanel/>
            </div>
            <div class = {styles.component}>
                <OutputPanel/>
            </div>
        </section>
    );
}