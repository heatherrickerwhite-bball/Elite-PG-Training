function calculateFT(made, attempted) {
    if (attempted === 0) return 0;
    return Math.round((made / attempted) * 100);
}

function saveFTSession(made, attempted) {
    // Save today's free throw session
}

function updateDashboard() {
    // Refresh the Free Throw % card
}
