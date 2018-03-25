/**
 * @description Chai Assertion Library
 *
 * @link http://www.chaijs.com/
 */

const assert = require('chai').assert


describe('Hexa binary converter', () => {

    const MainClass = require('../index')
    const numberConverter = require('../lib/hexa-binary-converter')

    it('Convert hexa to binary..', (done) => {
        const hexaNumber = numberConverter.getRandomNumber()
        const binaryOutput = MainClass.hexaToBinary(hexaNumber)

        assert.isNotNull(binaryOutput, 'The output is not null')
        assert.isNotNaN(binaryOutput, 'The output is not NaN')
        assert.exists(binaryOutput, 'The output is neither `null` nor `undefined`')
        assert.typeOf(binaryOutput, 'string', 'The output is a string')
        
        done()
    })
    
    it('Convert binary to hexa..', (done) => {
        const hexaNumber = numberConverter.getRandomNumber()

        const binaryOutput = MainClass.hexaToBinary(hexaNumber)
        const hexaOutput = MainClass.binaryToHexa(binaryOutput)
        
        assert.isNotNull(hexaOutput, 'The output is not null')
        assert.isNotNaN(hexaOutput, 'The output is not NaN')
        assert.exists(hexaOutput, 'The output is neither `null` nor `undefined`')
        assert.typeOf(hexaOutput, 'string', 'The output is a string')
        assert.equal(hexaOutput.toUpperCase(), hexaNumber, 'The output is equal to expected')

        done()
    })
})
