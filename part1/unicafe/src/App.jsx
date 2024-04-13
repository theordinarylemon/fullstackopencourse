import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {props.text} {props.value}
          </td>
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, all, score} = props
  if (props.all == false)
  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
  else
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text='good' value={good}/>
      <StatisticsLine text='neutral' value={neutral}/>
      <StatisticsLine text='bad' value={bad}/>
      <StatisticsLine text='all' value={all}/>
      <StatisticsLine text='average' value={score/all}/>
      <StatisticsLine text='positive' value={`${(good/all*100).toFixed(1)}%`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
    setAll( all + 1)
    setScore(score + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll( all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll( all + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}
      all={all} score={score}/>

    </div>
  )
}

export default App
