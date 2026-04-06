function scrollToForm() {
  document.getElementById("form").scrollIntoView({
    behavior: "smooth"
  });
}
function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let problem = document.getElementById("problem").value;

  let message = `New Patient:
Name: ${name}
Phone: ${phone}
Age: ${age}
Gender: ${gender}
Email: ${email}
Problem: ${problem}`;

  let url = "https://wa.me/918076746392?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
function openPage(condition) {
  alert("Opening " + condition + " page");
}
function openPage(condition) {
  let phone = "918076746392";  //)

  let message = "Hi Doctor, I need consultation";

  if (condition === "hair") {
    message = "Hi Doctor, I have Hair Loss problem";
  } 
  else if (condition === "pcos") {
    message = "Hi Doctor, I need help for PCOS";
  } 
  else if (condition === "migraine") {
    message = "Hi Doctor, I have Migraine issue";
  } 
  else if (condition === "ibs") {
    message = "Hi Doctor, I have IBS issue";
  } 
  else if (condition === "thyroid") {
    message = "Hi Doctor, I need help for Thyroid";
  } 
  else if (condition === "allergy") {
    message = "Hi Doctor, I have Allergy issue";
  } 
  else if (condition === "skin") {
    message = "Hi Doctor, I have Skin problem";
  }

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
