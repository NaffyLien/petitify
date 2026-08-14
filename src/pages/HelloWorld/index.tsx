import { useNavigate } from "react-router-dom"

const HelloWorld =()=>{
  const navigate = useNavigate()
  return <main>
    <header>
      <button onClick={()=>navigate('/pocketify/redac/')}>Rediger</button>
    </header>
  </main>
}

export default HelloWorld