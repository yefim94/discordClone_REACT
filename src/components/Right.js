import Chatsection from './Chatsection.js'
const Right = () => {
  return (
    <section className="left-2-cont" style={{
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: '0',
        right: "0",
        left: '0',
        padding: "2em",
        zIndex: "100",
        borderBottom: "1px solid #232428",
        backgroundColor: "#2F3136",
        color: "white",
        fontWeight: "650",
        width: "112px"
      }}
      >My SERVER</div>
      <div style={{
        height: "100%",
        overflowY: "scroll",
        marginTop: "90px"
      }}>
      <Chatsection 
        title="chat-1"
        subTitle="🚨live🚨"
      />
      <Chatsection
        title="chat-2"
        subTitle="demo"
      />
      <Chatsection 
        title="chat-3"
        subTitle="😎later😎"
      />
      <Chatsection 
        title="chat-4"
        subTitle="topics"  
      />
      </div>
      <div style={{
        position: "absolute",
        bottom: '0',
        zIndex: "100",
        borderTop: "1px solid #232428",
        backgroundColor: "#27292D",
        color: "white",
        fontWeight: "650",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0em"
      }}
      >
        <img style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          marginLeft: "1em"
        }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOezN0489Ts6XhnL5a8PnMBmf1wmPIEt2Dnw&usqp=CAU'></img>
        <div style={{marginLeft: "1em"}}>
        <h3 style={{transform: 'translateY(15px)'}}>Yefim</h3>
        <h4 style={{color: "#B4B6B9"}}>#43434</h4>
        </div>
      </div>
    </section>
  )
}

export default Right
