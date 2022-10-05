const data = [{ "_id": "62a1f3d6c9188f2e2fc29f0c", "id": "1", "name": "Amazon duck", "Words": ["South America", "Donald Duck", "bird", "chicken"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f0e", "id": "3", "name": "Anteater", "Words": ["forest", "tongue", "long"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f10", "id": "5", "name": "Arctic wolf", "Words": ["dog", "howl", "moon", "ice"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f14", "id": "9", "name": "Bar-headed goose", "Words": ["zebra", "fox", "bird", "swan"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f18", "id": "13", "name": "Bison", "Words": ["cattle", "bison", "steppe", "America"], "category": "Animals" },
{ "_id": "62a1f3d6c9188f2e2fc29f2a", "id": "31", "name": "Dwarf penguin", "Words": ["south pole", "arctic", "black", "white"], "category": "Animals" }]

///cards store
const cardsCurrent = [];
//get random id's numbers
const randomId = function () {
    return Math.floor(Math.random() * data.length - 1)
}

//get random six unique cards and store thier id's ih log
const getCards = () => {
    let count = 0;
    while (count < 6) {
        cardsCurrent.push(data[randomId()])
        count++;
    }
    return cardsCurrent
}

describe('Checking it get correct amount of cards to be rendred', () => {


    test('Get Cards', () => {
        const result = getCards()
        expect(result).toHaveLength(6)
    });

});