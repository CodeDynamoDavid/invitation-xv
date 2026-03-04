'use client';
import { useState, useRef, useEffect } from "react";
import { VALERIA_DATA } from "../../../data/content";
import { IconButton, Stack } from "@mui/material";
import {
    PlayArrowOutlined,
    PauseOutlined,
    SkipNextOutlined,
    SkipPreviousOutlined
} from "@mui/icons-material";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const PLAYLIST = [
    { title: "Vals de las Flores", url: "/music/song1.mp3" },
    { title: "Perfect - Ed Sheeran", url: "/music/song2.mp3" },
];

export const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(PLAYLIST[currentIndex].url);

        const audio = audioRef.current;

        const updateProgress = () => {
            const current = audio.currentTime;
            const total = audio.duration;
            if (total) {
                setProgress((current / total) * 100);
                setCurrentTime(formatTime(current));
                setDuration(formatTime(total));
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.onended = () => handleNext();

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.pause();
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PLAYLIST[currentIndex].url;
            if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
        }
    }, [currentIndex]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        if (isPlaying) audioRef.current?.pause();
        else audioRef.current?.play().catch(console.error);
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

    return (
        <div className="flex flex-col items-center gap-12 py-20 px-8 bg-[#FFFDF5]">

            <div data-aos="fade-up" className="flex flex-col items-center w-full max-w-sm">

                <Stack direction="row" spacing={4} alignItems="center" className="mb-6">
                    <IconButton onClick={handlePrev} className="text-amber-800/40">
                        <SkipPreviousOutlined sx={{ fontSize: 35 }} />
                    </IconButton>

                    <IconButton
                        onClick={togglePlay}
                        className="bg-amber-900/5 border border-amber-200 text-amber-900 p-5 hover:bg-amber-100/50 shadow-sm"
                    >
                        {isPlaying ?
                            <PauseOutlined sx={{ fontSize: 45 }} /> :
                            <PlayArrowOutlined sx={{ fontSize: 45 }} />
                        }
                    </IconButton>

                    <IconButton onClick={handleNext} className="text-amber-800/40">
                        <SkipNextOutlined sx={{ fontSize: 35 }} />
                    </IconButton>
                </Stack>

                <div className="w-full space-y-3 text-center">
                    <p className={`${playfair.className} text-lg text-amber-950 italic tracking-wide`}>
                        {PLAYLIST[currentIndex].title}
                    </p>

                    <div className="relative w-full h-[2px] bg-amber-100 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-amber-600 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-amber-800/50 font-bold">
                        <span>{currentTime}</span>
                        <span>{duration}</span>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="relative max-w-xl text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-amber-200/60" />
                <p className={`${playfair.className} text-stone-500 italic leading-relaxed text-xl md:text-2xl py-12 px-6`}>
                    "{VALERIA_DATA.intro}"
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-amber-200/60" />
            </div>
        </div>
    );
};