let expect;
const Mtrx = require('Mtrx');

const matrix1 = new Mtrx([[1, 2], [3, 4]]);
const matrix2 = new Mtrx([[5, 6], [7, 8]]);

describe('Mtrx Library', function() {
    before(async () => {
        expect = (await import('chai')).expect;
    });
    
    it('should create a matrix correctly', function() {
        expect(matrix1).to.deep.equal([[1, 2], [3, 4]]);
    });

    it('should define matrix as object of type Mtrx', function() {
        expect(Mtrx.isMtrx(matrix1)).to.equal(true);
    });

    it('should add two matrices correctly', function() {
        const result = matrix1.add(matrix2);
        expect(result).to.deep.equal([[6, 8], [10, 12]]);
    });

    it('should multiply two matrices correctly', function() {
        const result = matrix1.mul(matrix2);
        expect(result).to.deep.equal([[19, 22], [43, 50]]);
    });


});