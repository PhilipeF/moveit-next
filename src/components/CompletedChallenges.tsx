import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/CompletedChallenges.module.css';


export function CompletedChallanges() {
 
    const { challangeComplete } = useContext(ChallangesContext);

    return (
        <div className={styles.CompletedChallengesContainer}>
            <span> Desafios Completos </span>
            <span>{challangeComplete}</span>
        </div>
    )
}

