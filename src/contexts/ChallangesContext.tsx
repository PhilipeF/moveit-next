import { finished } from 'node:stream';
import { createContext, ReactNode, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentyExperience: number;
    challangeComplete: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelup: () => void;
    StartNewChallange: () => void;
    resetChallange: () => void;
    completeChallenge: () => void;
}

interface ChallangeProvaiderProps {
    children: ReactNode /* qndo um childrem de um componente for um componente react esse componenet recebe como propriedade o ReactNode */
}

export const ChallangesContext = createContext({} as ChallengesContextData);

export function ChallangeProvaider({ children }: ChallangeProvaiderProps) {

    const [level, setLevel] = useState(1);
    const [currentyExperience, setCurrentExperience] = useState(0);
    const [challangeComplete, setChallangeComplete] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
       
        Notification.requestPermission();

    }, [])


    function levelup() {
        setLevel(level + 1);
    }

    function StartNewChallange() {

        const randomChallageIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallageIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio !!'), {
                body: `Valendo ${challenge.amount}`
            }
        }

        //console.log('NewChallenge')
    }

    function resetChallange() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {

            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentyExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelup()
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallangeComplete(challangeComplete + 1)
    }

    return (

        <ChallangesContext.Provider value={{
            level: 1,
            levelup,
            currentyExperience,
            challangeComplete,
            StartNewChallange,
            activeChallenge,
            resetChallange,
            experienceToNextLevel,
            completeChallenge
        }}
        >
            {children}

        </ChallangesContext.Provider>

    )
}
