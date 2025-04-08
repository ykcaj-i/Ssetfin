import styles from './inputform.module.css';

export default function InputForm(){
    return(
        <div class = {styles.inputForm}>
            <h3>Input</h3>
            <ul  class = {styles.ul}>
                <li><p><font class = {styles.font}>⦿</font> Years Invested</p></li>
                <li><p><font class = {styles.font}>⦿</font> Annual Contributions</p></li>
                <li><p><font class = {styles.font}>⦿</font> Current Investment</p></li>
                <li><p><font class = {styles.font}>⦿</font> Year To Date Growth</p></li>
                <li><p><font class = {styles.font}>⦿</font> Dividend Yield</p></li>
            </ul>
        </div>
    );
}