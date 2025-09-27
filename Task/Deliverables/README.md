# SauceDemo Automation Tests (Playwright + JavaScript)

## About
This project automates 3 core scenarios of the **SauceDemo** application using Playwright:
1. Successful login with valid credentials
2. Add to cart & verify item is present in cart
3. Complete checkout flow and verify successful order confirmation

The framework follows a **Locator + Function separation** for better maintainability.

---

##  Prerequisites
- Node.js (>=16) installed → [Download here](https://nodejs.org/)
- npm (comes with Node.js)

---

##  Setup Instructions

```bash
# Clone project or copy files into a folder
cd saucedemo-automation

# Initialize project (if not already)
npm init -y

# Install Playwright Test
npm install @playwright/test --save-dev

# Install browsers (Chromium, Firefox, WebKit)
npx playwright install
