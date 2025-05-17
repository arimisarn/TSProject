document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('addBookForm') as HTMLFormElement;
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
    const titleError = document.getElementById('title-error') as HTMLDivElement;
    const descriptionError = document.getElementById('description-error') as HTMLDivElement;

    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormValid = true;

        if (!titleInput.value.trim()) {
            titleError.textContent = "Veuillez entrer le titre du livre.";
            titleError.style.display = "block";
            isFormValid = false;
        } else {
            titleError.style.display = "none";
        }

        if (!descriptionInput.value.trim()) {
            descriptionError.textContent = "Veuillez entrer la description du livre.";
            descriptionError.style.display = "block";
            isFormValid = false;
        } else {
            descriptionError.style.display = "none";
        }

        if (!isFormValid) {
            return;
        }
        // Récupérer les informations de l'utilisateur connecté depuis le localStorage
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            alert("Vous devez être connecté pour ajouter un livre.");
            window.location.href = "../auth/login.html";
            return;
        }
        const user = JSON.parse(loggedInUser);
        const auteur = user.nom;

        // Obtenir la date de publication au format spécifié
        const dateDePublication = new Date().toLocaleString('fr-FR', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        // Créer un objet livre
        const nouveauLivre = {
            titre: titleInput.value.trim(),
            auteur: auteur,
            description: descriptionInput.value.trim(),
            dateDePublication: dateDePublication,
        };

        // Récupérer les livres existants depuis le localStorage ou initialiser un tableau vide
        const livresData = localStorage.getItem('livres');
        const livres: any[] = livresData ? JSON.parse(livresData) : [];


        // Ajouter le nouveau livre au tableau
        livres.push(nouveauLivre);

        // Enregistrer le tableau de livres mis à jour dans le localStorage
        localStorage.setItem('livres', JSON.stringify(livres));

        alert("Votre livre a été ajouté avec succès !");
        window.location.href = "../components/my-books.html"; // Rediriger vers la page "Mes livres"
    });
});
