import { useState } from "react";

export type Theme = "light" | "dark";

export default function useTheme(): { theme: Theme, toggleTheme: () => void } {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return {
        theme,
        toggleTheme
    };
}
