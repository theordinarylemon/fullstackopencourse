import { useState, useEffect } from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(8).fill(0))
  const [maxNumber, setMaxNumber] = useState()

  const min = 0
  const max = 7
  const handleClick = () => {
    setSelected(Math.floor(Math.random(min, max)*(max-min+1))+min)

  }

  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  useEffect (() => {
    setMaxNumber(Math.max(...vote))
    }, [vote]);    

  const maxIndex = vote.indexOf(maxNumber)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <p>has {vote[selected]} votes</p>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
      <p>has {maxNumber} votes</p>
    </div>
  )
}

export default App