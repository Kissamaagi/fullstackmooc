import React from 'react'

const Header = (props) => <h1>{props.header}</h1>

const Content = (props) => {
  console.log(props.parts[1].name)
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => <p>{props.part} {props.exercises} </p>

const Total = (props) => {

  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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



  return (
    <div>
      <Header header={course} />

      <Content parts={parts} />

      <Total parts={parts}  />

    </div>
  )
}

export default App;
