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
import Logo from '../../assets/googlelogo.svg'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const [loginSuccess, setLoginSuccess] = useState(true)
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
    <div className="w-100 d-flex justify-content-between align-content-center">
      <div className="left-side-screen-container w-50">
        <h3>
          <i>
            "Test your cyber security knowledge and strengthen your defenses."
          </i>
        </h3>
        <div className="imgIntro" />
      </div>
      <div className="login w-50">
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
            <img src={Logo} style={{ height: '30px', paddingLeft: '10px' }} />
          </button>
          <div>
            <Link to="/reset-password">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/registration">Register</Link> now.
          </div>
          {loginSuccess &&
            <p className="alert alert-success">Successfully Login</p>}
        </div>
      </div>
    </div>
  )
}

export default Login
