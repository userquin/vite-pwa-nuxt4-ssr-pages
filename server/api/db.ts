export interface Product {
    id: number
    name: string
    price: number
}

const products = [
    { id: 1, name: 'Apple', price: 1.25 },
    { id: 2, name: 'Banana', price: 0.75 },
    { id: 3, name: 'Cherry', price: 2.5 },
] satisfies Product[]

export function getProducts() {
    return products
}
export function getProduct(id: number) {
    return products.find(p => p.id === id)
}
