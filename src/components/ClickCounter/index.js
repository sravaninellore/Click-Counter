import React, {useState} from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="click-counter">
      <h2>The Button has been clicked {count} times</h2>
      <p>Click the button to increase the count</p>
      <button className="click-button" onClick={handleClick}>
        Click Me!
      </button>
      <p className="count">The button has been clicked {count} times</p>
    </div>
  )
}

export default ClickCounter
