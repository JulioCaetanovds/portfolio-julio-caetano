import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG = "https://media.base44.com/images/public/69bad5c35249709addc938db/ddab09fe2_generated_be8c869e.png";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    src={HERO_BG}
                    alt="Background minimalista"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
            </div>

            <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/30 animate-float" />
            <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "4s" }} />

            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-body text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-3"
                >
                    Olá, eu sou o
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-tight"
                >
                    Júlio{" "}
                    <span className="text-primary">Caetano</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-body text-base md:text-lg text-secondary font-semibold mt-4 tracking-wide"
                >
                    Mobile Fullstack Developer | QA Automation
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-body text-sm md:text-base text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed"
                >
                    Estudante de Análise e Desenvolvimento de Sistemas. Desenvolvedor focado em criar soluções robustas (Flutter/Node.js) e dedicado em garantir a qualidade de cada entrega através da <span className="font-semibold text-foreground">Engenharia de Testes</span> e automação inteligente.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a href="#projects">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                            Ver Projetos
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8 py-6 text-base rounded-full transition-all duration-300"
                        >
                            Fale Comigo
                        </Button>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex items-center justify-center gap-5 mt-8"
                >
                    <a
                        href="https://linkedin.com/in/juliocaetano15/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/JulioCaetanovds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}