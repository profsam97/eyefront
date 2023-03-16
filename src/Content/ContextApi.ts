import React from "react";
interface IContext {
    darkMode : boolean,
    changeFont: boolean,
    darkNumber: number,
    lightNumber: number,
    handleDarkMode: () => void,
    handleChangeFont: () => void,
    handleReset: () => void,
    handleMakeLight: () => void,
    handleMakeDark :  () => void
}
const ContextApi = React.createContext<IContext>({
        changeFont: false,
        darkMode: false,
    darkNumber: 600,
    lightNumber: 500,
    handleChangeFont: () => {},
    handleDarkMode: () => {},
    handleReset: ()  => {},
    handleMakeDark: () => {},
    handleMakeLight: () => {}
})

export default ContextApi