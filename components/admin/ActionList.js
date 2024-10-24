// components/admin/ActionList.js
import React, { useState } from 'react';
import axiosInstance from '../../lib/axiosInstance'

const ActionList = ({ actions, setActions }) => {
  const [editingAction, setEditingAction] = useState(null);
  const [form, setForm] = useState({
    nom: '',
    description: '',
    description_courte: '',
    duree: '',
    materiel: '',
    instructions: '',
    priorite: '',
    recurrences: 'aucune',
    repetition: '',
    temperature_min: '',
    temperature_max: '',
    meteo: '',
    saison: '',
    conditions_supplementaires: '',
    Phases: []
  });

  // Fonction pour gérer la sélection/désélection des phases
  const handlePhaseChange = (phase) => {
    if (form.Phases.includes(phase)) {
      setForm({
        ...form,
        Phases: form.Phases.filter(p => p !== phase)
      });
    } else {
      setForm({
        ...form,
        Phases: [...form.Phases, phase]
      });
    }
  };

  // Fonction pour gérer l'édition d'une action
  const handleEdit = (action) => {
    setEditingAction(action);
    setForm({
      nom: action.nom || '',
      description: action.description || '',
      description_courte: action.description_courte || '',
      duree: action.duree !== undefined && action.duree !== null ? action.duree.toString() : '',
      materiel: action.materiel ? action.materiel.join(', ') : '',
      instructions: action.instructions
        ? action.instructions.map(instr => `${instr.etape}. ${instr.description}`).join('\n')
        : '',
      priorite: action.priorite !== undefined && action.priorite !== null ? action.priorite.toString() : '3',
      recurrences: action.recurrences || 'aucune',
      repetition: action.repetition !== undefined && action.repetition !== null ? action.repetition.toString() : '',
      temperature_min: action.condition && action.condition.temperature_min !== undefined && action.condition.temperature_min !== null
        ? action.condition.temperature_min.toString()
        : '',
      temperature_max: action.condition && action.condition.temperature_max !== undefined && action.condition.temperature_max !== null
        ? action.condition.temperature_max.toString()
        : '',
      meteo: action.condition && action.condition.meteo ? action.condition.meteo : '',
      saison: action.condition && action.condition.saison ? action.condition.saison : '',
      conditions_supplementaires: action.condition && action.condition.conditions_supplementaires
        ? action.condition.conditions_supplementaires
        : '',
      Phases: Array.isArray(action.Phases) ? action.Phases.map(Number) : []
    });
  };

  // Fonction pour sauvegarder les modifications d'une action existante
  const handleSave = async () => {
    try {
      // Validation de base
      if (!form.nom.trim()) {
        alert('Le nom de l\'action est requis.');
        return;
      }

      if (form.Phases.length === 0) {
        alert('Veuillez sélectionner au moins une phase.');
        return;
      }

      // Construction de l'objet action mis à jour
      const updatedAction = {
        nom: form.nom.trim(),
        description: form.description.trim(),
        description_courte: form.description_courte.trim(),
        duree: form.duree ? parseInt(form.duree, 10) : null,
        materiel: form.materiel ? form.materiel.split(',').map(item => item.trim()) : [],
        instructions: form.instructions
          ? form.instructions.split('\n').map((line, index) => ({
              etape: index + 1,
              description: line.replace(/^\d+\.\s*/, '').trim()
            }))
          : [],
        priorite: form.priorite ? parseInt(form.priorite, 10) : 3, // Valeur par défaut 3
        recurrences: form.recurrences.trim(),
        repetition: form.repetition ? parseInt(form.repetition, 10) : null,
        condition: {
          temperature_min: form.temperature_min ? parseFloat(form.temperature_min) : null,
          temperature_max: form.temperature_max ? parseFloat(form.temperature_max) : null,
          meteo: form.meteo.trim(),
          saison: form.saison.trim(),
          conditions_supplementaires: form.conditions_supplementaires.trim()
        },
        Phases: form.Phases.map(Number)
      };

      // Appel API pour mettre à jour l'action sur le backend
      const response = await axiosInstance.put(`/admin/actions/${editingAction._id}`, updatedAction);

      // Mise à jour de la liste des actions
      setActions(actions.map(a => a._id === editingAction._id ? response.data : a));

      // Réinitialisation de l'état d'édition et du formulaire
      setEditingAction(null);
      setForm({
        nom: '',
        description: '',
        description_courte: '',
        duree: '',
        materiel: '',
        instructions: '',
        priorite: '',
        recurrences: 'aucune',
        repetition: '',
        temperature_min: '',
        temperature_max: '',
        meteo: '',
        saison: '',
        conditions_supplementaires: '',
        Phases: []
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'action:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  // Fonction pour ajouter une nouvelle action
  const handleAdd = async () => {
    try {
      // Validation de base
      if (!form.nom.trim()) {
        alert('Le nom de l\'action est requis.');
        return;
      }

      if (form.Phases.length === 0) {
        alert('Veuillez sélectionner au moins une phase.');
        return;
      }

      // Construction de l'objet nouvelle action
      const newAction = {
        nom: form.nom.trim(),
        description: form.description.trim(),
        description_courte: form.description_courte.trim(),
        duree: form.duree ? parseInt(form.duree, 10) : null,
        materiel: form.materiel ? form.materiel.split(',').map(item => item.trim()) : [],
        instructions: form.instructions
          ? form.instructions.split('\n').map((line, index) => ({
              etape: index + 1,
              description: line.replace(/^\d+\.\s*/, '').trim()
            }))
          : [],
        priorite: form.priorite ? parseInt(form.priorite, 10) : 3, // Valeur par défaut 3
        recurrences: form.recurrences.trim(),
        repetition: form.repetition ? parseInt(form.repetition, 10) : null,
        condition: {
          temperature_min: form.temperature_min ? parseFloat(form.temperature_min) : null,
          temperature_max: form.temperature_max ? parseFloat(form.temperature_max) : null,
          meteo: form.meteo.trim(),
          saison: form.saison.trim(),
          conditions_supplementaires: form.conditions_supplementaires.trim()
        },
        Phases: form.Phases.map(Number)
      };

      // Appel API pour ajouter l'action sur le backend
      const response = await axiosInstance.post(`/admin/actions/`, newAction);

      // Ajout de la nouvelle action à la liste
      setActions([...actions, response.data]);

      // Réinitialisation du formulaire
      setForm({
        nom: '',
        description: '',
        description_courte: '',
        duree: '',
        materiel: '',
        instructions: '',
        priorite: '',
        recurrences: 'aucune',
        repetition: '',
        temperature_min: '',
        temperature_max: '',
        meteo: '',
        saison: '',
        conditions_supplementaires: '',
        Phases: []
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'action:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  // Fonction pour supprimer une action
  const handleDelete = async (action) => {
    const confirmDelete = window.confirm(`Êtes-vous sûr de vouloir supprimer l'action "${action.nom}" ?`);
    if (!confirmDelete) return;

    try {
      // Appel API pour supprimer l'action sur le backend
      await axiosInstance.delete(`/admin/actions/${action._id}`);

      // Mise à jour de la liste des actions
      setActions(actions.filter(a => a._id !== action._id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'action:', error);
      alert('Erreur lors de la suppression de l\'action.');
    }
  };

  // Fonction pour annuler l'édition
  const handleCancel = () => {
    setEditingAction(null);
    setForm({
      nom: '',
      description: '',
      description_courte: '',
      duree: '',
      materiel: '',
      instructions: '',
      priorite: '',
      recurrences: 'aucune',
      repetition: '',
      temperature_min: '',
      temperature_max: '',
      meteo: '',
      saison: '',
      conditions_supplementaires: '',
      Phases: []
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Fiches d'Actions</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID action</th>
            <th className="py-2 px-4 border-b">Nom</th>
            <th className="py-2 px-4 border-b">Phases</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
            {actions.map((action) => (
              <tr key={action._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{action._id}</td>
                <td className="py-2 px-4 border-b">{action.nom}</td>
                <td className="py-2 px-4 border-b">
                  {action.Phases && action.Phases.length > 0
                    ? action.Phases.join(', ')
                    : 'N/A'}
                </td>
                <td className="py-2 px-4 border-b flex justify-center space-x-4">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    onClick={() => handleEdit(action)}
                  >
                    Éditer
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(action)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulaire d'Édition ou d'Ajout */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          {editingAction ? `Éditer ${editingAction.nom}` : 'Ajouter une Nouvelle Action'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Champs de Texte */}
          <div>
            <label className="block mb-2 font-medium">Nom</label>
            <input
              type="text"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Nom"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Durée (jours)</label>
            <input
              type="number"
              value={form.duree}
              onChange={(e) => setForm({ ...form, duree: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Durée"
              min="0"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Priorité</label>
            <input
              type="number"
              value={form.priorite}
              onChange={(e) => setForm({ ...form, priorite: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Priorité (1-5)"
              min="1"
              max="5"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Récurrences</label>
            <select
              value={form.recurrences}
              onChange={(e) => setForm({ ...form, recurrences: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="aucune">Aucune</option>
              <option value="quotidienne">Quotidienne</option>
              <option value="hebdomadaire">Hebdomadaire</option>
              <option value="mensuelle">Mensuelle</option>
            </select>
          </div>

          {/* Champ Répétition (optionnel) */}
          <div>
            <label className="block mb-2 font-medium">Répétitions</label>
            <input
              type="number"
              value={form.repetition}
              onChange={(e) => setForm({ ...form, repetition: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Nombre de répétitions"
              min="1"
            />
          </div>

          {/* Description Courte */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Description Courte</label>
            <textarea
              value={form.description_courte}
              onChange={(e) => setForm({ ...form, description_courte: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Description Courte"
              rows="2"
            ></textarea>
          </div>

          {/* Description Détaillée */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Description Détaillée"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Matières et Instructions */}
        <div className="mt-4">
          <div className="mb-4">
            <label className="block mb-2 font-medium">Matériel (séparé par des virgules)</label>
            <input
              type="text"
              value={form.materiel}
              onChange={(e) => setForm({ ...form, materiel: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Matériel requis"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Instructions (une par ligne)</label>
            <textarea
              value={form.instructions}
              onChange={(e) => setForm({ ...form, instructions: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Instructions (une par ligne)"
              rows="4"
            ></textarea>
          </div>

          {/* Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Température Minimum (°C)</label>
              <input
                type="number"
                value={form.temperature_min}
                onChange={(e) => setForm({ ...form, temperature_min: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Température Minimum"
                min="0"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Température Maximum (°C)</label>
              <input
                type="number"
                value={form.temperature_max}
                onChange={(e) => setForm({ ...form, temperature_max: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Température Maximum"
                min="0"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Météo</label>
              <select
                value={form.meteo}
                onChange={(e) => setForm({ ...form, meteo: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Sélectionnez la météo</option>
                <option value="ensoleillé">Ensoleillé</option>
                <option value="pluvieux">Pluvieux</option>
                <option value="nuageux">Nuageux</option>
                <option value="vent">Vent</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Saison</label>
              <select
                value={form.saison}
                onChange={(e) => setForm({ ...form, saison: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Sélectionnez la saison</option>
                <option value="printemps">Printemps</option>
                <option value="été">Été</option>
                <option value="automne">Automne</option>
                <option value="hiver">Hiver</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Conditions Supplémentaires</label>
              <textarea
                value={form.conditions_supplementaires}
                onChange={(e) => setForm({ ...form, conditions_supplementaires: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Conditions Supplémentaires"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Phases de Croissance */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">Phases de Croissance (sélectionnez une ou plusieurs)</label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(phase => (
                <label key={phase} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={form.Phases.includes(phase)}
                    onChange={() => handlePhaseChange(phase)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{phase}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Boutons d'Action */}
        <div className="mt-6 flex space-x-4">
          {editingAction ? (
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
                    nom: '',
                    description: '',
                    description_courte: '',
                    duree: '',
                    materiel: '',
                    instructions: '',
                    priorite: '',
                    recurrences: 'aucune',
                    repetition: '',
                    temperature_min: '',
                    temperature_max: '',
                    meteo: '',
                    saison: '',
                    conditions_supplementaires: '',
                    Phases: []
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

export default ActionList;
