'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    setActivePath(window.location.pathname);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return activePath === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-ai py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" 
              className="flex items-center transition-transform duration-300 hover:scale-105"
              onClick={() => setActivePath('/')}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-ai mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900">Formation IA</h2>
                <p className="text-ai-gray text-xs">AI Angkor Intelligence</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                isActive('/') 
                  ? 'text-ai-primary' 
                  : 'text-ai-gray hover:text-ai-primary'
              }`}
              onClick={() => setActivePath('/')}
            >
              <span className="relative z-10">Accueil</span>
              <span className={`absolute inset-0 bg-ai-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isActive('/') ? 'scale-100' : ''
              }`}></span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-ai-primary transform origin-left transition-transform duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/intro-ia" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                isActive('/intro-ia') 
                  ? 'text-ai-primary' 
                  : 'text-ai-gray hover:text-ai-primary'
              }`}
              onClick={() => setActivePath('/intro-ia')}
            >
              <span className="relative z-10">Intro IA</span>
              <span className={`absolute inset-0 bg-ai-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isActive('/intro-ia') ? 'scale-100' : ''
              }`}></span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-ai-primary transform origin-left transition-transform duration-300 ${
                isActive('/intro-ia') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                isActive('/about') 
                  ? 'text-ai-primary' 
                  : 'text-ai-gray hover:text-ai-primary'
              }`}
              onClick={() => setActivePath('/about')}
            >
              <span className="relative z-10">Programme</span>
              <span className={`absolute inset-0 bg-ai-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isActive('/about') ? 'scale-100' : ''
              }`}></span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-ai-primary transform origin-left transition-transform duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/departments" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                isActive('/departments') 
                  ? 'text-ai-primary' 
                  : 'text-ai-gray hover:text-ai-primary'
              }`}
              onClick={() => setActivePath('/departments')}
            >
              <span className="relative z-10">Départements</span>
              <span className={`absolute inset-0 bg-ai-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isActive('/departments') ? 'scale-100' : ''
              }`}></span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-ai-primary transform origin-left transition-transform duration-300 ${
                isActive('/departments') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                isActive('/contact') 
                  ? 'text-ai-primary' 
                  : 'text-ai-gray hover:text-ai-primary'
              }`}
              onClick={() => setActivePath('/contact')}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute inset-0 bg-ai-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ${
                isActive('/contact') ? 'scale-100' : ''
              }`}></span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-ai-primary transform origin-left transition-transform duration-300 ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <div className="ml-4 h-6 w-px bg-ai-primary/10"></div>
            
            <a 
              href="https://github.com/khopilot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ai-gray hover:text-ai-primary hover:bg-ai-light/50 transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transform transition-transform duration-300 ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 bg-current absolute transform transition-transform duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - with animation */}
      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-ai overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 border-t border-ai-primary/10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1">
          <Link 
            href="/" 
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/') 
                ? 'text-ai-primary bg-ai-primary/5' 
                : 'text-ai-gray hover:text-ai-primary hover:bg-ai-light/30'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setActivePath('/');
            }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Accueil
            </div>
          </Link>
          
          <Link 
            href="/intro-ia" 
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/intro-ia') 
                ? 'text-ai-primary bg-ai-primary/5' 
                : 'text-ai-gray hover:text-ai-primary hover:bg-ai-light/30'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setActivePath('/intro-ia');
            }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Intro IA
            </div>
          </Link>
          
          <Link 
            href="/about" 
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/about') 
                ? 'text-ai-primary bg-ai-primary/5' 
                : 'text-ai-gray hover:text-ai-primary hover:bg-ai-light/30'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setActivePath('/about');
            }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Programme
            </div>
          </Link>
          
          <Link 
            href="/departments" 
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/departments') 
                ? 'text-ai-primary bg-ai-primary/5' 
                : 'text-ai-gray hover:text-ai-primary hover:bg-ai-light/30'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setActivePath('/departments');
            }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Départements
            </div>
          </Link>
          
          <Link 
            href="/contact" 
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/contact') 
                ? 'text-ai-primary bg-ai-primary/5' 
                : 'text-ai-gray hover:text-ai-primary hover:bg-ai-light/30'
            }`}
            onClick={() => {
              setIsMenuOpen(false);
              setActivePath('/contact');
            }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ai-primary/70" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact
            </div>
          </Link>
          
          <div className="mt-6 pt-6 border-t border-ai-primary/10">
            <div className="flex space-x-4 px-4 py-2">
              <a 
                href="https://github.com/khopilot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-900 hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-9 w-9 rounded-full bg-white shadow-sm flex items-center justify-center"
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
                className="text-[#0088cc] hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-9 w-9 rounded-full bg-white shadow-sm flex items-center justify-center"
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
                className="text-[#0A66C2] hover:opacity-80 transition-all duration-300 transform hover:scale-110 h-9 w-9 rounded-full bg-white shadow-sm flex items-center justify-center"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
