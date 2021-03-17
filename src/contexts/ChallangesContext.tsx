import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelupModal';

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
    closeLevelUpModal: () => void;
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
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {

        Notification.requestPermission();

    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentyExprience', String(currentyExperience));
        Cookies.set('challangeComplete', String(challangeComplete));
    }, [level, currentyExperience, challangeComplete])


    function levelup() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);        
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }


    function StartNewChallange() {

        const randomChallageIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallageIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
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
            completeChallenge,
            closeLevelUpModal
        }}
        >
            {children}

            {isLevelUpModalOpen && <LevelUpModal />}

        </ChallangesContext.Provider>

    )
}
