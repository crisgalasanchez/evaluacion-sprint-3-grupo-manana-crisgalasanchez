// Variables
var branch = document.querySelector('.branch');
var menuButton = branch.querySelector('.btn');
var menuClose = branch.querySelector('.close');

// Functions
function openNavMenu() {
	branch.classList.add('branch--menu-visible');
};

function closeNavMenu() {
	branch.classList.remove('branch--menu-visible');
};


// Magic
menuButton.addEventListener('click', openNavMenu);
menuClose.addEventListener('click', closeNavMenu);
