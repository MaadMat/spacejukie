const cardSchema = require('../models/cards')
const path = require("path");
const fs = require('fs');

 const checkfile =  fs.existsSync(path.join(__dirname, '..','public', 'data.js'))
 const handleCards = async (req, res) => {
    try {
        //cheching file existance before making a server request
         if (checkfile== true) {
            res.sendFile(path.join(
            __dirname,
            "..",
            'public',
            'views',
                'index.html'))
                return checkfile
         } else {
             //getting cards from DB and creating an object string, to be added to a directory
             const cards = JSON.stringify(await cardSchema.find({}))
             //Adding a file Cards data to local directory from DB
             await fs.promises.writeFile(path.join(
                __dirname,
                '..',
                'public',
                'data.js'), `export default ${cards} `, {
                flag: 'w',
             })
            // cookies storing card-version for updating data file in locadirectory
            res.cookie('Cards-version', '1', {
                httpOnly: true,
                secure: true,
                sameSite: true,
                maxAge: 1000 * 60 * 60 * 24 * 7
            })
            //seding a user a interface for use
            res.sendFile(path.join(
                __dirname,
                "..",
                'public',
                'views',
                'index.html'))
                return checkfile
        }
    } catch (error) {
       console.log(error.message)
       throw(error)
    }
   

}
module.exports = { handleCards, checkfile }