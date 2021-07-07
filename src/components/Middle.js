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
      flexDirection: "column",
      justifyContent: "stretch",
      overflowY: "scroll",
      position: "relative"
    }}>
      {messages.map(message => 
       <Message 
        text={message.text} 
        key={message.id} 
       />
      )}
      <form onSubmit={handleSubmit} style={{
        width: "100%", 
        position: "absolute",
        left: "0",
        right: '0',
        bottom: '0',
        paddingLeft: "1em",
        backgroundColor: '#37393E',
        paddingRight: "1em",
        paddingBottom: "1em"
        }}>
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
