class TaskPage {
  visit() {
    cy.visit("/");
  }
  // addTaskdescription() {
  //   cy.get('input[placeholder="Task description"]').type("Complete sample ");

  //   // Assert the input value
  //   cy.get('input[placeholder="Task description"]').should(
  //     "have.value",
  //     "Complete sample "
  //   );
  // }

  addTaskdescription(description) {
    cy.get('input[placeholder="Task description"]').type(description);

    // Assert the input value
    cy.get('input[placeholder="Task description"]').should(
      "have.value",
      description
    );
  }

  // addDropdownBox() {
  //   cy.contains("label", "Category")
  //     .parent()
  //     .find("select")
  //     .invoke("val", "Shopping")
  //     .trigger("change");
  // }
  //implementing dropdownbox using select
  addDropdownBox(category) {
    cy.contains("label", "Category")
      .parent()
      .find("select")
      .select(category)
      .should("have.value", category);
  }

  // addRadioButton() {
  //   cy.get('input[value="Low"]').should("be.visible");
  //   cy.get('input[value="Medium"]').should("be.visible");
  //   cy.get('input[value="High"]').should("be.visible");

  //   //selecting radio button
  //   cy.get('input[value="Medium"]').check().should("be.checked");
  // }

  //selecting radio button
  addRadioButton(priority) {
    cy.get(`input[value="${priority}"]`).check().should("be.checked");
  }

  //select due date
  // addDuedate() {
  //   cy.get(".react-datepicker__input-container input").click();
  //   cy.get(".react-datepicker__day--025").click();
  // }

  addDuedate(date) {
    cy.get(".react-datepicker__input-container input").click();
    cy.get(`.react-datepicker__day--0${date}`).click();
  }
  //submit
  submit() {
    cy.get('button[type="submit"]').click();
  }

  verifyTaskitemCount(itemCount) {
    cy.get("ul.space-y-4 > li").should("have.length", itemCount);
  }

  
}
export default TaskPage;
