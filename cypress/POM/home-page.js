class HomePage{

    elements={
        getLink : () => cy.contains('get'),
    }
 
    clickGet(){
        this.elements.getLink().click();}

}
// document.querySelector("body > div:nth-child(4) > div > div > ul > li:nth-child(1) > ul > li:nth-child(1) > a")

export default HomePage;