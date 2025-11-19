
function toggleMenu() {
    const nav = document.querySelector(".nav-items"); // Das UL-Menü auswählen
    nav.classList.toggle("nav-active"); // Klasse hinzufügen/entfernen
}

function toggleDropdown(event) {
    event.preventDefault(); // Verhindert, dass der Link direkt etwas macht
    const parent = event.target.closest(".dropdown-container");
    parent.classList.toggle("drop-active");
}