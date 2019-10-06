import React from 'react';

const QuestionCard = ({questionObj, handleScoreChange, nextQuestion}) => {
    // console.log('This is props in QuestionCard',questionObj.answers)
    return(
        <>
            <p>{questionObj.question}</p>
            {questionObj.answers.map(answerObj => 
                <div onClick={() => handleScoreChange(10, `${answerObj.house}`)}
                className='answer-div'>{answerObj.answer}</div>
            )}
            
        </>
    )
}

export default QuestionCard;