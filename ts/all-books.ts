document.addEventListener('DOMContentLoaded', () => {
    const allBooksList = document.getElementById('all-books-list') as HTMLDivElement;
    const noBooksMessage = document.getElementById('no-books-message') as HTMLDivElement;

    // Récupérer tous les livres depuis le localStorage
    const livresData = localStorage.getItem('livres');
    const livres: any[] = livresData ? JSON.parse(livresData) : [];

    if (livres.length === 0) {
        noBooksMessage.style.display = "block";
        allBooksList.style.display = "none";
    } else {
        noBooksMessage.style.display = "none";
        allBooksList.style.display = "block";
        livres.forEach((livre: any) => {
            const livreDiv = document.createElement('div');
            livreDiv.classList.add('border', 'rounded-md', 'p-4', 'shadow-sm');
            livreDiv.innerHTML = `
                    <div class="p-4 flex flex-col gap-2">

<p class="text-3xl text-violet-800 font-semibold text-center"> ${livre.titre} </p>
        <p class="text-black font-semibold">Description : <span class="text-gray-500 font-normal"> ${livre.description} </span></p>
        <p class="text-black font-semibold">Auteur : <span class="text-gray-500 font-normal"> ${livre.auteur} </span></p>
        <p class="text-black font-semibold">Publié le : <span class="text-gray-500 font-normal"> ${livre.dateDePublication} </span></p>
                    </div>
`;
            allBooksList.appendChild(livreDiv);
        });
    }
});