// ========================================
// MINECRAFT TOOLS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    /*
        NAVIGATION
    */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /*
        CRAFTING CALCULATOR
    */

    const craftingButton =
        document.getElementById("craftingButton");

    const craftingSection =
        document.getElementById("craftingCalculator");

    const toolsSection =
        document.getElementById("tools");

    const closeCrafting =
        document.getElementById("closeCrafting");


    if (craftingButton) {

        craftingButton.addEventListener("click", () => {

            craftingSection.classList.remove("hidden");

            craftingSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    if (closeCrafting) {

        closeCrafting.addEventListener("click", () => {

            craftingSection.classList.add("hidden");

            toolsSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /*
        CRAFTING SEARCH
    */

    const searchInput =
        document.getElementById("craftingSearch");

    const recipeName =
        document.getElementById("recipeName");

    const recipeEmoji =
        document.getElementById("recipeEmoji");

    const recipeDescription =
        document.getElementById("recipeDescription");


    const recipes = {

        "diamond pickaxe": {
            name: "Diamond Pickaxe",
            emoji: "⛏️",
            description: "A powerful mining tool."
        },

        "iron pickaxe": {
            name: "Iron Pickaxe",
            emoji: "⛏️",
            description: "A reliable mining tool."
        },

        "diamond sword": {
            name: "Diamond Sword",
            emoji: "⚔️",
            description: "A powerful weapon."
        },

        "iron sword": {
            name: "Iron Sword",
            emoji: "⚔️",
            description: "A strong early-game weapon."
        },

        "crafting table": {
            name: "Crafting Table",
            emoji: "🧱",
            description: "Used to craft many Minecraft items."
        },

        "furnace": {
            name: "Furnace",
            emoji: "🔥",
            description: "Used for smelting and cooking."
        },

        "chest": {
            name: "Chest",
            emoji: "📦",
            description: "Stores your Minecraft items."
        },

        "bucket": {
            name: "Bucket",
            emoji: "🪣",
            description: "Useful for carrying liquids."
        }

    };


    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const search =
                searchInput.value
                    .toLowerCase()
                    .trim();


            if (recipes[search]) {

                recipeName.textContent =
                    recipes[search].name;

                recipeEmoji.textContent =
                    recipes[search].emoji;

                recipeDescription.textContent =
                    recipes[search].description;

                return;
            }


            const match =
                Object.keys(recipes).find(item =>
                    item.includes(search)
                );


            if (match && search.length > 2) {

                recipeName.textContent =
                    recipes[match].name;

                recipeEmoji.textContent =
                    recipes[match].emoji;

                recipeDescription.textContent =
                    recipes[match].description;

            }

        });

    }

});
