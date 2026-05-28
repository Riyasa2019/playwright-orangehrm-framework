# Playwright OrangeHRM Automation Framework

## Overview

This project automates the OrangeHRM application using Playwright with JavaScript.

---

## Implemented Test Scenarios

### Task 1 — Valid Login Validation

* Login with valid credentials
* Dashboard validation
* Screenshot capture after successful login

### Task 2 — Invalid Login Validation

* Login with invalid credentials
* Error message validation
* Login page validation

### Task 3 — Admin Search & Table Validation

* Navigate to Admin module
* Search user by username
* Validate dynamic table data
* Validate username in search results

### Task 4 — API Validation During Login

* Capture login API response
* Validate response status code
* Validate successful response handling

---

## Framework Features

* Playwright with JavaScript
* Page Object Model (POM)
* Reusable methods
* Dynamic waits
* Assertions
* HTML report generation
* Screenshot on failure
* API/network validation

---

## Project Structure

HRM
│
├── pages/
├── tests/
├── utils/
├── screenshots/
├── playwright-report/
├── test-results/
│
├── playwright.config.js
├── package.json
└── README.md

---

## Installation

```bash
npm install
```

---

## Execute All Tests

```bash
npx playwright test
```

---

## Open HTML Report

```bash
npx playwright show-report
```

---

## Technologies Used

* Playwright
* JavaScript
* Node.js

---

## Author

Riya Samanta

