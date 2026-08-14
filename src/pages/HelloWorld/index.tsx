import { useNavigate, Link } from "react-router-dom"
import LoginButton from "../../components/LoginButton"
import { useGoogleAuth } from "../../contexts/GoogleAuthContext"

const HelloWorld =()=>{
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useGoogleAuth()
  return <main>
    <header>
      <h1>Hello world</h1>
      <button onClick={()=>navigate('/redac')}>Rediger</button>
      <Link to="/redac">Link</Link>
    </header>
    {isAuthenticated && user ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <p style={{ margin: 0 }}>Welcome, {user.name}!</p>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    ) : (
      <LoginButton />
    )}
  </main>
}

export default HelloWorld
