import React from 'react';
import { ShieldCheck, Database, LayoutPanelLeft, LineChart } from 'lucide-react';
import { ServiceBlock, Person, FaqItem } from './types';

// IMPORTAÇÃO DAS IMAGENS NA RAIZ
import fernandoImg from './Fernando - Pagare.jpeg';
import luisImg from './Luis Henrique Archanjo.jpg';
import leticiaImg from './leticiafita.jpg';
import liviaImg from './Lívia Fita.jpg';

export const SERVICES: ServiceBlock[] = [
  {
    title: "1️⃣ Diagnóstico & Viabilidade",
    icon: <LineChart className="w-6 h-6 text-emerald-500" />,
    items: [
      "Análise do modelo de negócio",
      "Estrutura societária",
      "Mapeamento regulatório",
      "Avaliação de riscos"
    ]
  },
  {
    title: "2️⃣ Estruturação Operacional",
    icon: <LayoutPanelLeft className="w-6 h-6 text-emerald-500" />,
    items: [
      "Definição do modelo BaaS",
      "Clareza de papéis regulatórios",
      "Desenho do fluxo de produtos tecnológicos",
      "Arquitetura operacional"
    ]
  },
  {
    title: "3️⃣ Documentação & Políticas",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    items: [
      "Organização completa de documentação",
      "Dataroom estratégico",
      "Políticas necessárias para aprovação",
      "Ajuste da comunicação institucional"
    ]
  },
  {
    title: "4️⃣ Interface com Mercado",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    items: [
      "Indicação de liquidantes",
      "Apoio em reuniões",
      "Negociação estratégica",
      "Acompanhamento até liberação de credenciais"
    ]
  }
];

export const MENTORS: Person[] = [
  {
    name: "Fernando Candido",
    role: "Presidente Pagare Instituição de Pagamento",
    description: "Referência no mercado de Instituições de Pagamento, acompanha de perto nossa jornada e contribui com visão estratégica profunda sobre estrutura regulatória e fluxos operacionais complexos.",
    image: fernandoImg
  },
  {
    name: "Luis Henrique Archanjo",
    role: "Ex-Fundador Cronos Bank",
    description: "Empreendedor que foi ponto de virada na trajetória das fundadoras, proporcionando experiência prática em mais de 120 projetos no ecossistema fintech.",
    image: luisImg
  },
  {
    name: "Henrique Costa",
    role: "CTO & Fundador da Evostack",
    description: "Estrategista em inovação e parceiro de longa data na construção de ecossistemas digitais.",
    image: "https://picsum.photos/seed/henrique/400/400"
  }
];

export const FOUNDERS: Person[] = [
  {
    name: "Letícia Fita",
    role: "Fundadora & Estrategista",
    description: "Com mais de 6 anos de atuação e participação em mais de 200 projetos BaaS. Especialista em desenho estratégico e interface com parceiros de mercado.",
    image: leticiaImg
  },
  {
    name: "Lívia Fita",
    role: "Co-Fundadora & Executiva Operacional",
    description: "Com mais de 5 anos de experiência no setor, atua na organização, execução e acompanhamento estratégico dos projetos.",
    image: liviaImg
  }
];

export const FAQ: FaqItem[] = [
  {
    question: "A Ordo é banco?",
    answer: "Não. Somos assessoria estratégica especializada na estruturação de fintechs."
  }
];
