#!/bin/bash
latex -shell-escape $1.tex
dvips -E -o mafigure.eps *.dvi
ps2epsi mafigure.eps mafigure_tmp.eps
mv mafigure_tmp.eps mafigure.eps
mv mafigure.eps $1.eps
epstopdf $1.eps
rm $1.eps
rm $1.aux
rm $1.dvi
rm $1.log
rm $1.out
rm $1.tex~
