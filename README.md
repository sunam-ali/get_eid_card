# Eid Mubarak Card Generator

This is a web application that allows users to create personalized **Eid Mubarak cards** with a customized name. The application provides a joyful experience for users to celebrate Eid by generating a custom greeting card that they can download and share with their loved ones.

## Features

- **Countdown Timer**: Displays a countdown to the next Eid celebration.
- **Personalized Greeting Cards**: Users can input their name to generate a personalized Eid Mubarak card.
- **Confetti Animation**: After generating a card, a celebration effect with confetti is triggered.
- **Download Card**: Users can download their personalized Eid Mubarak card as a PNG image.
- **Mobile and Desktop Responsive**: The app is optimized for both mobile and desktop users, ensuring a smooth experience across devices.

## Technologies Used

- **Frontend**:
  - **Next.js**: For building the React-based user interface.
  - **Tailwind CSS**: For styling the application with a utility-first CSS framework.
  - **React Confetti**: For the celebration confetti effect after generating the card.
  - **html-to-image**: For converting the generated card into an image that can be downloaded.

- **Cloudflare Workers**:
  - **KV Storage**: Used for storing and updating the global count of how many cards have been generated without the need for a backend server.

## How It Works

1. **User Input**: The user enters their name into an input field.
2. **Generate Card**: Upon clicking the "Generate Eid Card" button, a personalized greeting card is generated with the user's name.
3. **Confetti Animation**: Once the card is generated, a confetti animation appears as a celebration.
4. **Download Option**: The user can download the card as a PNG image.
5. **Cloudflare Workers Integration**: Each time a user generates a card, a request is sent to the Cloudflare Worker to increment a global counter that tracks the total number of cards generated.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/eid-mubarak-card-generator.git
