import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Get Your Eid Card & Share Eid Mubarak Wishes",
  description: "Create a personalized Eid Mubarak card and share your festive greetings with friends and family. Get your Eid card now!",
  keywords: "Eid Mubarak card, personalized Eid greetings, Eid wishes, Eid festival card",
  author: "Your Name",
  openGraph: {
    title: "Get Your Eid Card & Share Eid Mubarak Wishes",
    description: "Create and customize your Eid Mubarak card. Share heartfelt wishes with your loved ones this festive season!",
    type: "website",
    url: "https://get-eid-card.vercel.app",
    images: [
      {
        url: "https://get-eid-card.vercel.app/geteidcard.jpg",
        width: 1200,
        height: 630,
        alt: "Eid Mubarak Personalized Card",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
