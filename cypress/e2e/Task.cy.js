describe("Input Field Test", () => {
  before (() => {
    cy.visit("/");
  });
   it("Create task", () => {
    cy.createTask();
  });
});
