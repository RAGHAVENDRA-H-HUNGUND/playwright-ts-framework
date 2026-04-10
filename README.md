# Playwright Framework with TypeScript

[![GitHub Actions](https://github.com/RAGHAVENDRA-H-HUNGUND/playwright-ts-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/RAGHAVENDRA-H-HUNGUND/playwright-ts-framework/actions/workflows/playwright.yml)

A Playwright test automation framework built with TypeScript for browser-based UI testing.

## Requirements

- Node.js 18 or later
- npm

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Run tests

```bash
npm test
```

## Run headed tests

```bash
npm run test:headed
```

## View test report

```bash
npm run show-report
```

## GitHub Actions

This repository is configured with a GitHub Actions workflow at `.github/workflows/playwright.yml`.

The workflow runs on:

- `push` to `main` or `master`
- `pull_request` targeting `main` or `master`

It performs the following steps:

1. Checkout repository code
2. Setup Node.js
3. Install dependencies with `npm ci`
4. Install Playwright browsers via `npx playwright install --with-deps`
5. Run tests with `npm test`
6. Upload the `playwright-report/` folder as an artifact

## Notes

- Keep `playwright-report/` excluded from Git in `.gitignore`
- If you need custom test commands or browser settings, update `package.json` and `playwright.config.ts`
