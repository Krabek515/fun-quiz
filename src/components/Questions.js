import React, { useState } from 'react'

const Questions = (props) => {
    const questionCount = Object.keys(props.questionList).length

    return (
        <div>
            <div id='question-number'>{props.Qnumber}/{questionCount}</div>
            <div id='Questions'>{props.questionList[props.currentQuestion][0]}</div>
        </div>)
}

export default Questions