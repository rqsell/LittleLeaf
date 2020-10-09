import React, { useState, useEffect } from 'react';
import actions from '../api';

function SeeGoal(props) {
    const [goals, setGoals] = useState([])

    useEffect(() => {
        async function getGoals() {
            let res = await actions.getAllGoals()
            console.log(res)
            setGoals(res.data.goals)
        }
        getGoals()
    }, [])

    const showGoals = () => {
        return goals.map((eachGoal) => {
            return (
                <li>{eachGoal.name}</li>
            )
        })
    }
    return (
        <div>
            {showGoals()}
        </div>
    );
}

export default SeeGoal;