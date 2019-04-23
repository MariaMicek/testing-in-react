import { sumOrderPrice } from './Order'

beforeAll(() => console.log('before describe and tests'))

describe('testing orders', () => {

    let testData = []

    beforeAll(() => {
        console.log(testData)
        testData = [{test: 'test'}]
        console.log('before tests',testData)
    })
    beforeEach(() => {
        testData.push({test: 'each test'})
    })
    afterAll(() => console.log('after tests', testData))


    test('simple orders is working', () => {
        console.log('first test')
        const testOrder1 = [
            { name: 'żwirek dla kota', price: 100 },
            { name: 'sok pomarańczowy', price: 4 },
        ]
        expect(sumOrderPrice(testOrder1)).toBe(104)
    })
    test('order with quantity is working', () => {
        const testOrder2 = [
            { name: 'żwirek dla kota', price: 100, quantity: 2, },
            { name: 'sok pomarańczowy', price: 4, quantity: 3, },
        ]  
        expect(sumOrderPrice(testOrder2)).toBe(212)
    })
    test('order with and without quantity is working', () => {
        const testOrder3 = [
            { name: 'żwirek dla kota', price: 100, },
            { name: 'sok pomarańczowy', price: 4, quantity: 3, },
        ]
        expect(sumOrderPrice(testOrder3)).toBe(112)
    })
    test('order (less then 100) with shipment is working', () => {
        const testOrder4 = [
            { name: 'żwirek dla kota', price: 100, },
            { name: 'sok pomarańczowy', price: 4, quantity: 3, },
            { name: 'shipment', price: 120 }
        ]
        expect(sumOrderPrice(testOrder4)).toBe(112)
    })
    test('order (more then 100) with shipment is working', () => {
        const testOrder5 = [
            { name: 'sok pomarańczowy', price: 4, quantity: 3, },
            { name: 'shipment', price: 120 }
        ]
        expect(sumOrderPrice(testOrder5)).toBe(132)
    })
    test('order with shipment in the wrong place is working', () => {
        const testOrder6 = [
            { name: 'shipment', price: 120 },
            { name: 'żwirek dla kota', price: 100, },
            { name: 'sok pomarańczowy', price: 4, quantity: 3, },
        ]
        expect(sumOrderPrice(testOrder6)).toBe(112)
    })    
})