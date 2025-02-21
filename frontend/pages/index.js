import { useState } from "react";
import InputForm from "../components/InputForm";
import Response from "../components/Response";

export default function Home() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div className="container">
      <h1>College API</h1>
      <InputForm setResponseData={setResponseData} />
      {responseData && <Response data={responseData} />}
    </div>
  );
}
