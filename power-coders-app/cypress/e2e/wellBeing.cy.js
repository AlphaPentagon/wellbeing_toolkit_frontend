describe("Home Page", () => {
  it("It should have a title.", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".h1title").should("have.text", "Wellbeing Toolkit");
  });

  it("it should welcome user Sarah", () => {
    cy.get("#welcome").should("have.text", "Welcome, Sarah!");
  });

  it("it should have weeks resources and titles visible", () => {
    cy.get(".resourceH3").should("be.visible");
    cy.get(".resourceTitle").should("be.visible");
  });

  it("it should have wellbeing check in", () => {
    cy.get(".wellbeingButton").should("have.text", "Wellbeing Check-in?");
  });

  it("it should have wellbeing resource link and it works.", () => {
    cy.get(".resourceLink").should("be.visible");
  });

  it("it should have quote and author", () => {
    cy.get(".quoteText").should("be.visible");
    cy.get(".quoteAuthor").should("be.visible");
  });

  it("it should have a timer on the right", ()=> {
    cy.get("#timer").should("be.visible");
  })


  it("it should click resouce links button", ()=> {
    cy.get(".wellbeingButton").click();
  })

  
  it("it should have a burger menu and click it", ()=> {
    cy.get("#react-burger-menu-btn").click();
  })

  it("it should have a menu items", ()=> {
    cy.get(".bm-item.menu-item").should("be.visible");
  })

  
  it("it should close the burger menu", ()=> {
    cy.get("#react-burger-cross-btn").click();
  })
});
