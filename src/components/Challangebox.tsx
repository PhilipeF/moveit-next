import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import { CountdownContext } from '../contexts/CoutdownContext';
import styles from '../styles/components/Challangebox.module.css';

export function Challangebox() {

    const { activeChallenge, resetChallange, completeChallenge } = useContext(ChallangesContext)
    const { resetCountDown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallange();
        resetCountDown();
    }

    return (
        <div className={styles.ChallangeboxContainer}>

            { activeChallenge ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg `} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challangeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                            </button>
                        <button
                            type='button'
                            className={styles.challangeSuccededButton}
                            onClick={handleChallengeSucceeded}
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