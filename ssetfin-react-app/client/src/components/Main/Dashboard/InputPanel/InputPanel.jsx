import styles from './InputPanel.module.css';

import MyForm from './MyForm/MyForm';


export default function InputForm(){
    return(
        <section class = {styles.inputForm}>
            <h4 class = {styles.sectionTitle}>Input</h4>
            <div class = {styles.formContainer}>
                <ul class = {styles.list}>
                    <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Years Invested</p></li>
                    <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Annual Contributions</p></li>
                    <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Current Investment</p></li>
                    <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Year To Date Growth</p></li>
                    <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Dividend Yield</p></li>
                </ul>
            </div>
            <br/>
            <div>
                <MyForm/>
            </div>
           
        </section>
    );
}