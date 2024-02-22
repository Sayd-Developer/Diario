import NavigationRoutes from "./routes"
import { GlobalStyles } from "./style/GlobalStyles"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <NavigationRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
