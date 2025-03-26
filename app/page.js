"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const texts = useMemo(() => ["ঈদ মুবারক ❤️", "Eid Mubarak ❤️"], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const eidDate = useMemo(() => new Date("2025-03-31T00:00:00"), []);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const difference = eidDate - new Date();
      setTimeLeft({
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      });
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [eidDate]);

  useEffect(() => {
    if (!mounted) return;
    const typeEffect = () => {
      const currentText = texts[currentTextIndex];

      setText((prev) =>
        isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [texts, isDeleting, currentTextIndex, mounted, text]);

  return (
    <>
      <Head>
        <title>Get Your Eid Card & Share Eid Mubarak Wishes</title>
        <meta name="description" content="Create and share personalized Eid Mubarak cards with your loved ones. Get your Eid card now and celebrate with joy!" />
        <meta name="keywords" content="Eid Mubarak card, personalized Eid greetings, Eid wishes, festival card" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Get Your Eid Card & Share Eid Mubarak Wishes" />
        <meta property="og:description" content="Create and customize your Eid Mubarak card. Share heartfelt wishes with your loved ones this festive season!" />
        <meta property="og:image" content="/eid-card-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-image2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85"></div>

        <section className="absolute top-10 text-center z-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#19bd58] drop-shadow-lg">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </h2>
          <p className="text-xl font-semibold text-white">Counting Down to Eid 🎉</p>
        </section>

        <section className="z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-[#d6d43e] sm:text-4xl">
            {text}
            <span className="border-r-4 border-white animate-blink"></span>
          </h1>

          <Link href="/getcard">
            <button
              className="cursor-pointer mt-12 px-6 py-3 bg-green-800 text-white font-semibold sm:text-xl rounded-lg shadow-lg hover:bg-green-900 transition-all duration-300"
              aria-label="Get Your Eid Card"
            >
              Get Your Eid Card
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
