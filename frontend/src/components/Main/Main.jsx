import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {input,setInput,onSent,recentPrompt,showResult,loading,resultData} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <a href="https://thinkly-ai.onrender.com/">
          <img src="/src/assets/ai.png" alt="" className='logo'/>
        </a>
        <p className='thinkly'>Thinkly AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Saksham.</span></p>
          <p>How can I help you?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorn team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readibility of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text"
              placeholder="Enter a prompt here."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSent()}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={onSent}/>
            </div>
          </div>

          <p className='bottom-info'>
            AI responses may be inaccurate. Please verify important information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main;