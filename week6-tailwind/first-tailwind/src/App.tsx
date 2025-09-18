import React from 'react'
import Button from './components/button'
import './App.css'

function App(){
  const handleButtonClick = (type: string) => {
    alert(`${type} button clicked!`)
  }
  return (
    <div>
      <div className='space-x-2'>
        <Button variant='primary' size='sm' onClick={() => handleButtonClick('primary')}>Primary SM</Button>
        <Button variant='primary' size='md' onClick={() => handleButtonClick('primary')}>Primary MD</Button>
        <Button variant='primary' size='lg' onClick={() => handleButtonClick('primary')}>Primary LG</Button>
      </div>
      <div className='space-x-2 mt-4'>
        <Button variant='secondary' size='sm' onClick={() => handleButtonClick('secondary')}>secondary SM</Button>
        <Button variant='secondary' size='md' onClick={() => handleButtonClick('secondary')}>secondary MD</Button>
      </div>
    </div>
)
}
export default App;


