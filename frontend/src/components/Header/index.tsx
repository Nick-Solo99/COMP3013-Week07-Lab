import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, trim } from "../../helpers/stringHelpers";
import { useState } from "react";
import {createAssignment, getAssignments} from "../../controllers/AssignmentController";
import {TAssignment} from "../../interfaces";
//import { TAssignment } from "../../interfaces";

type Props = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};

export function Header({setLoading, setAssignments}: Props) {
  const [assignment, setAssignment] = useState("");
  const handleCreateButton = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await createAssignment(assignment);
    setAssignments(await getAssignments());
    setAssignment("");
    setLoading(false);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateButton}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(e) => setAssignment(trim(e.target.value))}
        />
        <button type="submit" disabled={!assignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
