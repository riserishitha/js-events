// <!-- Challenge 1: Select the element span with id "user" and write a function to print your name on the page, when the page loads using innerHTML within the element span with id "user" using onload() method. -->
window.addEventListener("load", function () {
  var Name = document.getElementById("user");
  Name.innerHTML = "Rishitha";
});
// <!-- Challenge 2: Select the button with button id "btn-click"and write the function to change the background color of the button using onclick() method. -->
document.getElementById("btn-click").onclick = changebackground;
function changebackground() {
  document.querySelector("button").style.background = "pink";
}
// <!-- Challenge 3: Create a function "makeSentence", add an event listener to the button with id "build-button" and call the function "makeSentence" when the button is clicked .In the "makeSentence" function, retrieve the current values of the form input elements which are namely "Noun" "Verb" & "Adverb", make a sentence from them like "Pamela sings loudly", and output that in the "statement" div.-->

const i = document.getElementById("build-button");
i.addEventListener("click", makeSentence());
function makeSentence() {
  console.log("debug");
  const a = document.getElementById("noun").value;
  const b = document.getElementById("verb").value;
  const c = document.getElementById("adverb").value;
  const k = a + " " + b + " " + c;
  console.log(k);
  const l = document.getElementById("statement");
  l.innerHtml = k;
  // const statement  =  document.getElementById("statement")
  // statement.appendChild(l);
  // console.log("debug")

  
}