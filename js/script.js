function updateVisitorCount() {
    let count = localStorage.getItem("visitorCount");
    if (!count) {
    count = 0;
    }
    count = parseInt(count) + 1;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;
}

updateVisitorCount();

function updateDateTime() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("hours-minutes").innerText = `${hours}:${minutes}`;
    
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("seconds").innerText = seconds;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('fr-FR', options);
    document.getElementById("date").innerText = date;
}

setInterval(updateDateTime, 1000);
updateDateTime();
