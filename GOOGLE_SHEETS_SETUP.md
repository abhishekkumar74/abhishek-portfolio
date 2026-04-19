# Google Sheets Integration Setup Guide

This guide will help you connect your contact form to a Google Sheet to collect responses automatically.

## Step 1: Create a Google Sheet
1.  Go to [sheets.google.com](https://sheets.google.com).
2.  Create a **New blank spreadsheet**.
3.  Name the spreadsheet (e.g., "Contact Form Data").
4.  In the first row, add the following headers:
    *   `A1`: `timestamp`
    *   `B1`: `name`
    *   `C1`: `email`
    *   `D1`: `phone`
    *   `E1`: `subject`
    *   `F1`: `message`

## Step 2: Create a Google Apps Script
1.  In your spreadsheet, go to **Extensions** > **Apps Script**.
2.  Delete any existing code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header];
    });
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script
1.  Click **Deploy** > **New deployment**.
2.  For **Select type**, choose **Web app**.
3.  In the **Description**, you can write "Contact Form API".
4.  Set **Execute as** to **Me**.
5.  Set **Who has access** to **Anyone**.
    *   _This is required for the form to be able to send data to the sheet._
6.  Click **Deploy**.
7.  **Authorize access** if prompted.
8.  Copy the **Web app URL**. This is your script URL.

## Step 4: Set Up Environment Variables (Recommended for Security)
1.  Copy the `.env.example` file to create a new `.env` file:
    ```bash
    cp .env.example .env
    ```
2.  Open the `.env` file and replace `your_google_sheets_script_url_here` with the **Web app URL** you copied from Step 3.
3.  The `.env` file should look like this:
    ```
    VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    ```
4.  **Important**: The `.env` file is already in `.gitignore`, so your Google Sheets URL will not be committed to version control.

## Alternative Step 4: Direct Code Update (Less Secure)
If you prefer to update the code directly (not recommended for production):
1.  Open the `src/components/Contact.tsx` file in your project.
2.  Find the line: `const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;`
3.  Replace `import.meta.env.VITE_GOOGLE_SHEETS_URL` with the **Web app URL** you copied.
4.  Save the file.

Your contact form is now connected to your Google Sheet! New submissions will automatically appear as new rows. 