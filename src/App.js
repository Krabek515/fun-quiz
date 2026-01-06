import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Questions from './components/Questions';
import UserSelection from './components/UserSelection';
import CorrectAnswerModalWindow from './components/CorrectAnswerModalWindow'

const App = () => {
    const questionList = {
        1: ['Чья фраза: "Тебе дай блять хуй с надписью хлеб и ты его сожрешь"', 'pasha'],
        2: ['Чья фраза: "Кому отсосать за крайслер?"', 'liger'],
        3: ['У кого был дом - иглу в одном из выживаний в майнкрафт?', 'crab'],
        4: ['Чья фраза: "А твои усики соскучились по моему члену"', 'anton'],
        5: ['Кому удалось сбежать от Краба и выжить', 'liger'],
        6: ['Кто был первым посетителем зеков в тюрьме в майнкрафт?', 'pasha'],
        7: ['Чья фраза: "Дрифт хуйня ебаная для долбоёбов"', 'anton'],
        8: ['Чья фраза: "Заходи на канал кроссворды порешаем"', 'liger'],
        9: ['Кто инициатор подрыва выборов?', 'anton'],
        10: ['Чья фраза:"Че ты там гейм лузнулся?"', 'crab'],
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