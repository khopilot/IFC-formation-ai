'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Quiz } from "../components/quiz";
import { fetchQuizQuestions } from "../utils/api";
import { Modal } from "../components/modal";

type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export default function Home() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const openQuizModal = async () => {
    try {
      const questions = await fetchQuizQuestions();
      setQuizQuestions(questions);
      setShowQuiz(true);
    } catch (error) {
      console.error('Failed to fetch quiz questions:', error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero flex items-center relative overflow-hidden pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-10 md:right-40 w-72 h-72 bg-fr-blue/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute top-60 left-10 md:left-40 w-72 h-72 bg-fr-red/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-ai-secondary/10 rounded-full blur-3xl pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="headline-animation text-4xl font-extrabold sm:text-5xl md:text-6xl">
                <span className="block mb-3">Formation Intensive</span>
                <span className="block mb-3">sur</span>
                <span className="gradient-text-enhanced">
                  l&apos;Intelligence Artificielle
                </span>
              </h1>
              <p className="headline-animation animation-delay-200 mt-6 text-xl text-ai-gray dark:text-ai-light/80">
                Une formation intensive de deux jours sur l&apos;IA à l&apos;Institut Français du Cambodge
              </p>
              <div className="headline-animation animation-delay-300 mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://gpt.angkor-intelligence.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-ai bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-ai hover:shadow-ai-hover hover:scale-105 text-center"
                >
                  Essayer Angkor Intelligence GPT
                </a>
                <Link 
                  href="/about" 
                  className="btn-fr px-8 py-3 text-base font-medium rounded-md text-ai-primary dark:text-white border-2 border-ai-primary dark:border-white hover:border-transparent dark:hover:border-transparent transition-all duration-300 text-center"
                >
                  <span className="relative z-10">Découvrir le Programme</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-full h-96 relative animate-float">
                <div className="absolute top-0 right-0 w-64 h-64 bg-fr-blue/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-fr-red/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 transform transition-all duration-500 hover:scale-105">
                  <Image 
                    src="/ai-illustration.svg" 
                    alt="Intelligence Artificielle" 
                    width={500} 
                    height={400}
                    className="object-contain"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-ai rounded-lg rotate-12 opacity-80 animate-float"></div>
                <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-fr rounded-full opacity-60 animate-float animation-delay-300"></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-fr-red/60 rounded-full opacity-70 animate-float animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section py-16 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-ai-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ai-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block headline-animation">
              <h2 className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-ai-light dark:bg-ai-dark/50 text-ai-primary dark:text-ai-light mb-4">
                Points Forts
              </h2>
            </div>
            <p className="headline-animation animation-delay-100 text-3xl font-bold tracking-tight sm:text-4xl gradient-text-enhanced">
              Une formation complète sur l&apos;IA
            </p>
            <p className="headline-animation animation-delay-200 mt-4 max-w-2xl mx-auto text-lg text-ai-gray dark:text-ai-light/80">
              Découvrez les fondamentaux de l&apos;IA et ses applications concrètes adaptées au contexte cambodgien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card-fr p-8 hover:translate-y-[-5px] transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover">
              <div className="rounded-full bg-gradient-ai w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.63 48.63 0 0 1 12 20.904a48.63 48.63 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ai-dark dark:text-white mb-3">
                Théorie et Pratique
              </h3>
              <p className="text-ai-gray dark:text-ai-light/80">
                De la théorie fondamentale aux applications pratiques, apprenez comment l&apos;IA transforme tous les secteurs d&apos;activité.
              </p>
              <div className="mt-6 flex justify-end">
                <Link 
                  href="/about" 
                  className="text-ai-primary dark:text-ai-secondary font-medium group flex items-center transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card-fr p-8 hover:translate-y-[-5px] transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover">
              <div className="rounded-full bg-gradient-ai w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ai-dark dark:text-white mb-3">
                Contexte Local
              </h3>
              <p className="text-ai-gray dark:text-ai-light/80">
                Découvrez des exemples locaux comme l&apos;outil de cartographie de la pauvreté du PNUD et les solutions eKYC de Slash/Clik.
              </p>
              <div className="mt-6 flex justify-end">
                <Link 
                  href="/departments" 
                  className="text-ai-primary dark:text-ai-secondary font-medium group flex items-center transition-all duration-300"
                >
                  <span>Exemples locaux</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card-fr p-8 hover:translate-y-[-5px] transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover">
              <div className="rounded-full bg-gradient-ai w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ai-dark dark:text-white mb-3">
                Applications par Département
              </h3>
              <p className="text-ai-gray dark:text-ai-light/80">
                Explorez comment chaque département peut tirer profit de l&apos;IA, avec des cas d&apos;utilisation adaptés à vos besoins spécifiques.
              </p>
              <div className="mt-6 flex justify-end">
                <Link 
                  href="/departments" 
                  className="text-ai-primary dark:text-ai-secondary font-medium group flex items-center transition-all duration-300"
                >
                  <span>Voir les cas d&apos;usage</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card-fr p-8 hover:translate-y-[-5px] transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover group" onClick={openQuizModal}>
              <div className="rounded-full bg-gradient-ai w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ai-dark dark:text-white mb-3">
                Interactivité et Quiz
              </h3>
              <p className="text-ai-gray dark:text-ai-light/80">
                Une formation dynamique avec des quiz interactifs, des jeux de rôle et des démonstrations en direct d&apos;outils d&apos;IA.
              </p>
              <div className="mt-6 flex justify-center">
                <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-ai-light dark:bg-ai-dark/50 rounded-md group-hover:bg-gradient-ai text-ai-primary group-hover:text-white shadow-ai hover:shadow-ai-hover">
                  <span className="flex items-center relative z-10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Testez vos connaissances sur l&apos;IA
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="ai-gradient-bg p-8 md:p-12 lg:p-16 relative z-10">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                  Prêt à découvrir le potentiel de l&apos;IA?
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                  Rejoignez-nous pour deux jours de formation immersive et transformez votre approche de l&apos;IA.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://gpt.angkor-intelligence.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 text-base font-medium rounded-md text-ai-primary bg-white hover:bg-white/90 transition-colors duration-300 shadow-ai hover:shadow-ai-hover text-center w-full sm:w-auto hover:scale-105 transform transition-transform duration-300"
                  >
                    Essayer Angkor Intelligence GPT
                  </a>
                  <Link 
                    href="/contact" 
                    className="px-8 py-3 text-base font-medium rounded-md text-white border-2 border-white/70 hover:bg-white/10 transition-colors duration-300 text-center w-full sm:w-auto hover:scale-105 transform transition-transform duration-300"
                  >
                    Découvrir le Programme
                  </Link>
                </div>
              </div>
            </div>
            {/* Éléments décoratifs animés */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl pulse-slow animation-delay-300"></div>
              
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full rotate-slow opacity-30"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-white/10 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {showQuiz && (
        <Modal 
          isOpen={showQuiz} 
          onClose={() => setShowQuiz(false)} 
          title="Quiz sur l'Intelligence Artificielle"
        >
          <Quiz 
            questions={quizQuestions} 
            title="Testez vos connaissances sur l'IA"
          />
        </Modal>
      )}
    </>
  );
}
