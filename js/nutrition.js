// nutrition.js

document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Load saved checkbox states
    checkboxes.forEach((box, index) => {
        const saved = localStorage.getItem("nutritionBox" + index);

        if (saved === "true") {
            box.checked = true;
        }

        box.addEventListener("change", saveNutrition);
    });

    updateNutrition();

    function saveNutrition() {

        let completed = 0;

        checkboxes.forEach((box, index) => {

            localStorage.setItem("nutritionBox" + index, box.checked);

            if (box.checked) {
                completed++;
            }

        });

        // Save Meals Completed
        localStorage.setItem("meals", completed + " / " + checkboxes.length);

        // Water Bottles (last 8 checkboxes)
        let water = 0;

        const waterBoxes = Array.from(checkboxes).slice(-8);

        waterBoxes.forEach(box => {
            if (box.checked) water++;
        });

        localStorage.setItem("water", water + " / 8 Bottles");

        // Simple Protein Estimate
        const protein = completed * 8;

        localStorage.setItem("protein", protein + " g");

        updateNutrition();

    }

    function updateNutrition() {

        const meals = localStorage.getItem("meals") || "0 / " + checkboxes.length;

        const protein = localStorage.getItem("protein") || "0 g";

        const water = localStorage.getItem("water") || "0 / 8 Bottles";

        const mealElement = document.getElementById("mealCount");
        const proteinElement = document.getElementById("proteinCount");
        const waterElement = document.getElementById("waterCount");

        if (mealElement) mealElement.textContent = meals;
        if (proteinElement) proteinElement.textContent = protein;
        if (waterElement) waterElement.textContent = water;

    }

});
