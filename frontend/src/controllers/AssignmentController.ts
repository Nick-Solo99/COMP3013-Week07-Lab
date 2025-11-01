import {BASE_URL} from "../helpers/constants";

export async function createAssignment(task: string) {
    return fetch(`${BASE_URL}/assignments`, {
        method: "POST",
        body: JSON.stringify({task}),
        headers: { "Content-Type": "application/json" },
    })
}

export async function getAssignments() {
    return (await fetch(`${BASE_URL}/assignments`, {})).json();
}

export function toggleAssignment(id: string) {
    return fetch (`${BASE_URL}/assignments/${id}/toggle`, {
        method: "POST",
        body: JSON.stringify({id}),
        headers: { "Content-Type": "application/json" },
    })
}

export function deleteAssignment(id: string) {
    return fetch(`${BASE_URL}/assignments/${id}/delete`, {
        method: "DELETE",
        body: JSON.stringify({id}),
        headers: { "Content-Type": "application/json" },
    })
}