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
