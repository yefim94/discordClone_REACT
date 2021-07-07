import { useState } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Plus } from './Plus.svg'
import { ReactComponent as Explore } from './Explore.svg' 
import '../index.css'
const Left = () => {

  return (
    <section className="left-cont">
    <div className="icons-cont">
      <div className="logo">
        <Logo width="40" ></Logo>
      </div> 
      <hr style={{
        backgroundColor: "#2D2F32",
        border: "none",
        height: "3px",
        borderRadius: "20px",
        width: "65%",
        marginTop: "0.7em",
      }}></hr>
      <img width="70" src="https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/0e/43/ca/0e43ca6f-1168-c8de-f0ae-64e7b9a968bd/source/200x200bb.jpg"></img>
     <div className="plus-icon">
        <Plus />
      </div>
      <div className="expl-icon">
       <Explore/>
      </div>
    </div>
  </section>
  )
}

export default Left
