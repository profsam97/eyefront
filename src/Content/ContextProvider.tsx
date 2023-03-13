import React, {useState} from "react";
import ContextApi from "@/Content/ContextApi";


interface IContext {
    children: React.ReactNode
}
const ContextProvider : React.FC<IContext> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [changeFont, setChangeFont] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }
    const handleChangeFont = () => {
        setChangeFont(prevState => !prevState)
    }
    const handleReset = () => {
        setChangeFont(false)
        setDarkMode(false)
    }
    const content = {
        darkMode,
        changeFont,
        handleChangeFont,
        handleDarkMode,
        handleReset
    }
    return (
        <ContextApi.Provider value={content} >
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;