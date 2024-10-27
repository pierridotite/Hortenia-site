// components/admin/PlantList.js
import React, { useState } from 'react';
import axiosInstance from '../../lib/axiosInstance'; // Assurez-vous que le chemin est correct
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PlantList = ({ plants, setPlants }) => {
  const [editingPlant, setEditingPlant] = useState(null);
  const [form, setForm] = useState({
    Nom: '',
    Nom_scientifique: '',
    Type: '',
    Difficultee: '',
    Besoin_eau: '',
    Lumiere: '',
    Sol: '',
    Quantitee: '',
    Rusticite: '',
    pH: '',
    profondeur: '',
    date_semis: '',
    gel: false,
    compagnon_pos: '',
    compagnon_neg: '',
    consommable: '',
    maladies: '',
    conseils: '',
    varietes: '',
    liens: '',
    name_liens: '',
    isometric_color: '#000000',
    header_image: '',
    photo1: '',
    photo2: '',
    photo3: '',
    isometric_img: '',
    isometric_Id: '',
  });

  // Fonction pour gérer l'upload d'image vers votre backend
  const handleImageChange = async (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      // Utiliser le nom de la plante pour organiser les images
      formData.append('plantName', form.Nom || 'default');

      try {
        // Envoyer l'image à l'API du backend
        const response = await axiosInstance.post('/admin/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Récupérer l'URL de l'image depuis la réponse
        const imageUrl = response.data.imageUrl;

        // Mettre à jour l'état du formulaire
        setForm({ ...form, [field]: imageUrl });
      } catch (error) {
        console.error('Erreur lors du téléchargement de l\'image:', error);
        alert('Erreur lors du téléchargement de l\'image.');
      }
    }
  };

  const handleDateChange = (date) => {
    // Convertir la date en format JJ/MM dès que l'utilisateur sélectionne une date
    const formattedDate = formatDateToDayMonth(date);
    setForm({ ...form, date_semis: formattedDate });
  };

  // Fonction pour formater la date en JJ/MM
  const formatDateToDayMonth = (date) => {
    if (date) {
      const day = date.getDate().toString().padStart(2, '0'); // Jour sur deux chiffres
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois sur deux chiffres
      return `${day}/${month}`;
    }
    return '';
  };

  const handleEdit = (plant) => {
    setEditingPlant(plant);
    setForm({
      Nom: plant.Nom || '',
      Nom_scientifique: plant.Nom_scientifique || '',
      Type: plant.Type || '',
      Difficultee: plant.Difficultee !== undefined ? plant.Difficultee.toString() : '',
      Besoin_eau: plant.Besoin_eau !== undefined ? plant.Besoin_eau.toString() : '',
      Lumiere: plant.Lumiere !== undefined ? plant.Lumiere.toString() : '',
      Sol: plant.Sol || '',
      Quantitee: plant.Quantitee !== undefined ? plant.Quantitee.toString() : '',
      Rusticite: plant.Rusticite !== undefined ? plant.Rusticite.toString() : '',
      pH: plant.pH || '',
      profondeur: plant.profondeur || '',
      date_semis: plant.date_semis || '',
      gel: plant.gel || false,
      compagnon_pos: plant.compagnon_pos ? plant.compagnon_pos.join(', ') : '',
      compagnon_neg: plant.compagnon_neg ? plant.compagnon_neg.join(', ') : '',
      consommable: plant.consommable ? plant.consommable.join(', ') : '',
      maladies: plant.maladies || '',
      conseils: plant.conseils || '',
      varietes: plant.varietes ? plant.varietes.join(', ') : '',
      liens: plant.liens ? plant.liens.join(', ') : '',
      name_liens: plant.name_liens ? plant.name_liens.join(', ') : '',
      isometric_color: plant.isometric_color || '#000000',
      header_image: plant.header_image || '',
      photo1: plant.photo1 || '',
      photo2: plant.photo2 || '',
      photo3: plant.photo3 || '',
      isometric_img: plant.isometric_img || '',
      isometric_Id: plant.isometric_Id !== undefined ? plant.isometric_Id.toString() : '',
    });
  };

  const handleSave = async () => {
    try {
      const updatedPlant = {
        Nom: form.Nom,
        Nom_scientifique: form.Nom_scientifique,
        Type: form.Type,
        Difficultee: form.Difficultee ? parseFloat(form.Difficultee) : null,
        Besoin_eau: form.Besoin_eau ? parseFloat(form.Besoin_eau) : null,
        Lumiere: form.Lumiere ? parseFloat(form.Lumiere) : null,
        Sol: form.Sol,
        Quantitee: form.Quantitee ? parseInt(form.Quantitee, 10) : null,
        Rusticite: form.Rusticite ? parseInt(form.Rusticite, 10) : null,
        pH: form.pH,
        profondeur: form.profondeur,
        date_semis: form.date_semis,
        gel: form.gel,
        compagnon_pos: form.compagnon_pos ? form.compagnon_pos.split(',').map(item => item.trim()) : [],
        compagnon_neg: form.compagnon_neg ? form.compagnon_neg.split(',').map(item => item.trim()) : [],
        consommable: form.consommable ? form.consommable.split(',').map(item => item.trim()) : [],
        maladies: form.maladies,
        conseils: form.conseils,
        varietes: form.varietes ? form.varietes.split(',').map(item => item.trim()) : [],
        liens: form.liens ? form.liens.split(',').map(item => item.trim()) : [],
        name_liens: form.name_liens ? form.name_liens.split(',').map(item => item.trim()) : [],
        isometric_color: form.isometric_color,
        header_image: form.header_image,
        photo1: form.photo1,
        photo2: form.photo2,
        photo3: form.photo3,
        isometric_img: form.isometric_img,
        isometric_Id: form.isometric_Id ? parseInt(form.isometric_Id, 10) : null,
      };

      // Appel API pour mettre à jour la plante sur le backend
      const response = await axiosInstance.put(`/admin/plants/${editingPlant._id}`, updatedPlant);

      console.log('response:', response);

      setPlants(plants.map(p => p._id === editingPlant._id ? response.data : p));
      setEditingPlant(null);
      // Réinitialiser le formulaire
      setForm({
        Nom: '',
        Nom_scientifique: '',
        Type: '',
        Difficultee: '',
        Besoin_eau: '',
        Lumiere: '',
        Sol: '',
        Quantitee: '',
        Rusticite: '',
        pH: '',
        profondeur: '',
        date_semis: '',
        gel: false,
        compagnon_pos: '',
        compagnon_neg: '',
        consommable: '',
        maladies: '',
        conseils: '',
        varietes: '',
        liens: '',
        name_liens: '',
        isometric_color: '#000000',
        header_image: '',
        photo1: '',
        photo2: '',
        photo3: '',
        isometric_img: '',
        isometric_Id: '',
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la plante:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  const handleAdd = async () => {
    try {
      const newPlant = {
        Nom: form.Nom,
        Nom_scientifique: form.Nom_scientifique,
        Type: form.Type,
        Difficultee: form.Difficultee ? parseFloat(form.Difficultee) : null,
        Besoin_eau: form.Besoin_eau ? parseFloat(form.Besoin_eau) : null,
        Lumiere: form.Lumiere ? parseFloat(form.Lumiere) : null,
        Sol: form.Sol,
        Quantitee: form.Quantitee ? parseInt(form.Quantitee, 10) : null,
        Rusticite: form.Rusticite ? parseInt(form.Rusticite, 10) : null,
        pH: form.pH,
        profondeur: form.profondeur,
        date_semis: form.date_semis,
        gel: form.gel,
        compagnon_pos: form.compagnon_pos ? form.compagnon_pos.split(',').map(item => item.trim()) : [],
        compagnon_neg: form.compagnon_neg ? form.compagnon_neg.split(',').map(item => item.trim()) : [],
        consommable: form.consommable ? form.consommable.split(',').map(item => item.trim()) : [],
        maladies: form.maladies,
        conseils: form.conseils,
        varietes: form.varietes ? form.varietes.split(',').map(item => item.trim()) : [],
        liens: form.liens ? form.liens.split(',').map(item => item.trim()) : [],
        name_liens: form.name_liens ? form.name_liens.split(',').map(item => item.trim()) : [],
        isometric_color: form.isometric_color,
        header_image: form.header_image,
        photo1: form.photo1,
        photo2: form.photo2,
        photo3: form.photo3,
        isometric_img: form.isometric_img,
        isometric_Id: form.isometric_Id ? parseInt(form.isometric_Id, 10) : null,
      };

      // Appel API pour ajouter la plante sur le backend
      const response = await axiosInstance.post('/admin/plants', newPlant);

      setPlants([...plants, response.data]);
      // Réinitialiser le formulaire
      setForm({
        Nom: '',
        Nom_scientifique: '',
        Type: '',
        Difficultee: '',
        Besoin_eau: '',
        Lumiere: '',
        Sol: '',
        Quantitee: '',
        Rusticite: '',
        pH: '',
        profondeur: '',
        date_semis: '',
        gel: false,
        compagnon_pos: '',
        compagnon_neg: '',
        consommable: '',
        maladies: '',
        conseils: '',
        varietes: '',
        liens: '',
        name_liens: '',
        isometric_color: '#000000',
        header_image: '',
        photo1: '',
        photo2: '',
        photo3: '',
        isometric_img: '',
        isometric_Id: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la plante:', error);
      alert('Veuillez vérifier les données saisies.');
    }
  };

  const handleDelete = async (plant) => {
    const confirmDelete = window.confirm(`Êtes-vous sûr de vouloir supprimer la plante "${plant.Nom}" ?`);
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/admin/plants/${plant._id}`);

      // Mise à jour de la liste des plantes
      setPlants(plants.filter(p => p._id !== plant._id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la plante:', error);
      alert('Erreur lors de la suppression de la plante.');
    }
  };

  const handleCancel = () => {
    setEditingPlant(null);
    setForm({
      Nom: '',
      Nom_scientifique: '',
      Type: '',
      Difficultee: '',
      Besoin_eau: '',
      Lumiere: '',
      Sol: '',
      Quantitee: '',
      Rusticite: '',
      pH: '',
      profondeur: '',
      date_semis: '',
      gel: false,
      compagnon_pos: '',
      compagnon_neg: '',
      consommable: '',
      maladies: '',
      conseils: '',
      varietes: '',
      liens: '',
      name_liens: '',
      isometric_color: '#000000',
      header_image: '',
      photo1: '',
      photo2: '',
      photo3: '',
      isometric_img: '',
      isometric_Id: '',
    });
  };

  const parseDateFromDayMonth = (dateString) => {
    if (!dateString) {
      return null;
    }

    const [day, month] = dateString.split('/');

    if (!day || !month) {
      return null;
    }

    // Création d'une nouvelle date avec une année de référence, ici 2000
    const parsedDate = new Date(2000, parseInt(month, 10) - 1, parseInt(day, 10));
    return isNaN(parsedDate) ? null : parsedDate;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Fiches de Plantes</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nom</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>

                {/* ID */}
                <td className="py-2 px-4 border-b">{plant._id}</td>

                {/* Nom */}
                <td className="py-2 px-4 border-b">{plant.Nom}</td>

                {/* Type */}
                <td className="py-2 px-4 border-b">{plant.Type}</td>

                {/* Actions  centrer dans le td*/}
                
                <td className="py-2 px-4 border-b flex justify-center space-x-4">
                      <button 
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        onClick={() => handleEdit(plant)}
                      >
                        Éditer
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(plant)}
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
          {editingPlant ? `Éditer ${editingPlant.Nom}` : 'Ajouter une Nouvelle Plante'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Champs de Texte */}
          <div>
            <label className="block mb-2 font-medium">Nom</label>
            <input
              type="text"
              value={form.Nom}
              onChange={(e) => setForm({ ...form, Nom: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Nom"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Nom Scientifique</label>
            <input
              type="text"
              value={form.Nom_scientifique}
              onChange={(e) => setForm({ ...form, Nom_scientifique: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Nom Scientifique"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Type</label>
            <input
              type="text"
              value={form.Type}
              onChange={(e) => setForm({ ...form, Type: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Type (ex. Annuel)"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Difficulté (%)</label>
            <input
              type="number"
              value={form.Difficultee}
              onChange={(e) => setForm({ ...form, Difficultee: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Difficulté"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Besoin en Eau (%)</label>
            <input
              type="number"
              value={form.Besoin_eau}
              onChange={(e) => setForm({ ...form, Besoin_eau: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Besoin en Eau"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Lumière (%)</label>
            <input
              type="number"
              value={form.Lumiere}
              onChange={(e) => setForm({ ...form, Lumiere: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Lumière"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Type de Sol</label>
            <input
              type="text"
              value={form.Sol}
              onChange={(e) => setForm({ ...form, Sol: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Type de Sol (ex. Sableux)"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Quantité</label>
            <input
              type="number"
              value={form.Quantitee}
              onChange={(e) => setForm({ ...form, Quantitee: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Quantité"
              min="0"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Rusticité</label>
            <input
              type="number"
              value={form.Rusticite}
              onChange={(e) => setForm({ ...form, Rusticite: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Rusticité"
              min="0"
              max="10"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">pH</label>
            <input
              type="text"
              value={form.pH}
              onChange={(e) => setForm({ ...form, pH: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="pH (ex. 6-7)"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Profondeur (cm)</label>
            <input
              type="text"
              value={form.profondeur}
              onChange={(e) => setForm({ ...form, profondeur: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Profondeur"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Date de Semis</label>
             <DatePicker
                selected={parseDateFromDayMonth(form.date_semis)}
                onChange={(date) => handleDateChange(date)}
                dateFormat="dd/MM" // Format d'affichage de la date (JJ/MM)
                showMonthDropdown // Affiche un sélecteur de mois
                showYearDropdown={false} // Retire le sélecteur d'années
                className="w-full border border-gray-300 rounded-md p-2"
                placeholderText="JJ/MM"
              />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={form.gel}
              onChange={(e) => setForm({ ...form, gel: e.target.checked })}
              className="mr-2"
            />
            <label className="font-medium">Gel</label>
          </div>
        </div>

        {/* Matières et Instructions */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Plantes Compagnes Positives (séparées par des virgules)</label>
              <input
                type="text"
                value={form.compagnon_pos}
                onChange={(e) => setForm({ ...form, compagnon_pos: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Plantes Compagnes Positives"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Plantes Compagnes Négatives (séparées par des virgules)</label>
              <input
                type="text"
                value={form.compagnon_neg}
                onChange={(e) => setForm({ ...form, compagnon_neg: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Plantes Compagnes Négatives"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Parties Consommables (séparées par des virgules)</label>
              <input
                type="text"
                value={form.consommable}
                onChange={(e) => setForm({ ...form, consommable: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Parties Consommables"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Informations sur les Maladies</label>
              <textarea
                value={form.maladies}
                onChange={(e) => setForm({ ...form, maladies: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Informations sur les Maladies"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 font-medium">Conseils</label>
              <textarea
                value={form.conseils}
                onChange={(e) => setForm({ ...form, conseils: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Conseils"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 font-medium">Variétés (séparées par des virgules)</label>
              <input
                type="text"
                value={form.varietes}
                onChange={(e) => setForm({ ...form, varietes: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Variétés"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Liens (URLs séparées par des virgules)</label>
              <input
                type="text"
                value={form.liens}
                onChange={(e) => setForm({ ...form, liens: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Liens"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Noms des Liens (séparés par des virgules)</label>
              <input
                type="text"
                value={form.name_liens}
                onChange={(e) => setForm({ ...form, name_liens: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Noms des Liens"
              />
            </div>
          </div>
        </div>

        {/* Image d'En-tête */}
        <div className="mt-4">
          <div>
            <label className="block mb-2 font-medium">Image d'En-tête (Télécharger)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'header_image')}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {form.header_image && (
              //ajuster l'image à la div
              <div className="w-32 h-32 rounded-md overflow-hidden mt-2">
                <img className="object-cover w-full h-full" src={process.env.NEXT_PUBLIC_API_URL + "/images/" + form.Nom + "/" +form.header_image} alt="Image d'En-tête" />
              </div>
            )}
          </div>
        </div>

        {/* Images Isométriques */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Couleur Isométrique</label>
              <input
                type="color"
                value={form.isometric_color}
                onChange={(e) => setForm({ ...form, isometric_color: e.target.value })}
                className="w-full h-10 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Image Isométrique (Télécharger)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'isometric_img')}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {form.isometric_img && (
                <div className="w-32 h-32 rounded-md overflow-hidden mt-2">
                  <img className="object-cover w-full h-full" src={process.env.NEXT_PUBLIC_API_URL + "/images/" + form.Nom + "/" +form.isometric_img} alt="Image Isométrique" />
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">ID Isométrique</label>
              <input
                type="number"
                value={form.isometric_Id}
                onChange={(e) => setForm({ ...form, isometric_Id: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="ID Isométrique"
              />
            </div>
          </div>
        </div>

        {/* Photos Variétés */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-medium">Photo Variété 1 (Télécharger)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'photo1')}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {form.photo1 && (
               <div className="w-24 h-24 rounded-md overflow-hidden mt-2">
                  <img className="object-cover w-full h-full" src={process.env.NEXT_PUBLIC_API_URL + "/images/" + form.Nom + "/" + form.photo1} alt="Photo Variété 1" />
                </div>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">Photo Variété 2 (Télécharger)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'photo2')}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {form.photo2 && (
                  <div className="w-24 h-24 rounded-md overflow-hidden mt-2">
                    <img className="object-cover w-full h-full" src={process.env.NEXT_PUBLIC_API_URL + "/images/" + form.Nom + "/" + form.photo2} alt="Description de l'image" />
                  </div>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">Photo Variété 3 (Télécharger)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 'photo3')}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {form.photo3 && (
                <div className="w-24 h-24 rounded-md overflow-hidden mt-2">
                  <img className="object-cover w-full h-full" src={process.env.NEXT_PUBLIC_API_URL + "/images/" + form.Nom + "/" + form.photo3} alt="Photo Variété 3" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Boutons d'Action */}
        <div className="mt-6 flex space-x-4">
          {editingPlant ? (
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
                onClick={handleCancel}
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

export default PlantList;
