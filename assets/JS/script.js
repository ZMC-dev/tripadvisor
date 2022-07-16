const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page Chargée");

  $.querySelector("#btn-contact-form").addEventListener("click", () => {
    $.querySelector(".div-contact-form").classList.toggle("display");
  });

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3001/send-email", {
      name: $.querySelector("#name").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#text").value,
    });
    console.log(response.data);
    alert("Merci pour votre message");
  });
});