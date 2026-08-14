import { Outlet, Navigate } from 'react-router-dom'
import { useGoogleAuth } from '../../contexts/GoogleAuthContext'

export default function ProtectedRoute() {
  const { isAuthenticated } = useGoogleAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
