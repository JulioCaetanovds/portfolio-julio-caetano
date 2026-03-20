import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Desenvolvedor Mobile Fullstack",
        company: "Saicon Sistemas de Pesagem",
        period: "Maio 2025 – Presente",
        description:
            "Desenvolvimento e manutenção de 9 aplicativos em Flutter, estruturação de arquitetura offline-first e integração com hardware via Bluetooth/IoT para pesagem industrial.",
    },
    {
        role: "Analista de Suporte ERP",
        company: "Elevor",
        period: "Fevereiro 2025 – Maio 2025",
        description:
            "Atuação estratégica no suporte a módulos financeiro e fiscal, realizando homologação de atualizações de sistema e análise aprofundada de logs para troubleshooting e reporte de bugs.",
    },
    {
        role: "Suporte de Filiais",
        company: "Rede de Farmácias São João",
        period: "Setembro 2024 – Fevereiro 2025",
        description:
            "Suporte técnico em ambiente corporativo de grande escala. Responsável pela triagem crítica de chamados operacionais, desenvolvendo forte capacidade de identificação de padrões de falhas.",
    },
    {
        role: "Estagiário de QA / Automação",
        company: "Compass UOL",
        period: "Junho 2023 – Novembro 2023",
        description:
            "Implementação de automação de testes web utilizando Ruby, Cucumber e Capybara, com forte base em BDD (Behavior Driven Development) e execução de testes exploratórios.",
    },
];

export default function TimelineSection() {
    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-2">
                        Trajetória
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                        Experiência Profissional
                    </h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-start mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>

                                <div
                                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                                        }`}
                                >
                                    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                                        <span className="font-body text-xs font-semibold text-primary tracking-wider uppercase">
                                            {exp.period}
                                        </span>
                                        <h3 className="font-display text-lg font-bold text-foreground mt-2">
                                            {exp.role}
                                        </h3>
                                        <p className="font-body text-sm font-medium text-secondary mt-1">
                                            {exp.company}
                                        </p>
                                        <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}