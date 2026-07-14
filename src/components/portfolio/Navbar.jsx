import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Publicados", href: "#work-projects" },
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

    // Fecha o menu mobile ao clicar em um link
    const closeMenu = () => setMobileOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled
                    ? "bg-background/95 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="#hero" className="font-display text-xl font-bold text-primary">
                    JC<span className="text-foreground">.</span>
                </a>

                {/* Desktop Links */}
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

                {/* Botão Mobile - Aumentei o z-index e a área de clique */}
                <button
                    className="md:hidden text-foreground p-2 relative z-[110]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Abrir menu"
                >
                    {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="font-body text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
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