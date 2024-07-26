import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos ",
  description: "Os melhores curso de programacao gratuitos com a melhor experiencia de aprendizagem e foco em tecnologias atuais",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode; }> { }

export default function RootLayout({
  children,
}: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
