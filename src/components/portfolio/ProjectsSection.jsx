import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Maximize2 } from "lucide-react";
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
        image: "https://www.gramasbrasil.com.br/imagens/quadra-poliesportiva/quadra-poliesportiva-02.jpg",
        aspectRatio: "aspect-video",
        objectFit: "object-cover",
        objectPosition: "object-center",
    },
    {
        title: "Thermal Printer Utility",
        shortDescription: "App nativo para impressoras térmicas BLE com processamento de IA.",
        fullDescription: "Solução focada em hardware de baixo nível. Implementa algoritmos de Dithering manual e multithreading para garantir impressão de alta qualidade em dispositivos Bluetooth, com geração de imagens via Hugging Face API.",
        tags: ["Dart", "Bluetooth LE", "AI Integration", "Isolates"],
        repo: "https://github.com/JulioCaetanovds/Thermal_Printer_APP.git",
        image: "https://cdn.leroymerlin.com.br/products/mini_impressora_termica_bluetooth_58mm_fichas_1571024828_e1e8_600x600.jpg",
        aspectRatio: "aspect-video",
        objectFit: "object-cover", 
        objectPosition: "object-center", // Revertido para centralizar a impressora
    },
    {
        title: "CrashHelper Mobile",
        shortDescription: "Assistente Multiagente com RAG e LLM local para triagem de crashes.",
        fullDescription: "Sistema de triagem e resolução automatizada de falhas mobile. Utiliza orquestração multiagente (CrewAI), busca semântica em banco vetorial (ChromaDB), protocolo FastMCP e execução 100% local com Ollama (LLaMA 3.2).",
        tags: ["CrewAI", "Python", "RAG", "Ollama"],
        repo: "https://github.com/JulioCaetanovds/crash-helper-mobile.git",
        image: "https://i.sstatic.net/q0epO.png",
        aspectRatio: "aspect-video",
        objectFit: "object-cover",
        objectPosition: "object-center", // Revertido para focar no erro vermelho
    },
    {
        title: "GhostTouch QA",
        shortDescription: "Driver de automação Black-box para Android Accessibility Service.",
        fullDescription: "Prova de Conceito de um driver nativo (Kotlin/Flutter) que permite automatizar apps de terceiros sem acesso ao código-fonte, simulando gestos reais através da API de acessibilidade do Android.",
        tags: ["Kotlin", "Android Native", "Flutter", "QA Automation"],
        repo: "https://github.com/JulioCaetanovds/GhostTouch-QA-Automation.git",
        image: "https://i.ibb.co/3yPHscLg/icon.png",
        aspectRatio: "aspect-video",
        objectFit: "object-cover", // Revertido para preencher o card inteiro sem bordas
        objectPosition: "object-center",
    },
    {
        title: "Fullstack Contact Manager",
        shortDescription: "Aplicação Fullstack Web com CRUD completo.",
        fullDescription: "Sistema de gestão de contactos desenvolvido com Laravel 11 e PHP 8.2. Conta com busca dinâmica em tempo real, validações no servidor e no cliente, notificações não intrusivas (SweetAlert2) e população automatizada via Seeders/Faker.",
        tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
        repo: "https://github.com/JulioCaetanovds/laravel-contact-manager-crud.git",
        image: "https://cdn-icons-png.flaticon.com/128/3772/3772136.png",
        aspectRatio: "aspect-video",
        objectFit: "object-contain", // Mantido como você gostou
        objectPosition: "object-center",
    },
    {
        title: "BugBank QA Automation",
        shortDescription: "Suíte de testes BDD focada em fluxos financeiros e regressão.",
        fullDescription: "Automação E2E para a aplicação bancária BugBank utilizando Ruby, Cucumber e Capybara. Implementa cenários BDD em Gherkin, manipulação dinâmica de massa de dados e suporte a execução paralela.",
        tags: ["Ruby", "Cucumber", "Capybara", "Selenium"],
        repo: "https://github.com/JulioCaetanovds/desafio-aut-ruby.git",
        image: "https://bugbank.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2Fbugbank.ede6fc83.png?url=%2F_next%2Fstatic%2Fmedia%2Fbugbank.ede6fc83.png&w=256&q=75",
        aspectRatio: "aspect-[21/9]", // Mantido como você gostou
        objectFit: "object-contain",
        objectPosition: "object-center",
    },
    {
        title: "E2E SaaS Registration Automation",
        shortDescription: "Automação E2E BDD com validação de regras de negócio e segurança.",
        fullDescription: "Projeto de engenharia de testes E2E em ambiente SaaS real utilizando Playwright, Cucumber e TypeScript. Aplica a arquitetura Page Object Pattern, geração dinâmica de massa de dados com Faker e tratamento automatizado para validação de barreiras antibot (reCAPTCHA).",
        tags: ["Playwright", "Cucumber", "TypeScript", "BDD"],
        repo: "https://github.com/JulioCaetanovds/e2e-automation-registration.git",
        image: "https://i.ibb.co/svfHszMR/904235e2-fef3-4048-9292-ed321dee3c39.jpg",
        aspectRatio: "aspect-[21/9]",
        objectFit: "object-cover",
        objectPosition: "object-center",
    },
    {
        title: "Test Strategy - Finanças",
        shortDescription: "Suíte fullstack aplicando a Pirâmide de Testes completa.",
        fullDescription: "Arquitetura de testes isolada com Playwright (E2E) usando Network Mocking, Vitest no Frontend e xUnit no Backend .NET. Focado em garantir 100% de confiabilidade nas regras de negócio.",
        tags: ["Playwright", "xUnit", "Vitest", ".NET"],
        repo: "https://github.com/JulioCaetanovds/minhas-financas-qa.git",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "aspect-[21/9]",
        objectFit: "object-cover",
        objectPosition: "object-center",
    },
    {
        title: "Python Playwright QA Suite",
        shortDescription: "Automação E2E moderna com foco em UX, testes exploratórios e Pytest.",
        fullDescription: "Suíte de engenharia de qualidade utilizando Playwright e Python. Une relatórios de testes exploratórios detalhados com automação E2E, geração de massa de dados dinâmica com Faker e lógica XFAIL para gestão de débitos técnicos.",
        tags: ["Python", "Playwright", "Pytest", "Faker"],
        repo: "https://github.com/JulioCaetanovds/python-playwright-qa-suite.git",
        image: "https://miro.medium.com/v2/resize:fit:948/1*pqQc4uDoAVyrI3Z2_TCrTA.png",
        aspectRatio: "aspect-[21/9]",
        objectFit: "object-cover",
        objectPosition: "object-center",
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
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className={`relative overflow-hidden ${project.aspectRatio || "aspect-video"}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${project.objectFit || "object-cover"} ${project.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-700`}
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