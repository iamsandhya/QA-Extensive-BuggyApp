class TaskPage {
  visit() {
    cy.visit("/");
  }
//add task description

  addTaskdescription(description) {
    // waits for 3 sec to make sure the DOM is loaded properly.
    cy.wait(3000);

    cy.get('input[placeholder="Task description"]').type(description);

    // Assert the input value
    cy.get('input[placeholder="Task description"]').should(
      "have.value",
      description
    );
  }

//Edit Task 
  updateTaskDescription(description) {
    cy.wait(3000);
    cy.get('div.p-6.bg-gray-800 input[type="text"]')
      .first() // in case there are multiple inputs
      .should("be.visible")
      .and("not.be.disabled")
      .clear({ force: true })
      .type(description, { force: true })
      .should("have.value", description);
  }

  updateCategory(category) {
    cy.get("select.w-full.p-2.border.rounded.mb-4")
      .should("be.visible")
      .select(category)
      .should("have.value", category);
  }

  updatePriority(priority) {
    cy.get(`input[type="radio"][value=${priority}]`)
      .should("exist")
      .check({ force: true })
      .should("be.checked");
  }

  updateDueDate(dueDate) {
    const formattedDate = `06/${dueDate.toString().padStart(2, "0")}/2025`;

    cy.get("div.p-6.bg-gray-800.text-white").within(() => {
      this.addDuedate(dueDate);
    });
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
  
  editSubmit() {
    cy.get("div.p-6.bg-gray-800.text-white").within(() => {
      cy.contains("button", "Save").should("be.visible").click({ force: true });
    });
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
    this.updateTaskDescription(newTask.description);
    this.updateCategory(newTask.category);
    this.updatePriority(newTask.priority);
    this.updateDueDate(newTask.date);
    this.editSubmit();
  }
  removetask(description) {
    cy.contains("ul.space-y-4 li p", description)
      .closest("li")
      .find("button.bg-red-500")
      .click();
  }
}
export default TaskPage;
