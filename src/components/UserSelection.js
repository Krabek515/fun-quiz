import React, { useState } from 'react'

const UserSelection = (props) => {
    const goToNextQuestion = () => {
        props.setQnumber(props.Qnumber + 1)
    }

    const [correctAnswers, setCorrectAnswers] = useState(0);

    const select = (brMember) => {
        if (props.questionList[props.currentQuestion][1] === brMember) {
            setCorrectAnswers(correctAnswers + 1);
        }

        props.setCurrentQuestion(props.currentQuestion + 1)
        props.setQnumber(props.Qnumber + 1)
    }

    console.clear()
    console.log(`Количество правильных ответов: ${correctAnswers}/${Object.keys(props.questionList).length}`)

    return (
        <div className="answer-field container p-0">
            <div className="container text-center">
                <div className="row row-cols-2 answer-field-first">

                    <div className="row row-cols-2 one-answer" onClick={() => select('liger')}>
                        <div className="col p-0"><img src="pictures/ligerStandart.png" alt="liger" className="group-faces"
                            id="liger" />
                        </div>
                        <div className="col p-0 text-answer">Лигер</div>
                    </div>

                    <div className="row row-cols-2 one-answer" onClick={() => select('pasha')}>
                        <div className="col p-0"><img src="pictures/pashaStandart.png" alt="pasha" className="group-faces"
                            id="pasha" />
                        </div>
                        <div className="col p-0 text-answer">Паша</div>
                    </div>

                    <div className="row row-cols-2 one-answer" onClick={() => select('anton')}>
                        <div className="col p-0"><img src="pictures/antonStandart.png" alt="anton" className="group-faces"
                            id="anton" />
                        </div>
                        <div className="col p-0 text-answer">Антон</div>
                    </div>

                    <div className="row row-cols-2 one-answer" onClick={() => select('crab')}>
                        <div className="col p-0"><img src="pictures/crabStandart.png" alt="crab" className="group-faces"
                            id="crab" />
                        </div>
                        <div className="col p-0 text-answer">Краб</div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default UserSelection