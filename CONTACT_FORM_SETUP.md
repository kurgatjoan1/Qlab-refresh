# 📧 Contact Form Setup Guide

## What We've Built

A fully functional contact form that:
- ✅ Collects user submissions (Name, Email, Message)
- ✅ Stores submissions in Strapi database
- ✅ Shows success/error messages
- ✅ Tracks submission status (new, read, replied, archived)
- ✅ Includes automatic timestamp
- ✅ Has form validation

---

## 🚀 Setup Steps

### Step 1: Restart Strapi

The new collection type needs Strapi to restart to be recognized.

```powershell
# Stop Strapi (Ctrl+C in the server terminal)
# Then restart it
cd server
npm run dev
```

**Wait for**: `Server started on http://localhost:1337`

---

### Step 2: Configure Permissions in Strapi Admin

1. **Go to**: http://localhost:1337/admin
2. **Navigate to**: Settings → Users & Permissions plugin → Roles → Public
3. **Find**: "Contact-submission" in the permissions list
4. **Check the box** for: `create`
5. **Click**: Save

This allows the public (your website visitors) to submit contact forms.

---

### Step 3: Restart Next.js

The new environment variable needs Next.js to restart.

```powershell
# Stop Next.js (Ctrl+C in the client terminal)
# Then restart it
cd client
npm run dev
```

---

## ✅ Testing the Contact Form

### 1. Submit a Test Message

1. Go to: http://localhost:3000
2. Scroll to the Contact Us section
3. Fill in the form:
   - **Full Name**: John Doe
   - **Email**: john@example.com
   - **Message**: This is a test message
4. Click **Submit**
5. You should see: "Thank you! Your message has been sent successfully."

### 2. View Submissions in Strapi

1. Go to: http://localhost:1337/admin
2. In the sidebar, click: **Contact Submissions**
3. You should see your test submission!

### 3. Check Submission Details

Click on any submission to see:
- Full Name
- Email
- Message
- Submitted At (timestamp)
- Status (new, read, replied, archived)

---

## 📊 Managing Submissions in Strapi

### View All Submissions
- Go to: **Content Manager → Contact Submissions**
- See all form submissions in a list

### Mark as Read
1. Click on a submission
2. Change **Status** dropdown to "read"
3. Click Save

### Reply to Submissions
1. Mark status as "replied" after responding
2. Add notes in a custom field (optional enhancement)

### Archive Old Submissions
1. Change status to "archived"
2. Or delete if no longer needed

---

## 🎨 Form Features

### Client-Side Validation
- All fields are required
- Email must be valid format
- Form can't be submitted while sending

### User Feedback
- **Success Message**: Green banner when sent successfully
- **Error Message**: Red banner if submission fails
- **Button States**: Shows "Sending..." during submission
- **Auto-clear**: Success message disappears after 5 seconds

### Form Behavior
- Fields are disabled while submitting
- Form resets after successful submission
- Maintains data if submission fails

---

## 🔧 Customization Options

### Add More Fields

Edit: `server/src/api/contact-submission/content-types/contact-submission/schema.json`

```json
"phone": {
  "type": "string",
  "required": false
},
"subject": {
  "type": "string",
  "required": true
}
```

Then update the client form and types accordingly.

### Change Status Options

Edit the `status` enum in the schema:
```json
"status": {
  "type": "enumeration",
  "enum": ["new", "in-progress", "completed", "archived"],
  "default": "new"
}
```

### Email Notifications (Advanced)

Install Strapi email plugin:
```powershell
cd server
npm install @strapi/plugin-email
```

Configure in `server/src/api/contact-submission/controllers/contact-submission.ts`:
```typescript
async create(ctx) {
  const response = await super.create(ctx);
  
  // Send email notification
  await strapi.plugins['email'].services.email.send({
    to: 'admin@yoursite.com',
    subject: 'New Contact Form Submission',
    text: `New message from ${ctx.request.body.data.fullName}`,
  });
  
  return response;
}
```

---

## 🐛 Troubleshooting

### "Failed to submit form"

**Check**:
1. Strapi is running: http://localhost:1337
2. Permissions are set correctly (Step 2 above)
3. Check browser console (F12) for errors

**Test API directly**:
```powershell
curl -X POST http://localhost:1337/api/contact-submissions `
  -H "Content-Type: application/json" `
  -d '{\"data\":{\"fullName\":\"Test\",\"email\":\"test@test.com\",\"message\":\"Test\"}}'
```

### Form doesn't reset after submission

Check that the success state is being set correctly. The form should reset in the `try` block of `handleSubmit`.

### Submissions not appearing in Strapi

1. Check that the submission was successful (green message appeared)
2. Refresh the Strapi admin page
3. Check the database file: `server/.tmp/data.db`

### CORS Errors

If you see CORS errors in the browser console, update `server/config/middlewares.ts`:

```typescript
{
  name: 'strapi::cors',
  config: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
}
```

---

## 📁 Files Changed/Created

### Server (Strapi)
- `server/src/api/contact-submission/` - New collection
  - `content-types/contact-submission/schema.json`
  - `controllers/contact-submission.ts`
  - `routes/contact-submission.ts`
  - `services/contact-submission.ts`

### Client (Next.js)
- `client/src/types.ts` - Added ContactFormData types
- `client/src/utils/contact-form.ts` - Submission handler
- `client/src/components/ContactUsSection.tsx` - Updated with form logic
- `client/.env.local` - Added NEXT_PUBLIC_STRAPI_API_URL

---

## 🎯 API Endpoint

**POST** `http://localhost:1337/api/contact-submissions`

**Request Body**:
```json
{
  "data": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message"
  }
}
```

**Response**:
```json
{
  "data": {
    "id": 1,
    "documentId": "abc123",
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message",
    "submittedAt": "2025-10-28T05:50:00.000Z",
    "status": "new",
    "createdAt": "2025-10-28T05:50:00.000Z",
    "updatedAt": "2025-10-28T05:50:00.000Z"
  }
}
```

---

## 🎉 You're All Set!

Your contact form is now fully functional and integrated with Strapi. All submissions will be stored in the database and can be managed through the Strapi admin panel.

### Quick Reference
- **Website**: http://localhost:3000
- **View Submissions**: http://localhost:1337/admin → Content Manager → Contact Submissions
- **API Endpoint**: http://localhost:1337/api/contact-submissions

