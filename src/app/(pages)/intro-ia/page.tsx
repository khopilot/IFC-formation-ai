'use client';

import React from 'react';
import Image from 'next/image';

export default function IntroIAPage() {
  return (
    <>
      <section className="section-hero flex items-center relative overflow-hidden pt-48 pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-10 md:right-40 w-96 h-96 bg-fr-blue/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute top-60 left-10 md:left-40 w-96 h-96 bg-fr-red/10 rounded-full blur-3xl pulse-slow"></div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[32rem] h-[32rem] bg-ai-secondary/10 rounded-full blur-3xl pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full z-10">
          <div className="text-center mb-16">
            <h1 className="headline-animation text-6xl font-extrabold sm:text-7xl mb-6">
              <span className="gradient-text-enhanced">
                Introduction à l&apos;Intelligence Artificielle
              </span>
            </h1>
            <p className="headline-animation animation-delay-200 mt-8 text-2xl text-ai-gray dark:text-ai-light/80 max-w-3xl mx-auto leading-relaxed">
              L&apos;intelligence artificielle transforme notre monde - découvrez les concepts fondamentaux et les technologies clés.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-ai-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] bg-ai-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-ai-primary/10 rounded-full rotate-slow opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-ai-accent/10 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 animate-on-scroll">
            <div className="flex items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Qu'est-ce que l'IA" 
                  width={800} 
                  height={600}
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl p-10 flex flex-col justify-center">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-4xl font-bold text-ai-dark dark:text-ai-light mb-6 gradient-text-enhanced">Qu&apos;est-ce que l&apos;IA ?</h2>
                
                <p className="text-lg leading-relaxed mb-6">L&apos;IA regroupe des techniques et des algorithmes permettant à des machines de simuler certaines capacités humaines comme l&apos;apprentissage, la prise de décision ou la compréhension du langage. Parmi les méthodes utilisées, on trouve :</p>
                
                <ul className="list-disc pl-6 space-y-4 mt-4">
                  <li className="text-lg">
                    <strong>L&apos;apprentissage automatique (machine learning) :</strong> Les machines apprennent à partir de données.
                  </li>
                  <li className="text-lg">
                    <strong>L&apos;apprentissage profond (deep learning) :</strong> Une sous-catégorie qui utilise des réseaux de neurones artificiels pour modéliser des structures complexes.
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed mt-6">L&apos;IA se retrouve dans de nombreux domaines tels que la santé, l&apos;éducation, le commerce en ligne ou encore l&apos;automatisation industrielle.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-24 animate-on-scroll animation-delay-100">
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-4xl font-bold text-ai-dark dark:text-ai-light mb-6 gradient-text-enhanced">Les réseaux de neurones</h2>
                
                <p className="text-lg leading-relaxed mb-6">Les réseaux de neurones sont inspirés du fonctionnement du cerveau humain. Ils sont constitués de couches de &quot;neurones&quot; artificiels qui traitent l&apos;information :</p>
                
                <ul className="list-disc pl-6 space-y-4 mt-4">
                  <li className="text-lg">
                    <strong>Les couches d&apos;entrée et de sortie :</strong> La première couche reçoit les données (par exemple, une image ou du texte) et la dernière fournit le résultat (comme une classification ou une prédiction).
                  </li>
                  <li className="text-lg">
                    <strong>Les couches cachées :</strong> Elles permettent d&apos;extraire des caractéristiques complexes et d&apos;apprendre des représentations à plusieurs niveaux.
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed mt-6">Ces réseaux sont à la base de nombreux systèmes d&apos;IA modernes, notamment dans le domaine de la vision par ordinateur et du traitement du langage naturel.</p>
              </div>
            </div>
            
            <div className="flex items-center order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Réseaux de neurones" 
                  width={800} 
                  height={600}
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-24 animate-on-scroll animation-delay-200">
            <div className="flex items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Code en IA" 
                  width={800} 
                  height={600}
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl p-10 flex flex-col justify-center">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-4xl font-bold text-ai-dark dark:text-ai-light mb-6 gradient-text-enhanced">Les bases du code en IA</h2>
                
                <p className="text-lg leading-relaxed mb-6">Pour développer des applications d&apos;IA, il est essentiel de maîtriser certains concepts de programmation :</p>
                
                <ul className="list-disc pl-6 space-y-4 mt-4">
                  <li className="text-lg">
                    <strong>Les langages de programmation :</strong> Python est le plus répandu en raison de ses bibliothèques dédiées à l&apos;IA (comme TensorFlow, PyTorch, ou Scikit-learn).
                  </li>
                  <li className="text-lg">
                    <strong>Les algorithmes d&apos;apprentissage :</strong> Comprendre comment fonctionnent les algorithmes d&apos;optimisation (descente de gradient, par exemple) permet de mieux ajuster les modèles.
                  </li>
                  <li className="text-lg">
                    <strong>La manipulation des données :</strong> Les données sont la matière première de l&apos;IA. Savoir les nettoyer, les préparer et les exploiter est fondamental.
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed mt-6">Ces bases permettent de concevoir, entraîner et évaluer des modèles d&apos;IA de manière efficace.</p>
              </div>
            </div>
          </div>

          <div className="my-24 animate-on-scroll animation-delay-300">
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl p-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-4xl font-bold text-ai-dark dark:text-ai-light mb-10 gradient-text-enhanced text-center">Acteurs et outils dans le domaine de l&apos;IA</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
                        alt="ChatGPT" 
                        width={100} 
                        height={100}
                        className="mx-auto opacity-90 group-hover:opacity-100 transition-all"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">ChatGPT</h3>
                    <p className="text-lg leading-relaxed">ChatGPT est un modèle de traitement du langage naturel développé par OpenAI. Il utilise des réseaux de neurones pour générer des réponses cohérentes et contextuelles à partir de requêtes textuelles.</p>
                  </div>
                  
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" 
                        alt="Nvidia" 
                        width={150} 
                        height={100}
                        className="mx-auto opacity-90 group-hover:opacity-100 transition-all"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">Nvidia</h3>
                    <p className="text-lg leading-relaxed">Nvidia est un acteur majeur du secteur technologique, particulièrement reconnu pour ses cartes graphiques (GPU). Ces GPU sont essentiels pour entraîner les modèles d&apos;IA, accélérant ainsi l&apos;apprentissage profond.</p>
                  </div>
                  
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Mistral_AI_logo.svg" 
                        alt="Mistral AI" 
                        width={150} 
                        height={100}
                        className="mx-auto opacity-90 group-hover:opacity-100 transition-all"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">Mistral AI</h3>
                    <p className="text-lg leading-relaxed">Mistral AI est une entreprise émergente dans le domaine de l&apos;IA. Elle se distingue par ses efforts pour développer des modèles performants et innovants en s&apos;appuyant sur des approches open source.</p>
                  </div>
                  
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Anthropic_logo.svg" 
                        alt="Anthropic" 
                        width={150} 
                        height={100}
                        className="mx-auto opacity-90 group-hover:opacity-100 transition-all"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">Anthropic</h3>
                    <p className="text-lg leading-relaxed">Anthropic est une entreprise de premier plan qui se concentre sur la sécurité et la robustesse des systèmes d&apos;IA. L&apos;entreprise met l&apos;accent sur la compréhension et la réduction des biais, ainsi que sur l&apos;éthique de l&apos;IA.</p>
                  </div>
                  
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-ai-primary dark:text-ai-secondary mx-auto opacity-90 group-hover:opacity-100 transition-all" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 3l-7 7h4v10h6v-10h4l-7-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">Cursor</h3>
                    <p className="text-lg leading-relaxed">Cursor (souvent appelé « Cursor AI ») représente une nouvelle génération d&apos;outils destinés à faciliter le travail des développeurs avec de l&apos;autocomplétion intelligente et de l&apos;aide à la rédaction de code.</p>
                  </div>
                  
                  <div className="p-8 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-xl transition-all group hover:bg-white/50 dark:hover:bg-ai-dark/50">
                    <div className="mb-6 text-center">
                      <svg className="h-24 w-24 text-ai-primary dark:text-ai-secondary mx-auto opacity-90 group-hover:opacity-100 transition-all" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-ai-primary dark:text-ai-secondary mb-4 text-center">Vibe Coding</h3>
                    <p className="text-lg leading-relaxed">Le terme « Vibe Coding » désigne une approche plus fluide et intuitive du codage, où l&apos;on cherche à créer une expérience de développement plus immersive et réactive, souvent avec l&apos;aide d&apos;outils d&apos;IA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 