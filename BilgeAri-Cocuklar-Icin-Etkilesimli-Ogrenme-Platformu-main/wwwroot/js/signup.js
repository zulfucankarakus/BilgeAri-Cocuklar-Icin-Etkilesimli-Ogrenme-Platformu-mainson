document.addEventListener("DOMContentLoaded", () => {

  let users = JSON.parse(localStorage.getItem("beeUsers") || "[]");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passInput  = document.getElementById("password");
  const registerBtn = document.getElementById("registerBtn");
  const msg = document.getElementById("registerMessage");

  const robotCheck = document.getElementById("robotCheck");
  const robotAnswer = document.getElementById("robotAnswer");
  const robotQuestion = document.getElementById("robotQuestion");
  const signupForm = document.getElementById("signupForm");

  // Eğer bu sayfa değilsek çık (MVC güvenliği)
  if (!signupForm || !robotQuestion) return;

  /* ============================
     ROBOT SORUSU
  ============================ */
  let a = Math.floor(Math.random() * 5) + 1;
  let b = Math.floor(Math.random() * 5) + 1;
  robotQuestion.textContent = `${a} + ${b} = ?`;

  /* ============================
     FORM AKTİVASYONU
  ============================ */
  nameInput.addEventListener("input", () => {
    emailInput.disabled = nameInput.value.trim().length === 0;
  });

  emailInput.addEventListener("input", () => {
    passInput.disabled = emailInput.value.trim().length < 3;
  });

  /* ============================
     ŞİFRE KONTROLÜ
  ============================ */
  passInput.addEventListener("input", () => {
    const pass = passInput.value;

    const valid =
      pass.length >= 6 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[!@#$%^&*()_\-+=<>?.]/.test(pass);

    registerBtn.disabled = !valid;
    passInput.style.borderColor = valid ? "#4caf50" : "#f44336";
  });

  /* ============================
     FORM SUBMIT
  ============================ */
  signupForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!robotCheck.checked) {
      msg.textContent = "⚠️ Robot olmadığınızı doğrulayın!";
      msg.style.color = "#d32f2f";
      return;
    }

    if (parseInt(robotAnswer.value) !== a + b) {
      msg.textContent = "⚠️ Robot doğrulaması hatalı!";
      msg.style.color = "#d32f2f";
      return;
    }

    if (users.some(u => u.email === emailInput.value.trim())) {
      msg.textContent = "⚠️ Bu e-posta zaten kayıtlı!";
      msg.style.color = "#d32f2f";
      return;
    }

    users.push({
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passInput.value.trim()
    });

    localStorage.setItem("beeUsers", JSON.stringify(users));

    msg.textContent = "🎉 Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.";
    msg.style.color = "#388e3c";

    // 🔴 MVC ROUTE
    setTimeout(() => {
      window.location.href = "/Auth/Login";
    }, 1500);
  });

});
