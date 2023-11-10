// <!-- Challenge 1: Select the element span with id "user" and write a function to print your name on the page, when the page loads using innerHTML within the element span with id "user" using onload() method. -->
window.addEventListener("load", function () {
  var s = document.getElementById("user");
  s.innerHTML = "Rishitha";
});
// <!-- Challenge 2: Select the button with button id "btn-click"and write the function to change the background color of the button using onclick() method. -->
document.getElementById("btn-click").onclick = 
changebackground;
function changebackground() {
  document.querySelector("button").style.background = "pink";
}
// <!-- Challenge 3: Create a function "makeSentence", add an event listener to the button with id "build-button" and call the function "makeSentence" when the button is clicked .In the "makeSentence" function, retrieve the current values of the form input elements which are namely "Noun" "Verb" & "Adverb", make a sentence from them like "Pamela sings loudly", and output that in the "statement" div.-->

const i = document.getElementById("build-button");
i.addEventListener("click", makeSentence);
function makeSentence() {
  console.log("debug");
  const a = document.getElementById("noun").value;
  const b = document.getElementById("verb").value;
  const c = document.getElementById("adverb").value;
  const k = a + " " + b + " " + c;
  console.log(k);
  const l = document.getElementById("statement");
  l.innerHTML = k;
  const statement  =  document.getElementById("statement")
  statement.appendChild(l);
  console.log("debug")
}
// <!-- Challenge 4.1: Select the div with id "grandparent" and add an eventListener to it so that on click of the div it should print "Granparent clicked". 
// Select the div with id "parent" and add an eventListener to it so that on click of the div it should print "Parent clicked".
// Select the div with id "child" and add an eventListener to it so that on click of the div it should print "Child clicked".
// Print the output on clicking the div with id "child" as:
// "Child clicked
//  Parent clicked
//  Grandparent clicked"
//  Hint: Use event bubbling concept-->
document.getElementById("grandparent").addEventListener("click", function() {
    console.log("Grandparent clicked");
});
document.getElementById("parent").addEventListener("click", function() {
    console.log("parent clicked");
});
document.getElementById("child").addEventListener("click", function() {
    console.log("chlid clicked");
});
// <!-- Challenge 4.2: Select the div with id "grandparent" and add an eventListener to it so that on click of the div it should print "Granparent clicked".
//     Select the div with id "parent" and add an eventListener to it so that on click of the div it should print "Parent clicked".
//     Select the div with id "child" and add an eventListener to it so that on click of the div it should print "Child clicked".
//     Print the output on clicking the div with id "child" as:
//     "Grandparent clicked
//     Parent clicked
//     Child clicked"
//     Hint: Use event capturing concept-->
document.getElementById("grandparent").addEventListener("click", function() {
    console.log("Grandparent clicked");
},true);
document.getElementById("parent").addEventListener("click", function() {
    console.log("parent clicked");
},true);
document.getElementById("child").addEventListener("click", function() {
    console.log("chlid clicked");
},true);

// <!-- Challenge 5: Select the ul with id "category" and add the eventListener to it and on click of the id "blazers" print the output as "blazers".
    //Hint: Use event delegation concept -->
    document.getElementById("category").addEventListener("click",(e)=>{
        console.log(e.target.id);
    });