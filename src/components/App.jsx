
import React from "react";
import Statistics from './Statistics/Statistics'
export class App extends React.Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  countTotalFeedback() {
    let total = 0;
    for (const key in this.state) {
      total = total + this.state[key];
    }
    return total;
  }

  countPositiveFeedbackPercentage() {
    let total = 0;
    for (const key in this.state) {
      total = total + this.state[key];
    }
    let percentage = Math.round((this.state.good / total) * 100);
    return percentage;
  }
  render() {
    return (
      <div>
        <section>Please leave a feedback</section>
        <div>
          <button type="button" onClick={this.handleGood}>Good</button>
          <button type="button" onClick={this.handleNeutral}>Neutral</button>
          <button type="button" onClick={this.handleBad}>Bad</button>
        </div>

        <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
      </div>
    )
            
        
  }
}
