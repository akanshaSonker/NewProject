const API_URL = "https://your-backend-url.com/bfhl";

export default async function apiRequest(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
}
