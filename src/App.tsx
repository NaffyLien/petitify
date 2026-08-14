import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import { useResume } from './contexts/useResume'
import HelloWorld from './pages/HelloWorld'
import { GoogleOAuthProvider } from '@react-oauth/google';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => (
  <GoogleOAuthProvider clientId="VOTRE_CLIENT_ID.apps.googleusercontent.com">
    {children}
  </GoogleOAuthProvider>
)

const AppRoutes = () => {
  const { resume } = useResume()

  // ${import.meta.env.VITE_route}

  return (
    <Routes>
      <Route path='/pocketify/' element={<HelloWorld />} />
      <Route element={<AuthWrapper><Outlet /></AuthWrapper>}>
        <Route path={`/pocketify/redac`} element={<Home />} />
        <Route path={`/pocketify/walk`} element={<ExportPage resume={resume} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes