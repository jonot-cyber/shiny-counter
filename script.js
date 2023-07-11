// The limits of what pokemon are available in each game. Used to warn the user if they type a number too big
const gameLimits = {
    "au": 251,
    "ag": 251,
    "cr": 251,
    "rs": 386,
    "frlg": 386,
    "em": 386,
    "dp": 493,
    "hgss": 493,
    "pt": 493,
    "bw": 649,
    "xy": 721,
    "oras": 721,
    "sm": 809
};

// The non-shared parts of the paths for each game.
const gamePaths = {
    "au": "ii/gold",
    "ag": "ii/silver",
    "cr": "ii/crystal",
    "rs": "iii/ruby-sapphire",
    "frlg": "iii/firered-leafgreen",
    "em": "iii/emerald",
    "dp": "iv/diamond-pearl",
    "hgss": "iv/heartgold-soulsilver",
    "pt": "iv/platinum",
    "bw": "v/black-white/animated",
    "xy": "vi/x-y",
    "oras": "vi/omegaruby-alphasapphire",
    "sm": "vii/ultra-sun-ultra-moon",
};

function getSprite(number, game) {
    if (number > gameLimits[game] || number < 1) {
	alert("That Pokémon is not in that game!");
	number = 1;
    }
    // The sprites I'm using don't provide gen 2+3 sprites for firered/leafgreen, so use emerald as a fallback
    // The reason this isn't in the game limits table is because those pokemon are present in the game.
    if (game == "frlg" && pokemon > 151) {
	game = "em";
    }
    return `sprites/sprites/pokemon/versions/generation-${gamePaths[game]}/shiny/${pokemon}.${game == "bw" ? "gif" : "png"}`;
}

const incrementButton = document.querySelector(".incr");
const counter = document.querySelector(".counter");
const sprite = document.querySelector(".sprite");

const settings = document.querySelector(".settings");
const settingsClose = document.querySelector(".settings-close");
const settingsOpen = document.querySelector(".settings-open");
const pokemonChooser = document.querySelector("#pokemon-chooser");
const gameChooser = document.querySelector("#game-chooser");
const shinyRateChooser = document.querySelector("#shiny-rate");
const resetButton = document.querySelector(".count-reset");

let count = localStorage.getItem("count") ?? 0;
counter.innerText = count;
let pokemon = localStorage.getItem("pokemon") ?? 181;
let game = localStorage.getItem("game") ?? "bw";
sprite.src = getSprite(pokemon, game);
let shinyRate = localStorage.getItem("rate") ?? 1/4096;
let prob = 1-Math.exp(count*Math.log(1-shinyRate));
document.querySelector(".probability-number").innerText = (100 * prob).toFixed(2);

incrementButton.addEventListener("click", function() {
    counter.innerText = ++count;
    localStorage.setItem("count", count);
    prob = 1-Math.exp(count*Math.log(1-shinyRate));
    document.querySelector(".probability-number").innerText = (100 * prob).toFixed(2);
})

settingsClose.addEventListener("click", function() {
    pokemon = pokemonChooser.value;
    game = gameChooser.value;
    sprite.src = getSprite(pokemon, game);
    let rateParts = shinyRateChooser.value.split("/");
    if (rateParts.length == 2) {
	shinyRate = rateParts[0] / rateParts[1];
    }
    localStorage.setItem("pokemon", pokemon);
    localStorage.setItem("game", game);
    localStorage.setItem("rate", shinyRate);
    settings.close();
})

settingsOpen.addEventListener("click", function() {
    settings.showModal();
})

resetButton.addEventListener("click", function() {
    count = 0;
    localStorage.setItem("count", count);
    counter.innerText = 0;
    settings.close();
})
