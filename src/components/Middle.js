import Message from './Message.js'
const Middle = ({messages, setMessages, inputText,
  setInputText}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages([
      ...messages,
      {
        id: Math.random() * 200,
        text: inputText
      }
    ])
    setInputText("")
  }
  return (
    <section className="middle-cont" style={{
      display: "flex", 
      alignItems: "flex-end"
    }}>
      {messages.map(message => {
       <Message 
        text={message.text} 
        key={message.id} 
       />
      })}
      <form onSubmit={handleSubmit} style={{width: "100%", marginRight: "2em"}}>
        <input value={inputText} onChange={handleInputText} style={{
          width: "100%",
          borderSizing: "border-box",
          padding: "1em",
          backgroundColor: "#41444A",
          borderRadius: "10px",
          outline: "none",
          border: "none",
          color: "#DBDCDD",
          fontSize: "1em"
          }} type="text" placeholder='type to chat'>

          </input>
      </form>
    </section>
  )
}

export default Middle
