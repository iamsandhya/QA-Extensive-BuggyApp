import TaskPage from "../Pages/TaskPage";

describe("Input Field Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("Create task", () => {
    const tasks = [
      {
        description: "Sample task",
        category: "Shopping",
        priority: "Low",
        date: "15",
      },
      {
        description: "Task12",
        category: "Work",
        priority: "Medium",
        date: "20",
      },
    ];
    tasks.forEach((task) => {
      cy.createTask(task);

      //remove Task
      cy.removeTask(task.description);
    });

    //verify the total Taskitems list
    cy.verifyTaskitemCount(0);
  });
});
