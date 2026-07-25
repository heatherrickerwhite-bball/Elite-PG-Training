const pages = {

home: `

<div class="card profile">

<img src="assets/jameson.jpg" class="profile-photo">

<h2>Jameson White</h2>

<p>Elite Point Guard Development</p>

</div>

<div class="card">

<h2>Today's Goal</h2>

<p>Complete every workout section.</p>

<button onclick="showPage('training')">
Start Training
</button>

</div>

<div class="card">

<h2>Today's Progress</h2>

<p>🔥 Workout Streak: 0</p>

<p>🏀 Shots Made: 0</p>

<p>💧 Water: 0 / 100 oz</p>

</div>

`
<div class="card">
<h2>🏀 Elite PG Training</h2>

<p><strong>Player:</strong> Jameson White</p>

<p>Welcome back.</p>

<button id="startWorkout">
Start Today's Workout
</button>

</div>
`,

training: `
<div class="card">

<h2>Today's Workout</h2>

<label><input type="checkbox"> Dynamic Warm-Up</label><br>
<label><input type="checkbox"> Ball Handling</label><br>
<label><input type="checkbox"> Shooting</label><br>
<label><input type="checkbox"> Finishing</label><br>
<label><input type="checkbox"> Strength</label><br>
<label><input type="checkbox"> Conditioning</label><br>
<label><input type="checkbox"> Recovery</label>

</div>
`,

progress: `
<div class="card">

<h2>Progress</h2>

<p>Workout Streak: 0 Days</p>

<p>FG%: --</p>

<p>3PT%: --</p>

<p>Free Throws: --</p>

<p>Vertical: --</p>

</div>
`,

nutrition: `
<div class="card">

<h2>Nutrition</h2>

<label><input type="checkbox"> Breakfast</label><br>
<label><input type="checkbox"> Morning Snack</label><br>
<label><input type="checkbox"> Lunch</label><br>
<label><input type="checkbox"> Pre-Practice Snack</label><br>
<label><input type="checkbox"> Post-Practice Recovery</label><br>
<label><input type="checkbox"> Dinner</label><br>
<label><input type="checkbox"> Water Goal</label>

</div>
`,

recruiting: `
<div class="card">

<h2>Recruiting</h2>

<ul>
<li>Coach Contacts</li>
<li>Email Tracker</li>
<li>Camp Calendar</li>
<li>Highlight Videos</li>
<li>Questionnaires</li>
</ul>

</div>
`

};

function showPage(page){
    document.getElementById("app-content").innerHTML = pages[page];
}

window.onload = () => showPage("home");
