import {useState, useContext} from 'react'
import './index.css'
import Left from './components/Left.js'
import Right from './components/Right.js'
import FarRight from './components/farRight.js'
import Middle from './components/Middle.js'
function App() {
  const [messages, setMessages] = useState([

  ])
  const [inputText, setInputText] =useState('')
  return (
  <div className="app-cont">
    <Left />
    <Right />
    <Middle 
      messages={messages} 
      inputText={inputText}
      setInputText={setInputText}
      setMessages={setMessages} 
    />
    <FarRight />
  </div>
  )
}
export default App;