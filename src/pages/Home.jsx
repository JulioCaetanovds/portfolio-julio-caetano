import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-body">
            <Navbar />
            <HeroSection />
            <TimelineSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}