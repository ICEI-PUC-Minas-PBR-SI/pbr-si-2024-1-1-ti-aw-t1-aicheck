document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validação básica do email e senha
    if (email === "user@example.com" && password === "123456") {
      // Se as credenciais estiverem corretas, redirecione para outra página
      window.location.href = "index.html";
    } else {
      // Caso contrário, exiba uma mensagem de erro
      alert("Credenciais inválidas. Por favor, tente novamente.");
    }
  });
});
