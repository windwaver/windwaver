IT
***

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

.emacs
------
Le nom de ce fichier n'a pas de préfixe, il a juste un suffixe
(extension) qui est ``.emacs`` Il faut le copier dans ``home/yd``

Pour éditer le .emacs ou le créer au bon emplacement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::
   
  C-f ~/.emacs
  
Pour ne pas être embêté par l'affichage des accents
---------------------------------------------------
Je préfère encoder en ``UTF-8``. Pour cela j'insère ce bloc de code
dans le .emacs.

::

  (set-language-environment 'utf-8)
  (set-terminal-coding-system 'utf-8)
  (set-keyboard-coding-system 'utf-8)
  (set-language-environment 'utf-8)
  (prefer-coding-system 'utf-8)

Si le défaut persiste, on peut essayer les méthodes suivante pour 
enlever remettre les accents.

Méthode 1
^^^^^^^^^

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
^^^^^^^^^

1) ::

    M-x revert-buffer-with-coding-system
    
2) choisir utf-8 ou latin-1
   
Méthode 3
^^^^^^^^^

Si des accents s'affichent dans TeXworks malgré tous les packages et
l'encodage UTF-8 réglés correctement (cela m'ai arrivé lors d'un
copier-coller du contenu de Outlook dans emacs.)

1) copier le contenu du fichier.tex dans un bloc note
2) enregistrer sous encodage UTF-8

Cela devrait fonctionner.

Méthode 4
^^^^^^^^^
You can also mark the entire file with C-x h and then try M-x
recode-region. It will ask you for Text was really in and But was
interpreted as. For the first file in your question, it looks like it
should be latin-1 and utf-8, and for the second example it should
probably be the other way around, utf-8 and latin-1. 

After you got it right, you can choose which coding system to save the
file with using M-x set-buffer-file-coding-system (or C-x C-m f for
short).

copier/coller sans toujours à répondre à la même question du coding
-------------------------------------------------------------------

Pour pouvoir copier/coller depuis windows et pour pas que emacs
demande à chaque fois le format du coding, insérer la ligne suivante
dans fichier .emacs.

::
   
  (setq selection-coding-system 'compound-text-with-extensions)

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
| C-M-a              | début d'environnement                         |
+--------------------+----------------------------------------------+
| C-M-e              | fin d'environnement                           |
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

1) afficher le menu : ::
     
        M-x menu bar-mode
    
2) Command -> TeXing Options -> Use XeTeX engine
   

LaTeX
=====

Installation LaTex, Emacs et auxtex sous Linux
----------------------------------------------

1. télécharger la dernière version de ``tex-live`` sur le site
   officiel
   1. télécharger le .iso
   2. copier les dossiers sur le bureau
   3. écrire dans un terminal :
      ::
	 perl install-tl
   4. I
   5. ``etc/environement``, modifier le fichier pour que ça ressemble
      à ceci :
      ::
	 PATH="/usr/local/texlive/2016/bin/i386-linux:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games"
	 MANPATH="/usr/local/texlive/2016/texmf/doc/man" INFOPATH="/usr/local/texlive/2016/texmf/doc/info"
   .. note::
      changer si nécessaire 2016
2. installer emacs avec le synaptique

#. installer auxtec avec le synap
#. copier .emacs dans yd
#. pour que auxtex et emac communique entre eux, il faut rajouter 
  ces lignes dans le .emacs (c'est déjà fait)~:
  ::
    (require 'tex-site)
    (add-hook 'LaTeX-mode-hook 'turn-on-reftex)
    (setq reftex-plug-into-AUCTex t)
    (global-font-lock-mode t)
Tout ceci est tirer du site
https:\\www.math.purdue.edu/~dvb/xdvi.html} pour que le script pour la
conversion des Figures PSTicks fonctionne, il faut rajouter (dans le
script) -shell-escape après la commande
latex. (ex. latex -shell-escape 1.tex)


Redessiner sur une image / figure avec psTricks
-----------------------------------------------

Sur un pdf :
^^^^^^^^^^^^

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

1. installer `sphinx-intl`

  ::

   $ pip install sphinx-intl

2. rajouter ces lignes dans le `conf.py`

  ::

   locale_dirs = ['locale/']   # path is example but recommended.
   gettext_compact = False     # optional.

3.

  ::

   make gettext

4. génération des fichiers `po` (dans le cas suivant pour le japonais) 

  ::

   sphinx-intl update -p _build/gettext -l de -l ja

 sitôt fait, le fichier `po` se trouve dans le répertoire
 ./locale/ja/LC_MESSAGE`  

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
   Prompt`

  ::

   > Set-Item env:SPHINXOPTS "-D language=ja"
   > .\make.bat html
   

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

Read The Docs
=============

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
