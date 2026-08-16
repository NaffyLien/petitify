import { Outlet, Navigate } from 'react-router-dom'
import { useGoogleAuth } from '../../contexts/GoogleAuthContext'

const ProtectedRoute = () => {
  const { isAuthenticated } = useGoogleAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
export default ProtectedRoute