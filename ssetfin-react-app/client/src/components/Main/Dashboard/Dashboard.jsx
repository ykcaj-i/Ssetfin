
import styles from './dashboard.module.css';

import InfoPanel from './InfoPanel/InfoPanel.jsx';
import InputForm from './InputForm/InputForm.jsx';


export default function Dashboard(){
    return(
        <div class = {styles.dashboard}>
            <div class = {styles.component}><InfoPanel/></div>
            <div class = {styles.component}><InputForm/></div>
        </div>
    );
}