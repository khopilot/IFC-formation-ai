'use client';

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero flex items-center relative overflow-hidden pt-40 pb-24">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-10 md:right-40 w-80 h-80 bg-fr-blue/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute top-60 left-10 md:left-40 w-80 h-80 bg-fr-red/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-ai-secondary/10 rounded-full blur-3xl pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full z-10">
          <div className="text-center mb-12">
            <h1 className="headline-animation text-5xl font-extrabold sm:text-6xl">
              <span className="gradient-text-enhanced">
                Programme de la Formation
              </span>
            </h1>
            <p className="headline-animation animation-delay-200 mt-8 text-xl text-ai-gray dark:text-ai-light/80 max-w-3xl mx-auto leading-relaxed">
              Une formation intensive de deux jours sur l&apos;intelligence artificielle adaptée au contexte cambodgien
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-24 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ai-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ai-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-ai-primary/10 rounded-full rotate-slow opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-ai-accent/10 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 relative z-10">
          <div className="md:col-span-2 animate-on-scroll">
            <h2 className="text-3xl font-bold text-ai-dark dark:text-ai-light mb-8 gradient-text-enhanced">
              Contexte et Objectifs
            </h2>
            <div className="card-fr p-8 bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 mb-12">
              <p className="text-ai-gray dark:text-ai-light/80 mb-6 text-lg leading-relaxed">
                Cette formation intensive sur l&apos;Intelligence Artificielle (IA) a été conçue spécifiquement pour l&apos;Institut Français du Cambodge. 
                Elle vise à démystifier l&apos;IA et à fournir des connaissances pratiques adaptées au contexte local.
              </p>
              <p className="text-ai-gray dark:text-ai-light/80 mb-6 text-lg leading-relaxed">
                L&apos;objectif principal est de donner aux participants une compréhension claire des fondamentaux de l&apos;IA, tout en explorant 
                des applications concrètes qui peuvent être mises en œuvre dans différents départements de l&apos;Institut.
              </p>
              <p className="text-ai-gray dark:text-ai-light/80 text-lg leading-relaxed">
                La formation met l&apos;accent sur des exemples locaux et des cas d&apos;utilisation adaptés au contexte cambodgien, tels que 
                l&apos;outil de cartographie de la pauvreté du PNUD et les solutions eKYC développées par Slash/Clik.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-ai-dark dark:text-ai-light mb-8 gradient-text-enhanced">
              Approche Pédagogique
            </h2>
            <div className="card-fr p-8 bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300">
              <p className="text-ai-gray dark:text-ai-light/80 mb-6 text-lg leading-relaxed">
                Notre approche combine théorie et pratique, avec un accent sur l&apos;interactivité et la participation active. 
                Les participants seront encouragés à poser des questions, à participer à des discussions de groupe et à 
                réfléchir à des applications concrètes pour leur propre travail.
              </p>
              <p className="text-ai-gray dark:text-ai-light/80 text-lg leading-relaxed">
                La formation inclut des quiz interactifs, des démonstrations en direct d&apos;outils d&apos;IA, et des sessions 
                de brainstorming pour explorer les possibilités d&apos;application dans le contexte spécifique de l&apos;Institut Français du Cambodge.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 animate-on-scroll animation-delay-200">
            <div className="bg-gradient-to-br from-white to-ai-light/30 dark:from-ai-dark dark:to-ai-dark/80 p-10 rounded-xl shadow-ai hover:shadow-ai-hover transition-all duration-300 transform hover:scale-[1.02] border border-ai-light/20 dark:border-ai-primary/10 sticky top-28">
              <h3 className="text-2xl font-semibold gradient-text-enhanced mb-8">
                Points Clés de la Formation
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Introduction aux concepts fondamentaux de l&apos;IA</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Applications concrètes adaptées au contexte local</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Cas d&apos;utilisation par département</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Ateliers pratiques et interactifs</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Considérations éthiques et limites de l&apos;IA</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <div className="rounded-full bg-gradient-ai w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ai-gray dark:text-ai-light/80 text-lg">Ressources pour continuer l&apos;apprentissage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two day overview */}
        <div className="mb-20 relative z-10 animate-on-scroll animation-delay-300">
          <h2 className="text-3xl font-bold text-ai-dark dark:text-ai-light mb-10 text-center gradient-text-enhanced">
            Aperçu des Deux Jours de Formation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card-fr bg-white dark:bg-ai-dark rounded-xl shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden transform hover:scale-[1.02]">
              <div className="bg-gradient-ai p-6">
                <h3 className="text-2xl font-semibold text-white">Jour 1: Introduction et Cas d&apos;Utilisation Généraux</h3>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-5">
                    <div className="rounded-full bg-fr-blue w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-ai-dark dark:text-ai-light text-xl">Matin (9h30 - 12h30)</h4>
                  </div>
                  <ul className="list-none pl-5 space-y-4 text-ai-gray dark:text-ai-light/70 text-lg">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Accueil et introduction à la formation
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Fondamentaux de l&apos;IA: définition, historique, évolution
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Types d&apos;IA: Narrow AI vs General AI
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Technologies clés: apprentissage automatique, NLP, vision par ordinateur
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-5">
                    <div className="rounded-full bg-fr-blue w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-ai-dark dark:text-ai-light text-xl">Après-midi (13h30 - 16h30)</h4>
                  </div>
                  <ul className="list-none pl-5 space-y-4 text-ai-gray dark:text-ai-light/70 text-lg">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Applications concrètes de l&apos;IA dans la vie quotidienne
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Démonstrations d&apos;outils comme Duolingo, Google Lens, Art Selfie
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Activité pratique: expérimentation avec différents outils d&apos;IA
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-ai-primary mr-4 flex-shrink-0"></span>
                      Quiz interactif et discussion de groupe
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-fr bg-white dark:bg-ai-dark rounded-xl shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden transform hover:scale-[1.02]">
              <div className="bg-gradient-fr p-6">
                <h3 className="text-2xl font-semibold text-white">Jour 2: Cas d&apos;Utilisation par Département</h3>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-center mb-5">
                    <div className="rounded-full bg-fr-red w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-ai-dark dark:text-ai-light text-xl">Matin (9h30 - 12h30)</h4>
                  </div>
                  <ul className="list-none pl-5 space-y-4 text-ai-gray dark:text-ai-light/70 text-lg">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      IA pour l&apos;administration: automatisation et analyse de données
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      IA pour le département IT: cybersécurité et maintenance prédictive
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      Centre de Ressources: systèmes de recommandation et catalogage intelligent
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-5">
                    <div className="rounded-full bg-fr-red w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-ai-dark dark:text-ai-light text-xl">Après-midi (13h30 - 16h30)</h4>
                  </div>
                  <ul className="list-none pl-5 space-y-4 text-ai-gray dark:text-ai-light/70 text-lg">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      IA pour les événements culturels et l&apos;éducation
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      Éthique de l&apos;IA: biais, vie privée, inclusivité
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      Atelier collaboratif: imaginer des applications d&apos;IA pour l&apos;Institut
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-fr-red mr-4 flex-shrink-0"></span>
                      Conclusion et remise des certificats de participation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="relative z-10 animate-on-scroll animation-delay-400">
          <div className="ai-gradient-bg p-14 rounded-xl shadow-ai hover:shadow-ai-hover transition-all duration-300 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full rotate-slow opacity-30"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white/10 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
            </div>
            
            <div className="text-center relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à vous lancer dans l&apos;aventure de l&apos;IA ?
              </h2>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">
                Rejoignez-nous pour cette formation intensive de deux jours et découvrez comment l&apos;IA peut transformer votre façon de travailler.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://gpt.angkor-intelligence.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 text-lg font-medium rounded-md text-ai-primary bg-white hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-ai hover:shadow-ai-hover text-center"
                >
                  <span className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Essayer Angkor Intelligence GPT
                  </span>
                </a>
                <Link 
                  href="/contact" 
                  className="px-10 py-4 text-lg font-medium rounded-md text-white border-2 border-white/70 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Plus d&apos;informations
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}