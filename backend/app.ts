import express from "express";
import cors from "cors";
import database from "./database";

// Helper function to test "loading spinners" in React
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/assignments", async (req, res) => {
  await sleep(3000);
  res.json(database.assignments);
});

app.post("/assignments/:id/delete", async (req, res) => {
  // TODO: finish implementing this function
  await sleep(3000);
  const id = req.params.id;
  console.log(id);
  res.json({ test: "you hit delete" });
});

app.post("/assignments/:id/toggle", async (req, res) => {
  // TODO: finish implementing this function
  await sleep(3000);
  const id = req.params.id;
  console.log(id);
  res.json({ test: "you toggled complete" });
});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
