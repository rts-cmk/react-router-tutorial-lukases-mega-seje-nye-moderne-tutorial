import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()

  function handleLogin() {
    // Forestil dig at login lykkes
    console.log("Du er nu logget ind");
    
    navigate("/dashboard")
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log ind</button>
    </div>
  )
}

export default LoginPage
