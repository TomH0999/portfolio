
// Fonction pour mettre à jour le compteur de visiteurs
function updateVisitorCount() {
    let count = localStorage.getItem("visitorCount");
    if (!count) {
    count = 0;
    }
    count = parseInt(count) + 1;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;
}

// Appelle la fonction pour mettre à jour le compteur dès que la page se charge
updateVisitorCount();

// Fonction pour afficher l'heure et la date actuelles
function updateDateTime() {
    const now = new Date();
     
    // Format des heures et minutes
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("hours-minutes").innerText = `${hours}:${minutes}`;
    
    // Format des secondes
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("seconds").innerText = seconds;
    
    // Format de la date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('fr-FR', options);
    document.getElementById("date").innerText = date;
}

// Met à jour l'heure toutes les secondes
setInterval(updateDateTime, 1000);
updateDateTime();
