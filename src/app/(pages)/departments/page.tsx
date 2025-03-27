'use client';

import React, { useState, useEffect } from 'react';
import { fetchDepartmentUseCases, DepartmentUseCase } from '../../../utils/api';

export default function DepartmentsPage() {
  const [useCases, setUseCases] = useState<DepartmentUseCase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    async function loadUseCases() {
      try {
        const data = await fetchDepartmentUseCases();
        setUseCases(data);
      } catch (error) {
        console.error('Failed to fetch department use cases:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUseCases();
  }, []);

  const filterUseCases = (department: string) => {
    if (department === 'all') {
      return useCases;
    }
    return useCases.filter(useCase => useCase.department === department);
  };

  const departmentTabs = [
    { id: 'all', name: 'Tous les Départements' },
    { id: 'Langage', name: 'Langage' },
    { id: 'Culturel', name: 'Culturel' },
    { id: 'Éducatif', name: 'Éducatif' },
    { id: 'Administratif', name: 'Administratif' },
    { id: 'IT', name: 'IT' },
    { id: 'Bibliothèque/CR', name: 'Bibliothèque/CR' },
  ];

  const departmentIcons: Record<string, React.ReactElement> = {
    'Langage': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </div>
    ),
    'Culturel': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    'Éducatif': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
    ),
    'Administratif': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
    ),
    'IT': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    ),
    'Bibliothèque/CR': (
      <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    ),
  };

  return (
    <>
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
                IA par Département
              </span>
            </h1>
            <p className="headline-animation animation-delay-200 mt-8 text-xl text-ai-gray dark:text-ai-light/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment l&apos;IA peut être appliquée de manière pratique dans chaque département de l&apos;Institut Français du Cambodge
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
      
        {/* Tabs */}
        <div className="mb-12 animate-on-scroll relative z-10">
          <div className="border-b border-ai-light/30 dark:border-ai-dark/30">
            <nav className="-mb-px flex overflow-x-auto scrollbar-hide space-x-4">
              {departmentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-5 px-6 border-b-2 font-medium text-base mx-2 first:ml-0 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-ai-primary text-ai-primary dark:border-ai-secondary dark:text-ai-secondary border-b-3'
                      : 'border-transparent text-ai-gray hover:text-ai-primary hover:border-ai-primary/30 dark:text-ai-light/60 dark:hover:text-ai-light dark:hover:border-ai-secondary/30'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="text-center py-16 relative z-10">
            <div className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-ai-primary border-r-transparent"></div>
            <p className="mt-6 text-lg text-ai-gray dark:text-ai-light/80">Chargement des données...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {filterUseCases(activeTab).map((useCase, index) => (
              <div 
                key={`${useCase.department}-${index}`}
                className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 overflow-hidden rounded-xl group animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start mb-8">
                    <div className="flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
                      {departmentIcons[useCase.department] || (
                        <div className="rounded-full bg-gradient-ai w-16 h-16 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">
                            {useCase.department.substring(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-2xl font-bold text-ai-dark dark:text-ai-light group-hover:text-ai-primary dark:group-hover:text-ai-secondary transition-colors duration-300">
                        {useCase.department}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-ai-gray-dark dark:text-ai-light/90 group-hover:text-ai-primary dark:group-hover:text-ai-secondary transition-colors duration-300">Cas d&apos;utilisation</h4>
                    <p className="text-ai-gray dark:text-ai-light/70 mb-6 whitespace-pre-line leading-relaxed">{useCase.useCases}</p>
                    
                    <h4 className="text-lg font-semibold mb-4 text-ai-gray-dark dark:text-ai-light/90 group-hover:text-ai-primary dark:group-hover:text-ai-secondary transition-colors duration-300">Exemples pratiques</h4>
                    <p className="text-ai-gray dark:text-ai-light/70 whitespace-pre-line leading-relaxed">{useCase.examples}</p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-ai-light/10 dark:border-ai-dark-accent/20">
                    <div className="flex justify-end">
                      <span className="text-base font-medium inline-flex items-center text-ai-primary dark:text-ai-secondary group-hover:underline transform transition-transform duration-300 group-hover:translate-x-1">
                        Plus d&apos;informations
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filterUseCases(activeTab).length === 0 && (
          <div className="card-fr bg-white dark:bg-ai-dark shadow-ai hover:shadow-ai-hover transition-all duration-300 p-12 text-center animate-on-scroll relative z-10 my-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-ai-gray/50 dark:text-ai-light/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-8 text-2xl font-semibold text-ai-gray-dark dark:text-ai-light/90">Aucun cas d&apos;utilisation</h3>
            <p className="mt-4 text-lg text-ai-gray dark:text-ai-light/70">Nous n&apos;avons pas encore de cas d&apos;utilisation pour ce département.</p>
            <button className="mt-8 px-8 py-3 bg-gradient-ai text-white rounded-lg font-medium shadow-ai hover:shadow-ai-hover transition-all duration-300 transform hover:scale-105">
              Suggérer un cas d&apos;utilisation
            </button>
          </div>
        )}
      </div>
    </>
  );
}