import { useContext } from "react";
import { ThemeContextProps, ThemeContext } from "../ThemeContext"

const UseTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default UseTheme