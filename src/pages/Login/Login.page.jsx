/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  loginWithPopup,
} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const [loginSuccess, setLoginSuccess] = useState(false) // New state variable
  const navigate = useNavigate()

  useEffect(
    () => {
      if (loading) {
        // maybe trigger a loading screen
        return
      }
      if (user) {
        navigate('/dashboard')
      }
    },
    [user, loading],
  )

  const handleLogin = async () => {
    const success = await logInWithEmailAndPassword(email, password)
    setLoginSuccess(success)
  }

  const logGoogleUser = async () => {
    const response = await loginWithPopup()
    console.log(response)
  }

  return (
    <div className="login">
      {loginSuccess &&
        <p className="alert alert-success">Successfully Login</p>}
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login__btn" onClick={handleLogin}>
          Login
        </button>
        <button className="login__btn" onClick={logGoogleUser}>
          Login with Google
        </button>
        <div>
          <Link to="/reset-password">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/registration">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Login
