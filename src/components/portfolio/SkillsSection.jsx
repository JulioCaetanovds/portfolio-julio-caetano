import React from "react";
import { motion } from "framer-motion";
import { Smartphone, TestTube, Database } from "lucide-react";

const categories = [
    {
        title: "Mobile",
        icon: Smartphone,
        skills: ["Flutter", "Dart", "Kotlin", "Android"],
    },
    {
        title: "QA Automation",
        icon: TestTube,
        skills: ["Python", "Playwright", "Cypress", "Ruby", "Postman"],
    },
    {
        title: "Backend / DB",
        icon: Database,
        skills: ["SQL", "PostgreSQL", "Firebase", "Supabase"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 md:py-32 px-6 bg-card/40">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-2">
                        Ferramentas
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                        Tech Stack
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, catIdx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display text-lg font-bold text-foreground mb-5">
                                    {cat.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-body text-xs font-medium px-3.5 py-1.5 rounded-full bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}