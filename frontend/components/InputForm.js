import { useState } from "react";
import apiRequest from "../utils/api";

export default function InputForm({ setResponseData }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(input);
      const response = await apiRequest(jsonData);
      setResponseData(response);
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON input {"data": ["A", "B", "1"]}'
      />
      <button type="submit">Submit</button>
    </form>
  );
}
