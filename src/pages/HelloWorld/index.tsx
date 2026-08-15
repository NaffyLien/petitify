import { useNavigate, Link } from "react-router-dom"
import LoginButton from "../../pieces/buttons/LoginButton"
import { useGoogleAuth } from "../../contexts/GoogleAuthContext"

const HelloWorld = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useGoogleAuth()
  return <>
    <header>
      <h1>Hello world</h1>
      <button onClick={() => navigate('/redac')}>Rediger</button>
      <Link to="/redac">Link</Link>
    </header>
    <main>
      {isAuthenticated && user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <p style={{ margin: 0 }}>Welcome, {user.name}!</p>
          <p>
            <button type="button" onClick={logout}>Logout</button>
          </p>
        </div>
      ) : (
        <LoginButton />
      )}
    </main>
  </>
}

export default HelloWorld
