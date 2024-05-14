document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

  // Validação do email
    var emailRegex = /@gmail\.com$|@hotmail\.com$|@yahoo\.com$|@outlook\.com$/;
    var isEmailValid = emailRegex.test(email);

    // Validação da senha
    var isPasswordValid = password.length > 5;

    // Verifica se o email e a senha são válidos
    if (isEmailValid && isPasswordValid) {
      // Se as credenciais estiverem corretas, redirecione para outra página
      window.location.href = "pagina_eventos.html";
    } else {
      // Caso contrário, exiba uma mensagem de erro
      alert("Credenciais inválidas. Por favor, tente novamente.");
    }
  });
});
