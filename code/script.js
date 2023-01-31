// Accordion
// toggle() är en inbyggd i funktion i javascript som gör att vi kan toggla klassnamnet innuti parentesen.
function toggle() {
  this.classList.toggle('active');
}

// getElementByClassName tar in flera klasser till skillnad från getElementBuId som endast tar in ett värde.
const question = document.getElementsByClassName('question-accordion');

/* document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle
document.getElementById("section5").onclick = toggle */

for (let i = 0; i < question.length; i++) {
  question[i].onclick = toggle;
}
