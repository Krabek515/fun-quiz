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
    let correctAnswerIsVisible = false;

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
            />
            <CorrectAnswerModalWindow correctAnswerIsVisible={correctAnswerIsVisible} />    
        </div >

    )
}

export default App