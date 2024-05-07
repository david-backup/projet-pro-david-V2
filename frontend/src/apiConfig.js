// importation de la variable apiUrl à partir des variables d'environnement de VITE
const apiUrl = import.meta.env.VITE_API_URL;

// Exportation de la variable databaseUrl pour la rendre accessible depuis d'autres fichiers
export { apiUrl };
