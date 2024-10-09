import HomePage from "../../POM/home-page";

const homePage = new HomePage();

describe("home page", () => {
    it("HOO1", () => {
      cy.visit("/");
      cy.get('h1')
        .invoke('text')
        .then((text)=>{
          const trimmedText = text.trim();
          expect(trimmedText).to.equal('Kitchen Sink');
        })
    })

    // Only run one test when run these spec file
    it.only("HOO2",()=>{
      cy.visit("/");
      homePage.clickGet();
      // cy.contains('get').click();
      // homepage.clickGet();
      cy.url().should('include', '/commands/querying');
      cy.log("Status OK");
    })
  })