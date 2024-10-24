// components/admin/TimelineList.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance';

const TimelineList = () => {
  const [timelines, setTimelines] = useState([]);
  const [editingTimeline, setEditingTimeline] = useState(null);
  const [form, setForm] = useState({
    id_plante: '',
    nom_plante: '',
    id_action: '',
    offset_jours: '',
    condition: '',
    phase: '',
    notes: ''
  });

  // Fonction pour gérer la sélection de phase (Numéro Unique)
  const handlePhaseChange = (e) => {
    setForm({
      ...form,
      phase: e.target.value
    });
  };

  // Fonction pour gérer l'édition d'une timeline
  const handleEdit = (timeline) => {
    setEditingTimeline(timeline);
    setForm({
      id_plante: timeline.id_plante || '',
      nom_plante: timeline.nom_plante || '',
      id_action: timeline.id_action || '',
      offset_jours: timeline.offset_jours ? timeline.offset_jours.join(', ') : '',
      condition: timeline.condition || '',
      phase: timeline.phase !== undefined ? timeline.phase.toString() : '',
      notes: timeline.notes || ''
    });
  };

  // Fonction pour sauvegarder les modifications d'une timeline existante
  const handleSave = async () => {
    try {
      // Validation de base
      if (!form.id_plante.trim()) {
        alert('L\'ID de la plante est requis.');
        return;
      }

      if (!form.nom_plante.trim()) {
        alert('Le nom de la plante est requis.');
        return;
      }

      if (!form.id_action.trim()) {
        alert('L\'ID de l\'action est requis.');
        return;
      }

      if (form.phase === '') {
        alert('Veuillez sélectionner une phase.');
        return;
      }

      // Construction de l'objet timeline mis à jour
      const updatedTimeline = {
        id_plante: form.id_plante.trim(),
        nom_plante: form.nom_plante.trim(),
        id_action: form.id_action.trim(),
        offset_jours: form.offset_jours
          ? form.offset_jours.split(',').map(item => parseInt(item.trim()))
          : [],
        condition: form.condition.trim(),
        phase: parseInt(form.phase, 10),
        notes: form.notes.trim()
      };

      // Appel API pour mettre à jour la timeline sur le backend avec axiosInstance
      const response = await axiosInstance.put(`/admin/timelines/${editingTimeline._id}`, updatedTimeline);

      // Mise à jour de la liste des timelines dans le frontend
      setTimelines(timelines.map(t => t._id === editingTimeline._id ? response.data : t));

      // Réinitialisation de l'état d'édition et du formulaire
      setEditingTimeline(null);
      setForm({
        id_plante: '',
        nom_plante: '',
        id_action: '',
        offset_jours: '',
        condition: '',
        phase: '',
        notes: ''
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la timeline:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  // Fonction pour ajouter une nouvelle timeline
  const handleAdd = async () => {
    try {
      // Validation de base
      if (!form.id_plante.trim()) {
        alert('L\'ID de la plante est requis.');
        return;
      }

      if (!form.nom_plante.trim()) {
        alert('Le nom de la plante est requis.');
        return;
      }

      if (!form.id_action.trim()) {
        alert('L\'ID de l\'action est requis.');
        return;
      }

      if (form.phase === '') {
        alert('Veuillez sélectionner une phase.');
        return;
      }

      // Construction de l'objet nouvelle timeline
      const newTimeline = {
        id_plante: form.id_plante.trim(),
        nom_plante: form.nom_plante.trim(),
        id_action: form.id_action.trim(),
        offset_jours: form.offset_jours
          ? form.offset_jours.split(',').map(item => parseInt(item.trim()))
          : [],
        condition: form.condition.trim(),
        phase: parseInt(form.phase, 10),
        notes: form.notes.trim()
      };

      // Appel API pour ajouter la timeline sur le backend
      const response = await axiosInstance.post('/admin/timelines', newTimeline);

      // Ajout de la nouvelle timeline à la liste dans le frontend
      setTimelines([...timelines, response.data]);

      // Réinitialisation du formulaire
      setForm({
        id_plante: '',
        nom_plante: '',
        id_action: '',
        offset_jours: '',
        condition: '',
        phase: '',
        notes: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la timeline:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  // Fonction pour supprimer une timeline
  const handleDelete = async (timeline) => {
    const confirmDelete = window.confirm(`Êtes-vous sûr de vouloir supprimer la timeline pour la plante "${timeline.nom_plante}" ?`);
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/admin/timelines/${timeline._id}`);

      // Mise à jour de la liste des timelines
      setTimelines(timelines.filter(t => t._id !== timeline._id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la timeline:', error);
      alert('Erreur lors de la suppression de la timeline.');
    }
  };

  // Fonction pour annuler l'édition
  const handleCancel = () => {
    setEditingTimeline(null);
    setForm({
      id_plante: '',
      nom_plante: '',
      id_action: '',
      offset_jours: '',
      condition: '',
      phase: '',
      notes: ''
    });
  };

  // Fonction pour récupérer les timelines depuis le backend
  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await axiosInstance.get('/admin/timelines');
        console.log('Timelines:', response.data);
        setTimelines(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des timelines:', error);
        alert('Erreur lors de la récupération des timelines.');
      }
    };

    fetchTimelines();
  }, []);

  // Grouper les timelines par ID de plante
  const groupedTimelines = timelines.reduce((groups, timeline) => {
    const idPlante = timeline.id_plante;
    if (!groups[idPlante]) {
      groups[idPlante] = [];
    }
    groups[idPlante].push(timeline);
    return groups;
  }, {});

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Timelines</h2>

      {/* Affichage des timelines groupées par ID de plante */}
      {Object.keys(groupedTimelines).map(idPlante => (
        <div key={idPlante} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Plante : {groupedTimelines[idPlante][0].nom_plante} (ID: {idPlante})</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID Action</th>
                  <th className="py-2 px-4 border-b">Phase</th>
                  <th className="py-2 px-4 border-b">Offset Jours</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupedTimelines[idPlante].map(timeline => (
                  <tr key={timeline._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{timeline.id_action}</td>
                    <td className="py-2 px-4 border-b">{timeline.phase}</td>
                    <td className="py-2 px-4 border-b">{timeline.offset_jours ? timeline.offset_jours.join(', ') : 'N/A'}</td>
                    <td className="py-2 px-4 border-b flex justify-center space-x-4">
                      <button 
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        onClick={() => handleEdit(timeline)}
                      >
                        Éditer
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(timeline)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Formulaire d'Édition ou d'Ajout */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          {editingTimeline ? `Éditer Timeline (${editingTimeline.nom_plante})` : 'Ajouter une Nouvelle Timeline'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Champs de Texte */}
          <div>
            <label className="block mb-2 font-medium">ID de la Plante</label>
            <input
              type="text"
              value={form.id_plante}
              onChange={(e) => setForm({ ...form, id_plante: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="ID de la Plante"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Nom de la Plante</label>
            <input
              type="text"
              value={form.nom_plante}
              onChange={(e) => setForm({ ...form, nom_plante: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Nom de la Plante"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">ID de l'Action</label>
            <input
              type="text"
              value={form.id_action}
              onChange={(e) => setForm({ ...form, id_action: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="ID de l'Action"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Phase (1-7)</label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(phase => (
                <label key={phase} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="phase"
                    value={phase.toString()}
                    checked={form.phase === phase.toString()}
                    onChange={handlePhaseChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{phase}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Offset Jours (séparés par des virgules)</label>
            <input
              type="text"
              value={form.offset_jours}
              onChange={(e) => setForm({ ...form, offset_jours: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Exemple: 0, 30, 60"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Condition</label>
            <textarea
              value={form.condition}
              onChange={(e) => setForm({ ...form, condition: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Conditions spécifiques"
              rows="3"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Notes"
              rows="3"
            ></textarea>
          </div>
        </div>

        {/* Boutons d'Action */}
        <div className="mt-6 flex space-x-4">
          {editingTimeline ? (
            <>
              <button 
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Sauvegarder
              </button>
              <button 
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Annuler
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Ajouter
              </button>
              <button 
                onClick={() => {
                  setForm({
                    id_plante: '',
                    nom_plante: '',
                    id_action: '',
                    offset_jours: '',
                    condition: '',
                    phase: '',
                    notes: ''
                  });
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Réinitialiser
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineList;
