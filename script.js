// ========================================
// MINECRAFT TOOLS
// CRAFTING CALCULATOR
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // NAVIGATION
    // ========================================

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


    // ========================================
    // ELEMENTS
    // ========================================

    const craftingButton =
        document.getElementById("craftingButton");

    const craftingSection =
        document.getElementById("craftingCalculator");

    const toolsSection =
        document.getElementById("tools");

    const closeCrafting =
        document.getElementById("closeCrafting");

    const searchInput =
        document.getElementById("craftingSearch");

    const recipeName =
        document.getElementById("recipeName");

    const recipeEmoji =
        document.getElementById("recipeEmoji");

    const recipeDescription =
        document.getElementById("recipeDescription");

    const craftingGrid =
        document.querySelector(".crafting-grid");

    const materialsContainer =
        document.querySelector(".materials");


    // ========================================
    // SEARCH RESULTS CONTAINER
    // ========================================

    let searchResults =
        document.getElementById("searchResults");

    if (!searchResults && searchInput) {

        searchResults =
            document.createElement("div");

        searchResults.id =
            "searchResults";

        searchResults.style.marginTop =
            "10px";

        searchResults.style.display =
            "none";

        searchResults.style.background =
            "#101810";

        searchResults.style.border =
            "1px solid rgba(124,255,107,0.18)";

        searchResults.style.borderRadius =
            "10px";

        searchResults.style.overflow =
            "hidden";

        searchInput.parentElement.appendChild(
            searchResults
        );
    }


    // ========================================
    // RECIPE DATABASE
    // ========================================

    const recipes = {

        "diamond pickaxe": {
            name: "Diamond Pickaxe",
            emoji: "⛏️",
            description: "A powerful mining tool.",
            output: 1,

            grid: [
                "diamond",
                "diamond",
                "diamond",
                null,
                "stick",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Diamond": 3,
                "Stick": 2
            }
        },


        "iron pickaxe": {
            name: "Iron Pickaxe",
            emoji: "⛏️",
            description: "A reliable mining tool.",
            output: 1,

            grid: [
                "iron",
                "iron",
                "iron",
                null,
                "stick",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Iron Ingot": 3,
                "Stick": 2
            }
        },


        "netherite axe": {
            name: "Netherite Axe",
            emoji: "🪓",
            description: "A powerful axe upgraded with netherite.",
            output: 1,

            grid: [
                "netherite",
                "netherite",
                null,
                "netherite",
                "stick",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Netherite Ingot": 3,
                "Stick": 2
            }
        },


        "diamond axe": {
            name: "Diamond Axe",
            emoji: "🪓",
            description: "A strong axe made from diamonds.",
            output: 1,

            grid: [
                "diamond",
                "diamond",
                null,
                "diamond",
                "stick",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Diamond": 3,
                "Stick": 2
            }
        },


        "diamond sword": {
            name: "Diamond Sword",
            emoji: "⚔️",
            description: "A powerful weapon.",
            output: 1,

            grid: [
                null,
                "diamond",
                null,
                null,
                "diamond",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Diamond": 2,
                "Stick": 1
            }
        },


        "iron sword": {
            name: "Iron Sword",
            emoji: "⚔️",
            description: "A strong early-game weapon.",
            output: 1,

            grid: [
                null,
                "iron",
                null,
                null,
                "iron",
                null,
                null,
                "stick",
                null
            ],

            materials: {
                "Iron Ingot": 2,
                "Stick": 1
            }
        },


        "crafting table": {
            name: "Crafting Table",
            emoji: "🧱",
            description: "Used to craft many Minecraft items.",
            output: 1,

            grid: [
                "planks",
                "planks",
                null,
                "planks",
                "planks",
                null,
                null,
                null,
                null
            ],

            materials: {
                "Wooden Planks": 4
            }
        },


        "furnace": {
            name: "Furnace",
            emoji: "🔥",
            description: "Used for smelting and cooking.",
            output: 1,

            grid: [
                "stone",
                "stone",
                "stone",
                "stone",
                null,
                "stone",
                "stone",
                "stone",
                "stone"
            ],

            materials: {
                "Cobblestone": 8
            }
        },


        "chest": {
            name: "Chest",
            emoji: "📦",
            description: "Stores your Minecraft items.",
            output: 1,

            grid: [
                "planks",
                "planks",
                "planks",
                "planks",
                null,
                "planks",
                "planks",
                "planks",
                "planks"
            ],

            materials: {
                "Wooden Planks": 8
            }
        },


        "bucket": {
            name: "Bucket",
            emoji: "🪣",
            description: "Useful for carrying liquids.",
            output: 1,

            grid: [
                "iron",
                null,
                "iron",
                null,
                "iron",
                null,
                null,
                null,
                null
            ],

            materials: {
                "Iron Ingot": 3
            }
        },


        "torch": {
            name: "Torch",
            emoji: "🔥",
            description: "Provides light in dark areas.",
            output: 4,

            grid: [
                null,
                "coal",
                null,
                null,
                "stick",
                null,
                null,
                null,
                null
            ],

            materials: {
                "Coal": 1,
                "Stick": 1
            }
        },


        "stick": {
            name: "Stick",
            emoji: "🪵",
            description: "A basic crafting material.",
            output: 4,

            grid: [
                "planks",
                null,
                null,
                "planks",
                null,
                null,
                null,
                null,
                null
            ],

            materials: {
                "Wooden Planks": 2
            }
        },


        "shield": {
            name: "Shield",
            emoji: "🛡️",
            description: "Protects you from attacks.",
            output: 1,

            grid: [
                "planks",
                "iron",
                "planks",
                "planks",
                "planks",
                "planks",
                null,
                "planks",
                null
            ],

            materials: {
                "Wooden Planks": 6,
                "Iron Ingot": 1
            }
        },


        "bow": {
            name: "Bow",
            emoji: "🏹",
            description: "A ranged weapon used with arrows.",
            output: 1,

            grid: [
                null,
                "stick",
                "string",
                "stick",
                null,
                "string",
                null,
                "stick",
                "string"
            ],

            materials: {
                "Stick": 3,
                "String": 3
            }
        }

    };


    // ========================================
    // ICONS
    // ========================================

    const materialIcons = {

        "Diamond": "💎",
        "Netherite Ingot": "🟪",
        "Iron Ingot": "🔩",
        "Stick": "🪵",
        "Wooden Planks": "🪵",
        "Cobblestone": "🪨",
        "Coal": "⚫",
        "String": "🧵"

    };


    const gridIcons = {

        diamond: "💎",
        netherite: "🟪",
        iron: "🔩",
        stick: "🪵",
        planks: "🪵",
        stone: "🪨",
        coal: "⚫",
        string: "🧵"

    };


    // ========================================
    // OPEN CRAFTING
    // ========================================

    if (craftingButton) {

        craftingButton.addEventListener("click", () => {

            craftingSection.classList.remove("hidden");

            craftingSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    // ========================================
    // CLOSE CRAFTING
    // ========================================

    if (closeCrafting) {

        closeCrafting.addEventListener("click", () => {

            craftingSection.classList.add("hidden");

            toolsSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    // ========================================
    // CLEAR RECIPE
    // ========================================

    function clearRecipe() {

        recipeName.textContent =
            "Search for an item";

        recipeEmoji.textContent =
            "🔎";

        recipeDescription.textContent =
            "Type an item name above to find its recipe.";


        // IMPORTANT:
        // Completely empty crafting grid

        if (craftingGrid) {

            craftingGrid.innerHTML = "";

            for (let i = 0; i < 9; i++) {

                const slot =
                    document.createElement("div");

                slot.textContent = "";

                craftingGrid.appendChild(slot);

            }

        }


        if (materialsContainer) {

            materialsContainer.innerHTML = `
                <h3>MATERIALS</h3>
            `;

        }

    }


    // ========================================
    // SHOW RECIPE
    // ========================================

    function showRecipe(key) {

        const recipe = recipes[key];

        if (!recipe) {
            clearRecipe();
            return;
        }


        recipeName.textContent =
            recipe.name;

        recipeEmoji.textContent =
            recipe.emoji;

        recipeDescription.textContent =
            recipe.description;


        // ========================================
        // GRID
        // ========================================

        if (craftingGrid) {

            craftingGrid.innerHTML = "";

            recipe.grid.forEach(item => {

                const slot =
                    document.createElement("div");

                // EMPTY SLOT = NOTHING
                if (item) {

                    slot.textContent =
                        gridIcons[item] || "";

                }

                craftingGrid.appendChild(slot);

            });

        }


        // ========================================
        // MATERIALS
        // ========================================

        if (materialsContainer) {

            materialsContainer.innerHTML = `
                <h3>MATERIALS</h3>
            `;


            Object.entries(recipe.materials)
                .forEach(([material, amount]) => {

                    const row =
                        document.createElement("div");

                    row.className =
                        "material";


                    const icon =
                        materialIcons[material] || "📦";


                    row.innerHTML = `
                        <span>
                            ${icon} ${material}
                        </span>

                        <strong>
                            ${amount}
                        </strong>
                    `;


                    materialsContainer.appendChild(row);

                });

        }

    }


    // ========================================
    // SEARCH RESULTS
    // ========================================

    function showSearchResults(value) {

        const search =
            value
                .toLowerCase()
                .trim();


        if (!search) {

            searchResults.innerHTML = "";

            searchResults.style.display =
                "none";

            clearRecipe();

            return;

        }


        const matches =
            Object.keys(recipes)
                .filter(key =>
                    key.includes(search)
                );


        searchResults.innerHTML = "";

        searchResults.style.display =
            "block";


        if (matches.length === 0) {

            searchResults.innerHTML = `
                <div style="
                    padding:18px;
                    color:#777;
                ">
                    No items found
                </div>
            `;

            clearRecipe();

            return;

        }


        // ========================================
        // CREATE RESULTS
        // ========================================

        matches.forEach(key => {

            const recipe =
                recipes[key];


            const result =
                document.createElement("button");

            result.type =
                "button";

            result.style.width =
                "100%";

            result.style.padding =
                "15px 18px";

            result.style.border =
                "none";

            result.style.borderBottom =
                "1px solid rgba(255,255,255,0.05)";

            result.style.background =
                "transparent";

            result.style.color =
                "white";

            result.style.textAlign =
                "left";

            result.style.cursor =
                "pointer";

            result.style.fontSize =
                "15px";


            result.innerHTML = `
                <span style="
                    font-size:24px;
                    margin-right:12px;
                ">
                    ${recipe.emoji}
                </span>

                <strong>
                    ${recipe.name}
                </strong>
            `;


            result.addEventListener("mouseenter", () => {

                result.style.background =
                    "rgba(124,255,107,0.08)";

            });


            result.addEventListener("mouseleave", () => {

                result.style.background =
                    "transparent";

            });


            result.addEventListener("click", () => {

                searchInput.value =
                    recipe.name;

                showRecipe(key);

                searchResults.innerHTML = "";

                searchResults.style.display =
                    "none";

            });


            searchResults.appendChild(result);

        });

    }


    // ========================================
    // SEARCH INPUT
    // ========================================

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            showSearchResults(
                searchInput.value
            );

        });

    }


    // ========================================
    // INITIAL STATE
    // ========================================

    // DON'T SHOW DIAMOND PICKAXE
    // UNTIL THE USER SEARCHES.

    clearRecipe();

});
