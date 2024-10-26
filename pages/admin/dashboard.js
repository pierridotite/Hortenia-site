// pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../../lib/axiosInstance';
import PlantList from '../../components/admin/PlantList';
import ActionList from '../../components/admin/ActionList';
import TimelineList from '../../components/admin/TimelineList';
import { FaSpinner, FaLeaf, FaTasks, FaClock, FaSignOutAlt, FaChartBar } from 'react-icons/fa';

const AdminDashboard = () => {
  const [plants, setPlants] = useState([]);
  const [actions, setActions] = useState([]);
  const [timelines, setTimelines] = useState([]);
  const [activeTab, setActiveTab] = useState('plants');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Effectuez les appels API en parallèle
        const [plantsRes, actionsRes, timelinesRes] = await Promise.all([
          axiosInstance.get('/admin/plants'),
          axiosInstance.get('/admin/actions'),
          axiosInstance.get('/admin/timelines'),
        ]);

        setPlants(plantsRes.data);
        setActions(actionsRes.data);
        setTimelines(timelinesRes.data);

        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des données:', err);
        localStorage.removeItem('token');
        router.push('/admin/login');
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-green-50">
        <FaSpinner className="animate-spin text-green-600 text-4xl" />
        <span className="ml-4 text-xl text-green-600">Chargement...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Barre de navigation supérieure */}
      <nav className="bg-green-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <FaLeaf className="text-2xl mr-2" />
              <span className="font-semibold text-xl">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              <FaSignOutAlt className="mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Tableau de Bord Admin</h1>

        {/* Onglets de Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex items-center px-4 py-2 rounded-md focus:outline-none transition duration-200 ${
              activeTab === 'plants'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-100 shadow'
            }`}
            onClick={() => setActiveTab('plants')}
          >
            <FaLeaf className="mr-2" />
            Fiches de Plantes
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md focus:outline-none transition duration-200 ${
              activeTab === 'actions'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-100 shadow'
            }`}
            onClick={() => setActiveTab('actions')}
          >
            <FaTasks className="mr-2" />
            Fiches d'Actions
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md focus:outline-none transition duration-200 ${
              activeTab === 'timelines'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-100 shadow'
            }`}
            onClick={() => setActiveTab('timelines')}
          >
            <FaClock className="mr-2" />
            Timelines
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md focus:outline-none transition duration-200 ${
              activeTab === 'mixpanel'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-100 shadow'
            }`}
            onClick={() => setActiveTab('mixpanel')}
          >
            <FaChartBar className="mr-2" />
            Statistiques Application
          </button>
        </div>

        {/* Contenu des Onglets */}
        <div className="bg-white p-6 rounded-lg shadow">
          {activeTab === 'plants' && <PlantList plants={plants} setPlants={setPlants} />}
          {activeTab === 'actions' && <ActionList actions={actions} setActions={setActions} />}
          {activeTab === 'timelines' && <TimelineList timelines={timelines} setTimelines={setTimelines} />}
          {activeTab === 'mixpanel' && (
            <iframe
              src="https://eu.mixpanel.com/p/BWGJfAA55QYPW9c4s3pEgb"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
              title="Mixpanel Report"
            ></iframe>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
