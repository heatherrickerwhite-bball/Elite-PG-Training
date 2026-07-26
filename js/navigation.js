// Elite PG Training Navigation
// Version 1.1

const pageFiles = {
    dashboard: "pages/dashboard.html",
    training: "pages/training.html",
    progress: "pages/progress.html",
    nutrition: "pages/nutrition.html"
};

async function showPage(page) {
    const app = document.getElementById("app");

    if (!pageFiles[page]) {
        app.innerHTML = `
            <div class="card">
                <h2>Page Not Found</h2>
                <p>The page "${page}" doesn't exist.</p>
            </div>
        `;
        return;
    }

    try {
        const response = await fetch(pageFiles[page]);

        if (!response.ok) {
            throw new Error("Unable to load page.");
        }

        const html = await response.text();
        app.innerHTML = html;

        // Highlight active navigation button
        document.querySelectorAll(".bottom-nav button").forEach(button => {
            button.classList.remove("active");
        });

        const activeButton = document.querySelector(
            `.bottom-nav button[data-page="${page}"]`
        );

        if (activeButton) {
            activeButton.classList.add("active");
        }

    } catch (error) {
        app.innerHTML = `
            <div class="card">
                <h2>Error</h2>
                <p>Could not load ${page}.</p>
            </div>
        `;
        console.error(error);
    }
}

// Load the dashboard when the app starts
document.addEventListener("DOMContentLoaded", () => {
    showPage("dashboard");
});
