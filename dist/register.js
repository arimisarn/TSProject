"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    const motdepasseInput = document.getElementById('motdepasse');
    const confirmMotdepasseInput = document.getElementById('confirm_motdepasse');
    const submitButton = document.getElementById('submitButton');
    if (registrationForm && nomInput && emailInput && motdepasseInput && confirmMotdepasseInput && submitButton) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêche la soumission par défaut du formulaire
            const nom = nomInput.value.trim();
            const email = emailInput.value.trim();
            const motdepasse = motdepasseInput.value;
            const confirmMotdepasse = confirmMotdepasseInput.value;
            if (!nom) {
                alert('Veuillez entrer votre nom.');
                return;
            }
            if (!email) {
                alert('Veuillez entrer votre email.');
                return;
            }
            if (!isValidEmail(email)) {
                alert('Veuillez entrer un email valide.');
                return;
            }
            if (!motdepasse) {
                alert('Veuillez entrer un mot de passe.');
                return;
            }
            if (motdepasse.length < 6) {
                alert('Le mot de passe doit contenir au moins 6 caractères.');
                return;
            }
            if (motdepasse !== confirmMotdepasse) {
                alert('Les mots de passe ne correspondent pas.');
                return;
            }
            // Crée un objet utilisateur
            const user = { nom, email, motdepasse };
            // Enregistre l'utilisateur dans le localStorage
            localStorage.setItem('user', JSON.stringify(user));
            alert('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
            // Redirige vers la page de connexion après un court délai
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
