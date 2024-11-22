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

let from = document.querySelector("form")
let alerts = document.querySelector(".alerts")
let btnsuccess = document.querySelector(".btn-success")
let btnprimary = document.querySelector(".btn-primary")
let ad = document.querySelector("#validationCustom01")
let Telefon = document.querySelector("#validationCustom02")
let İsifadəçiadı = document.querySelector("#validationCustomUsername")
let Şifrə = document.querySelector("#validationCustom03")
let users = JSON.parse(localStorage.getItem("users")) || []
let btnwarning = document.querySelector(".btn-warning")
let modal = new bootstrap.Modal(document.querySelector(".modal"))
let modal2 = new bootstrap.Modal(document.querySelector(".modal2"))
btnwarning.addEventListener("click", function () {
  location.href = "/home/index.html"
})

btnprimary.addEventListener("click", function () {
  location.href = "/signIn/signIn.html"
})

from.addEventListener("submit", function (e) {
  e.preventDefault()
  if (from.checkValidity()) {
    let checkUser = users.some(function (e) {
      return e.İsifadəçiadı == İsifadəçiadı.value
    })
    if (checkUser) {
      modal2.show()
    }
    else{
      if (from.checkValidity()) {
        let user = {
          ad: ad.value,
          Telefon: Telefon.value,
          İsifadəçiadı: İsifadəçiadı.value,
          Şifrə: Şifrə.value,
        }
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        let element = `<div class="w-25 alert alert-success" role="alert">
          İstifadəçi uğurla yaradıldı
          </div>`;
        alerts.innerHTML += element;
        setTimeout(function () {
          location.href = "/signIn/signIn.html"
        }, 1000);
      }
      else {
        modal.show()
      }
    }
  }
  })