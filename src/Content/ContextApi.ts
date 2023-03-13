import React from "react";
interface IContext {
    darkMode : boolean,
    changeFont: boolean,
    handleDarkMode: () => void,
    handleChangeFont: () => void,
    handleReset: () => void
}
const ContextApi = React.createContext<IContext>({
        changeFont: false,
        darkMode: false,
    handleChangeFont: () => {},
    handleDarkMode: () => {},
    handleReset: ()  => {}
})

export default ContextApi