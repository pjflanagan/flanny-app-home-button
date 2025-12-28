

function addHomeButton() {
  const homeButton = document.createElement('button');
  homeButton.innerText = 'Home';
  homeButton.id = 'flanny-app-home-button';
  homeButton.style.position = 'fixed';
  homeButton.style.bottom = '20px';
  homeButton.style.right = '20px';
  homeButton.style.padding = '10px 15px';
  homeButton.style.backgroundColor = '#007BFF';
  homeButton.style.color = '#FFFFFF';
  homeButton.style.border = 'none';
  homeButton.style.borderRadius = '5px';
  homeButton.style.cursor = 'pointer';
  homeButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

  homeButton.addEventListener('click', () => {
    window.location.href = '/';
  });

  document.body.appendChild(homeButton);
}

function configureHomeButton(options) {
  const homeButton = document.getElementById('flanny-app-home-button');
  if (!homeButton) return;

  if (options.text) {
    homeButton.innerText = options.text;
  }
}

document.addEventListener('DOMContentLoaded', addHomeButton);