=============
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

.. image:: /figures/Permissions-Denied.PNG
    :scale: 100 %
    :align: center

Méthode pour réparer
''''''''''''''''''''

1. **touche windows** tapez *credential manager* (pour l'anglais) ou
   *gestionnaire d'identification* (pour le français)
   
   .. image:: /figures/Credential-Manager.PNG
       :scale: 80 %
       :align: center

2. repérer  **GitHub** et cliquer sur ``remove``

   .. image:: /figures/Credential-Manager-1.PNG
       :scale: 100 %
       :align: center

	       
Divers liens
------------

|lien1|

.. |lien1| raw:: html

   <a href="https://www.ericholscher.com/blog/2016/jul/1/sphinx-and-rtd-for-writers/" 
   target="_blank">ericholscher</a>   
   
