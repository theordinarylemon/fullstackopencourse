const Header = ({course}) => {
  return (
    <div>
      <h1>
      {course.name}
      </h1>
    </div>
  )
}

const Part = ({course}) => {
  return (
    <div>
      <p>
      {course.parts[0].name} {course.parts[0].exercise}
      </p>
      <p>
      {course.parts[1].name} {course.parts[1].exercise}
      </p>
      <p>
      {course.parts[2].name} {course.parts[2].exercise}
      </p>
    </div>
  )
}

const Content = ({course}) => {
  return (
    <div>
      <Part course={course} />
    </div>
  )
}

const Total = ({course}) => {
  return (
    <div>
      <p>
        Number of exercises {course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercise: 10
        },
        {
          name: 'Using props to pass data',
          exercise: 7
        },
        {
          name: 'State of a component',
          exercise: 14
        }
      ]
    }

    return (
      <div>
        <Header course={course} />
        <Content course={course}/>
        <Total course={course} />
      </div>
    )

}

export default App