// workout.js

document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll(".workout-card input[type='checkbox']");
    const progressBar = document.getElementById("workoutProgress");
    const progressText = document.getElementById("progressText");

    function updateWorkout() {

        let completed = 0;

        checkboxes.forEach((box, index) => {

            if (localStorage.getItem("workoutBox" + index) === "true") {
                box.checked = true;
            }

            if (box.checked) {
                completed++;
            }

        });

        const percent = checkboxes.length
            ? Math.round((completed / checkboxes.length) * 100)
            : 0;

        if (progressBar) {
            progressBar.value = percent;
        }

        if (progressText) {
            progressText.textContent = percent + "% Complete";
        }

        localStorage.setItem("workoutPercent", percent);

        // Trigger streak once when workout reaches 100%
        if (percent === 100 && localStorage.getItem("workoutCompletedToday") !== new Date().toDateString()) {

            if (typeof completeWorkout === "function") {
                completeWorkout();
            }

            localStorage.setItem(
                "workoutCompletedToday",
                new Date().toDateString()
            );
        }

    }

    checkboxes.forEach((box, index) => {

        box.addEventListener("change", () => {

            localStorage.setItem("workoutBox" + index, box.checked);

            updateWorkout();

        });

    });

    updateWorkout();

});
