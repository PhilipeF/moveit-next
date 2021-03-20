import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ChallangesContext } from '../contexts/ChallangesContext';


interface CountdownContextData {

    minutes: number;
    secunds: number;
    hasFinished: boolean;
    isActive: boolean
    StartCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode
}


export const CountdownContext = createContext({} as CountdownContextData)

let countDownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { StartNewChallange } = useContext(ChallangesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const secunds = (time % 60);

    function StartCountDown() {

        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setHasFinished(false)
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
            StartNewChallange()

        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            secunds,
            hasFinished,
            isActive,
            StartCountDown,
            resetCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}