// Write your code here!
document.getElementById("main").remove();
const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.innerHTML = "Zakiya is the champion";

//no longer has DOM node 'main#main'
//✓ has a 'newHeader' variable that points to an <h1> node
//✓ the 'newHeader' variable that points to the <h1> node has an id of 'victory'
//✓ the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
