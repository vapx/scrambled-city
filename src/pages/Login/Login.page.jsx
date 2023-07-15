import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  loginWithPopup,
} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Login.css'
import Logo from '../../assets/googlelogo.svg'

function Login({ setShowLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const [loginSuccess, setLoginSuccess] = useState(false)
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
      <div className="login__container">
        <h3 className="fw-bold">Hello Again!</h3>
        <p className="lead">You've been missed.</p>
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
        <button className="login__btn btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button
          className="login__btn-google btn btn-danger w-100 d-flex justify-content-center"
          onClick={logGoogleUser}
        >
          Continue with
          <img className="login-btn-google-icon" src={Logo} alt="Google" />
        </button>
        <div>
          <Link to="/reset-password">Forgot Password</Link>
        </div>
        <div>
          Don't have an account?{' '}
          <Link onClick={() => setShowLogin(false)}>Register</Link> now.
        </div>
        {loginSuccess &&
          <p className="alert alert-success">Successfully Login</p>}
      </div>
    </div>
  )
}

export default Login
