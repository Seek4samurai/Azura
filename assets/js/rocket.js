const rocket = document.getElementById("myRocket");

const allowedEmoji = [..."🦊🚀🔥🍪🌏😎😍😴😄👋😍😅🤩🥱😠😇🥳🦄"];

async function boom() {
    var randomIndex = Math.floor(Math.random() * 19)
    console.log(randomIndex);
    if (randomIndex === 18) {
        rocket.innerText = "You're Cute!"
    } else {
        rocket.innerText = allowedEmoji[randomIndex];
        if (rocket.innerText === '🦄') {
            var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b2/Misc_soundboard_fall2021eventgame_reward7.mp3');
            await audio.play();
        }
    }
}

rocket.addEventListener("click", boom);
