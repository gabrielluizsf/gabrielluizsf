import Head from 'next/head'
import Links from '../components/Links'

export default function AboutPage() {
  const experiences = [
    {
      company: 'Atendi9',
      role: 'Desenvolvedor',
      period: 'abr de 2026 – set de 2026 · 6 meses',
      location: 'Caruaru, Pernambuco, Brasil (Híbrido)',
      skills: [
        'Go (Golang)',
        'Node.js',
        'API REST',
        'WebSockets',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Heroku',
        'Linux',
        'Cloudflare R2',
        'Firebase',
        'OpenAI API',
        'Asaas API',
        'Revisão de Código'
      ],
      description: [
        'Arquitetei e desenvolvi um ecossistema backend em Go para uma plataforma de chat omnichannel baseada na API do WhatsApp em larga escala.',
        'Construí um monolito resiliente em Go (hospedado via Heroku Containers com Docker) para processamento de Webhooks da Meta, integrando Firebase para autenticação/autorização multi-tenant, OpenAI para autoatendimento e Asaas para billing.',
        'Projetei a camada de segurança com isolamento estrito de dados por empresa, RBAC (diferenciando acessos entre atendentes e administradores) e criptografia ponta a ponta para transações de cartão de crédito sem retenção de dados sensíveis no backend.',
        'Desenvolvi o módulo monetizável da plataforma com sistema de créditos e assinaturas para controle fino de consumo das APIs da OpenAI e WhatsApp Meta.',
        'Desenvolvi um serviço de WebSockets dedicado para tráfego e renderização de mensagens de chat em tempo real, desacoplando a entrega de eventos da camada de inteligência e persistência de dados.',
        'Criei uma API de upload de arquivos customizada em VPS Linux integrada ao Cloudflare R2 para contornar limitações de tamanho do Heroku, encapsulando o provider e impedindo a exposição das URLs do storage para o frontend.',
        'Iniciei o desenvolvimento de um sistema de gestão para PDV (Ponto de Venda) utilizando PostgreSQL.',
        'Atuei na revisão de código backend e no suporte técnico à equipe de frontend com orientações sobre performance e consumo de APIs.'
      ]
    },
    {
      company: 'I9si Sistemas',
      role: 'Desenvolvedor de Software',
      period: 'jul de 2023 – mar de 2026 · 2 anos e 9 meses',
      location: 'Caruaru, Pernambuco, Brasil',
      skills: [
        'Go (Golang)',
        'Node.js',
        'API REST',
        'MongoDB',
        'Google Cloud Platform (GCP)',
        'Heroku',
        'Linux',
        'OpenAI API',
        'WhatsApp Meta API'
      ],
      description: [
        'Projetei e implementei APIs REST escaláveis utilizando Node.js e Go para sistemas de comunicação empresarial.',
        'Desenvolvi uma plataforma web integrada à API oficial do WhatsApp (Meta), centralizando comunicação, agendamentos (Google Agenda) e fluxos de e-mail (Gmail via SMTP).',
        'Implementei integração com a API da OpenAI utilizando fine-tuning para criação de assistentes inteligentes capazes de realizar triagem e atendimento automático baseado no treinamento específico de cada cliente.',
        'Projetei um fluxo híbrido de atendimento onde a IA responde inicialmente e os operadores humanos podem assumir a conversa via interface web sem romper a experiência.',
        'Gerenciei a hospedagem de microsserviços no Heroku e ambientes de infraestrutura no Google Cloud Platform (GCP) utilizando MongoDB como banco de dados principal.'
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Gabriel Luiz | About</title>
      </Head>

      <div className="max-w-3xl py-12 md:py-20">
        <header className="mb-10">
          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-600 mb-2"># background.md</div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            Sobre mim<span className="text-neutral-400 dark:text-neutral-600">.</span>
          </h1>
        </header>

        {/* Bio Intro */}
        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono text-sm md:text-base">
          <p>
            Sou um desenvolvedor focado em construir soluções robustas e escaláveis de backend, especializado em ecossistemas de alta performance, arquiteturas limpas e automação.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-8">
            // Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="font-mono space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {exp.role} <span className="text-neutral-400 dark:text-neutral-600 font-normal">@</span> {exp.company}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">{exp.period}</span>
                </div>

                {exp.location && (
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {exp.location}
                  </p>
                )}

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 py-1">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 list-disc list-inside leading-relaxed pt-1">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="marker:text-neutral-400 dark:marker:text-neutral-600">
                      <span className="inline">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-4">
            // Ecosystem & Links
          </h2>
          <Links
            links={[
              { title: "Atendi9", href: "https://www.atendi9.com.br" }, 
              { title: "Free Gophers", href: "https://github.com/egonelbre/gophers" }
            ]}
          />
        </div>
      </div>
    </>
  )
}