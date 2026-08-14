import { useNavigate } from "react-router-dom"
import LoginButton from "../../components/LoginButton"
import { useGoogleAuth } from "../../contexts/GoogleAuthContext"

const HelloWorld =()=>{
  const navigate = useNavigate()
  const { user, isAuthenticated } = useGoogleAuth()

  return <main>
    <header>
      <h1>Hello world</h1>
      <button onClick={()=>navigate('/pocketify/redac/')}>Rediger</button>
    </header>
    {isAuthenticated && user ? (
      <p>Welcome, {user.name}!</p>
    ) : (
      <LoginButton />
    )}
  </main>
}

export default HelloWorld