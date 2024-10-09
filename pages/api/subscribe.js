export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({ message: 'Email est requis' });
      }
  
      // Logique pour stocker l'email (ex : base de données, service externe)
      // Pour cet exemple, nous allons simplement retourner un succès
  
      return res.status(200).json({ message: 'Inscription réussie' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
  }
  