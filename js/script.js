var modalPopup = document.querySelector(".write_popup");
var mapPopup = document.querySelector(".map_popup");
var modalLink = document.querySelector(".link_write");
var writeName = modalPopup.querySelector("[name=name]");
var writeEmail = modalPopup.querySelector("[name=email]");
var modalClose = modalPopup.querySelector(".popup_close");
var form = modalPopup.querySelector("form");
var mapLink = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".popup_close");



modalLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.remove("none");
	modalPopup.classList.add("animation");
	writeName.focus();
	
});

modalClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalPopup.classList.add("none");
	modalPopup.classList.remove("animation");
	modalPopup.classList.remove("error");
});

form.addEventListener("submit", function(evt) {
	if(!writeName.value || !writeEmail.value) {
		evt.preventDefault();
		modalPopup.classList.add("error");
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();

		if(!modalPopup.classList.contains("none")) {
			modalPopup.classList.add("none");
		}

		if(!mapPopup.classList.contains("none")) {
			mapPopup.classList.add("none");
		}
	}

});

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("none");
	mapPopup.classList.add("animation");	
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("none");
	mapPopup.classList.remove("animation");
});


