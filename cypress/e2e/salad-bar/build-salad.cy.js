describe("Build a salad", () => {
    it("should login", () => {
        cy.visit("localhost:5173")
        cy.get(`[data-cy="name-form"]`).type("Mike")
        cy.get(`[data-cy="submit-btn"]`).click()
    })

    it("should have toppings", () => {
        cy.visit("localhost:5173")
        cy.get(`[data-cy="name-form"]`).type("Mike")
        cy.get(`[data-cy="submit-btn"]`).click()
        
        cy.get(`.toppings-lists > ul div`).should('have.length', 12)
        cy.get(`.toppings-lists > ul > div`).first().click()
    })
})