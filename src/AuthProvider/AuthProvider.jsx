import { createContext } from "react"

const AuthProvider=({children})=>{
    const AuthContext=createContext()
    const allValue={

    }
    return(
        <AuthContext.Provider value={allValue}>
               {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;