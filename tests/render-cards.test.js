const renderCards  = require('../public/scripts/controller/render.t.js')
const cardsCurrent = [{ "_id": "62a1f3d6c9188f2e2fc29f0c", "id": "1", "name": "Amazon duck", "Words": ["South America", "Donald Duck", "bird", "chicken"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f0e", "id": "3", "name": "Anteater", "Words": ["forest", "tongue", "long"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f10", "id": "5", "name": "Arctic wolf", "Words": ["dog", "howl", "moon", "ice"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f14", "id": "9", "name": "Bar-headed goose", "Words": ["zebra", "fox", "bird", "swan"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f18", "id": "13", "name": "Bison", "Words": ["cattle", "bison", "steppe", "America"], "category": "Animals" },
    { "_id": "62a1f3d6c9188f2e2fc29f2a", "id": "31", "name": "Dwarf penguin", "Words": ["south pole", "arctic", "black", "white"], "category": "Animals" }]


    describe('Check if the get card button renders cards', () => {
 test('render', () => {
     const result = renderCards.getRender(cardsCurrent)
     expect(result.slice(7,12)).toBe("<div>")
 });
    });