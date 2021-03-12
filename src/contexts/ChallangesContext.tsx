import { createContext, ReactNode, useState } from 'react';

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
}

interface ChallangeProvaiderProps {
    children: ReactNode /* qndo um childrem de um componente for um componente react esse componenet recebe como propriedade o ReactNode */
}

export const ChallangesContext = createContext({} as ChallengesContextData);

export function ChallangeProvaider({ children }: ChallangeProvaiderProps) {

    const [level, setLevel] = useState(1);
    const [currentyExperience, setCurrentExperience] = useState(10);
    const [challangeComplete, setChallangeComplete] = useState(13);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function countExperience() {
        setCurrentExperience(currentyExperience)
    }


    function levelup() {
        setLevel(level + 1);
    }

    function StartNewChallange() {

        const randomChallageIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallageIndex];

        setActiveChallenge(challenge)

        //console.log('NewChallenge')
    }

    function resetChallange() {
        setActiveChallenge(null)
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
            experienceToNextLevel
        }}
        >
            {children}

        </ChallangesContext.Provider>

    )
}
