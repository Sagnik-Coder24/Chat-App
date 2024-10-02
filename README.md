# Chat App

Welcome to the Chat App repository! This project is a real-time messaging application built with React and Firebase. Users can create rooms, chat, and sign in for a personalized experience. The app is fully responsive, ensuring a seamless experience across devices.

## Features

- **Real-Time Messaging**: Send and receive messages instantly.
- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Chat Rooms**: Create or join chat rooms to communicate with others.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## Technologies Used

- **Frontend**: React JS
- **Backend**: Firebase (Authentication, Firestore Database)
- **Styling**: SCSS

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- NPM (v6.14.0 or higher)
- Firebase account

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Sagnik-Coder24/Chat-App.git
    cd chat-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    - Create a new Firebase project in the Firebase Console.
    - Enable Authentication and Firestore Database.
    - Replace the Firebase configuration object in `src/firebase.js` with your project's configuration:
    ```javascript
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

- **Sign Up/Sign In**: Use the authentication form to create an account or log in.
- **Create/Join Chat Rooms**: After signing in, you can create new chat rooms or join existing ones.
- **Send Messages**: Start chatting with others in real-time.

## Deployment

To deploy the application, you can use any hosting service that supports Node.js applications, such as Firebase Hosting, Netlify, or Vercel. Follow the instructions provided by your chosen hosting service to deploy the application.

## Contributing

Feel free to submit issues and pull requests if you find any bugs or would like to add new features.

## License

This project is open-source and available.
