const chai = require('chai')
const expect = chai.expect
const cpf = require('../index')

describe('CPF number tests', () => {
    describe('cpfValidator', () => {
        it('Testing of CPF number with punctuations', () => {
            expect(cpf.cpfValidator('416.699.950-89')).to.equal(true)
        })

        it('Testing of CPF number with punctuations and the tenth digit different from zero', () => {
            expect(cpf.cpfValidator('416.699.950-89')).to.equal(true)
        })

        it('Testing of CPF number with punctuations and the eleventh digit different from zero', () => {
            expect(cpf.cpfValidator('416.699.950-89')).to.equal(true)
        })

        it('Testing of CPF number with punctuations and the tenth digit incorrect', () => {
            expect(cpf.cpfValidator('416.699.950-59')).to.equal(false)
        })

        it('Testing of CPF number with punctuations and the eleventh digit incorrect', () => {
            expect(cpf.cpfValidator('416.699.950-84')).to.equal(false)
        })

        it('Testing of CPF number with punctuations and the two last digits incorrect', () => {
            expect(cpf.cpfValidator('416.699.950-12')).to.equal(false)
        })

        it('Testing of CPF number with punctuations and the tenth digit equal to zero', () => {
            expect(cpf.cpfValidator('356.656.530-04')).to.equal(true)
        })

        it('Testing of CPF number with punctuations and the eleventh digit equal to zero', () => {
            expect(cpf.cpfValidator('057.859.760-80')).to.equal(true)
        })

        it('Testing of CPF number with punctuations and without the last two digits', () => {
            expect(cpf.cpfValidator('416.699.950')).to.equal(false)
        })

        it('Testing of CPF number without any punctuations', () => {
            expect(cpf.cpfValidator('53632981043')).to.equal(true)
        })

        it('Testing of CPF number without any punctuations and with the tenth digit different from zero', () => {
            expect(cpf.cpfValidator('53632981043')).to.equal(true)
        })

        it('Testing of CPF number without any punctuations and with the eleventh digit different from zero', () => {
            expect(cpf.cpfValidator('53632981043')).to.equal(true)
        })

        it('Testing of CPF number without any punctuations and with the tenth digit equal to zero', () => {
            expect(cpf.cpfValidator('55396635002')).to.equal(true)
        })

        it('Testing of CPF number without any punctuations and the eleventh digit equal to zero', () => {
            expect(cpf.cpfValidator('01717532080')).to.equal(true)
        })

        it('Testing of CPF number without any punctuations and with the tenth digit incorrect', () => {
            expect(cpf.cpfValidator('53632981013')).to.equal(false)
        })

        it('Testing of CPF number without any punctuations and with the eleventh digit incorrect', () => {
            expect(cpf.cpfValidator('53632981042')).to.equal(false)
        })

        it('Testing of CPF number without any punctuations and the two last digits incorrect', () => {
            expect(cpf.cpfValidator('53632981000')).to.equal(false)
        })

        it('Testing of CPF number without any punctuations and without the last two digits', () => {
            expect(cpf.cpfValidator('536329810')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 0', () => {
            expect(cpf.cpfValidator('000.000.000-00')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 0', () => {
            expect(cpf.cpfValidator('00000000000')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 1', () => {
            expect(cpf.cpfValidator('111.111.111-11')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 1', () => {
            expect(cpf.cpfValidator('11111111111')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 2', () => {
            expect(cpf.cpfValidator('222.222.222-22')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 2', () => {
            expect(cpf.cpfValidator('22222222222')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 3', () => {
            expect(cpf.cpfValidator('333.333.333-33')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 3', () => {
            expect(cpf.cpfValidator('33333333333')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 4', () => {
            expect(cpf.cpfValidator('444.444.444-44')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 4', () => {
            expect(cpf.cpfValidator('44444444444')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 5', () => {
            expect(cpf.cpfValidator('555.555.555-55')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 5', () => {
            expect(cpf.cpfValidator('55555555555')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 6', () => {
            expect(cpf.cpfValidator('666.666.666-66')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 6', () => {
            expect(cpf.cpfValidator('66666666666')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 7', () => {
            expect(cpf.cpfValidator('777.777.777-77')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 7', () => {
            expect(cpf.cpfValidator('77777777777')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 8', () => {
            expect(cpf.cpfValidator('888.888.888-88')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 8', () => {
            expect(cpf.cpfValidator('88888888888')).to.equal(false)
        })

        it ('Testing of CPF number with punctuations and all numbers ending in 9', () => {
            expect(cpf.cpfValidator('999.999.999-99')).to.equal(false)
        }) 

        it ('Testing of CPF number without any punctuations and with all numbers ending in 9', () => {
            expect(cpf.cpfValidator('99999999999')).to.equal(false)
        })
    })
})