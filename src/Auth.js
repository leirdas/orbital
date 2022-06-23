import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'
import { firebaseConfig } from './config/firebaseConfig'

export const firebaseApp = initializeApp(firebaseConfig)

export const AuthContext = createContext()

// export const AuthContextProvider = props => {
//   const [user, setUser] = useState()
//   const [error, setError] = useState()

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
//     return () => unsubscribe()
//   }, [])
//   return <AuthContext.Provider value={{ user, error }} {...props} />
// }

// export const useAuthState = () => {
//   const auth = useContext(AuthContext)
//   return { ...auth, isAuthenticated: auth.user != null }
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(getAuth(), setCurrentUser)
  },
    [])

    return (
      <AuthContext.Provider
      value={{currentUser}}
      > 
          {children}
      </AuthContext.Provider>
  )
}
