const checkFile = require('../controllers/DAO')



describe('Checking Creation/Existance of data file', () => {
  
    
    test('checkFile', () => {
        const result = checkFile.checkfile

        expect(result).toBeTruthy()
    });
   
});