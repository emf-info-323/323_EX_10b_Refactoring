# Refactoring : de la programmation impérative à la programmation fonctionnelle

## Objectif

Refactoriser un programme JavaScript en utilisant `filter()`, `map()` et `reduce()`, sans changer le résultat affiché.

## Programme de départ

Le fichier `ex10.js` contient un script impératif qui sélectionne les ventes payées, calcule leur montant et le chiffre d’affaires total, puis affiche le résultat dans la page.

## Travail demandé

Créez une fonction pure `analyserVentes(ventes)` qui reçoit le tableau des ventes en paramètre et qui retourne un objet de la forme suivante :

```javascript
{
    lignes: [
        "Clavier : 100 CHF",
        "Écran : 250 CHF",
        "Casque : 150 CHF"
    ],
    chiffreAffaires: 500
}
```

À l’extérieur de la fonction, appelez `analyserVentes(ventes)` et utilisez son résultat pour afficher le bilan dans la page. Assemblez les lignes avec `join("\n")` et affectez le texte à `document.getElementById("resultat").textContent`.

## Contraintes

- Aucune boucle `for`, `while` ou `forEach()`.
- Aucune variable déclarée avec `let` ou `var`.
- Aucune modification du tableau `ventes` ni de ses objets.
- Aucun accès au DOM ni affichage dans `analyserVentes()` : cette fonction doit uniquement calculer et retourner son résultat.
- Conservez le HTML et les données de départ.

## Résultat attendu dans la page

```text
Clavier : 100 CHF
Écran : 250 CHF
Casque : 150 CHF
Total : 500 CHF
```

Vérifiez également votre fonction avec un tableau vide et avec un tableau ne contenant que des ventes non payées. Dans les deux cas, elle doit retourner `{ lignes: [], chiffreAffaires: 0 }` et la page doit afficher un total de 0 CHF sans ligne de vente. Rétablissez ensuite les données de départ.

## Questions de réflexion

1. Quelles variables le programme impératif modifie-t-il ? 
2. Modifie-t-il le tableau `ventes` ou ses objets ?

