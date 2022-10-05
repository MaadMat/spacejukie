function getItems(words) {
 return words.map(word => {
    return `<li>${`${convertFirstCharacterToUppercase(word)}`}</li>`;
  }).join('');
}

    // `map` over the array to create a heading
   // and a list of items in an unordered list element
export default function(cardsCurrent){
    const html = cardsCurrent.map(obj => {
        const { name, Words } = obj;
        return `
      <div class="card">
      <h2 class="title">${name}</h2>
      <ul class="badWord">${getItems(Words)}</ul>
      </div>
    `;
    }).join('');
    return html 
}

const convertFirstCharacterToUppercase = (stringToConvert) => {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);

  return firstCharacter.toUpperCase() + restString;
}