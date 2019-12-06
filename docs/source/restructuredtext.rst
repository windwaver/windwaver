reStructuredText
================

Installation
------------
1) installer Anaconda
2) installer VS code

   
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

5) tapez dans le terminal : ::

     D:\tmp\sphinxTxt>make html

6) ouvrir Visual Studio Code
7) ouvrir le répertoire du projet et non le fichier .rst (File -> Open Folder)
8) il se peut que l'on soit demandé à selectionner le ``conf.py``,
   selectionnez celui qui se trouve dans le répertoire du projet
9) pour ouvrir la prévisualisation cliquer sur le symbole afficher sur
   la figure ci-dessous. Sinon ouvrir le html dans un explorateur qui
   se trouve dans le répertoire _build -> html
   
.. image:: /figures/IconePrevisualisation.png
   :alt: cette image montre où l'on doit cliquer pour ouvrir la
	 fenêtre de prévisualisation
	 
10) pour l'édition, j'utilise emacs, ouvrir le fichier ``index.rst``

    
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

|lien0|

.. |lien0| raw:: html

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

Créer un répertoire nommé ``figures`` au même endroit où il y a le
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

  .. literalinclude:: /sources/exemple_graphique01.py

Ce qui donnera :

.. literalinclude:: /sources/exemple_graphique01.py

		    
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

1) |lien1|

.. |lien1| raw:: html

   <a href="http://python.physique.free.fr/aide/Partie1.html"
   target="_blank">python.physique</a>

2) |lien2|

.. |lien2| raw:: html

   <a href="https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html"
   target="_blank">thomas-cokelaer</a>

3) |lien3|

.. |lien3| raw:: html

   <a href="http://www.sphinx-doc.org/en/master/usage/quickstart.html"
   target="_blank">sphinx-doc</a>

4) |lien4|

.. |lien4| raw:: html

   <a href="https://draft-edx-style-guide.readthedocs.io/en/latest/ExampleRSTFile.html#id15"
   target="_blank">draft-edx-guide</a>

5) |lien5|

.. |lien5| raw:: html

   <a href="https://www.complang.tuwien.ac.at/doc/python3-docutils/docs/ref/rst/restructuredtext.html"
   target="_blank">complang</a>

6) |lien6|

.. |lien6| raw:: html

   <a href="http://docutils.sourceforge.net/rst.html"
   target="_blank">docutils.sourceforge</a> 
