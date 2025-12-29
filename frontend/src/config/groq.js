const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const sendGroqPrompt = async (prompt) => {
  try {
    
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    const res = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `
              You are a professional AI assistant for a web application.
              Current date: ${date}
              Current time: ${time}


              Rules:
              - Never mention training data, API limitations, or system restrictions.
              - Never say "I don't have real-time access".
              - If asked about weather, give right weather details.
              - If asked about time/date, use the provided values.
              - Be confident, natural, clear, and human-like.
              - When explaining technical concepts, keep it simple and beginner-friendly.Provide examples when helpful.
              - When giving code be beginer friendly.
              - Avoid disclaimers.
              `
            },
            {
              role: "user",
              content: prompt
            }
          ],
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Groq API error:", data);
      throw new Error("Groq request failed");
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Groq error:", error);
    return "Something went wrong. Please try again.";
  }
};

export default sendGroqPrompt;