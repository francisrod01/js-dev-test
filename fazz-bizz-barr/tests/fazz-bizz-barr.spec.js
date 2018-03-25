const assert = require('chai').assert


describe('Running tests about FazzBizzBarr', () => {

    const MainClass = require('../index')
    const libsFBB = require('../lib/fazz-bizz-barr')

    it('Check if output is not a number', (done) => {
        const outputValue = MainClass.processNumber('c')

        assert.isNull(outputValue)
        assert.isNotNumber(outputValue)

        done()
    })

    it('Check if output is valid', (done) => {
        const outputValue = MainClass.processNumber(2)

        assert.isNotNull(outputValue)
        assert.isNotNaN(outputValue)
        assert.equal(-1, libsFBB.arrayFBB.indexOf(outputValue))

        done()
    })

    it('Check the output value is present in array', (done) => {
        const outputValue = MainClass.processNumber(3)

        assert.equal(0, libsFBB.arrayFBB.indexOf(outputValue))

        done()
    })
})
