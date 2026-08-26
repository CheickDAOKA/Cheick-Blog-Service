---
name: audit-site
description: "À utiliser lorsque l'utilisateur demande de vérifier la conformité, l'accessibilité ou le SEO du site avant publication."
---

# Audit du Site (SEO & Accessibilité)

Cette compétence permet de réaliser une vérification automatique de base des fichiers du projet pour s'assurer qu'ils respectent les standards du projet.

## Procédure

1. **Vérification du HTML** :
   - Vérifier que toutes les balises `<img>` dans [`index.html`](file:///home/americanman/Desktop/Mon-blogprojet/index.html) possèdent un attribut `alt`.
   - S'assurer de la présence d'une seule balise `<h1>`.
   - Vérifier la présence des meta tags SEO (description, og:title, og:description).

2. **Vérification du CSS** :
   - Inspecter [`style.css`](file:///home/americanman/Desktop/Mon-blogprojet/style.css) pour s'assurer qu'aucune règle importante (`!important`) n'est utilisée sans justification.
   - S'assurer que des variables CSS sont utilisées pour la palette de couleurs.

3. **Rapport** :
   - Présenter les résultats sous forme de tableau récapitulatif avec les points conformes et les points à corriger.
