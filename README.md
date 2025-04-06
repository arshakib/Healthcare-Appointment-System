# AI-powered Healthcare Appointment System

A modern healthcare platform that uses artificial intelligence to recommend appropriate medical care and connect patients with the best available doctors in their area.

![System Preview](public/welcome.png)

## Features

- **AI-powered Recommendations**: Get personalized suggestions for medical care based on symptoms
- **Location-based Doctor Matching**: Find the best doctors in your area (e.g., Sylhet)
- **Direct Appointment Booking**: Schedule appointments with recommended doctors
- **User Authentication**: Secure login/register with NextAuth
- **Role-based Access**: Separate dashboards for doctors and patients
- **Appointment Management**: Schedule, view, and manage appointments
- **Doctor Profiles**: Detailed doctor information and availability
- **Patient Records**: Medical history and appointment tracking
- **Responsive Design**: Mobile-friendly interface with smooth animations

## Key AI Capabilities

- **Symptom Analysis**: AI evaluates user symptoms to recommend appropriate actions
- **Doctor Type Matching**: Suggests medical specialties based on symptoms
- **Doctor Recommendations**: Ranks available doctors in the user's area
- **Conversation Interface**: Natural language interaction for symptom reporting

## Live Link (https://healthcare-appointment-system-three.vercel.app/)

## Technologies Used

- **Frontend**:
  - Next.js 14 (App Router)
  - Tailwind CSS (Styling)
  - Framer Motion (Animations)
- **Backend**:
  - Next.js API Routes
  - MongoDB (Database)
  - Mongoose (ODM)
- **AI & Authentication**:
  - AI Agents for medical recommendations
  - NextAuth (Authentication)

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/ai-healthcare-appointment-system.git
cd ai-healthcare-appointment-system
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
AI_API_KEY=your_ai_service_key
```

4. Run the development server:

```bash
npm run dev
```

5. Visit http://localhost:3000 in your browser

## Project Structure

```
ai-healthcare-appointment-system/
├── app/                  # Next.js app router
│   ├── (private-route)/  # Protected routes
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── ai/           # AI recommendation endpoints
│   │   └── appointments/ # Appointment management
│   ├── components/       # Reusable components
│   └── models/           # Database models
├── lib/                  # Utility functions and AI logic
├── public/               # Static files
└── styles/               # Global styles
```

## API Endpoints

- `/api/auth/*` - Authentication routes
- `/api/ai/recommend` - AI recommendation engine
- `/api/doctors` - Doctor data and availability
- `/api/appointments/*` - Appointment scheduling
- `/api/locations/*` - Location-based services

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm lint` - Run ESLint

## Future Enhancements

- Mobile application integration
- Telemedicine video consultation
- Prescription management
- Health records integration
- Multi-language support for diverse populations

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
