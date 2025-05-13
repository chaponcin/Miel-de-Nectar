import { useState } from "react";

// Données de test
const commandesFictives = [
  {
    id: 1,
    nom: "Dupont Jean",
    produit: "Miel 250g",
    quantite: 3,
    datePaiement: "2025-05-12",
  },
  {
    id: 2,
    nom: "Martin Sophie",
    produit: "Miel 500g",
    quantite: 2,
    datePaiement: "2025-05-11",
  },
  {
    id: 3,
    nom: "Durand Alice",
    produit: "Miel Lavande 250g",
    quantite: 1,
    datePaiement: "2025-05-10",
  },
];

function Admin() {
  const [commandes, setCommandes] = useState(commandesFictives);

  const handleConfirmer = (id) => {
    alert(`Commande ${id} confirmée`);
    // Exemple : appel à ton backend ici
  };

  const handleAnnuler = (id) => {
    setCommandes((prev) => prev.filter((commande) => commande.id !== id));
  };

  return (
    <div className="pt-[150px] px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-10">Admin - Commandes</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#808000] text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Nom & Prénom</th>
              <th className="py-3 px-4 text-left">Produit</th>
              <th className="py-3 px-4 text-left">Quantité</th>
              <th className="py-3 px-4 text-left">Payé le</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{commande.id}</td>
                <td className="py-2 px-4">{commande.nom}</td>
                <td className="py-2 px-4">{commande.produit}</td>
                <td className="py-2 px-4">{commande.quantite}</td>
                <td className="py-2 px-4">{commande.datePaiement}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => handleConfirmer(commande.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Confirmer
                  </button>
                  <button
                    onClick={() => handleAnnuler(commande.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Annuler
                  </button>
                </td>
              </tr>
            ))}
            {commandes.length === 0 && (
              <tr>
                <td colSpan="6" className="py-6 px-4 text-center text-gray-500">
                  Aucune commande.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
