import { TAssignment } from "../../interfaces";
import { Assignment } from "../Assignment";
import { getAssignments, deleteAssignment, toggleAssignment } from "../../controllers/AssignmentController";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Assignments({ assignments, setAssignments, setLoading }: Props) {
  const handleDeleteButton = async (id: string) => {
      setLoading(true);
      await deleteAssignment(id);
      setAssignments(await getAssignments());
      setLoading(false);
  };
  const handleCompletedTask = async (id: string) => {
    // toggle the completion state on the server
      setLoading(true);
      await toggleAssignment(id);
      setAssignments(await getAssignments());
      setLoading(false);
  };
  const countCompletedTasks = () => {
    return assignments.filter((assignment) => assignment.completed).length;
  };
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {countCompletedTasks()} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            handleDeleteButton={handleDeleteButton}
            handleCompletedTask={handleCompletedTask}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
