const today = new Date().toLocaleDateString("en-US", {
    weekday: "long"
});

const workout = workouts[today] || workouts["Monday"];

console.log(workout);
