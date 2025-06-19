class TaskPage {
  visit() {
    cy.visit("/");
  }
  addTaskdescription() {
    cy.get('input[placeholder="Task description"]').type("Complete sample ");

    // Assert the input value
    cy.get('input[placeholder="Task description"]').should(
      "have.value",
      "Complete sample "
    );
  }
  //implementing dropdownbox using select
  addDropdownBox() {
    cy.contains("label", "Category")
      .parent()
      .find("select")
      .invoke("val", "Shopping")
      .trigger("change");
  }
  //selecting radio button
  addRadioButton() {
    cy.get('input[value="Low"]').should("be.visible");
    cy.get('input[value="Medium"]').should("be.visible");
    cy.get('input[value="High"]').should("be.visible");

    //selecting radio button
    cy.get('input[value="Medium"]').check().should("be.checked");
  }

  //select due date
  addDuedate() {
    cy.get(".react-datepicker__input-container input").click();
    cy.get(".react-datepicker__day--025").click();
  }

  //submit
  submit() {
    cy.get('button[type="submit"]').click();
  }
}
export default TaskPage;
