emacs
=====

.emacs
------

Pour éditer le .emacs ou le créer au bon emplacement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::
   
  C-f ~/.emacs
  
Pour ne pas être embêté par l'affichage des accents
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Je préfère encoder en ``UTF-8``. Pour cela j'insère ce bloc de code
dans le .emacs.

::

  (set-language-environment 'utf-8)
  (set-terminal-coding-system 'utf-8)
  (set-keyboard-coding-system 'utf-8)
  (set-language-environment 'utf-8)
  (prefer-coding-system 'utf-8)

Changer le theme (couleur de fond,...) 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
J'utilise le thème misterioso (il en existe bien sûr d'autres)

::

   (load-theme 'misterioso)

à placer dans le .emacs

Compilation
-----------
.. _Compilation avec XeLaTeX depuis emacs:

Compilation avec XeLaTeX depuis emacs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
J'utilise souvent cette méthode pour compiler une figure dessinée par
psTricks qui produit directement un pdf.

1) afficher le menu : ::
     
        M-x menu bar-mode
    
2) Command -> TeXing Options -> Use XeTeX engine
   

Problème d'affichage des accents
--------------------------------
Méthode 1
^^^^^^^^^
1) ::

    M-x revert-buffer-with-coding-system
    
2) choisir utf-8 ou latin-1
   
Méthode 2
^^^^^^^^^
Si des accents s'affichent dans TeXworks malgré tous les packages et
l'encodage UTF-8 réglés correctement (cela m'ai arrivé lors d'un
copier-coller du contenu de Outlook dans emacs.)

1) copier le contenu du fichier.tex dans un bloc note
2) enregistrer sous encodage UTF-8

Cela devrait fonctionner.

Méthode 3
^^^^^^^^^
You can also mark the entire file with C-x h and then try M-x
recode-region. It will ask you for Text was really in and But was
interpreted as. For the first file in your question, it looks like it
should be latin-1 and utf-8, and for the second example it should
probably be the other way around, utf-8 and latin-1. 

After you got it right, you can choose which coding system to save the
file with using M-x set-buffer-file-coding-system (or C-x C-m f for
short). 
