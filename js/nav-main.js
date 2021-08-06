const menu = document.querySelector('.menu');
const btnON = document.querySelector('.ON');
const btnOFF = document.querySelector('.OFF');
const overlay = document.querySelector('.overlay');

btnON.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});

btnOFF.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});
overlay.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
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
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});
section2.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});
section3.addEventListener('click' , () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.style.display='block';
	btnON.style.display='none';
}else{
	btnOFF.style.display='none';
	btnON.style.display='block';
}
});