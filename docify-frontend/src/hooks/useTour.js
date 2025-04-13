import { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

const useIntroTour = (shouldStart) => {
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');

    if (shouldStart && !hasSeenTour) {
      const intro = introJs();

      intro.setOptions({
        steps: [
          {
            intro: '👋 Welcome to Docify! Let me guide you through the main features.'
          },
          {
            intro: '📝 You can create your document by typing into the text box below.',
            position: 'right'
          },
          {
            intro: '✏️ Click the edit button to modify your document.',
            position: 'left'
          },
          {
            intro: '🗑️ Use the delete option to remove a document.',
            position: 'left'
          },
          {
            intro: '⬇️ Click the download button to save your document.',
            position: 'left'
          },
          {
            intro: '🧩 You can drag and move your document cards freely.',
            position: 'bottom'
          },
          {
            intro: '📤 Upload an existing PDF or Word file using the Upload option.',
            position: 'bottom'
          },
          {
            intro: '🤖 Use the AI feature to automatically generate document content.',
            position: 'top'
          }
        ],
        showProgress: true,
        hidePrev: true,
        nextLabel: 'Next →',
        prevLabel: '← Back',
        doneLabel: 'Got it! 🎉'
      });

      intro.oncomplete(() => {
        localStorage.setItem('hasSeenTour', 'true');
      });

      intro.onexit(() => {
        localStorage.setItem('hasSeenTour', 'true');
      });

      intro.start();
    }
  }, [shouldStart]);
};

export default useIntroTour;
