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
        title: "QuadraFácil",
        shortDescription: "Plataforma Fullstack para descoberta e reserva de quadras.",
        fullDescription: "Backend robusto em Node.js/TypeScript com endpoints REST, integrado ao Firebase para autenticação de usuários. O frontend é um aplicativo móvel em Flutter que consome a API para permitir que atletas reservem horários e donos de quadras gerenciem suas agendas.",
        tags: ["Flutter", "Node.js", "Docker", "Firebase", "TypeScript"],
        repo: "https://github.com/JulioCaetanovds/ADS_JulioCaetano_QuadraFacil.git",
        // Imagem realista de código/mobile
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Thermal Printer Utility",
        shortDescription: "App nativo para impressoras térmicas BLE (58mm) com algoritmos de IA.",
        fullDescription: "Projeto que lida com processamento pesado de imagens e manipulação de hardware de baixo nível. Implementa algoritmo de Dithering (Floyd-Steinberg) manual com multithreading via Isolates no Dart, além de engenharia de prompt invisível conectada à API do Hugging Face para gerar imagens otimizadas para o papel térmico.",
        tags: ["Dart", "Bluetooth LE", "Hardware Integration", "Hugging Face"],
        repo: "https://github.com/JulioCaetanovds/Thermal_Printer_APP.git",
        // Imagem realista de hardware/impressão/mobile
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000&auto=format&fit=crop",
    },
    {
        title: "Rubeus E2E Automation",
        shortDescription: "Suíte robusta de automação E2E mesclando testes exploratórios e automação.",
        fullDescription: "Desenvolvido como teste prático de QA. Utiliza o padrão XFAIL para mapear bugs conhecidos sem quebrar a pipeline. Focado em garantir a qualidade e a melhor experiência do usuário, utilizando Faker para massa de dados dinâmica e Playwright para interação com a UI.",
        tags: ["Python", "Playwright", "Pytest", "Faker"],
        repo: "https://github.com/JulioCaetanovds/rubeus-teste-qa.git",
        // Imagem realista de automação/dashboard
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop",
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