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

let btnwarning = document.querySelector(".btn1")
btnwarning.addEventListener("click", function () {
    location.href = "/home/index.html"
})

let table = new DataTable('#myTable');
let form = document.querySelector("form")
let kateqoriya = document.querySelector("#validationCustom01")
let əməliyaddaş = document.querySelector("#validationCustom02")
let ad = document.querySelector("#validationCustom03")
let mərkəziprosessor = document.querySelector("#validationCustom04")
let qiymət = document.querySelector("#validationCustom05")
let daimiyaddaş = document.querySelector("#validationCustom06")
let təsvir = document.querySelector("#validationCustom07")
let daimiyaddaştipi = document.querySelector("#validationCustom08")
let yeni = document.querySelector("#validationCustom09")
let əməliyyatsistemi = document.querySelector("#validationCustom010")
let Şəkil = document.querySelector("#validationCustom011")
let videokart = document.querySelector("#validationCustom012")
let telefon
let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user"))
let modal3 = new bootstrap.Modal(document.querySelector(".modal3"))
let komputerler = JSON.parse(localStorage.getItem("komputerler")) || []
let alerts = document.querySelector(".alerts")
let bəli2 = document.querySelector(".bəli2")

function checkUser() {
    if (!user) {
        location.href = "../signIn/signIn.html"
    }
    else {
        let check = users.find(function (e) {
            return user.İsifadəçiadı == e.İsifadəçiadı && user.Şifrə == e.Şifrə
        })
        if (!check) {
            location.href = "../signIn/signIn.html"
        }
    }
}

checkUser()

function generateId() {
    return komputerler.length ? komputerler[komputerler.length - 1].id + 1 : 1;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        alerts.innerHTML = `<div class="w-25 d-flex  z-index-1000 alert alert-danger" role="alert">
boş saxlamayın
</div>`
        setTimeout(function () {
            alerts.innerHTML = ``
        }, 1000)
    } else {
        alerts.innerHTML = `<div class="alert alert-success" role="alert">
  əlavə edildi
</div>
`
        setTimeout(function () {
            alerts.innerHTML = ``
            let komputer = {
                id: generateId(),
                kateqoriya: kateqoriya.value,
                əməliyaddaş: əməliyaddaş.value,
                ad: ad.value,
                mərkəziprosessor: mərkəziprosessor.value,
                qiymət: qiymət.value,
                daimiyaddaş: daimiyaddaş.value,
                təsvir: təsvir.value,
                daimiyaddaştipi: daimiyaddaştipi.value,
                yeni: yeni.value,
                əməliyyatsistemi: əməliyyatsistemi.value,
                Şəkil: Şəkil.value,
                videokart: videokart.value,
                tel: user.Telefon,
                masininSahibi: user.İsifadəçiadı,
            };
            komputerler.push(komputer);
            localStorage.setItem("komputerler", JSON.stringify(komputerler));
            table.row.add([
                komputer.id,
                komputer.ad,
                `<img src="${komputer.Şəkil}" style="object-fit: cover; height: 100px; width: 100px;">`,
                komputer.qiymət,
                `<button onclick="removekomputer(${komputer.id})" class="btn btn-danger">Sil</button><button onclick="editkomputer(${komputer.id})" style="margin-left:10px" class="btn btn-info">Edit</button>`
            ]).draw();
            location.reload()
        }, 1000)
    }
});

let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", function () {
    let inputs = document.querySelectorAll("input")
    inputs.forEach(function (input) {
        input.value = ""
    })
})

function Displaykomputer() {
    let filteredkomputerler = komputerler.filter(function (komputer) {
        return komputer.masininSahibi == user.İsifadəçiadı;
    });
    filteredkomputerler.forEach(function (komputer) {
        if (komputer.id && komputer.ad && komputer.Şəkil && komputer.qiymət) {
            table.row.add([
                komputer.id,
                komputer.ad,
                `<img src="${komputer.Şəkil}" class="komputerinşəkli" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;object-fit: cover; height: 100px; width: 100px;">`,
                komputer.qiymət,
                `<button onclick="removekomputer(${komputer.id})" class="btn btn-danger">Sil</button><button onclick="editkomputer(${komputer.id})" style="margin-left:10px" class="btn btn-info">Redaktə</button>`
            ]).draw();
        }
    })
}

let bəli = document.querySelector(".bəli")
function removekomputer(komputerId) {
    modal3.show()
    bəli.addEventListener("click", function () {
        komputerler = komputerler.filter(function (item) {
            return item.id !== komputerId;
        });
        localStorage.setItem("komputerler", JSON.stringify(komputerler));
        const row = event.target.closest('tr');
        table.row(row).remove().draw();
        location.reload()
    })
}

Displaykomputer()
let editFrom = document.querySelector(".editfrom")
let editKateqoriya = document.querySelector("#editKateqoriya")
let editəməliyaddaş = document.querySelector("#editəməliyaddaş")
let editad = document.querySelector("#editad")
let editmərkəziprosessor = document.querySelector("#editmərkəziprosessor")
let editQiymət = document.querySelector("#editQiymət")
let editdaimiyaddaş = document.querySelector("#editdaimiyaddaş")
let edittəsvir = document.querySelector("#edittəsvir")
let editdaimiyaddaştipi = document.querySelector("#editdaimiyaddaştipi")
let edityeni = document.querySelector("#edityeni")
let editəməliyyatsistemi = document.querySelector("#editəməliyyatsistemi")
let editşəkil = document.querySelector("#editşəkil")
let editvideokart = document.querySelector("#editvideokart")
let editModal = new bootstrap.Modal(document.querySelector(".editmodal"))
let selectedkomputerId
let alerts2 = document.querySelector(".alerts2")

function editkomputer(komputerId) {
    let selectedkomputer = komputerler.find(function (komputer) {
        return komputer.id == komputerId
    })
    editModal.show()
    selectedkomputerId = komputerId
    editKateqoriya.value = selectedkomputer.kateqoriya
    editəməliyaddaş.value = selectedkomputer.əməliyaddaş
    editad.value = selectedkomputer.ad
    editmərkəziprosessor.value = selectedkomputer.mərkəziprosessor
    editQiymət.value = selectedkomputer.qiymət
    editdaimiyaddaş.value = selectedkomputer.daimiyaddaş
    edittəsvir.value = selectedkomputer.təsvir
    editdaimiyaddaştipi.value = selectedkomputer.daimiyaddaştipi
    edityeni.value = selectedkomputer.yeni
    editəməliyyatsistemi.value = selectedkomputer.əməliyyatsistemi
    editşəkil.value = selectedkomputer.Şəkil
    editvideokart.value = selectedkomputer.videokart
}

editFrom.addEventListener("submit", function (e) {
    e.preventDefault()
    if (editFrom.checkValidity()) {
        alerts2.innerHTML = `<div class="alert alert-success" role="alert">
        redak edildi
      </div>
      `
        setTimeout(function () {
            alerts2.innerHTML = ``
            komputerler = komputerler.map(function (komputer) {
                if (komputer.id == selectedkomputerId) {
                    return {
                        ...komputer,
                        kateqoriya: editKateqoriya.value,
                        əməliyaddaş: editəməliyaddaş.value,
                        ad: editad.value,
                        mərkəziprosessor: editmərkəziprosessor.value,
                        qiymət: editQiymət.value,
                        daimiyaddaş: editdaimiyaddaş.value,
                        təsvir: edittəsvir.value,
                        daimiyaddaştipi: editdaimiyaddaştipi.value,
                        yeni: edityeni.value,
                        əməliyyatsistemi: editəməliyyatsistemi.value,
                        Şəkil: editşəkil.value,
                        videokart: editvideokart.value
                    }
                }
                return komputer
            })
            localStorage.setItem("komputerler", JSON.stringify(komputerler))
            location.reload()
        }, 1000)
    }

    else {
        alerts2.innerHTML = `<div class="w-25 d-flex  z-index-1000 alert alert-danger" role="alert">
        boş saxlamayın
        </div>`
        setTimeout(function () {
            alerts2.innerHTML = ``
        }, 1000)
    }
})


let checkProfileImg = document.querySelector(".checkProfileImg")
let imgParent = document.querySelector(".imgparent")
Şəkil.addEventListener("input", (e) => {
    if (e.target.value == "") {
        imgParent.innerHTML = ""
    }
    else {
        imgParent.innerHTML = `<img class="checkProfileImg" style="width: 100px; height: 100px;" src="${e.target.value}" alt="Sekil linki yalnisdir">`
    }
})

let checkProfileeditImg = document.querySelector(".checkProfileeditImg")
let editimgParent = document.querySelector(".editimgparent")
editşəkil.addEventListener("input", (e) => {
    if (e.target.value == "") {
        editimgParent.innerHTML = ""
    }
    else {
        editimgParent.innerHTML = `<img class="checkProfileeditImg" style="width: 100px; height: 100px;" src="${e.target.value}" alt="Sekil linki yalnisdir">`
    }
})

let btn3 = document.querySelector(".btn3")
btn3.addEventListener("click", function () {
    let inputs = document.querySelectorAll("input")
    inputs.forEach(function (input) {
        input.value = ""
    })
})