import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import formRoutes from "./routes/formRoutes.ts";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", formRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});