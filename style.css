@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');


/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background: #08090d;
    color: #ffffff;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}


/* =========================
   COLORS
========================= */

:root {
    --purple: #9d5cff;
    --purple-light: #c28cff;
    --purple-dark: #6f35d8;

    --background: #08090d;
    --background-2: #0d0e14;

    --card: rgba(255, 255, 255, 0.045);

    --border: rgba(255, 255, 255, 0.1);

    --text-muted: #9b9ca5;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 78px;

    padding: 0 6%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    z-index: 1000;

    background: rgba(8, 9, 13, 0.72);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid rgba(255,255,255,0.06);
}


.logo {
    display: flex;

    align-items: center;

    gap: 10px;

    font-family: 'Space Grotesk', sans-serif;

    font-weight: 800;

    letter-spacing: 1px;
}


.logo-symbol {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border-radius: 10px;

    font-size: 25px;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--purple-dark)
        );

    box-shadow:
        0 0 25px rgba(157,92,255,0.35);
}


.logo small {
    color: var(--purple-light);

    font-size: 10px;

    margin-left: 3px;
}


.nav-links {
    display: flex;

    gap: 34px;
}


.nav-links a {
    color: #b8b8c1;

    font-size: 13px;

    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: 0.25s;
}


.nav-links a:hover {
    color: white;
}


.nav-button {
    padding: 12px 19px;

    border-radius: 9px;

    background: var(--purple);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;

    transition: 0.25s;

    box-shadow:
        0 8px 30px rgba(157,92,255,0.2);
}


.nav-button:hover {
    transform: translateY(-2px);

    background: var(--purple-light);
}


.menu-button {
    display: none;

    background: none;

    border: none;

    color: white;

    font-size: 26px;

    cursor: pointer;
}


/* =========================
   MOBILE MENU
========================= */

.mobile-menu {
    position: fixed;

    top: 78px;

    left: 0;

    width: 100%;

    padding: 25px;

    display: none;

    flex-direction: column;

    gap: 18px;

    z-index: 999;

    background: #0b0c11;

    border-bottom: 1px solid var(--border);
}


.mobile-menu.active {
    display: flex;
}


.mobile-menu a {
    color: #ddd;

    padding: 10px;

    font-weight: 600;
}


.mobile-start {
    text-align: center;

    border-radius: 8px;

    background: var(--purple);

    color: white !important;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 120px 20px 80px;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 50% 35%,
            rgba(124,67,210,0.25),
            transparent 38%
        ),
        radial-gradient(
            circle at 15% 80%,
            rgba(87,43,150,0.15),
            transparent 30%
        ),
        #08090d;
}


.hero::before {
    content: "";

    position: absolute;

    width: 900px;
    height: 900px;

    top: -400px;

    left: 50%;

    transform: translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(157,92,255,0.15),
            transparent 65%
        );

    pointer-events: none;
}


.hero-content {
    position: relative;

    z-index: 2;

    max-width: 900px;
}


.hero-badge {
    display: inline-block;

    padding: 9px 16px;

    margin-bottom: 25px;

    border: 1px solid rgba(157,92,255,0.3);

    border-radius: 100px;

    background: rgba(157,92,255,0.08);

    color: var(--purple-light);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


.hero h1 {
    font-family: 'Space Grotesk', sans-serif;

    font-size: clamp(58px, 9vw, 125px);

    line-height: 0.9;

    letter-spacing: -5px;

    font-weight: 900;

    margin-bottom: 30px;
}


.hero h1 span {
    display: block;

    color: transparent;

    background:
        linear-gradient(
            90deg,
            #8b48ed,
            #d09cff
        );

    -webkit-background-clip: text;

    background-clip: text;
}


.hero-content > p {
    max-width: 600px;

    margin: 0 auto 35px;

    color: var(--text-muted);

    font-size: 17px;

    line-height: 1.7;
}


.hero-buttons {
    display: flex;

    justify-content: center;

    gap: 14px;

    flex-wrap: wrap;
}


.primary-button,
.secondary-button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 52px;

    padding: 0 25px;

    border-radius: 9px;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.25s;

    border: none;
}


.primary-button {
    background: var(--purple);

    color: white;

    box-shadow:
        0 12px 35px rgba(157,92,255,0.25);
}


.primary-button:hover {
    transform: translateY(-3px);

    background: var(--purple-light);
}


.secondary-button {
    border: 1px solid var(--border);

    background: rgba(255,255,255,0.04);

    color: white;
}


.secondary-button:hover {
    transform: translateY(-3px);

    background: rgba(255,255,255,0.08);
}


.server-address {
    margin: 28px auto 0;

    display: inline-flex;

    align-items: center;

    gap: 11px;

    padding: 11px 15px;

    border: 1px solid var(--border);

    border-radius: 9px;

    background: rgba(255,255,255,0.035);

    color: #d9d9df;

    font-family: monospace;

    font-size: 14px;
}


.status-dot,
.online-indicator {
    width: 8px;
    height: 8px;

    display: inline-block;

    border-radius: 50%;

    background: #55e88a;

    box-shadow:
        0 0 12px rgba(85,232,138,0.8);
}


.server-address button {
    border: none;

    background: transparent;

    color: #aaa;

    cursor: pointer;

    font-size: 15px;
}


.copy-message {
    height: 0;

    opacity: 0;

    color: #70ed9e;

    font-size: 12px;

    margin-top: 8px;

    transition: 0.25s;
}


.copy-message.show {
    height: 18px;

    opacity: 1;
}


.scroll-down {
    position: absolute;

    bottom: 30px;

    left: 50%;

    transform: translateX(-50%);

    color: #6f7079;

    font-size: 9px;

    letter-spacing: 3px;

    text-align: center;
}


.scroll-down div {
    margin-top: 8px;

    font-size: 18px;

    animation: arrowMove 1.6s infinite;
}


@keyframes arrowMove {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(7px);
    }
}


/* =========================
   GENERAL SECTION
========================= */

.section {
    padding: 120px 7%;
}


.section-heading {
    max-width: 800px;

    margin: 0 auto 60px;

    text-align: center;
}


.section-heading > span,
.section-label {
    color: var(--purple-light);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 3px;
}


.section-heading h2 {
    margin-top: 16px;

    font-family: 'Space Grotesk', sans-serif;

    font-size: clamp(42px, 6vw, 75px);

    line-height: 0.95;

    letter-spacing: -3px;
}


.section-heading h2 strong,
.server-text h2 strong,
.discord-section h2 strong {
    display: block;

    color: var(--purple-light);
}


.section-heading p {
    margin: 25px auto 0;

    max-width: 600px;

    color: var(--text-muted);

    line-height: 1.7;
}


/* =========================
   ABOUT
========================= */

.about-section {
    background:
        linear-gradient(
            180deg,
            #08090d,
            #0b0c12
        );
}


.feature-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 16px;

    max-width: 1250px;

    margin: auto;
}


.feature-card {
    padding: 30px;

    min-height: 260px;

    border: 1px solid var(--border);

    border-radius: 15px;

    background: var(--card);

    transition: 0.3s;
}


.feature-card:hover {
    transform: translateY(-7px);

    border-color: rgba(157,92,255,0.35);

    background: rgba(157,92,255,0.06);
}


.feature-icon {
    font-size: 32px;

    margin-bottom: 30px;
}


.feature-card h3 {
    font-family: 'Space Grotesk', sans-serif;

    font-size: 21px;

    margin-bottom: 12px;
}


.feature-card p {
    color: var(--text-muted);

    line-height: 1.65;

    font-size: 14px;
}


/* =========================
   SERVER
========================= */

.server-section {
    background: #0b0c12;
}


.server-container {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 80px;
}


.server-text h2 {
    font-family: 'Space Grotesk', sans-serif;

    font-size: clamp(50px, 6vw, 80px);

    line-height: 0.95;

    letter-spacing: -3px;

    margin: 20px 0;
}


.server-text p {
    color: var(--text-muted);

    max-width: 500px;

    line-height: 1.7;

    margin-bottom: 30px;
}


.server-card {
    padding: 30px;

    border: 1px solid var(--border);

    border-radius: 17px;

    background:
        linear-gradient(
            145deg,
            rgba(157,92,255,0.1),
            rgba(255,255,255,0.025)
        );

    box-shadow:
        0 25px 80px rgba(0,0,0,0.25);
}


.server-card-header {
    display: flex;

    align-items: center;

    gap: 10px;

    padding-bottom: 22px;

    border-bottom: 1px solid var(--border);

    font-weight: 800;

    letter-spacing: 1px;
}


.server-info-row {
    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 20px 0;

    border-bottom: 1px solid rgba(255,255,255,0.06);

    font-size: 13px;
}


.server-info-row span {
    color: #777983;

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 800;
}


.server-info-row strong {
    color: #ddd;

    text-align: right;
}


.server-status {
    margin-top: 20px;

    display: flex;

    align-items: center;

    gap: 10px;

    color: #62e99a;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


/* =========================
   RULES
========================= */

.rules-section {
    background: #08090d;
}


.rules-grid {
    max-width: 1000px;

    margin: auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}


.rule {
    display: flex;

    gap: 25px;

    padding: 28px;

    border: 1px solid var(--border);

    border-radius: 13px;

    background: rgba(255,255,255,0.025);
}


.rule > span {
    color: var(--purple-light);

    font-family: 'Space Grotesk', sans-serif;

    font-size: 24px;

    font-weight: 700;
}


.rule h3 {
    margin-bottom: 8px;
}


.rule p {
    color: var(--text-muted);

    font-size: 14px;

    line-height: 1.6;
}


/* =========================
   SHOP
========================= */

.shop-section {
    background: #0b0c12;
}


.shop-card {
    max-width: 700px;

    margin: auto;

    text-align: center;

    padding: 60px 30px;

    border: 1px solid var(--border);

    border-radius: 18px;

    background:
        radial-gradient(
            circle at center,
            rgba(157,92,255,0.1),
            transparent 65%
        );
}


.shop-icon {
    font-size: 45px;

    margin-bottom: 20px;
}


.shop-card h3 {
    font-family: 'Space Grotesk', sans-serif;

    font-size: 28px;

    margin-bottom: 15px;
}


.shop-card p {
    color: var(--text-muted);

    line-height: 1.7;

    max-width: 500px;

    margin: 0 auto 25px;
}


.disabled {
    opacity: 0.5;

    cursor: default;
}


/* =========================
   DISCORD
========================= */

.discord-section {
    padding: 90px 7%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 40px;

    background:
        linear-gradient(
            100deg,
            #291354,
            #160c2a
        );

    border-top: 1px solid rgba(157,92,255,0.25);

    border-bottom: 1px solid rgba(157,92,255,0.25);
}


.discord-section span {
    color: #cda8ff;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 3px;
}


.discord-section h2 {
    margin-top: 12px;

    font-family: 'Space Grotesk', sans-serif;

    font-size: clamp(35px, 5vw, 60px);

    line-height: 0.95;

    letter-spacing: -2px;
}


.discord-section p {
    color: #b8a9c9;

    max-width: 600px;

    margin-top: 20px;

    line-height: 1.6;
}


.discord-button {
    flex-shrink: 0;

    padding: 17px 25px;

    border-radius: 9px;

    background: white;

    color: #21102f;

    font-weight: 800;

    font-size: 12px;

    transition: 0.25s;
}


.discord-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 12px 30px rgba(0,0,0,0.25);
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 60px 7% 35px;

    background: #06070a;

    text-align: center;
}


.footer-logo {
    display: inline-flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 35px;

    text-align: left;
}


.footer-logo > span {
    font-size: 35px;

    color: var(--purple-light);
}


.footer-logo strong {
    display: block;

    font-family: 'Space Grotesk', sans-serif;
}


.footer-logo small {
    color: #666872;

    font-size: 9px;

    letter-spacing: 2px;
}


.footer-links {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 25px;

    margin-bottom: 35px;
}


.footer-links a {
    color: #777983;

    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: 0.25s;
}


.footer-links a:hover {
    color: white;
}


.copyright {
    color: #555760;

    font-size: 11px;
}


.disclaimer {
    margin-top: 10px;

    color: #3f4048;

    font-size: 10px;
}


/* =========================
   TOAST
========================= */

.toast {
    position: fixed;

    left: 50%;

    bottom: 30px;

    transform:
        translate(-50%, 30px);

    padding: 12px 20px;

    border-radius: 8px;

    background: #171820;

    border: 1px solid var(--border);

    color: white;

    font-size: 12px;

    opacity: 0;

    pointer-events: none;

    transition: 0.3s;

    z-index: 2000;
}


.toast.show {
    opacity: 1;

    transform:
        translate(-50%, 0);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

    .nav-links {
        display: none;
    }

    .nav-button {
        display: none;
    }

    .menu-button {
        display: block;
    }

    .feature-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .server-container {
        grid-template-columns: 1fr;

        gap: 50px;
    }

}


@media (max-width: 700px) {

    .navbar {
        height: 68px;

        padding: 0 20px;
    }

    .mobile-menu {
        top: 68px;
    }

    .hero {
        min-height: 100svh;

        padding-top: 100px;
    }

    .hero h1 {
        font-size: 55px;

        letter-spacing: -3px;
    }

    .hero-content > p {
        font-size: 14px;
    }

    .hero-buttons {
        flex-direction: column;

        width: 100%;

        max-width: 330px;

        margin: auto;
    }

    .primary-button,
    .secondary-button {
        width: 100%;
    }

    .server-address {
        font-size: 12px;
    }

    .section {
        padding: 85px 20px;
    }

    .section-heading {
        margin-bottom: 40px;
    }

    .section-heading h2 {
        font-size: 45px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .rules-grid {
        grid-template-columns: 1fr;
    }

    .discord-section {
        flex-direction: column;

        align-items: flex-start;

        padding: 70px 20px;
    }

    .discord-button {
        width: 100%;

        text-align: center;
    }

    .server-info-row {
        flex-direction: column;

        gap: 8px;
    }

    .server-info-row strong {
        text-align: left;
    }

}
