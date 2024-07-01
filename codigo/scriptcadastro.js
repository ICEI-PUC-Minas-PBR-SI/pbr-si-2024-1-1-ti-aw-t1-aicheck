document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("signupForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio do formulário padrão
  
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
      var confirmPasswordInput = document.getElementById("confirmPassword");
  
      var email = emailInput.value;
      var password = passwordInput.value;
      var confirmPassword = confirmPasswordInput.value;
  
      // Validação do email
      var emailRegex = /@gmail\.com$|@hotmail\.com$|@yahoo\.com$|@outlook\.com$/;
      var isEmailValid = emailRegex.test(email);
  
      // Validação da senha
      var passwordRegex = /^(?=.*[A-Z]).{6,}$/;
      var isPasswordValid = passwordRegex.test(password);
  
      // Resetar mensagens de erro
      emailInput.setCustomValidity("");
      passwordInput.setCustomValidity("");
      confirmPasswordInput.setCustomValidity("");
  
      if (!isEmailValid) {
        emailInput.setCustomValidity("Por favor, use um email válido que termine em @gmail.com, @hotmail.com, @yahoo.com, ou @outlook.com");
        emailInput.reportValidity();
      } else if (!isPasswordValid) {
        passwordInput.setCustomValidity("A senha deve ter pelo menos 6 caracteres e incluir pelo menos uma letra maiúscula.");
        passwordInput.reportValidity();
      } else if (password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity("As senhas são diferentes. Por favor, digite a mesma senha.");
        confirmPasswordInput.reportValidity();
      } else {
        // Se as credenciais estiverem corretas, redirecione para outra página
        window.location.href = "detalhes_evento.html";
      }
    });
  });
