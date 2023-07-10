const incrementButton = document.querySelector(".incr");
const counter = document.querySelector(".counter");
const sprite = document.querySelector(".sprite");
const settings = document.querySelector(".settings");
const settingsClose = document.querySelector(".settings-close");
const settingsOpen = document.querySelector(".settings-open");

let count = 0;
let pokemon = 181;

incrementButton.addEventListener("click", function() {
    counter.innerText = ++count;
})

settingsClose.addEventListener("click", function() {
    pokemon = document.querySelector("#pokemon-chooser").value;
    sprite.src = `sprites/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${pokemon}.gif`
    settings.close();
})

settingsOpen.addEventListener("click", function() {
    settings.showModal();
})
