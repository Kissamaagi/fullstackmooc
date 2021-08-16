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
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      {courses.map(course => {
        return (
          <>
          <Header key={course.id} name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
          </>
        )}  
      )}
    </div>
  )
}

export default Course;