document.getElementById("contact-form").addEventListener("submit", function (event) {
  alert("Thank you for your message, Venkat! 🚀");
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from 'public'
app.use(express.static('public'));

// Resume download route
app.get('/download-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'FAANGPath_Simple_Template (1).pdf');
  res.download(resumePath, 'Venkat_Kota_Resume.pdf'); // Rename for user-friendly download
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});