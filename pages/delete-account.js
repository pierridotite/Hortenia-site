// src/pages/DeleteAccount.js

import React, { useState } from 'react';
import SectionWrapper from "../components/SectionWrapper";
import axios from 'axios'; // Assurez-vous d'avoir installé axios avec `npm install axios`

const DeleteAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation des champs
        if (confirmation !== 'SUPPRIMER') {
            setError('Veuillez taper "SUPPRIMER" pour confirmer la suppression de votre compte.');
            return;
        }

        if (!password) {
            setError('Veuillez entrer votre mot de passe pour confirmer.');
            return;
        }

        setIsLoading(true);

        try {
            // Remplacez l'URL par l'endpoint de votre API pour la suppression de compte
            const response = await axios.post('/api/delete-account', { email, password });

            if (response.status === 200) {
                setSuccess('Votre compte a été supprimé avec succès.');
                // Optionnel : Rediriger l'utilisateur après la suppression
                 window.location.href = '/';
            } else {
                setError('Une erreur est survenue lors de la suppression de votre compte.');
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SectionWrapper>
            <div className="max-w-lg mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-red-600 mb-6">Supprimer mon Compte</h1>
                <p className="text-gray-700 mb-6">
                    La suppression de votre compte est irréversible. Toutes vos données seront définitivement effacées. Si vous êtes certain de vouloir procéder, veuillez remplir le formulaire ci-dessous.
                </p>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 mb-6 rounded">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">
                        {success}
                    </div>
                )}

                <form onSubmit={handleDelete} className="space-y-6">
                    {/* Adresse Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Adresse Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder="votre.email@example.com"
                        />
                    </div>

                    {/* Mot de Passe */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de Passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Confirmation */}
                    <div>
                        <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700">
                            Confirmation
                        </label>
                        <input
                            type="text"
                            id="confirmation"
                            name="confirmation"
                            required
                            value={confirmation}
                            onChange={(e) => setConfirmation(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder='Tapez "SUPPRIMER" ici'
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            Pour confirmer la suppression de votre compte, veuillez taper "SUPPRIMER" dans le champ ci-dessus.
                        </p>
                    </div>

                    {/* Bouton de Suppression */}
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                isLoading ? 'bg-red-300' : 'bg-red-600 hover:bg-red-700'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                        >
                            {isLoading ? 'Suppression en cours...' : 'Supprimer mon Compte'}
                        </button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default DeleteAccount;
