import React, { useState } from 'react'

const Button =({setValue, text}) => {
  return (
    <button onClick={setValue}>
      {text}
    </button>
  )
}

const StatisticsLine =({text, value, percent}) => {
  if (percent==="True") {
    return(
      <tr><td>{text}</td><td>{value}%</td></tr>
    )
  }
  else {
    return(
      <tr><td>{text}</td><td>{value}</td></tr>
    )
  }
  
}

const Statistics = ({good, neutral, bad, all}) => {
  if (all===0) {
    return(
      <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }
  else {
    return(
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />

            <StatisticsLine text="average" value={((1*good)+(-1*bad))/all} />
            <StatisticsLine text="positive" value={good*100/all} percent="True" />
          </tbody>
        </table> 
      </div>
    )
  }
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let all = good + neutral + bad

  return (
    <div>
      <h2>give feedback</h2>
      <Button setValue={() => setGood(good + 1)} text="good" />
      <Button setValue={() => setNeutral(neutral + 1)} text="neutral" />
      <Button setValue={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>

    </div>
  )
}

export default App;
