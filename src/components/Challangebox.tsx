import styles from '../styles/components/Challangebox.module.css';

export function Challangebox() {

    const hasActiveChallange = true

    return (

        <div className={styles.ChallangeboxContainer}>
            { hasActiveChallange ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src='icons/body.svg' />
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3minutos.</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challangeFailedButton}
                        >
                            Falhei
                            </button>
                        <button
                            type='button'
                            className={styles.challangeSuccededButton}
                        >
                            Completei
                            </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallangeNotBoxActive}>

                        <strong>Finalize um ciclo para receber desafios</strong>

                        <p>
                            <img src='icons/level-up.svg' alt='Level up' />
                            Avance de Level completando desafios.
                        </p>
                    </div>

                )}

        </div>
    )
}