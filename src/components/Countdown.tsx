/*useEffect é uma função em javascript para disparar efeitos colaterais.. quando algo mudar ou quando algo
acontecer ira disparar uma ação na aplicação */

import { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

let countDownTimeout: NodeJS.Timeout

export function Countdown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const secunds = (time % 60);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

    function StartCountDown() {

        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1 * 60)

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])


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