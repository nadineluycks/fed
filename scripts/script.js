// JavaScript Document
console.log("hi");



/* Zoeken van element in HTML, dit kan dus met die queryselector. De naam ervoor mag je zelf bedenken, het gebruik van classes voor deze dingen is niet erg  */


openButton = document.querySelector(".openKnop");
sluitButton = document.querySelector(".sluitKnop");
menuZelf = document.querySelector("header nav > div");

/* Hiermee kan je een opdracht geven aan de knop die je eerder hebt opgehaald, in dit geval een klik. Aan het einde geef je een "handle" mee zodat je hem later weer kan gebruiken  */

openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

/* Tenslotte geef je een functie mee zodat ie ook werkt, hier gebruik je eerst dat "handle" en met classlist.add kan je een ding uit CSS meegeven. Hier is dat de open class. Daarna doe je hetzelfde voor de sluitbutton, in plaats van add doe je dan remove. */


function openMenu() {
    menuZelf.classList.add("open");
}

function sluitMenu() {
    menuZelf.classList.remove("open");
}