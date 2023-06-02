import './App.scss';
import {Main} from "./Components/Main/Main";
import {createContext, useState} from "react";
import {ToggleMode} from "./Components/ToggleMode/ToggleMode";

export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }
    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className='app' id={theme}>
                    <Main/>
                    <ToggleMode className='switch-button'
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                    />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default App;
