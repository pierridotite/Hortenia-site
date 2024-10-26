// components/admin/SendNotifications.js
import { useState } from 'react';
import axiosInstance from '../../lib/axiosInstance'; // votre axios configuré pour accéder à l'API backend
import { FaPaperPlane } from 'react-icons/fa';

const SendNotifications = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendNotification = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setProgress(0);
    try {
      // Récupérer la liste des utilisateurs depuis la base de données
      const usersResponse = await axiosInstance.get('/users');
      const users = usersResponse.data;

      if (!users || users.length === 0) {
        setErrorMessage('Aucun utilisateur trouvé pour l\'envoi des notifications.');
        setLoading(false);
        return;
      }

      // Filtrer uniquement les tokens Expo Push des utilisateurs
      const notifications = users
        .filter(user => user.expoPushToken) // Assurez-vous que chaque utilisateur a un expoPushToken
        .map(user => ({
          to: user.expoPushToken,
          title: notificationTitle,
          body: notificationMessage,
        }));

      if (notifications.length === 0) {
        setErrorMessage('Aucun token Expo Push valide trouvé pour l\'envoi des notifications.');
        setLoading(false);
        return;
      }

      // Envoyer la liste des notifications via votre backend
      console.log('Envoi des notifications via le serveur backend...');
      console.log('Notifications:', notifications);
      const response = await axiosInstance.post('/NotificationSender', { notifications });

      if (response.status === 200) {
        setSuccessMessage('Notifications envoyées avec succès à tous les utilisateurs !');
      } else {
        throw new Error('Erreur lors de l\'envoi des notifications');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs ou de l\'envoi des notifications:', error);
      setErrorMessage('Erreur lors de l\'envoi de la notification. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Envoyer une Notification</h2>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="title">
            Titre de la Notification
          </label>
          <input
            id="title"
            type="text"
            value={notificationTitle}
            onChange={(e) => setNotificationTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Entrez le titre de la notification"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="message">
            Message de la Notification
          </label>
          <textarea
            id="message"
            value={notificationMessage}
            onChange={(e) => setNotificationMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Entrez le message de la notification"
          />
        </div>
        <button
          onClick={handleSendNotification}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition duration-200 hover:bg-green-700"
          disabled={loading}
        >
          {loading ? (
            <span>Envoi...</span>
          ) : (
            <>
              <FaPaperPlane className="mr-2" /> Envoyer Notification
            </>
          )}
        </button>
        {successMessage && <p className="text-green-700 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SendNotifications;
