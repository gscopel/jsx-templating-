import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

constructor(props) {
  super(props);
  this.state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}

/* Lifecycle method used to output the seconds, minutes, hours, and days variables after state update */
componentWillMount() {
  this.getTimeUntil(this.props.deadline);
}

/* Lifecycle method used to update deadline every second for countdown effect */
componentDidMount() {
  setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
}

/* Function used to place zero in front of numbers less than 10 for better UX and UI */
leading0(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

/* Built in JavaScript method used to calculate time remaining until user input deadline is reached */
getTimeUntil(deadline) {
  const time = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((time/1000) % 60);
  const minutes = Math.floor((time/1000/60) % 60);
  const hours = Math.floor(time/(1000*60*60) % 24);
  const days = Math.floor(time/(1000*60*60*24));

  this.setState({days, hours, minutes, seconds});
}

  render() {
    return(
    <div>
      <div className="Clock-days">{this.leading0(this.state.days)} days</div>
      <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
      <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
      <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
    </div>
    )
  }
}

export default Clock
