---
name: security-audit
description: "À utiliser lorsque l'utilisateur demande de vérifier la sécurité du projet, de rechercher des vulnérabilités ou de sécuriser le code."
---

# Audit de Sécurité du Projet

Cette compétence définit les étapes pour identifier les vulnérabilités courantes (XSS, clés d'API exposées, dépendances obsolètes, etc.) et sécuriser le projet.

> [!IMPORTANT]
> **RÈGLE CRUCIALE DE PERMISSION** : L'agent n'est pas autorisé à modifier le code source ou à appliquer des correctifs de sécurité de manière autonome. Vous devez obligatoirement lister les vulnérabilités trouvées, expliquer les risques associés, proposer les solutions de correction, puis **demander explicitement la permission de l'utilisateur** avant de modifier le moindre fichier.

## Procédure d'audit

1. **Recherche de failles XSS (Cross-Site Scripting)** :
   - Inspecter les fichiers JavaScript (ex: [script.js](file:///home/americanman/Desktop/Mon-blogprojet/script.js)) pour repérer l'utilisation d'instructions potentiellement dangereuses comme `innerHTML`, `outerHTML`, `document.write()`, ou `eval()`.
   - S'assurer que les données provenant d'entrées utilisateur ou d'URLs sont correctement assainies ou insérées via `textContent`.

2. **Détection de fuites de secrets (Secrets Leaks)** :
   - Parcourir l'ensemble du projet à la recherche de clés d'API (Google Maps, Firebase, Stripe, etc.), de jetons d'accès ou de mots de passe codés en dur.

3. **Intégrité des ressources tierces (SRI)** :
   - Vérifier que toutes les balises `<script>` ou `<link>` important des bibliothèques externes (ex: Bootstrap, FontAwesome, Google Fonts) utilisent des connexions sécurisées HTTPS et, idéalement, l'attribut d'intégrité `integrity` (Subresource Integrity).

4. **Configuration et Référencement** :
   - Vérifier les directives du fichier [robots.txt](file:///home/americanman/Desktop/Mon-blogprojet/robots.txt) et du fichier [sitemap.xml](file:///home/americanman/Desktop/Mon-blogprojet/sitemap.xml).

## Procédure de correction

1. Présenter le rapport détaillé des failles identifiées à l'utilisateur.
2. Expliquer les étapes de correction pour chaque faille.
3. Demander : *"Souhaitez-vous que j'applique la correction pour la faille [Nom de la faille] ?"*
4. Ne modifier le code qu'après avoir reçu un accord écrit explicite (ex: "Oui", "Fais-le").
