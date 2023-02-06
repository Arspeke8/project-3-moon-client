import React, { useState } from 'react';
import './WorkoutForm.css'

export const WorkoutForm = () => {
    const [workoutName, setWorkoutName] = useState("");
    const [date, setDate] = useState("");
    const [exercises, setExercises] = useState([
        { exercise: "", weight: "", sets: "", reps: "" }
    ]);

    const handleWorkoutNameChange = event => {
        setWorkoutName(event.target.value);
    }

    const handleDateChange = event => {
        setDate(event.target.value);
    }

    const handleExerciseChange = (event, index) => {
        const newExercises = [...exercises];
        newExercises[index][event.target.name] = event.target.value;
        setExercises(newExercises);
    }

    const handleAddExercise = () => {
        setExercises([...exercises, { exercise: "", weight: "", sets: "", reps: "" }]);
    }

    const handleFinish = event => {
        event.preventDefault();
        // code for handling form submission goes here
    }

    return (
        <form className="workout" onSubmit={handleFinish}>
            <label>Workout Name:</label>
            <input type="text" value={workoutName} onChange={handleWorkoutNameChange} />
            <br />
            <label>Date:</label>
            <input type="date" value={date} onChange={handleDateChange} />
            <br />
            {exercises.map((exercise, index) => (
                <div key={index} className="exercise-row">
                    <label>Exercise {index + 1}:</label>
                    <input type="text" name="exercise" value={exercise.exercise} onChange={event => handleExerciseChange(event, index)} />
                    <label>Weight:</label>
                    <input type="text" name="weight" value={exercise.weight} onChange={event => handleExerciseChange(event, index)} />
                    <label>Sets:</label>
                    <input type="text" name="sets" value={exercise.sets} onChange={event => handleExerciseChange(event, index)} />
                    <label>Reps:</label>
                    <input type="text" name="reps" value={exercise.reps} onChange={event => handleExerciseChange(event, index)} />
                </div>
            ))}
            <button type="button" onClick={handleAddExercise}>Add Exercise</button>
            <button type="submit">Finish</button>
            
        </form>
    );
}

export default WorkoutForm;