/* THE SECRET!!
1.Quotes are multiple strings that need to be stored in an array.
2.Every time the button gets pressed, a random whole number needs to be generated.
3.The number will be used as a representation of the array index number for the quote array.
4.Once we retrieve the randomly picked quote from the array using our randomly generated whole number, 
we will place it to the HTML document.
*/

import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button=({onClick, text})=>(
  <button onClick={onClick}>
    {text}
  </button>
)

const Header=({text})=>{
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const App=(props)=>{
  const [selected,setSelected]=useState(0)
  const [votes, setVotes]=useState(new Array(props.anecdotes.length).fill(0))
  const points=()=>{
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
  }

  const RandomNumber=(max)=>{
    setSelected(Math.floor(Math.random()*max))
  }

  const indexofMax=()=>{
    return votes.indexOf(Math.max(...votes))
  }

  return(
    <div>
      <Header text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={()=>points()} text="vote" />
      <Button onClick={()=>RandomNumber(props.anecdotes.length)} text="next anecdote" />
      <Header text="Anecdote with most votes"/>
      {props.anecdotes[indexofMax()]}
      <p> has {votes[indexofMax()]} votes</p>
    </div>
  )
}

//Placed the quotes in a nice little array, so there are numbered. That completes 1. task
const anecdotes=[
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))