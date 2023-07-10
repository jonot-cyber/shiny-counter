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
    "oras": 721
}

const incrementButton = document.querySelector(".incr");
const counter = document.querySelector(".counter");
const sprite = document.querySelector(".sprite");

const settings = document.querySelector(".settings");
const settingsClose = document.querySelector(".settings-close");
const settingsOpen = document.querySelector(".settings-open");
const pokemonChooser = document.querySelector("#pokemon-chooser");
const gameChooser = document.querySelector("#game-chooser");

let count = 0;
let pokemon = 181;

incrementButton.addEventListener("click", function() {
    counter.innerText = ++count;
})

settingsClose.addEventListener("click", function() {
    pokemon = pokemonChooser.value;
    let game = gameChooser.value;
    if (pokemon > gameLimits[game] || pokemon < 1) {
	alert("That Pokémon is not in that game!");
	pokemon = 1;
    }
    switch (game) {
    case "au": // Gold
	sprite.src = `sprites/sprites/pokemon/versions/generation-ii/gold/shiny/${pokemon}.png`;
	break;
    case "ag": // Silver
	sprite.src = `sprites/sprites/pokemon/versions/generation-ii/silver/shiny/${pokemon}.png`;
	break;
    case "cr": // Crystal
	sprite.src = `sprites/sprites/pokemon/versions/generation-ii/crystal/shiny/${pokemon}.png`;
	break;
    case "rs": // Ruby/Sapphire
	sprite.src = `sprites/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/${pokemon}.png`;
	break;
    case "frlg": // FireRed/LeafGreen
	// The sprites I'm using don't provide gen 2+3 sprites for firered/leafgreen, so use emerald as a fallback
	// The reason this isn't in the game limits table is because those pokemon are present in the game.
	if (pokemon > 151) {
	    sprite = `sprites/sprites/pokemon/versions/generation-iii/emerald/shiny/${pokemon}.png`;
	} else {
	    sprite.src = `sprites/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/${pokemon}.png`;
	}
	break;
    case "em": // Emerald
	sprite.src = `sprites/sprites/pokemon/versions/generation-iii/emerald/shiny/${pokemon}.png`;
	break;
    case "dp": // Diamond/Pearl
	sprite.src = `sprites/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/${pokemon}.png`;
	break;
    case "hgss": // HeartGold/SoulSilver
	sprite.src = `sprites/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/${pokemon}.png`;
	break;
    case "pt": // Platinum
	sprite.src = `sprites/sprites/pokemon/versions/generation-iv/platinum/shiny/${pokemon}.png`;
	break;
    case "bw": // Black/White
	sprite.src = `sprites/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${pokemon}.gif`;
	break;
    case "xy": // X/Y
	sprite.src = `sprites/sprites/pokemon/versions/generation-vi/x-y/shiny/${pokemon}.png`;
	break;
    case "oras": // Omega Ruby/Alpha Sapphire
	sprite.src = `sprites/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/${pokemon}.png`;
	break;
    case "sm": // Sun/Moon
	sprite.src = `sprites/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/${pokemon}.png`;
	break;
    default:
	sprite.src = `sprites/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${pokemon}.gif`;
	break;
    }
    settings.close();
})

settingsOpen.addEventListener("click", function() {
    settings.showModal();
})
