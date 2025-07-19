import { useContext, createContext, useState } from "react"

const ChoiceContext=createContext();

const ChoiceContextProvider=({children})=>{
    const [score,setScore]=useState(0);
    const [choice,setChoice]=useState('')
    return(
    <ChoiceContext.Provider value={{score: score, setScore: setScore, choice: choice, setChoice: setChoice}}>
        {children}
    </ChoiceContext.Provider>
    )
}

const useChoiceContext=()=>useContext(ChoiceContext);

export {useChoiceContext, ChoiceContextProvider}