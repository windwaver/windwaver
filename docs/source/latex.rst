LaTeX
=====

Redessiner sur une image / figure avec psTricks
-----------------------------------------------

Sur un pdf :
^^^^^^^^^^^^

1) convertir le pdf en .eps dans une console Unix en tapant :
   ::
      
    pdftops -eps fichierpdf.pdf
    
   **remarque** cette commande marche uniquement sur un pdf d'une page
   seulement, si le pdf contient plusieurs pages, il faudra au
   préalable extraire la page qui nous intéresse. 
   Pour ce faire, voir :ref:`extraire une page d'un document pdf` 
2) utiliser le fichier FicViePSTriBox.tex téléchargeable depuis |lien|
3) pour créer le pdf directement utiliser XeLaTeX (voir :ref:`Compilation
   avec XeLaTeX depuis emacs`)
4) pour visualiser le résultat après un C-c C-c, ouvrir le .tex avec
   TeXworks et choisir XeLaTeX cela va ouvrir une fenêtre pour voir le
   pdf créer
5) rogner le pdf avec Briss (voir :ref:`briss`) 

   .. |lien| raw:: html

     <a href="https://drive.google.com/open?id=1F_Ey-1fIYD9GFvTb9yd7bh3Y8u85pQoo"
     target="_blank">ici</a>   

   
Sur un print-screen avec psTricks :
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1) faire un print-screen (voir :ref:`print-screen`)
2) ouvrir GIMP
3) enregistrer sous .eps
4) utiliser le fichier FicViePSTriBox.tex situé |lien|
5) pour créer le pdf directement utiliser XeLaTeX (voir :ref:`Compilation
   avec XeLaTeX depuis emacs`)
6) pour visualiser le résultat après un C-c C-c, ouvrir le .tex avec
   TeXworks et choisir XeLaTeX cela va ouvrir une fenêtre pour voir le
   pdf créer
7) rogner le pdf avec Briss (voir :ref:`briss`) 
