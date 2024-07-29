import {getProduct} from "~~/server/api/db";

export default defineEventHandler((event) => {
    let { product } = getRouterParams(event)
    if (!product) {
        throw createError({
            status: 410,
            statusText: `Missing product id: ${product}`
        })
    }
    const productId = parseInt(product)
    if (isNaN(productId)) {
        throw createError({
            status: 410,
            statusText: `Bad product id: ${product}`
        })
    }
    const entry = getProduct(productId)
    if (!entry) {
        throw createError({
            status: 404,
            statusText: `Product not found: ${product}`
        })
    }
    return entry
})
