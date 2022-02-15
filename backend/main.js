var buttonClick = document.getElementById("btn");

buttonClick.addEventListener("click", function () {
    chrome.tts.speak('Hello world.', { 'lang': 'en-US', 'rate': 1.0 });
});
