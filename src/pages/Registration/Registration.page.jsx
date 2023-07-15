import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth, registerWithEmailAndPassword } from '../../config/firebase'
import './Registration.css'

function Registration({ setShowLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [user, loading] = useAuthState(auth)

  const register = () => {
    registerWithEmailAndPassword(email, password, name)
  }

  useEffect(
    () => {
      if (loading) return
      if (user) navigate('/dashboard')
    },
    [user, loading],
  )
  return (
    <div className="register">
      <div className="register__container">
        <h3 className="fw-bold">Don't have an account?</h3>
        <p className="lead">Register Now!</p>

        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="register__textBox"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="register__btn btn btn-primary" onClick={register}>
          Register
        </button>
        <div>
          Already have an account?{' '}
          <Link to="/" onClick={() => setShowLogin(true)}>
            Login
          </Link>{' '}
          now.
        </div>
      </div>
    </div>
  )
}
export default Registration
