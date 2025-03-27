/**
 * Utility functions for API interactions
 */

// Function to handle form submissions
export async function submitForm(): Promise<{ success: boolean; message: string }> {
  // In a real application, this would be an API call to a backend service
  // For this demo, we're simulating a successful response after a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Formulaire soumis avec succès',
      });
    }, 1000);
  });
}

// Define types for quiz questions
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

// Function to fetch quiz questions
export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  // In a real application, this would fetch from an API
  // For this demo, we're returning mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          question: 'Quelle technologie est utilisée pour l\'apprentissage des images ?',
          options: [
            'NLP (Natural Language Processing)',
            'Vision par ordinateur',
            'Traitement du signal',
            'Blockchain',
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question: 'Quel assistant IA est le plus souvent utilisé pour la rédaction et le service client ?',
          options: ['Siri', 'Alexa', 'ChatGPT', 'DALL-E'],
          correctAnswer: 2,
        },
        {
          id: 3,
          question: 'Quelle application n\'utilise PAS de l\'intelligence artificielle ?',
          options: [
            'Traduction automatique',
            'Détection de fraude bancaire',
            'Simple calculatrice',
            'Recommandation de films',
          ],
          correctAnswer: 2,
        },
      ]);
    }, 500);
  });
}

// Define types for department use cases
export type DepartmentUseCase = {
  department: string;
  useCases: string;
  examples: string;
};

// Function to fetch department use cases
export async function fetchDepartmentUseCases(): Promise<DepartmentUseCase[]> {
  // Mock data for departments
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          department: 'Langage',
          useCases: 'Apprentissage personnalisé, chatbots, correction automatique',
          examples: 'Duolingo, chatbots pour la pratique conversationnelle',
        },
        {
          department: 'Culturel',
          useCases: 'Planification d\'événements, engagement du public, analyse de sentiments',
          examples: 'Recommandations personnalisées, expositions interactives',
        },
        {
          department: 'Éducatif',
          useCases: 'Apprentissage adaptatif, alerte précoce pour étudiants, prédiction d\'inscriptions',
          examples: 'Plateformes comme Khan Academy, analyse prédictive',
        },
        {
          department: 'Administratif',
          useCases: 'Automatisation des tâches, analyse de données, chatbots',
          examples: 'Gestion des emails, planification, réponses automatiques',
        },
        {
          department: 'IT',
          useCases: 'Cybersécurité, maintenance prédictive, optimisation des ressources',
          examples: 'Détection des menaces, surveillance des serveurs',
        },
        {
          department: 'Bibliothèque/CR',
          useCases: 'Systèmes de recommandation, catalogage, numérisation',
          examples: 'Recommandation de livres, gestion des archives numériques',
        },
      ]);
    }, 500);
  });
}
