let btnsuccess = document.querySelector(".btn-success")
btnsuccess.addEventListener("click", function () {
    location.href = "/signIn/signIn.html"
})

let btnwarning = document.querySelector(".btn-warning")
btnwarning.addEventListener("click", function () {
    location = "/komputer alış-verişi/index.html"
})

let user = JSON.parse(localStorage.getItem("user"))
let buttonlar = document.querySelector(".buttonlar")
let h1 = document.querySelector(".userName")

if (user) {
    let element = `
                <button type="button" class="btn btn-primary">komputerlərim</button>
                <button type="button" class="btn btn-warning">Komputer alış-verişinə başla</button>
            <button type="button" class="btn btn-danger">Hesabdan çıxmaq</button>`
    buttonlar.innerHTML = element
    let h1value = `
    İstifadəçi adı: ${user.İsifadəçiadı}
    `
    h1.innerHTML = h1value
    let btnprimary = document.querySelector(".btn-primary")
    let btndanger = document.querySelector(".btn-danger")
    btnprimary.addEventListener("click", function () {
        location = "/Mykamputer/index.html"
    })
    let btnwarning = document.querySelector(".btn-warning")
    btnwarning.addEventListener("click", function () {
        location = "/komputer alış-verişi/index.html"
    })

    btndanger.addEventListener("click", function () {
        localStorage.removeItem("user")
        location.reload()
    })
}
