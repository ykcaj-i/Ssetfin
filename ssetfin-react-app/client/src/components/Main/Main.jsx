
import styles from './main.module.css';

import Dashboard from './Dashboard/Dashboard.jsx';

export default function Main(){
    return (
        <main class = {styles.main}>
            <Dashboard/>
        </main>
    );
}