describe("Status Filter Functionality", () => {
  beforeEach(() => {
    cy.visit("/");

    const tasks = [
      {
        description: "Sample task",
        category: "Shopping",
        priority: "Low",
        date: "15",
      },
      {
        description: "BetaNinja Task",
        category: "Other",
        priority: "Medium",
        date: "20",
      },
      {
        description: "Beta Task",
        category: "Work",
        priority: "Low",
        date: "28",
      },
    ];

    tasks.forEach((task) => {
      cy.createTask(task);
    });
  });

  //Filtering Task by using Category "Work"
  it.only("Filters tasks by Category 'Work'", () => {
    cy.contains("label", "Category Filter")
      .parent()
      .find('input[role="combobox"]')
      .clear()
      .type("Work");

    cy.wait(200);

    cy.get("div[role='option']").contains("Work").click();
    cy.get("input[role='combobox']").should("have.value", "Work");

    // Assert tasks are filtered by 'Work'

    cy.get("div.shadow-md")
      .should("have.length.at.least", 0)
      .each(($task) => {
        cy.wrap($task).should("contain.text", "Work");
      });
  });

  //Filtering task by using StatusFilter
  
  it.skip("Selects All from Status Filter dropdown", () => {
    cy.get("select").eq(1).select("All");
    cy.contains("Sample task").should("exist");
  });

  it.skip("Selects Incompleted from Status Filter dropdown", () => {
    cy.contains("label", "Status Filter")
      .parent()
      .find("select")
      .select("Incomplete")
      .should("have.value", "Incomplete");
  });

  it.skip("Selects Completed from Status Filter dropdown", () => {
    cy.get("select").eq(1).select("Completed");
    cy.contains("Sample task").should("not.exist"); // assuming not completed
  });

  //Filtering task by using Sort By

  it.skip("Selects DueDate from Sort By dropdown", () => {
    cy.contains("label", "Sort By")
      .parent()
      .find("select")
      .select("DueDate")
      .should("have.value", "dueDate");
  });

  it.skip("Selects Priority from Sort By dropdown", () => {
    cy.contains("label", "Sort By")
      .parent()
      .find("select")
      .select("Priority")
      .should("have.value", "priority");
  });

  it.skip("Selects Text from Sort By dropdown", () => {
    cy.contains("label", "Sort By")
      .parent()
      .find("select")
      .select("Text")
      .should("have.value", "text");
  });

  //filtering by using Asc/Desc

  it.skip("Selects Ascending Order from dropdown", () => {
    cy.contains("label", "Order")
      .parent()
      .find("select")
      .select("Ascending")
      .should("have.value", "asc");
  });

  it.skip("Selects Descending Order from dropdown", () => {
    cy.contains("label", "Order")
      .parent()
      .find("select")
      .select("Descending")
      .should("have.value", "desc");
  });
});
