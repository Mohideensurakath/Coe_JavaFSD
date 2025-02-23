document.addEventListener("DOMContentLoaded", loadRoutines);

function addRoutine() {
    let routineName = document.getElementById("routine-name").value.trim();
    if (routineName === "") {
        alert("Please enter a routine name.");
        return;
    }

    let routines = JSON.parse(localStorage.getItem("routines")) || [];
    routines.push(routineName);
    localStorage.setItem("routines", JSON.stringify(routines));

    document.getElementById("routine-name").value = "";
    loadRoutines();
}

function loadRoutines() {
    let routineList = document.getElementById("routine-list");
    routineList.innerHTML = "";

    let routines = JSON.parse(localStorage.getItem("routines")) || [];

    routines.forEach((routine, index) => {
        let li = document.createElement("li");
        li.textContent = routine;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteRoutine(index);
        };

        li.appendChild(deleteBtn);
        routineList.appendChild(li);
    });
}

function deleteRoutine(index) {
    let routines = JSON.parse(localStorage.getItem("routines")) || [];
    routines.splice(index, 1);
    localStorage.setItem("routines", JSON.stringify(routines));
    loadRoutines();
}
