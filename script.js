// 1. Sélectionner le bouton et le paragraphe de confirmation dans le HTML
let boutonContact = document.querySelector("#btn-contact");
let zoneMessage = document.querySelector("#message-confirmation");

// 2. Écouter le clic de l'utilisateur sur le bouton
boutonContact.addEventListener("click", function() {
    
    // 3. Modifier le texte du bouton
    boutonContact.textContent = "Message envoyé !";
    
    // 4. Changer la couleur du bouton en vert (via son style CSS en direct)
    boutonContact.style.backgroundColor = "#27ae60";
    
    // 5. Afficher un message de confirmation personnalisé dans la page
    zoneMessage.textContent = "Merci ! Je te répondrai très bientôt.";
    
});
