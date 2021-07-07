const Message = ({text, key}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: "1em"
      }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOezN0489Ts6XhnL5a8PnMBmf1wmPIEt2Dnw&usqp=CAU" width="40" style={{
        borderRadius: "50%",
        marginRight: "1em"
      }}></img>
      <input defaultValue={text} style={{
        padding: "1em",
        borderRadius: "6px",
        backgroundColor: "#2F3136",
        color: "#fff",
        border: "none"
      }}></input>
    </div>
  )
}

export default Message
