# SMTP Email Setup

The `.env.local` file has been created with default Gmail settings.

## Update with your credentials

Edit `.env.local` and replace the placeholder values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

## Gmail Setup

If using Gmail:
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password (not your regular password)
4. Use the App Password as SMTP_PASS

## Alternative SMTP Providers

You can use any SMTP provider like:
- SendGrid
- Mailgun
- Amazon SES
- Outlook/Hotmail

Just update the SMTP_HOST, SMTP_PORT, and credentials accordingly.
