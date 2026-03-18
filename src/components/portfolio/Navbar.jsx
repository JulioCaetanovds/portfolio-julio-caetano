import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="#hero" className="font-display text-xl font-bold text-primary">
                    JC<span className="text-foreground">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
                    >
                        <div className="flex flex-col items-center gap-4 py-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}