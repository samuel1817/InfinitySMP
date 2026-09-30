// ========================================
// MINECRAFT TOOLS - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for navigation buttons
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Tool card buttons
    const toolButtons = document.querySelectorAll(".tool-card button");

    toolButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            if (index === 0) {
                alert("⛏️ Crafting Calculator coming soon!");
            }

            if (index === 1) {
                alert("🎒 Inventory Builder coming soon!");
            }

            if (index === 2) {
                document.querySelector("#wiki").scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Wiki button
    const wikiButton = document.querySelector(".wiki-content button");

    if (wikiButton) {

        wikiButton.addEventListener("click", () => {

            alert("📖 Minecraft Wiki coming soon!");

        });

    }

});
