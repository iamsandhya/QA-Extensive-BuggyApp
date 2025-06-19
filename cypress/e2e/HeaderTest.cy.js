describe("Header test", () => {
  it("verify header", () => {
    cy.visit("/");
    
    //verifying header
    cy.get("header h1")
      .should("be.visible")
      .and("have.text", "Extensive Buggy To-Do App");

    //Verify "Toggle Dark Mode" exists on the page
    cy.contains("button", "Toggle Dark Mode").should("exist");

    // Click the Toggle Dark Mode to switch to dark mode
    cy.contains("button", "Toggle Dark Mode").click();

    // Verify "Toggle Light Mode" exists on the page
    cy.contains("button", "Toggle Light Mode").should("exist");

    // Click the "Toggle Light Mode" button to switch back to light mode
    cy.contains("button", "Toggle Light Mode").click();

    //should navigate to About page when link is clicked
    cy.contains("a", "About").should("have.attr", "href", "/about").click();
    cy.url().should("include", "/about");
  });
});
