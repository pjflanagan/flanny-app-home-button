
const HOME_BUTTON_ID = 'flanny-app-home-button';
const PLANET_RING_ID = 'flanny-app-home-button-planet-ring';

const BUTTON_SIZE = 10;

function addHomeButton() {

  // Elements

  const homeButton = document.createElement('div');
  homeButton.id = HOME_BUTTON_ID;
  homeButton.style.position = 'fixed';
  homeButton.style.top = '8px';
  homeButton.style.left = '8px';
  homeButton.style.backgroundColor = '#1c1c1c';
  homeButton.style.color = '#FFFFFF';
  homeButton.style.border = 'none';
  homeButton.style.width = `${BUTTON_SIZE}px`;
  homeButton.style.maxWidth = `${BUTTON_SIZE}px`;
  homeButton.style.height = `${BUTTON_SIZE}px`;
  homeButton.style.maxHeight = `${BUTTON_SIZE}px`;
  homeButton.style.borderRadius = `${BUTTON_SIZE}px`;
  homeButton.style.cursor = 'pointer';
  homeButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  homeButton.style.zIndex = '9999';

  const planetRing = document.createElement('div');
  planetRing.id = PLANET_RING_ID;
  planetRing.style.position = 'absolute';
  planetRing.style.top = '50%';
  planetRing.style.left = '50%';
  planetRing.style.width = '18px';
  planetRing.style.height = '2px';
  planetRing.style.backgroundColor = '#1c1c1c';
  planetRing.style.borderRadius = '2px';
  planetRing.style.transform = 'translate(-50%, -50%) rotate(25deg)';
  planetRing.style.transition = 'transform 0.3s ease';
  homeButton.appendChild(planetRing);

  // Events

  homeButton.addEventListener('click', () => {
    window.location.href = '/';
  });

  homeButton.addEventListener('mouseover', () => {
    planetRing.style.transform = 'translate(-50%, -50%) rotate(-25deg)';
  });

  homeButton.addEventListener('mouseout', () => {
    planetRing.style.transform = 'translate(-50%, -50%) rotate(25deg)';
  });

  document.body.appendChild(homeButton);
}

function applyHomeButtonConfig(options) {
  const homeButton = document.getElementById(HOME_BUTTON_ID);
  if (!homeButton) return;
  const planetRing = document.getElementById(PLANET_RING_ID);

  if (options.backgroundColor) {
    homeButton.style.backgroundColor = options.backgroundColor;
    planetRing.style.backgroundColor = options.backgroundColor;
  }

  if (options.top) {
    homeButton.style.top = options.top;
    homeButton.style.bottom = '';
  }

  if (options.bottom) {
    homeButton.style.bottom = options.bottom;
    homeButton.style.top = '';
  }

  if (options.left) {
    homeButton.style.left = options.left;
    homeButton.style.right = '';
  }

  if (options.right) {
    homeButton.style.right = options.right;
    homeButton.style.left = '';
  }
}

function configureHomeButton(options) {
  document.addEventListener('DOMContentLoaded', () => applyHomeButtonConfig(options));
}

document.addEventListener('DOMContentLoaded', addHomeButton);