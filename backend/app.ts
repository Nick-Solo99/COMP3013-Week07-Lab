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

app.post("/assignments", async (req, res) => {
    await sleep(3000);
    const { task } = req.body;
    const newAssignment = {
        id: Math.random()*50000+database.assignments.length,
        task: task,
        completed: false,
    }
    database.assignments.push(newAssignment);
    res.status(200).json({ status: "post successful" });
});


app.delete("/assignments/:id/delete", async (req, res) => {
    await sleep(3000);
    const id = Number(req.params.id);
  database.assignments = database.assignments.filter(assignment => assignment.id !== id);
  res.status(200).json({ status: "delete successful" });
});

app.post("/assignments/:id/toggle", async (req, res) => {
    await sleep(3000);
    const id = Number(req.params.id);
  database.assignments = database.assignments.map(
      assignment =>
          assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
  );
  res.status(200).json({ status: "Toggle success" });
});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
