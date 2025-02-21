const API_URL = "https://your-backend.onrender.com/bfhl";

export default async function apiRequest(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from server.");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { is_success: false, error: error.message };
  }
}
