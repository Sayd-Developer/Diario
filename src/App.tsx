import NavigationRoutes from "./routes";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { SidebarProvider } from "./Context/SideBarContext";

export default function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <NavigationRoutes />
          <GlobalStyles />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}