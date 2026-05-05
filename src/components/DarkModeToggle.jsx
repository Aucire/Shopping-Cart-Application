import React from 'react'

const DarkModeToggle = ({Dark,setDark}) => {
  // TODO: Implement dark mode toggle logic
  const handleClick=()=>{
    setDark(!Dark)
  }
  return (
    <button onClick={handleClick}>{Dark?"Toggle Light Mode":"Toggle Dark Mode"} {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
