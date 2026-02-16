// ================= MEGA MENU LOGIC =================

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("megaMenu");

    // Add transition effect
    menu.style.transition = "opacity 0.3s ease";
    menu.style.opacity = 0;
});

function toggleMenu() {
    const menu = document.getElementById("megaMenu");

    if (menu.style.display === "block") {
        // Fade out
        menu.style.opacity = 0;
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
        document.body.style.overflow = "auto";
    } else {
        // Show + fade in
        menu.style.display = "block";
        setTimeout(() => {
            menu.style.opacity = 1;
        }, 10);
        document.body.style.overflow = "hidden";
    }
}

// Close with ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const menu = document.getElementById("megaMenu");
        menu.style.opacity = 0;
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
        document.body.style.overflow = "auto";
    }
});
