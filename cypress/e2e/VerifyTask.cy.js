describe("Verify task list", () => {
  before(() => {
    cy.visit("/");
  });
  it("Verify created task list", () => {
    cy.createTask();
    cy.get("ul.space-y-4 > li").should("have.length", 1);
  });
});
