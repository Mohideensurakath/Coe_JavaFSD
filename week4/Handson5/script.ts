document.addEventListener("DOMContentLoaded", () => {
    loadRoutines();
    loadExercises();
});

type Routine = string;
type Exercise = string[];

let routines: Routine[] = JSON.parse(localStorage.getItem("routines") || "[]");
let exercises: Exercise = JSON.parse(localStorage.getItem("exercises") || "[]");

function addRoutine(): void {
    let routineName = (document.getElementById("routine-name") as HTMLInputElement).value.trim();
    if (!routineName) {
        alert("Please enter a routine name.");
        return;
    }

    routines.push(routineName);
    localStorage.setItem("routines", JSON.stringify(routines));
    (document.getElementById("routine-name") as HTMLInputElement).value = "";
    loadRoutines();
}

function loadRoutines(): void {
    let routineList = document.getElementById("routine-list") as HTMLUListElement;
    routineList.innerHTML = "";
    routines.forEach((routine, index) => {
        let li = document.createElement("li");
        li.textContent = routine;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteRoutine(index);

        li.appendChild(deleteBtn);
        routineList.appendChild(li);
    });
}

function deleteRoutine(index: number): void {
    routines.splice(index, 1);
    localStorage.setItem("routines", JSON.stringify(routines));
    loadRoutines();
}

function addExercise(): void {
    let exerciseName = (document.getElementById("exercise-name") as HTMLInputElement).value.trim();
    if (!exerciseName) {
        alert("Please enter an exercise name.");
        return;
    }

    exercises.push(exerciseName);
    localStorage.setItem("exercises", JSON.stringify(exercises));
    (document.getElementById("exercise-name") as HTMLInputElement).value = "";
    loadExercises();
}

function loadExercises(): void {
    let exerciseList = document.getElementById("exercise-list") as HTMLUListElement;
    exerciseList.innerHTML = "";
    exercises.forEach((exercise, index) => {
        let li = document.createElement("li");
        li.textContent = exercise;
        li.setAttribute("draggable", "true");
        li.classList.add("draggable");
        li.addEventListener("dragstart", dragStart);
        li.addEventListener("dragover", dragOver);
        li.addEventListener("drop", drop);
        exerciseList.appendChild(li);
    });
}

let draggedItem: HTMLLIElement | null = null;

function dragStart(event: DragEvent): void {
    draggedItem = event.target as HTMLLIElement;
}

function dragOver(event: DragEvent): void {
    event.preventDefault();
}

function drop(event: DragEvent): void {
    event.preventDefault();
    let list = document.getElementById("exercise-list") as HTMLUListElement;
    list.insertBefore(draggedItem as Node, event.target as Node);
}
