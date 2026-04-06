function scrollToForm() {
  document.getElementById("form").scrollIntoView({
    behavior: "smooth"
  });
}
function openPage(condition) {
  alert("Opening " + condition + " page");
}
function openPage(condition) {
  let message = "Hi Doctor, I need consultation";

  if (condition === "hair") {
    message = "Hi Doctor, I have Hair Loss problem";
  } else if (condition === "pcos") {
    message = "Hi Doctor, I need help for PCOS";
  } else if (condition === "migraine") {
    message = "Hi Doctor, I have Migraine issue";
  }

  window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`);
}
