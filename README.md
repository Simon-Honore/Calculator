# Calculator

https://simon-honore.github.io/Calculator/

Une calculatrice qui fonctionne au clic, mais aussi avec le clavier, le tout en responsive.

## Technos 

- JavaScript Vanilla
- css
- html

## Fonctions

- fonctionne au clic sur les touches
- fonctionne avec le clavier 
- additions
- soustractions
- divisions
- multiplications
- parenthèses
- backspace
- reset
- total
  - arrondi 2 décimales

## Gestions d'erreurs

2 gestions d'erreurs:

- Si trop de chiffres pour l'écran
  - le surplus est géré en ```overflow: hidden```, donc toujours pris en compte au besoin 
  - un message est affiché pour signaler qu'il y a trop de caractères
- Si deux opérateurs à la suite, au demande du total
  - un message est affiché pour signaler qu'il y a 2 opérateurs
