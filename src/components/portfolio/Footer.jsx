import React from "react";

export default function Footer() {
    return (
        <footer className="bg-foreground py-10 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="font-display text-lg md:text-xl italic text-background/80">
                    "Quality is not an act, it is a habit."
                </p>
                <p className="font-body text-xs text-background/40 mt-4">
                    © {new Date().getFullYear()} Júlio Caetano. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}