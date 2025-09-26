const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // previne o envio normal do form

  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario: email, senha })
  })
  .then(res => res.json().then(data => ({ status: res.status, body: data })))
  .then(({ status, body }) => {
    if (status === 200) {
      alert(body.msg);
      window.location.href = "../index.html"; // redireciona para página principal
    } else {
      alert(body.msg);
    }
  })
  .catch(err => console.error(err));
});
