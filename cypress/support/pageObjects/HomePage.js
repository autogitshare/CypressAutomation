/// <reference types="Cypress" />
// import HomePage from '../../../../support/pageObjects/HomePage'
// import ProductPage from '../../../../support/pageObjects/ProductPage'
// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// const homePage = new HomePage()
// const productPage = new ProductPage();
// const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
// import ProductPage from '../../../../support/pageObjects/ProductPage'

class HomePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')

    }
    getGender() {
        return cy.get('select')
    }

    getEntrepreneaur() {
        return cy.get('#inlineRadio3')
    }
    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    openEcommPage(){
        cy.visit(Cypress.env('url') + "/angularpractice/")
    }
    validateFormsBehaviour() {
        // getTwoWayDataBinding().should('have.value', 'Amit')
        this.getEditBox().should('have.attr', 'minlength', '2')
        this.getEntrepreneaur().should('be.disabled')
    }

    fillFormDetails(dataTable) {
        let name = dataTable.rawTable[1][0]
        this.getEditBox().type(dataTable.rawTable[1][0])
        this.getGender().select(dataTable.rawTable[1][1])
        cucumberJson.attach(cy.screenshot(),'image/png');
    }
    selectShopPage(){
        this.getShopTab().click()
    }
}

export default HomePage;
