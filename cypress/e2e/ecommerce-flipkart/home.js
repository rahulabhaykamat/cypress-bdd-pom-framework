///<reference types='Cypress'/>

import home from "../../support/pageObject/ecommerce-flipkart/homePage";
const rueHome = new home

before(() => {
    cy.visit('https://www.flipkart.com/')
    // rueHome.getLoginClose().click({force:true})
});

describe('validate home page', () => {
    it('validate L1 Menu', () => {
        rueHome.getL1Grocery().should('be.visible')
        rueHome.getL1Mobiles().should('be.visible')
        rueHome.getL1Fashion().should('be.visible')
        rueHome.getL1Electronics().should('be.visible')
        rueHome.getL1HomeFurniture().should('be.visible')
        rueHome.getL1Appliances().should('be.visible')
        rueHome.getL1Travel().should('be.visible')
        rueHome.getL1BeautyToysMore().should('be.visible')
        rueHome.getL1TwoWheelers().should('be.visible')
        rueHome.getSearchTextBox().should('be.visible')
    });

    it('validate Search functionality', () => {
        rueHome.getSearchTextBox().click()
    });
});