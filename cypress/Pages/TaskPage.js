class TaskPage {
  visit() {
    cy.visit("/");
  }

  addTaskdescription(description) {
    cy.get('input[placeholder="Task description"]').type(description);

    // Assert the input value
    cy.get('input[placeholder="Task description"]').should(
      "have.value",
      description
    );
  }

  //implementing dropdownbox using select
  addDropdownBox(category) {
    cy.contains("label", "Category")
      .parent()
      .find("select")
      .select(category)
      .should("have.value", category);
  }

  //selecting radio button
  addRadioButton(priority) {
    cy.get(`input[value="${priority}"]`).check().should("be.checked");
  }

  //select due date
  addDuedate(date) {
    cy.get(".react-datepicker__input-container input").click();
    cy.get(`.react-datepicker__day--0${date}`).click();
  }
  //submit
  submit() {
    cy.get('button[type="submit"]').click();
  }

  verifyTaskitemCount(itemCount) {
    cy.get("ul.space-y-4").should("exist");
    cy.get("ul.space-y-4 > li").should("have.length", itemCount);
  }

  editTask(oldDescription, newTask) {
    cy.contains("ul.space-y-4 li p", oldDescription)
      .closest("li")
      .should("exist")
      .within(() => {
        cy.get("button.bg-yellow-500").click(); // Click the Edit button
      });

    // Update the task fields
    this.addTaskdescription(newTask.description);
    this.addDropdownBox(newTask.category);
    this.addRadioButton(newTask.priority);
    this.addDuedate(newTask.date);
    this.submit();
  }
  removetask(description) {
    cy.contains("ul.space-y-4 li p", description)
      .closest("li")
      .find("button.bg-red-500")
      .click();
  }
}
export default TaskPage;
