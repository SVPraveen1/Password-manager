# Password Manager

A secure password and credit card manager built with Next.js, TypeScript, and Clerk Authentication.

## Live Demo

[View Live Demo](https://password-manager-4a9s956oh-svpraveen1s-projects.vercel.app)

## Features

- 🔐 Secure password storage
- 💳 Credit card information management
- 🌓 Dark/Light mode support
- 🔒 Authentication with Clerk
- 📱 Responsive design
- ⚡ Real-time updates

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Clerk Authentication
- React Hook Form
- Zod Validation
- Shadcn UI Components

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your Clerk credentials:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features Usage

### Password Management
- Add new passwords with website URL, username, and password
- View all saved passwords
- Secure storage with Clerk's metadata

### Credit Card Management
- Add new credit cards with card number, expiry date, and CVV
- View all saved cards
- Encrypted storage for sensitive information

## Security

- All sensitive data is stored securely using Clerk's user metadata
- Client-side form validation using Zod
- Protected routes with Clerk middleware
- Secure authentication flow

## Contributing

Feel free to open issues and pull requests for any improvements you'd like to add.

## License

MIT License
