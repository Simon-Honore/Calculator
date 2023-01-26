# Calculator

https://simon-honore.github.io/Calculator/

Une calculatrice qui fonctionne au clique, mais aussi avec le clavier, le tout en responsive.

## Technos 

- JavaScript Vanilla
- css
- html

## Fonctions

- fonctionne au clique sur les touches
- fonctionne avec le clavier 
- additions
- soustractions
- divisions
- multiplications
- parenthèses
- backspace
- reset
- total
  - arrondi 2 décimals

## Gestions d'erreur

2 gestions d'erreues:

- Si trop de chiffres pour l'écran
  - le surplus est gérer en overflow hidden donc toujours pris en compte au besoin 
  - un message est affiché pour signaler qu'il y a trop de caractères
- Si deux opérateurs à la suite, au demande du total
  - un message est affiché pour signalé qu'il y a 2 opérateurs