import React from 'react'

export class Home extends React.Component {
  render() {
    const numbers = Array.from({ length: 20 }, (x, i) => i)
    const listItems = numbers.map(num => <h1 key={num}>{num}</h1>)
    return (
      <>
        <ul>{listItems}</ul>
      </>
    )
  }
}
