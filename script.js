function scrollToForm() {
  document.getElementById("form").scrollIntoView({
    behavior: "smooth"
  });
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
