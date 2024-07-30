import LayoutApp from "../layout/LayoutHome"
// import { lazy } from "react"

// const Login = lazy(() => import("../pages/Login"))
// const NewAnnotation = lazy(() => import("../pages/NewAnnotation"))
// const Home = lazy(() => import("../pages/Home"))
// const Register = lazy(() => import("../pages/Register"))
// const RegisterLogin = lazy(() => import("../pages/RegisterLogin"))

import Login from "../pages/Login"
import NewAnnotation from "../pages/NewAnnotation"
import Home from "../pages/Home"
import Register from "../pages/Register"
import RegisterLogin from "../pages/RegisterLogin"

function Private(Component: React.FC) {
  return <Component />
}

export const routes = [
  { children: [{ path: "/login", element: Private(Login) }] },
  { children: [{ path: "/registerLogin", element: Private(RegisterLogin) }] },
  {
    element: <LayoutApp />,
    children: [
      { path: "/", element: Private(Home) },
      { path: "/salvo", element: Private(Register) },
      { path: "/newAnnotation", element: Private(NewAnnotation) },
    ],
  }
]

  // import { Routes, Route, BrowserRouter } from "react-router-dom"
  
  // import Login from "../pages/Login"
  // import Home from "../pages/Home"
  // import NewAnnotation from "../pages/NewAnnotation"
  // import Register from "../pages/Register"
  
  // export default function Router() {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/newAnnotation" element={<NewAnnotation />} />
  //         <Route path="/Salvo" element={<Register />} />
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }
