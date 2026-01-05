import React, { useState } from 'react'

const CorrectAnswerModalWindow = (props) => {
    const [showAnswer, setShowAnswer] = useState(false)

    if (CorrectAnswerModalWindow == false) {
        return null
    }

    return (
        showAnswer &&
        <div className='blackout'>
            <div className='correctAnswer'>
                <div className='correct'>Верно!</div>
                <img src='pictures/ligerChanged.png' alt='liger'></img>
                <button>Дальше</button>
            </div>
        </div>
    )
}

export default CorrectAnswerModalWindow