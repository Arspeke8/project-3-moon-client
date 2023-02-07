

import React from 'react';
import { useState } from 'react';
import fitnessData  from './FitnessDataList.json'
import './FitnessHistory.css';



const FitnessHistory = () => {
    let [i, setIndex] = useState(0)

    function nextWorkout() {
        // console.log({i})
        // console.log({length:fitnessData.length})
        setIndex(i + 1 < fitnessData.length ? i + 1 : 0); 
        if (i + 1 >= fitnessData.length){
            setIndex(0);
        } else {
            setIndex(i + 1);
        }
        // DO NOT: i = i + 1
        // setIndex(1)
    }

return (
    <div className='col-lg-9 col-md-9 col-sm-12'>
        <h1>Fitness History</h1>
        <h2>{fitnessData[i].name}</h2>
        <ul>
            {fitnessData[i].exercises.map((data, index) => (
              
                <li key={index}>
                     Date: {data.date}, Exercise: {data.exercise}, Set: {data.set}, Reps: {data.reps}, Weight: {data.weight},
                </li>
                
            ))}
        </ul>
        <button onClick = {()=>{nextWorkout()}}>Next Workout</button>
    </div>
    );
};

export default FitnessHistory;