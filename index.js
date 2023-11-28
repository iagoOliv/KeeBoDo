const _root = document.getElementById("root");
const _output = document.getElementById("output");
const _keyboard = document.getElementById("keyboard");
const _keys = document.querySelectorAll(".keyboard__key");

function getRandomAnimationIndex() {
    return Math.round(Math.random() * 3);
}

function getRandomStarIndex() {
    return Math.floor(Math.random() * 3);
}

function playSound() {
    const audio = new Audio("sounds/click.wav");
    audio.play();
}

function renderEffectOver(element) {
    const image = document.createElement("img");
    image.src = `assets/star-${getRandomStarIndex()}.svg`;
    image.classList.add("light", `light-${getRandomAnimationIndex()}`)
    element.appendChild(image);
    setTimeout(() => {
        image.remove();
    }, 260);
}

function disappearOverlayText(e) {
    setTimeout(() => {
        _output.innerText = "";
    }, 800);
}

_root.addEventListener("keydown", (e) => {
    try {
        const selectedKey = document.getElementById(`${e.code}`)
        selectedKey.classList.add("pressed");
        _output.innerText = selectedKey.childNodes[0].textContent;
        playSound();
        renderEffectOver(selectedKey);
    } catch (e) {
        console.log("Couldn't add the class of the key.")
    }
});

_root.addEventListener("keyup", (e) => {
    try {
        const selectedKey = document.getElementById(`${e.code}`)
        selectedKey.classList.remove("pressed");
    } catch (e) {
        console.log("Couldn't remove the class of the key.")
    }
});

_keys.forEach((key) => {
    key.addEventListener("click", () => {
        _output.innerText = key.childNodes[0].textContent;
        playSound();
        renderEffectOver(key);
    })
});
