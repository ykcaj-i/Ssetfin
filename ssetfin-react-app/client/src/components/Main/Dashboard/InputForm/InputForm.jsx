import styles from './input-form.module.css';

export default function InputForm(){
    return(
        <section class = {styles.inputForm}>
            <h4 class = {styles.title}>Input</h4>
            <ul class = {styles.list}>
                <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Years Invested</p></li>
                <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Annual Contributions</p></li>
                <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Current Investment</p></li>
                <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> Year To Date Growth</p></li>
                <li><p class = {styles.inputBtn}><span class = {styles.signal}>⦿</span> sectionidend Yield</p></li>
            </ul>
        </section>
    );
}