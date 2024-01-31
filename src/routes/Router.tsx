import { Routes, Route, BrowserRouter } from "react-router-dom"

import Login from "../pages/Login"
import Home from "../pages/Home"
import NewAnnotation from "../pages/NewAnnotation"
import Register from "../pages/Register"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newAnnotation" element={<NewAnnotation />} />
        <Route path="/Salvo" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
