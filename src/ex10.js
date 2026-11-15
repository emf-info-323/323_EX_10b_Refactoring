        const ventes = [
            { produit: "Clavier", quantite: 2, prixUnitaire: 50, payee: true },
            { produit: "Souris", quantite: 3, prixUnitaire: 20, payee: false },
            { produit: "Écran", quantite: 1, prixUnitaire: 250, payee: true },
            { produit: "Casque", quantite: 2, prixUnitaire: 75, payee: true },
            { produit: "Webcam", quantite: 1, prixUnitaire: 80, payee: false }
        ];

        // Traitement impératif à refactoriser.
        let chiffreAffaires = 0;
        const lignes = [];

        for (const vente of ventes) {
            if (vente.payee) {
                const montant = vente.quantite * vente.prixUnitaire;
                chiffreAffaires += montant;
                lignes.push(`${vente.produit} : ${montant} CHF`);
            }
        }

        // Affichage : à conserver à l’extérieur de la fonction pure.
        document.getElementById("resultat").textContent =
            lignes.join("\n") + "\nTotal : " + chiffreAffaires + " CHF";