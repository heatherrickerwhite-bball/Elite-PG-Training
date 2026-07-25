const pages = {

home: `
<h2>🏠 Dashboard</h2>
<p>Welcome to Elite PG Training.</p>
`,

training: `
<h2>🏀 Training</h2>
<p>Today's workout will appear here.</p>
`,

progress: `
<h2>📈 Progress</h2>
<p>Your stats and improvements will appear here.</p>
`,

nutrition: `
<h2>🍎 Nutrition</h2>
<p>Meal plan and hydration tracker.</p>
`,

recruiting: `
<h2>🏆 Recruiting</h2>
<p>Coach contacts, camps, and college tracker.</p>
`

};

function showPage(page){
    document.getElementById("app-content").innerHTML = pages[page];
}

window.onload = function(){
    showPage("home");
}
