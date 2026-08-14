import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useGoogleAuth } from '../../contexts/GoogleAuthContext'

function LoginButton() {
  const { setUser } = useGoogleAuth()

  const handleSuccess = (credentialResponse: { credential?: string }) => {
    if (!credentialResponse.credential) return
    const decoded = jwtDecode<{
      sub: string
      email: string
      name: string
      picture: string
      email_verified: boolean
    }>(credentialResponse.credential)
    setUser(decoded)
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Échec de la connexion')}
    />
  )
}

export default LoginButton
