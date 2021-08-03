const menu = document.querySelector('.nav-bar');
const btnON = document.querySelector('.menu-icon');
const btnOFF = document.querySelector('.menu-icon i');
const overlay = document.querySelector('.overlay');

btnON.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-bars')
}
});
overlay.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-bars')
}
});

/* Sections close when you touch this */
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');

section1.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-bars')
}
});
section2.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-bars')
}
});
section3.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-bars')
}
});