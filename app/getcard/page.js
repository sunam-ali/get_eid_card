"use client";
import { toPng } from "html-to-image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Confetti from "react-confetti";

export default function GetCard() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [showCard, setShowCard] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [downloaded, setDownloaded] = useState(false);
    const [celebrate, setCelebrate] = useState(false);
    const cardRef = useRef(null);

    const handleGenerateCard = () => {
        if (name.trim() === "") {
            setError("Name is required!");
            return;
        }
        setError("");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowCard(true);
            setCelebrate(true);
        }, 1500);
    };

    const handleDownload = () => {
        if (cardRef.current) {
            toPng(cardRef.current, { backgroundColor: "white" }).then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `Eid_Mubarak_${name}.png`;
                link.click();
                setDownloaded(true);
                router.push("/");
            });
        }
    };

    const handleGenerateNewCard = () => {
        setName("");
        setShowCard(false);
        setDownloaded(false);
        setError("");
        setLoading(false);
        setCelebrate(false);
    };

    return (
        <>
            <Head>
                <title>Get Your Eid Card - Eid Mubarak Wishes</title>
                <meta name="description" content="Create a personalized Eid Mubarak greeting card with your name and share it with your loved ones. Download and celebrate Eid in a unique way!" />
                <meta name="keywords" content="Eid Mubarak, Eid Wishes, Eid Greeting Card, Personalized Eid Card, Islamic Greeting Cards" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Get Your Eid Card - Eid Mubarak Wishes" />
                <meta property="og:description" content="Generate a beautiful Eid Mubarak card with your name and share it with friends and family!" />
                <meta property="og:image" content="/eid-card-preview.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/getcard" />
                <meta name="twitter:title" content="Get Your Eid Card - Eid Mubarak Wishes" />
                <meta name="twitter:description" content="Create and download a personalized Eid Mubarak greeting card." />
                <meta name="twitter:image" content="/eid-card-preview.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <main className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center px-4" style={{ backgroundImage: "url('/bg-image2.jpg')" }}>

                <div className="absolute inset-0 bg-black/85"></div>

                {celebrate && <Confetti width={window.innerWidth} height={window.innerHeight} />}

                <div className="z-50">
                    {!showCard && !downloaded && (
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                            <h1 className="text-2xl font-bold text-yellow-400">Enter Your Name</h1>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your Name"
                                className="w-full mt-4 p-3 rounded-lg text-white outline-none border focus:border-yellow-500 bg-gray-700"
                                required
                            />
                            {error && <p className="text-red-400 mt-2">{error}</p>}
                            <button
                                onClick={handleGenerateCard}
                                className="cursor-pointer mt-4 bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-lg transition-all"
                            >
                                {loading ? "Generating  ..." : "Generate Eid Card"}
                            </button>
                        </div>
                    )}

                    {showCard && !downloaded && (
                        <div className="mt-6 text-center">
                            <button onClick={handleGenerateNewCard} className="cursor-pointer px-1.5 relative left-40 size-1 z-10 text-gray-500">✖</button>
                            <div ref={cardRef} className="relative bg-yellow-400 p-8  shadow-xl w-80 h-80 flex flex-col items-center justify-center text-white"
                                style={{ backgroundImage: "url('/wish.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

                                <div className="absolute inset-0 bg-black/65"></div>
                                <h2 className="text-3xl font-bold z-10 text-gray-300">🌙 Eid Mubarak! 🎉</h2>
                                <p className="text-xl mt-2 z-10">Dear <span className="font-bold text-yellow-500">{name}</span>,</p>
                                <p className="mt-2 z-10">Eid Mubarak! May Allah bless you with joy, peace, and prosperity, and accept your prayers!</p>
                                <div className="absolute bottom-4 text-[14px] font-semibold z-10">- Sunam Ali</div>
                            </div>

                            <button
                                onClick={handleDownload}
                                className="mt-6 bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-lg transition-all cursor-pointer"
                            >
                                Download Card
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
