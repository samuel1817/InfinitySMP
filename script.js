```javascript
const SERVER_IP = "infiniysmp.falix.gg";

const ipButton = document.getElementById("ipButton");
const playButton = document.getElementById("playButton");
const toast = document.getElementById("toast");


/* =========================
   COPY SERVER IP
========================= */

async function copyServerIP() {

    try {

        await navigator.clipboard.writeText(SERVER_IP);

        showToast("IP copied!");

    } catch (error) {

        const input = document.createElement("input");

        input.value = SERVER_IP;

        document.body.appendChild(input);

        input.select();

        document.execCommand("copy");

        input.remove();

        showToast("IP copied!");
    }
}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}


/* =========================
   IP BUTTON
========================= */

if (ipButton) {

    ipButton.addEventListener(
        "click",
        copyServerIP
    );

}


/* =========================
   PLAY BUTTON
========================= */

if (playButton) {

    playButton.addEventListener(
        "click",
        copyServerIP
    );

}


/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(8, 9, 13, 0.94)";

        } else {

            navbar.style.background =
                "rgba(8, 9, 13, 0.78)";

        }

    }
);


/* =========================
   CONSOLE
========================= */

console.log(
    "%c∞ INFINITY SMP",
    "font-size: 22px; font-weight: bold;"
);

console.log(
    "Server IP:",
    SERVER_IP
);
```
