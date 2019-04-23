export const sumOrderPrice = (orders) => orders.reduce(
    (sum, product, index, array) => {
        if (
            product.name === 'shipment' &&
            (sumOrderPrice(array.slice(index + 1, array.length)) + sum) > 100       
        ) {                                                                         
            return sum
        }
        return sum + product.price * (product.quantity || 1)
    },
    0
)