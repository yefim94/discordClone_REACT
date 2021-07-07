const Tag = ({imgUrl, Name, tagName}) => {
  return (
    <div>
      <h2 style={{
        color: "#8F9296",
        textTransform: "uppercase"
      }}>{tagName}</h2>
      <div style={{display: "flex", alignItems: "center", }}>
        <div className="ds">
          <img class="us-img-ca" style={{borderRadius: '50%'}} width="40" height="40" src={imgUrl}></img>
        </div>
        <div>
          <h3 style={{marginLeft: "1em", color: "white"}}>{Name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Tag
