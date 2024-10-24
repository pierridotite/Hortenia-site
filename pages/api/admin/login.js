// pages/api/admin/login.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Exemple simple : vérification d'email/mot de passe
      if (email === 'admin@example.com' && password === 'password') {
        res.status(200).json({ token: 'fake-jwt-token' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  