// training.js

document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const progressBar = document.getElementById("workoutProgress");
    const progressText = document.getElementById("progressText");

    // Load saved workout progress
    checkboxes.forEach((box, index) => {

        const saved = localStorage.getItem("trainingBox" + index);

        if (saved === "true") {
            box.checked = true;
        }

        box.addEventListener("change", saveWorkout);

    });

    updateWorkout();

    function saveWorkout() {

        let completed = 0;

        checkboxes.forEach((box, index) => {

            localStorage.setItem("trainingBox" + index, box.checked);

            if (box.checked) {
                completed++;
            }

        });

        const percent = Math.round((completed / checkboxes.length) * 100);

        // Save for Progress Page
        localStorage.setItem("workoutPercent", percent);

        updateWorkout();

        // Mark streak when workout is fully completed
        if (percent === 100 && typeof completeWorkout === "function") {
            completeWorkout();
        }

    }

    function updateWorkout() {

        const percent = Number(localStorage.getItem("workoutPercent")) || 0;

        if (progressBar) {
            progressBar.value = percent;
        }

        if (progressText) {
            progressText.textContent = percent + "% Complete";
        }

    }

});
