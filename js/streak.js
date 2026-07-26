// streak.js

document.addEventListener("DOMContentLoaded", () => {

    const streakElement = document.getElementById("streak");

    if (!streakElement) return;

    let streak = Number(localStorage.getItem("dailyStreak")) || 0;
    let lastCompleted = localStorage.getItem("lastCompletedDate");

    const today = new Date().toDateString();

    // Display current streak
    streakElement.textContent = `${streak} Day${streak === 1 ? "" : "s"}`;

    // Function to call when a workout is completed
    window.completeWorkout = function () {

        if (lastCompleted === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastCompleted === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }

        localStorage.setItem("dailyStreak", streak);
        localStorage.setItem("lastCompletedDate", today);

        streakElement.textContent = `${streak} Day${streak === 1 ? "" : "s"}`;

        if (streak === 7) {
            alert("🔥 7-Day Streak! Great work!");
        }

        if (streak === 30) {
            alert("🏆 30-Day Streak! Incredible consistency!");
        }

        if (streak === 100) {
            alert("💯 100-Day Streak! Elite dedication!");
        }
    };

});
