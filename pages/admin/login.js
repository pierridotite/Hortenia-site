// pages/admin/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../../lib/axiosInstance'; // Import de l'instance Axios
import { FaSpinner, FaLock, FaEnvelope } from 'react-icons/fa'; // Import d'icônes

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // État pour le chargement
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page
    setLoading(true); // Début du chargement
    setError(''); // Réinitialise l'erreur
    try {
      const response = await axiosInstance.post('/admin/login', { email, password }); // Appel de l'API
      localStorage.setItem('token', response.data.token); // Stocker le token JWT
      router.push('/admin/dashboard'); // Rediriger vers le tableau de bord admin
    } catch (err) {
      console.error('Erreur lors de la connexion', err); // Log en cas d'échec
      setError('Email ou mot de passe incorrect');
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
        {/* Logo ou Icône */}
        <div className="flex justify-center mb-6">
          <FaLock className="text-green-600 text-4xl" />
        </div>
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Connexion Admin</h2>
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Erreur!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre email"
              className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          {/* Champ Mot de passe */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Entrez votre mot de passe"
              className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          {/* Bouton de soumission */}
          <button
            type="submit"
            className={`w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition duration-200 flex items-center justify-center ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Connexion...
              </>
            ) : (
              'Se connecter'
            )}
          </button>
        </form>
        {/* Liens supplémentaires */}
        <div className="mt-6 text-center">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="text-green-600 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
