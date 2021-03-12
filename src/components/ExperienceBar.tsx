import styles from '../styles/components/ExperienceBar.module.css'
import { ChallangesContext } from '../contexts/ChallangesContext';
import { useContext } from 'react';


export function ExperienceBar() {

    const { currentyExperience, experienceToNextLevel } = useContext(ChallangesContext)

    const percentToNextLevel = Math.round(currentyExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentyExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentyExperience} xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp</span>
        </header>
    )
}
