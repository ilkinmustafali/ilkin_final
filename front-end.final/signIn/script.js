// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let btnwarning = document.querySelector(".btn-warning")
let btnprimary = document.querySelector(".btn-primary")
btnwarning.addEventListener("click", function () {
  location.href = "/home/index.html"
})

btnprimary.addEventListener("click", function () {
  location.href = "/signUP/signUP.html"
})

let from = document.querySelector("form")
let alerts = document.querySelector(".alerts")
let button = document.querySelector(".btn-success")
let İsifadəçiadı = document.querySelector("#validationCustomUsername")
let Şifrə = document.querySelector("#validationCustom03")
let users = JSON.parse(localStorage.getItem("users"))
let modal = new bootstrap.Modal(document.querySelector(".modal"))
let modal1 = new bootstrap.Modal(document.querySelector(".modal1"))
button.addEventListener("click", (e) => {
  e.preventDefault()
  let user = users.find((item) => {
    return item.İsifadəçiadı == İsifadəçiadı.value && item.Şifrə == Şifrə.value
  })
  if (from.checkValidity()) {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
      let element = `<div class="w-25 alert alert-success" role="alert">
      Məlumat doğrudur
      </div>`;
      alerts.innerHTML += element;
      setTimeout(function () {
        location.href = "/home/index.html"
      }, 1000);
    }
    else {
      modal1.show()
    }
  }
  else {
    modal.show()
  }
})