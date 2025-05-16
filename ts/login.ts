    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const motdepasseInput = document.getElementById('motdepasse') as HTMLInputElement | null;
        const loginButton = document.getElementById('loginButton') as HTMLButtonElement | null;

        if (loginForm && emailInput && motdepasseInput && loginButton) {
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Empêche la soumission par défaut

                const email = emailInput.value.trim();
                const motdepasse = motdepasseInput.value.trim();

                if (!email) {
                    alert('Veuillez entrer votre email.');
                    return;
                }

                if (!isValidEmail(email)) {
                    alert('Veuillez entrer un email valide.');
                    return;
                }

                if (!motdepasse) {
                    alert('Veuillez entrer votre mot de passe.');
                    return;
                }

                // Récupère les données utilisateur depuis le localStorage
                const storedUser = localStorage.getItem('user');

                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    if (user.email === email && user.motdepasse === motdepasse) {
                        alert('Connexion réussie !');
                        // Stocke l'utilisateur connecté
                        localStorage.setItem('loggedInUser', JSON.stringify(user));
                        window.location.href = '../dashboard/dashboard.html'; // Redirige vers la page d'accueil
                    } else {
                        alert('Email ou mot de passe incorrect.');
                    }
                } else {
                    alert('Utilisateur non trouvé. Veuillez vous inscrire.');
                    window.location.href = 'register.html';
                }
            });
        }

        function isValidEmail(email: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });