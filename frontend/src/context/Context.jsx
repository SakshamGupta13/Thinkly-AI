import { createContext, useState } from "react";
import sendGroqPrompt from "../config/groq";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");


  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {

    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt != undefined){
      response = await sendGroqPrompt(prompt);
      setRecentPrompt(prompt);
    }else{
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await sendGroqPrompt(input);
    }


    setResultData(response);
    console.log("AI response:", response);

    setInput("");
    setLoading(false);
  
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;









  // // SAME CODE BUT WITH TRY AND CATCH BLOCK  // //

// import { createContext, useState } from "react";
// import sendGroqPrompt from "../config/groq";

// export const Context = createContext(null);

// const ContextProvider = ({ children }) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompt, setPrevPrompt] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const onSent = async () => {
//     if (!input.trim()) return;

//     try {
//       setLoading(true);
//       setShowResult(true);
//       setRecentPrompt(input);
//       setPrevPrompt((prev) => [...prev, input]);

//       const response = await sendGroqPrompt(input);

//       setResultData(response);
//       console.log("AI response:", response);

//       setInput("");
//     } catch (error) {
//       console.error(error);
//       setResultData("Error fetching response");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const contextValue = {
//     input,
//     setInput,
//     recentPrompt,
//     setRecentPrompt,
//     prevPrompt,
//     setPrevPrompt,
//     showResult,
//     loading,
//     resultData,
//     onSent,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;







         // //  BACKEND CODE  // //


// import { createContext, useState } from "react";

// export const Context = createContext(null);

// const ContextProvider = ({ children }) => {

//   // 🔹 STATES
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompt, setPrevPrompt] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   // 🔹 SEND PROMPT TO BACKEND
//   const onSent = async () => {
//     if (!input.trim()) return;

//     try {
//       setLoading(true);
//       setShowResult(true);
//       setRecentPrompt(input);
//       setPrevPrompt((prev) => [...prev, input]);

//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: input }),
//       });

//       const data = await res.json();
//       setResultData(data.response || "No response");
//       console.log("response : ", data.response);
//       setInput("");
//     } catch (error) {
//       console.error("Backend error:", error);
//       setResultData("Error fetching response");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 CONTEXT VALUE
//   const contextValue = {
//     input,
//     setInput,
//     recentPrompt,
//     setRecentPrompt,
//     prevPrompt,
//     setPrevPrompt,
//     showResult,
//     loading,
//     resultData,
//     onSent,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;