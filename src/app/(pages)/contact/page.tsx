'use client';

import Image from 'next/image';

export default function ContactPage() {
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
                Contact et Informations
              </span>
            </h1>
            <p className="headline-animation animation-delay-200 mt-8 text-xl text-ai-gray dark:text-ai-light/80 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous pour plus d&apos;informations sur la formation
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-24 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-ai-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ai-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-ai-primary/10 rounded-full rotate-slow opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-ai-accent/10 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="relative z-10 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Card */}
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 rounded-xl p-8 md:p-10 order-2 md:order-1">
              <h2 className="text-3xl font-bold gradient-text-enhanced mb-8">
                Votre Formateur
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-2">Formateur</h3>
                    <p className="text-lg text-ai-gray dark:text-ai-light/80">Nicolas Delrieu - AI Full Stack Senior Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-2">Email</h3>
                    <a href="mailto:nicolas@angkor-intelligence.com" className="text-lg text-ai-primary dark:text-ai-secondary hover:underline">nicolas@angkor-intelligence.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-2">Téléphone</h3>
                    <a href="tel:+85592332554" className="text-lg text-ai-primary dark:text-ai-secondary hover:underline">+855 92 332 554</a>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-4">Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">Intelligence Artificielle</span>
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">Développement Web</span>
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">Prompt Engineering</span>
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">React/Next.js</span>
                    <span className="px-4 py-2 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 text-ai-primary dark:text-ai-secondary rounded-full text-sm font-medium">Python</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-4">Réseaux Sociaux</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/khopilot" target="_blank" rel="noopener noreferrer" className="text-[#333] dark:text-[#f0f6fc] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-delrieu-a61a60224/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h-.003z" />
                      </svg>
                    </a>
                    <a href="https://t.me/+85592332554" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-1.932 9.112c-.146.658-.537.818-1.088.508l-3.01-2.212-1.446 1.394c-.16.16-.295.295-.603.295l.213-3.053 5.55-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.578-4.458c.536-.197 1.006.121.808.109z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-ai-primary to-ai-secondary opacity-20 rounded-full animate-pulse-slow"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-full blur opacity-30"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image 
                    src="/out-0 - 2024-09-28T164549.920.webp" 
                    alt="Nicolas Delrieu - Formateur" 
                    width={500} 
                    height={500}
                    className="object-cover h-full w-full rounded-full"
                    priority
                  />
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-fr-blue to-fr-red rounded-full opacity-40 blur-sm pulse-slow"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-ai-accent to-ai-secondary rounded-full opacity-40 blur-sm pulse-slow"></div>
              </div>
            </div>
          </div>
          
          {/* Skills/Achievements Carousel */}
          <div className="mt-20 animate-on-scroll animation-delay-300">
            <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl p-10">
              <h2 className="text-3xl font-bold gradient-text-enhanced mb-10 text-center">
                Parcours et Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="rounded-full bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-3">Innovation</h3>
                  <p className="text-ai-gray dark:text-ai-light/70">Passionné par les technologies émergentes et les solutions innovantes en IA.</p>
                </div>
                
                <div className="text-center p-6 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="rounded-full bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-3">Expérience</h3>
                  <p className="text-ai-gray dark:text-ai-light/70">Plus de 10 ans d&apos;expérience dans le développement d&apos;applications et solutions IA.</p>
                </div>
                
                <div className="text-center p-6 border border-ai-light/20 dark:border-ai-dark-accent/30 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="rounded-full bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ai-primary dark:text-ai-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl text-ai-dark dark:text-ai-light mb-3">Formation</h3>
                  <p className="text-ai-gray dark:text-ai-light/70">Expert en pédagogie et transmission de savoirs techniques complexes.</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-xl text-ai-gray dark:text-ai-light/80 max-w-3xl mx-auto leading-relaxed italic">
                  &quot;La meilleure façon d&apos;apprendre l&apos;IA est de la mettre en pratique sur des projets concrets adaptés à votre contexte professionnel.&quot;
                </p>
                <p className="mt-4 text-ai-primary dark:text-ai-secondary font-medium">— Nicolas Delrieu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}