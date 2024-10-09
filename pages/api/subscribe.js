// pages/api/subscribe.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Valider l'email ou tout autre traitement
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Vous pouvez ajouter une logique ici pour enregistrer l'email dans une base de données, un service tiers, etc.

        // Exemple de succès
        return res.status(200).json({ message: 'Subscription successful' });
    }

    // Répondre avec une méthode non autorisée si la requête n'est pas un POST
    return res.status(405).json({ message: 'Method not allowed' });
}
