import Navbar from '../../components/Navbar/Navbar.component'
import QuestionCard from '../../components/question-card/question-card.component'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: '100vh' }}
      >
        <h1 className="pb-5">Guess the Answer 🧠</h1>
        <QuestionCard />
      </div>
    </>
  )
}

export default Dashboard
