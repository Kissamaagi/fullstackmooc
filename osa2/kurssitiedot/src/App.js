import React from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />)
      }
    </div>
  )
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Total = ({parts}) => {
  const total = parts.reduce( (s, part) => {
    return s + part.exercises
  }, 0)

  return (
    <p>Number of exercises: {total}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'test tets test',
        exercises: 5,
        id: 5
      }, 
      {
        name: 'hell',
        exercises: 666,
        id: 6
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
