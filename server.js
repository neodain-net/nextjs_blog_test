import express from "express";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

// Custom API route
app.get("/api/post", (req, res) => {
  // Implement your MongoDB data retrieval logic here
  // Send the response back to the client
  res.json({ message: "Data from MongoDB" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
