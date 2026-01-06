document.addEventListener("DOMContentLoaded", () => {

  let users = JSON.parse(localStorage.getItem("beeUsers") || "[]");

  const resetEmail = document.getElementById("email");
  const favNumber = document.getElementById("fav");
  const resetMsg = document.getElementById("resetMessage");

  const robotCheck = document.getElementById("robotCheck");
  const robotAnswer = document.getElementById("robotAnswer");
  const robotQuestion = document.getElementById("robotQuestion");
  const resetForm = document.getElementById("resetForm");

  // Eğer bu sayfada değilsek çık (MVC güvenliği)
  if (!resetForm || !robotQuestion) return;

  /* ============================
     ROBOT SORUSU ÜRET
  ============================ */
  let m = Math.floor(Math.random() * 5) + 2;
  let n = Math.floor(Math.random() * 5) + 2;
  robotQuestion.textContent = `${m} × ${n} = ?`;

  /* ============================
     FORM SUBMIT
  ============================ */
  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!robotCheck.checked) {
      resetMsg.textContent = "⚠️ Robot doğrulaması yapılmadı!";
      resetMsg.style.color = "#d32f2f";
      return;
    }

    if (parseInt(robotAnswer.value) !== m * n) {
      resetMsg.textContent = "⚠️ Robot doğrulaması yanlış!";
      resetMsg.style.color = "#d32f2f";
      return;
    }

    const email = resetEmail.value.trim();
    const found = users.find(u => u.email === email);

    if (!found) {
      resetMsg.textContent = "❌ Bu e-posta kayıtlı değil!";
      resetMsg.style.color = "#d32f2f";
      return;
    }

    if (Number(favNumber.value) <= 0) {
      resetMsg.textContent = "⚠️ Sayı pozitif olmalı!";
      resetMsg.style.color = "#d32f2f";
      return;
    }

    resetMsg.textContent = "📩 Şifre yenileme bağlantısı gönderildi (DEMO).";
    resetMsg.style.color = "#388e3c";
  });

});
