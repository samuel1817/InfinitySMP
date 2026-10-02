/* =========================
   INFINITY SMP
   MAIN SCRIPT
========================= */


/* =========================
   SERVER IP
========================= */

const SERVER_IP = "infiniysmp.falix.gg";


/* =========================
   ELEMENTS
========================= */

const copyIp = document.getElementById("copyIp");
const copyIpLarge = document.getElementById("copyIpLarge");

const toast = document.getElementById("toast");

const playButton = document.getElementById("playButton");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const discordButton = document.getElementById("discordButton");


/* =========================
   COPY IP
========================= */

async function copyServerIp() {

    try {

        await navigator.clipboard.writeText(SERVER_IP);

        showToast("Server IP copied!");

    } catch (error) {

        const textArea = document.createElement("textarea");

        textArea.value = SERVER_IP;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        showToast("Server IP copied!");
    }
}


/* =========================
   TOAST
========================= */

let toastTimeout;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================
   COPY BUTTONS
========================= */

if (copyIp) {

    copyIp.addEventListener(
        "click",
        copyServerIp
    );

}


if (copyIpLarge) {

    copyIpLarge.addEventListener(
        "click",
        copyServerIp
    );

}


/* =========================
   PLAY NOW
========================= */

if (playButton) {

    playButton.addEventListener(
        "click",
        copyServerIp
    );

}


/* =========================
   MOBILE MENU
========================= */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("active");

        }
    );

}


/* =========================
   CLOSE MOBILE MENU
========================= */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================
   DISCORD
========================= */

if (discordButton) {

    discordButton.addEventListener(
        "click",
        event => {

            if (
                discordButton.getAttribute("href") === "#"
            ) {

                event.preventDefault();

                showToast(
                    "Discord link will be added soon!"
                );

            }

        }
    );

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(8, 9, 13, 0.92)";

        } else {

            navbar.style.background =
                "rgba(8, 9, 13, 0.72)";

        }

    }
);


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .rule, .server-card, .shop-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================
   CONSOLE
========================= */

console.log(
    "%c∞ INFINITY SMP",
    "font-size: 24px; font-weight: bold;"
);

console.log(
    "Server IP:",
    SERVER_IP
);
