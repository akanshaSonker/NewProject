
import { useState } from "react";
import apiRequest from "../utils/api";

export default function InputForm({ setResponseData }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on new submit

    try {
      const trimmedInput = input.trim();
      const jsonData = JSON.parse(trimmedInput);

      if (!jsonData.data || !Array.isArray(jsonData.data)) {
        throw new Error("Invalid JSON: 'data' key must be an array.");
      }

      const response = await apiRequest(jsonData);
      setResponseData(response);
    } catch (error) {
      setError("Invalid JSON format. Ensure proper syntax.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON input {"data": ["A", "B", "1"]}'
        rows={5}
        cols={40}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
