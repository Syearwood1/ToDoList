import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [text, settext] = useState('')
  const [list, setList] = useState([])
  const task = { //creates object called task
    text: text,
    completed: false,
  };
  
  const textAdd = () => {
    if(text.trim() !== ''){ //If text isnt blank continue
      setList([...list, task]); //add text(String) to list(array) with all current texts
      settext('') //Make text blank again
    }
  }
  const clearList = () =>{
    setList([])
  }

  return (
    <>
      <h1>ToDoList</h1>
      <div>
      <input 
        type='text' 
        placeholder='Enter a text'
        value={text}
        onChange={(e)=>settext(e.target.value)}
        />
      <button onClick={textAdd}>+</button>
      <p>Our Current text: {text} </p>
      <ul>
        {list.map((item, index)=>(  //map iterated through all elements of an array
          <li
            key={index}
            >
              {item.text}
              </li> // List Item.text (string)
        ))}
      </ul>
      <button onClick={clearList}>
      Clear List
      </button>
      </div>
      
      
    </>
  )
}

export default App
