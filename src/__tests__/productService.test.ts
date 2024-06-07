import { generateProducts } from "../services/productService"

describe('productService', () => {
    it("generates products", () => {
        const generated = generateProducts()

        expect(generated).not.toBeNull()
        expect(generated.length).toBe(20000)
        expect(generated[0]).toBe("Product 1")
    })
})