import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Maximize2, ExternalLink } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const projects = [
    {
        title: "QuadraFácil (TCC)",
        shortDescription: "Plataforma Fullstack para descoberta e reserva de quadras.",
        fullDescription: "Sistema completo com backend em Node.js/TypeScript e app mobile em Flutter. Utiliza Firebase Auth para gestão de acesso e integra recursos de geolocalização e chat em tempo real.",
        tags: ["Flutter", "Node.js", "Firebase", "TypeScript"],
        repo: "https://github.com/JulioCaetanovds/ADS_JulioCaetano_QuadraFacil.git",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Thermal Printer Utility",
        shortDescription: "App nativo para impressoras térmicas BLE com processamento de IA.",
        fullDescription: "Solução focada em hardware de baixo nível. Implementa algoritmos de Dithering manual e multithreading para garantir impressão de alta qualidade em dispositivos Bluetooth, com geração de imagens via Hugging Face API.",
        tags: ["Dart", "Bluetooth LE", "AI Integration", "Isolates"],
        repo: "https://github.com/JulioCaetanovds/Thermal_Printer_APP.git",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Test Strategy - Finanças",
        shortDescription: "Suíte fullstack aplicando a Pirâmide de Testes completa.",
        fullDescription: "Arquitetura de testes isolada com Playwright (E2E) usando Network Mocking, Vitest no Frontend e xUnit no Backend .NET. Focado em garantir 100% de confiabilidade nas regras de negócio.",
        tags: ["Playwright", "xUnit", "Vitest", ".NET"],
        repo: "https://github.com/JulioCaetanovds/minhas-financas-qa.git",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "GhostTouch QA",
        shortDescription: "Driver de automação Black-box para Android Accessibility Service.",
        fullDescription: "Prova de Conceito de um driver nativo (Kotlin/Flutter) que permite automatizar apps de terceiros sem acesso ao código-fonte, simulando gestos reais através da API de acessibilidade do Android.",
        tags: ["Kotlin", "Android Native", "Flutter", "QA Automation"],
        repo: "https://github.com/JulioCaetanovds/GhostTouch-QA-Automation.git",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Rubeus Automation",
        shortDescription: "Automação E2E moderna com foco em UX e massa de dados dinâmica.",
        fullDescription: "Projeto de engenharia de qualidade utilizando Playwright e Python. Implementa geração de massa de dados realista com Faker e lógica XFAIL para gestão de débitos técnicos e bugs conhecidos.",
        tags: ["Python", "Playwright", "Pytest", "Faker"],
        repo: "https://github.com/JulioCaetanovds/rubeus-teste-qa.git",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Fim de Expediente",
        shortDescription: "Script de otimização de RAM para ambientes de alta performance.",
        fullDescription: "Automação em PowerShell que realiza o flush de memória cache e encerramento inteligente de processos de desenvolvimento (Docker, IDEs, WSL), preparando o hardware para workloads pesados ou games.",
        tags: ["PowerShell", ".NET", "System Optimization", "Automation"],
        repo: "https://github.com/JulioCaetanovds/fim-de-expediente.git",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-2">
                        Trabalhos Técnicos
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                        Projetos em Destaque
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                        <Maximize2 className="w-5 h-5" />
                                        <span>Ver Detalhes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                    {project.title}
                                </h3>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-body text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* MODAL DE DETALHES */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="max-w-2xl bg-card border-border">
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <DialogTitle className="font-display text-2xl mb-2">
                                        {selectedProject.title}
                                    </DialogTitle>
                                    <DialogDescription className="font-body text-base text-muted-foreground leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="mt-4">
                                    <h4 className="font-body text-sm font-semibold text-foreground mb-2">Tecnologias Utilizadas:</h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.tags.map((tag) => (
                                            <span key={tag} className="font-body text-xs font-semibold px-3 py-1 rounded-full bg-background border border-border text-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={selectedProject.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-body font-semibold text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            Ver Repositório
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}