import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/Profile.module.css'


export function Profile() {

    const { level } = useContext(ChallangesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/PhilipeF.png" alt="Philipe Ferreira" />
            <div>
                <strong>Philipe Ferreira</strong>
                <p><img src='icons/Level.svg' alt='Level' />
                    Level {level}
                </p>
            </div>
        </div>
    )
}

