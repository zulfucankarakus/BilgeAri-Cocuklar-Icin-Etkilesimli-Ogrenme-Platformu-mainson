document.addEventListener("DOMContentLoaded", () => {

  const loginEmail = document.getElementById("email");
  const loginPass = document.getElementById("password");
  const loginMsg = document.getElementById("loginMessage");

  const robotCheck = document.getElementById("robotCheck");
  const robotWrapper = document.getElementById("robotWrapper");
  const robotAnswer = document.getElementById("robotAnswer");
  const robotQuestion = document.getElementById("robotQuestion");
  const loginForm = document.getElementById("loginForm");

  // Eğer bu sayfa değilsek çık (MVC güvenliği)
  if (!loginForm || !robotQuestion) return;

  // Kullanıcı veritabanı (demo)
  let users = JSON.parse(localStorage.getItem("beeUsers") || "[]");

  /* ============================
     ROBOT SORUSU
  ============================ */
  let big = Math.floor(Math.random() * 7) + 4;
  let small = Math.floor(Math.random() * (big - 1)) + 1;
  robotQuestion.textContent = `${big} - ${small} = ?`;

  /* ============================
     ROBOT CHECK
  ============================ */
  robotCheck.addEventListener("change", () => {
    if (robotWrapper) {
      robotWrapper.style.display = robotCheck.checked ? "block" : "none";
    }
  });

  robotAnswer.type = "text";
  robotAnswer.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  /* ============================
     FORM SUBMIT
  ============================ */
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!robotCheck.checked) {
      loginMsg.textContent = "⚠ Robot olmadığını doğrulamalısın!";
      loginMsg.style.color = "#d32f2f";
      return;
    }

    if (parseInt(robotAnswer.value) !== (big - small)) {
      loginMsg.textContent = "⚠ Doğrulama sorusu yanlış!";
      loginMsg.style.color = "#d32f2f";
      return;
    }

    const email = loginEmail.value.trim();
    const pass = loginPass.value.trim();

    const found = users.find(u => u.email === email && u.password === pass);

    if (!found) {
      loginMsg.textContent = "❌ E-posta veya şifre hatalı!";
      loginMsg.style.color = "#d32f2f";
      return;
    }

    loginMsg.textContent = "✔ Başarıyla giriş yapıldı!";
    loginMsg.style.color = "#388e3c";

    localStorage.setItem("currentUser", found.name);

    // 🔴 MVC ROUTE
    setTimeout(() => {
      window.location.href = "/Home/Index";
    }, 1200);
  });

});
