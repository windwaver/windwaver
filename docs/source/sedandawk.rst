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
