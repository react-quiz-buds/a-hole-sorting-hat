import React, {useState, useEffect} from 'react';
import Data from '../data';
import QuestionCard from './QuestionCard';
import {ResultCard} from './ResultCard';

const QuestionCarousel = () => {
    const [index, setIndex] = useState(0)
    const [questions, setQuestions] = useState(Data)
    const [houseScores, setHouseScores] = useState({
        'Gryffindor': 0,
        'Slytherin': 0,
        'Hufflepuff': 0,
        'Ravenclaw': 0
    })

    const handleScoreChange = (score, house) => {
    setHouseScores({...houseScores, [house] : houseScores[house] + score})
    setIndex(index + 1)
    console.log(houseScores)
    }
    
    const getHighScore = (points) => {
        let highScore = 0;
        for(let score in points){
            console.log('Current Score:', score)
            if(points[score] > highScore){
                highScore = score
            } 
        };
        return highScore;
    };
   
    return(
        <div className='karensail'>
            
            {questions[index]  ? <QuestionCard questionObj={questions[index]} handleScoreChange={handleScoreChange}/> : <ResultCard userScore={getHighScore(houseScores)}/>}
            <button onClick={() => {console.log(getHighScore(houseScores))}}>Kevin</button>
            {/* userScore={this function here} */}
      </div>
    )
}

export default QuestionCarousel;