import HomePage from "../POM/home-page";

const homepage = new HomePage();

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
      // const homepage = new HomePage();
      cy.visit("/");
      homepage.clickGet();
      cy.url().should('include', '/commands/go')
    })
  })