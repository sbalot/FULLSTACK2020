import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//1.8 Part
const Statistic=({text,value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics=({good,neutral,bad})=>{
  //Calculations -DO NOT TOUCH
  const all=good+neutral+bad
  const average=(good*1 + neutral*0 + bad*-1)/all 
  const positive=(good/all)*100.

  //1.9 Part - Conditional rendering
  if (all===0){
    return(
    <p>No feedback given</p>)
  }
else{
  return(
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={`${positive} %`} />
    </div>
  )
}
}

//Part 1.7 - WORKS! DO NOT TOUCH
const Button =(props)=>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

//Where all stuff come together! Hallelujah!!
const App =(props)=> {
  //save clicks of each button to own state
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text="good"/>
      <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={()=>setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))