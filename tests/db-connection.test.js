require("dotenv").config();
const mongoose = require("mongoose");
const cardSchema = require('../models/cards')


describe("Connection", () => {
  beforeAll(async () => {
   await  mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  });

  test("Card by Id", async () => {
      const card = await cardSchema.find({ "name": 'Alpaca' })
    expect(card[0].name).toBe("Alpaca");
  });

    afterAll(async () => {
        try {
            await mongoose.disconnect();
        } catch (e) {
            console.log(e)
            throw(e)
        }
  return 
});

});