const app = {
  init: () => {
    // lancement des écouteurs 
    app.allEventListner();
  },

  allEventListner: () => {453
    // recuperation de toutes les keys
    const keysElmt = document.querySelectorAll('.key');
    // pour chaque key, on met un ecouteur au click
    keysElmt.forEach(keyElmt => {
      keyElmt.addEventListener('click', (event) => {
        const value = event.target.textContent;
        console.log(value);
        // supprime le focus sur la touche
        // pour que en appuyant sur entré, cela ne valide pas la touche à nouveau
        keyElmt.blur()
        app.embedToScreen(value);
      })
    });

    // et un ecouteur sur le clavier
    document.addEventListener('keyup', (event) => {
      const value = event.key;
      console.log(value)
      app.embedToScreen(value);
    })
  },

  embedToScreen: (value) => {
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
          screenElmt.textContent = '';
          screenElmt.textContent = result;
          break;
        // retour
        case '⌫':
        case 'Backspace':
          const currentValue = screenElmt.textContent;
          console.log('CURRENT VALUE', currentValue)
          const newCurrentValue = currentValue.substring(0, currentValue.length -1 );
          console.log('NEW CURRENT VALUE', newCurrentValue)
          screenElmt.textContent = newCurrentValue;
          break;
        default:
          screenElmt.textContent += value;
      }
    }
  }


}

document.addEventListener('DOMContentLoaded', app.init);
