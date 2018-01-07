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
var moreReasons = document.getElementById('more-reasons');
moreReasons.addEventListener('click', requestReasons);

function createReason(element){
	var explainReasons = document.getElementById('explain-reasons');
	var divItemReason = document.createElement('div');
	divItemReason.className += " item-reason";
	var titleItemReason = document.createElement('h3');
	titleItemReason.className += " pretitle";
	titleItemReason.innerHTML=element.title;
	var paragraphItemReason = document.createElement('p');
	paragraphItemReason.className += " text-reasons";
	paragraphItemReason.innerHTML=element.description;

	divItemReason.appendChild(titleItemReason);
	divItemReason.appendChild(paragraphItemReason);
	explainReasons.appendChild(divItemReason);
}

function requestReasons() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
	request.addEventListener('load', showReasons);

	function showReasons() {
	  var response = request.responseText;
		var responseJSON = JSON.parse(response);

		//TODO cargar los datos de la respuesta en el html ... a las propiedades de responseJSON se accede como todos los objetos.
		//Ejemplo: JSONresponse.reasons

		var reasons = responseJSON.reasons;
		for(var i=0; i < reasons.length; i++){
			var reasonItem = reasons[i];
			createReason(reasonItem);
		}
	}

	request.send();
}
