# Google Sheet Integration for EnquiryBazaar Contact Form

EnquiryBazaar contact form ka data seedhe **Google Sheet** me bhejne ke liye niche diye gaye aasan steps follow karein:

---

### Step 1: Google Sheet banayein
1. [Google Sheets](https://sheets.google.com) me ek new spreadsheet banayein (e.g. `EnquiryBazaar Leads`).
2. Row 1 me ye column headers daal dein:
   - **A1:** `Timestamp`
   - **B1:** `Name`
   - **C1:** `Phone`
   - **D1:** `Email`
   - **E1:** `Business Name`
   - **F1:** `Service Required`
   - **G1:** `City`
   - **H1:** `Requirement Note`
   - **I1:** `Lead Source`

---

### Step 2: Apps Script code paste karein
1. Sheet ke menu me jayein: **Extensions** > **Apps Script**.
2. Jo code window khulegi, waha pura code delete karke ye code paste karein:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.businessName || '',
      data.service || '',
      data.city || '',
      data.message || '',
      data.source || 'Website'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Web App Deploy karein
1. Upar right side me **Deploy** > **New deployment** par click karein.
2. Select type: **Web app** (Gear icon par click karein).
3. Settings:
   - **Description:** `Lead Capture Webhook`
   - **Execute as:** `Me` (Aapka email)
   - **Who has access:** **`Anyone`** *(Yeh zaroori hai taaki server bina login lead bhej sake)*
4. **Deploy** button click karein aur permissions allow karein.
5. Copy karein jo **Web app URL** milega (e.g. `https://script.google.com/macros/s/.../exec`).

---

### Step 4: Environment Variable `.env.local` me add karein
Project root me `.env.local` file banayein ya open karein aur ye line paste karein:

```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Bas! Ab koi bhi user jab Home page ke **Contact Us** form par form submit karega:
1. Data automatic aapki **Google Sheet** me new row ban kar add ho jayega.
2. User ke WhatsApp par formatted quotation/inquiry message open ho jayega.
