var link = document.querySelector(".button-brown");
var popup = document.querySelector(".search-form");
	
	popup.classList.add("modal-hide")

	link.addEventListener("click",function(evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-hide");
    })
