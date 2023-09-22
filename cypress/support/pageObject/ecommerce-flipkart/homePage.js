class homePage {

    getLoginClose(){
        return cy.get('._30XB9F')
    }

    getL1Grocery(){
        return cy.xpath("//span[contains(text(),'Grocery')]")
    }

    getL1Mobiles(){
        return cy.xpath("//span[contains(text(),'Mobiles')]")
    }

    getL1Fashion(){
        return cy.xpath("//span[contains(text(),'Fashion')]")
    }

    getL1Electronics(){
        return cy.xpath("//span[contains(text(),'Electronics')]")
    }

    getL1HomeFurniture(){
        return cy.xpath("//span[contains(text(),'Home & Furniture')]")
    }

    getL1Appliances(){
        return cy.xpath("//span[contains(text(),'Appliances')]")
    }

    getL1Travel(){
        return cy.xpath("//span[contains(text(),'Travel')]")
    }

    getL1BeautyToysMore(){
        return cy.xpath("//span[contains(text(),'Beauty, Toys & More')]")
    }

    getL1TwoWheelers(){
        return cy.xpath("//*[contains(text(),'Two Wheelers')]")
    }

    getSearchTextBox(){
        return cy.get("[name='q']")
    }

    validateDefaultSearchCategories(){
        globalThis.data.search.forEach(function(element){
            cy.log(element)
            cy.get('._1sFryS._2x2Mmc>li').each(($el,index,$list)=>{
                cy.get('._1sFryS._2x2Mmc>li').eq(index + 1).should('contain.text',element)
            }).then(($list)=>{
                expect($list).to.have.length(8)
            })
        })
    }
}
export default homePage