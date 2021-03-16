/*useEffect é uma função em javascript para disparar efeitos colaterais.. quando algo mudar ou quando algo
acontecer ira disparar uma ação na aplicação */

import { useContext } from 'react';
import { CountdownContext } from '../contexts/CoutdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const {
        minutes,    
        secunds,
        hasFinished,
        isActive,
        StartCountDown,
        resetCountDown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (

                        <button
                            type='button'
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountDown}
                        >
                            Abandonar Ciclo
                        </button>

                    ) : (
                        <button
                            type='button'
                            className={styles.countdownButton}
                            onClick={StartCountDown}
                        >
                            Iniciar Ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}