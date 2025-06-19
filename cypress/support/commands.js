import TaskPage from "../Pages/TaskPage";

Cypress.Commands.add("createTask", (task) => {
  const taskPage = new TaskPage();
  taskPage.addTaskdescription(task.description);
  taskPage.addDropdownBox(task.category);
  taskPage.addRadioButton(task.priority);
  taskPage.addDuedate(task.date);
  taskPage.submit();
  // taskPage.removeItem();
});

Cypress.Commands.add("verifyTaskitemCount", (itemCount) => {
  const taskPage = new TaskPage();
  taskPage.verifyTaskitemCount(itemCount);
});
