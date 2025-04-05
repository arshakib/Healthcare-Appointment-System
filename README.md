# Healthcare Appointment System

A modern web application for managing doctor appointments, built with Next.js, MongoDB, and NextAuth.

![System Preview](public/welcome.png)

## Features

- **User Authentication**: Secure login/register with NextAuth
- **Role-based Access**: Separate dashboards for doctors and patients
- **Appointment Management**: Schedule, view, and manage appointments
- **Doctor Profiles**: Detailed doctor information and availability
- **Patient Records**: Medical history and appointment tracking
- **AI Chat**: Integrated AI assistant for medical queries
- **Responsive Design**: Mobile-friendly interface

## Technologies Used

- Next.js 14 (App Router)
- MongoDB (Database)
- NextAuth (Authentication)
- Tailwind CSS + DaisyUI (Styling)
- React Hook Form (Forms)
- React Big Calendar (Scheduling)

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/healthcare-appointment-system.git
cd healthcare-appointment-system
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

## Project Structure

```
healthcare-appointment-system/
├── app/                  # Next.js app router
│   ├── (private-route)/  # Protected routes
│   ├── api/              # API routes
│   ├── components/       # Reusable components
│   └── models/           # Database models
├── public/               # Static files
└── styles/               # Global styles
```

## API Endpoints

- `/api/auth/*` - Authentication routes
- `/api/doctor/*` - Doctor data management
- `/api/patient/*` - Patient data management
- `/api/appointment/*` - Appointment scheduling
- `/api/ai/*` - AI chat functionality

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm lint` - Run ESLint

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
