import styles from './info-panel.module.css';

import FinancialExtrapolator from './FinancialExtrapolator/FinancialExtrapolator.jsx';

export default function InfoPanel(){
    return(
        <div class = {styles.infoPanel}>
            <h4 class = {styles.title}>Approximation By Year</h4>
        </div>
    );
}