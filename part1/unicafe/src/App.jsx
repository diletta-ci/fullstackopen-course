import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = (props.good - props.bad) / (props.good + props.neutral + props.bad)
  const averageRounded = Math.round(average * 100) / 100
  const positive = (props.good / (props.good + props.neutral + props.bad)) * 100
  const positiveRounded = Math.round(positive * 100) / 100

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <tr>
            <td>average</td>
            <td>{averageRounded}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positiveRounded}</td>
          </tr>            
        </tbody>
      </table>
    </>
  )
}

const Button = ({handleClick, value, text}) => <button onClick={() => handleClick(value + 1)}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGood} value={good} text="good" />
      <Button handleClick={setNeutral} value={neutral} text="neutral" />
      <Button handleClick={setBad} value={bad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App