const data = [
  {
    id: '1',
    projectName: 'Search Github user',
    url: '/github-profiles/index.html',
  },
  {
    id: '2',
    projectName: 'feedback UI',
    url: '/feedback-ui/index.html',
  },
  {
    id: '3',
    projectName: 'lyrics Search',
    url: '/lyrics-search-ui/index.html',
  },
  {
    id: '4',
    projectName: 'Notes',
    url: '/notes/index.html',
  },

  {
    id: '5',
    projectName: 'Typing game',
    url: '/typing-game/index.html',
  },
  {
    id: '6',
    projectName: 'Clock UI',
    url: '/clock-ui/index.html',
  },

  {
    id: '7',
    projectName: 'Password generator',
    url: '/password-generator/index.html',
  },
  {
    id: '8',
    projectName: 'Relaxer UI',
    url: '/relaxer-ui/index.html',
  },

  {
    id: '9',
    projectName: 'FAQ UI',
    url: '/FAQ-collapse/index.html',
  },

  {
    id: '10',
    projectName: 'Calculator',
    url: '/calculator/index.html',
  },
  {
    id: '11',
    projectName: 'Exchange Rate',
    url: '/exchange-rate-calculator/index.html',
  },
  {
    id: 12,
    projectName: 'Quiz',
    url: '/quiz/index.html',
  },
];

const renderProject = (item) => {
  return `
    <div class="wrapper">
      <div class="name" >
        ${item.id}. ${item.projectName}
         </div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  `;
};

const renderPage = () => {
  const mainContentEl = document.querySelector(
    "[data-selector='main-content']"
  );
  const html = `
    <div class="projects-container">
    <h1>Vanilla JS Projects</h1>
    <hr/>
    <div class="projects">
      ${data.map(renderProject).join('')}
    </div>
    </div>

  `;
  mainContentEl.innerHTML = html;
};

window.addEventListener('DOMContentLoaded', renderPage);
