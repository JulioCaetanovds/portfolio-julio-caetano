import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import WorkProjectsSection from "@/components/portfolio/WorkProjectsSection";
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
            <WorkProjectsSection /> {/* SEÇÃO DE APPS PUBLICADOS */}
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}