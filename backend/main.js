var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", gettingUserInput);

function gettingUserInput() {
    document.getElementById("textp").innerText = "Hello world";
    var input = document.getElementById("imgAddress");
    // console.log(input.value);
    var userInput = input.value;
    return (userInput);
};
