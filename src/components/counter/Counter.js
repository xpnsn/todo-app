import React, { useState } from "react";
import {PropTypes} from 'prop-types'
import "./Counter.css"

function Counter() {

    const [totalCount, setTotalCount] = useState(0);

    function updateCounter(value) {
        setTotalCount(totalCount + value);
    }

    function resetCounter() {
        setTotalCount(0);
    }
    return(
        <>
            <div className="counter">{totalCount}</div>
            <CounterButton value = {1} updateCounter = {updateCounter}/>
            <CounterButton value = {3} updateCounter = {updateCounter}/>
            <CounterButton value = {5} updateCounter = {updateCounter}/>
            <ResetButton resetCounter = {resetCounter} />
        </>
    );
}

function CounterButton({value, updateCounter}) {

    // function incrementByValue() {
    //     updateCounter(value);

    // }
    // function decrementByValue() {
    //     updateCounter(-value);
    // }

    return (
        <>
            <div className="big-container">
                <div className="container">
                    <button className="buttons" onClick={() => updateCounter(value)}><h4>+{value}</h4></button>
                    <button className="buttons" onClick={() => updateCounter(-value)}><h4>-{value}</h4></button>
                </div>
            </div>
        </>
    );
}

function ResetButton({resetCounter}) {
    return(
        <>
            <div className="reset">
                <button className="reset-button" onClick={resetCounter}>Reset</button>
            </div>
        </>
    );
}

CounterButton.propTypes = {
    value : PropTypes.number
}

export default Counter;