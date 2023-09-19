class homePage {

    getLoginClose(){
        return cy.get("cy.get('._30XB9F')")
    }

    getL1Grocery(){
        return cy.xpath("//div[contains(text(),'Grocery')]")
    }

    getL1Mobiles(){
        return cy.xpath("//div[contains(text(),'Mobiles')]")
    }

    getL1Fashion(){
        return cy.xpath("//div[contains(text(),'Fashion')]")
    }

    getL1Electronics(){
        return cy.xpath("//div[contains(text(),'Electronics')]")
    }

    getL1HomeFurniture(){
        return cy.xpath("//div[contains(text(),'Home & Furniture')]")
    }

    getL1Appliances(){
        return cy.xpath("//div[contains(text(),'Appliances')]")
    }

    getL1Travel(){
        return cy.xpath("//div[contains(text(),'Travel')]")
    }

    getL1BeautyToysMore(){
        return cy.xpath("//div[contains(text(),'Beauty, Toys & More')]")
    }

    getL1TwoWheelers(){
        return cy.xpath("//div[contains(text(),'Two Wheelers')]")
    }

    getSearchTextBox(){
        return cy.get("[name='q']")
    }
}
export default homePage