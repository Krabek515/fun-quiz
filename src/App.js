import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Questions from './components/Questions';
import UserSelection from './components/UserSelection';
import CorrectAnswerModalWindow from './components/CorrectAnswerModalWindow'

const App = () => {
    const questionList = {
        1: ['У кого из участников Black Rose первым ником был vincenzo2002?', 'anton'],
        2: ['Кто первым познакомился с Клериком?', 'pasha'],
        3: ['У кого больше всего наигранных часов в CS2?', 'crab'],
        4: ['Кто наиграл на Ясуо больше всех?', 'liger']
    }

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [Qnumber, setQnumber] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [selectedMember, setSelectedMember] = useState('')
    const [correctMember, setCorrectMember] = useState('')
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const handleAnswer = (correct, selected, correctAnswer) => {
        setIsCorrect(correct)
        setSelectedMember(selected)
        setCorrectMember(correctAnswer)
        setShowModal(true)

        if (correct) {
            setCorrectAnswers(correctAnswers + 1)
        }

        console.log(`Выбран: ${selected}, Правильный: ${correctAnswer}, Верно?: ${correct}`)
    }

    const handleNextQuestion = () => {
        setShowModal(false)

        if (currentQuestion < Object.keys(questionList).length) {
            setCurrentQuestion(currentQuestion + 1)
            setQnumber(Qnumber + 1)
        } else {
            alert(`Викторина завершена!\nПравильных ответов: ${correctAnswers}/${Object.keys(questionList).length}`)
            
            setCurrentQuestion(1)
            setQnumber(1)
            setCorrectAnswers(0)
        }
    }

    return (
        <div>
            <Questions
                currentQuestion={currentQuestion}
                Qnumber={Qnumber}
                questionList={questionList}
            />
            <UserSelection
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                Qnumber={Qnumber}
                setQnumber={setQnumber}
                questionList={questionList}
                onAnswer={handleAnswer}
            />
            <CorrectAnswerModalWindow
                isVisible={showModal}
                isCorrect={isCorrect}
                selectedMember={selectedMember}
                correctMember={correctMember}
                onNext={handleNextQuestion}
            />
        </div>
    )
}

export default App