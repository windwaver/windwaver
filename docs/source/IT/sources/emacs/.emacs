(set-language-environment 'utf-8)
(set-terminal-coding-system 'utf-8)
(set-keyboard-coding-system 'utf-8)
(set-language-environment 'utf-8)
(prefer-coding-system 'utf-8)

;; Pour envoyer les choses deletée à la poubelle
(setq delete-by-moving-to-trash t)

;; Changement de thème
(load-theme 'misterioso)

;; Langue par défaut et caractères accentués
 (setq current-language-environment "French")

;; Position et mise en forme de la fenêtre
(setq default-frame-alist'
	((top . 00)
	 (left . 00)
	 (width . 85)
	 (height . 48)))
(menu-bar-mode -1)
(tool-bar-mode -1)
(scroll-bar-mode -1)

;; Répondre 'y' plutôt que 'yes'.
(defalias 'yes-or-no-p 'y-or-n-p)

;; Pour que le curseur ne clignote plus
 (blink-cursor-mode 0)
;; Langue par défaut et caractère accentués
 (setq current-language-environment "French")

;; coupe les lignes au 72 ieme caractère
 (add-hook 'text-mode-hook 'turn-on-auto-fill)
 (defun auto-fill-hook ()
 auto-fill-mode 1)
 (setq fill-column 72)

;pas de beeep
(setq visible-bell 't)

;pas de message au démarrage
(setq inhibit-startup-message t)

;; Recherche non case-sensitive
 (setq case-fold-search t)

;; Afficher la parenthèse correspondante
 (require 'paren)
 (show-paren-mode t)

;; affiche date & heure
(display-time)
(setq display-time-24hr-format t)

;; ----------------------------------------------------------------------
;; COMMANDE AucTex / LaTex
;; ----------------------------------------------------------------------


;; correction orthographique
(autoload 'ispell-word "ispell" "Check the spelling of word in buffer." 't)
(autoload 'ispell-region "ispell" "Check the spelling of region." 't)
(autoload 'ispell-buffer "ispell" "Check the spelling of buffer." t)
(global-set-key (read-kbd-macro "M-$") 'ispell-word)
(setq ispell-dictionary "francais"
      ispell-skip-sgml t)
(autoload 'flyspell-mode "flyspell" "On-the-fly spelling checking" t)
(setq flyspell-default-dictionary "francais")

;; appelle de flyspell par f7 et f8 ispell-buffer
(global-set-key [f7] 'flyspell-mode)
(global-set-key [f8] 'ispell-buffer)


;; Sauvegarde des fichiers récemment ouverts + création d'un raccourci
;(add-to-list 'load-path "~/.emacs.d/lisp/recent")
;(require 'recentf)
;(recentf-mode 1)
;(defun recentf-open-files-compl ()
;  (interactive)
;  (let* ((all-files recentf-list)
;	 (tocpl (mapcar (function 
;			 (lambda (x) (cons (file-name-nondirectory x) x))) all-files))
;	 (prompt (append '("File name: ") tocpl))
;	 (fname (completing-read (car prompt) (cdr prompt) nil nil)))
;    (find-file (cdr (assoc-ignore-representation fname tocpl)))))
 
;(global-set-key "\C-x\C-l" 'recentf-open-files-compl)
 
;(require 'ido)
;(ido-mode t)
 
;; -----------------------------------------------------
;; CORRECTEUR ISPELL 
;; -----------------------------------------------------
 
;: Dictionnaire francais
;(setq-default ispell-program-name "aspell")
;(setq ispell-dictionary-alist
;      (cons
;       '("fr_FR-lrg" "[A-Za-zÀÂÆÇÈÉÊËÎÏÔÙÛÜàâçèéêëîïôùûü]"
;	 "[^A-Za-zÀÂÆÇÈÉÊËÎÏÔÙÛÜàâçèéêëîïôùûü]" "[-']" t nil "~list"
;	 iso-8859-1)
;       ispell-dictionary-alist)) 
 
;; Empèche Ispell de vérifier le contenu de certaines commandes 
;(setq ispell-tex-skip-alists
;      (list
;       (append (car ispell-tex-skip-alists)
;               '(("\\\\cite"            ispell-tex-arg-end)
;                 ("\\\\nocite"          ispell-tex-arg-end)
;                 ("\\\\includegraphics" ispell-tex-arg-end)
;                 ("\\\\figScale"         ispell-tex-arg-end)
;                 ("\\\\author"          ispell-tex-arg-end)
;                 ("\\\\ref"             ispell-tex-arg-end)
;                 ("\\\\eqref"             ispell-tex-arg-end)
;                 ("\\\\label"           ispell-tex-arg-end)
;                 ))
;       (cadr ispell-tex-skip-alists)))
 
;; Empèche Ispell de vérifier le contenu des citation natbib
;(eval-after-load "ispell"
;  '(let ((list (car ispell-tex-skip-alists)))
;     (add-to-list 'list '("\\\\cite[tp]" ispell-tex-arg-end))
;     (setcar ispell-tex-skip-alists list)))
 
 
;; -----------------------------------------------------
;; COMMANDES AucTeX / LaTeX
;; -----------------------------------------------------
 
;; Choix des programmes de visualition selon le fichier de sortie
;(setq TeX-output-view-style (quote (("^dvi$" "^pstricks$\\|^pst-\\|^psfrag$" "dvips %d -o && start %f") ("^dvi$" "." "xdvi %dS %d") ("^pdf$" "." "xpdf %o") ("^html?$" "." "start %o"))))  
;(setq TeX-view-style (quote (("^epsf$" "start %f") ("." "xdvi %dS %d"))))
 
;; Pour voir les les équations compilées directes dans  emacs
;(load "preview-latex.el" nil t t)
 
;; Quelques commandes additionnelles du mode LaTeX
;(add-hook 'LaTeX-mode-hook
;  (function
;    (lambda ()
;      (add-to-list 'TeX-command-list
;             (list "PDFLaTeX" "pdflatex %s.tex"
;                   'TeX-run-command nil t))
;      (add-to-list 'TeX-command-list
;             (list "Acroread" "acroread %s.pdf"
;                  'TeX-run-command nil t))
;      (add-to-list 'TeX-command-list
;             (list "XPDF" "xpdf %s.pdf"
;                   'TeX-run-command nil t))
;      (add-to-list 'TeX-command-list
;             (list "DVIPS" "dvips -o %s.ps %s.dvi"
;                   'TeX-run-command nil t))
;      (add-to-list 'TeX-command-list
;            (list "Clean" "rm %s.log %s.aux %s.out %s.idx"
;                   'TeX-run-command nil t))
;      (add-to-list 'TeX-command-list
;             (list "KghostView" "kghostview %s.pdf"
;                   'TeX-run-command nil t))
;      (TeX-PDF-mode)
;      ;gestion de la table matière et autre...
;      (reftex-mode)
;      ;; Corrrection à la volée syntaxique
;     (flyspell-mode)
;      ;; dictionnaire évitant les erreurs d'accents
;      (ispell-change-dictionary "francais")
;)))

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(package-selected-packages '(auctex)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
