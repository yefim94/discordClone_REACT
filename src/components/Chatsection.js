import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Chatsection = ({title, subTitle}) => {
  return (
    <div className="chat-cont">
      <div className="chat-top">
        <div>
          <span>{title}</span>
        </div>
      </div>
      <div className="chat-bottom">
        <div>
        <span>#</span>
        <span>{subTitle}</span>
        </div>
      </div>
    </div>
  )
}

export default Chatsection
