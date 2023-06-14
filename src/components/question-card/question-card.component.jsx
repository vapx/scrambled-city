import { useState } from 'react'
import questions from '../../data.json'
import { Card, Button } from 'react-bootstrap'

function QuestionCard() {
  const [answer, setAnswer] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState(null)
  const questionArray = questions.questions

  const handleAnswerSubmit = (e, question) => {
    e.preventDefault()
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      setCurrentIndex(currentIndex + 1)
      setAnswered(true)
      setTimeout(
        () => {
          setAnswered(null)
        },
        [1000],
      )
    } else if (answer.toLowerCase() !== question.answer.toLowerCase()) {
      setAnswered(false)
    } else if (answer === null) {
      alert('No answer provided')
    }
    setAnswer('')
  }

  return (
    <div>
      <div className="mb-3 text-center">
        <span>{`${currentIndex + 1}/${questionArray.length}`}</span>
      </div>
      <Card
        key={questionArray[currentIndex].id}
        className="my-3"
        style={{ height: '200px' }}
      >
        <Card.Body className="d-flex align-items-center flex-column justify-content-center">
          <Card.Title>
            {questionArray[currentIndex].question}
          </Card.Title>
          <form
            onSubmit={e => handleAnswerSubmit(e, questionArray[currentIndex])}
          >
            <input
              type="text"
              value={answer}
              required
              onChange={e => {
                setAnswer(e.target.value)
                setAnswered(null)
              }}
              placeholder="Enter your answer"
            />
            <Button type="submit" className="btn btn-primary ml-2">
              Submit
            </Button>
          </form>
          {answered === true &&
            <p className="alert alert-success">Correct Answer</p>}
          {answered === false &&
            <p className="alert alert-danger">Incorrect Answer</p>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default QuestionCard
