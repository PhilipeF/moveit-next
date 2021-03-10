import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/PhilipeF.png" alt="Philipe Ferreira" />
            <div>
                <strong>Philipe Ferreira</strong>
                <p><img src='icons/Level.svg' alt='Level' />
                    Level 1
                </p>
            </div>
        </div>

    )
}

