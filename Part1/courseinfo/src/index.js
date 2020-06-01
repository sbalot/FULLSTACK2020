import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content=()=>{
  return(
    <div>
      <Part name="Fundamentals of React" number={10} />
      <Part name="Using props to pass data" number={7} />
      <Part name="State of a component" number={14} />
    </div>
  )
}

const Part=(props)=>{
  return(
    <div>
      <p>
        {props.name} {props.number}
      </p>
    </div>
    )
}

const Total=(props)=>{
  return(
    <div>
      <p>
        {props.name} {props.number}
      </p>
    </div>
  )
}

const App=()=> {
  const course={
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total name1={course.parts} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
