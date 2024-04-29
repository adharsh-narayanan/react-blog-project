import React from 'react'
import { Link } from 'react-bootstrap/lib/Navbar'


function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form >
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password"  />
        <button type="submit">Login</button>

      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
      <p>Don't have an account? <Link to="/Register">Register here</Link></p>
    </div>
  )
}

export default Login