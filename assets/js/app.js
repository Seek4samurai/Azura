const paragraph = document.getElementById("textp");
const input = document.getElementById("imgAddress");
const submitButton = document.getElementById("submit");

async function identify() {
  const url = input.value;
  const res = await axios.post("http://localhost:5000/describe", {
    imageUrl: url,
  });
  paragraph.innerText = res.data;
}

submitButton.addEventListener("click", identify)
