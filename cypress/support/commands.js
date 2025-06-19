import TaskPage from "../Pages/TaskPage";

Cypress.Commands.add("createTask", () => {
  const taskPage = new TaskPage();
  taskPage.addTaskdescription();
  taskPage.addDropdownBox();
  taskPage.addRadioButton();
  taskPage.addDuedate();
  taskPage.submit();
});
