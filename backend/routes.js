const express = require("express");
const router = express.Router();

router.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

router.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input format" });
    }

    // Extract numbers and alphabets
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => /^[A-Za-z]$/.test(item));

    // Determine the highest alphabet (case insensitive)
    const highestAlphabet =
      alphabets.length > 0
        ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]]
        : [];

    // Return structured response
    res.status(200).json({
      is_success: true,
      user_id: "akansha_sonker_2210023",
      email: "akansha@xyz.com",
      roll_number: "ABCD123",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
