const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "build")));

// Serve any other route as index.html
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});