const paragraph = document.getElementById("textp");
const input = document.getElementById("imgAddress");
const submitButton = document.getElementById("submit");
const confidenceScore = document.getElementById("confidenceScore");

async function identify() {
  const url = input.value;
  const res = await axios.post("https://azura-backend.herokuapp.com/describe", {
    imageUrl: url,
  });
  paragraph.innerText = res.data;
  await chrome.tts.speak(res.data, { 'lang': 'en-US', 'rate': 1.0 });
}

submitButton.addEventListener("click", identify)
