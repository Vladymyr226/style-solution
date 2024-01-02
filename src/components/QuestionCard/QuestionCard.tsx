import { Question } from '../../types'
import s from './QuestionCard.module.css'

const QuestionCard = ({ question, isOdd}: {question: Question, isOdd: boolean}) => {
  return (
    <div className={`${isOdd ? s.questionCardOdd : s.questionCardEven}`}>
      <h3 className={s.questionCardTitle}>{question.title}</h3>
      <p className={s.questionCardText}>{question.text}</p>
    </div>
  )
}

export default QuestionCard