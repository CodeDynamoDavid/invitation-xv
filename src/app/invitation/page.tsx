"use client";

import { Confirmation } from "@/src/features/invitation/components/Confirmation";
import { Countdown } from "@/src/features/invitation/components/Coutdown";
import { DressCode } from "@/src/features/invitation/components/DressCode";
import { Footer } from "@/src/features/invitation/components/Footer";
import { Hero } from "@/src/features/invitation/components/Hero";
import { Location } from "@/src/features/invitation/components/Location";
import { ParentsInfo } from "@/src/features/invitation/components/ParentsInfo";
import { Photos } from "@/src/features/invitation/components/Photos";
import { Timeline } from "@/src/features/invitation/components/Timeline";

export default function InvitationPage() {
    return (
        <main>
            <Hero />
            <ParentsInfo />
            <Countdown />
            <Location />
            <Timeline />
            <Photos />
            <DressCode />
            <Confirmation />
            <Footer />
        </main>
    )
}