IT
***
Hello (test)

Windows
=======

Pour changer le PATH dans windows sans droit administrateur
-----------------------------------------------------------
1) Start Menu -> Panneau de configuration -> Comptes utilisateur
2) Modifier vos variables d'environment
3) Path et rajouter le chemin en séprant avec un point virgule (si
   déjà des paths présents)
4) fermer la session et la ré-ouvrir 
 
.. _print-screen:

Faire un print-screen
---------------------
Pour faire un PrintScreen uniquement sur un écran, placer le curseur
sur le bon écran et faire :
::
   
  M-PrintScreen

Si un seul écran, alors pas besoin de presser la touche Alt.

Impression à l'échelle d'un pdf
-------------------------------

.. image:: /IT/figures/ImpressionAlEchelle1.PNG
    :scale: 80 %
    :align: center

.. image:: /IT/figures/ImpressionAlEchelle2.PNG
    :scale: 80 %
    :align: center

.. image:: /IT/figures/ImpressionAlEchelle3.PNG
    :scale: 80 %
    :align: center

	    
Pour effacer un répertoire sous dos
-----------------------------------

::

   rmdir /s

	    
MINGW32
=======
Pour envoyer un message avec Outlook

::

  start Outlook //c ipm.note //m "mailto:johndoe@domain.com^&subject=Hello" 


::

  start Outlook //c ipm.note //m
  "mailto:johndoe@domain.com;paul.traveri@gmail.com^&cc=are@gmail.com^&subject=Hello^&body=aslfdsff%0A%0Ajsdfjklé%0Aasdfjé"

Le %0A est pour insérer un retour à la ligne

emacs
=====

Insatallation
-------------

#. Installer MiKTteX (développer...)
#. Installer emacs
   
   a. Prendre la dernière version du site officiel (le .zip)
   #. Dézipper
   #. M-x package-install
   #. choisir auctex
   #. C-x C-f ~/.emacs (cela créera le .emacs au bon endroit)
   #. copier ses lignes préférées dans celui-ci   


.emacs
------
Le nom de ce fichier n'a pas de préfixe, il a juste un suffixe
(extension) qui est ``.emacs`` Il faut le copier dans ``home/yd``

Pour éditer le .emacs ou le créer au bon emplacement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::
   
  C-x-f ~/.emacs

  
Contenu du .emacs
^^^^^^^^^^^^^^^^^

.. literalinclude:: /IT/sources/emacs/.emacs

		    
Pour envoyer les choses deletée à la poubelle de windows
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Cela permet de récupérer les fichiers ou répertoire effacés par
mégarde.

::
   
  (setq delete-by-moving-to-trash t)

  
Pour ne pas être embêté par l'affichage des accents
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Je préfère encoder en ``UTF-8``. Pour cela j'insère ce bloc de code
dans le .emacs

::

  (set-language-environment 'utf-8)
  (set-terminal-coding-system 'utf-8)
  (set-keyboard-coding-system 'utf-8)
  (set-language-environment 'utf-8)
  (prefer-coding-system 'utf-8)

Si le défaut persiste, on peut essayer les méthodes suivantes pour 
enlever remettre les accents.

Méthode 1
'''''''''

 1. renommer le fichier en .txt
 2. rouvrir ce dernier avec ``Emacs``
 3. copier tout le contenu
 4. couper dans un nouveau fichier .tex
 5. à la demande d'``Emacs`` si demande il y'a, ne pas l'enregistrer
    en UTF8, mais taper tab et choisir latin1

Remarque : Dans un pdf, si les accents sont bien présents dans emacs
et pas dans le pdf. Il faut alors faire le racourci clavier suivant~:
``C-x RET f codage RET`` et choisir ``latin-1``.

Méthode 2
'''''''''

1) ::

    M-x revert-buffer-with-coding-system
    
2) choisir utf-8 ou latin-1
   
Méthode 3
'''''''''

Si des accents s'affichent dans TeXworks malgré tous les packages et 
l'encodage UTF-8 réglés correctement (cela m'est arrivé lors d'un
copier-coller du contenu de Outlook dans emacs.)

1) copier le contenu du fichier.tex dans un bloc note
2) enregistrer sous encodage UTF-8

Cela devrait fonctionner.

Méthode 4
'''''''''

You can also mark the entire file with C-x h and then try M-x
recode-region. It will ask you for Text was really in and But was
interpreted as. For the first file in your question, it looks like it
should be latin-1 and utf-8, and for the second example it should
probably be the other way around, utf-8 and latin-1. 

After you got it right, you can choose which coding system to save the
file with using M-x set-buffer-file-coding-system (or C-x C-m f for
short).

copier/coller sans toujours à répondre à la même question du coding
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Pour pouvoir copier/coller depuis windows et pour pas que emacs
demande à chaque fois le format du coding, insérer la ligne suivante
dans fichier .emacs.

::
   
  (setq selection-coding-system 'compound-text-with-extensions)

Pour que les fichiers effacés en mode dired aillent dans la Corbeille
de Windows

Placer ce code dans le ``.emacs`` :

::
   
   (setq delete-by-moving-to-trash t)


Raccourcis clavier
------------------
Ci-dessous quelques raccourcis utiles pour l'utilisation de Emacs et
LaTeX. La plupart de ces raccourcis ont été trouvés à l'addresse
suivante
https://loquehumaine.wordpress.com/2010/04/01/mes-raccourcis-emacs/ Un
grand Merci donc à cette personne. 

Général
^^^^^^^

+-------------------+----------------------------------------------+
| Raccourcis        | Descriptions                                 |
+===================+==============================================+
| F7                | mode flyspell correcteur orthographique)     |
+-------------------+----------------------------------------------+
| F8                | appelle Ispell buffer                        |
+-------------------+----------------------------------------------+
| C-h a             | propos                                       |
+-------------------+----------------------------------------------+
| C-h k             | recherche de ce que fait un raccourci        |
+-------------------+----------------------------------------------+
| C-g g             | annuler                                      |
+-------------------+----------------------------------------------+
| C-u 5 -           | répète 5 fois                                |
+-------------------+----------------------------------------------+
| C-u 5 BackSpace   | efface les 5 derniers caractères             |
+-------------------+----------------------------------------------+
| M-/               | complétion avec les mots des buffers ouverts |
+-------------------+----------------------------------------------+
| M-x load-buffer   | charger un .emacs                            |
+-------------------+----------------------------------------------+
| M-x xxx-mode      | mode xxx (latex,html,python,...)             |
+-------------------+----------------------------------------------+
| M-\$              | ispell sur le mot                            |
+-------------------+----------------------------------------------+
| M-!               | exécuter une commande bash                   |
+-------------------+----------------------------------------------+ 
| C-u- M-!          | insérer le résultat d'une commande bash      | 
+-------------------+----------------------------------------------+
| M-x               | écrire des commandes en ligne de commande    |
+-------------------+----------------------------------------------+
| M-x menu-bar-mode | pour afficher / enlever la barre d'outils    | 
+-------------------+----------------------------------------------+ 
| M-x cua-mode      | copier-coller d'une autre applications       |
+-------------------+----------------------------------------------+
| C-x C-c           | quitte Emacs                                 |
+-------------------+----------------------------------------------+
| C-z               | minimise Emacs                               |
+-------------------+----------------------------------------------+
| C-x u             | pour annuler (undo)                          |
+-------------------+----------------------------------------------+
| C-x C-s           | enregistre le buffer courant                 |
+-------------------+----------------------------------------------+



Pour se déplacer
^^^^^^^^^^^^^^^^

+---------------+----------------------------------------------------+
| Raccourcis    | Descriptions                                       |
+===============+====================================================+
| C-a           | aller au début de la ligne                         |
+---------------+----------------------------------------------------+
| M-a           | aller au début de la phrase                        |
+---------------+----------------------------------------------------+
| C-e           | aller à la fin de la ligne                         |
+---------------+----------------------------------------------------+
| M-e           | aller à la fin de la phrase                        |
+---------------+----------------------------------------------------+
| C-f           | se déplacer au caractère suivant                   |
+---------------+----------------------------------------------------+
| M-f           | se déplacer au mot suivant                         |
+---------------+----------------------------------------------------+  
| C-b           | se déplacer au caractère précédent                 |
+---------------+----------------------------------------------------+
| M-b           | se déplacer au mot                                 |
+---------------+----------------------------------------------------+
| C-p           | se déplacer à ligne précédente                     |
+---------------+----------------------------------------------------+
| C-n           | se déplacer à ligne suivante                       |
+---------------+----------------------------------------------------+
| C-v           | écran suivant                                      |
+---------------+----------------------------------------------------+
| M-v           | écran précédent                                    |
+---------------+----------------------------------------------------+
| C-M-v         | écran suivant dans l'autre buffer                  |
+---------------+----------------------------------------------------+
| C-l           | mettre la ligne active au milieu du buffer         |
+---------------+----------------------------------------------------+
| C-x l chiffres| aller à la ligne chiffres                          | 
+---------------+----------------------------------------------------+ 
| M-<           | aller au début du buffer                           | 
+---------------+----------------------------------------------------+ 
| M-S-<         | aller à la fin du buffer                           |
+---------------+----------------------------------------------------+
| C-u 0 C-l     | met la ligne courante en première ligne du buffer  |
+---------------+----------------------------------------------------+


Marques
^^^^^^^
+-----------+--------------------------------------------------------+ 
|Raccourcis | Descriptions                                           |
+===========+========================================================+
| C-SPC     |faire une marque (donc le début d une région/rectangle) |  
+-----------+--------------------------------------------------------+  
| C-@       |faire une marque (donc le début d une région/rectangle) |
+-----------+--------------------------------------------------------+
| M-@       | marquer le mot (C-u 4 M-@ marquer 4 mots)              |
+-----------+--------------------------------------------------------+
| C-x C-x   | échanger le point et la marque                         |
+-----------+--------------------------------------------------------+
| C-u C-SPC | revenir en arrière sur les marques                     |
+-----------+--------------------------------------------------------+
| M-h       | sélectionner le paragraphe                             |
+-----------+--------------------------------------------------------+
| C-x h     | sélectionner tout le buffer                            |
+-----------+--------------------------------------------------------+


Editer, couper, copier, coller
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
+-----------+-------------------------------------------+
|Raccourcis | Descriptions                              |
+===========+===========================================+
| C-d       | tuer la prochaine lettre                  |
+-----------+-------------------------------------------+
| M-d       | tuer le prochain mot                      |
+-----------+-------------------------------------------+
| BackSpace | tuer la lettre présédente                 |
+-----------+-------------------------------------------+
| M-BackSpc | tuer le mot précédent                     |
+-----------+-------------------------------------------+
| C-k       | tuer la fin de la ligne                   |
+-----------+-------------------------------------------+
| C-w       | tuer la région                            |
+-----------+-------------------------------------------+
| C-y       | coller le dernier truc tué                |
+-----------+-------------------------------------------+
| M-y       | revenir plus en arrière dans la liste des |
+-----------+-------------------------------------------+
|           | trucs tués (après C-y donc)               |
+-----------+-------------------------------------------+
| C-t       | échanger 2 lettres                        |
+-----------+-------------------------------------------+
| M-t       | échanger 2 mots                           |
+-----------+-------------------------------------------+
| C-x C-t   | échanger 2 lignes                         |
+-----------+-------------------------------------------+
| C-x r r   | copier le rectangle                       |
+-----------+-------------------------------------------+
| C-x r k   | tuer le rectangle                         |
+-----------+-------------------------------------------+
| C-x r y   | coller le rectangle                       |
+-----------+-------------------------------------------+
| M-z x     | tuer jusqu'au caractère x                 |
+-----------+-------------------------------------------+
| M-u       | uppercase                                 |
+-----------+-------------------------------------------+
| M-l       | lowercase                                 |
+-----------+-------------------------------------------+
| M-c       | capital                                   |
+-----------+-------------------------------------------+
| C-x C-u   | uppercase de la région                    |
+-----------+-------------------------------------------+
| C-x C-l   | lowercase de la région                    |
+-----------+-------------------------------------------+

Rechercher et remplacer
^^^^^^^^^^^^^^^^^^^^^^^

+--------------------+----------------------------------------------+
| Raccourcis         | Descriptions                                 |
+====================+==============================================+
| C-s                | chercher                                     |
+--------------------+----------------------------------------------+
| C-r                | chercher en arrière                          | 
+--------------------+----------------------------------------------+
| M-%                | chercher / remplacer (! pour tous, C-q C-j   |
+--------------------+----------------------------------------------+
|                    | pour insérer un saut de ligne, haut bas pour |
+--------------------+----------------------------------------------+
|                    | naviguer dans l'historique des trucs         |
+--------------------+----------------------------------------------+
|                    | recherchés)                                  |
+--------------------+----------------------------------------------+
| C-M-s              | chercer avec regexp en arrière               |
+--------------------+----------------------------------------------+
| C-M-%              | chercher / remplacer avec regexp             |
+--------------------+----------------------------------------------+
| M-x replace-string | recherche / remplacer (permet de remplacer   |
+--------------------+----------------------------------------------+
|                    | par un mot commençant par un \\ )            |
+--------------------+----------------------------------------------+

Fenêtres / buffers
^^^^^^^^^^^^^^^^^^

+--------------------+----------------------------------------------+
| Raccourcis         | Descriptions                                 |
+====================+==============================================+
| C-x 1              | le buffer courant devient le seul buffer     |
+--------------------+----------------------------------------------+
| C-x 2              | splitter horizontalement                     | 
+--------------------+----------------------------------------------+
| C-x 3              | splitter verticalement                       |
+--------------------+----------------------------------------------+
| C-x 0              | la fenêtre du buffer courant est fermé       |
+--------------------+----------------------------------------------+
| C-x k              | tuer le buffer                               |
+--------------------+----------------------------------------------+
| C-x droite/gauche  | naviguer dans la liste des buffers           |
+--------------------+----------------------------------------------+
| C-x o              | passe  l'autre fenêtre                       |
+--------------------+----------------------------------------------+
| C-x b              | ouvrir parmi les buffers                     |
+--------------------+----------------------------------------------+
| C-x i              | insérer un fichier                           |
+--------------------+----------------------------------------------+

Mode Dired
^^^^^^^^^^

+--------------------+----------------------------------------------+
| Raccourcis         | Descriptions                                 |
+====================+==============================================+
| q                  | close the file                               |
+--------------------+----------------------------------------------+
| c                  | copy file                                    | 
+--------------------+----------------------------------------------+
| R                  | rename file                                  |
+--------------------+----------------------------------------------+
| D                  | Delete file                                  |
+--------------------+----------------------------------------------+
| \+                 | create a new dir                             |
+--------------------+----------------------------------------------+
| z                  | compress / decompress                        |
+--------------------+----------------------------------------------+
| m                  | mark a file                                  |
+--------------------+----------------------------------------------+
| u                  | unmark                                       |
+--------------------+----------------------------------------------+
| U                  | unmark all marked                            |
+--------------------+----------------------------------------------+
| &m                 | mark by file name extension                  |
+--------------------+----------------------------------------------+
| %m                 | mark by pattern (regex)                      |
+--------------------+----------------------------------------------+
| g                  | refresh                                      |
+--------------------+----------------------------------------------+
| x                  | applique les changements                     |
+--------------------+----------------------------------------------+
| ^                  | go to parent dir                             |
+--------------------+----------------------------------------------+
| dired-do-copy      | copier le répertoire ou fichier              |
+--------------------+----------------------------------------------+

Mode LaTeX
^^^^^^^^^^

+--------------------+----------------------------------------------+
| Raccourcis         | Descriptions                                 |
+====================+==============================================+
| C-c C-s            | nouvelle section (défaut : section, sinon la |
+--------------------+----------------------------------------------+
|                    | plus petite sous-section courante)           | 
+--------------------+----------------------------------------------+
| C-c C-e            | nouvel environnement (défaut : itemize)      |
+--------------------+----------------------------------------------+
| C-c C-j            | nouvel \\item                                |
+--------------------+----------------------------------------------+
| C-u C-c C-e        | changer l'environnement                      |
+--------------------+----------------------------------------------+
| C-c C-f C-c        | textsc                                       |
+--------------------+----------------------------------------------+
| C-c C-f C-e        | emph                                         |
+--------------------+----------------------------------------------+
| C-c C-f C-i        | textit                                       |
+--------------------+----------------------------------------------+
| C-c C-f C-b        | textbf                                       |
+--------------------+----------------------------------------------+
| C-c C-c C-t        | texttt                                       |
+--------------------+----------------------------------------------+
| C-c C-f C-r        | textrm                                       |
+--------------------+----------------------------------------------+
| si entre & &       | mathrm, ...                                  |
+--------------------+----------------------------------------------+
| C-c C-f C-d        | enlever le textxx                            |
+--------------------+----------------------------------------------+
| C-u C-c C-f C-?    | remplacer le textxx par text??               |
+--------------------+----------------------------------------------+
| C-c ;              | commente la région                           |
+--------------------+----------------------------------------------+
| C-c %              | commente le paragraphe                       |
+--------------------+----------------------------------------------+

Formatage
^^^^^^^^^

+--------------------+----------------------------------------------+
| Raccourcis         | Descriptions                                 |
+====================+==============================================+
| C-M-\\             | formater la région                           |
+--------------------+----------------------------------------------+
| M-q                | formater le paragraphe                       | 
+--------------------+----------------------------------------------+
| C-c C-q C-e        | formater l'environnement                     |
+--------------------+----------------------------------------------+
| C-c C-q C-s        | formater la section                          |
+--------------------+----------------------------------------------+
| C-c .              | marquer l'environnement                      |
+--------------------+----------------------------------------------+
| C-c *              | marquer la  section                          |
+--------------------+----------------------------------------------+
| C-M-a              | début d'environnement                        |
+--------------------+----------------------------------------------+
| C-M-e              | fin d'environnement                          |
+--------------------+----------------------------------------------+

Pour supprimer les ^M en fin de ligne
-------------------------------------

Faire la séquence suivante :

``M-< C-q C-M Enter C-q C-j Enter !``

Explications :

1. ``M-<`` on se place au début du document
2. ``M-%`` on active le mode de remplacement de caractères

#. ``C-q C-M`` on va remplacer les ^M
#. ``C-q C-j`` on va y mettre à la place des retours à la ligne
#. ``!`` on applique ces modifications à toutes les occurences rencontrées
   dans le fichier
   
Débugger emacs
--------------

``C-c apostrophe espace``


Changer le thème (couleur de fond,...)
--------------------------------------

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

1) afficher le menu :

   ::
     
        M-x menu bar-mode
    
2) Command -> TeXing Options -> Use XeTeX engine

ou simplement :

C-c-c tab et sélectionner xelatex

   .. image:: /IT/figures/emacs/Capture1.PNG
    :width: 500
    :align: center

LaTeX
=====


Installation LaTex, Emacs et auxtex sous Linux
----------------------------------------------

1. télécharger la dernière version de ``tex-live`` sur le site
   officiel
   
   a. télécharger le .iso
   b. copier les dossiers sur le bureau
   c. écrire dans un terminal :
      
      ::
	 
	 perl install-tl

   d. I
   e. ``etc/environement``, modifier le fichier pour que ça ressemble
      à ceci :
      
      ::
	 
	 PATH="/usr/local/texlive/2016/bin/i386-linux:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games" 
	 MANPATH="/usr/local/texlive/2016/texmf/doc/man"
	 INFOPATH="/usr/local/texlive/2016/texmf/doc/info"
	 
   .. note::
      changer si nécessaire 2016
      
2. installer emacs avec le synaptique

#. installer auxtec avec le synap
#. copier .emacs dans yd
#. pour que auxtex et emac communique entre eux, il faut rajouter ces
   lignes dans le .emacs (si pas déjà fait)~: 
  
  ::
     
    (require 'tex-site)
    (add-hook 'LaTeX-mode-hook 'turn-on-reftex)
    (setq reftex-plug-into-AUCTex t)
    (global-font-lock-mode t)
    
Tout ceci est tirer du site
https:\\www.math.purdue.edu/~dvb/xdvi.html pour que le script pour la 
conversion des Figures PSTicks fonctionne, il faut rajouter (dans le
script) -shell-escape après la commande
latex. (ex. latex -shell-escape 1.tex)



Fichier modèle Document LaTeX
-----------------------------

.. warning::
   Essayer toujours de travailler en encodage utf8, en partant du
   modèle en utf8.

A compiler avec pdflatex. Comprenant titre, logo et table de matière. 

.. literalinclude:: /IT/sources/latex/model_doc_latex.tex


Figure psTricks
---------------

Fichier modèle
^^^^^^^^^^^^^^

Pour faire une figure psTricks. A compiler avec fichier tex2pdf.sh

.. warning::
   Essayer toujours de travailler en encodage utf8, en partant du
   modèle en utf8.

.. literalinclude:: /IT/sources/latex/pstricks/model_figure_pstricks.tex
		    
		    
Variante A
^^^^^^^^^^

#. Copier le fichier tex2pdf.sh dans le même répertoire du fichier
   .tex de la figure
#. Dans un prompt Anaconda, par exemple et à condition d'avoir
   installer MiKTeX et réglé le PATH, tapez:
   
 ::

    tex2pdf.sh nom_fichier (sans l'extension .tex)

    
Explication du fichier tex2pdf.sh
'''''''''''''''''''''''''''''''''

.. literalinclude:: /IT/sources/latex/pstricks/tex2pdf.sh

Ce fichier utilise le schéma suivant pour compiler:

latex -> dvips -> ps2epsi -> epstopdf


ps2epsi sert à enlever le blanc autours de la figure. Ensuite grâce au
``rm``, il efface les fichiers non désirables.

   
Variante B
^^^^^^^^^^
Pour créer des figures pstricks j'utilise emacs pour compiler en
xelatex et TeXworks pour voir le résultat compilé en mettant la fenêtre
texwork à côté de celle de emacs.

Voir le résultat compilé avec xelatex avec TeXworks)
''''''''''''''''''''''''''''''''''''''''''''''''''''

#. clique droit sur le pdf
#. ouvrir avec
#. TeXworks - a graphical user interface to the typesetting system TeX
   and its extensions
#. placer la fenêtre à coté de celle de emacs
#. en compilant avec C-c-c, la fenêtre TeXworks se rafraîchit
   automatiquement

   .. image:: /IT/figures/pstrick_xelatex.png
    :width: 500
    :align: center

Cropper automatiquement un pdf
''''''''''''''''''''''''''''''

Pour enlever le blanc autours d'une figure, utiliser
|pdfcrop|. Selectionner automatique pour vraiment enlever tout le
blanc autours d'une figure. L'inconvénient est qu'il y aura plus de
marge entre le texte et la figure, il faudra insérer une ligne vide.

.. |pdfcrop| raw:: html
			      
   <a href="https://pdfresizer.com/crop"
   target="_blank">le service en ligne pdfresizer</a>

	    
Redessiner sur un pdf :
^^^^^^^^^^^^^^^^^^^^^^^^

1) convertir le pdf en .eps dans une console Unix en tapant :
   ::
      
      pdftops -eps fichierpdf.pdf
    
   .. Note::
      **remarque** cette commande marche uniquement sur un pdf d'une page
      seulement, si le pdf contient plusieurs pages, il faudra au
      préalable extraire la page qui nous intéresse. 
      Pour ce faire, voir :ref:`extraire une page d'un document pdf` 
2) utiliser le fichier FicViePSTriBox.tex téléchargeable depuis |lien1|
3) pour créer le pdf directement utiliser XeLaTeX (voir :ref:`Compilation
   avec XeLaTeX depuis emacs`)
4) pour visualiser le résultat après un C-c C-c, ouvrir le .tex avec
   TeXworks et choisir XeLaTeX cela va ouvrir une fenêtre pour voir le
   pdf créer
5) rogner le pdf avec Briss (voir :ref:`briss`) 

   .. |lien1| raw:: html

     <a href="https://drive.google.com/open?id=1F_Ey-1fIYD9GFvTb9yd7bh3Y8u85pQoo"
     target="_blank">ici</a>   

   
Sur un print-screen avec psTricks :
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1) faire un print-screen (voir :ref:`print-screen`)
2) ouvrir GIMP
3) enregistrer sous .eps
4) utiliser le fichier FicViePSTriBox.tex situé |lien1|
5) pour créer le pdf directement utiliser XeLaTeX (voir :ref:`Compilation
   avec XeLaTeX depuis emacs`)
6) pour visualiser le résultat après un C-c C-c, ouvrir le .tex avec
   TeXworks et choisir XeLaTeX cela va ouvrir une fenêtre pour voir le
   pdf créer
7) rogner le pdf avec Briss (voir :ref:`briss`)

   
Centrer la figure (pour les grosses figures)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Mettre dans le préambule :

::

   \setlength{\topmargin}{-2cm}
   \setlength{\evensidemargin}{-1cm}
   \setlength{\oddsidemargin}{-3cm}

pour modifier les marges.

.. note::

   Il arrive que cela génère une page blanche avant la figure et la
   page comprenant la figure soit numérotée. (malgré d'avoir utilisé
   la commande ``\thispagestyle{empty}``) On peut utiliser la commande
   suivante :

   ::

     \usepackage{nopageno}


Diagramme de flux
^^^^^^^^^^^^^^^^^

Pour dessiner un diagramme de flux ou flow chart, j'utilse pasmatrix
pour le placement des symboles. Voici les fichiers et répertoire
nécessaire pour ce projet.

.. image:: /IT/figures/latex/pstricks/FlowChart/Capture1.PNG
   :width: 350
   :align: center

.. image:: /IT/figures/latex/pstricks/FlowChart/Capture2.PNG
    :width: 350
    :align: center	   

Le fichier FlowChart.tex a été compilé avec le script tex2pdf.sh dans
un prompte Anaconda. La plupart des symboles sont présents, mais
d'autres peuvent bien-sûr être rajoutés. (à chercher sur le net)     

Voici le résultat:

.. image:: /IT/figures/latex/pstricks/FlowChart/Capture3.PNG
    :width: 350
    :align: center

Et le code source:

.. literalinclude:: /IT/sources/latex/pstricks/FlowChart/FlowChart.tex

Regex
=====

Java Script
-----------

caractère seul

- \d -> 0-9 \D -> pas des chiffres
- \w -> A-Z a-z 0-9  \W -> pas des lettres ni des chifres
- \s -> espace, tabulation  \S tout sauf des espaces
- . -> n'importe quel caractère

Quantificateur

- \* -> 0 ou plus
- \+ -> 1 ou plus
- ? -> 0 ou un seul
- {min,max} -> entre min et max fois
- {n} -> n fois
- ? si appairé avec un quantificateur alors ce ne sera pas
  gridy. gridy veut dire qui prendre la plus grande correspondance
  
Exemple pour Gridy :

.. image:: /IT/figures/Regex_gridy1.PNG
       :width: 500
       :align: center
	       
pour enlever le gridy :

.. image:: /IT/figures/Regex_not_gridy.PNG
       :width: 500
       :align: center


Position

^ -> début de ligne
$ -> fin de ligne
\b -> word boundery

Exemple pour \b :

.. image:: /IT/figures/RegexWordBoundery1.PNG
       :width: 500
       :align: center
.. image:: /IT/figures/RegexWordBoundery2.PNG	   
       :width: 500
       :align: center

Classe de caractère

[abc] -> soit un a un b ou un c
[-.] -> le point n'est pas un charactère meta mais un point litéral
(car il est compris dans une classe)
on échappera avec \ si l'on veut un point litéral et qu'il n'est pas
dans une classe.

"-" si il est au début de la classe il sera pris commme
un trait d'union litéral. Par-contre s'il est au centre de par exemple
[a-d] il sera interpréter comme un interval ici a ou b ou c ou d
"^" s'il est au début alors ça inverse, par exemple [^a-c] alors tous
les autres caractères seront pris sauf a,b,c.


Exemple :

.. image:: /IT/figures/Regex1.PNG
       :width: 500
       :align: center


Altération

(net|com) si on veut "net" ou "com"

Groupe

.. image:: /IT/figures/Regex_group.PNG
       :width: 500
       :align: center

on appellera $1 $2 suivant qu'il y plusieurs groupe $0 représente tout
ce qui a été trouvé

Back Reference

.. image:: /IT/figures/Regex_Back_Reference.PNG
       :width: 500
       :align: center

Implémentation de Regex dans Java Script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

variable string:

var s = "hello"

variable regex :

var r = /hello/

.. image:: /IT/figures/Regex_test.PNG
       :width: 500
       :align: center

Flags :

g pour global

/\d{3}/g

i pour case insensitive

match :

.. image:: /IT/figures/Regex_match.PNG
       :width: 500
       :align: center

match construit un array avec g, mais si la regex comporte un groupe
() alors si le flag g est présent le groupe ne sera pas mis dans l'array	     

.. image:: /IT/figures/regex_match_group.PNG
       :width: 500
       :align: center

pour que même le groupe soit pris dans l'array, il faut utiliser
r.exec(s) et faire une boucle::


  var results;
  while (results=r.exec(s){
  createP(results[1]);
  }

D3
^^^

Pour arrondir les chiffres

http://bl.ocks.org/zanarmstrong/05c1e95bf7aa16c4768e



bash
====
Echo
----
Afficher des variable système
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::
    
  echo PATH

::
   
 echo HOME

pour remplir un fichier

::

 echo -e "Qte\tPrix\tTotal\n\n3\t5\t15frs" > fichier

.. note::
   On peut afficher le contenu d'un fichier avec la commande ``cat
   nom_de_fichier``. Si l'on veut rajouter des lignes au fichiers on
   peut utiliser ``>>`` Mais dangereux car on a vite fait d'oublier de
   mettre le deuxième ``>``.

Sed and Awk
===========
Les différents moyens d'entrer du code
--------------------------------------

::

   awk -f nom_du_script fichier_d_entree

En tapant tout le code dans un terminal :
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   awk '
   BEGIN{
   print "Hello
   World"}
   '
   
.. warning::
   Ne pas oublier l'espace entre ``awk`` et ``'``

En tapant le code dans un fichier avec la commande ``awk`` insérée dans le fichier :
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   
Si le code contient ``BEGIN`` et une expression régulière alors on
entrera : 

::

 awk 'BEGIN { print "debut"}
 $0 ~ /Drive/ {print "sdfsd"}' nom_du_fichier_d_entree

Si le code contient pas d'expression régulière mais un ``BEGIN``, on
entrera : 

::

 awk 'BEGIN { print "debut"}
 {print "sdfsd"}' nom_du_fichier_d_entree   
   
Si le code ne contient pas de ``BEGIN`` alors on entrera :

::

   awk '{
   print "Hello World"
   }
   ' nom_du_fichier_d_entree

Passage des variables
---------------------

Voici un exemple pour le passage des variables d'entrée d'un programme 
awk entrer dans un fichier qui s'appelle glitch.

::

  awk 'BEGIN { FS = "\n"; RS = ""; ORS = "\n\n"}
  $0 ~ search {print $0}' search=$1 $2

   
Ici on a mis le séparateur de champ ``FS`` à un retour de ligne et le
séparateur d'enregistrement ``RS`` à une ligne vide, ceci afin de
pouvoir prendre en compte un fichier à données en bloc appelé
``glitch.data`` dont voici un extrait :

::
   
  machine	Sun 3/75
                8 meg memory
		Prone to memory glitches
		more info
		more info

  sadlefsdaf	siwefo
		asdlfa
		vmasefsdae
		glitche wefsd
		sdafsdf
  ziweower	wwerwe 3234
		sdfljkljké
		asdfvm78
		weojwd
		omcvljdoji

En tapant la commande :

::

 glitch glitc glitch.data

cela va donner :

::

  machine	Sun 3/75
		8 meg memory
		Prone to memory glitches
		more info
		more info

  sadlefsdaf	siwefo
		asdlfa
		vmasefsdae
		glitche wefsd
		sdafsdf
   

.. _Nom du lien:

Les fonctions
-------------

Emplacement pour déclaration des fonctions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::
   
   awk '
    function insert (STRING, POS, INS) {
    before = substr("Hello",1,POS)
    after = substr("Hello",POS+1)
    return before INS after
    }
   BEGIN{
      print insert($1, 4, "XX")
   }'

Divers exemples
---------------

Pour inverser les colonnes et les lignes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


::

   awk  '
   BEGIN{FS=";"}
   {
    for ( i = 1; i <= NF; ++i ){
	matrice[NR,i] = $i
	gsub(/\r/,"") #\r est le retour de ligne \n ne fonctione pas
    }
    }

    END {
	for ( j = 1; j <= NF; ++j ){
	    for ( i = 1; i <= NR; ++i ){
		printf ("%s;",matrice[i,j]) #point virgule aux séparateurs de champs à la sortie
	    }
	    if ( j < NF ) 
	    print("\r")
	}

    }' sp.txt > Result

reStructuredText
================

Installation
------------
1) installer Anaconda
2) installer VS code
3) modifier le path windows pointer les répertoires suivants :
   
   a) anaconda3/Scripts
   b) anaconda3 (c'est possible qu'il n'est pas nécessaire de pointer
      sur celui-ci)
   
Création d'un nouveau document
------------------------------
1) ouvrir Anaconda Prompt
2) aller dans le bon répertoire (tapez ``d:`` pour changer de partition)
3) une fois dans le répertoire où l'on veut mettre notre document,
   tapez : ::

     sphinx-quickstart

4) aux différentes questions répondre comme ci-dessous :
   
   ``> Separate source and build directories (y/n) [n]: y``
   
   ``> Name prefix for templates and static dir [_]:``
   
   ``> Project name: Mon nom de projet``
   
   ``> Author name(s): Alpiq AG``
   
   ``> Project release []: 1``
   
   ``> Project language [en]: fr``
   
   ``> Source file suffix [.rst]:``
   
   ``> Name of your master document (without suffix) [index]:``
   
   ``Sphinx can also add configuration for epub output:
   > Do you want to use the epub builder (y/n) [n]:``

   ``Indicate which of the following Sphinx extensions should be
   enabled:``
   ``> autodoc: automatically insert docstrings from modules (y/n) [n]:``
   
   ``> doctest: automatically test code snippets in doctest blocks
   (y/n) [n]:``

   ``> intersphinx: link between Sphinx documentation of different projects
   (y/n) [n]:`` 

   ``> todo: write "todo" entries that can be shown or hidden on build
   (y/n) [n]: y`` 

   ``> coverage: checks for documentation coverage (y/n) [n]:``

   ``> imgmath: include math, rendered as PNG or SVG images (y/n) [n]: y``
   
   ``> mathjax: include math, rendered in the browser by MathJax (y/n)
   [n]: y``

   ``> ifconfig: conditional inclusion of content based on config values
   (y/n) [n]: y`` 

   ``> viewcode: include links to the source code of documented Python
   objects (y/n)[n]:`` 

   ``> githubpages: create .nojekyll file to publish the document on GitHub
   pages (y/n) [n]:`` 

   ``> Create Makefile? (y/n) [y]:``
   
   ``> Create Windows command file? (y/n) [y]:``

5) ajouter la ligne suivante: ``master_doc = 'index'`` sinon ça bug
   avec **Read The Docs** aussi ça plante lorsqu'on compile dans un
   terminal windows (cmd) ça affiche qu'un fichier dénommé
   ``contents`` est introuvable. 

6) tapez dans le terminal : ::

     D:\tmp\sphinxTxt>make html

7) ouvrir Visual Studio Code
8) ouvrir le répertoire du projet et non le fichier .rst (File -> Open
   Folder) 
9) il se peut que l'on soit demandé à selectionner le ``conf.py``,
   selectionnez celui qui se trouve dans le répertoire du projet 
10) pour ouvrir la prévisualisation cliquer sur le symbole afficher
    sur la figure ci-dessous. Sinon ouvrir le html dans un explorateur
    qui se trouve dans le répertoire _build -> html 
   
.. image:: /IT/figures/IconePrevisualisation.png
   :alt: cette image montre où l'on doit cliquer pour ouvrir la
	 fenêtre de prévisualisation
	 
11) pour l'édition, j'utilise emacs, ouvrir le fichier ``index.rst``

    
Changement de Thèmes
--------------------

1) choisir son thème |theme|. Pour cet exemple, j'ai choisi
   ``sphinx_rtd_theme`` car il est "*mobile friendly*"

 .. |theme| raw:: html

   <a href="http:sphinx-themes.org"
   target="_blank">ici</a>

2) se connecter à internet (swisscom) et tapez dans une console :

   ::

      pip install sphinx_rtd_theme

      
3) ouvrir le ``conf.py`` et mettre ``html_theme = 'sphinx_rtd_theme'``


Compilation
-----------

Dans un **Anaconda prompt** tapez : 

::

   make html

Pour voir la doc dans un navigateur internet. Ceci créera un répertoire
``build`` et y placera deux autres répertoires : ``html`` et
``doctrees`` Dans le répertoire ``html`` on trouvera le fichier
``index.html``. En  cliquant sur ce dernier cela va ouvrir la doc dans
un navigateur internet.  
Le répertoire ``doctrees`` sert pour la table des matières.


ou

::
   
   make latex

ou

::
   
   make latexpdf

.. note::
   Après la compilation, il se peut que la table des matières ne soit
   pas dans l'ordre ou que toutes les sections suivantes ne soient
   affichées. Dans ce cas, il faut supprimer le répertoire `build` et 
   refaire une compilation.


Traduction
----------

::
   
   -doc
     .git
     .gitignore
     make.bat
     Makefile
     -build
        -doctrees
	-gettext
	   index.pot
	-html
	-latex
     -sources
        -locale
	   -de
	      -LC_MESSAGES
	         index.po
	   -fr
	      -LC_MESSAGES
	         index.po
        -dir
           -images
	      -de
	         -1.png
	      -fr
	         -1.png

Les textes à traduire se trouvent dans les fichiers ``.po``


Liens à traduire et problèmes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Pour les liens à traduire qui sont internes au document et qui
n'ouvrent pas de nouvelle fenêtre ça fonctionne bien. Par-contre pour
les liens qui ouvrent une nouvelle fenêtre comme dans le code suivant: 

::
   
  This is in my .rst:

  On ouvre une nouvelle fenêtre |lien|

  .. |lien| raw:: html

    <a href="http://python.physique.free.fr/aide/_sources/Partie1.txt"
    target="_blank">ici</a>

  and this is the translated file:

  #: ../../source/consigne_indispo/consigne_indispo.rst:4
  msgid "On ouvre une nouvelle fenêtre |lien|"
  msgstr "Wir öffnen ein neues Fenster |lien|"

  The problem is that I want to translate the world "ici" also (should
  be translated in "hier", but can't see it in the translated file. 


1. installer `sphinx-intl`

  ::

   $ pip install sphinx-intl

2. rajouter ces lignes dans le `conf.py`

  ::

   locale_dirs = ['locale/']   # path is example but recommended.
   gettext_compact = False     # optional.
   gettext_additional_targets = ['image', 'index', 'literal-block'] #
   allows images to be translatable. Cette ligne permet de traduire
   les "alt" ou "les légendes" 
   figure_language_filename = "{path}{language}/{basename}{ext}"

3.

  ::

   make gettext

4. génération des fichiers `po` (dans le cas suivant pour l'allemand
   et pour le japonais) 

  ::

   sphinx-intl update -p build/gettext -l de -l ja

 sitôt fait, le fichier `po` se trouve dans le répertoire
 ./locale/de/LC_MESSAGE`  

5. traduire le fichier `po`
   
   exemple :

  ::

   msgid "Available builders"
   msgstr "<FILL HERE BY TARGET LANGUAGE>"

  Dans le cas où il y a plusieurs lignes :

  ::

   msgid ""
   "These are the built-in Sphinx builders. More builders can be added by "

   msgstr ""
   "FILL HERE BY TARGET LANGUAGE FILL HERE BY TARGET LANGUAGE FILL
   HERE " 
   "BY TARGET LANGUAGE :ref:`EXTENSIONS <extensions>` FILL HERE."

6. génération du document traduit, saisir dans le `Anaconda Powershell
   Prompt` Bien faire dans ce Prompt car dans l'autre la commande
   ``Set...`` ne fonctionne pas. Ici on veut générer le html pour
   l'allemend (de)

  ::

   > Set-Item env:SPHINXOPTS "-D language=de"
   > .\make.bat html

7. génération d'une langue supplémentaire : il suffit de remplacer
   ``de`` par ``en`` par exemple

8. si l'on a fait des mises à jour, il faudra faire les étapes 3)
   et 4) pour regnérer le .po. Si les .po ne subissent pas de
   changement il ne seront pas effacés ni regénérés.    
     
.. note::

   Il arrive parfois que le mot ``fuzzi`` apparaisse pour une raison
   que je ne saurai expliquer. Peut être est-ce dû aux longues lignes?
   Pour que ça refonctionne, ma technique est de supprimer la ligne
   comportant ```fuzzi``.

   .. image:: /IT/figures/Capture2.PNG
       :width: 500
       :align: center

   .. image:: /IT/figures/Capture3.PNG
       :width: 500
       :align: center

	       
Images différentes pour chaque langue
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``figure_language_filename = "{path}{language}/{basename}{ext}"`` à
mettre tel quel dans le fichier ``conf.py``

``gettext_additional_targets = ['image', 'index', 'literal-block'] #
allows images to be translatable``

cette dernière ligne je ne sais pas encore à quoi elle sert, mais je
l'ai mise quand même.

.. important::

   Il est impératif de créer à l'endroit où il y a le fichier .rst un
   répertoire se nommant ``images`` (et pas figure par exemple sinon
   ça marche pas).

#. créer un répertoire se nommant ``images``
#. à l'intérieur de ce répertoire créer des répertoires pour chaque
   langue. Par exemple pour le français et l'allemand :

   * ``fr``
   * ``de``

   Je ne sais pas si l'abréviation de la langue est importante (fr et
   de)

#. dans chacun de ces répertoire l'image bien que différente, doit
   être nommée à l'identique. ex. dans le répertoire ``fr`` une image
   nommée ``1.png`` se retrouvera aussi dans le répertoire ``de`` avec
   le même nom ``1.png``.   

	       
	       
Pour plus d'information
^^^^^^^^^^^^^^^^^^^^^^^

|lien2|

.. |lien2| raw:: html

   <a href="http://www.sphinx-doc.org/en/master/usage/advanced/intl.html"
   target="_blank">sphinx-doc</a>

   
Mise en forme
-------------

Numérotation chapitre, section, etc...
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* ``#`` pour les parties
* ``*`` pour les chapitres
* ``=``, pour les sections
* ``-``, pour les sous-sections
* ``^``, pour les sous-sous-sections
* ``"``, pour les paragraphes
  

Listes et sous-listes
^^^^^^^^^^^^^^^^^^^^^

::
   
   * une puce "*"
     - une sous-liste avec "-"
       + à nouveau une sous-liste avec "+"
     - une autre option
       
Liste d'items numérotée automatiquement
"""""""""""""""""""""""""""""""""""""""

::

   1. Liste numérotée "à  la main".
   2. Deuxième item.

   #. Liste numérotée automatiquement.
   #. Deuxième item.

1. Liste numérotée "à  la main".
2. Deuxième item.

#. Liste numérotée automatiquement.
#. Deuxième item.

   
Les tableaux
^^^^^^^^^^^^

::

   +------------------------+------------+----------+
   | Header row, column 1   | Header 2   | Header 3 |
   +========================+============+==========+
   | body row 1, column 1   | column 2   | column 3 |
   +------------------------+------------+----------+
   | body row 2             | Cells may span        |
   +------------------------+-----------------------+


   ====================  ==========  ==========
   Header row, column 1  Header 2    Header 3
   ====================  ==========  ==========
   body row 1, column 1  column 2    column 3
   body row 2            Cells may span columns
   ====================  ======================

donnera :

   +------------------------+------------+----------+
   | Header row, column 1   | Header 2   | Header 3 |
   +========================+============+==========+
   | body row 1, column 1   | column 2   | column 3 |
   +------------------------+------------+----------+
   | body row 2             | Cells may span        |
   +------------------------+-----------------------+


   ====================  ==========  ==========
   Header row, column 1  Header 2    Header 3
   ====================  ==========  ==========
   body row 1, column 1  column 2    column 3
   body row 2            Cells may span columns
   ====================  ======================

   
Insertion d'une figure
^^^^^^^^^^^^^^^^^^^^^^

Si le répertoire nommé ``figures`` est au même endroit où il y a le
fichier ``index.rst`` 

::

   .. image:: /figures/IconePrevisualisation_cropped.png
       :scale: 80 %
       :align: center
      
Image svg
'''''''''

Pour avoir une image non pixelisée, le format svg peut être utilisé.

J'utilise l'adresse suivante (cliquer |svg|) pour convertir le format
pdf en svg 

 .. |svg| raw:: html

   <a href="https://convertio.co/fr/"
   target="_blank">ici</a>

		
Insérer une ligne vide
^^^^^^^^^^^^^^^^^^^^^^

Utile par exemple quand on insère une figure croppée automatiquement
(pas de marge blanche autours de la figure). Ainsi le texte ne sera
pas trop de la figure.

::
   
  .. # define a hard line break for HTML
  .. |br| raw:: html

   <br />

Mettre à l'emplacement où l'on veut avoir une ligne blanche :

::

   |br|


Surbrillance d'un texte
^^^^^^^^^^^^^^^^^^^^^^^

``Surbrillance d'un texte``

Tapez : ::

``Surbrillance d'un texte``


Pour afficher un bloc avec du code
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
::
   
 POUR AFFICHER CECI (un bloc avec du code)

Tapez : 

::
   
 ::

  POUR AFFICHER CECI (un bloc avec du code)
  

Pour créer un lien à l'intérieur d'un document 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

interne à la page ou à une autre page .rst

.. warning::

   Pour que le lien fonctionne il faut bien effacer le répertoire
   ``build`` avant (rmdir /s build) et refaire une compilation (make html).


label (à mettre où l'on veut tomber) :

::
   
 .. _Nom du lien:

Par exemple si on veut que ça tombe vers une section, on le placera
une ligne avant la section.

::
   
 .. _Nom du lien:

 reStructuredText
 ================

ref (à écrire où on veut mettre le lien)

::

 Pour plus d'information veuillez vous référer à :ref:`Nom du lien`.

Ceci donnera :

Pour plus d'information veuillez vous référer à :ref:`Nom du lien`.


Pour créer un lien à une page internet
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
En cliquant sur le lien, cela va ouvrir une nouvelle fenêtre dans le
navigateur. 

::

 En cliquant |lien|

::

 .. |lien| raw:: html

   <a href="http://python.physique.free.fr/aide/_sources/Partie1.txt"
   target="_blank">ici</a>

.. warning::
   Ne pas oublier d'indenter <a href...

On peut très bien écrire directement :
::
   
 http://home.citycable.ch/windwaver/MesSources/

mais cela ne va pas ouvrir une nouvelle fenêtre dans le navigateur.

   
Commentaires
^^^^^^^^^^^^

- Pour commenter une ligne, mettre deux points et un espace.

- Pour commenter un bloc, mettre deux points et indenter le bloc en
  dessous.
  

Mettre en évidence une chose importante
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   .. warning::
      Mettre ici une chose importante
      
ce qui donne :

.. warning::
   Mettre ici une chose importante

::

   .. hint::
      Une chose moins importante

ce qui donne :      
      
.. hint::
   Une chose moins importante

   
+---------------+----------------+----------+
|Commande       |*Qui donne*     |*Couleur* |
+===============+================+==========+
|`.. warning::` |`'i' int32`     | Rouge    |
+---------------+----------------+----------+
|`.. note::`    |`note`          | Grise    |
+---------------+----------------+----------+
|`.. tip::`     |`Astuce`        | Grise    |
+---------------+----------------+----------+
|`.. caution::` |`Prudence`      | Grise    |
+---------------+----------------+----------+
|`.. error::`   |`Erreur`        | Grise    |
+---------------+----------------+----------+
|`.. hint::`    |`Indice`        | Grise    |
+---------------+----------------+----------+

  
Pour insérer du code à partir d'un fichier
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Tapez le code suivant : ::

  .. literalinclude:: /IT/sources/exemple_graphique01.py

Ce qui donnera :

.. literalinclude:: /IT/sources/exemple_graphique01.py

		    
Pour insérer une vidéo
^^^^^^^^^^^^^^^^^^^^^^

Tapez le code suivant : ::
  
  .. raw:: html

      <iframe width="560" height="315"
      src="https://www.youtube.com/embed/UaIvrDWrIWM" frameborder="0"
      allowfullscreen></iframe>

Ce qui donnera :

.. raw:: html

      <iframe width="560" height="315"
      src="https://www.youtube.com/embed/UaIvrDWrIWM" frameborder="0"
      allowfullscreen></iframe>

Pour insérer des formules mathématiques
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Normalement, on peut inclure des maths avec ``:math:`code LaTeX```
ou alors avec ``.. math:: code LaTeX sur une seule ligne``

.. code-block:: rst
		
  .. math::

     a^2
     
Ce qui donne :

.. math::

   a^2

Création du document pdf
------------------------

1) à l'aide du prompt Anaconda se déplacer dans le répertoire du
   projet (où il y a le .rst) 
2) tapez ``make latexpdf`` cela va créer un répertoire latex dans le
   répertoire _build
3) ouvrir le fichier .tex dans le répertoire latex avec emacs
4) compiler
   

Divers liens utiles
-------------------

1) |lien3|

.. |lien3| raw:: html

   <a href="http://python.physique.free.fr/aide/Partie1.html"
   target="_blank">python.physique</a>

2) |lien4|

.. |lien4| raw:: html

   <a href="https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html"
   target="_blank">thomas-cokelaer</a>

3) |lien5|

.. |lien5| raw:: html

   <a href="http://www.sphinx-doc.org/en/master/usage/quickstart.html"
   target="_blank">sphinx-doc</a>

4) |lien6|

.. |lien6| raw:: html

   <a href="https://draft-edx-style-guide.readthedocs.io/en/latest/ExampleRSTFile.html#id15"
   target="_blank">draft-edx-guide</a>

5) |lien7|

.. |lien7| raw:: html

   <a href="https://www.complang.tuwien.ac.at/doc/python3-docutils/docs/ref/rst/restructuredtext.html"
   target="_blank">complang</a>

6) |lien8|

.. |lien8| raw:: html

   <a href="http://docutils.sourceforge.net/rst.html"
   target="_blank">docutils.sourceforge</a>

Visual Studio Code
==================

Configuration
-------------

fichier JSON de configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/sources/VisualStudioCode/Capture1.PNG
       :width: 250
       :align: center

.. image:: /IT/sources/VisualStudioCode/Capture2.PNG
       :width: 250
       :align: center

Pour les lignes longues on peu mettre dans settings Word Wrap à on.

emmet est installé par défaut. Il permet de ne pas écrire tout la
syntaxe balistique. Par exemple si on veut écrie <h1></h1>, il suffit
d'appuyer sur h ensuite sur ce qui est proprosé faire une tabulation à
droite ou enter.

Extension
---------

Prettier - Code formatter 
^^^^^^^^^^^^^^^^^^^^^^^^^

Permet d'aligner le code à la sauvegarde

.. image:: /IT/figures/VisualStudioCode/Capture3.PNG
       :width: 250
       :align: center

Une fois installé, il faut aller dans settings

.. image:: /IT/figures/VisualStudioCode/Capture4.PNG
       :width: 250
       :align: center

Il faut peut-être reloader l'extension si demandé.	       
	       
Taper "format" dans la zone recherche

.. image:: /IT/figures/VisualStudioCode/Capture5.PNG
       :width: 350
       :align: center	       

	       
Cocher Format On Paste et Format On Save

.. image:: /IT/figures/VisualStudioCode/Capture6.PNG
       :width: 350
       :align: center

Et maintenant à chaque enregistrement du fichier le texte se formate.


keyboard shortcuts
------------------

.. image:: /IT/figures/VisualStudioCode/Capture7.PNG
       :width: 350
       :align: center
	       
html
====

- HTML  HYPER TEXT MARKUP LANGUAGE
- RESPONSIBLE FOR WEBPAGE STRUCTURE
- <element>content</element>
- <h1>Heading</h1> === Heading Element
- <p>Paragraph</p> === Paragraph Element
- <img src="..."> === Image Element
- <br /> === Line Break

.. image:: /IT/sources/html/Capture1.PNG
       :width: 500
       :align: center

<!DOCTYPE html>
---------------

Pour mettre en entête standard dans index.html on tapera ``!`` et
return emmmet insérera l'entête standard pour le fichier index.html. 
	       
	       
Toutes les pages html suivent la même structure. Tout en haut nous
avons la déclacration DOCTYPE qui dit au browser en quel version du
language html la page est écrite. Ensuite nous avons la balise html
qui englobe tout notre code de la page. Celle possède au moin un head
et un body. Donc après l'élément html nous avons l'élément head	qui
contient des informations de la page comme par exemple le titre de la 
page, les métadatas, et les links vers source extérieures comme les
fichiers de style css et les fichiers java script. Le contenu de head
ne sera pas visible dans la page.  
Le body contiendra headings, paragraphes, links.



Maintenant que nous connaissons les bases du contenu d'une
page, mettons ceci dans notre première page. En tapant <, VS va nous
proposer !DOCTYPEhtml qui est la version 5 de html. Ensuite vient la
balise html. Puis body dans lequel on met un h1 avec du
texte. Enchaînant avec un paragraph.

.. image:: /IT/sources/html/Capture2.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture3.PNG
       :width: 350
       :align: center

Grâce à l'extension live server notre résultat est affiché
automatiquement après un save.

.. image:: /IT/sources/html/Capture4.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture5.PNG
       :width: 350
       :align: center

En mettant autosave notre résultat sera affiché en live.

Tout le contenu que l'on a tapez précédemment peut être simplifié par
emmet. Tapez simplement ``!`` et ``enter``.

.. image:: /IT/sources/html/Capture6.PNG
       :width: 350
       :align: center

Pour l'instant, on fera attention que pour title et se qui se trouve
dans le body.

headings
--------

.. image:: /IT/sources/html/Capture7.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture8.PNG
       :width: 350
       :align: center
	       
paragraph
---------

Pour info html is white space collapsing, c'est-à-dire que html ignore
les espaces que l'on aurait fait en trop entre deux mots. Si l'on veut
vraiment un espace plus grand, on verra ceci plus tard.

Regardons maintenant comment on peut écrire un bout de texte
(n'importe quel paragraphe) rapidement.
Tapez : ``Lo`` et choisissez ``lorem``. On peut choisir le nombre de
mots que l'on souhaite afficher en tapant ``lorem50`` pour 50 mots.

.. image:: /IT/sources/html/Capture9.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture10.PNG
       :width: 350
       :align: center	       

Images
------

Si l'on veut des images quelconques, on peut chercher dans google
udemy image.

Tapez ``img`` et enter on doit indiquer dans src le chemin où se
trouve l'image sur le disque. et alt est renseigné pour que si l'image
ne peut être trouvée, un texte alternative est affiché à la place de
l'image.

.. image:: /IT/sources/html/Capture11.PNG
       :width: 350
       :align: center

Il est préférable d'utiliser le relative path :
``./``

On peut très bien pointer sur l'adresse d'une image sur le web: dans
ce cas il faut faire un clique droite sur l'image est faire ``copier
l'adresse de l'image``. L'inconvénient de cette technique est d'avoir
une adresse monstrueuse de l'image. Il existe des sites qui propose
des images sans licences dont l'adresse est plus simple. Comme par
exemple :

- https://pixabay/en
- https://www.pexels.com  
- https://gratisography.com

Enregistrer l'image dans le dossier.

Modifier la taille
^^^^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture12.PNG
       :width: 350
       :align: center

On a prit une grand image et l'affichage est tronqué. Pour ajuster la
taille de l'image, on pourrait très bien diminué sa taille avec un
logiciel, mais ici nous allons utiliser les attributs d'html pour
modifier la taille de l'image.

Pour mettre l'image à la même taille que la première nous allons
utiliser Visual Studio Code pour en ouvrant la première image.

.. image:: /IT/sources/html/Capture13.PNG
       :width: 350
       :align: center

et relever la valeur de 246x205 affichée dans le bandeau inférieur. Et
pour la plus grande image nous avons 5999x3681

On rajoute un attribut width="246" et le tour est joué.

.. image:: /IT/sources/html/Capture14.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture15.PNG
       :width: 350
       :align: center	       

Il y a un autre attribut qui est ``height`` mais si on met celui-ci
l'image sera déformée, donc garder uniquement ``width``.

Il y a un grand problème encore quand le browser render l'image bien
qu'elle aie diminué en taille elle sera toujours chargée avec un
grande taille d'octets. Ce qui va réduire le user experience. Utiliser
un logiciel libre comme gimp et réduire la taille directement à la
bonne taille et ensuite enlever le ``width``.

path
^^^^

Créons un dossier images avec les images dedans. Et modifions le
chemain des images.

.. image:: /IT/sources/html/Capture16.PNG
       :width: 350
       :align: center

	       
Commentaires
------------

.. image:: /IT/sources/html/Capture17.PNG
       :width: 350
       :align: center

Raccourci clavier : appuyer en même temps sur ctrl alt et "a"

line break
----------

``<br>``

links
-----

External links
^^^^^^^^^^^^^^

Pour mettre un lien

.. image:: /IT/sources/html/Capture18.PNG
       :width: 350
       :align: center

Pour que la page s'ouvvre dans une autre page

.. image:: /IT/sources/html/Capture19.PNG
       :width: 350
       :align: center

Internal links
^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture20.PNG
       :width: 350
       :align: center

Internal links dans la même page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture21.PNG
       :width: 350
       :align: center

créons un id à l'endroit où l'on veut tomber

.. image:: /IT/sources/html/Capture22.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture23.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture24.PNG
       :width: 350
       :align: center       

	       
Mettre un lien sur une image par exemle
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A la place de cliquer sur un texte souligné representant un lien, nous
pouvons mettre à la place une image.

.. image:: /IT/sources/html/Capture25.PNG
       :width: 350
       :align: center

Si l'on ne sait pas encore le lien, on peut mettre un # à la place de
l'url.

.. image:: /IT/sources/html/Capture26.PNG
       :width: 350
       :align: center

sub and sup
-----------

.. image:: /IT/sources/html/Capture27.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture28.PNG
       :width: 350
       :align: center	       

strong
------

.. image:: /IT/sources/html/Capture29.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture30.PNG
       :width: 350
       :align: center	       

em
---

.. image:: /IT/sources/html/Capture31.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture32.PNG
       :width: 350
       :align: center

Normalement, nous utilisons ces éléments dans le css.

Caractères spéciaux
-------------------

Copyright
^^^^^^^^^

.. image:: /IT/sources/html/Capture33.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture34.PNG
       :width: 350
       :align: center	       

Pour d'autres caractères spéciaux, se référer à google "special html
caracter".

Liste
-----

Liste non numérotée
^^^^^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture35.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture36.PNG
       :width: 350
       :align: center
	     
Exemple d'utilisation des listes non numérotée
''''''''''''''''''''''''''''''''''''''''''''''
Pour faire un menu. Pour l'instant le style n'est pas bon, mais nous
verrons plus tard comment l'améliorer.

.. image:: /IT/sources/html/Capture37.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture38.PNG
       :width: 350
       :align: center	       


Liste numérotée
^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture39.PNG
       :width: 350
       :align: center	       	       
	  
.. image:: /IT/sources/html/Capture40.PNG
       :width: 350
       :align: center

Liste imbriquée
^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture41.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/sources/html/Capture42.PNG
       :width: 350
       :align: center	       	       

Table
-----

.. image:: /IT/sources/html/Capture43.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/sources/html/Capture44.PNG
       :width: 350
       :align: center	       	       

avec:

- th pour table head
- tr pour table row
- td pour table data

  
Form
----

.. image:: /IT/sources/html/Capture44.PNG
       :width: 350
       :align: center

Pour l'introduction des formulaires nous ne nous s'occuperons pas de
acction="" ni de method="" car ces attributs sont pour la collecte de
donnée avec par exemple php ou JS. 	  

Pour la collecte de données nous pourrions utilisé
https://formspree.io qui nous enverrais les données par email. 

.. image:: /IT/sources/html/Capture46.PNG
       :width: 500
       :align: center	       	       

``action`` est utlisée pour dire à quel email les données collectées
doivent être envoyée.
``method="POST"`` est utilisée pour envoyer les données sur un
server.

input a plusieurs type comme email, button, checkbox. Le plus courant
est le type text, il a deux attributs name et id. name est l'endroit
où l'on veut stocker les données. id est utilisé avec label que nous
montrerons plus loin.

input type="text"
^^^^^^^^^^^^^^^^^

.. image:: /IT/sources/html/Capture47.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/sources/html/Capture48.PNG
       :width: 350
       :align: center

Nous voyons le champs dans lequel on peut écrire quelque chose, mais
ne se passe.

submit button
^^^^^^^^^^^^^

L'élément qui vient souvent avec un formulaire est le bouton
submit. Pour l'implémentation de celui-ci nous avons deux options.

button avec type="submit" et entre button nous pouvons mettre le texte
du button.

.. image:: /IT/sources/html/Capture49.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture50.PNG
       :width: 350
       :align: center	       

si l'on veut un espace entre les deux éléments on peut utiliser <br>

.. image:: /IT/sources/html/Capture52.PNG
       :width: 350
       :align: center

Plus nous utilserons <div> pour un meilleure rendu.

Pour l'instant les données entrées sont retournée à la même page.

En tapant eric, nous aurons name=eric

.. image:: /IT/sources/html/Capture53.PNG
       :width: 350
       :align: center

Les champs se vident car nous avons appuyer sur le bouton submit.

La deuxième variant pour mettre un bouton submit est d'utiliser input
avec type="submit".

.. image:: /IT/sources/html/Capture54.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture55.PNG
       :width: 350
       :align: center	       

On constate que le texte sur le bouton s'est mis tout seul Un mot en
français "Envoyé".

label
^^^^^

Parlons maintenant du id. id vient avec label. On peut mettre un label
à un champs.

.. image:: /IT/sources/html/Capture56.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture57.PNG
       :width: 350
       :align: center	       

input password et email
^^^^^^^^^^^^^^^^^^^^^^^

Regardons maintenant à d'autre input comme password et email.

placeholder
^^^^^^^^^^^

Au lieu de label nous pouvons aussi mettre un paragraphe. Mettons un
placeholder qui écrit à l'intérieur du champs ce que l'on veut.

Mettons l'input email. Remarquons que si l'email n'est pas
correctememnt formater, il y aura un message d'alerte.

value
^^^^^

Parlons de l'attribut value qui sert à coder en dure. Le champs est
directement rempli par value. Aussi on peut mettre type="submit" value
pour afficher un autre texte sur le bouton submit.

.. image:: /IT/sources/html/Capture58.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture59.PNG
       :width: 350
       :align: center	       	       


textarea, bouton radio
^^^^^^^^^^^^^^^^^^^^^^

input ne sont pas les seules élément que l'on peut mettre dans un
form.

textarea, qui nous permet d'écrire plus de mots. Les attributs cols et
rows permettent d'ajuster la taille de textarea.

Nous avons aussi les boutons radio. On mettra value pour travailler
la collecte des inputs. Attention de bien écrire name avec le même nom
car sinon nous pourrons sélectionner plusieur bouton en même temps. 

.. image:: /IT/sources/html/Capture60.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture61.PNG
       :width: 350
       :align: center	       	       

checkbox
^^^^^^^^
	       
Voici comment implémenter les checkbox:

.. image:: /IT/sources/html/Capture62.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture63.PNG
       :width: 350
       :align: center

Il y a aussi un attribut ``checked`` pour dire que la case est
cochée par défaut, il est possible de la déchecker.

.. image:: /IT/sources/html/Capture64.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/html/Capture65.PNG
       :width: 350
       :align: center

On remarque que des que l'on appuie sur le submit button les données
ne sont envoyées à nulle part, mais on constate que l'adresse (url) se
modifie avec les données saisies dans le forulaire.

select
^^^^^^

C'est comme un drop down menu.

Documentation
-------------

- https://www.w3schools.com (plus friendly)
- https://developer.mozilla.og chercher "html"

Premier Projet
--------------

Etape "Home"
^^^^^^^^^^^^

#. Créons d'abord un répertoire sur le disque local avec le nom du
   projet. Ici le nom du répertoire sera Coffee;
#. Dans la première ligne tapez ``!`` et return. Emmet insérera un
   en-tête standard;
#. Modifions le titre en mettant Coffe Junkie;
#. Dans le body mettons hello world;
#. Pour voir notre résultat faisons un clique-droite et sélectionnons
   Live Server;
#. Arrangeons un peu les fenêtres. Ouvrons un deuxième instance de
   Chrome et écrivons l'url de Live Server. Sur un écran, on peut
   mettre VS prenant un peu plus de la moitié de l'écran et l'autre
   moitié Chrome. Dans le premier Chrome un mettra la page sur toute
   sa largeur afin d'avoir une vue total en largeur de la page du site
   que l'on va créer;
#. Dans le répertoire Coffee, créons un nouveau répertoire images;
#. Copions les images dans le répertoire images

   - pour le logo dans google taper coffe logo backround transparent
   - pour l'image plus grande on ira la chercher sur pexels.com

#. Modifions trois images avec Gimp à une taille de 320px de largeur;
#. Ecrivons le code pour insérer le logo;
#. Un h3 pour le titre de la page
#. Un ul pour faire la liste de navigation.

Et voici le code de notre premier étape   

   .. image:: /IT/figures/html/Capture66.PNG
       :width: 350
       :align: center

Et l'apperçu


.. image:: /IT/figures/html/Capture67.PNG
       :width: 350
       :align: center

	       

#. Insérons l'image backround la grande et nous voyons qu'elle est
   trop grand sur la fenêtre à coté VS et trop petite sur la grande
   fenêtre de Chrome. Normalement nous devons faire cela dans css,
   mais comme nous n'avons pas encore abordé ce sujet, nous mettrons
   la commande directement dans le html, avec l'attribut width à 100% 

   .. image:: /IT/figures/html/Capture68.PNG
       :width: 350
       :align: center

#. Mettons maintenant un h1 pour Feature Product
#. Un h2 pour House Blend Coffee
#. Une image
#. un paragraphe avec ici une petite spécialité que l'on corrige
   maintenant mais normalement cela va se faire en css. Le paragraphe
   s'étire sur toute la largeur de la page en plein écran et c'est pas
   beau. On fait du inline styling en écrivant <p style="width:50%">   
#. un h3 pour un lien vers wikipedia, remarquer l'attribut de
   target="_blank" pour que l'utilisge ouvre une nouvelle page et ne
   quitte notre site
#. copions ce code pour les deux autres produits et changeons les noms
   et images.
#. mettons le copyright avec &copy; pour le caractère spéciale
#. insrérons quelques br et un lien vers le top ou logo mais étant
   donné que nous n'avons pas encore de id sur l'image du logo,
   rajoutons le maintenant

Voici le code pour cette étape:

.. literalinclude:: /IT/sources/html/index1.html

.. image:: /IT/figures/html/Capture69.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/html/Capture70.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/html/Capture71.PNG
       :width: 350
       :align: center
	       
   
Etape "About"
^^^^^^^^^^^^^

Faisons maintenant la page About, qui a aussi l'image background (la
toute grande) normalement on utilise du css pour définir une
"background image". Nous avons plusieurs options pour commencer cette
page, soit de copier coller la page Home déjà faite à la première
étage, ou soit tout réécrire d'une page blanche. Choisisson la
première options.

#. Changeons le titre en About
#. La grande image reste et Feature Product est remplacé par About Us
#. Effacer les 3 produits
#. Rajoutons un paragraphe avec 500 mots avec Lorem500 

Etape "Numbers"
^^^^^^^^^^^^^^^

Pour la page Numbers tout reste la même chose (entête,
bas-de-page). Donc nous refaisons un copier paste, mais cette fois du
contenu de la page About.

#. Dans le head, on mettra title à Numbers
#. Dans le body, on mettra en h1 Our Stores
#. Insérons une table et commentaire pour notre row city avec tr
#. th pour titre avec les 4 noms des villes et un commentaire disant
   que c'est la fin de la première row
#. faisons la même chose pour la ligne mais avec td pour data
#. comme ce tableau n'a pas fière allure nous lui appliquons du css.
   
.. image:: /IT/figures/html/Capture72.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/html/Capture73.PNG
       :width: 350
       :align: center	       

Voici le code pour la page numbers

.. literalinclude:: /IT/sources/html/numbers.html

Etape "Contact"
^^^^^^^^^^^^^^^

Encore une fois nous allons copier le contenu.

Voici le code pour la page contact

.. literalinclude:: /IT/sources/html/contact.html

Et le résultat du formulaie

.. image:: /IT/figures/html/Capture74.PNG
       :width: 350
       :align: center	       

On constate que l'attribut action="" reste vide car pour l'instant
nous n'allons pas envoyer les données ailleurs.

css
===

Choix des styles / couleurs
^^^^^^^^^^^^^^^^^^^^^^^^^^^

https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf



Il y trois façon de travailler avec css :

- inline css
- internal css
- external css

  
inline css
----------
  
Pour le inline dans la balise on écrira l'attribut style=""  

.. image:: /IT/figures/css/Capture1.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture2.PNG
       :width: 350
       :align: center

Ajoutons un autre attribut qui est font-size, ne pas oublier de
séparer les attributs par un point virgule.

.. image:: /IT/figures/css/Capture3.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture4.PNG
       :width: 350
       :align: center

Le désavantage de travailler en inline est que pour chaque élément
nous devrons créer un style. Si par exemple nous aurions 500 x h1
alors pour tout changer cela risque de prendre longtemps. Donc le
inline styling est quelque chose de très basique.


Internal css
------------

Pour le internal css, on va mettre entre les tags heads un tag style
est décrire le style de tous nos éléments par exemple si l'on veut
pour l'élément h1 une couleur blue et un font-size de 3rem et un autre
style pour h2 on écrira la chose de la manière suivante: 

.. image:: /IT/figures/css/Capture5.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture6.PNG
       :width: 350
       :align: center

avec cette méthode il sera facile de modifier la couleur de tous les
h1 en entrant simplement la couleur désirée à un seul endroit.	       
Ceci va marcher uniquement pour la page où est déclaré
style. Admettons qu'il y a 10 pages html. Il faudrait alors dans
chaque page insérer style. Au moindre changement de style, il faudra
passer au travers de tous les fichiers pour modifié le style donc
beaucoup de temps d'édition. Une autre solution consistera a faire un
fichier avec une extension .css qui engloberait tous les styles pour
toutes les pages. En en vient alors à external css.

External css
------------

Pour ce faire il faut créer un fichier dans le projet nommé xxx.css
xxx n'est pas bien important du moment où il y l'extension .css. La
convention toutefois est de préciser le nom à style donc un style.css

.. image:: /IT/figures/css/Capture7.PNG
       :width: 350
       :align: center

Pour dire à nos fichiers html d'utiliser ce fichier css, on indiquera
dans les fichiers entre les tags head,	       

.. image:: /IT/figures/css/Capture8.PNG
       :width: 350
       :align: center

Remarque: En général, le fichier styles.css doit ce mettre dans un
répertoire nommé css. Nous devons donc modifié le path (ou chemin) de
notre fichier.

.. image:: /IT/figures/css/Capture9.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture10.PNG
       :width: 350
       :align: center	       

Priorités entre external/internal/inline css	       
--------------------------------------------

L'inline vient en première priorité, ensuite internal et l'external
vient en dernière priorité.


Commentaires
------------

Se qui vient entre ``/* et */`` est considéré comme un commentaire.

Noms des éléments dans le css
-----------------------------

- selector c'est par exemple h1, h3
- property c'est par exemple color, font-size
- value c'est par exemple orange, 4rem

Exemple de fichier styles.css
-----------------------------

Créons d'abord un fichier index.html avec h1, h2, et p sur lequel nous
allons appliqué différent style avec le fichier styles.css

.. image:: /IT/figures/css/Capture11.PNG
       :width: 350
       :align: center	       	       

Le fichier styles.css

.. image:: /IT/figures/css/Capture12.PNG
       :width: 350
       :align: center

Le résultat	       
	       
.. image:: /IT/figures/css/Capture13.PNG
       :width: 350
       :align: center

Comment faire si l'on veut que tout le texte soit en bleu?

.. image:: /IT/figures/css/Capture14.PNG
       :width: 350
       :align: center	       


Grouping Selectors
------------------

Comment dire que tout soit en rouge sauf h1 et h2 en bleu?

on utilisera le grouping selectors

.. image:: /IT/figures/css/Capture15.PNG
       :width: 350
       :align: center	       

Remarquer que les différents selectors sont séparés d'une virgule.


ID selectors
------------

Permet d'appliqé différents style sur le même selector


.. image:: /IT/figures/css/Capture16.PNG
       :width: 350
       :align: center	       

Exemple

Comment peut-on faire si l'on veut appliqué des styles différents à h1
Title heading et à h1 Footer Heading?

On utilisera l'attribut id dans le fichier html à l'intérieur du tag et
un dièse avec le nom de l'id dans le fichier styles.css

Fichier index.html

.. image:: /IT/figures/css/Capture17.PNG
       :width: 350
       :align: center	       

Fichier styles.css

.. image:: /IT/figures/css/Capture18.PNG
       :width: 350
       :align: center

Résultat

.. image:: /IT/figures/css/Capture19.PNG
       :width: 350
       :align: center	       	       

	       
Class selectors
---------------

Exemple:

.. image:: /IT/figures/css/Capture20.PNG
       :width: 350
       :align: center	       	       

.. image:: /IT/figures/css/Capture21.PNG
       :width: 350
       :align: center	       	       	       

.. image:: /IT/figures/css/Capture22.PNG
       :width: 350
       :align: center	       	       	       

Nous aurions pu utiliser id selector, mais nous aurions du faire un id 
différents pour chaque h3 différents. L'id doit être unique.

Combinaison entre id et class selector
--------------------------------------

.. image:: /IT/figures/css/Capture23.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture24.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture25.PNG
       :width: 350
       :align: center

Remarquez quand on on écrit class="green lowercase" c'est en fait deux
class différentes séparée par un espace.

div span
--------

Prenons un exemple un titre suivi d'un paragraphe, et un deuxième
titre suivi d'un deuxième paragraph. A l'intérieur du deuxième
paragraph mettons "hey i'm uppercase" à deux endroit différent. 

.. image:: /IT/figures/css/Capture26.PNG
       :width: 350
       :align: center

Maintenant nous voudrions avoir le premier titre et le premier
paragraphe en rouge. Le second titre et le second paragraphe en bleu. 

Pour ce faire nous ne pouvons sélectionner h3 ni p car nous aurions
les deux de la même couleur. Bien sûr nous pourrions utiliser id, mais
il existe une meilleures solution. L'utilisation de div et de span
pour grouper.

On va donc faire un premier groupe ou bloc avec div en le mettant
avant le premier h3 et le deuxième tag du div à la fin du premier
paragraphe. 

.. image:: /IT/figures/css/Capture27.PNG
       :width: 350
       :align: center	       

En mettant ce div rien ne change à l'affichage. Nous allons faire de
même pour notre texte que l'on veut afficher en uppercase, mais cette
fois nous allons utiliser span pour grouper notre texte.

.. image:: /IT/figures/css/Capture28.PNG
       :width: 350
       :align: center	       

Dans notre css mettons un selector div et un span

.. image:: /IT/figures/css/Capture29.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture30.PNG
       :width: 350
       :align: center

Donc le div est utilisé pour créer un bloc et span est utilisé pour du
inline. Un div créera un espace après lui, mais pas span.

Pour mettre une autre couleur à notre deuxième titre et deuxième
paragraphe, nous allons utilisé nos class dans les div.

Supprimer dans le styles.css le selector div. et mettons les class
appropriées dans les div du fichier index.html

.. image:: /IT/figures/css/Capture31.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture32.PNG
       :width: 350
       :align: center	       	       

Nous pouvons aussi utiliser une class pour span. Par exemple, si nous
voulons mettre une class red à notre premier span	       

.. image:: /IT/figures/css/Capture33.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture34.PNG
       :width: 350
       :align: center

Inheritance
-----------

Tous les éléments enfants hérite du style des style appliqué aux
parents. Prenons un exemple de deux paragraphes.

.. image:: /IT/figures/css/Capture35.PNG
       :width: 350
       :align: center

Mettons un selector body avec color à red.

.. image:: /IT/figures/css/Capture36.PNG
       :width: 350
       :align: center
	       
Les deux paragraphes seront de couleur rouge. Car les paragraphes sont
à l'intérieur de body et sont donc enfant de body. Body est le parent
de paragraphe. Dans ce cas on dira que p à hérité des styles de body. 

Maintenant mettant les deux paragraphes à l'intérieur de div

.. image:: /IT/figures/css/Capture37.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture38.PNG
       :width: 350
       :align: center	       
	  
Maintenant les deux paragraphes sont blue. Pourquoi ceci est comme
cela car div est l'enfant de body. C'est parce que div reçu un style
spécifique, le style de body ne compte plus. Les deux paragraphes ont
hérité du style de div.

Si l'on ajoute un h2 dans le div et un selector h2 dans le styles.css,
alors h2 les styles appliqués sur h2 sera prioritaire. Dans ce cas h2,
aura une couleur verte qui prime sur le rouge de body, mais héritera
quand même le uppercase de body.

.. image:: /IT/figures/css/Capture39.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture40.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture41.PNG
       :width: 350
       :align: center	       

Il y a quelques proprety de parent qui ne vont pas être hérités par
les enfants. Dans l'exemple suivant, div possède un proprety border on
voit que cette property n'est appliquée qu'au div.

.. image:: /IT/figures/css/Capture42.PNG
       :width: 350
       :align: center

Last Rule and Specificity Universal Selector
--------------------------------------------

Il arrive lorsque le fichier styles.css devienne très grand et sans
faire exprès, nous déclarons un selector plusieurs fois. Le dernier
déclaré dans le fichier sera pris en considération.

Admettons maintenant que nous avons pour le div une couleur verte
déclacrée après avoir déclaré h2. Bien que div soit déclaré après la
couleur de notre h2 reste verte. Il y a donc un spécificité dans les
sectors qui prennent les propriétés avant les selectors placé après.

Pour plus d'information sur ce sujet, on peut trouver dans google en
tapant "specificity measurement css". Ou sur 3schools.com

.. image:: /IT/figures/css/Capture43.PNG
       :width: 350
       :align: center

Il existe des selectors universels comme par exemple ``*`` qui
sélectionnera tous les selectors, mais ne sera pas prioritaire sur
certain selector positionné en fin de liste.  	       

color properties / color background-color
-----------------------------------------

- color property est responsable de la couleur du texte
- background-color est responsable de la couleur du fond de texte

Exemple :

.. image:: /IT/figures/css/Capture44.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture45.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture46.PNG
       :width: 350
       :align: center	       

comme on peut le constater, l'utilisation de backround-color et
background produise le même résultat.

L'utilisation la plus commune est d'utiliser les couleurs par leur
nom. Visual Studio propose directement les noms existants des couleurs.
Il y 140 nom de couleurs.

RGB
^^^

Il y a un autre moyen d'indiquer la couleur qui l'utilisation de rgb
qui signifie red green blue, chaque couleur va de 0-255 0 étant le noir

.. image:: /IT/figures/css/Capture47.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture48.PNG
       :width: 350
       :align: center	       

Une valeur 255 pour r représente la couleur pour rouge, 255 pour le g
représente la couleur verte, 255 pour le b représente la couleur bleu. 	       
rgba
^^^^

La lettre a est pour opacité / transparence. (de 0 à 1) 

.. image:: /IT/figures/css/Capture49.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture50.PNG
       :width: 350
       :align: center	       

On voit que plus la valeur de a tend vers 0 est plus le fond devient
transparent.

hex value
^^^^^^^^^

#RRGGBB
 
Au lieu d'avoir des valeurs variant de 0 à 255 on aura des valeurs
de 0 à F (hexadecimal) après 9 vient A 

Visual Studio permet de se déplacer dans la zone pour choisir notre
couleur et l'opacité avec le premier ascenseur à gauche. Et de
convertire entre les différents code couleurs (rgb, hex, hsl)

.. image:: /IT/figures/css/Capture51.PNG
       :width: 350
       :align: center

Choisir sa palette de couleur
-----------------------------

Il y a un site https://coolors.co il faut appuyer sur space pour
changer de couleur et sur le cadenas pour choisir la couleur.


font-size, width, height, pixels
--------------------------------

- font-size est pour ajuster la taille du texte
- width et height contrôle respectivement la largeur et la hauteur
  d'un élément (h1, ...)
- pixel est une unité absolue comme le plus petit point d'un écran
  pourquoi absolue? c'est parce que si on modifie la fenêtre du
  browser la mesure sera toujours identique.

.. image:: /IT/figures/css/Capture52.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture53.PNG
       :width: 350
       :align: center

Quand est-il avec height?
	       
.. image:: /IT/figures/css/Capture54.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture55.PNG
       :width: 350
       :align: center	       	       

Percent	value / relatives
^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture56.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture57.PNG
       :width: 350
       :align: center	       
	       
On voit que la zone rouge est 50% plus petite en largeur et en hauteur
par rapport à la partie bleu qui est l'élément parent du div en rouge..

em relative
^^^^^^^^^^^

Par défaut, la taille du texte dans une fenêtre d'un browser est de
16px.

.. image:: /IT/figures/css/Capture58.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture59.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture60.PNG
       :width: 350
       :align: center	       	       

On voit que la taille des deux textes sont identiques car une fait
32px et comme 1em fait par défaut 16px donc 2x16=32px

Changeons maintenant la taille dans le browser à très grand, donc on
modifie la taille par défaut de 16px à plus grand. 1em sera plus grand
que 16px et apparaîtra plus grand que le texte absolute


.. image:: /IT/figures/css/Capture61.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture62.PNG
       :width: 350
       :align: center	       	       

Créons des div qui sont des parents à nos h3

.. image:: /IT/figures/css/Capture63.PNG
       :width: 350
       :align: center	       	       

.. image:: /IT/figures/css/Capture64.PNG
       :width: 350
       :align: center
	  
et mettons div selector un font-size de10px

.. image:: /IT/figures/css/Capture65.PNG
       :width: 350
       :align: center

On voit que relative est devenu plus petit car font-size de parent est
devenu plus petit que 16px. Le texte absolute n'a pas changer.

rem
^^^

Contrairement à em, rem ne dépend pas du parent, mais de root. Le root
est le tag html.

Dans l'exemple précédent si l'on met à la place de em, rem,

.. image:: /IT/figures/css/Capture66.PNG
       :width: 350
       :align: center	       	       

la taille n'héritera pas du parent qui est 16px dans ce cas là (defaut
du browser). Par contre, si on le mais dans le root,

.. image:: /IT/figures/css/Capture66.PNG
       :width: 350
       :align: center

la taille du texte relative changera.

.. image:: /IT/figures/css/Capture67.PNG
       :width: 350
       :align: center	       	       

vh - height / vw - width (percent of the screen)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Ce sont des unités relatives par rapport à la taille de l'écran
(fenêtre). 

.. image:: /IT/figures/css/Capture68.PNG
       :width: 350
       :align: center	       	       

on mettra vw pour width et vh por height.

.. image:: /IT/figures/css/Capture69.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture70.PNG
       :width: 350
       :align: center

On voit que le carré rouge fait exactement la moitié de la fenête que
se soit en hauteur ou en largeur. (ne pas prendre en compte la petite
marge)	       
Ces valeurs sont souvent utiliser pour les banners. (entête)

Default browser styles and google devTools
------------------------------------------

Pour ouvrir le devTool, faire un clique droite sur le browser et
choisir inspecter. Il est vrai que c'est assez intimidant au
début. Pour l'instant nous allons uniquement utiliser le menu
Element.
On retrouve tous les éléments que notre page possède (head, metatag,
body, h1...)

Que se passe-t-il lorsque l'on clique sur h1?

.. image:: /IT/figures/css/Capture71.PNG
       :width: 350
       :align: center

Nous retrouvons notre css syntaxe. (voir element.style {}). Mais nous
voyons des autres informations que l'on a pas entrée. Comme par
exemple dispay: block;  font-size: 2em; En fait ce sont les styles que
chaque browser applique par défaut.


.. image:: /IT/figures/css/Capture72.PNG
       :width: 350
       :align: center

On remarque user agent stylesheet, cet inscription signal que ce sont
les styles du browser appliqués par défaut. On peut réécrire ces
valeurs comme par exemple la modification des marges.

Rajoutons un h2 est mettons quelques styles

.. image:: /IT/figures/css/Capture73.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture74.PNG
       :width: 350
       :align: center	       	       	       

.. image:: /IT/figures/css/Capture75.PNG
       :width: 350
       :align: center	       

Le devTool nous indique notre fichier styles.css et en dessous
qu'elle propriété ne sont plus celle par défaut (biffé) Ce que l'on
peut faire aussi c'est modifié directement dans le devTool des
valeurs. Le fichier d'origine ne sera pas modifié.



Calc
----

Permet de faire des opérations mathématiques comme addition,
soustraction, multiplication, division.


.. image:: /IT/figures/css/Capture76.PNG
       :width: 350
       :align: center	       	       	       

.. image:: /IT/figures/css/Capture77.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture78.PNG
       :width: 350
       :align: center

	       
On remarque que la page est plus grande que ce que
l'écran peut afficher contre le bas. Le dépassement est égale à 100px
(la hauteur de navbar) Pour corriger cela on corrigera la hauteur en
utilisant calc 


.. image:: /IT/figures/css/Capture79.PNG
       :width: 350
       :align: center

	       
Cette méthode est souvent utilisée pour la page d'accueil quand il y a 
une barre de navigation est le banner en dessous. Attention de bien
mettre un espace avan et après l'opération (ici le - )

font-size font-family
---------------------

Permet de changer la police d'écriture pour chaque élément que l'on
veut. 

.. image:: /IT/figures/css/Capture80.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture81.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture82.PNG
       :width: 350
       :align: center

	       
font-stack generic-family
^^^^^^^^^^^^^^^^^^^^^^^^^
Il se peut que les polices que l'on a choisie ne soient supportées par
le browser. Visual Code nous propose une série de font qui se
ressemble séparée d'une virgule. 

.. image:: /IT/figures/css/Capture83.PNG
       :width: 350
       :align: center

Google Fonts
^^^^^^^^^^^^

Google propose aussi des fonts que l'on peut incorporer.
	       
font-weight
^^^^^^^^^^^

Si l'on veut mettre en gras.

font-style
^^^^^^^^^^

Pour mettre en italic, oblique, normal.


text-align
^^^^^^^^^^

.. image:: /IT/figures/css/Capture84.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture85.PNG
       :width: 350
       :align: center
	       
On peut utiliser left qui est par défaut à gauche et right pour
droite. 
	       
text-indent
^^^^^^^^^^^

Sert à indenter la première ligne d'un paragraphe.

line-height letter-spacing word-spacing text-transform text-decoration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture88.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture89.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture90.PNG
       :width: 350
       :align: center	       

CSS Box Model
-------------

.. image:: /IT/figures/css/Capture91.PNG
       :width: 350
       :align: center	       

Padding
^^^^^^^

.. image:: /IT/figures/css/Capture92.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture93.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture94.PNG
       :width: 350
       :align: center	       	       

Les paddings appliqués sur le p, sont des raccourcis.

Margin
^^^^^^

Est la marge entre le bord de l'écran et l'élément.

.. Warning::

   Les browsers applique par défaut une marges. C'est souvent source
   de confusion.

Tout comme le padding, on peut utiliser les raccourcis.

.. image:: /IT/figures/css/Capture95.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture96.PNG
       :width: 350
       :align: center	       	       	       


Comment faire pour coller ici le carré rouge au carré bleu?

.. image:: /IT/figures/css/Capture97.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture98.PNG
       :width: 350
       :align: center	       	       	       

Si l'on veut mettre tous les marges à 0 on écrira :

::
   
   margin:0;

On retrouvera les mêmes raccourcis que padding. C'est-à-dire margin:
20px (1 valeur) appliquera 20px sur les quatre côtés. Avec 2 valeurs
alors la première valeur représentera le top et le bottom la deuxième
et pour la marge de droite et de gauche. On peut spécifier avec 4
valeurs qui sont respectivement pour le top, droite, bas, et gauche.

Border
^^^^^^

Pour encadrer les éléments.

.. image:: /IT/figures/css/Capture99.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture100.PNG
       :width: 350
       :align: center	       	       	       

Il y a aussi des raccourcis pour borer. L'ordre des valeurs est pas
importante.

.. image:: /IT/figures/css/Capture101.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture102.PNG
       :width: 350
       :align: center	       	       	       

On peut aussi choisir qu'un seul coté avec par exemple, border-bottom
pour le coté du bas.

Arrondir et margin négatif
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Pour un placement qui doivent se chevaucher, utiliser un margin
négatif. Les coins peuvent aussi être arrondi grâce à la commande
border-radius.

.. image:: /IT/figures/css/Capture103.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture104.PNG
       :width: 350
       :align: center	       	       	       

	       
outline
^^^^^^^

est utilisé pour déplacer le cadre vers l'extérieur ou vers l'intérieur
à l'aide de outline-offset suivant qu'il est positif ou négatif.

.. image:: /IT/figures/css/Capture105.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture106.PNG
       :width: 350
       :align: center	       	       	       

Display
-------

- Block crée toujours une ligne d'espacement
- Inline ne crée pas de ligne d'espacement et sa taille s'ajuste au
  contenu.

On remarque que block s'étend sur toute la largeur de la page.  

.. image:: /IT/figures/css/Capture107.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture109.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture108.PNG
       :width: 350
       :align: center	       	       	       

Certains éléments possèdent leur propre display property.

Avec la propriété display on peut changer le display qui est réglé par
défaut.

.. image:: /IT/figures/css/Capture110.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture111.PNG
       :width: 350
       :align: center

	       
Horizontal Centering
--------------------

.. image:: /IT/figures/css/Capture112.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture113.PNG
       :width: 350
       :align: center

Pour aligner les blocks en bleu, nous devons écrire cela comme ceci

L'utilisation de margin est nécessaire ici 25px est la marges du haut
et du bas tandis ce que auto est la marge automatique qui centre le
block.


.. image:: /IT/figures/css/Capture114.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture115.PNG
       :width: 350
       :align: center

Top Bottom Margin
-----------------

- Block: Top Bottom Margin Respected
- Inline: Top Bottom Margin Not Respected
  

Mobile Navbar
-------------

Nous voyons que pour le div c'est un block donc les marges du haut et
du bas peuvent être modifiées.

.. image:: /IT/figures/css/Capture118.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture116.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture117.PNG
       :width: 350
       :align: center

Enlevons ce bloc et créons notre Navbar

.. image:: /IT/figures/css/Capture119.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture120.PNG
       :width: 350
       :align: center

Faisons notre fichier styles.css

Enlevons d'abord toutes les marges

.. image:: /IT/figures/css/Capture121.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture122.PNG
       :width: 350
       :align: center


Mettons un font-family sur le body

List-style-type:property
^^^^^^^^^^^^^^^^^^^^^^^^

pour sélectionné un enfant on écrira ``ul li{...}``
et pour changer le point de list on utilsera list-style-type

.. image:: /IT/figures/css/Capture123.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture124.PNG
       :width: 350
       :align: center

Pour notre Navbar, nous ne voulons pas de point, on les supprime avec
none.

.. image:: /IT/figures/css/Capture125.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture126.PNG
       :width: 350
       :align: center

	       
descendant selectors
^^^^^^^^^^^^^^^^^^^^

ul li a est la sélection la plus précise qui va jusqu'à
l'élément a. ici li ne sera pas sélectionnée.

.. image:: /IT/figures/css/Capture127.PNG
       :width: 350
       :align: center	       

#. Enlevons la décoration du texte (le souligné)
#. Transformons le texte en capitalisant
#. Mettant de l'espace entre les lettres
#. Background à 222
#. color à f15025

   .. image:: /IT/figures/css/Capture128.PNG
       :width: 350
       :align: center	          

   .. image:: /IT/figures/css/Capture129.PNG
       :width: 350
       :align: center
	       
#. espaçons un peu les lignes
  
    .. image:: /IT/figures/css/Capture130.PNG
       :width: 350
       :align: center

   voilà le résultat, le padding est bien mais les lignes restent
   serrées.
	       
   .. image:: /IT/figures/css/Capture131.PNG
       :width: 350
       :align: center

#. essayons de mettre du marging

   .. image:: /IT/figures/css/Capture132.PNG
       :width: 350
       :align: center

   .. image:: /IT/figures/css/Capture133.PNG
       :width: 350
       :align: center

   Le menu s'est déplacé un peu à droite mais les marges haut et bas
   n'ont pas été appliquées. On se rappelle les marges haut et bas ne
   sont pas appliquée aux éléments inlines comme ici un li un élément
   d'une liste.

#. ok, enlevons d'abord padding et margin et mettons un display: block   
   
   .. image:: /IT/figures/css/Capture134.PNG
       :width: 350
       :align: center

   .. image:: /IT/figures/css/Capture135.PNG
       :width: 350
       :align: center

   On voit que c'est devenu un block car il occupe toute la largeur de
   la page.

#. Rajoutons padding

   .. image:: /IT/figures/css/Capture136.PNG
       :width: 350
       :align: center

   .. image:: /IT/figures/css/Capture137.PNG
       :width: 350
       :align: center

#. Si nous rajoutons margin la marge est crée

   .. image:: /IT/figures/css/Capture138.PNG
       :width: 350
       :align: center

   .. image:: /IT/figures/css/Capture139.PNG
       :width: 350
       :align: center   
   
#. Enlevons margin car cela était juste pour montrer que le top et
   bottom margin était appliqué

Inline-Block
------------

.. image:: /IT/figures/css/Capture140.PNG
       :width: 350
       :align: center   

.. image:: /IT/figures/css/Capture141.PNG
       :width: 350
       :align: center	       

faisons le fichier css

.. image:: /IT/figures/css/Capture142.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture143.PNG
       :width: 350
       :align: center

on voit que margin n'a fonctionner que pour la droite et la gauche le
top et le bottom n'a pas bougé. C'est parce qu'on est en inline.
On peut essayer de mettre le display à block et voir si on peut régler
le top et bottom.

.. image:: /IT/figures/css/Capture144.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture145.PNG
       :width: 350
       :align: center	       

Mais cela n'arrange pas les choses. On n'aimerait avoir tout sur une
ligne et pouvoir réglé margin top et bottom.

En utilisant inline-block margin top et bottom fonctionne.

.. image:: /IT/figures/css/Capture146.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture147.PNG
       :width: 350
       :align: center	       

box-sizing
----------

.. image:: /IT/figures/css/Capture148.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture154.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture149.PNG
       :width: 350
       :align: center

Ajoutons un padding à la box-1

.. image:: /IT/figures/css/Capture150.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture151.PNG
       :width: 350
       :align: center

On remarque que la box-1 a c'est agrandie de 20px de chaque coté.
Mettons aussin un padding à box-3

.. image:: /IT/figures/css/Capture152.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture153.PNG
       :width: 350
       :align: center	       

Ouvrons le devTool de chrome et inspectons box-1, on voit que la
dimensions est passée à 240px par 240px.

.. image:: /IT/figures/css/Capture155.PNG
       :width: 350
       :align: center

Le padding est souvent source de confusion car il augmente la taille
des éléments.

C'est là qu'intervient le box-sizing: border-box

.. image:: /IT/figures/css/Capture156.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture157.PNG
       :width: 350
       :align: center

Si l'on inspecte à nouveau le devTool

.. image:: /IT/figures/css/Capture158.PNG
       :width: 350
       :align: center

on voit que l'intérieur est passé à 160x160px donc il n'a pas agrandi
le div, mais à déplacé le texte de 20px de chaque coté vers
l'intérieur du div.


display:none opacity:0 visibility:hidden
----------------------------------------

.. image:: /IT/figures/css/Capture159.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture160.PNG
       :width: 350
       :align: center	       

display:0
^^^^^^^^^

.. image:: /IT/figures/css/Capture161.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture162.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture163.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture164.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture165.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture166.PNG
       :width: 350
       :align: center	       

En ouvrant le devTool, on constate que display à none est complètement
caché, par contre opacity:0 et visibility:hidden l'élément reste
présent dans le devTool.

Background images
-----------------

Pour ce faire piquons sur pexels trois images que l'on va renommer par 
big.jpg small.jpg et folder-img.jpg. Redimensionnons big.jpg et
folder-img.jpg à 400px de haut, small.jpg à 100x100px avec Gimp.

Disons que le div n'a pas de limite de largeur, mais une hauteur
limitée à 400px. et mettons une couleur rouge pour le texte.

.. image:: /IT/figures/css/Capture167.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture168.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture169.PNG
       :width: 350
       :align: center	       

Pour le placement de l'image nous allons utiliser background: mais
cette fois ci pas comme nous avons l'habitude de mettre color, à la
place nous allons mettre un url().

path image
^^^^^^^^^^

pour le path de l'image, uniquement cette notation fonctionne pour moi
pour voir directement dans le chrome en ouvrant index.html (sans live
server) :
``url("../big.jpg")``. Si le l'image est dans un dossier nommé **img**
``url("../img/big.jpg")``  

.. image:: /IT/figures/css/Capture170.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture171.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture172.PNG
       :width: 350
       :align: center

On voit que lorsque l'on agrandi la fenêtre, si elle devient plus
large que l'image alors le browser dupliquera l'image à droite.

.. image:: /IT/figures/css/Capture173.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture174.PNG
       :width: 350
       :align: center

Le browser par défaut a remplir tout le div par les images en les
dupliquant non seulement en largeur mais aussi en hauteur.

.. image:: /IT/figures/css/Capture175.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture176.PNG
       :width: 350
       :align: center	       


	  
Background-repeat
^^^^^^^^^^^^^^^^^


``backround-repeat: repeat;`` rien ne change car c'est la valeur par
  défaut.
  
``backround-repeat: no-repeat;``

  .. image:: /IT/figures/css/Capture177.PNG
       :width: 350
       :align: center

  .. image:: /IT/figures/css/Capture178.PNG
       :width: 350
       :align: center	       

  On voit qu'une image car nous avons réglé à no-repeat.

``background-repeat: repeat-x`` ou ``repeat-y``

.. image:: /IT/figures/css/Capture179.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture180.PNG
       :width: 350
       :align: center	         	       
	       
Pour répéter l'image en largeur seulement.  Mettre ``repeat-y`` pour
répéter l'image en hauteur. 
   
``background-repeat: space``

  .. image:: /IT/figures/css/Capture181.PNG
       :width: 350
       :align: center

  .. image:: /IT/figures/css/Capture182.PNG
       :width: 350
       :align: center	           

On distingue de l'espace entre les images répétées.

``background-repeat: round`` permet affichera toujours une image dans
toute sa largeur. Attention, elle sera déformée.

.. image:: /IT/figures/css/Capture183.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture184.PNG
       :width: 350
       :align: center	         	       	       


Pour ce qui est le plus couramment utilisé c'est le
``background-repeat: no-repeat``

Background-size: cover
^^^^^^^^^^^^^^^^^^^^^^^

Etend l'image sur toute la largeur du div quelque que soit la taille
de l'image. L'image ne sera pas déformée. Il faudra faire attention à
bien dimensionné l'image avant pour que l'image ne soit pas trop
pixelisée en étendant le div.

.. image:: /IT/figures/css/Capture185.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture186.PNG
       :width: 350
       :align: center	         	       	       

	       
Background-size: contain
^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture187.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture188.PNG
       :width: 350
       :align: center	         	       	       

Ne modifie pas le ratio de l'image.

.. note::

   De tous ces background, celui qui sera le plus utilisé sera le
   cover pour faire des nices banners.

   
Background-position
-------------------

.. image:: /IT/figures/css/Capture189.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture190.PNG
       :width: 350
       :align: center	         	       	       

La petite image est centrée.

.. note::
   
  Ecrire ``right bottom`` est tout à fait possible.
  
	       
.. image:: /IT/figures/css/Capture191.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture192.PNG
       :width: 350
       :align: center	         	       	       	       

Utile si l'on veut voir plûtot le bas, le haut le centre, ou droite ou
gauche de l'image quand on agrandi l'image. Ici on se penche plutôt
pour le bas.

Pour un positionnement encore plus précis on écrire en %.

.. image:: /IT/figures/css/Capture193.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture194.PNG
       :width: 350
       :align: center	         	       	       	       

Le premier % représente l'horizontal, et le deuxième, la verticale.


Background-attachment
---------------------

Ajustons d'abord le div:

.. image:: /IT/figures/css/Capture195.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture196.PNG
       :width: 350
       :align: center	         	       	       	       

La hauteur de l'image est égale à la fenêtre.

et mettons le texte au centre et enlevons le margin par défaut avec
``*{}`` 

.. image:: /IT/figures/css/Capture197.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture198.PNG
       :width: 350
       :align: center

Apportons encore quelques modifications

.. image:: /IT/figures/css/Capture199.PNG
       :width: 350
       :align: center

Cette configuration peut-être utilisée pour les images d'arrière-plan
d'un site internet.

Mettons maintenant un background-attachement

.. image:: /IT/figures/css/Capture200.PNG
       :width: 350
       :align: center

Qui a fixé l'image, pendant que l'on scroll vers le bas, le texte sur le
dessus de l'image bouge.


Gradients
---------

.. image:: /IT/figures/css/Capture201.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture202.PNG
       :width: 500
       :align: center

.. image:: /IT/figures/css/Capture203.PNG
       :width: 350
       :align: center

Sur une image
^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture204.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture205.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture206.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture207.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture208.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture209.PNG
       :width: 350
       :align: center	       

Pour l'instant, on remarque qu'il n'y a pas de dégradé, changeons le 
paramètre a = 0.1

.. image:: /IT/figures/css/Capture210.PNG
       :width: 350
       :align: center

On distingue maintenant le gradué :

.. image:: /IT/figures/css/Capture211.PNG
       :width: 350
       :align: center

Associons une image. Attention de ne pas oublier la virgule.

.. image:: /IT/figures/css/Capture212.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture213.PNG
       :width: 350
       :align: center

On voit que l'image s'est assombrie, on peut très bien prendre une
autre couleur aussi.

Utilisation de raccourci pour background
''''''''''''''''''''''''''''''''''''''''

.. image:: /IT/figures/css/Capture214.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture215.PNG
       :width: 350
       :align: center

.. note::

   Attention, no-repeat et fixed ne peuvent être permuter.


Cela évite de tapez background... sur plusieurs lignes. L'image à la
même propriété que la première sauf qu'il y a plus de dégradé. (idéal
pour lire du texte sur l'image)


Linear gradient generator
'''''''''''''''''''''''''

Il existe un site https://www.colorzilla.com/gradient-editor/ qui
permet de générer les dégradés. Ensuite il faut copier le code css.

.. image:: /IT/figures/css/Capture216.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture217.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture218.PNG
       :width: 350
       :align: center	       

Float property
--------------

.. image:: /IT/figures/css/Capture219.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture220.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture221.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture222.PNG
       :width: 350
       :align: center	       	       

On voit que le paragraphe est mis en-dessous de l'image car c'est un
last block element.


Mettons maintenant un border et un padding

.. image:: /IT/figures/css/Capture223.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture224.PNG
       :width: 350
       :align: center	       	       

Que se passe-t-il maintenant si l'on utilise la propriété float?

On est tenté de dire que l'image est déjà floated vers la gauche. Mais
par défaut la propriété est à none. Mettons float à left.

.. image:: /IT/figures/css/Capture225.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture226.PNG
       :width: 350
       :align: center

Si l'on met un left alors l'élément suivant va ête aussi à left, comme
dans ce cas. Si l'on veut mettre l'élément suivant comme normal, il
faudra utiliser la propriété clear: left.

.. image:: /IT/figures/css/Capture227.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture228.PNG
       :width: 350
       :align: center	       	       

Faisons la même chose avec right:

.. image:: /IT/figures/css/Capture229.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture230.PNG
       :width: 350
       :align: center	       	       

Rajoutons une deuxième image

.. image:: /IT/figures/css/Capture231.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture232.PNG
       :width: 350
       :align: center	       	       

En utilisant clear: both, le paragraphe revient à la ligne
normal. C'est comme si on lui aurait enlevé la propriété left ou
right.

.. image:: /IT/figures/css/Capture233.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture234.PNG
       :width: 350
       :align: center

L'image sort du div, en utilisant la commande overflow: hidden, on
coupe la partie qui dépasse.	       
	       
.. image:: /IT/figures/css/Capture235.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture236.PNG
       :width: 350
       :align: center

Enlevons une image et mettons l'image à droite du paragraphe.

.. image:: /IT/figures/css/Capture237.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture238.PNG
       :width: 350
       :align: center

On peut facilement mettre un peu de marge

.. image:: /IT/figures/css/Capture239.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture240.PNG
       :width: 350
       :align: center	       

	       
Un autre exemple avec float
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture241.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture242.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture243.PNG
       :width: 350
       :align: center

Si l'on rajoute un h1

.. image:: /IT/figures/css/Capture244.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture245.PNG
       :width: 350
       :align: center	       

On croirait que tout va bien le h1 c'est bien mis sur une nouvelle
ligne.

Mais rajoutons un div

.. image:: /IT/figures/css/Capture246.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture247.PNG
       :width: 350
       :align: center	       

On voit que le hello world ne sait pas mis sur une nouvelle ligne.

Pour mettre le h1 comme il devrait s'afficher (sur une nouvelle ligne)
on fera appel à clear:both.

.. image:: /IT/figures/css/Capture248.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture249.PNG
       :width: 350
       :align: center

c'est une bonne habitude de mettre ce clear:both pour des raisons de
déboggage qui pourraient s'avérer pénible.

position: relative
------------------

avec position: relative, 4 options permettent de déplacer l'élément
soient, top, bottom, left, right. Ils déplacent l'élément par rapport
au flux normal (position normale par défaut) 

.. image:: /IT/figures/css/Capture250.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture252.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture251.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture253.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture254.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture255.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture256.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture257.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture258.PNG
       :width: 350
       :align: center	  
	       
.. image:: /IT/figures/css/Capture259.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture260.PNG
       :width: 350
       :align: center	       

	       
position: absolute
------------------

C'est la rock-star du css.

.. image:: /IT/figures/css/Capture261.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture262.PNG
       :width: 350
       :align: center	       

Si l'élément d'avant est positionné avec relativ alors cet élément
sera la référence pour l'élément positionné avec absolute. Pour voir
mettons l'élément d'avant ici .two avec relative.

.. image:: /IT/figures/css/Capture263.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture264.PNG
       :width: 350
       :align: center	       

Enlevons-là pour voir

.. image:: /IT/figures/css/Capture265.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture266.PNG
       :width: 350
       :align: center

On voit que la référence est devenu le body.

Mettons la position du div à relative

.. image:: /IT/figures/css/Capture267.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture268.PNG
       :width: 350
       :align: center

Pour le mettre à la moitié du body, on enlève le relative de .div

.. image:: /IT/figures/css/Capture269.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture270.PNG
       :width: 350
       :align: center

position: fixed
---------------

Cet propriété sert à fixer un bouton par exemple pour qu'il soit fixe
lorsque l'on scroll en-bas de la page.

.. image:: /IT/figures/css/Capture271.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture272.PNG
       :width: 350
       :align: center

	       
Media Queries
-------------

Est utilisé pour appliquer différents styles suivant la grandeur de
l'écran. En général on commence par l'écran le plus petit vers le plus
grand.

.. image:: /IT/figures/css/Capture273.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture274.PNG
       :width: 350
       :align: center

Attention au un simple oubli d'un espace est la syntaxe est fausse.	       


min-width
^^^^^^^^^

.. image:: /IT/figures/css/Capture275.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture276.PNG
       :width: 450
       :align: center

la syntaxe min-width indique à partir de quelle grandeur le style doit
être appliqué.

On peut utiliser le devTool pour inspecter la grandeur de l'écran.
	       
.. image:: /IT/figures/css/Capture277.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture278.PNG
       :width: 350
       :align: center

Si nous n'écrasons pas dans @media un style déjà défini, comme par
exemple text-decoration: underline, ce style sera maintenu.  

Dans l'exemple suivant, on va mettre deux seuils pour avoir en fait
trois styles différents.

.. image:: /IT/figures/css/Capture279.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture280.PNG
       :width: 350
       :align: center

On observe que dès que la fenêtre dépasse 768px alors le style vert
est appliqué.

max-width
^^^^^^^^^

max-width indique que jusqu'à max-width le style est appliqué. Au-delà
un autre style est appliqué.

.. image:: /IT/figures/css/Capture281.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture282.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture283.PNG
       :width: 450
       :align: center	       

Ce que l'on doit faire attention c'est que l'on peut écraser
facilement les styles. Ici 768px écrase le 576px car il inclu ce
dernier. Donc le style rouge (576px) ne sera jamais utilisé. Par
contre si un style declaré dans 576px et ne figure pas dans 768px
alors celui-ci sera tout de même appliqué.

.. image:: /IT/figures/css/Capture284.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture285.PNG
       :width: 350
       :align: center	       	       

z-index
^^^^^^^

Avec z-index, on peut règler l'ordre de juxtaposition des images. 

Nous voulons comme ancêtre pour banner position: relative.

On distingue que les images sont superposées. Dans l'ordre dans
lequelle elle ont été déclarées.

.. image:: /IT/figures/css/Capture286.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture287.PNG
       :width: 350
       :align: center	       	       

	       
Par défaut, les images ont un z-index égale 0.	       

Si l'on met pour la première image un z-index égale à 0 l'image reste
comme elle était.

.. image:: /IT/figures/css/Capture288.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture289.PNG
       :width: 350
       :align: center	       	       

Mettons z-index à 1 et l'image passe devant les autres.

.. image:: /IT/figures/css/Capture290.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture291.PNG
       :width: 350
       :align: center

Passons des z-index au trois, afin que la troisième image passe en
arrière, ensuite la deuxième et la première en avant.

.. image:: /IT/figures/css/Capture292.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture293.PNG
       :width: 350
       :align: center

on peut très bien mette un z-index de -999 c'est la grandeur qui fait
la priorité.

z-index fonctionne seulement en absolute et en relative. Si l'on met
static alors z-index ne fonctionnera pas.

.. image:: /IT/figures/css/Capture294.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture295.PNG
       :width: 350
       :align: center

Dans ce cas tout fonctionne normalement. Si l'on met un z-index à 100,
alors rien ne se passe avec position static. (le .one devrait passer
tout en avant)

.. image:: /IT/figures/css/Capture296.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture297.PNG
       :width: 350
       :align: center	       	       

Pour que cela fonctionne il faut mettre à relative ou aboslute

.. image:: /IT/figures/css/Capture298.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture299.PNG
       :width: 350
       :align: center

	       
pseudo elements ::before ::after CONTENT
----------------------------------------

::before
^^^^^^^^

Pour l'exemple suivant nous allons créer un simple paragraphe.

.. image:: /IT/figures/css/Capture305.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture300.PNG
       :width: 350
       :align: center
       
.. image:: /IT/figures/css/Capture301.PNG
       :width: 350
       :align: center

On voit que le mot hello s'est collé devant le contenu de notre
paragraphe écrit en html.

On peut rajouter n'importe quelle propriété

.. image:: /IT/figures/css/Capture303.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture304.PNG
       :width: 350
       :align: center

Si l'on ouvre le devTool on peut voir que le ::before a été rajouter
dans le p	       
	       
.. image:: /IT/figures/css/Capture306.PNG
       :width: 350
       :align: center

::after
^^^^^^^
	       
Ceci est rajouter inline.

On peut changer en block

.. image:: /IT/figures/css/Capture307.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture308.PNG
       :width: 350
       :align: center	       

Donc nous avons nos sudo éléments avant et après le paragraphe.

content doit toujours être renseigné

.. image:: /IT/figures/css/Capture309.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture310.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture311.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture312.PNG
       :width: 350
       :align: center	       	       

on doit donc quand même spécifié content:"" quand il n'y pas de
texte.

Cas pratique avec ::before et ::after
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Nous allons rajouter une image et ce qui est important c'est que img
soit dans un div.

.. image:: /IT/figures/css/Capture313.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture314.PNG
       :width: 350
       :align: center

Changeons la largeur de l'image

.. image:: /IT/figures/css/Capture315.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture316.PNG
       :width: 350
       :align: center	       

ok, cela fonctionne, mais il y a une meilleure solution.

Nous allons modifier le div et l'image sera responsible à ce div.

.. image:: /IT/figures/css/Capture317.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture318.PNG
       :width: 350
       :align: center	       

On remarque que l'image ne s'intégre pas dans le div (cadre rouge)

Pour la faire entrer dans le cadre mettons width: 100%

.. image:: /IT/figures/css/Capture319.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture320.PNG
       :width: 350
       :align: center

Même en modifiant le div l'image sera toujours intégrée au div

.. image:: /IT/figures/css/Capture321.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture322.PNG
       :width: 350
       :align: center	       

On remarque toutefois un espace enter le bas de l'image et le cadre du
bas. On est tenté à mettre un height: 100% mais rien a bougé. Pour
parer à cet inconvénient, il faut mettre à img un display: block. Ceci
n'a rien à voir avec ::before ::after sudo elements, mais
l'association en div et img requiert img avec un display: block.

.. image:: /IT/figures/css/Capture323.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture324.PNG
       :width: 350
       :align: center	       

Maintenant mettant quelque chose avec ::before avant l'image.

.. image:: /IT/figures/css/Capture325.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture326.PNG
       :width: 350
       :align: center	       

On remarque que hello ne s'est pas mis avant l'image, ceci est dû au
fait que img représente déjà le contnent.

Donc essayons avec div, on met content à "" avec un border


.. image:: /IT/figures/css/Capture327.PNG
       :width: 350
       :align: center	       

.. image:: /IT/figures/css/Capture328.PNG
       :width: 350
       :align: center	       

On voit un petit rectangle gris, essayons maintenant de l'agrandir:

.. image:: /IT/figures/css/Capture329.PNG
       :width: 350
       :align: center	       

On voit qu'il a pas bougé.

Mais nous connaissons la propriété absolute.

.. image:: /IT/figures/css/Capture330.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture331.PNG
       :width: 350
       :align: center	       	       

On voit que le cadre n'est pas encore bon.

On se rappelle que absolut regarde pour quoi? Il regarde pour
l'ancestor ou il y a un relative. S'il ne trouve rien il prendrea le
body. C'est pourquoi le cadre est si grand. Donc on regarde pour
l'ancestor et dans ce cas c'est div et rajoute un positon relative.

.. image:: /IT/figures/css/Capture332.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture333.PNG
       :width: 350
       :align: center

On peut dire que ce n'est pas vraiment 100% car il réside de l'espace
(un tout petit peu). La raison à cela est dans le border-box. Mettons
alors box-sizing: border-box. et le résultat est bon.

.. image:: /IT/figures/css/Capture334.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture335.PNG
       :width: 350
       :align: center

Ce qui est cool c'est qu'on peut utilisé relatvie avec l'ancestor.
On peut utilisée des valeurs négatives. Ce qui va faire déplacer le
cadre.

.. image:: /IT/figures/css/Capture336.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture337.PNG
       :width: 350
       :align: center

Pour faire passer le cadre en arrière plan on utilisera z-index: -2 
Occupons nous de div::after, copions ce qu'il y a dans le before et
passons le entre div::before et l'image.

.. image:: /IT/figures/css/Capture338.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture339.PNG
       :width: 350
       :align: center

transition
^^^^^^^^^^

Voici un petit avant goût de ce que l'on peut faire avec hover et
transition

.. image:: /IT/figures/css/Capture340.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture341.PNG
       :width: 350
       :align: center

Dès que l'on le pointeur de la souris passe par-dessus l'image alors
after et before vont se décaller à 0;	       

Basic Selectors
---------------

.. image:: /IT/figures/css/Capture342.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture343.PNG
       :width: 350
       :align: center
	       
Mettons quelques style à #heading

.. image:: /IT/figures/css/Capture344.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture345.PNG
       :width: 350
       :align: center

	       
On voit qu'il y spécificité car #heading supplante le ``*``. On se
rappelle que lorsque l'on utilise id alors dans le css il faudra
mettre ``#``, pour class on mettra un point. Mettons maintenant à class du
style.


.. image:: /IT/figures/css/Capture346.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture347.PNG
       :width: 350
       :align: center

On va donc que grâce à la spécificité on peut régler les styles de
chaque élément spécifique.

Descendant and Child Combinators
--------------------------------

Children peuvent être Descendant, mais Descendant ne peut pas être
Child. Prenons un example pour clarifier.

Si l'on veut sélectionner uniquement les h1 qui sont dans un div on
écrira

Donc ici les deux h1 seront en rouge.

.. image:: /IT/figures/css/Capture348.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture349.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture350.PNG
       :width: 350
       :align: center	       

direct child
^^^^^^^^^^^^

On peut sélectionner le direct child par exemple div > h1 sera
sélectionner uniquement si h1 est directement sous div (qu'il n'y a
rien entre le div et le h1) C'est pourquoi uniqument le premier h1 est
sélectionner car l'autre h1 est sous li ul.

.. image:: /IT/figures/css/Capture351.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture352.PNG
       :width: 350
       :align: center

On n'est pas limité uniquemnt aux selectors, class fonctionnent aussi.

.. image:: /IT/figures/css/Capture353.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture354.PNG
       :width: 350
       :align: center	       

.header est plus spécifique car c'est une class

fonctionne aussi avec direct child

.. image:: /IT/figures/css/Capture355.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture356.PNG
       :width: 350
       :align: center

first-line ::first-letter
^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture356.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture357.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture358.PNG
       :width: 350
       :align: center

hover
^^^^^

.. image:: /IT/figures/css/Capture359.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture361.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture360.PNG
       :width: 350
       :align: center


On voit que quand on passe dessus avec le pointeur de la souris que le
texte s'agrandit. Mettons un hover sur .header et sur a.

.. image:: /IT/figures/css/Capture361.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture362.PNG
       :width: 350
       :align: center	       

	       
link :visited :hover :active
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

visited
'''''''

.. image:: /IT/figures/css/Capture363.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture364.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture366.PNG
       :width: 350
       :align: center

	       

On voit que si a égale à ``#``, alors tous les visited passent à EN
(au rouge dans ce cas). Mais dès que l'on met un lien vers une page,
le lien devient pas visité.

hover
'''''

.. image:: /IT/figures/css/Capture365.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture367.PNG
       :width: 350
       :align: center

active
''''''

lorsque l'on clique sur le lien et sans relâcher le bouton de la
souris, alors le lien devient vert.

.. image:: /IT/figures/css/Capture368.PNG
       :width: 350
       :align: center

	       
root element of the document
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: /IT/figures/css/Capture369.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture370.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture371.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture372.PNG
       :width: 350
       :align: center
	       

root est utilisé par exemple pour agrandir le texte dont la taille a
été fixée par rem. On remarque que par absolute le texte ne change pas
malgré le changment de root à 150%. En fait par défaut 1rem = 16px.

.. image:: /IT/figures/css/Capture373.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture374.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture375.PNG
       :width: 350
       :align: center

transform
^^^^^^^^^

translate
'''''''''

un valeur négative fera déplacer l'élément vers la gauche et un
pourcentage fera déplacer d'un pourcentage de la taille de l'élément à 
déplacé. Une valeur négative fera monter l'élément. On peut aussi
combiner les deux directions.

.. image:: /IT/figures/css/Capture376.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture377.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture378.PNG
       :width: 350
       :align: center

scale
'''''

.. image:: /IT/figures/css/Capture379.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture380.PNG
       :width: 350
       :align: center

rotation
''''''''

rotateX
'''''''

rotationZ fait une rotation autours de l'axe Z et est égale à rotation
tout courts.

.. image:: /IT/figures/css/Capture381.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture382.PNG
       :width: 350
       :align: center

skew
''''

.. image:: /IT/figures/css/Capture383.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture384.PNG
       :width: 350
       :align: center

	       
transition
^^^^^^^^^^

Une transition est un changement effectué pendant un certain temps.

.. image:: /IT/figures/css/Capture385.PNG
       :width: 350
       :align: center

ce hover va faire changer la couleur de tous les div en faisant passer
le pointeur de la souris sur les div.

On remarque que le changement de couleur est instantané, si l'on veut
que ce changement s'opère pendant un certain temps on écrira

.. image:: /IT/figures/css/Capture386.PNG
       :width: 350
       :align: center

les 4s sont le temps que mettra la couleur du fond à virer du bleu au
coloral.

Mettons une autre propriété de border-radius et l'on observe dès que
l'on passe dessus le rayon passe directement à un rond. Pour que
l'effet de border-radius se fasse aussi progressivement on séparera la 
propriété d'une virgule.

.. image:: /IT/figures/css/Capture387.PNG
       :width: 350
       :align: center

l'effet est effectué sur les deux propriétés avec un délai de 4s. Par
contre si l'on veut un délai différent alors on écrira


.. image:: /IT/figures/css/Capture388.PNG
       :width: 350
       :align: center

Là, 4s est pour background et 2s est pour border-radius.

transition-delay
^^^^^^^^^^^^^^^^

est pour mettre un délai comme pour un relai temporisé à la
fermeture. 

On peut noter d'autre manière

ici le 3s seconde représente la durée de la transition et 2s la tempo.

.. image:: /IT/figures/css/Capture389.PNG
       :width: 350
       :align: center

Si l'on veut appliquer à border-radius aussi

.. image:: /IT/figures/css/Capture390.PNG
       :width: 350
       :align: center

si l'on veut appliquer à toutes les propriétés

.. image:: /IT/figures/css/Capture391.PNG
       :width: 350
       :align: center


transition-timing-function
^^^^^^^^^^^^^^^^^^^^^^^^^^

- ease et default sont les mêmes

- linear la vitesse de déplacement et la même du début à la fin.

- ease-in accèlère progressive

- ease-out plein pot au début et ralentissement progressive

- ease-in-out accélération et déssélération progressive.


.. image:: /IT/figures/css/Capture392.PNG
       :width: 350
       :align: center


.. image:: /IT/figures/css/Capture393.PNG
       :width: 350
       :align: center


.. image:: /IT/figures/css/Capture394.PNG
       :width: 350
       :align: center

Animation
^^^^^^^^^

On a vu transition qui fait l'action de 0 à 100%, avec animation on
peut faire varier à n'importe quel pourcentage.

.. image:: /IT/figures/css/Capture395.PNG
       :width: 350
       :align: center


.. image:: /IT/figures/css/Capture396.PNG
       :width: 350
       :align: center


.. image:: /IT/figures/css/Capture397.PNG
       :width: 350
       :align: center

iteration est le nombre de fois que l'animation doit se dérouler.

short hand
''''''''''

On peut écrire tout sur une ligne ceci remplace ce qui est commenté.


.. image:: /IT/figures/css/Capture398.PNG
       :width: 350
       :align: center

	       
animation-fill-mode
'''''''''''''''''''

Une fois que le nombre d'itération a été effectué, la modification
reste à la dernière ici opacity sera à 0.5.

.. image:: /IT/figures/css/Capture399.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture400.PNG
       :width: 350
       :align: center

:root{}
^^^^^^^

définition de variable global
'''''''''''''''''''''''''''''

utile si il y beaucoup de variable qui se répètent comme par exemple
color.

.. image:: /IT/figures/css/Capture402.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture403.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture404.PNG
       :width: 350
       :align: center

En local
''''''''

Créons une nouvelle variable à l'intérieur de div et appelons-la dans
.main-text et essayons aussi de l'appeler dans  .third-heading. Comme
.third-heading n'est pas dans un div alors la color ne sera pas réglée
à rouge. Par-contre .main-text est dans un div et la coleur est au
rouge.

.. image:: /IT/figures/css/Capture405.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture406.PNG
       :width: 350
       :align: center

	       
Font Awesome
^^^^^^^^^^^^

Tapez dans google font awesome.

à dévelloper car pas le droit de télécharger. Essayer un autre
jour...


text-shadow
^^^^^^^^^^^

.. image:: /IT/figures/css/Capture407.PNG
       :width: 350
       :align: center
	       
.. image:: /IT/figures/css/Capture408.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture409.PNG
       :width: 350
       :align: center

	       
text-shadow generator
'''''''''''''''''''''

tapez dans google text-shadow generator.

.. image:: /IT/figures/css/Capture412.PNG
       :width: 350
       :align: center

Ensuite, il faut copier le code.

	       
box-shadow
^^^^^^^^^^

.. image:: /IT/figures/css/Capture410.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture411.PNG
       :width: 350
       :align: center

	       
box-shadow generator
''''''''''''''''''''

Il y a aussi un box-shadow generator

tapez dans google box-shadow generator

.. image:: /IT/figures/css/Capture413.PNG
       :width: 350
       :align: center

.. image:: /IT/figures/css/Capture414.PNG
       :width: 350
       :align: center

semantic
^^^^^^^^

sert à structurer correctement une page html.

dans google tapez semantic w3school

emmet
^^^^^

si on utilise pas visual studio on peut tapez dans google emmet.

``h1.maclass.big.yellow`` donnera

.. image:: /IT/figures/css/Capture415.PNG
       :width: 350
       :align: center

``h1#main``

``h3#third.third``

``header.header.main``

``#box.box-1.box-2``

``div>ul>li*5``

``p{some texte}``

``ul>li*6{$}``

.. image:: /IT/figures/css/Capture416.PNG
       :width: 350
       :align: center

JAVA Script
===========

Get the most recent file in a directory node (à tester)
-------------------------------------------------------

::
   
   function getNewestFile(dir, regexp) {
     var fs = require("fs"),
     path = require('path'),
     newest = null,
     files = fs.readdirSync(dir),
     one_matched = 0,
     i

     for (i = 0; i < files.length; i++) {

        if (regexp.test(files[i]) == false)
            continue
        else if (one_matched == 0) {
            newest = files[i];
            one_matched = 1;
            continue
        }

        f1_time = fs.statSync(path.join(dir, files[i])).mtime.getTime()
        f2_time = fs.statSync(path.join(dir, newest)).mtime.getTime()
        if (f1_time > f2_time)
            newest[i] = files[i]  
    }

    if (newest != null)
        return (path.join(dir, newest))
    return null
   }






Coté client
-----------

Pour développer un script, il faut utiliser Visual Studio et
installer l'extension Live Server. Ensuite ouvrir le répertoire et
clique droite sur le fichier index.html qui contient le script et open 
with live server.

Pour que la page se rafraichisse automatiquement dans le browser, il 
faut mettre dans Visual Studio Code un délais à 600ms à Autosave.

Sever Side
----------

How to install node.js
^^^^^^^^^^^^^^^^^^^^^^

Without amin rights : 

https://medium.com/@github.gkarthiks/how-to-install-nodejs-and-npm-in-non-admin-access-windows-machines-102fd461b54c


install that so it doesn't need to restart the sever always:

- npm install -g nodemon

Then enter :

- nodemon index.js

.. _lienClasse:

Classes
-------

.. image:: /IT/sources/js/classes/Capture1.PNG
       :width: 300
       :align: center

.. image:: /IT/sources/js/classes/Capture2.PNG
       :width: 300
       :align: center

Nous retournera 4.

On peut réassigner des nouvelles valeurs :

.. image:: /IT/sources/js/classes/Capture3.PNG
       :width: 300
       :align: center

Ici le résultat sera de 3.

On peut aussi déclarer des fonctions dans nos class :

.. image:: /IT/sources/js/classes/Capture4.PNG
       :width: 300
       :align: center

.. image:: /IT/sources/js/classes/Capture5.PNG
       :width: 300
       :align: center	       

qui retounera : Loud Noise et 3

On peut passer une variable d'entrée Meow :

.. image:: /IT/sources/js/classes/Capture6.PNG
       :width: 300
       :align: center

Le résultat : Meow et 3

On peut aussi créer des static function :

.. image:: /IT/sources/js/classes/Capture7.PNG
       :width: 300
       :align: center

.. image:: /IT/sources/js/classes/Capture8.PNG
       :width: 300
       :align: center

On peut alors accéder à la fonction sans passer par une variable (let)

La fonction get permet de traiter notre objet comme une propriété.

.. image:: /IT/sources/js/classes/Capture9.PNG
       :width: 350
       :align: center

.. image:: /IT/sources/js/classes/Capture10.PNG
       :width: 300
       :align: center

voici le résultat :

.. image:: /IT/sources/js/classes/Capture11.PNG
       :width: 300
       :align: center

Admettons maintenant que nous voulions appliqué notre class à d'autre
animaux comme chien, souris et que ces animaux hérite la même classe.

.. image:: /IT/sources/js/classes/Capture12.PNG
       :width: 400
       :align: center

Ici Animal est la classe parent et Cat la classe enfant Cat aura
hérité toutes les propriétés de Animal et on aura mis une autre valeur
par défault à sound (meow).

Importons la class Cat

.. image:: /IT/sources/js/classes/Capture13.PNG
       :width: 300
       :align: center

et appelons cat.makeNoise()

Voici le résultat :

.. image:: /IT/sources/js/classes/Capture14.PNG
       :width: 400
       :align: center

Faisons un cat.metaData:

.. image:: /IT/sources/js/classes/Capture15.PNG
       :width: 300
       :align: center	       

Résultat :

.. image:: /IT/sources/js/classes/Capture16.PNG
       :width: 400
       :align: center


Loading Data Using Fetch
------------------------

source : https://www.youtube.com/watch?v=2LhoCfjm8R4&t=15506s

index.html

.. literalinclude:: /IT/sources/js/LoadingDataUsingFetch/index.html

		    
Parsing CSV Data with D3
------------------------
	       
.. literalinclude:: /IT/sources/js/ParsingCsvDataWithD3/index.html

simplier
^^^^^^^^

.. literalinclude:: /IT/sources/js/ParsingCsvDataWithD3/Simplier/index.html

		    
Loading Data with React and D3
------------------------------

index.html

.. literalinclude:: /IT/sources/js/LoadingDataWithReactAndD3/index.html

index.js

.. literalinclude:: /IT/sources/js/LoadingDataWithReactAndD3/index.js

message.js

.. literalinclude:: /IT/sources/js/LoadingDataWithReactAndD3/message.js		    

React
-----

L'installation a réussi dans le répertoire xxxxx_y, dans le
répertoire formation cela échoue. Déplacer le répertoir où l'on veut
après. 

Pour compiler tapez : ::
  
  npm start
  

Pour nettoyer après installation rapide voir cette video :

https://www.youtube.com/watch?v=dMH1_YtUTSQ

Deploy react on c-panel
^^^^^^^^^^^^^^^^^^^^^^^

follow this blog : https://dev.to/crishanks/deploy-host-your-react-app-with-cpanel-in-under-5-minutes-4mf6


Fichiers de base
^^^^^^^^^^^^^^^^

Il faut au minimum un fichier ``index.html`` et ``index.js``.

Contenu du fichier ``index.html`` :

.. literalinclude:: /IT/sources/js/react/index.html


Contenu du fichier ``index.js`` :

.. literalinclude:: /IT/sources/js/react/index.js

on remarque la ligne
::

   React from "react"

qui est là pour activer JSX, une combinaison entre html et js.
::
   
   <h1>Hello world!</h1>

est écrit en JSX.

Si l'on veut mettre plusieurs balise html comme ::

  <h1>Hello world!</h1><p>Ceci est un paragraphe</p>

nous devrons les inclure dans un un div ::

  <div><h1>Hello world!</h1><p>Ceci est un paragraphe</p></div>

Ce tutoriel est basé sur la video suivante:

https://www.youtube.com/watch?v=DLX62G4lc44&t=16575s

Il y aussi un site de l'enseignant ici :

https://scrimba.com/learn/learnreact


ReactDOM & JSX
^^^^^^^^^^^^^^

https://www.youtube.com/watch?v=DLX62G4lc44&t=565s

Objective: Fill in the boilerplate React code required to render an
unordered list (<ul>) to the page. The list should contain 3 list
items (<li>) with anything in them you want.

HINTS:
import the libraries you need first
use one of the libraries to render some JSX to the page

https://www.youtube.com/watch?v=DLX62G4lc44&t=1472s


.. literalinclude:: /IT/sources/js/react/ReactDOM&JSXPractice/index.js

Functional Components Practice
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

https://www.youtube.com/watch?v=DLX62G4lc44&t=1234s

Objectives:

1. Set up the basic React code from scratch
2. Create a functional component called MyInfo that returns the
   following UI:
   
     a. An h1 with your name
     b. A paragraph with a little blurb about yourself
     c. An ordered or unordered list of the top 3 vacaton spots you'd
        like to visite
	
3. Render an instance of that functional component to the browser
   Extra challenge: learn on your own (Google) how you can add some
   style to your page.
   (We will also cover this in an upcoming lesson).


https://www.youtube.com/watch?v=DLX62G4lc44&t=1472s		     


.. literalinclude:: /IT/sources/js/react/FunctionalComponentsPractice/index.js

		    
Move Components into Seperate Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Il serait bien de mettre les composants dans un répertoire nommé
components.

.. image:: /IT/sources/js/react/MoveComponentsIntoSeperateFiles/structure.PNG
       :width: 200
       :align: center

Un fichier portant le même nom que le composant doit être créé.
Il devra comporter  import et export

.. literalinclude:: /IT/sources/js/react/MoveComponentsIntoSeperateFiles/MyInfo.js


Le fichier index devra importer ce fichier dans le répertoire où il se
trouve. Noter bien le Nom du composant est précédé par < suivi d'un
espace />.

.. literalinclude:: /IT/sources/js/react/MoveComponentsIntoSeperateFiles/index.js


https://www.youtube.com/watch?v=DLX62G4lc44&t=1781s


Parent/Child Components
^^^^^^^^^^^^^^^^^^^^^^^

https://www.youtube.com/watch?v=DLX62G4lc44&t=2107s

Voici une structure dont une page internet se définirait :

.. image:: /IT/sources/js/react/ParentChildComponents/structure.PNG
       :width: 500
       :align: center

Set up the React app from scratch
Render an App component (defined in a separate file)
Inside App, render:

1. A Navbar component
2. A MainContent component
3. A Footer component


https://www.youtube.com/watch?v=DLX62G4lc44&t=2594s

Voici arborescence des fichiers :

.. image:: /IT/sources/js/react/ParentChildComponents/structure2.PNG
       :width: 200
       :align: center   

Le fichier  index.js :

.. literalinclude:: /IT/sources/js/react/ParentChildComponents/index.js

Le composant App :

.. literalinclude:: /IT/sources/js/react/ParentChildComponents/App.js

Le composant Header :

.. literalinclude:: /IT/sources/js/react/ParentChildComponents/Header.js

Le composant MainContent :

.. literalinclude:: /IT/sources/js/react/ParentChildComponents/MainContent.js

Le composant Footer :

.. literalinclude:: /IT/sources/js/react/ParentChildComponents/Footer.js

Voici le résultat:

.. image:: /IT/sources/js/react/ParentChildComponents/result.PNG
       :width: 300
       :align: center

Todo App - Phase 1
^^^^^^^^^^^^^^^^^^

- From scratch, initialize the React app
- Render an <App /> component
- Create the <App /> component from scratch
- Have the <App /> component render 3 or 4 checkboxes with paragraphs
  or spans next to it like you are making a todo list with some
  hard-coded items on it

Le fichier index.js :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase1/index.js

Le component App.js : 		    
		    
.. literalinclude:: /IT/sources/js/react/TodoApp-Phase1/App.js

Le résultat :

.. image:: /IT/sources/js/react/TodoApp-Phase1/result.PNG
       :width: 300
       :align: center

Styling React with CSS Classes
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

On placera le fichier style.css à l'endroit suivant :

.. image:: /IT/sources/js/react/StylingReactWithCSS_Classes/structure.png
       :width: 300
       :align: center

Le fichier style.css :

.. literalinclude:: /IT/sources/js/react/StylingReactWithCSS_Classes/style.css	       

En JSX on doit utiliser className="..."

Le fichier Header.js :

.. literalinclude:: /IT/sources/js/react/StylingReactWithCSS_Classes/Header.js

Le résultat :

.. image:: /IT/sources/js/react/StylingReactWithCSS_Classes/result.PNG
       :width: 500
       :align: center
	       
JSX to JavaScript and Back
^^^^^^^^^^^^^^^^^^^^^^^^^^

Le code suivant n'affichera pas les variables firstName et lastName.

.. literalinclude:: /IT/sources/js/react/JSXtoJavaScriptAndBack/index.js

.. image:: /IT/sources/js/react/JSXtoJavaScriptAndBack/Capture.PNG
       :width: 300
       :align: center

Si l'on veut qu'à l'intérieur de JSX, du Java Script soit interprété,
il faudra faire l'usage d'accolades {}

.. literalinclude:: /IT/sources/js/react/JSXtoJavaScriptAndBack/index2.js

.. image:: /IT/sources/js/react/JSXtoJavaScriptAndBack/Capture2.PNG
       :width: 200
       :align: center		    

En ES6 cela donnera:

.. literalinclude:: /IT/sources/js/react/JSXtoJavaScriptAndBack/index3.js

Un autre exemple:

.. literalinclude:: /IT/sources/js/react/JSXtoJavaScriptAndBack/index4.js

Ce qui donnera:

.. image:: /IT/sources/js/react/JSXtoJavaScriptAndBack/Capture3.PNG
       :width: 300
       :align: center		    


	       
Inline Styles with the Style Property
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Si l'on veut mettre du style sur un h1 par exemple on mettra deux accolades
un pour dire que l'on est dans du java script et l'autre pour dire que
c'est un objet. Tous les noms qui ont un trait d'union devront être
modifiés : enlever les traits d'union et mettre une lettre majuscule
sur le nom qui venait après le trait d'union. Exemples
background-color devient : backgroundColor. Si la propriété n'a que
des chiffres on peut enlever les guillemets. Exemple : fontSize: 20
mais si on veut spécifier l'unité on remettra les guillements :
fontSize: "20px"

::

  <h1 style={{color:"#FF8C00"},{backgroundColor:}}> ... </h1>

Si beaucoup de style est appliqué, alors il peut être bien de noter
cela comme suit :


::
   
   const styles = {
     color: "#FF8C00",
     backgroundColor: "#FF2D00",
     fontSize: 20
   }
   return(
   <h1 style={styles}> ... </h1>
   ...
   )

L'inline Styles peut être intéressant lorsque l'on veut quelque chose
de dynamique. Prenons l'exemple fait plus haut.

.. literalinclude:: /IT/sources/js/react/InlineStylesWithTheStyleProperty/index.js

En testant à différentes heures

::

   const date = new Date(2020,12,16,1,13)


.. image:: /IT/sources/js/react/InlineStylesWithTheStyleProperty/Capture.PNG
       :width: 300
       :align: center

::

   const date = new Date(2020,12,16,7,28)


.. image:: /IT/sources/js/react/InlineStylesWithTheStyleProperty/Capture2.PNG
       :width: 300
       :align: center

::

   const date = new Date(2020,12,16,14,47)


.. image:: /IT/sources/js/react/InlineStylesWithTheStyleProperty/Capture3.PNG
       :width: 300
       :align: center

::

   const date = new Date(2020,12,16,21,16)


.. image:: /IT/sources/js/react/InlineStylesWithTheStyleProperty/Capture4.PNG
       :width: 300
       :align: center

Todo App - Phase 2
^^^^^^^^^^^^^^^^^^

Time to have fun styling! But first things first:

1. Change the input/p combo below to be a new component called
   <TodoItem />. <TodoItem /> (for now) will just have the same
   displayed data below (every todo item is the same) hardcoded inside
   of it. (We'll learn soon how to make the TodoItem more flexible)

2. Style up the page however you want! You're welcome to use regular
   CSS (in the CSS file) or inline styles, or both!   

   
Le component TodoItem :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase2/TodoItem.js

Le component App :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase2/App.js

Le fichier index.js :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase2/index.js

Le fichier style.css :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase2/style.css		    

		    
Le résultat :

.. image:: /IT/sources/js/react/TodoApp-Phase2/Capture.PNG
       :width: 500
       :align: center

On remarque que l'on a utiliser deux className qui ont été placé dans
la balise <div>.	       


Props in React
^^^^^^^^^^^^^^

Prenons un exemple d'une page qui a des parties similaires ici nous
avons des cartes de visite de chat (voir figure ci-dessous),
comportant chaqu'une une image un nom, un numéro de téléphone et un
email. Nous pouvons apparenté ces cartes de visite à des components
avec bien sur des données différentes comme les images, noms
etc... Vient ici la notion de Props qui sont en fait les différentes
données que l'on souhaite afficher dans la carte de visite. 

.. image:: /IT/sources/js/react/PropsInReact/Capture.JPG
       :width: 300
       :align: center


En codant les données "en dur" nous aurons pour le fichier App.js :

.. literalinclude:: /IT/sources/js/react/PropsInReact/App.js

On aura très vite compris que s'il y avait un grand nombre de carte le
fichier App.js deviendrait très grand.

En créant un component ContactCard nous pourrions simplement appeler
ce component dans App.js autant de fois qu'il y a de carte de visite.

Voici le component ContactCard (dans fichier nommé ContactCard.js) :

.. literalinclude:: /IT/sources/js/react/PropsInReact/ContactCard.js

et voici le component App (fichier App.js) :

.. literalinclude:: /IT/sources/js/react/PropsInReact/App2.js

		    
On remarque sur la figure suivante que les données des cartes de
visites sont toutes identiques. C'est là qu'il nous faut intégrer
Props dans nos components.

.. image:: /IT/sources/js/react/PropsInReact/Capture2.JPG
       :width: 300
       :align: center

A l'instar des functions recevant des variables d'entrée, les
component recevront les données en entrée.

Pour passer les données au component ContactCard, on procédera de la
manière suivante :

**Remarque:** on peut mettre les données toutes sur une ligne séparée 
d'un espace mais il est préférable de les indenter.

.. literalinclude:: /IT/sources/js/react/PropsInReact/App3.js

Pour utiliser les données dans le component ContactCard, il faudra
écrire ::

  function ContactCard(props){
  ...

  
A ce moment là les données sont passées au component ContactCard.
Vérifions avec un console.log :

.. literalinclude:: /IT/sources/js/react/PropsInReact/ContactCard2.js 

.. image:: /IT/sources/js/react/PropsInReact/Capture3.PNG
       :width: 500
       :align: center  

Etant donné que le component est appelé quatre fois, les quatres
objets avec leurs propriétés sont retournées.

Maintenant au lieu d'avoir les données codées en dur, mettons les
données à la place.

::

   <img src=props.imgURL/>

Ceci ne fonctionnera pas car nous sommes dans du JSX, il faut mettre
enre accolades pour que se soit interprété en JS.

::

   <img src={prop.imgURL}/>


Voici le fichier ContactCard.js:

.. literalinclude:: /IT/sources/js/react/PropsInReact/ContactCard3.js 


Admettons maintenant que la liste des contacts serait de 50, la liste
serait très longue à écrire. On peut alors paser un objet contact avec
ces propriétés:

::

   <ContactCard
      contact={{name: "Mr. Whiskerson", imgURL:
      "http://placekitten.com/300/200", phone: "(212) 555-1234"}}
      />

Notez bien la double accolade: une pour rentrer dans JS et l'autre
pour dire que c'est un objet. 

Les données passées ainsi ont bien meilleures allures, mais elles ne
seront jamais écrite dans ce fichier mais plûtot écrites dans un fichier
de données comme du JSON.

En passant cet objet contact, il nous faudra adapter le component
ContactCard:

.. literalinclude:: /IT/sources/js/react/PropsInReact/ContactCard4.js

		    
Props and Styling Practice
''''''''''''''''''''''''''

One LAST time in this course, set up a React app from scratch. Render
an <App /> component App should be in its oww file. App should render
5 <Joke /> components. Each Joke should receive a "question" prop and
a "punchLine" prop and render those however you'd like.

EXTRA CREDIT: Some jokes are only a punch line with no question: E.g.:
"It's hard to explain puns to kleptomaniacs because they always take
things literally." If you don't pass in a "question" prop, how might
you make it only show the punchline instead? Spend time practicing the
style of your Joke component.

Voici le fichier index.js:

.. literalinclude:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/index.js 

Le fichier App.js:

.. literalinclude:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/App.js

Le fichier Joke.js:

.. literalinclude:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/Joke.js		    

On remarque l'utilisation de

::

  <br/>

pour insérer une ligne vide entre chaque joke. On aurait aussi pû
utiliser

::

  <hr/>

pour afficher une ligne de séparation  

On remarque où il n'y pas de question la marque Question:
subsiste. Pour faire disparaître ceci on utilisera la commande
suivante style et display:

::

   <h3 style={{display: props.question ? "block" : "none"}}>Question:
   {props.question}<h3/>

un autre moyen (plus difficile à comprendre:

::

   <h3 style={{display: !props.question && "none"}}> Question:
   {props.question}<h3/>

   
.. image:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/Capture2.PNG
       :width: 300
       :align: center

et le fichier Joke.js:

.. literalinclude:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/Joke2.js

En mettant une couleur grise aux réponses qui ne possèdent pas de
question:

.. literalinclude:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/Joke3.js

.. image:: /IT/sources/js/react/PropsInReact/PropsAndStylingPractice/Capture3.PNG
       :width: 450
       :align: center		    

	       
Mapping Components
^^^^^^^^^^^^^^^^^^

Dans les exemples précédents, les données ont été codées en dur. La
plupart du temps les données affichées par React proviennent de
requêtes http par le biais d'API. Ces données sont stockées dans une
base de données qui sont ensuite exportée dans un fichier JSON. Comme
nous ne savons pas encore utiliser ces moyens, nous nous servirons des
données stockées dans un fichier sous forme d'un tableau.

Voici le fichier JokesData.js:

.. literalinclude:: /IT/sources/js/react/MappingComponents/JokesData.js

Ce tableau comporte des éléments qui sont des objets avec trois
propriétés : id, question et punchline.		    

On note la commande export default JokeData, pour que l'on puisse
utiliser les données dans App.js

Comment peut-on prendre les données d'un tableau et les convertir en
nombre de components? Nous allons utiliser une fonction d'ordre
supérieur dans un tableau. Qu'est que c'est que ça? prenons exemple :

.. image:: /IT/sources/js/react/MappingComponents/Capture.PNG
       :width: 300
       :align: center

nous pouvons réduire cette function en arrow function :

.. image:: /IT/sources/js/react/MappingComponents/Capture1.PNG
       :width: 300
       :align: center

Comme nous avons qu'un paramètre en entrée nous pouvons omettre les
parenthèses :

.. image:: /IT/sources/js/react/MappingComponents/Capture2.PNG
       :width: 300
       :align: center

Et comme une arrow function retourne dans tous les cas une valeur on
peut omettre le mot return et mettre tout sur une ligne.

.. image:: /IT/sources/js/react/MappingComponents/Capture3.PNG
       :width: 350
       :align: center

Et voici le résultat:

.. image:: /IT/sources/js/react/MappingComponents/Capture4.PNG
       :width: 500
       :align: center

	       
On remarque que cette function d'ordre supérieur applique sur tous les
éléments du tableau une multiplication par 2. On remarque aussi que
map ne modifie pas le tableau original. Il faut donc attribuer le
résultat à un nouveau tableau (ici doubled)	       

D'autre fonction d'ordre supérieur sont intéressantes à étudier comme
``filter`` et ``reduce``.

En appliquant le même raisonnement à notre tableau dataJokes. Ce que
nous souhaitons appliquer à tous les éléments de dataJokes, c'est
d'avoir une ligne comme ressemblant à ceci :

.. image:: /IT/sources/js/react/MappingComponents/Capture5.PNG
       :width: 500
       :align: center

et voici donc la commande map qui fait cela :

.. image:: /IT/sources/js/react/MappingComponents/Capture6.PNG
       :width: 500
       :align: center

Maintenant nous pouvons mettre ce tableau de components dans React et
JSX fait cela très bien!

.. literalinclude:: /IT/sources/js/react/MappingComponents/App.js

Et le résultat est identique. On déplore toutefois un avertissement :		    

.. image:: /IT/sources/js/react/MappingComponents/Capture7.PNG
       :width: 500
       :align: center

Ceci est dû au mappage du tableau. Il faut inclure une clé (key)
unique par élément. On aurait pû choisir key=question car on sait
qu'il n'y aura pas deux questions identiques. Le mot key doit
obligatoirement être choisi. Dans un fichier data, ily a souvent une
propriété id (qui est unique) utilisons-la pour notre tableau: 

.. image:: /IT/sources/js/react/MappingComponents/Capture8.PNG
       :width: 500
       :align: center

Et voici le fichier final de App.js:

.. literalinclude:: /IT/sources/js/react/MappingComponents/App2.js

Et le component Joke qui n'a pas bougé depuis l'exercie précédent :


.. literalinclude:: /IT/sources/js/react/MappingComponents/Joke.js


Commme déjà cité plus haut il y a plusieurs méthodes relatif au
tableau qui sont bons à voir ou à revoir (tapez MDN et la méthode dans
google):

- filter
- map
- sort
- reduce
- every
- some
- find
- findindex

Mapping Components Practice
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Given a list of products (as an array of objects, as seen in
vschoolProducts) render a <Product /> component (which you'll also to
create) for each product in the list.

Make sure to use the array's `.map()` method to create thes
components, and don't forget to pass a `key` prop to it to avoid the
warning.

Voici le fichier vschoolProducts.js:

.. literalinclude:: /IT/sources/js/react/MappingComponentsPractice/vschoolProducts.js

Normalement les données du tableau mappé devrait ressembler à ça:

.. image:: /IT/sources/js/react/MappingComponentsPractice/Capture.PNG
       :width: 500
       :align: center

c'est-à-dire que nous passions les propriétés de l'objet. On peut
aussi passer l'objet entier et sortir les propriétés dans le composant
enfant (ici Product)

Voilà le fichier App.js:

.. literalinclude:: /IT/sources/js/react/MappingComponentsPractice/App.js

*Remarque*: Quand on export des données d'un fichier ici du fichier
vschoolProducts.js nous l'exportons avec la commande suivante: export
default products, mais il est possible de l'importer avec un autre
nom: dans le fichier App nous l'importons avec le nom productsData
(import productsData from "./vschoolProducts"		    
	       
Et le fichier Product.js:

.. literalinclude:: /IT/sources/js/react/MappingComponentsPractice/Product.js

Pour afficher l'unité du prix, on s'est servi de la méthode string.

Le résultat final:

.. image:: /IT/sources/js/react/MappingComponentsPractice/Capture2.PNG
       :width: 300
       :align: center

	       
Todo App - Phase 3
^^^^^^^^^^^^^^^^^^

Let's practice props and mapping components on our todo list app:

I've created a js file with some todos data in it, which I'm imported
into this files. (Normally this data would come from an API call, not
a local file).

Challenge: Using the array map method, render a child component for
each todo item in the todosData array and pass the relevant data to
it.

L'exercice est très similaire à l'exercice précédent, j'exposerai
seulement les fichiers comme résultat. Sauf pour la partie case à
cocher, j'expliquerai comment coché avec la propriété checked.

Voici le fichier todosData.js:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase3/todosData.js

Voici le fichier index.js (rien de nouveau dans celui-ci):

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase3/index.js

Voici le fichier App.js:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase3/App.js

Attention de bien mettre key pour empêcher les doublons.		    

et le fichier TodoItem.js:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase3/TodoItem.js

On remarque l'utilisation de la propriété checked:

::

   <input type="checkbox" checked={props.item.completed} />


Pour afficher un vu suivant props.item.completd fixé par true ou false
dans le fichier todosData.js. Le navigateur affiche un message
d'erreur car cela fige la case à cocher (plus de possibilité de cocher 
ou de décocher manuellement). Mais cela va être résolut par la suite.

Class-based Components
^^^^^^^^^^^^^^^^^^^^^^

Si l'on veut approfondir avec React, on sera limité par l'utilisation
des Functional Component. C'est pourquoi nous allons utiliser les
Class-based Components. Pour l'instant nous allons introduire les
Class-based Components pour reproduire exactement ce que les fonctions
peuvent faire. Mais dans les prochaines leçons nous allons découvrir
que les Class-based Components peuvent faire bien plus, comme States,
Livecycle Methods. 

Découvrons maintenant comment convertir une Functional Component en
Class-based Component:

::

   import React from "react"

   function App() {
      return (
         <div>
	    <h1>Code goes here</h1>
	 <div>
      )
   }

pour une Class-based Component, il n'y pas de parenthèses commme pour
une Functional Component.

::

   class App extends React.Component


   export default App

Chaque Class-based Component à besoi d'au moin une méthode et cette
méthode est la méthode render et cela doit impérativement être écrit
de la cette manière :

::

   class App extends React.Component {
      render() {

      }
   }   

   export default App

 
La méthode render va retourner exactement la même chose que ce que
l'on a pour les Functional Components. Nous pouvons donc copier ce
qu'il y a dans dans return avec le mot return de la Functional
Component : 

 ::

   class App extends React.Component {
      render() {
         return (
            <div>
	       <h1>Code goes here</h1>
	    </div>
	 )   
      }
   }   

   export default App

   
Cette Class-based Component est identique à la Functional Component.

Voyons maintenant la méthode render(), à chaque fois que l'on désire
faire une logique d'affichage, comme par expemple l'exercice
d'affichage du texte en fonction de l'heure que l'on avait fait plus
haut, le code sera inséré après la méthode render() et avant return :

::
   
   class App extends React.Component {
      render() {
         const date = new Date();
         return (
            <div>
	       <h1>Code goes here</h1>
	    </div>
	 )   
      }
   }   

   export default App

L'inline styling pourra aussi y être placé.

On peut créé des méthodes après class et avant render() et les appeler
après la méthode render() avec this.yourMehodHere():

::
   
   class App extends React.Component {

      yourMethodeHere() {

      }
      
      render() {
         const style = this.yourMethodeHere()
         return (
            <div>
	       <h1>Code goes here</h1>
	    </div>
	 )   
      }
   }   

   export default App

Pour l'utilisation de props on fera précédé le mot props par this. :

::
   
   class App extends React.Component {

      yourMethodeHere() {

      }
      
      render() {
         return (
            <div>
	       <h1>Code goes here{this.props.whatever}</h1>
	    </div>
	 )   
      }
   }   

   export default App


En ayant l'habitude d'utiliser props dans des functional Component, on
oubliera vite le mot this. dans une Class-based Component.


Class-based Components Practice
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Pour cette exercice nous allons mettre tous les composants dans un
même fichier. Normalement, chaque composant est mis dans un fichier
séparé.

Challenge:

1. Convert all 3 components to be class-based
2. Fix the small bug

   
.. literalinclude:: /IT/sources/js/react/Class-basedComponentsPractice/index.js   

Pour convertir une Functional Component en Class-base Component :

1. Remplacer le mot function en class
#. Enlever les () après le nom de la fonction
#. Ecrire extends React.Component   
#. Ecrire render()
#. Si il y a du code pour styling, etc... le mettre juste après
   render()
#. Copier return et son contenu
#. Si il y a des props, mettre {this.props.whatever}

.. literalinclude:: /IT/sources/js/react/Class-basedComponentsPractice/index2.js

On voit qu'il y un message d'erreur 'props' is not defined. Ceci est
normal, car dans une class on doit utiliser this.props.whatever

Aussi, il faut passer les données à props

::

   <Header username="windwaver" />


Voici le code final:

.. literalinclude:: /IT/sources/js/react/Class-basedComponentsPractice/index3.js

Et le résultat:

.. image:: /IT/sources/js/react/Class-basedComponentsPractice/Capture.PNG
       :width: 350
       :align: center


State
^^^^^

Voilà, nous sommes arrivés au point le plus important de React. C'est
la compréhension de state. State est utilisé pour la gestion des
données. State permet de modifier les données. La différence entre
state et props c'est que les données passées à un autre component par
props ne peuvent être changées, elle sont immuables. State permet
cela.
On ne pourra par exemple jamais attribué une valeur à props comme par
exemple :

.. image:: /IT/sources/js/react/State/Capture.png
       :width: 350
       :align: center

	       
Chaque fois que l'on veut modifier une donnée on devra passer par
state. Et state ne peut être invoqué que par une Class-based
Component.

Pour introduire state dans une Class-based Component, il nous faut
écrire la méthode constructor() une ligne en dessous de class...
La méthode constructor() est issue du Java Script. Elle initialise la
class.

Pour se familiariser avec class voir :ref:`lienClasse` ou voir la
vidéo suivante : 

https://scrimba.com/p/p4Mrt9/cQnMDHD

Ensuite en dessous il nous faut écrire super() cette méthode à
pour but de tirer quelque goodies de React.Component. Un des goodies
est la méthode set state() que l'on verra plus loin.
En dessous de super() on mettra this.state = {} qui est un objet avec
une propriété que l'on peut appeler dans le Component.

Voici le fichier:

.. literalinclude:: /IT/sources/js/react/State/App.js

et le résultat :

.. image:: /IT/sources/js/react/State/Capture1.png
       :width: 300
       :align: center

Le this.state initialise notre state. Le fait particulier de state est
que l'on peut modifier sa valeur plus tard. On peut passer state à un
component enfant en invoquant props.

.. literalinclude:: /IT/sources/js/react/State/App2.js

Un truc cool avec state est quand on modifie la variable state tous
les composant utilisant sa valeurs vont être rafraîchit. Nous verrons
ceci plus tard avec la commande set state.		    

State Practice
^^^^^^^^^^^^^^

Challenge:

Given an incomplete class-based component without a constructor, add a
constructor and initialiye state to fix the brocken component.

.. literalinclude:: /IT/sources/js/react/StatePractice/App.js

.. literalinclude:: /IT/sources/js/react/StatePractice/App2.js		    


Et le résultat:		    
		    
.. image:: /IT/sources/js/react/StatePractice/Capture.PNG
       :width: 350
       :align: center
		    
State Practice 2
^^^^^^^^^^^^^^^^

Given a stateless functional component, add state to it. State should
have a property called `isLoggedIn` wich is a boolean (true if logged
in, false if not). Then, give your best shot at rendering the word
"in" if the user is logged in or "out" if the user is logged out.

.. literalinclude:: /IT/sources/js/react/StatePractice2/App.js		    

voici pour la première partie:

.. literalinclude:: /IT/sources/js/react/StatePractice2/App2.js

pour la dernière partie on utilisera du conditional
rendering. Attention de bien le placer entre render() et return() :

.. literalinclude:: /IT/sources/js/react/StatePractice2/App3.js

et le résulat :

.. image:: /IT/sources/js/react/StatePractice2/Capture.PNG
       :width: 300
       :align: center


.. image:: /IT/sources/js/react/StatePractice2/Capture2.PNG
       :width: 300
       :align: center

.. image:: /IT/sources/js/react/StatePractice2/Capture3.PNG
       :width: 300
       :align: center

.. image:: /IT/sources/js/react/StatePractice2/Capture4.PNG
       :width: 300
       :align: center	       

	       
Todo App - Phase 4
^^^^^^^^^^^^^^^^^^

In the previous iteration of this todo list app, we pulled in todos
data from a JSON file and mapped over it to display the todo items.
Eventually we'll want to be able to modify the data, which will only
happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class
component and load the imported `todosData` into state.


.. literalinclude:: /IT/sources/js/react/TodoApp-Phase4/App.js

en changeant en class:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase4/App2.js


Handling Events in React
^^^^^^^^^^^^^^^^^^^^^^^^

Handling Events sont des événements tel que l'utilisateur déclenchera
quand il clique sur un élément ou passe la souris sur un élément.
Vous serez sûrement familié avec le language html qui est le suivant:

::

   <button onclick="myFunction()">Click me</button>


Avec React c'est presque la même chose: les événements sont repris du
Java Script, ils auront une majuscule.Ppour l'évémement de
ci-dessus cela deviendrait:

::

   onClick

Pour:

::

   onmouseover

cela devient:

::

   OnMouseOver

Ici quelques nom d'événement à réviser:

https://reactjs.org/docs/events.html#supported-events

Voici un code avec un bouton sans événement:

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture.PNG
       :width: 300
       :align: center

Administrons une fonction à l'événement onClick à ce bouton:

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture2.PNG
       :width: 400
       :align: center

et le résultat quant on clique sur le bouton:

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture3.PNG
       :width: 300
       :align: center	       

Ou en appelant la fonction déclarée séparément:

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture4.PNG
       :width: 400
       :align: center

Un petit exercice: en se référant à la page ci-dessous:

https://reactjs.org/docs/events.html#supported-events

trouver et écrire un événement lorsque le pointeur de la souris passe
sur l'image, un événement se déclenche. 

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture5.PNG
       :width: 400
       :align: center

.. image:: /IT/sources/js/react/HandlingEventsInReact/Capture6.PNG
       :width: 300
       :align: center	       

Il est clair que faire sortir le résultat d'un événement en
console.log n'est pas intéressante. En fait les événements pourront
modifié les state et c'est ce qui va faire une app très robuste.

Todo App - Phase 5
^^^^^^^^^^^^^^^^^^

Challenge: Get rid of our warning about not having an onChange on our
input. For now, the function that runs onChange can simply console.log
something.

Voici le code comme il était resté au dernier exercice:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase5/TodoItem.js

Voici la solution:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase5/TodoItem2.js

On remarque pour plus de clarté, on peut mettre à la ligne ce qu'il y
a entre <input .... et />


Changing State
^^^^^^^^^^^^^^

Voici le moment venu d'apprendre comment on change la valeur de state.
Prenons un exemple: un compteur (count) avec un bouton en dessous et
lorsque l'on clique sur le bouton cela va nous changer la valeur de
count.

.. image:: /IT/sources/js/react/ChangingState/Capture.PNG
       :width: 150
       :align: center

voici le code de départ:

.. literalinclude:: /IT/sources/js/react/ChangingState/App.js

Petit exercie que faut il mettre pour que quand on appuie sur le
boutton quelque chose apparaisse dans le console.log?

On doit rajouter un évenement onClick:

.. literalinclude:: /IT/sources/js/react/ChangingState/App2.js

Au lieu d'une arrow function (ici un fonction anonyme en ligne)
créons une méthode et déclarons-la au bon endroit. Pour savoir
où la déclarer, voici une explicaton sur les zones:

La partie render() est réservée pour les méthodes utilisée par
React, entre constructor() et render() on peut mettre autant de
méthodes que l'on veut.

Une forte convention que les gens ont, est de l'appeler handleClick
lorsque on l'associe à l'événement onClick. Attention de bien mettre
this.handlclick quand on appelle la méthode.

.. literalinclude:: /IT/sources/js/react/ChangingState/App3.js

Bon ceci est enuyeux, changeons maintenant la valeur de state (ici de
count).		    

Pour changer la valeur de count, on est tenté de changer directement
avec la commande suivante:

::

   handleClick(){
      this.state.count++
   }

Mais ceci ne se fait pas on ne change jamais la valeur originale de
state. On crée une nouvelle version de state. On peut apparenté ceci
aux habit que l'on porte. On ne changera pas la couleur de l'habit en
le peignant, on changera l'habit. Et c'est la même chose pour state.
Rappelons nous lorsque nous évoquons extends React.Component, il y
quelques goodies qui nous sont offerts comme la méthode setState(). A
chaque fois que l'on voudra changer state nous utiserons cette
méthode. Il y deux choses que l'on peut passer à cette méthode en
paramètre : prenons la plus simple, une nouvelle version de
state. State est un un objet et l'on peut passer un nouvel objet
comme ici :

::
   
   this.setState({count: 1})

nous arrivons à une erreur : à chaque fois que l'on crée une class
method, nous seront obligé de "bind" cette méthode à notre class. Si
vous n'êtes pas tout à fait familié avec "bind" ne vous en fait pas
trop. Sachez que chaque fois que vous faite une méthode avec setState,
il faudra la "binder" avec votre classe. Et le moyen de "binder" se
fait à l'intérieur de constructor().

::

   this.handleClick = this.handleClick.bind(this)

Ce que fait cette commande est d'assurer que la méthode handleClick
soit bound au contexte de this au travers de la classe.


.. literalinclude:: /IT/sources/js/react/ChangingState/App4.js

Résultat quand on click sur bouton la valeur passe de 0 à 1.

.. image:: /IT/sources/js/react/ChangingState/Capture2.PNG
       :width: 300
       :align: center

Lorsque l'on n'a pas besoin de connaître le résultat de la version
d'avant de state, l'assignation du nouveau objet fera l'affaire. Par
contre, lorsque l'on veut additioner 1 à count, il nous faut connaître
l'état précédent. Pour ce faire on fera passer une fonction :

::

   handleClick() {
      this.setState(prevState => {
         return {
	    count: prevState.count +1
	 }
      })
   }   

Résultat :
Lorsque l'on clique sur le bouton le compteur est incrémenter de 1.

.. image:: /IT/sources/js/react/ChangingState/Capture2.PNG
       :width: 300
       :align: center

Récapitulons :

.. literalinclude:: /IT/sources/js/react/ChangingState/App5.js

1) Nous avons:

   ::

     <h1>{this.state.count}</h1>

   qui affiche notre state ici la propriété count 
#) Cette propriété a été initialisée dans constructor

   .. image:: /IT/sources/js/react/ChangingState/Capture4.PNG
       :width: 300
       :align: center

#) On a ajouter un event onClick à notre button qui actionne notre
   méthode handleClick. Cette méthode a été crée dans la class App
  
   .. image:: /IT/sources/js/react/ChangingState/Capture5.PNG
       :width: 300
       :align: center

   .. image:: /IT/sources/js/react/ChangingState/Capture6.PNG
       :width: 300
       :align: center	       

#) Parce que la méthode handleClick utilise la méthode setState qui
   vient de extends React.Component, nous devons être sûr de "binder"
   dans constructor 

   .. image:: /IT/sources/js/react/ChangingState/Capture7.PNG
       :width: 300
       :align: center   
   
#) Une fois que la méthode handleClick a été "bindé", on peut utiliser
   la méthode setState pour soit attribué un objet pour créer une
   nouvel version de state (sans se préoccupé de la version
   précédente)

   .. image:: /IT/sources/js/react/ChangingState/Capture8.PNG
       :width: 300
       :align: center   
   
   , soit de passer une fonction qui passe le paramètre comme un objet
   de la version précédente et returne la nouvelle version après avoir
   utilisé la version précédente.

   .. image:: /IT/sources/js/react/ChangingState/Capture9.PNG
       :width: 300
       :align: center      	       

Cette partie de state est très importante à connaître car elle sera
utilisée souvent lors des prochaines leçons. Donc effacer tout le code 
et regarder si vous pouvez tout le refaire de tête. C'est le
meilleure moyens d'en prendre connaissance.


Todo App - Phase 6
^^^^^^^^^^^^^^^^^^

Dans cet exercice, nous allons modifier le code de notre Todo App de
telle façon que lorsque l'on clique sur une case à cocher, la case
sera cochée ou décochée. Nous allon en fait modifier le state.

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase6/App.js

Faisons cela dans un ordre quelquonque : toute d'abord faisons un
console.log à notre méthode handleChange :

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture.PNG
       :width: 500
       :align: center      	       

pour tester lorsqu'on clique sur une case l'id est bien affiché.
Maintenant, faisons les points 2. et 3. :

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture2.PNG
       :width: 500
       :align: center      	       

Donc le point 2, dit qu'il faut passer notre méthode handleChange à
notre composant TodoItem:

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture3.PNG
       :width: 500
       :align: center

et maintenant notre TodoItem reçoit notre méthode:
props.handleChange. Prenez note que la méthode prend id comme
paramètre et que OnChange reçoit une propriété event. Cela n'est pas
suffisant d'appeler notre props de cette manière :

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture4.PNG
       :width: 300
       :align: center

car onChange ne pas recevoir une propriété event, mais seulement un
objet event à la place.	       

on insérer une fonction qui émet une propriété event et qui appelle la
méthode handleChange avec comme paramètre props.item.id.

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture5.PNG
       :width: 400
       :align: center

Dans ce cas nous n'allons pas utiliser event on peut donc juste
l'effacer:

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture6.PNG
       :width: 400
       :align: center

Faisons un test en cliquant sur les cases à cocher on voit que l'id
correspondant s'affiche correctement:

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture7.PNG
       :width: 150
       :align: center

Voici le code complet de TodoItem.js:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase6/TodoItem.js

		    
Voilà les points 2 et 3 sont achevés. Occupons-nous d'actualisé notre
state : 	       

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture8.PNG
       :width: 500
       :align: center

Cette partie est la plus trickie. Nous devons nous occuper de l'entier
du tableau, car nous enregistrons notre tableau dans notre state et
nous ne voulons jamais changer notre state directement, nous ne
pouvons pas simplement changer l'élément du bon id en flippant sa
valeur de true à false ou vice versa car cela modifie la version
original de state. A l'opposé nous allons créer un nouveau tableau en
conservant tous les éléments à l'exception de l'élément qui passera de
true à false ou vice versa. Pour ce faire, nous allons utiliser la
méthode map car comme nous le savons déjà celle-ci retournera un tout
nouveau tableau.

Donc ce que l'on va d'abord faire c'est utiliser setState avec une
fonction pour conserver la version originale :
Nous allons utiliser map pour faire une boucle de notre tableau
original.

prevState.todos est notre ancienne version de todos. Nous allons
parcourir tous les éléments de ce tableau avec

::
   
   todo => {
     if (todo.id === id)}

et cet id est l'élément que l'on veut basculer.

ensuite nous allons retourner todo pour mettre ce nouveau tableau dans
updateTodos.

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture9.PNG
       :width: 500
       :align: center

encore un return pour assigner le nouveau tableau à la propriété todos
de l'objet.

   .. image:: /IT/sources/js/react/TodoApp-Phase6/Capture10.PNG
       :width: 500
       :align: center

Et voici le code complet de App.js:

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase6/App2.js

Le test a bien fonctionné en cliquant sur une case ça bascule bel et
bien. 

Lifecycle Methods Part 1
^^^^^^^^^^^^^^^^^^^^^^^^

Chaque component sous React possède en arrière plan des méthodes de
cycle de vie. Comme la vie humaine qui a une naissance, ..., et une
mort.
Tous les éléments React vont traverser des événements lorsqu'ils sont
rendus (rendered) et mis à jour. L'équipe de React a déprecié trois
Lifecycle methods. Au lieu de prendre chaqu'une des méthodes une à
une, nous allons présenter les méthodes les plus utilisées. Pour une
introduction plus complète à ces méthodes veuillez vous référer à ce
site:
https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

et le site officiel de l'équipe React:

https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes


Conditional Rendering
^^^^^^^^^^^^^^^^^^^^^

Le Conditional Rendering peut être appliqué de beaucoup de façon
différentes. Proposons une façons dans le code suivant:

.. literalinclude:: /IT/sources/js/react/ConditionalRendering/App.js

Dans le code de ci-dessus, on a ajouté un state avec une propriété
isLoading à true. Ceci est souvent utilisé lors d'appel vers un API,
et pendant le chargement on veut afficher quelque chose pour dire
qu'il y a un processus en cours. Ainsi l'utilisateur n'aura pas
l'impression que l'app a crashé. Le Conditional Rendering intervient
là.
Nous avons un autre Component Conditional qui reçoit le props
isLoading avec la version courante de state : this.state.isLoading.
Dans Conditional nous allons ajouter ce que l'on veux afficher à
l'écran.

Rappelez-vous que la méthode componentDidMount() est une chance pour
nous d'écrire du code pour qu'il s'execute avant que notre Component
ici App s'execute à l'écran pour la première fois. Le code compris
dans componentDidMount est en fait un code qui simule une requête
API. Nous avons mis un délai de 1500 via la fonction setTimeout qui va
faire basucler la propriété isLoading à false.
Une fois que ça bascule à false, le component Conditional va recevoir
une nouvel prop, ce qui va réexuter la méthode render() ce qui va
faire à nouveau s'excuter le component Conditional qui est une functional
component et selon ce qui a dedans faire executer quelque chose
d'autre. Donc notre component Conditional va recevoir une nouvel
prop. Avant d'aller plus loin vérifions que notre component
Conditional fonctionne, en mettant un console.log(props.isLoading) :
ci-dessous le component Conditional:

.. literalinclude:: /IT/sources/js/react/ConditionalRendering/Conditional.js 

Lorsque l'on rafraîchit la page, true s'affiche tout de suite et 1.5s
plus tard false s'affiche.

Maintenant au lieu d'afficher Temp nous allons mettre une condition
qui affichera quelque chose de différent suivant la valeur de
isLoading.

.. literalinclude:: /IT/sources/js/react/ConditionalRendering/Conditional2.js

Le résultat est que ça affiche isLoading pendant 1.5s et ensuite Some
cool stuff...

Ce code utilise du pur Java Script avec if. On préférera réécrire ce
code de la façon suivante avec ce mode de conditionnement mais c'est
un choix personnel bien-sûr :

condition ? statement if true : statement if false

.. literalinclude:: /IT/sources/js/react/ConditionalRendering/Conditional3.js

Nous avons mis ce code dans un component Conditional, mais le meilleur
endroit pour mettre ce genre de code est dans le component App.
Car c'est dans la méthode render() qui est le plus approprié à dire
qu'un composant doit être executé ou pas.

Voici le code App.js et Conditional.js:

.. literalinclude:: /IT/sources/js/react/ConditionalRendering/App2.js
.. literalinclude:: /IT/sources/js/react/ConditionalRendering/Conditional4.js

		    
Conditional Rendering Part 2
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Un autre moyen que d'utiliser: condition ? statement if true :
statement if false est l'opérateur && (and):

Si à gauche de && est true alors ce qui est à droite est fait
(retourne false si à droite c'est false). Si à
gauche de && est faux alors ce qui est à droite est null ou n'est pas executé.

Prenons un exemple:

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPart2/App.js

.. image:: /IT/sources/js/react/ConditionalRenderingPart2/Capture.PNG
     :width: 350
     :align: center		    

Ce code affiche le nombre de message non lus. Quand il n'y pas de
message ce code affiche quand même quelque chose :

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPart2/App2.js

.. image:: /IT/sources/js/react/ConditionalRenderingPart2/Capture2.PNG
     :width: 350
     :align: center		    

Lorsqu'il n'y pas de message on ne souhaiterait pas non plus être
informé qu'il y 0 message (trop d'information tue
l'information). D'après ce que l'on vient de voir dans la leçon
précédente on peut écrire ceci comme cela:

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPart2/App3.js

.. image:: /IT/sources/js/react/ConditionalRenderingPart2/Capture3.PNG
     :width: 350
     :align: center

Qui n'affiche rien quand il y a zéro message.

On peut grâche à l'opérateur && réduire ce code comme cela:

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPart2/App4.js

.. image:: /IT/sources/js/react/ConditionalRenderingPart2/Capture4.PNG
     :width: 350
     :align: center

qui a le même résultat qu'avant.

En mettant trois messages on remarque que le message réapparaît avec
trois messages non lus. 

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPart2/App5.js

.. image:: /IT/sources/js/react/ConditionalRenderingPart2/Capture5.PNG
     :width: 350
     :align: center

	     
Conditional rendering Practice
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPractice/App1.js

Hints:

Pour faire cet exercice, il nous faudra en 1) un class-base component
et une méthode constructor. En 2) Il faudra un state avec une
propriété d'objet booléene, appelons-là isLoggedIn (true or
false). En 3) on ajoutera un even listener (onClick) et pour l'extra
challenge on utilisera du Conditional Rendering. On appliquera aussi
du Conditional Rendering au point 4).

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPractice/App2.js

Pour commencer il nous faut un class-based component car nous devons
utiliser state. On remplace function par App et on enlève les
parenthèses. Etant donné qu'il nous faudra introduire state nous
devrons avoir la méthode constructor() suivi de super(). On initialise
state qui est un objet avec une propriété isLoggedIn.

Donc voici pour les points 1) et 2)

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPractice/App3.js

Maintenant nous devons ajouter un bouton. Ensuite on ajoute un event
listner pour permettre à notre button d'effectuer une action. Une
méthode de classe nommée this.handClick est attribué à l'event
listner. Créons la méthode de classe handlClick. "Bindons" la dans
constructor(). Avant d'aller plus loin, il est bien de contrôler que
tout fonctionne jusque là. Mettons un console.log pour vérifier cela:

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPractice/App4.js

et le résultat affiche bien ce que l'on veut quand on clique sur le
bouton.

.. image:: /IT/sources/js/react/ConditionalRenderingPractice/Capture.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/ConditionalRenderingPractice/Capture2.PNG
     :width: 350
     :align: center

Ce que l'on souhaite maintenant faire c'est de basculer la propriété
isLoggedIn à true ou false suivant la donnée courante. On utilise
setState pour ce faire, et comme on veut définir state en fonction de
la valeur précédente, on utilisera une function. Pour afficher la
nouvelle valeur de state on placera dans le render() le texte sur le
bouton égale à l'inverse de isLoggedIn. On placera aussi un autre
texte suivant que l'on est connecté ou pas. Pour placer ces textes on
fera usage du Conditional Rendering : 

.. literalinclude:: /IT/sources/js/react/ConditionalRenderingPractice/App5.js

Et le résultat:		    

.. image:: /IT/sources/js/react/ConditionalRenderingPractice/Capture3.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/ConditionalRenderingPractice/Capture4.PNG
     :width: 350
     :align: center

On voit bien que lorsque on clique sur le bouton l'état change
impéccablement et le texte aussi.

Todo App - Phase 7
^^^^^^^^^^^^^^^^^^

Reprenons notre exercice de Todo. Dans cette exercice nous allons
appliquer un style lorsque la tâche a été effectuée. Comme mettre la
ligne en italique, grisée, et biffée.

On utilise pour cela du inline styling. En fonction de la valeur de
props.item.completed on choisira d'appliquer le style ou non. Voici le
code :

.. literalinclude:: /IT/sources/js/react/TodoApp-Phase7/TodoItem.js

Et un screenshot pour montrer le résultat :

.. image:: /IT/sources/js/react/TodoApp-Phase7/Capture.PNG
     :width: 350
     :align: center

	     
Fetching data from an API
^^^^^^^^^^^^^^^^^^^^^^^^^

Voici un lien pour l'explication de la comande fetch :

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

La commande fetch renvoie une promise. Pour l'explication de promise
voir le site suivant:

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

Dans cet exemple nous allons capturer les données de personnages du
film Star Wars. Un site existe et se trouve à l'adresse suivante:

https://swapi.dev


.. literalinclude:: /IT/sources/js/react/FetchingDataFromAnAPI/App1.js

.. image:: /IT/sources/js/react/FetchingDataFromAnAPI/Capture.PNG
     :width: 500
     :align: center		    
		    
Pour enregistrer les données reçue par fetch nous allons les mettre
dans state.

Voici le code pour ce faire:

.. literalinclude:: /IT/sources/js/react/FetchingDataFromAnAPI/App2.js

Et le résultat:

.. image:: /IT/sources/js/react/FetchingDataFromAnAPI/Capture2.PNG
     :width: 350
     :align: center

Pour informer l'utilisateur que les données sont en cours de
téléchargement on peut écrire un message d'information avec le code
suivant:

.. literalinclude:: /IT/sources/js/react/FetchingDataFromAnAPI/App3.js

Le téléchargement est ici tellement rapide que l'on a à peine le temps
de voir loading. Mais cela s'affiche correctement.

Forms Part 1
^^^^^^^^^^^^

Un peu de théorie avant de se plonger dans le vif du sujet:

https://reactjs.org/docs/forms.html


La saisie dans un formulaire avec React déclenche un événement
onChange qui modifie state après chaque caractère saisi. Pour
illustrer ceci faisons un exemple d'une simple saisie d'un input.


.. literalinclude:: /IT/sources/js/react/FormsPart1/App1.js

Pour voir chaque changement dans cette input box, on mettra un
déclencheur onChange dans input box. Donc chaque fois que l'on
changera la saisie dans l'input box on activera une fonction.
Le but étant de changer state à chaque caractère saisi. Donc on doit
prendre la valeur de input box et la passer à state. Pour l'instant
state n'a pas de propriété à changer, mettons en un maintenant.

.. literalinclude:: /IT/sources/js/react/FormsPart1/App2.js

Etant donné que l'on ne se soucie pas de la valeur précédente de state
on instanciera state de la manière suivante:

.. image:: /IT/sources/js/react/FormsPart1/Capture.PNG
     :width: 250
     :align: center
		    
et que doit-on mettre à la place des points d'interrogation?
On sait que lors de déclenchement d'événement il y des paramètre
prédéterminés qui sont transmis à la fonction. Nous allons donc mettre
le paramètre event à notre fonction:

.. image:: /IT/sources/js/react/FormsPart1/Capture2.PNG
     :width: 250
     :align: center

On trouve des informations importantes dans le paramètre event. Par
exemple, on peut accéder à la valeur de notre input box.	     

.. image:: /IT/sources/js/react/FormsPart1/Capture3.PNG
     :width: 350
     :align: center

event.target représente la source de l'événement déclenché ici c'est
l'input box. Donc notre state est vraiment le reflet de la valeur
saisie de notre input box.

pour voir la valeur de state mettons un h1 pour voir le résultat:

.. image:: /IT/sources/js/react/FormsPart1/Capture4.PNG
     :width: 350
     :align: center

On voit que rien de s'affiche. C'est parce que nous n'avons pas binder
notre handleChange. Il faut mettre la commande suivante dans le
constructor()

.. image:: /IT/sources/js/react/FormsPart1/Capture5.PNG
     :width: 350
     :align: center

Et maintenant on voit que ça fonctionne:

.. image:: /IT/sources/js/react/FormsPart1/Capture6.PNG
     :width: 350
     :align: center

Maintenant au lieu d'avoir qu'une seule valeur dans notre formulaire,
mettons en plusieurs:

.. literalinclude:: /IT/sources/js/react/FormsPart1/App3.js

.. image:: /IT/sources/js/react/FormsPart1/Capture7.PNG
     :width: 350
     :align: center

Le résultat n'est pas vraiment satisfaisant car il efface First Name
dès que l'on commence à tapez quelque chose dans Last Name.	     

Pour parer à celon nous pourrions très bien faire une fonction pour
chaque entrée d'un formulaire comme par exemple
handleChangeLastName. Mais cela ne sera pas très simple lorsque le
formulaire aura beaucoup de champs.

Au lieu de cela nous n'allons pas coder en dur firstName ici:

.. image:: /IT/sources/js/react/FormsPart1/Capture8.PNG
     :width: 350
     :align: center

Mais donner un nom de propriété à notre input box:

.. image:: /IT/sources/js/react/FormsPart1/Capture9.PNG
     :width: 350
     :align: center

et aussi apporter le changement suivant à notre fonction
handleChange():

.. image:: /IT/sources/js/react/FormsPart1/Capture10.PNG
     :width: 350
     :align: center

On voit que ça fonctionne bien:

.. image:: /IT/sources/js/react/FormsPart1/Capture11.PNG
     :width: 350
     :align: center

Encore une chose pour améliorer on ajoute value à notre input box:

.. image:: /IT/sources/js/react/FormsPart1/Capture12.PNG
     :width: 350
     :align: center

et lorsque la ligne devient longue on peut mettre chaque attribut sur
une ligne :

.. image:: /IT/sources/js/react/FormsPart1/Capture13.PNG
     :width: 350
     :align: center

De cette manière on force la value à ce qu'est state.


Une autre chose pour simplifier le déboggage et pour rendre plus
lisible le code:

.. image:: /IT/sources/js/react/FormsPart1/Capture14.PNG
     :width: 350
     :align: center	     

Et pour clore cette section le code de App.js en entier:

.. literalinclude:: /IT/sources/js/react/FormsPart1/App4.js

Forms Part 2
^^^^^^^^^^^^

Nous allons introduire maintenant les différents éléments utiles que
peuvent contenir les éléments de formulaires qui sont: 

- <textarea /> element
- <input type="checkbox" />
- <input type="radio" />
- <select> and <option> elements

textarea
''''''''

En html, textarea n'a pas de self closing tag comme input mais
comporte un closing tag:

::
   
   <textarea></textarea>
   

.. image:: /IT/sources/js/react/FormsPart2/Capture.PNG
     :width: 350
     :align: center	        

Que l'on peut étendre dans la page web. L'utilisateur a aussi la
possibilité de mettre un largeur et un hauteur fixe.

En React, il n'y a pas de closing tag. Ca reprend la même philosophie
que input et est plus consistent.

.. image:: /IT/sources/js/react/FormsPart2/Capture1.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPart2/Capture2.PNG
     :width: 350
     :align: center	     	     

input type= checkbox
''''''''''''''''''''

Il n'y pas de propriété value comme utilisé avec type text ou
textarea. Il faut penser que sa propriété est checked ou pas. Cela
veut dire que l'on va mettre un propriété checked:

.. image:: /IT/sources/js/react/FormsPart2/Capture3.PNG
     :width: 350
     :align: center	     	     

Et ceci va faire entrer la notion d'une propriété Bolean. Donc
checkbox maintiennent des valeurs booléennes dans state. Pour
l'exemple, mettons:

.. image:: /IT/sources/js/react/FormsPart2/Capture4.PNG
     :width: 350
     :align: center	     	     

Déclarons cette valeur dans state:

.. image:: /IT/sources/js/react/FormsPart2/Capture5.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPart2/Capture6.PNG
     :width: 350
     :align: center	     	     	     

On remarque que la page ne nous permet pas de déchecké. Ceci est
normal car nous avons mis la propriété à true par state. Pour pouvoir
être en mesure de déchecker on va rajouter la propriété onChange et un
name:

.. image:: /IT/sources/js/react/FormsPart2/Capture7.PNG
     :width: 350
     :align: center

et mettons un peu en forme:

.. image:: /IT/sources/js/react/FormsPart2/Capture8.PNG
     :width: 350
     :align: center

Maintenant la partie tricky: dans une input box on trace ce qui à été
tapez. Rappelez vous dans le handleChange on traçait par value pour la
mise à jour de state. Dans une check box il n'y a pas de value mais
une propriété checked et cette propriété va retourner soit vraie ou
false. Ce que nous aurons besoins pour maintenir notre handleChange,
c'est savoir si notre élément de notre formulaire est une checkbox ou
pas. Nous devrons tirer de event.target le type et checked:

.. image:: /IT/sources/js/react/FormsPart2/Capture9.PNG
     :width: 350
     :align: center

Parce que une checkbox n'a pas value nous ne pourrons pas executer le
code:

.. image:: /IT/sources/js/react/FormsPart2/Capture10.PNG
     :width: 350
     :align: center

mais nous voudrons changer [name] qui est friendly et lui assigner la
valeur checked:

.. image:: /IT/sources/js/react/FormsPart2/Capture11.PNG
     :width: 500
     :align: center

Et là nous pouvons déchecker:


.. image:: /IT/sources/js/react/FormsPart2/Capture12.PNG
     :width: 350
     :align: center

Pour enlever le warning pour textarea mettons aussi un handleChange: 

.. image:: /IT/sources/js/react/FormsPart2/Capture13.PNG
     :width: 350
     :align: center

	     
radio button
''''''''''''

Les bouton radio sont une combinaison entre input type text et input
type check box. Ce que l'on entend par là c'est qu'il va utiliser la
propriété value et la propriété checked.

Construisons deux boutons radios un pour female et un autre pour male: 

.. image:: /IT/sources/js/react/FormsPart2/Capture14.PNG
     :width: 350
     :align: center

On remarque que lorsque que Is friendly n'est pas coché on ne peut pas
activer ni pour Male ni pour Female. Ceci est dû au fait que l'on a
repris le state de isFriendly. Se qui provoque des comportemenents
étranges. Mettons à la place:

.. image:: /IT/sources/js/react/FormsPart2/Capture15.PNG
     :width: 350
     :align: center

Et déclarons:

.. image:: /IT/sources/js/react/FormsPart2/Capture16.PNG
     :width: 350
     :align: center

Voici le résultat:

.. image:: /IT/sources/js/react/FormsPart2/Capture17.PNG
     :width: 350
     :align: center

Le programme enregistre ces valeurs que l'on peut illustrer:

.. image:: /IT/sources/js/react/FormsPart2/Capture18.PNG
     :width: 350
     :align: center

et le résultat:

.. image:: /IT/sources/js/react/FormsPart2/Capture19.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPart2/Capture20.PNG
     :width: 350
     :align: center	     

Il est claire que du premier abord ceci paraît bien compliqué, ceci
n'a pas lieu d'être mémorisé, il suffit de reprendre des exemples. Il
existe un librairie Formik facilitant la tâche.

select box
''''''''''

React heureusement maintient la propriété value par exemple si l'on
veut une liste de notre couleur préférée:

.. image:: /IT/sources/js/react/FormsPart2/Capture21.PNG
     :width: 350
     :align: center

La valeur que l'on choisira dans option sera transmise à
state.favColor

Déclarons cette propriété dans state:

.. image:: /IT/sources/js/react/FormsPart2/Capture22.PNG
     :width: 350
     :align: center

mettons aussi handleChange et name pour être sûr que ça coïncide avec
notre propriété de state, les valeurs de options doivent être
remplies:

.. image:: /IT/sources/js/react/FormsPart2/Capture23.PNG
     :width: 350
     :align: center

et le résultat:	     

.. image:: /IT/sources/js/react/FormsPart2/Capture24.PNG
     :width: 350
     :align: center	     

Ce qui cool avec react c'est que tout les éléments peuvent être
activés par une seule fonction handlChange. Check box doit juste être
testée avec une condition if (ou ? ... : ...).

Pour le summit button, html5 gère ça très bien: quand il trouve button
dans un form il l'associera automatiquement à un summit button. Dès
que l'utilisateur appuiera sur ce bouton l'événment onSumit du
formulaire sera déclenché.

Voici le app.js:

.. literalinclude:: /IT/sources/js/react/FormsPart2/App.js

Forms Practice
^^^^^^^^^^^^^^

Voici un exercice sur les Forms: la consigne se trouve à l'intérieur
du fichier Apps.js

.. literalinclude:: /IT/sources/js/react/FormsPractice/App.js

Il y plusieurs manières d'aborder cet exercice.
Tout d'abord nous allons initialiser tout ce qu'il y a à l'intérieur
de state:


**Remarques:**

La propriété age mettons-la à 0 pour l'instant.
La location sera sous la propriété destination.
Une check box pour dietaryRestrictions. Il y aura en fait plusieurs
check boxes car on peut très bien être allergique à plusieurs
ingrédients. C'est pourquoi nous l'initialiserons avec un tableau. 

.. image:: /IT/sources/js/react/FormsPractice/Capture.PNG
     :width: 350
     :align: center

Maintenant que nous avons initialisé ce qu'il y a dans state, nous
allons remplir les éléments existant dans les input donnée dans le
fichier Apps.js faisant office de consigne.

Nous savons que nous aurons besoin d'une propriété name pour chaque
input et d'une value déterminée par state (this.state.???). Chaque
input sera aussi sujet au changement (onChange=...) qui appellera
probablement handleChange. Attention les trois figures suivantes le
nom de handChange a mal été orthographié, c'est en fait handleChange.

.. image:: /IT/sources/js/react/FormsPractice/Capture2.PNG
     :width: 500
     :align: center

Pour plus de lisibilité mettons cela sur plusieurs lignes:

.. image:: /IT/sources/js/react/FormsPractice/Capture3.PNG
     :width: 350
     :align: center

Attribuons maintenant à name les propriétés de state respectivement,
complétons aussi this.state. ... avec les mêmes noms:

.. image:: /IT/sources/js/react/FormsPractice/Capture4.PNG
     :width: 350
     :align: center

Avant que nous poursuivons par rajouter des éléments, occupons-nous de
handleChange et ne pas oublier le bind:

.. image:: /IT/sources/js/react/FormsPractice/Capture5.PNG
     :width: 350
     :align: center

Descendons maintenant pour voir si ces trois inputs fonctionnenet
correctement:

.. image:: /IT/sources/js/react/FormsPractice/Capture6.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPractice/Capture7.PNG
     :width: 350
     :align: center	     

Jusque-là tout à l'air fonctionner mais essayer d'initialiser la
propriété age à null et le navigateur grogne. Mettons la à un empty
string est ça a l'air mieux.

Occupons-nous de notre gender, il est bien de le mettre entre un
label.
On se rappelle radio button possède une value, name et une propriété
checked. Et celui-ci est un peu tricky lorsque celui-ci est male alors
il sera checked.   

.. image:: /IT/sources/js/react/FormsPractice/Capture8.PNG
     :width: 350
     :align: center

Copions ce bribe de code pour female:

.. image:: /IT/sources/js/react/FormsPractice/Capture9.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPractice/Capture10.PNG
     :width: 350
     :align: center

Parfait on peut sélectionner male ou female.

Mettons encore ceci à l'affichage de gender.

Occupons-nous de select box pour Destination.

select box contiendra 4 options car ce n'est pas une grande compagnie
aérienne.

Chaque option prendra une propriété value. Les valeurs de nos options
sont en fait les valeurs que state devrait être si une de ces options
a été choisie. Ce sont en fait nos différentes locations. Mettons ces
valeurs en minuscule pour que l'on soit consistent avec le reste. La
valeur value de select est la valeur choisie. Et comme les autres,
soyons sûr qu'il comporte un name qui match avec la propriété dans
state. Et comme d'habitude onChange. Et dans la partie display on met
la destination.

.. image:: /IT/sources/js/react/FormsPractice/Capture11.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPractice/Capture12.PNG
     :width: 350
     :align: center

On remarque que Germany est affiché dans la liste par défault et que
dans le display il ne s'affiche pas. Pour en fait sélectionner Germany
il faudra d'abord sélectionner un autre pays et séléctionner
Germany. Pour parer à ce défaut, on affichera par défault un autre
texte:

.. image:: /IT/sources/js/react/FormsPractice/Capture13.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/FormsPractice/Capture14.PNG
     :width: 350
     :align: center

Ok, nous avons gardé le plus difficile pour la fin et c'est nos
checked box. Souvenons-nous lors de l'initialisation de nos propriété
de state, nous avions mis un tableau vide pour dietaryRestrictions. En
fait il sera plus facille de créer un sous objet et une valeur
booléene pour chaque dietaryRestriction.

.. image:: /IT/sources/js/react/FormsPractice/Capture15.PNG
     :width: 350
     :align: center

Nous aurons donc trois check boxes. Englobons check box dans un
label. type sera à "checkbox", name à la valeur de notre propriété de
state comme isVegan, onChange l'événement déclenchant handleChange,
checked qui sera égal à une propriété nested. Le text de label sera
Vegan? Copions ceci et remplaçons avec les autres restrictions
culinaires.

.. image:: /IT/sources/js/react/FormsPractice/Capture16.PNG
     :width: 350
     :align: center

Vous noterez que nous ne sommes pas en mesure de checker ces
checkboxes. Les checkbox n'a pas de propriété value et handleChange ne
peut modifier que les propriétés value. Nous devons d'abord contrôler
si le type une checkbox, donc nous devons tirer de event: type et
checked. On ne peut pas simplement dire que ``[name]: checked``, car
nous avons choisi d'avoir un nested object. Pour une raison que je ne
saurai expliquer le concept de nested object doit être oublié. Mais
peut être une piste pourquoi ça ne marche pas c'est peut-être dû au
fait que changer un nested object les autres propriété de state ne se
mettent pas à jour. Comme workaround nous allons supprimé notre
subobject : dietaryRestrictions. Et mettre chaque élément comme une
propriété de state. 

.. image:: /IT/sources/js/react/FormsPractice/Capture17.PNG
     :width: 350
     :align: center

et modifions encore:

.. image:: /IT/sources/js/react/FormsPractice/Capture18.PNG
     :width: 350
     :align: center

et là ça a l'air de marcher:

.. image:: /IT/sources/js/react/FormsPractice/Capture19.PNG
     :width: 350
     :align: center

Complétons encore le display:

.. image:: /IT/sources/js/react/FormsPractice/Capture20.PNG
     :width: 350
     :align: center

On remarque que lorsque l'on coche restriction, React n'affiche pas de
boléen.

.. image:: /IT/sources/js/react/FormsPractice/Capture21.PNG
     :width: 350
     :align: center

On peut écrire le code suivant pour une bon affichage:

.. image:: /IT/sources/js/react/FormsPractice/Capture22.PNG
     :width: 350
     :align: center

et le résultat final :

.. image:: /IT/sources/js/react/FormsPractice/Capture23.PNG
     :width: 350
     :align: center

.. literalinclude:: /IT/sources/js/react/FormsPractice/App1.js
		    
	     
Container/Component Architecture
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Notre exemple d'avant possède beaucoup de ligne et il est pas facile
de trouver la bonne ligne. On voit qu'une partie s'occupe de la
display logique en particulier ce qu'il y dans le render. Une autre
partie contient les state et le business logique comme
handleChange. Il serait très judicieux de segmenter notre code en
partie comme la UI logique ou la rendering Logique et la Business
logique qui en fait commande  la rendering Logique. Le but c'est
d'avoir un component qui maintient state et la méthode qui update
state et un autre component dédié à UI logique ou presentation logique
appelé presentational component. Qui aura la seule tache de recevoir
props pour un affichage correcte.

Un petit lien pour lire:

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Analysons maintenant le code vu précédemment. Tout notre code est
maintenu dans un seul composant App. En réalité on veut que notre App
render notre form et que form fasse tout les formy things.
Créons un nouveau component appelé Form.js et copions tout le contenu
de App.js dans Form.js. Changeons le nom App en Form et export default
Form. Revenons dans App.js et importons Form. Comme Form s'occupe au
rendu de notre formulaire on peut en faire un functional component.

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture1.PNG
     :width: 350
     :align: center

Et l'on voit que notre app fonctionne toujours. On se rappelle que App
est comme une table des matières comportant par exemple un header,
main et un footer.

Pour l'instant nous avons tout dans Form. Nous allons créer un nouveau
component appelé FormComponent.js Pour plus de consistence renommons
Form.js en FormContainer.js et updatons App.js avec ce nom.

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture2.PNG
     :width: 350
     :align: center

Dans le FormContainer coupons tout la render logique. Ensuite dans le
component FormComponent rajoutons:

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture3.PNG
     :width: 350
     :align: center

et copions en-dessous ce que nous avons coupé.	     

On remarque que l'app ne fonctionne plus c'est parce que nous avons
coupé ce que qu'il y avait dans un class component dans un functionnal
component.

Nous avons ``this.state.firstName`` et ``this.handleChange`` cette
functionnal component n'a pas de handleChange méthode et n'a pas de
state. En fait elle va recevoir tout par props. Nous reviendrons dans
une minute pour fixer cela.

Dans notre FormContainer nous avons maintenant un render() vide. Ce
que nous allons faire c'est que FormContainer dedicate tout le UI
stuff au FormComponent. Donc à l'entente nous allons importer
FormComponent. Et render simplement <FormComponent />

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture4.PNG
     :width: 350
     :align: center

Bien entendu nous devrons faire passer tout un tas de props. Mais déjà
nous pouvons voir que la structure est devenue plus simple. Donc nous
devons faire passer state et handleChange. Passons d'abord
handleChange :

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture5.PNG
     :width: 350
     :align: center

Maintenant dans le composant FormComponent partout où il y
``this.handleChange`` nous devons le remplacer par
``props.handleChange``. 

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture6.PNG
     :width: 350
     :align: center

Pour state nous pourrions passez tout les propriétés par
``firstName={this.state.firstName`` etc... mais cela va rajouter plein
de ligne à la suite de ``<FormComponent``. Une autre option qui
s'offre à nous est d'utiliser un objet appelé ``data={this.state}``

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture7.PNG
     :width: 350
     :align: center

	     
et modifions FormComponent:

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture8.PNG
     :width: 350
     :align: center

remettons return() car nous l'avions couper dans FormContainer et
rajouter dans FormComponent: import React	     

Et l'app refonctionne.

Voici le fichier App.js:

.. literalinclude:: /IT/sources/js/react/ContainerComponentArchitecture/App.js

Voici le fichier FormContainer.js:

.. literalinclude:: /IT/sources/js/react/ContainerComponentArchitecture/FormContainer.js

Voici le fichier FormComponent.js:

.. literalinclude:: /IT/sources/js/react/ContainerComponentArchitecture/FormComponent.js

.. image:: /IT/sources/js/react/ContainerComponentArchitecture/Capture8.PNG
     :width: 350
     :align: center

Meme Generator Capstone Project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create the boilerplate to get React to render something on the screen
Render an <App /> component, which you'll need to create separately

Voici le fichier index.js:

.. literalinclude:: /IT/sources/js/react/MemeGeneratorCapstoneProject/index.js

Voici le fichier App.js:

.. literalinclude:: /IT/sources/js/react/MemeGeneratorCapstoneProject/App.js

Create 2 new components - Header and MemeGenerator Header will only
display things MemeGenerator will be calling to an API and holding on
to data Each should be in their own file of the same name. 


.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture1.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture2.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture3.PNG
     :width: 350
     :align: center	     

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture4.PNG
     :width: 350
     :align: center	     

Commençons à changer le header:

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture5.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture6.PNG
     :width: 350
     :align: center	     	     

Voilà c'est gentiment tout ce que l'on va apporter au component
Header. On remarque qu'il est responsive. 

Occupons-nous de MemeGenerator:

Initialize state to save the following data:

- top text
- bottom text
- random image (initialize with "http://i.imgflip.com/1bij.jpg")
 
.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture7.PNG
     :width: 350
     :align: center

We'll be using an API that provides a bunch of meme images.

Your task:
make an API call to "https://api.imgflip.com/get_memes" and save the
data that comes back (`response.data.memes`) to a new state property
called `allMemeImgs`. (The data that comes back is an array)

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture8.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture9.PNG
     :width: 350
     :align: center	     

Parfait cela nous renvoit un objet avec plusieurs propriété. Celle qui
va nous intéresser est l'url.

A la place de <h1>MEME GENERATOR SECTION</h1>, nous allons mettre un
controlled form. Voici l'énoncé de l'exercice:

Create 2 input fields, one for the topText and one for the
bottomText. Remember that these will be "controlled forms", so make
sure to add all the attributes you'll need for that to work

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture10.PNG
     :width: 350
     :align: center	     

Create the onChange handler method. It should update the corresponding
state on every change of the input box.

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture11.PNG
     :width: 350
     :align: center	     

Ne pas oublier le bind à placer dans constructor()

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture12.PNG
     :width: 350
     :align: center


La prochaine étape est placé à un endroit notre meme. Rappeler nous
recevons dans un tableau tout les meme que cet API possède. Et ce que
nous allons implanté c'est que lorsque l'utilisateur appuie sur le
bouton GEN, un meme est choisi au hasard. Pour l'afficher dans une air
en dessous. Nous allons construire cette air maintenant.	     

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture13.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture14.PNG
     :width: 500
     :align: center	     

Create a method that,when the "Gen" button is clicked, chooses one of
the memes from our àllMemeImgs` array at random and makes it so that
is the meme image that shows up in the bottom portion of our meme
generator site.

On pourrait très bien mettre un onClick sur notre button, mais comme
il est à l'intérieur d'un form, je préfère mettre un onSubmit sur le
form.

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture15.PNG
     :width: 350
     :align: center	     

Créons le handleSubmit avec even en paramètre because we don't prevent
the default parce que nous ne voulons pas toujours rafraîchir notre
page. (j'ai rien compris mais bon...). N'oublions pas de binder cette
nouvelle méthode. Décrivons les étapes de cette méthode:

- get a random int (index in the array)
- get the meme from that index
- set `randomImg` to the `.url` of the random item

 .. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture16.PNG
     :width: 350
     :align: center	     

Et en cliquant sur GEN une image aléatoire s'affiche

.. image:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Capture17.PNG
     :width: 500
     :align: center	     

Et les codes:

**MemeGenerator.js:**

.. literalinclude:: /IT/sources/js/react/MemeGeneratorCapstoneProject/MemeGenerator.js
		    
**Header.js:**

.. literalinclude:: /IT/sources/js/react/MemeGeneratorCapstoneProject/Header.js
		    
**style.css:**

.. literalinclude:: /IT/sources/js/react/MemeGeneratorCapstoneProject/style.css

		    
Writing Modern React Apps
^^^^^^^^^^^^^^^^^^^^^^^^^

Dans cette section nous allons voir comment écrire quelques lignes de
façon plus moderne.

En fait on peut écrire nos méthodes de classe en arrow function: par
exemple notre méthode handleChange: le changement à l'air très petit
mais nous permet de supprimer le bind. 

.. image:: /IT/sources/js/react/WritingModernReactApps/Capture1.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/WritingModernReactApps/Capture2.PNG
     :width: 350
     :align: center	     	     

Aussi on peut créer directement des variables de classe. Sans que l'on
ait à créer un constructor.

.. image:: /IT/sources/js/react/WritingModernReactApps/Capture3.PNG
     :width: 350
     :align: center

.. image:: /IT/sources/js/react/WritingModernReactApps/Capture4.PNG
     :width: 350
     :align: center	     

Voici quelques liens vers des nouveautés de React:

 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense -
   https://reactjs.org/blog/2018/10/23/react-v-16-6.html

   
Smiley Face
^^^^^^^^^^^

source : https://www.youtube.com/watch?v=2LhoCfjm8R4&t=15506s

.. image:: /IT/figures/react/SmileyFace/Capture1.PNG
     :width: 350
     :align: center	     


index.html

.. literalinclude:: /IT/sources/js/reactSmiley/index.html

index.js
		    
.. literalinclude:: /IT/sources/js/reactSmiley/index.js

Face.js

.. literalinclude:: /IT/sources/js/reactSmiley/Face.js

FaceContainer.js

.. literalinclude:: /IT/sources/js/reactSmiley/FaceContainer.js

BackgroundCircle.js

.. literalinclude:: /IT/sources/js/reactSmiley/BackgroundCircle.js

Eyes.js

.. literalinclude:: /IT/sources/js/reactSmiley/Eyes.js

Mouth.js

.. literalinclude:: /IT/sources/js/reactSmiley/Mouth.js

		    
Mouse Follower
^^^^^^^^^^^^^^

A circle that follows a circle.

source : https://www.youtube.com/watch?v=2LhoCfjm8R4&t=15506s

index.html

.. literalinclude:: /IT/sources/js/reactMouseFollower/index.html

index.js

.. literalinclude:: /IT/sources/js/reactMouseFollower/index.js
   
		    
   
Working with .xml
-----------------

JavaScript Tip: Loading XML Data Using Fetch

https://www.youtube.com/watch?v=0gON4MUdJE8

JavaScript Question: How do I Work with XML Data?

https://www.youtube.com/watch?v=Fkw_OlcLcwE


Good videos to learn
--------------------

2.3 HTTP Post Request with fetch() - Working with Data and APIs in JavaScript
https://www.youtube.com/watch?v=Kw5tC5nQMRY&t=443s

2.4 Saving to a Database - Working with Data and APIs in JavaScript
https://www.youtube.com/watch?v=xVYa20DCUv0

Read The Docs
=============

.. note::
   Nouveau: pour que **Read The Docs** puisse bien compiler il faut
   copier les trois fichiers .yaml, requirements.txt et conf.py depuis
   ce lien https://github.com/readthedocs/tutorial-template/tree/main 

dans le répertoire **windwaver** (projet) on a le fichier
**readthedocs.yalm** dont le contenu est le suivant:   
   
.. literalinclude:: /IT/sources/ReadTheDocs/readthedocs.yalm 

dans le répertoire **docs** on a le fichier **requirememts.txt** dont le
contenu est le suivant:		    
		    
.. literalinclude:: /IT/sources/ReadTheDocs/requirements.txt

dans le répertoire **source** on a le fichier **conf.py** suivant:		    		    
.. literalinclude:: /IT/sources/ReadTheDocs/conf.py		    
		    

   
Ce tutoriel montre comment mettre en ligne un document fait avec
**ReStructureText** en utilisant **Read The Docs** via **Github**.

Prérequis
---------

* **Anaconda**
* un éditeur de texte (**emacs**)
* un compte chez **Github** et l'installation sur PC (droits admin requis)
* un compte chez **Read The Docs** (RTD)

Méthode
-------

1. créer un répertoire avec comme nom le nom du projet dans cet
   exemple c'est ``windwaver``
2. dans ce répertoire créer un répertoire nommé ``docs``


#. ouvrir **Anaconda Prompt** (pas le powershell)
#. se déplacer dans le répertoire ``windwaver/docs``
#. tapez:
   
   ::
      
      sphinx-quickstart
      
#. répondre à la question **Seperate source ...** ``y``
   Comme ça les fichiers ``make.bat`` et ``Makefile`` seront seront séparés du
   répertoire ``_sources`` dans lequel seront nos fichiers (``.rst`` et le
   fichier ``config.py``)
#. ouvrir le fichier ``_sources/conf.py``
#. modifier la ligne ``html_theme = 'alabaster'`` par
   ``html_theme = 'sphinx_rtd_theme'`` 
#. ajouter la ligne suivante:``master_doc = 'index'`` sinon ça bug
   avec **Read The Docs** 
#. cliquer-droite sur le répertoire ``windwaver`` et choisir **Git Basch Here**
#. lancer la commande:

   ::

      git init
      
#. lancer la commande:

   ::

      git config --global user.name 'Wind Waver'
      
#. lancer la commande:

   ::

      git config --global user.email 'waverwind@gmail.com'
      
#. lancer la commande:

   ::

      git add .
      
#. lancer la commande:

   ::

      git status
      
#. lancer la commande:

   ::

      git commit -m 'premier changement'
	 
   où ``premier changement`` est le commentaire de la modification 
#. sur https://github.com créer un nouveau répertoire et nommer le
   ``windwaver`` 
#. copier et coller la commande (dans le **MINGW64**):

   ::

      git remote add origin https://github.com/windwaver/windwaver.git


#. copier et coller la commande:

   ::

      git push -u origin master
      
#. créer le fichier ``README``

   ::

      touch README.md
      
#. décrire dans ce fichier le projet (à éditer dans **emacs**). Pour
   la mise en page c'est du **Mark Down**
#. lancer la commande suivante:

   ::

      git add .
      
#. lancer:

   ::

      git commit -m 'rajout de readme'
      
#. ensuite:

   ::

      git push
      
#. sur https://readthedocs.org cliquer sur importer et faire un refresh
#. choisir le dossier ``windwaver``
#. cliquer sur build, cela va créer le site
#. éditer les différents fichiers
#. à chaque modification lancer les commandes suivante:

   ::

      git add .
      git commit -m 'commentaire de la modification'
      git push

#. attendre quelques seconde et rafraichir le site avec ``F5``

   
Permission denied
^^^^^^^^^^^^^^^^^

Il arrive parfois après la commande ``push -u...`` que le message
suivant s'affiche:

.. image:: /IT/figures/Permissions-Denied.PNG
    :scale: 100 %
    :align: center

Méthode pour réparer
''''''''''''''''''''

1. **touche windows** tapez *credential manager* (pour l'anglais) ou
   *gestionnaire d'identification* (pour le français)
   
   .. image:: /IT/figures/Credential-Manager.PNG
       :scale: 80 %
       :align: center

2. repérer  **GitHub** et cliquer sur ``remove``

   .. image:: /IT/figures/Credential-Manager-1.PNG
       :scale: 100 %
       :align: center

	       
Divers liens
------------

|lien9|

.. |lien9| raw:: html

   <a href="https://www.ericholscher.com/blog/2016/jul/1/sphinx-and-rtd-for-writers/" 
   target="_blank">ericholscher</a>
   

GitHub
======

* La branche **master** est la branche de production. C'est-à-dire que c'est
  la branche qui a la version qui tourne sans bug. 
* La branche **dev** est la branche de dévellopement c'est là que les
  contributeurs apportent leur dévelopement. (preProd)
* Les branches des contributeurs sont celles où les personnes
  développent leur programmes pour ensuite les merger sur la branche
  dev (ici la branche du contributeur c'est **devYDU**)
* Les branches **hotfix** sont les branches qui permettent de directement
  fixer des problèmes urgents sur la branche master.

  
.gitignore
----------

On indique dans ce fichier les éléments qui ne doivent pas être
"pusher". C'est souvent le résultat d'un programme comme par exemple
ce qui a dans le répertoire ``build``

On indiquera dans ce fichier, les éléments qui devront être ignorés
comme suit: 

::

   build/html
   build/latex
   
Ici on ne voudra pas que les répertoire ``html`` et ``latex`` soient
"pusher"".    
    

Déroulement
-----------
      
Merger et création des branches requises (mettre à jour son working repertory)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Voir d'abord les branches existantes:

#. Se mettre dans le **working directory** à l'aide du terminal ;
#. Faire un ``git pull``

* ``git log--graph`` (tapez q pour quitter)
* ou taper ``git gui`` et aller dans Repository -> Visualize All Branch History

   * Si la branche **dev** et **devYDU** existent:

     #. On synchronise ce qui a sur le server dans sont répertoire de
	travail, taper: ``git pull`` (si pas déjà fait)
     #. Se déplacer dans la branche dev, taper: ``git checkout 'dev'``
     #. On merge se qui a dans la branche **master** dans la branche
	**dev**: ``git merge 'master'`` (on se place dans répertoire cible
	et on précise le repertoire source à tirer vers soi, ici le
	répertoire source c'est **master**) Normalement la branche dev
	est à jour, mais si il existe des branches **hotfix** alors il
	faudra faire cette opération.  
     #. Se déplacer dans la branche de **devYDU**, taper: ``git
	checkout 'devYDU'`` 
     #. On merge se qui a dans la branche **dev** dans sa branche
	perso: ``git merge 'dev'`` (on se place dans répertoir cible
	et on précise le repertoire source à tirer vers soi, ici le
	répertoire source c'est **dev**)
	
     
   * Si les branches requises n'existent pas sur le serveur:

      #. On synchronise ce qui a sur le server dans son répertoire de
	 travail, taper: ``git pull``
      #. Créons notre branche perso en tapant: ``git branch 'devYDU'``
	 Ceci va créer une branche en local. 
      #. Ensuite on la met sur le server: ``git push`` comme la
	 branche n'existe pas encore git nous demande de lancer la
	 commande suivante: ``git push --set-upstream origin devYDU``
      #. Si besoin créer la branche **dev**: ``git branch 'dev'``
         Ceci va créer une branche en local. 
      #. Ensuite on la met sur le server: ``git push`` comme la
	 branche n'existe pas encore git nous demande de lancer la
	 commande suivante: ``git push --set-upstream origin dev``
      #. Une fois les branches requises créées, on fait les points de
	 la liste de ci-dessus (Si la branche **dev** et **devYDU**
	 existent) 
	 
   
Faire ses modifications dans la branche **devYDU**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Dès que les modifications ne présentent pas de bug, on va dire de prendre en compte les modifications à git, taper:

   #. ``git add .``
   #. ``git commit -m 'dire ce que l'on a changer'``

#. On va poussez les changements de la branche **devYDU** au server: ``git
   push`` ;

Mise en preProd (merger nos changements dans la branche **dev**)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   #. faire un ``git pull`` au cas si la branche **dev** aurait subi
      des modifs 
   #. Se déplacer dans la branche **dev**, taper: ``git checkout
      'dev'``
   #. ``git merge 'devYDU'``
   #. On pousse la branche **dev** sur le serveur: ``git push``   

Mise en prod (merger la branche **dev** dans la branche **master**)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Une fois que la branche **dev** a été testée et n'a pas de bug, il est
temps de la merger dans la branche **master**

   #. faire un ``git pull`` au cas si la branche **dev** aurait subi
      des modifs 
   #. Se déplacer dans la branche **master**, taper: ``git checkout
      'dev'``
   #. ``git merge 'dev'``
   #. On pousse la branche **master** sur le serveur: ``git push``   


      
Une bonne vidéo pour apprendre
------------------------------

Cliquer |lien10|


.. |lien10| raw:: html

  <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=1751s"
  target="_blank">ici</a>

  
Installation
------------

Cliquer |lien11|


.. |lien11| raw:: html

  <a href="https://git-scm.com/download/win/"
  target="_blank">ici</a>

Pour modifier un projet
-----------------------

1. créer un repertoire
2. clique-droite sur le répertoire et choisir ``git bash``

#.

   ::

     git init

#. 

   ::

      git config --global user.name 'Wind Waver'
      
#. 

   ::

      git config --global user.email 'waverwind@gmail.com'
      
#.

   ::

      git clone https://github.com/windwaver/windwaver.git

#.

   ::

      git pull

#.

   ::

      git remote add origin https://github.com/windwaver/windwaver.git

#.

   ::

      git push -u origin master

      
Petites applications
====================

Cette section présente des petites applications ou outils permettant
de faire des petites choses utiles.

GSview
------
.. _extraire une page d'un document pdf:

Extraction d'une page d'un document pdf
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1) ouvrir avec GSview
2) Fichier -> Convert
3) choisir la bonne page et mettre Type à pdfwrite.

.. _briss:
   
BRISS
-----
Cette application permet de rogner une figure pdf.

Touches racourcis :
^^^^^^^^^^^^^^^^^^^
+-+----------------------+
|l|pour loader un fichier|
+-+----------------------+
|c|pour rogner (crop)    |
+-+----------------------+

GIMP
----

Convertir une image en .eps
^^^^^^^^^^^^^^^^^^^^^^^^^^^
1) Fichier -> enregistrer sous
2) entrer le nom_fichier.eps


Convertir divers formats
------------------------

Convertir pdf en png
^^^^^^^^^^^^^^^^^^^^
Essayer PDF to PNG |pdftopng|

 .. |pdftopng| raw:: html

   <a href="https://pdf2png.com/"
   target="_blank">ici</a>
   

Convertir .rst en .tex
^^^^^^^^^^^^^^^^^^^^^^
Essayer pandoc |pendoc|

 .. |pendoc| raw:: html

   <a href="http://pandoc.org/try/?text=&from=rst&to=rst"
   target="_blank">ici</a>

Conversions du son
^^^^^^^^^^^^^^^^^^

CD -> mp3
'''''''''

* Avec Ubuntu 12.04, j'utilise ``asunder``, c'est un bon programme car
  il extrait directement les métadonnées du CD.  

* ``soundKonverter`` : on peut aussi utiliser ce programme. Astuce :
  copier/coller le contenu du CD sur le disque dur. 

  
Extraire une bande son
''''''''''''''''''''''

Pour couper (extraire/éditer) une bande son :
``Audacity``

PLEX
----

Remote access
^^^^^^^^^^^^^

.. image:: /IT/figures/PlexRemoteAccess.png
       :width: 500
       :align: center

Caméra de surveillance
======================

Enregistrement de la caméra sur mydlink
---------------------------------------

#. télécharger l'application sur windows
#. connecter avec le cable rj45
#. il ne faut pas activer le wifi tout faire avec le cable réseau
#. un fois que la caméra est visible avec l'app du smartphone
#. on peut activer le wifi de la caméra et entrer le mot de passe du
   réseau wifi
#. tester si en déconnectant le cable réseau, l'image est envoyée par
   le wifi

Paramétrer l'alerte par email
-----------------------------

#. se connecter avec le cable réseau tjrs sur linux
#. il faut changer l'ip de linux en tapant :
   ``sudo ifconfig eth0 192.168.0.1 netmask 255.255.255.0``

   .. image:: /IT/figures/CameraSurveillance/Capture2.png
    :width: 500
    :align: center

   on peut vérifier l'ip à tout moment en tapant ``ip a``
   on peut aussi vérifier tous les ip qui sont connecté sur le réseau
   local en tapant ``nmap -sn 192.168.1.0/24``
#. ouvrir firefox et se connecter à l'adresse 192.168.0.20
#. usr name : admin pwd: même que pour l'autre cam dl...
#. pour pouvoir être alarmé par email on ouvrira l'assistant de
   détection (wizard) il n'y a que par le wizard où l'on peut activer 
   l'alerte par email en tout cas pour 5222L. Entrer les données comme 
   suit: Password est celui de hotmail

   .. image:: /IT/figures/CameraSurveillance/Capture3.png
    :width: 500
    :align: center

   .. image:: /IT/figures/CameraSurveillance/Capture4.png
    :width: 500
    :align: center

   .. image:: /IT/figures/CameraSurveillance/Capture1.png
    :width: 500
    :align: center	    
   
#. Ne pas oublier d'indiquer la plage de détection on peut aussi le
   faire après-coups avec le smartphone.    	       
