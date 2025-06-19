  import TaskPage from "../Pages/TaskPage";

  Cypress.Commands.add("createTask", (task) => {
    const taskPage = new TaskPage();
    taskPage.addTaskdescription(task.description);
    taskPage.addDropdownBox(task.category);
    taskPage.addRadioButton(task.priority);
    taskPage.addDuedate(task.date);
    taskPage.submit();
  });

  Cypress.Commands.add("verifyTaskitemCount", (itemCount) => {
    const taskPage = new TaskPage();
    taskPage.verifyTaskitemCount(itemCount);
  });


  Cypress.Commands.add("removeTask", (description) => {
    const taskPage = new TaskPage();
    taskPage.removetask(description);
  });

  Cypress.Commands.add("editTask", (oldDescription, newTask) => {
    const taskPage = new TaskPage();
    taskPage.editTask(oldDescription, newTask);
  });
