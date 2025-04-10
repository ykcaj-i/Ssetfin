
import styles from './FormComponent.module.css';

export default function FormComponent(){
    
    return(
        <div>
            <form>
                <label class = {styles.label}>
                    <span class = {styles.inputBox}>
                            <p>Current Investment</p>
                            <input type = "text" placeholder = "enter" id = "initialInvestment"/>
                            <button type="submit" class = {styles.submit}>+</button>
                            <label for = "initialInvestment" id = "initialInvestmentLabel" class = {styles.label}> Current Investment </label>
                    </span>
                </label>
               
            </form>
            {/*first form*/}
            <form onSubmit={handleSubmit}>
                <label>Initial Investment:
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
        
    );
} 