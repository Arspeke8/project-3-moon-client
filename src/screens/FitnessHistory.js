

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
    <div>
        <h1>Fitness History</h1>
        <button onClick = {()=>{nextWorkout()}}>Next workout</button>
        <h2>{fitnessData[i].name}</h2>
        <ul>
            {fitnessData[i].exercises.map((data, index) => (
                <li key={index}>
                    weight: {data.weight}, set: {data.set}, reps: {data.reps}, exercise: {data.exercise}, date: {data.date}
                </li>
            ))}
        </ul>
    </div>
    );
};

export default FitnessHistory;