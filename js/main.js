// Vmenu sale del lateral
var branch = document.querySelector('.branch');
var menuButton = branch.querySelector('.btn');
var menuClose = branch.querySelector('.close');

function openNavMenu() {
	branch.classList.add('branch--menu-visible');
};

function closeNavMenu() {
	branch.classList.remove('branch--menu-visible');
};

menuButton.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);

//subir al principio de la página cuando se hace click en la flecha arriba
var arribaButton = document.getElementById('arriba');
arribaButton.onclick = function(){
    window.scrollTo(0,0);
}
//AJAX
function requestReasons() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
	request.addEventListener('load', showReasons);

	function showReasons() {
	  var response = request.responseText;
		var responseJSON = JSON.parse(response);

		//TODO cargar los datos de la respuesta en el html ... a las propiedades de responseJSON se accede como todos los objetos.
		//Ejemplo: JSONresponse.reasons
	}

	request.send();
}
