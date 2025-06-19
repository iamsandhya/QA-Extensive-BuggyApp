import TaskPage from "../Pages/TaskPage";

describe("Editing a field task", () => {
let taskPage;
  before(() => {
    cy.visit("/");
const taskPage = new TaskPage();

  });
  it("Edit a task", () => {
    const initialTask  = {
      description: "Sample task",
      category: "Shopping",
      priority: "Low",
      date: "15",
    };
    const updatedTask = {
      description: "Updated Sample Task",
      category: "Personal",
      priority: "Medium",
      date: "18",
    };
    cy.createTask(initialTask);
    
    cy.editTask(initialTask .description, updatedTask);
    cy.verifyTaskitemCount(1);
  });

});
