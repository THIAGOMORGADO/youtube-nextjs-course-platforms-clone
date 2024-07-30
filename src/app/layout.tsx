import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Header from "./components/Header/Header";

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
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
