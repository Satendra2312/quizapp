import { createContext, useState } from "react";

const QuizContext = createContext();

export const AuthProvider = ({ children }) => {
   
    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);

    return (
        <QuizContext.Provider value={{ start, setStart, exit, setExit }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizContext;