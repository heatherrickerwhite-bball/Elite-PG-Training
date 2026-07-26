// progress.js

document.addEventListener("DOMContentLoaded", () => {

    // Load saved values or use defaults
    let workout = Number(localStorage.getItem("workoutPercent")) || 0;
    let makes = Number(localStorage.getItem("makes")) || 0;
    let attempts = Number(localStorage.getItem("attempts")) || 0;
    let three = Number(localStorage.getItem("threePercent")) || 0;
    let ft = Number(localStorage.getItem("ftPercent")) || 0;

    let pushups = Number(localStorage.getItem("pushups")) || 0;
    let squats = Number(localStorage.getItem("squats")) || 0;
    let vertical = localStorage.getItem("vertical") || "--";

    let sprint = localStorage.getItem("sprint") || "--";
    let lane = localStorage.getItem("lane") || "--";

    let meals = localStorage.getItem("meals") || "0 / 7";
    let protein = localStorage.getItem("protein") || "0 g";
    let water = localStorage.getItem("water") || "0 / 8 Bottles";

    let sleep = localStorage.getItem("sleep") || "0 Hours";
    let stretch = localStorage.getItem("stretch") || "❌";

    let schools = Number(localStorage.getItem("schools")) || 0;
    let replies = Number(localStorage.getItem("replies")) || 0;
    let visits = Number(localStorage.getItem("visits")) || 0;
    let offers = Number(localStorage.getItem("offers")) || 0;

    let streak = Number(localStorage.getItem("dailyStreak")) || 0;

    // Workout Progress
    document.getElementById("workoutBar").style.width = workout + "%";
    document.getElementById("workoutPercent").textContent = workout + "%";

    // Shooting
    document.getElementById("makes").textContent = makes;
    document.getElementById("attempts").textContent = attempts;

    let fg = attempts > 0 ? Math.round((makes / attempts) * 100) : 0;
    document.getElementById("fg").textContent = fg + "%";

    document.getElementById("three").textContent = three + "%";
    document.getElementById("ft").textContent = ft + "%";

    // Strength
    document.getElementById("pushups").textContent = pushups;
    document.getElementById("squats").textContent = squats;
    document.getElementById("vertical").textContent = vertical;

    // Speed
    document.getElementById("sprint").textContent = sprint;
    document.getElementById("lane").textContent = lane;

    // Nutrition
    document.getElementById("meals").textContent = meals;
    document.getElementById("protein").textContent = protein;
    document.getElementById("water").textContent = water;

    // Recovery
    document.getElementById("sleep").textContent = sleep;
    document.getElementById("stretch").textContent = stretch;

    // Recruiting
    document.getElementById("schools").textContent = schools;
    document.getElementById("replies").textContent = replies;
    document.getElementById("visits").textContent = visits;
    document.getElementById("offers").textContent = offers;

    // Streak
    document.getElementById("streak").textContent =
        streak + " Day" + (streak === 1 ? "" : "s");
});
