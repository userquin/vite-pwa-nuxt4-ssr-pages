import {getProducts} from "~~/server/api/db";

export default defineEventHandler(() => {
    return {
        products: getProducts()
    }
})
