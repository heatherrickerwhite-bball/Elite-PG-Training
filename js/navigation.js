const pages = {

home: `
<div class="card">

<h2>Welcome Jameson</h2>

<p>Ready to become an Elite Point Guard?</p>

<button onclick="showPage('training')">

Start Today's Workout

</button>

</div>
`,

training: `
<div class="card">

<h2>Today's Workout</h2>

<label><input type="checkbox"> Dynamic Warm-Up</label><br><br>

<label><input type="checkbox"> Ball Handling</label><br><br>

<label><input type="checkbox"> Shooting</label><br><br>

<label><input type="checkbox"> Finishing</label><br><br>

<label><input type="checkbox"> Strength</label><br><br>

<label><input type="checkbox"> Conditioning</label>

</div>
`,

progress: `
<div class="card">

<h2>Progress</h2>

<p>Workout Streak: 0</p>

<p>FG%: --</p>

<p>3PT%: --</p>

<p>Vertical Jump: --</p>

</div>
`,

nutrition: `
<div class="card">

<h2>Nutrition</h2>

<p>💧 Water Goal</p>

<p>🥣 Breakfast</p>

<p>🥪 Lunch</p>

<p>🍗 Dinner</p>

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

</ul>

</div>
`

};

function showPage(page){

document.getElementById("app").innerHTML = pages[page];

}

showPage("home");