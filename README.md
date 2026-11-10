# Bank Loan Risk Prediction — Interactive User Guide

## Files
- `index.html` — page-by-page guide content and navigation.
- `style.css` — responsive visual design and CSS animations.
- `script.js` — Next/Back navigation, progress bar, restart, and keyboard controls.

## Pages
1. Welcome
2. Project overview
3. How to use the application
4–11. One page for each of the eight input fields
12. Submit and predict
13. Understand results, project links, help, and team credits

## Important: input ranges
The guide shows the limits that are actually enforced in the current Flask `app.py` validation:
- Age: 18–100
- Annual income: >= 0 (no maximum is specified in current validation)
- Credit score: 300–900
- Debt-to-income ratio: 0–1 (decimal form; 0.18 means 18%)
- Loan amount: >= 0 (no maximum is specified in current validation)
- Loan term: > 0 months (no maximum is specified in current validation)
- Past loans: >= 0 (no maximum is specified in current validation)
- Defaults: >= 0 (no maximum is specified in current validation)

These are application validation limits, not the observed minimum/maximum values in the original training dataset. Do not interpret an unspecified maximum as an unlimited realistic or recommended amount.

## Deploy on Vercel
1. Extract the ZIP.
2. Upload all three files to the root of a new GitHub repository.
3. Import that repository into Vercel.
4. Choose **Other** as Framework Preset.
5. Leave Build Command and Install Command empty.
6. Set Output Directory to `.` if required.
7. Deploy.

## Live project links
- Frontend: https://bank-f-nu.vercel.app/
- Backend health: https://bank-loan-risk-api-n.onrender.com/api/health
- Model info: https://bank-loan-risk-api-n.onrender.com/api/model-info

Project owner: Nilesh Manke.
Credits: Shakir Qureshi — model creation and dataset collection; Rahul Rathod — data cleaning and EDA.

This is an educational project guide. The prediction is not a real-world lending decision.
