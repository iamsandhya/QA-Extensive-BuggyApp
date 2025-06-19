# 🚀 Cypress Automation Testing Project

## 📌 Project Overview

This project is an end-to-end (E2E) UI automation framework built using **Cypress**. It targets the [Buggy To-Do App](https://bug-test-swart.vercel.app/) demo application and follows the **Page Object Model (POM)** design pattern for scalability and maintainability.

Dynamic test data is generated using **Faker**, and session cookies are managed for test reusability.

---

## 🛠️ Tech Stack

- **Cypress** v14.3.3 — JavaScript-based E2E testing framework
- **Node.js** v22.25.0 — Runtime environment for JavaScript
- **Mocha** — Cypress’s built-in test runner
- **Faker** — Fake data generation for testing

---

## 📦 Installation & Setup

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/iamsandhya/QA-Extensive-BuggyApp
cd your-repo-name
```
### 2️⃣ Install Dependencies
npm ci installs dependencies strictly as defined in package-lock.json, ensuring a clean and reliable environment
```bash
npm ci
```

### 3️⃣ Installation XPath Selectors in Cypress

Run the following command to install the plugin as a development dependency:
```bash
npm install -D cypress-xpath
```

### 👉 Run Cypress in Interactive Mode (GUI)
This opens the Cypress Test Runner, allowing you to run and debug tests interactively
```bash
npm run cy:open
```

### 👉 Run Cypress in Headless Mode (CLI)
Executes all tests via the command line, ideal for CI/CD pipelines.
```bash
npm run cy:run
```

### Available custom commands
```
createTask -> Creating a task

verifyTaskitemCount -> Verify total number of task

removeTask -> Delete created task

editTask -> Edit/Update created task

```
To use: 
```
cy.createTask();
cy.verifyTaskitemCount();
cy.removeTask();
cy.editTask();
```

## 📄 Test Plan Document
[📑 Test Plan - Google Docs]

You can find the detailed test Plan for all the scenarios in the following Google Docs:

👉 Click here to view the Test Plan Document
```
https://docs.google.com/document/d/1-EHfk-Ga9sooDrl2M-PUWgdhWnP9S98oLj_8D3e6Q98/edit?usp=sharing
```

## 📄 Test Cases Document
[📑 Test Cases - Google Sheet]

You can find the detailed test cases for all the scenarios in the following Google Sheet:

👉 Click here to view the Test Cases
```
https://docs.google.com/spreadsheets/d/1L1zqgh3pOdeD0vrW-H26vFVHJZT-ob9qOTjWOHdC2gg/edit?usp=sharing
```

## 📄 Bug Report Document
[📑 Bug Report - Google Sheet]

You can find the detailed bug report for all the scenarios in the following Google Sheet:

👉 Click here to view the bug report
```
https://docs.google.com/spreadsheets/d/1Tmmu6dzoIjtk4UDsNySkHoYKHFpXSE64Q-VgeW6caLM/edit?usp=sharing
```