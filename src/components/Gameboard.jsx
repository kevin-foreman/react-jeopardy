import React from "react";
import PropTypes from 'prop-types';
import Categories from "./Categories";
import Clue from "./Clue";

const Gameboard = (props) => {
    return( 
      <div data-testid='gameboard' id={props.currentQuestion.question ? "question" : "gameboard"}>
            {/* Build the gameboard with a grid of 6 rows and 5 columns
            import React's useState functionality to handle user click events to
            Change state from Gameboard to the Clue, and then back */}
            {props.currentQuestion.question 
      ? <Clue 
          clueObject={props.currentQuestion} 
          selectQuestion={props.selectQuestion}
          selected={true} 
      /> 
      : <Categories
        {...props}
        //   categories={props.categories}
        //   selectQuestion={props.selectQuestion}
        //   currentQuestion={props.currentQuestion}
        //   answeredQuestions={props.answeredQuestions}
      />}
    </div>
  )
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array,
}

export default Gameboard;