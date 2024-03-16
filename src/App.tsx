import { useState } from "react"

import NavigationRoutes from "./routes"
import { GlobalStyles } from "./style/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { ligthTheme, darkTheme } from "../src/theme/theme"

function App() {

  const [theme, setTheme] = useState("dark ")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <NavigationRoutes />
          <button onClick={() => themeToggler()}>IHdbabsdaiusdv</button>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
