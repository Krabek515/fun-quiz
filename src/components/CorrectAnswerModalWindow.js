import React from 'react'

const CorrectAnswerModalWindow = (props) => {
    if (!props.isVisible) {
        return null
    }

    const getImageForAnswer = () => {
        const memberImages = {
            'liger': 'pictures/ligerChanged.png',
            'pasha': 'pictures/pashaChanged.png', 
            'anton': 'pictures/antonChanged.png',
            'crab': 'pictures/crabChanged.png'
        }

        const memberToShow = props.isCorrect ? props.selectedMember : props.correctMember

        return memberImages[memberToShow] || `pictures/${memberToShow}Standart.png`
    }

    const getCorrectAnswerText = () => {
        const memberNames = {
            'liger': 'Лигер',
            'pasha': 'Паша',
            'anton': 'Антон',
            'crab': 'Краб'
        }
        return memberNames[props.correctMember]
    }

    return (
        <div className='blackout'>
            <div className='correctAnswer'>
                <div className={props.isCorrect ? 'correct' : 'incorrect'}>
                    {props.isCorrect ? 'Верно!' : 'Неверно!'}
                </div>

                <img
                    src={getImageForAnswer()}
                    alt={props.isCorrect ? props.selectedMember : props.correctMember}
                />

                {!props.isCorrect && (
                    <div className='correct-answer-text'>
                        Правильный ответ: {getCorrectAnswerText()}
                    </div>
                )}

                <button onClick={props.onNext}>Дальше</button>
            </div>
        </div>
    )
}

export default CorrectAnswerModalWindow