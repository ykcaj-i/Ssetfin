import styles from './output-panel.module.css';

import FinancialExtrapolator from './FinancialExtrapolator/FinancialExtrapolator.jsx';

export default function OutputPanel(){
    return(
        <section class = {styles.outputPanel}>
            <h4 class = {styles.sectionTitle}>Approximation By Year</h4>
            <br/>
        </section>
    );
}