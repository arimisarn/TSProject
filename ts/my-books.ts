document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list') as HTMLDivElement;
    const noBooksMessage = document.getElementById('no-books') as HTMLDivElement;

    // Récupérer l'utilisateur connecté
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert("Veuillez vous connecter pour voir vos livres.");
        window.location.href = "../auth/login.html";
        return;
    }
    const user = JSON.parse(loggedInUser);
    const auteurConnecte = user.nom;

    // Récupérer les livres depuis le localStorage
    const livresData = localStorage.getItem('livres');
    let livres: any[] = livresData ? JSON.parse(livresData) : [];

    // Filtrer les livres pour obtenir uniquement ceux de l'utilisateur connecté
    const userLivres = livres.filter((livre: any) => livre.auteur === auteurConnecte);

    if (userLivres.length === 0) {
        noBooksMessage.style.display = "block";
        bookList.style.display = "none";
    } else {
        noBooksMessage.style.display = "none";
        bookList.style.display = "block";
        userLivres.forEach((livre: any, index) => {
            const livreDiv = document.createElement('div');
            livreDiv.classList.add('border', 'rounded-md', 'p-4', 'shadow-sm', 'flex', 'justify-between', 'items-center'); // Ajout de flex pour aligner le bouton
            livreDiv.innerHTML = `
                <div class="mt-4">
                    <h2 class="text-xl font-semibold text-indigo-600 mb-2">${livre.titre}</h2>
                    <p class="text-gray-600 mb-1"><span class="font-semibold">Auteur:</span> ${livre.auteur}</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Description:</span> ${livre.description}</p>
                    <p class="text-gray-500 text-sm"><span class="font-semibold">Date de publication:</span> ${livre.dateDePublication}</p>
                </div>
                <button class="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-index="${index}">
                    <i class="fas fa-trash-alt"></i> 
                </button>
            `;
            bookList.appendChild(livreDiv);
        });

        // Ajouter un gestionnaire d'événement pour les boutons de suppression
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const indexToDelete = (event.target as HTMLButtonElement).dataset.index;
                if (indexToDelete !== undefined) {
                    const index = parseInt(indexToDelete, 10);
                    // Retirer le livre du tableau
                    userLivres.splice(index, 1);

                    // Mettre à jour le tableau des livres dans le localStorage
                    const tousLesLivresData = localStorage.getItem('livres');
                    let tousLesLivres: any[] = tousLesLivresData ? JSON.parse(tousLesLivresData) : [];
                    // Trouver l'index du livre à supprimer dans le tableau complet
                    let indexToDeleteGlobal = -1;
                    for (let i = 0; i < tousLesLivres.length; i++) {
                        if (tousLesLivres[i].auteur === auteurConnecte) {
                            indexToDeleteGlobal = i;
                            break;
                        }
                    }
                    if (indexToDeleteGlobal !== -1) {
                        tousLesLivres.splice(indexToDeleteGlobal, 1);
                        localStorage.setItem('livres', JSON.stringify(tousLesLivres));
                    }


                    // Mettre à jour l'affichage
                    bookList.innerHTML = ''; // Efface la liste actuelle
                    if (userLivres.length === 0) {
                        noBooksMessage.style.display = "block";
                        bookList.style.display = "none";
                    } else {
                        noBooksMessage.style.display = "none";
                        bookList.style.display = "block";
                        userLivres.forEach((livre: any, index) => {
                            const livreDiv = document.createElement('div');
                            livreDiv.classList.add('border', 'rounded-md', 'p-4', 'shadow-sm', 'flex', 'justify-between', 'items-center');
                            livreDiv.innerHTML = `
                                <div>
                                    <h2 class="text-xl font-semibold text-indigo-600 mb-2">${livre.titre}</h2>
                                    <p class="text-gray-600 mb-1"><span class="font-semibold">Auteur:</span> ${livre.auteur}</p>
                                    <p class="text-gray-700 mb-2"><span class="font-semibold">Description:</span> ${livre.description}</p>
                                    <p class="text-gray-500 text-sm"><span class="font-semibold">Date de publication:</span> ${livre.dateDePublication}</p>
                                 </div>
                                <button class="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-index="${index}">
                                    <i class="fas fa-trash-alt"></i> 
                                </button>
                            `;
                            bookList.appendChild(livreDiv);
                        });
                        const deleteButtons = document.querySelectorAll('.delete-btn');
                        deleteButtons.forEach(button => {
                            button.addEventListener('click', (event) => {
                                const indexToDelete = (event.target as HTMLButtonElement).dataset.index;
                                if (indexToDelete !== undefined) {
                                    const index = parseInt(indexToDelete, 10);
                                    // Retirer le livre du tableau
                                    userLivres.splice(index, 1);

                                    // Mettre à jour le tableau des livres dans le localStorage
                                    // Nous devons mettre à jour la liste complète des livres, pas seulement les livres de l'utilisateur actuel.
                                    const tousLesLivresData = localStorage.getItem('livres');
                                    let tousLesLivres: any[] = tousLesLivresData ? JSON.parse(tousLesLivresData) : [];
                                    // Trouver l'index du livre à supprimer dans le tableau complet
                                    let indexToDeleteGlobal = -1;
                                    for (let i = 0; i < tousLesLivres.length; i++) {
                                        if (tousLesLivres[i].auteur === auteurConnecte) {
                                            indexToDeleteGlobal = i;
                                            break;
                                        }
                                    }
                                    if (indexToDeleteGlobal !== -1) {
                                        tousLesLivres.splice(indexToDeleteGlobal, 1);
                                        localStorage.setItem('livres', JSON.stringify(tousLesLivres));
                                    }


                                    // Mettre à jour l'affichage
                                    bookList.innerHTML = '';
                                    if (userLivres.length === 0) {
                                        noBooksMessage.style.display = "block";
                                        bookList.style.display = "none";
                                    } else {
                                        noBooksMessage.style.display = "none";
                                        bookList.style.display = "block";
                                        userLivres.forEach((livre: any, index) => {
                                            const livreDiv = document.createElement('div');
                                            livreDiv.classList.add('border', 'rounded-md', 'p-4', 'shadow-sm', 'flex', 'justify-between', 'items-center');
                                            livreDiv.innerHTML = `
                                                <div>
                                                    <h2 class="text-xl font-semibold text-indigo-600 mb-2">${livre.titre}</h2>
                                                    <p class="text-gray-600 mb-1"><span class="font-semibold">Auteur:</span> ${livre.auteur}</p>
                                                    <p class="text-gray-700 mb-2"><span class="font-semibold">Description:</span> ${livre.description}</p>
                                                    <p class="text-gray-500 text-sm"><span class="font-semibold">Date de publication:</span> ${livre.dateDePublication}</p>
                                                </div>
                                                <button class="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-index="${index}">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            `;
                                            bookList.appendChild(livreDiv);
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            });
        });
    }
});
