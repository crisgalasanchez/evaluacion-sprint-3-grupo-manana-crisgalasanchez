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
