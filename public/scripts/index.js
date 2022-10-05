import data from "../data.js"
import  renderCards  from './controller/render.js'
const getButton = document.getElementById("btn-1")


///cards store

//get random id's numbers
const randomId = function () {
    return Math.floor(Math.random()*data.length-1)
}

//get random six unique cards and store thier id's ih log
getButton.addEventListener('click', () => {
    const cardsCurrent = [];
    let count = 0;
    while (count < 6) {
        cardsCurrent.push(data[randomId()])
        count++;
    }
   
return document.getElementById('cardView').innerHTML = renderCards(cardsCurrent); 
})


   
document.getElementById("btn-2").addEventListener("click", function() {
    html2canvas(document.getElementById("cardView")).then(function (canvas) {
            var anchorTag = document.createElement("a");
			anchorTag.download = "card.jpg";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
		});
});
 
const form = document.getElementById("form")
document.getElementById("about").addEventListener("click", () => {
   form.submit()
})