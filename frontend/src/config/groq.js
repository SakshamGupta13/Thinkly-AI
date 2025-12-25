const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const sendGroqPrompt = async (prompt) => {
  try {
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
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Groq API error:", data);
      throw new Error("Groq request failed");
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.error("groq.js error:", err);
    return "Error getting AI response";
  }
};

export default sendGroqPrompt;
