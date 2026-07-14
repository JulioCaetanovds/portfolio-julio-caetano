import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, ExternalLink, Smartphone } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

// ADICIONE SEUS LINKS REAIS DA PLAY STORE E AS IMAGENS DOS ÍCONES AQUI
const workProjects = [
    {
        title: "SN500 - Eixo",
        shortDescription: "Versão geral de pesagem por eixo baseada no projeto PRF.",
        fullDescription: "Aplicativo de pesagem por eixo desenvolvido com base na solução original da PRF. Foco em precisão e integração com o hardware da Saicon para medições confiáveis em campo.",
        tags: ["Flutter", "Dart", "Bluetooth LE", "Hardware Integration"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.saicon.sn500&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sn500/id6762484516",
        image: "https://play-lh.googleusercontent.com/lndjbkrC4xTyHupZzfEnwF-UWUMJw61Fb19FBk32R_YPv_J2-kJmQrbuDhhp7Yq7xQpzsXJTxv6mDGs0sr75jfo=w240-h480-rw", 
    },
    {
        title: "Manejo",
        shortDescription: "Gestão de rebanho com arquitetura offline-first e sync web.",
        fullDescription: "Sistema robusto para ambientes sem conexão de internet (offline-first). Realiza a coleta de dados de pesagem e sincroniza automaticamente com o sistema web via endpoints assim que a rede é restabelecida.",
        tags: ["Flutter", "Offline-First", "REST API", "Sync"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=br.com.saicon.sn250manejo&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/manejo/id6757704853",
        image: "https://play-lh.googleusercontent.com/n-ahxcPVuoRIXpL8Z7WijLdEiC-nstc_LlCXNn7ZZqAbYtaMUsreF04Kwcl0d9dNQiZYObxWlN2Xs7w7OJz2Fg=w240-h480-rw", 
    },
    {
        title: "SGP Colheita",
        shortDescription: "Monitoramento e controle de produtividade em colheitas.",
        fullDescription: "Aplicativo voltado para o agronegócio, integrando os indicadores da colheitadeira diretamente com o smartphone do operador, garantindo agilidade na leitura de dados em tempo real.",
        tags: ["Flutter", "Agrotech", "IoT"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=dev.saicon.app.harvest.colheita&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sgp-colheita/id6447269585",
        image: "https://play-lh.googleusercontent.com/aIckF743NH3xHSorRd5SuAw2XuoU41F0kxaKtHm818fD3C0zEWB6ZCWz-2IzqQu3cYfCTVAr4BpOjBO1m8qL9C8=w240-h480-rw",
    },
    {
        title: "SGP SN400",
        shortDescription: "Interface flexível para controle de máquinas agrícolas.",
        fullDescription: "Permite controle rigoroso de implementos. Arquitetura flexível que permite criar fluxos sob medida para grandes clientes do agronegócio, incluindo áreas de calibração.",
        tags: ["Flutter", "Custom UI", "BLE"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.saicon.sn400_app&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sn400/id6738698795",
        image: "https://play-lh.googleusercontent.com/Jw0E8VKkD5VgYG20EQLA0OHf2YIfEFZ_U76SVoYZCC11XmW4c4pqqf0ZIgDiW8FnthhY4V1uHrGFzaWggQdCiCw=w240-h480-rw",
    },
    {
        title: "SGP TMR SAICON",
        shortDescription: "Gerenciamento de alimentação animal com cálculo de misturas.",
        fullDescription: "Focado em TMR (Total Mixed Ration), o app ajuda na precisão da mistura de rações, integrando a balança do vagão forrageiro diretamente com o app.",
        tags: ["Flutter", "Data Processing", "Bluetooth"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=saicon.example.app_sgp&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sgp-tmr-saicon/id1658604010",
        image: "https://play-lh.googleusercontent.com/Myy3b0r1cii8U2CpHA-0LkMsSb0_o8DSdsiZTZIAVOPyP2yyAyuMQbam8ejBb7kpd920DXrmjc_9PAXDKkoCpg=w240-h480-rw",
    },
    {
        title: "SN150",
        shortDescription: "Controle de pesagem padrão focado em operação rápida.",
        fullDescription: "Interface simplificada para o indicador SN150, permitindo que operadores gerenciem cargas e descargas de forma rápida e eficiente diretamente pelo celular.",
        tags: ["Flutter", "UI/UX", "Hardware"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=saicon.sn150.app_sgp&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sn150/id6749542653",
        image: "https://play-lh.googleusercontent.com/pQeYfGI-dLRfiB33pDmo5RSyCakQ2dcYEO27vYKElfYfyNHDNcw5282QyZ1ycyC7o6y3e9Qw1LvgJGFojGzO0w=w240-h480-rw",
    },
    {
        title: "SN110",
        shortDescription: "Versão compacta e ágil para indicadores de entrada.",
        fullDescription: "Solução móvel para a linha de entrada de indicadores da Saicon. Otimizado para rodar em dispositivos de baixo desempenho mantendo a conexão BLE estável.",
        tags: ["Flutter", "Performance", "BLE"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.saicon.app_sn110&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/sn110/id6757721503",
        image: "https://play-lh.googleusercontent.com/jh8fR-jxbshpgA06k9bCzZbgkhmZNIESRBW0dYYIwX1CUxf-RKu_HnDIKHOSPnLT2XcZWzLX6gnfdzATT2TWKQ=w240-h480-rw",
    }
];

export default function WorkProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work-projects" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-2">
                        Mercado & Produção
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                        Aplicativos Publicados
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {workProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
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

                                    <div className="flex flex-wrap gap-4">
                                        {selectedProject.playStoreUrl && (
                                            <a
                                                href={selectedProject.playStoreUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-[#01875F] text-white px-4 py-2 rounded-lg hover:bg-[#01875F]/90 transition-colors font-body font-semibold text-sm"
                                            >
                                                <Smartphone className="w-4 h-4" />
                                                Google Play
                                            </a>
                                        )}
                                        
                                        {selectedProject.appStoreUrl && (
                                            <a
                                                href={selectedProject.appStoreUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-[#000000] text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-colors font-body font-semibold text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                App Store
                                            </a>
                                        )}
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