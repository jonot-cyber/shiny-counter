const incrementButton = document.querySelector(".incr");
const counter = document.querySelector(".counter");

let count = 0;

incrementButton.addEventListener("click", function() {
    counter.innerText = ++count;
})
