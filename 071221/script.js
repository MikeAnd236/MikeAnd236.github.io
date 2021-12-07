

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "tom" && password === "tom001") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    alert("Error username or password!!!");
  }
});
