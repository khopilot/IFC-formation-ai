import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ai-light border-t border-ai-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-fr-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fr-red/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-40 h-40 border-2 border-ai-primary/5 rounded-full rotate-slow opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Top part with logo and social links */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 pb-8 border-b border-ai-primary/10">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-lg bg-gradient-ai mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">IA</span>
              </div>
              <div>
                <h2 className="font-bold text-xl text-gray-900">Formation IA</h2>
                <p className="text-ai-gray text-sm">AI Angkor Intelligence</p>
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/khopilot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://t.me/+85592332554" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0088cc] hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
            >
              <span className="sr-only">Telegram</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247l-1.932 9.112c-.146.658-.537.818-1.088.508l-3.01-2.212-1.446 1.394c-.16.16-.295.295-.603.295l.213-3.053 5.55-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.578-4.458c.536-.197 1.006.121.808.109z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/nicolas-delrieu-a61a60224/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0A66C2] hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Navigation links */}
          <div className="bg-white/50 rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium text-ai-primary mb-4 pb-2 border-b border-ai-primary/10">
              Formation IA
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-ai-gray hover:text-ai-primary transition-all duration-300 group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Accueil</span>
              </Link>
              <Link href="/about" className="text-ai-gray hover:text-ai-primary transition-all duration-300 group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <span>Programme</span>
              </Link>
              <Link href="/intro-ia" className="text-ai-gray hover:text-ai-primary transition-all duration-300 group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <span>Intro IA</span>
              </Link>
              <Link href="/departments" className="text-ai-gray hover:text-ai-primary transition-all duration-300 group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Départements</span>
              </Link>
              <Link href="/contact" className="text-ai-gray hover:text-ai-primary transition-all duration-300 group flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Contact</span>
              </Link>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white/50 rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium text-ai-primary mb-4 pb-2 border-b border-ai-primary/10">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-md bg-ai-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ai-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-ai-dark font-medium">Nicolas Delrieu</p>
                  <p className="text-ai-gray text-sm">AI Full Stack Senior Developer</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-md bg-ai-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ai-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:nicolas@angkor-intelligence.com" className="group">
                  <span className="text-ai-gray group-hover:text-ai-primary transition-all duration-300">nicolas@angkor-intelligence.com</span>
                </a>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-md bg-ai-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ai-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:+85592332554" className="group">
                  <span className="text-ai-gray group-hover:text-ai-primary transition-all duration-300">+855 92 332 554</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Location Information */}
          <div className="bg-white/50 rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium text-ai-primary mb-4 pb-2 border-b border-ai-primary/10">
              Institut Français
            </h3>
            <div className="flex items-start mb-4">
              <div className="h-8 w-8 rounded-md bg-ai-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ai-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-ai-gray">218 Rue Keo Chea (184), <br />Phnom Penh, Cambodge</p>
              </div>
            </div>
            
            <div className="flex items-center px-3 py-2 bg-gradient-ai bg-opacity-10 rounded-lg mt-4">
              <div className="h-12 w-12 bg-gradient-ai rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-ai-dark font-medium">Formation sur l&apos;IA</p>
                <p className="text-ai-gray text-sm">Mai 2024</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-ai-primary/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center text-sm text-ai-gray mb-4 md:mb-0">
            <span className="bg-gradient-to-r from-fr-blue via-ai-secondary to-fr-red bg-clip-text text-transparent font-medium">
              &copy; {new Date().getFullYear()} Institut Français du Cambodge
            </span>
          </p>
          <p className="text-sm text-ai-gray">
            Propulsé par <span className="text-ai-primary">Angkor Intelligence</span> • Site construit avec Next.js et TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
