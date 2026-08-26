# Accessibilité & Performance

Ces règles visent à optimiser l'accessibilité (a11y) et les performances (LCP/Core Web Vitals) du projet.

## Accessibilité (a11y)
- **Contraste** : Assurez-vous que le texte présente un rapport de contraste suffisant par rapport à l'arrière-plan (minimum 4.5:1 pour le texte normal).
- **Navigation au clavier** : Tous les éléments interactifs (liens, boutons) doivent être accessibles au clavier et posséder un indicateur visuel de focus clair (`:focus`).
- **Aria** : Utilisez les attributs `aria-*` si des éléments dynamiques ou complexes ne sont pas nativement sémantiques.

## Performance & SEO
- **Optimisation des Images** : Utilisez l'attribut `loading="lazy"` pour les images situées sous la ligne de flottaison (below the fold) afin de ne pas ralentir le LCP (Largest Contentful Paint).
- **SEO** : Assurez-vous que chaque page a un titre unique et une meta description descriptive.
