// pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axiosInstance from '../../lib/axiosInstance';
import PlantList from '../../components/admin/PlantList';
import ActionList from '../../components/admin/ActionList';
import TimelineList from '../../components/admin/TimelineList';

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

        console.log('Plantes:', plantsRes.data);
        console.log('Actions:', actionsRes.data);
        console.log('Timelines:', timelinesRes.data);

        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des données:', err);
        localStorage.removeItem('token');
        router.push('/admin/login');
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord Admin</h1>
      
      {/* Onglets de Navigation */}
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-4 py-2 rounded-md focus:outline-none ${activeTab === 'plants' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 shadow'}`} 
          onClick={() => setActiveTab('plants')}
        >
          Fiches de Plantes
        </button>
        <button 
          className={`px-4 py-2 rounded-md focus:outline-none ${activeTab === 'actions' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 shadow'}`} 
          onClick={() => setActiveTab('actions')}
        >
          Fiches d'Actions
        </button>
        <button 
          className={`px-4 py-2 rounded-md focus:outline-none ${activeTab === 'timelines' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 shadow'}`} 
          onClick={() => setActiveTab('timelines')}
        >
          Timelines
        </button>
      </div>

      {/* Contenu des Onglets */}
      <div className="bg-white p-6 rounded-lg shadow">
        {activeTab === 'plants' && <PlantList plants={plants} setPlants={setPlants} />}
        {activeTab === 'actions' && <ActionList actions={actions} setActions={setActions} />}
        {activeTab === 'timelines' && <TimelineList timelines={timelines} setTimelines={setTimelines} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
