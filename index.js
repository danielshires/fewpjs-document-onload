// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    const p = document.querySelector("p#text")
    p.innerHTML = "This is really cool!"
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);