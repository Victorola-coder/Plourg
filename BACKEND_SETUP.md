# Plourg Backend Setup Guide

This guide will help you set up the complete backend infrastructure for Plourg with Next.js API routes, PostgreSQL, Supabase, Zoho email integration, and Prisma ORM.

## 🚀 Quick Start

### 1. Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/plourg_db"

# Supabase (Optional - for additional features)
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
SUPABASE_SERVICE_ROLE_KEY="your_supabase_service_role_key"

# Zoho Email Configuration
ZOHO_EMAIL="your_email@zoho.com"
ZOHO_PASSWORD="your_zoho_password"
ZOHO_SMTP_HOST="smtp.zoho.com"
ZOHO_SMTP_PORT=587

# Admin Dashboard
ADMIN_SECRET_KEY="your_secure_admin_key_here"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 2. Database Setup

#### Option A: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database named `plourg_db`
3. Update the `DATABASE_URL` in your `.env.local`

#### Option B: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string and update `DATABASE_URL`
5. Use the Supabase credentials for the other environment variables

### 3. Database Migration

Run the following commands to set up your database:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# OR run migrations (for production)
npm run db:migrate
```

### 4. Zoho Email Setup

1. Create a Zoho account at [zoho.com](https://zoho.com)
2. Enable 2-factor authentication
3. Generate an app-specific password:
   - Go to Zoho Account Settings
   - Security > App Passwords
   - Generate a new password for "Mail"
4. Use this password in your `ZOHO_PASSWORD` environment variable

### 5. Start the Development Server

```bash
npm run dev
```

## 📊 Admin Dashboard

Access the admin dashboard at: `http://localhost:3000/admin`

**Default Admin Key**: Set your `ADMIN_SECRET_KEY` in the environment variables.

### Admin Features:

- View all waitlist entries with pagination
- Search and filter entries
- Delete entries
- Export data as CSV
- Real-time statistics

## 🔧 API Endpoints

### Waitlist Submission

- **POST** `/api/waitlist`
- **Body**: `{ name, phone, location, university, feedback? }`
- **Response**: Success/error message

### Admin Endpoints

- **GET** `/api/admin/waitlist?page=1&limit=10&search=query`
- **DELETE** `/api/admin/waitlist?id=entry_id`
- **GET** `/api/admin/export` (CSV download)

## 🚀 Production Deployment

### 1. Environment Variables

Set all environment variables in your production environment (Vercel, Railway, etc.)

### 2. Database

Use a production PostgreSQL database (Supabase, Railway, or AWS RDS)

### 3. Email Configuration

Ensure your Zoho SMTP credentials are correctly configured

### 4. Build and Deploy

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── api/
│   ├── waitlist/route.ts          # Waitlist submission endpoint
│   └── admin/
│       ├── waitlist/route.ts      # Admin waitlist management
│       └── export/route.ts        # CSV export endpoint
├── admin/page.tsx                 # Admin dashboard
├── lib/
│   ├── prisma.ts                  # Prisma client configuration
│   └── email.ts                   # Email service (Zoho)
└── components/molecules/
    └── waitlist-form.tsx          # Updated form with API integration

prisma/
└── schema.prisma                  # Database schema
```

## 🔍 Testing the Setup

1. **Test Waitlist Submission**:

   - Go to your homepage
   - Fill out the waitlist form
   - Submit and verify success message

2. **Test Admin Dashboard**:

   - Go to `/admin`
   - Enter your admin key
   - Verify you can see the submitted entries

3. **Test Email Notifications**:
   - Check your Zoho email for waitlist notifications
   - Verify emails are being sent correctly

## 🛠️ Troubleshooting

### Common Issues:

1. **Database Connection Error**:

   - Verify your `DATABASE_URL` is correct
   - Ensure the database exists and is accessible

2. **Email Not Sending**:

   - Check Zoho credentials
   - Verify app-specific password is used
   - Check SMTP settings

3. **Admin Dashboard Not Loading**:

   - Verify `ADMIN_SECRET_KEY` is set
   - Check browser console for errors

4. **Prisma Client Error**:
   - Run `npm run db:generate`
   - Ensure database schema is up to date

## 📈 Next Steps

1. **Analytics**: Add Google Analytics or similar
2. **Rate Limiting**: Implement rate limiting for API endpoints
3. **Email Templates**: Create custom email templates
4. **Notifications**: Add real-time notifications
5. **Backup**: Set up automated database backups

## 🔐 Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Admin Access**: Use strong, unique admin keys
3. **Rate Limiting**: Consider implementing rate limiting
4. **Input Validation**: All inputs are validated using Zod
5. **CORS**: Configure CORS if needed for production

## 📞 Support

If you encounter any issues:

1. Check the console logs for errors
2. Verify all environment variables are set
3. Ensure database connection is working
4. Test email configuration separately

---

**Happy coding! 🚀**
