import React, { useState } from 'react'
import Login from '../Login/Login.page'
import Registration from '../Registration/Registration.page'
import CyQuiz from '../../assets/CyQuizLogo.svg'
import './Authentication.styles.css'
import Navbar from '../../components/Navbar/Navbar.component'

const LeftSide = () => {
  return (
    <div
      style={{ width: '50vw', height: '100vh', color: 'white' }}
      className="text-center d-flex justify-content-center align-items-center flex-column p-3 "
    >
      <img src={CyQuiz} alt="" />
      <p>
        <i>
          "CyQuiz is an innovative online platform dedicated to cyber security
          education and knowledge enhancement. With a focus on beginners in the
          field, CyQuiz offers an engaging and interactive experience for
          individuals looking to learn and memorize essential terms in cyber
          security. Our website provides a comprehensive collection of quizzes
          and resources, specifically designed to demystify complex concepts and
          empower beginners on their journey towards a deeper understanding of
          cyber security. Whether you're an aspiring professional or simply
          curious about the field, CyQuiz is your go-to destination for
          acquiring fundamental knowledge and building a solid foundation in
          cyber security."
        </i>
      </p>
    </div>
  )
}

const RightSide = () => {
  const [showLogin, setShowLogin] = useState(false)

  const toggleForm = showVal => {
    setShowLogin(showVal)
  }

  return (
    <div
      style={{
        width: '50vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="align-items-center"
    >
      {showLogin
        ? <Login setShowLogin={toggleForm} />
        : <Registration setShowLogin={toggleForm} />}
    </div>
  )
}

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Navbar />
      <div className="d-flex">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}

export default Authentication
