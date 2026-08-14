import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import { useResume } from './contexts/useResume'
import HelloWorld from './pages/HelloWorld'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleAuthProvider } from './contexts/GoogleAuthContext'
import { VITE_GOOGLE_CLIENT_ID } from './config/env'

if (!VITE_GOOGLE_CLIENT_ID) {
  throw new Error('VITE_GOOGLE_CLIENT_ID is not defined in .env')
}

const AuthWrapper = ({ children }: { children: React.ReactNode }) => (
  <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
    <GoogleAuthProvider>
      {children}
    </GoogleAuthProvider>
  </GoogleOAuthProvider>
)

const AppRoutes = () => {
  const { resume } = useResume()

  // ${VITE_ROUTE}

  return (
    <Routes>
      <Route element={
        <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
          <GoogleAuthProvider>
            <Outlet />
          </GoogleAuthProvider>
        </GoogleOAuthProvider>
      }>
        <Route path='/pocketify/' element={<HelloWorld />} />
      </Route>
      <Route element={<AuthWrapper><Outlet /></AuthWrapper>}>
        <Route path={`/pocketify/redac`} element={<Home />} />
        <Route path={`/pocketify/walk`} element={<ExportPage resume={resume} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes