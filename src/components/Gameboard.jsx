import React from "react";

function Rectangle({ value, onRectangleClick }) {
    return <button id="" onClick={onRectangleClick}>{value}</button>
}

const Gameboard = (props) => {
    return (
        <div
            id="gameboard"
            // id={props.currentQuestion.question ? "question" : "gameboard"}
            // Build the gameboard with a grid of 6 rows and 5 columns
            // import React's useState functionality to handle user click events to
            // Change state from Gameboard to the Clue, and then back
        >
            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div>
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>
            {/* was a question clicked?  */}
            {/* Yes? Show clue */}
            {/* No? Show Categories */}
        </div>
    );
};

export default Gameboard;