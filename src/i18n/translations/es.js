// Spanish translations
const es = {
  navigation: {
    home: 'Inicio',
    browse: 'Explorar',
    exam: 'Examen',
    favorites: 'Favoritos',
    mistakes: 'Errores',
    settings: 'Ajustes',
    question_detail: 'Detalle de pregunta',
    exam_result: 'Resultado del examen'
  },
  home: {
    title: 'App de Licencia de Conducir Checa',
    subtitle: 'Prepárate para tu examen de conducir checo con nuestra guía completa',
    startExam: 'Iniciar Examen',
    examDescription: 'Comienza un examen simulado con 25 preguntas aleatorias',
    browseTopic: 'Explorar Preguntas',
    browseDescription: 'Explora todas las preguntas por categoría',
    reviewMistakes: 'Revisar Errores',
    mistakesDescription: 'Practica las preguntas que respondiste incorrectamente',
    favorites: 'Favoritos',
    favoritesDescription: 'Revisa tus preguntas guardadas',
    studyStats: 'Estadísticas de Estudio',
    examsTaken: 'Exámenes',
    questionsAnswered: 'Preguntas',
    accuracy: 'Precisión'
  },
  browse: {
    title: 'Explorar Preguntas',
    allQuestions: 'Todas las Preguntas',
    search: 'Buscar preguntas',
    categories: {
      traffic_signs: 'Señales de Tráfico',
      traffic_rules: 'Normas de Tráfico',
      priority: 'Reglas de Prioridad',
      parking: 'Reglas de Estacionamiento',
      speed_limits: 'Límites de Velocidad',
      highway: 'Reglas de Autopista',
      penalties: 'Sanciones',
      general: 'General'
    },
    noQuestionsFound: 'No se encontraron preguntas que coincidan con tus criterios'
  },
  exam: {
    title: 'Examen de Conducir',
    subtitle: 'Pon a prueba tus conocimientos de conducción',
    start: 'Iniciar Examen',
    description: 'El examen consta de 25 preguntas aleatorias de diferentes categorías. Necesitas responder correctamente al menos 20 para aprobar.',
    timeLimit: 'Límite de tiempo: 30 minutos',
    questionCount: 'Pregunta: {{current}} de {{total}}',
    timeRemaining: 'Tiempo: {{minutes}}:{{seconds}}',
    submit: 'Enviar Respuestas',
    next: 'Siguiente',
    previous: 'Anterior',
    finishExam: 'Finalizar Examen',
    chooseMode: 'Elegir Modo de Examen',
    customExam: 'Examen Personalizado',
    questionCount: 'Número de preguntas (5-50)',
    timeLimit: 'Límite de tiempo (minutos, 0 para ilimitado)',
    cancel: 'Cancelar',
    examPreparation: 'Información del Examen',
    examInfo: '• El examen teórico checo tiene 25 preguntas, necesitas 20 respuestas correctas para aprobar\n• El límite de tiempo es de 30 minutos\n• Por favor, realiza el examen en un ambiente tranquilo\n• No salgas de la aplicación durante el examen'
  },
  question: {
    selectAnswer: 'Selecciona una respuesta',
    checkAnswer: 'Comprobar Respuesta',
    correct: 'Correcto',
    incorrect: 'Incorrecto',
    explanation: 'Explicación',
    nextQuestion: 'Siguiente Pregunta',
    loading: 'Cargando pregunta...'
  },
  result: {
    title: 'Resultados del Examen',
    passed: '¡Felicidades! ¡Has aprobado!',
    failed: 'Lamentablemente, no has aprobado.',
    score: 'Puntuación: {{correct}}/{{total}}',
    requiredToPass: 'Necesario para aprobar: 20/25',
    reviewIncorrect: 'Revisar Respuestas Incorrectas',
    retakeExam: 'Volver a Hacer el Examen',
    backToHome: 'Volver al Inicio',
    examDetails: 'Detalles de Preguntas',
    yourAnswer: 'Tu respuesta:',
    correctAnswer: 'Respuesta correcta:',
    viewExplanation: 'Ver Explicación',
    timeSpent: 'Tiempo empleado',
    correctCount: 'Correctas',
    incorrectCount: 'Incorrectas'
  },
  favorites: {
    title: 'Preguntas Favoritas',
    noFavorites: 'Aún no has añadido ningún favorito',
    browseToAdd: 'Explora preguntas y toca el icono de corazón para guardar preguntas importantes',
    browseCatalog: 'Explorar Preguntas',
    removeFavorite: 'Eliminar de Favoritos',
    addFavorite: 'Añadir a Favoritos',
    edit: 'Editar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    selectAll: 'Seleccionar Todo',
    deselectAll: 'Deseleccionar Todo',
    favoritesCount: '{{count}} preguntas guardadas',
    viewDetails: 'Ver Detalles'
  },
  mistakes: {
    title: 'Preguntas Erróneas',
    noMistakes: '¡Aún no has cometido ningún error!',
    practiceToContinue: 'Continúa practicando, las preguntas que respondas incorrectamente aparecerán aquí',
    startPractice: 'Comenzar Práctica',
    mistakesCount: '{{count}} preguntas erróneas',
    sortNewest: 'Más recientes',
    sortOldest: 'Más antiguas',
    clearAll: 'Borrar Todo',
    clearConfirm: '¿Estás seguro de que quieres borrar todos los registros de errores? Esta acción no se puede deshacer.',
    viewExplanation: 'Ver Explicación'
  },
  settings: {
    title: 'Ajustes',
    subtitle: 'Personaliza tu experiencia en la aplicación',
    language: 'Idioma',
    about: 'Acerca de',
    version: 'Versión',
    resetData: 'Resetear Todos los Datos',
    resetConfirm: '¿Estás seguro? Esto eliminará todos tus datos guardados y no se puede deshacer.',
    resetSuccess: 'Todos los datos han sido reseteados.',
    languages: {
      en: 'Inglés',
      zh: 'Chino',
      cs: 'Checo',
      es: 'Español'
    },
    appSettings: 'Ajustes de la Aplicación',
    dailyReminder: 'Recordatorio Diario',
    reminderDescription: 'Recibir recordatorios diarios de estudio',
    darkMode: 'Modo Oscuro',
    darkModeDescription: 'Usar modo nocturno para proteger tus ojos',
    appInfo: 'Información de la Aplicación',
    rateApp: 'Valorar Aplicación',
    privacyPolicy: 'Política de Privacidad',
    appVersion: 'App de Licencia de Conducir Checa v1.0.0'
  },
  common: {
    loading: 'Cargando...',
    error: 'Error',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    done: 'Hecho',
    yes: 'Sí',
    no: 'No'
  }
};

export default es; 