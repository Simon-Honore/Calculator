const app = {
  init: () => {
    // lancement des écouteurs 
    app.allEventListner();
  },

  allEventListner: () => {
    // ajout d'un ecouteur sur toutes les touches
    const keysElmt = document.querySelectorAll('.key');
    keysElmt.forEach(keyElmt => {
      keyElmt.addEventListener('click', (event) => {
        const value = event.target.textContent;

        // supprime le focus sur la touche
        // pour que en appuyant sur entré, cela ne valide pas la touche à nouveau
        keyElmt.blur();

        app.handleCalculator(value);
      });
    });

    // et un ecouteur sur le clavier
    document.addEventListener('keyup', (event) => {
      const value = event.key;
      app.handleCalculator(value);
    });
  },

  /**
   * 
   * @param {string} value - touche appuyée ou cliquée
   */
  handleCalculator: (value) => {
    //création d'un tableau avec toutes les touches de la calculatrice 
    const keysElmt = [...document.querySelectorAll('.key')];
    const keysList = keysElmt.map(keyElmt => keyElmt.textContent);

    const screenElmt = document.querySelector('.screen');

    // si les touches appuyéees au clavier correspondent aux touches de la calculatrice
    // ou à la touche retour ou entré
    if (keysList.includes(value) || value === 'Backspace' || value === 'Enter') {
      switch (value) {
        // reset
        case 'C':
          screenElmt.textContent = '';
          break;

        // total
        case 'Enter':
        case '=':
          const result = eval(screenElmt.textContent);
          screenElmt.textContent = Math.round(result * 100) / 100;
          break;

        // retour
        case '⌫':
        case 'Backspace':
          const currentValue = screenElmt.textContent;
          const newCurrentValue = currentValue.substring(0, currentValue.length - 1);
          screenElmt.textContent = newCurrentValue;
          break;

        default:
          screenElmt.textContent += value;
      };
    };

    app.handleErrors();
  },

  handleErrors: () => {
    const screenElmt = document.querySelector('.screen');

    // gestion du nombre de caractères max
    if (screenElmt.textContent.length > 13) {
      app.errorMessage('Error - trop de caractères');
      app.showErrorMsg();
    } else {
      app.closeErrorMsg();
    };

    // gestion d'erreur de syntax 
    window.addEventListener('error', (event) => {
      if (event.message.includes('SyntaxError')) {
        app.errorMessage('Error - 2 opérateurs à suivre');
        app.showErrorMsg();
      } else {
        app.closeErrorMsg();
      };
    });
  },

  /**
   * 
   * @param {string} message - message d'erreur
   */
  errorMessage: (message) => {
    const headerMsgElmt = document.querySelector('.header-msg');
    headerMsgElmt.textContent = message;
  },

  showErrorMsg: () => {
    const headerTitleElmt = document.querySelector('.header-title');
    headerTitleElmt.classList.add('hidden');

    const headerMsgElmt = document.querySelector('.header-msg');
    headerMsgElmt.classList.remove('hidden');
  },

  closeErrorMsg: () => {
    const headerTitleElmt = document.querySelector('.header-title');
    headerTitleElmt.classList.remove('hidden');

    const headerMsgElmt = document.querySelector('.header-msg');
    headerMsgElmt.classList.add('hidden');
  },
}

document.addEventListener('DOMContentLoaded', app.init);
