// Elite PG Training App
// Version 1.0

document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startWorkout");

    if (startButton) {

        startButton.addEventListener("click", () => {

            alert("🏀 Let's get to work!\n\nToday's Elite PG workout is ready.");

            localStorage.setItem("lastWorkout", new Date().toLocaleDateString());

        });

    }

    updateProgress();

});

function updateProgress() {

    const streakElement = document.querySelectorAll("p")[0];

    const lastWorkout = localStorage.getItem("lastWorkout");

    if (lastWorkout) {

        streakElement.textContent =
            "Workout Streak: 1 Day";

    }

}

function saveWorkout() {

    localStorage.setItem("lastWorkout", new Date().toLocaleDateString());

}

function resetWorkout() {

    localStorage.removeItem("lastWorkout");

    location.reload();

}
