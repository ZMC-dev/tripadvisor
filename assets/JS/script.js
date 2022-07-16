// console.log("Coucou");

const $ = document;

// Attendre que notre page soit chargée avant de faire quoi que ce soit

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page Chargée");

  $.querySelector("#btn-contact-form").addEventListener("click", () => {
    // Toggle permet de faire en sorte que si la class n'est pas présente on la rajoute, si elle est présente on l'enlève
    $.querySelector(".div-contact-form").classList.toggle("display");
  });

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // Je veux empêcher le rafraichissment de la page
    event.preventDefault();
    // Je fais une requête axios
    const response = await axios.post("http://localhost:3001/send-email", {
      // Je construit mon body en allant chercher les contenus de mes inputs (leurs values)
      name: $.querySelector("#name").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#text").value,
    });
    console.log(response.data);
    alert("Merci pour votre message");
  });
});