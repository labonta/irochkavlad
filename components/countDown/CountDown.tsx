"use client"
import { useEffect, useState } from "react";
import { blackOpsOne } from "../fonts/Fonts";

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountDown() {
    const calculateTimeLeft = (): TimeLeft | null => {
        const targetDate = new Date("2026-08-01T15:15:00");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();


        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };


    };

    const formatTime = (num: number) => String(num).padStart(2, '0');

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);


    }, []);

    if (!timeLeft) return <h1 className={"text-gray-700 text-xl select-none " + blackOpsOne.className}>Мы вместе!</h1>;

    return (
        <>
            <div className={"flex flex-row text-gray-700 text-xl select-none " + blackOpsOne.className}>
                {<h1>{formatTime(timeLeft.days)}:</h1>}
                {<h1>{formatTime(timeLeft.hours)}:</h1>}
                {<h1>{formatTime(timeLeft.minutes)}:</h1>}
                {<h1>{formatTime(timeLeft.seconds)}</h1>}
            </div>
        </>
    );
}
