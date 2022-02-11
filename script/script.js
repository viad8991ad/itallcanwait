let exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;
    let value = button.getAttribute('data-bs-whatever');

    let img_charters = exampleModal.querySelector('img.card-img-top');
    img_charters.setAttribute("src", "images/build/" + value)
})

// const data = [{
//     "name": "HuTao",
//     "russia_name": "Ху Тао",
//     "lvl": 90,
//     "weapon": {
//         "name": "Homa",
//         "lvl": 90,
//         "dublicate": 5
//     },
//     "artifact": {
//         "1": {
//             "name": "alaya",
//             "redkost": 5,
//             "lvl": 20,
//         },
//         "2": {
//             "name": "alaya",
//             "redkost": 5,
//             "lvl": 20,
//         },
//         "3": {
//             "name": "alaya",
//             "redkost": 5,
//             "lvl": 20,
//         },
//         "4": {
//             "name": "ansambl",
//             "redkost": 5,
//             "lvl": 20,
//         },
//         "5": {
//             "name": "alaya",
//             "redkost": 5,
//             "lvl": 20,
//         }
//     }
// }]

// let item = data.find(x => x.name === value);

// let modalTitle = exampleModal.querySelector('.modal-title');
// modalTitle.textContent = item.russia_name

// let img_weapon = exampleModal.querySelector('img.weapon-img');
// img_weapon.setAttribute("src", "images/" + item.weapon.name + ".png")
//
// let img_artefact_1 = exampleModal.querySelector('.artefact-img-1');
// img_artefact_1.setAttribute("src", "images/" + item.artifact["1"].name + "_1.png")
//
// let img_artefact_2 = exampleModal.querySelector('.artefact-img-2');
// img_artefact_2.setAttribute("src", "images/" + item.artifact["2"].name + "_2.png")
//
// let img_artefact_3 = exampleModal.querySelector('.artefact-img-3');
// img_artefact_3.setAttribute("src", "images/" + item.artifact["3"].name + "_3.png")
//
// let img_artefact_4 = exampleModal.querySelector('.artefact-img-4');
// img_artefact_4.setAttribute("src", "images/" + item.artifact["4"].name + "_4.png")
//
// let img_artefact_5 = exampleModal.querySelector('.artefact-img-5');
// img_artefact_5.setAttribute("src", "images/" + item.artifact["5"].name + "_5.png")
