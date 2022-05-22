let exampleModal = document.querySelector("#exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
	let button = event.relatedTarget;
	let value = button.getAttribute("data-bs-whatever");

	let img_charters = exampleModal.querySelector("img.card-img-top");
	img_charters.setAttribute("src", "img/build/" + value);
});
