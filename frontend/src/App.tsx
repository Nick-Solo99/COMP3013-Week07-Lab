import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { getAssignments } from "./controllers/AssignmentController";
import {useEffect, useState} from "react";
import { TAssignment } from "./interfaces";
import { CircleLoader } from "react-spinners"

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]);
  const [loading, setLoading] = useState(false);

  async function refresh() {
      setLoading(true);
      setAssignments(await getAssignments())
      setLoading(false);
  }

  useEffect(() => {
      refresh()
  }, [])

  return (
    <>
      <Header setLoading={setLoading} setAssignments={setAssignments} />
      <Assignments assignments={assignments} setAssignments={setAssignments} setLoading={setLoading} />
        <CircleLoader
            loading={loading}
            color="#5626ae"
            cssOverride={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        />
    </>
  );
}

export default App;
