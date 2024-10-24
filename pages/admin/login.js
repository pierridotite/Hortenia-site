// pages/admin/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../../lib/axiosInstance'; // Import de l'instance Axios

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page
    try {
      console.log('email:', email);
      console.log('password:', password);
      const response = await axiosInstance.post('/admin/login', { email, password }); // Appel de l'API
      console.log('response:', response); // Log de la réponse API
      localStorage.setItem('token', response.data.token); // Stocker le token JWT
      router.push('/admin/dashboard'); // Rediriger vers le tableau de bord admin
    } catch (err) {
      console.error('Erreur lors de la connexion', err); // Log en cas d'échec
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Connexion Admin</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Mot de passe"
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default AdminLogin;
