import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Desenvolvedor Mobile Fullstack",
        company: "Saicon Sistemas de Pesagem",
        period: "Maio 2025 – Presente",
        description:
            "Desenvolvimento e manutenção de 9 aplicativos em Flutter com arquitetura offline-first. Foco em prevenção de falhas e integração robusta com hardware via Bluetooth/IoT.",
    },
    {
        role: "Analista de Suporte ERP",
        company: "Elevor",
        period: "Fevereiro 2025 – Maio 2025",
        description:
            "Atuação estratégica no suporte a módulos financeiro e fiscal. Responsável pela análise de logs para troubleshooting e documentação detalhada de cenários de falha para o time de desenvolvimento.",
    },
    {
        role: "Suporte de Filiais",
        company: "Rede de Farmácias São João",
        period: "Setembro 2024 – Fevereiro 2025",
        description:
            "Atendimento técnico N1 em ambiente corporativo de grande escala. Foco na identificação de padrões de falhas operacionais e categorização precisa de chamados críticos.",
    },
    {
        role: "Estagiário em Suporte Técnico",
        company: "SomaSys",
        period: "Maio 2024 – Setembro 2024",
        description:
            "Diagnóstico de falhas de hardware/software e execução de consultas em banco de dados (SQL e Firebird) para garantir a integridade das informações durante o atendimento.",
    },
    {
        role: "Estagiário de QA / Automação",
        company: "Compass UOL",
        period: "Junho 2023 – Novembro 2023",
        description:
            "Desenvolvimento de scripts de automação do zero (Ruby/Capybara) e estruturação de cenários de teste BDD (Cucumber) para identificação precoce de falhas em ambiente ágil.",
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