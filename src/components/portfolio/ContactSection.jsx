import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, User, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    // ALTERE O ENDPOINT ABAIXO PARA O SEU LINK DO FORMSPREE OU WEB3FORMS
    const formEndpoint = "https://formspree.io/f/mwvrawgl";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }
        setSending(true);

        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                toast.success("Mensagem enviada com sucesso!");
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Erro ao enviar mensagem. Tente os botões diretos abaixo.");
            }
        } catch (error) {
            toast.error("Erro de conexão. Tente os botões diretos abaixo.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 px-6 bg-card/40">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-2">
                        Vamos conversar
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                        Entre em Contato
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* COLUNA DO FORMULÁRIO */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="md:col-span-3 bg-card rounded-2xl p-8 border border-border/50 shadow-sm space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                Nome
                            </label>
                            <Input
                                placeholder="Seu nome"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="font-body bg-background border-border rounded-xl h-12 focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                Email
                            </label>
                            <Input
                                type="email"
                                placeholder="seu@email.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="font-body bg-background border-border rounded-xl h-12 focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-primary" />
                                Mensagem
                            </label>
                            <Textarea
                                placeholder="Escreva sua mensagem..."
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="font-body bg-background border-border rounded-xl min-h-[140px] focus:border-primary resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-6 text-base rounded-full transition-all duration-300"
                        >
                            {sending ? (
                                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar Mensagem
                                </>
                            )}
                        </Button>
                    </motion.form>

                    {/* COLUNA DOS BOTÕES DIRETOS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="md:col-span-2 flex flex-col gap-4 justify-center"
                    >
                        <div className="bg-card rounded-2xl p-6 border border-border/50 text-center mb-2">
                            <h3 className="font-display font-bold text-lg mb-2">Preferência por contato direto?</h3>
                            <p className="font-body text-sm text-muted-foreground">Estou disponível nas plataformas abaixo para conversas mais rápidas.</p>
                        </div>

                        {/* PREENCHA SEU NÚMERO APÓS O 5554 */}
                        <a
                            href="https://wa.me/5554991587307?text=Olá%20Júlio,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 py-4 rounded-xl font-body font-semibold transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            Chamar no WhatsApp
                        </a>

                        <a
                            href="mailto:juliocaetanovds@gmail.com"
                            className="flex items-center justify-center gap-3 bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground border border-secondary/30 py-4 rounded-xl font-body font-semibold transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Enviar E-mail Direto
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}