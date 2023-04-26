let submitButton = document.getElementById("sub");
let userInput = document.getElementById("input-captcha");
let Output = document.getElementById("captcha-field");
let reloadButton = document.querySelector(".reload");
let text = "";

//Generating a random Number Between a given range
const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumber(1,10));


//Generate Text

const textGenerator = () => {
    let generatedText = "";
    // String.fromCharCode gives ASCII Value from a given number
    //Total 9 letters hence loop of 3
    for(let i = 0 ; i < 3 ; i++)
    {
        //65-90 numbers are Capital Letters
        generatedText += String.fromCharCode(randomNumber(65,90));
        //97-122 numbers are small letters
        generatedText += String.fromCharCode(randomNumber(97,122));
        //48-57 are numbers from 0 to 9
        generatedText += String.fromCharCode(randomNumber(48,57));
    }
    return generatedText;
}

console.log(textGenerator());




//Initial Function
function triggerFunction() {
    //clear Input
    userInput.value = "";
    text = textGenerator();

    //Randomize the text so that everytime the position of numbers and small letters is random
    text = [...text].sort(() => Math.random() - 0.5).join("");
    console.log(text);


    document.querySelector(".captcha-field").innerText = text;
  }

  //call triggerFunction for reload button
  reloadButton.addEventListener("click", triggerFunction);
  
  //call triggerFunction when page loads
  window.onload = () => triggerFunction();





//When user clicks on submit
submitButton.addEventListener("click", () => {
    //check if user input  == generated text
    if (userInput.value === text) {
      alert("Success");
    } else {
      alert("Incorrect");
      triggerFunction();
    }
  });