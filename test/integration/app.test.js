const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: multiply', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 20,
            num2: 9
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 180 }))
    })

    it('POST /calculate: action: divide', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 200,
            num2: 10
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 20 }))
    })

    it('POST /calculate: action: subtract', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 220,
            num2: 120
        })

        // console.log({response})
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 100 }))
    })
})