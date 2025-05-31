
//basic express template 
const express = require('express');
const app = express();
const path = require('path');
dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
