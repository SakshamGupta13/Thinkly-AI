import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {

  const {input,setInput,onSent,recentPrompt,showResult,loading,resultData} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <a href="https://thinkly-ai.onrender.com/"><img src={assets.ai_icon} alt="" className='logo'/></a>
        <p className='thinkly'>Thinkly AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">

        {!showResult
        ?<>
          <div className="greet">
            <p><span>Hello, Saksham.</span></p>
            <p>How can I help you?</p>
          </div>

          <div className="cards">
            <div  onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")} className="card card1">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div onClick={() => onSent('Briefly summarize this concept: urban planning')} className="card card2">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div onClick={() => onSent("Brainstorn team bonding activities for our work retreat")} className="card card3">
              <p>Brainstorn team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div onClick={() => onSent('Vocabulary of the day')} className="card card4">
              <p>Improve the readibility of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>
        : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt=""/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.ai_icon} alt="" />
              {loading
              ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              
              :<div className="markdown"
                  dangerouslySetInnerHTML={{
                  __html: (resultData || "")
                  // Headings
                  .replace(/^### (.*$)/gim, "<h3>$1</h3>")
                  .replace(/^## (.*$)/gim, "<h2>$1</h2>")
                  .replace(/^# (.*$)/gim, "<h1>$1</h1>")
                  // Bold
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  // Italic
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  // Inline code
                  .replace(/`([^`]+)`/g, "<code>$1</code>")
                  // Bullet points
                  .replace(/^\s*-\s+(.*)/gm, "<li>$1</li>")
                  .replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>")
                  // Line breaks
                  .replace(/\n/g, "<br/>")
                  }}
                ></div>
              }
            </div>
          </div>
        }

        

        <div className="main-bottom">
          <div className="search-box">
            <input type="text"
              placeholder="Enter a prompt here.."
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