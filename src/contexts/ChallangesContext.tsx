import { createContext, ReactNode, useState } from 'react';

interface ChallangeContext {    
            level: number;
            currentyExperience: number; 
            challangeComplete: number;
            levelup: () => void;
            StartNewChallange: () => void;
}

interface ChallangeProvaiderProps {
    children: ReactNode /* qndo um childrem de um componente for um componente react esse componenet receber como propriedade o ReactNode */
}

export const ChallangesContext = createContext({} as ChallangeContext);

export function ChallangeProvaider({ children }: ChallangeProvaiderProps) {

    const [level, setLevel] = useState(1);
    const [currentyExperience, setCurrentExperience] = useState(0);
    const [challangeComplete, setChallangeComplete] = useState(0);

    function levelup() {
        setLevel(level + 1);
    }

    function StartNewChallange() {
        console.log('NewChallange')
    }

    return (
        <ChallangesContext.Provider value={{
            level: 1,
            levelup,
            currentyExperience,
            challangeComplete, 
            StartNewChallange
        }}
        >

            {children}

        </ChallangesContext.Provider>

    )
}
