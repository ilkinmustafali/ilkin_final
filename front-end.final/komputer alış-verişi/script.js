let komputerler = JSON.parse(localStorage.getItem("komputerler")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let user = JSON.parse(localStorage.getItem("user")) || null;
let modal = new bootstrap.Modal(document.querySelector(".modal"));
let cards = document.querySelector(".cards");
let modalcontent = document.querySelector(".modalBody");
let btnwarning = document.querySelector(".btn-warning");

btnwarning.addEventListener("click", function () {
    location.href = "/home/index.html";
});

Displaykomputerler(komputerler);

function Displaykomputerler(newkomputerler) {
    if (newkomputerler.length == 0) {
        cards.innerHTML = `<h1 class="text-center">Saytda masin paylasilmayib</h1>`;
    } else {
        cards.innerHTML = "";
        newkomputerler.forEach(komputer => {
            cards.innerHTML += `
            <div class="col-3">
            <div class="card" style="width:100%">
            <img src="${komputer.Şəkil}" class="card-img-top p-2">
            <div class="card-body">
            <p title="${komputer.ad}" class="card-title"><span class="bg-success-subtle">Ad:</span>${komputer.ad}</p>
            <p title="${komputer.təsvir}" class="card-text"><span class="bg-success-subtle">Təsvir:</span>${komputer.təsvir}</p>
            <p title="${komputer.qiymət} AZN" class="card-text"><span class="bg-success-subtle">Qiymət:</span>${komputer.qiymət} AZN</p>
            <p title="${komputer.yeni}" class="card-text"><span class="bg-success-subtle">Yeni:</span>${komputer.yeni}</p>
            <p title="${komputer.yeni}" class="card-text"><span class="bg-success-subtle">telefon:</span>${komputer.tel}</p>
            <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" onclick="openModal(${komputer.id})">Ətraflı</button>
                        </div>
                        </div>
                        </div>
                        </div>`;
        });
    }
}

function openModal(komputerId) {
    modal.show();
    let findedkomputer = komputerler.find(function (komputer) {
        return komputer.id == komputerId;
    });

    let element = `
    <div class="parent">
    <div class="row justify-content-center">
    <img src="${findedkomputer.Şəkil}" style="object-fit: cover;" alt="">
    </div>
    <div class="valideyn2">
    <p>Ad: ${findedkomputer.ad}</p>
    <p>Təsvir: ${findedkomputer.təsvir}</p>
    <p>Qiymət: ${findedkomputer.qiymət}AZN</p>
    <p>Telefon: ${findedkomputer.tel}</p>
    <p>Yeni: ${findedkomputer.yeni}</p>
    <p>Əməli yaddaş: ${findedkomputer.əməliyaddaş}GB</p>
    <p>CPU: ${findedkomputer.mərkəziprosessor}</p>
    <p>Daimi yaddaş: ${findedkomputer.daimiyaddaş}GB</p>
    <p>Daimi yaddaş tipi: ${findedkomputer.daimiyaddaştipi}</p>
    <p>Əməliyyat sistemi: ${findedkomputer.əməliyyatsistemi}</p>
    <p>Video kart: ${findedkomputer.videokart}GB</p>
    </div>
    </div>`;
    modalcontent.innerHTML = element;
}

let items = document.querySelectorAll(".list-group-item");
items.forEach(function (item) {
    item.addEventListener("click", function (e) {
        items.forEach(function (k) {
            k.classList.remove("text-primary");
        });
        e.target.classList.add("text-primary");
        let spinner = document.querySelector(".spiner")
        spinner.innerHTML = `<div class="spinner-border text-danger" role="status">`
        cards.innerHTML = ``
        setTimeout(function () {
            spinner.innerHTML = ``
            if (komputerler.length == 0) {
                cards.innerHTML = `<h1 class="d-flex justify-content-center">Saytda komputer paylasilmayib</h1>`;
            } else {
                if (e.target.innerHTML == "Hamsi") {
                    Displaykomputerler(komputerler);
                } else {
                    let filteredkomputerler = komputerler.filter(function (komputer) {
                        return komputer.kateqoriya.toLowerCase() == e.target.innerHTML.toLowerCase();
                    });
                    if (filteredkomputerler.length == 0) {
                        cards.innerHTML = `<h1 style="text-align:center">${e.target.innerHTML} kategoriyasinda komputer yoxdur</h1>`;
                    } else {
                        Displaykomputerler(filteredkomputerler);
                    }
                }
            }
        }, 500)
    });
});

let search = document.querySelector(".form-control");
search.addEventListener("input", function (e) {
    let filteredkomputerler = komputerler.filter(function (komputer) {
        return komputer.ad.toLowerCase().includes(e.target.value.toLowerCase()) || komputer.təsvir.toLowerCase().includes(e.target.value.toLowerCase()) || komputer.daimiyaddaştipi.toLowerCase().includes(e.target.value.toLowerCase())
    });
    Displaykomputerler(filteredkomputerler);
});