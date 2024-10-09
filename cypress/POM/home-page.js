class HomePage{

    elements={
        getLink : () => cy.contains('get'),
    }
 
    clickGet(){
        this.elements.getLink().click();}

}

export default HomePage;