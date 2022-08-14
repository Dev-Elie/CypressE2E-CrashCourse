/// <reference types="cypress" />

describe('E2E Test Site', ()=>{
    it("Is site reachable",()=>{
        cy.visit("https://codedamn.com/")
        cy.contains("Learn Programming Interactively").should("exist")
    })

    // Sign up page
    it.only("Test sign up page",()=>{
        cy.viewport(1280, 720)
        cy.visit("https://codedamn.com/")
        cy.contains("Sign in").click()
        cy.contains("Sign in to codedamn").should("exist")
        cy.contains("Email address / Username").should("exist")
        cy.contains("Password").should("exist")

        cy.contains("Create one").click()
        cy.url().should("include","/register")
        cy.go("back")

    })
})