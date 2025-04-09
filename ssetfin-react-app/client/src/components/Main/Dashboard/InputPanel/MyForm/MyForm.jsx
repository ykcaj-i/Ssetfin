import styles from './MyForm.module.css';
import FormComponent from './FormComponent/FormComponent';

export default function MyForm(){
    return(
        <form class = {styles.form}>
            <label class = {styles.label}>
                <span class = {styles.inputBox}>
                    <p>Years Invested</p>
                    <input type = "text" class = {styles.input}/>
                </span>
            </label>

            <label class = {styles.label}>
                <span class = {styles.inputBox}>
                    <span class = {styles.inputBoxElement}><p>Annual Contributions</p></span>
                    <span class = {styles.inputBoxElement}><input type = "text" class = {styles.input}/></span>
                </span>
            </label>

            <label class = {styles.label}>
                <span class = {styles.inputBox}>
                    <p>Current Investment</p>
                    <input type = "text" class = {styles.input}/>
                </span>
            </label>

            <label class = {styles.label}>
                <span class = {styles.inputBox}>
                    <p>Year To Date Growth</p>
                    <input type = "text" class = {styles.input}/>
                </span>
            </label>

            <label class = {styles.label}>
                <span class = {styles.inputBox}>
                    <p>Dividend Yield</p>
                    <input type = "text" class = {styles.input}/>
                </span>
            </label>

            <FormComponent/>
        </form>
    );
}
