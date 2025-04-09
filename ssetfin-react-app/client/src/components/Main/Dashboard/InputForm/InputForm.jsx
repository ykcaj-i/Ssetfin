import styles from './input-form.module.css';

export default function InputForm(){
    return(
        <section class = {styles.inputForm}>
            <h4 class = {styles.title}>Input</h4>
            <ul class = {styles.list}>
                <li><p class = {styles.inputBtn}><font class = {styles.signal}>⦿</font> Years Invested</p></li>
                <li><p class = {styles.inputBtn}><font class = {styles.signal}>⦿</font> Annual Contributions</p></li>
                <li><p class = {styles.inputBtn}><font class = {styles.signal}>⦿</font> Current Investment</p></li>
                <li><p class = {styles.inputBtn}><font class = {styles.signal}>⦿</font> Year To Date Growth</p></li>
                <li><p class = {styles.inputBtn}><font class = {styles.signal}>⦿</font> sectionidend Yield</p></li>
            </ul>
        </section>
    );
}