function getItems(words) {
 return words.map(word => {
    return `<li>${word}</li>`;
  }).join('');
}

    // `map` over the array to create a heading
   // and a list of items in an unordered list element
function getRender(cardsCurrent){
    const html = cardsCurrent.map(obj => {
        const { name, Words } = obj;
        return `
      <div>
      <h2>${name}<h2>
      <ul>${getItems(Words)}</ul>
      </div>
    `;
    }).join('');
    return html 
}

module.exports =  {getRender}