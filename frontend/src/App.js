import React, { useState } from "react";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const getChatResponse = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/getChatResponse",
        { userInput }
      );
      console.log(response)
      setChatResponse(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ChatGPT API Integration</h1>
      <div>
        <input type="text" value={userInput} onChange={handleUserInput} />
        <button onClick={getChatResponse}>   Submit</button>
      </div>
      <div>
        <h3>Chat Response:</h3>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}

export default App;
