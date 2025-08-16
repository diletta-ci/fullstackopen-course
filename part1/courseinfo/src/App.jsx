const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={content[0].part} exercises={content[0].exercises} />
      <Content part={content[1].part} exercises={content[1].exercises} />
      <Content part={content[2].part} exercises={content[2].exercises} />   
      <Total total={content} />
    </div>
  )
}

export default App