import { useState } from "react";
import NavigationRoutes from "./routes";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ligthTheme, darkTheme } from "../src/theme/theme";
import ThemeSwitcher from "../src/components/ThemeSwitcher";
import { SidebarProvider } from "./Context/SideBarContext";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
        <SidebarProvider>
          <ThemeSwitcher toggleTheme={toggleTheme}  >
          </ThemeSwitcher>
          <NavigationRoutes />
          <GlobalStyles />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}