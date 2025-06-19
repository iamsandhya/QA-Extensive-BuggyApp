class TaskPage {
  visit() {
    cy.visit("/");
  }
  //Adding task description
  addTaskdescription(description) {
    cy.get('input[placeholder="Task description"]').type(description);

    // Assert the input value
    cy.get('input[placeholder="Task description"]').should(
      "have.value",
      description
    );
  }

  //Implementing dropdownbox using select
  addDropdownBox(category) {
    cy.contains("label", "Category")
      .parent()
      .find("select")
      .select(category)
      .should("have.value", category);
  }

  //Selecting radio button
  addRadioButton(priority) {
    cy.get(`input[value="${priority}"]`).check().should("be.checked");
  }

  //Select due date
  addDuedate(date) {
    cy.get(".react-datepicker__input-container input").click();
    cy.get(`.react-datepicker__day--0${date}`).click();
  }

  //submit
  submit() {
    cy.get('button[type="submit"]').click();
  }

  //Verifying total taskitem
  verifyTaskitemCount(itemCount) {
    cy.get("ul.space-y-4").should("exist");
    cy.get("ul.space-y-4 > li").should("have.length", itemCount);
  }
}
export default TaskPage;
