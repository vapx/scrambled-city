import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth, sendPasswordReset } from '../../config/firebase'
import './Reset.css'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(
    () => {
      if (loading) return
      if (user) navigate('/dashboard')
    },
    [user, loading],
  )
  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div>
          Do not have an account? <Link to="/registration">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
