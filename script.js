/* =========================================
   RAKSHA BANDHAN E-GIFT
   INTERACTIVE FUNCTIONS
   FOR NIYATI ❤️
========================================= */


/* =========================================
   MUSIC
========================================= */

function playMusic() {
    const music = document.getElementById("rakhiMusic");

    if (music) {
        music.volume = 0.5;

        const promise = music.play();

        if (promise !== undefined) {
            promise.catch(() => {
                console.log("Music will start after user interaction.");
            });
        }
    }
}


/* =========================================
   OPEN YOUR GIFT
========================================= */

function openGift() {

    playMusic();

    const giftSection =
        document.getElementById("gift");

    if (giftSection) {

        giftSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    startPetals();

    setTimeout(() => {
        startTyping();
    }, 800);
}


/* =========================================
   SHOW MEMORIES
========================================= */

function showMemories() {

    const memoriesSection =
        document.getElementById("memories");

    if (memoriesSection) {

        memoriesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================
   SHOW FINAL GIFT
========================================= */

function showFinalGift() {

    const finalGift =
        document.getElementById("finalGift");

    if (finalGift) {

        finalGift.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================
   TYPING ANIMATION
========================================= */

let typingStarted = false;

function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const paragraphs =
        document.querySelectorAll(
            ".message-box p"
        );

    if (!paragraphs.length) {
        return;
    }


    const originalText = [];

    paragraphs.forEach((paragraph) => {

        originalText.push(
            paragraph.innerHTML
        );

        paragraph.innerHTML = "";

    });


    let paragraphIndex = 0;


    function typeParagraph() {

        if (paragraphIndex >= paragraphs.length) {

            showMemoryButton();

            return;
        }


        const paragraph =
            paragraphs[paragraphIndex];

        const text =
            originalText[paragraphIndex];


        let characterIndex = 0;


        function typeCharacter() {

            if (characterIndex < text.length) {

                paragraph.innerHTML =
                    text.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                setTimeout(
                    typeCharacter,
                    25
                );

            } else {

                paragraphIndex++;

                setTimeout(
                    typeParagraph,
                    400
                );

            }

        }


        typeCharacter();
    }


    typeParagraph();
}


/* =========================================
   SHOW MEMORIES BUTTON AFTER LETTER
========================================= */

function showMemoryButton() {

    const button =
        document.querySelector(
            ".gift-section .continue-btn"
        );

    if (!button) {
        return;
    }

    button.style.opacity = "0";

    button.style.transform =
        "translateY(20px)";

    button.style.pointerEvents =
        "none";


    setTimeout(() => {

        button.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        button.style.opacity = "1";

        button.style.transform =
            "translateY(0)";

        button.style.pointerEvents =
            "auto";

    }, 300);

}


/* =========================================
   FALLING PETALS
========================================= */

const petals = [
    "🌸",
    "🌷",
    "💮",
    "🌺",
    "🌹"
];


function createPetal() {

    const petal =
        document.createElement("div");

    petal.className =
        "falling-petal";

    petal.innerHTML =
        petals[
            Math.floor(
                Math.random() * petals.length
            )
        ];


    petal.style.left =
        Math.random() * 100 + "vw";


    petal.style.fontSize =
        Math.random() * 12 + 16 + "px";


    petal.style.animationDuration =
        Math.random() * 4 + 5 + "s";


    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);

}


/* =========================================
   START PETALS
========================================= */

let petalsStarted = false;

function startPetals() {

    if (petalsStarted) {
        return;
    }

    petalsStarted = true;


    setInterval(
        createPetal,
        500
    );

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💖";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";


    heart.style.animationDuration =
        Math.random() * 3 + 5 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* =========================================
   HEARTS EVERY 1.5 SECONDS
========================================= */

setInterval(
    createHeart,
    1500
);


/* =========================================
   FINAL GIFT
========================================= */

function openFinalGift() {

    const intro =
        document.getElementById(
            "finalIntro"
        );

    const message =
        document.getElementById(
            "finalMessageBox"
        );


    if (!intro || !message) {
        return;
    }


    intro.classList.add(
        "final-intro-hide"
    );


    setTimeout(() => {

        intro.style.display =
            "none";

        message.classList.add(
            "final-message-show"
        );

    }, 600);

}