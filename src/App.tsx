import NavigationRoutes from "./routes";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ligthTheme, darkTheme } from "../src/theme/theme";
import { SidebarProvider } from "./Context/SideBarContext";
import useTheme from "../src/types/useTheme"

export default function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme == "light" ? ligthTheme : darkTheme}>
        <SidebarProvider>
          <NavigationRoutes />
          <GlobalStyles />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}