// import { useContext, createContext, useState } from "react"

// interface AuthContextType {
//     isLoggedIn: boolean;
//     login: () => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const useAuth = () => {
//     const context = useContext(AuthContext)
//     if (!context) {
//         throw new Error("Não temos um contexto por aqui ");
//     }
//     return context
// }


// export const AuthProvider: React.FC = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const login = () => {
//         setIsLoggedIn(true)
//     }

//     const logout = () => {
//         setIsLoggedIn(false)
//     }

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider >
//     )
// } 
