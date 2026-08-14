import { createContext, useContext, type ReactNode } from 'react'
import { useResume } from './useResume'

export type GoogleUser = {
  sub: string
  email: string
  name: string
  picture: string
  email_verified: boolean
}

export type GoogleAuthContextValue = {
  user: GoogleUser | null
  isAuthenticated: boolean
  setUser: (user: GoogleUser | null) => void
  logout: () => void
}

export const GoogleAuthContext = createContext<GoogleAuthContextValue | null>(null)

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext)
  if (!context) {
    throw new Error('useGoogleAuth must be used within a GoogleAuthProvider')
  }
  return context
}

type GoogleAuthProviderProps = {
  children: ReactNode
}

export function GoogleAuthProvider({ children }: GoogleAuthProviderProps) {
  const { resume, setGoogleUser, updateProfile } = useResume()

  const setUser = (user: GoogleUser | null) => {
    setGoogleUser(user)
    if (user) {
      updateProfile('email', user.email)
    }
  }

  const logout = () => {
    setGoogleUser(null)
  }

  return (
    <GoogleAuthContext.Provider value={{ user: resume.googleUser, isAuthenticated: !!resume.googleUser, setUser, logout }}>
      {children}
    </GoogleAuthContext.Provider>
  )
}
