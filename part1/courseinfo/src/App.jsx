const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.part1 + props.part2 + props.part3;
  
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises} />
    </div>
  )
}

export default App