import React, { Component } from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  static defaultProps ={
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    visibleStatistics: false
  }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    visibleStatistics : this.props.visibleStatistics
  };

  onGoodClick = () => {
    this.setState(prevState => {
      this.visibleStatistics = true;
      return{
        good: prevState.good + 1,
        total: prevState.total + 1
      }
    })
  };

  onBadClick = () => {
    this.setState(prevState => {
      this.visibleStatistics = true;
      return{
        bad:prevState.bad+1,
        total:prevState.total+1
      }
    })
  };

  onNeutralClick = () => {
    this.setState(prevState => {
      this.visibleStatistics = true;
      return{
        neutral: prevState.neutral + 1,
        total : prevState.total + 1
      }
    })
  };

  calculatePositiveFeedback = (good, bad , neutral) => {
    const positiveFeedback = ((good / (good + bad + neutral)) * 100).toFixed() ;
    return positiveFeedback;
  }

  render() {
    const { onGoodClick, onBadClick, onNeutralClick, calculatePositiveFeedback } = this;
    const { good, neutral, bad, total } = this.state;
    return (
      <div className="container">
        <h1>Click the button ;)</h1>
        <Buttons
          onGood={onGoodClick}
          onBad={onBadClick}
          onNeutral={onNeutralClick}
        />
        {total ? <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positive={calculatePositiveFeedback(good, bad , neutral)}
        /> : 
        <h3>C`mon! Click the button! </h3>}
        
      </div>
    );
  }
}

export default App;
